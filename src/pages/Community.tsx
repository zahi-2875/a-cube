import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, MessageCircle, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface CommunityPost {
  id: string;
  name: string;
  occupation: string;
  message: string;
  likes: number;
  created_at: string;
}

const Community = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  // Load liked posts from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("community_liked_posts");
    if (stored) {
      setLikedPosts(new Set(JSON.parse(stored)));
    }
  }, []);

  // Fetch posts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("community_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedOccupation = occupation.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedOccupation || !trimmedMessage) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    if (trimmedName.length > 100 || trimmedOccupation.length > 100 || trimmedMessage.length > 1000) {
      toast({ title: "Input too long", description: "Please keep your inputs within limits.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const { data, error } = await supabase
      .from("community_posts")
      .insert({ name: trimmedName, occupation: trimmedOccupation, message: trimmedMessage })
      .select()
      .single();

    setSubmitting(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
      return;
    }

    if (data) {
      setPosts((prev) => [data, ...prev]);
      setName("");
      setOccupation("");
      setMessage("");
      toast({ title: "Your thought has been shared! 💛" });
    }
  };

  const handleLike = async (postId: string) => {
    if (likedPosts.has(postId)) return;

    const newLiked = new Set(likedPosts);
    newLiked.add(postId);
    setLikedPosts(newLiked);
    localStorage.setItem("community_liked_posts", JSON.stringify([...newLiked]));

    // Optimistic update
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );

    const post = posts.find((p) => p.id === postId);
    if (post) {
      await supabase
        .from("community_posts")
        .update({ likes: post.likes + 1 })
        .eq("id", postId);
    }
  };

  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), "dd MMM yyyy, h:mm a");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Community Space
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Share Your Thoughts
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              This is a safe space. Be kind. Be respectful.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Post Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-5"
            >
              <h2 className="font-display text-xl font-semibold text-foreground">
                What's on your mind?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occupation">What you do *</Label>
                  <Input
                    id="occupation"
                    placeholder="e.g., Student, Therapist"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    maxLength={100}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your thought *</Label>
                <Textarea
                  id="message"
                  placeholder="Share something meaningful..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={1000}
                  rows={4}
                  required
                />
                <p className="text-xs text-muted-foreground text-right">
                  {message.length}/1000
                </p>
              </div>
              <Button type="submit" variant="hero" className="w-full" disabled={submitting}>
                <Send className="w-4 h-4" />
                {submitting ? "Sharing..." : "Share Your Thought"}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Community Feed */}
      <section className="py-8 md:py-12 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            Community Feed
          </h2>

          {posts.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <p className="text-lg">No thoughts shared yet. Be the first!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post, index) => (
                <ScrollReveal key={post.id}>
                  <div
                    className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-soft card-hover"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-semibold text-foreground text-base">
                          {post.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{post.occupation}</p>
                      </div>
                      <p className="text-xs text-muted-foreground whitespace-nowrap pt-1">
                        {formatDate(post.created_at)}
                      </p>
                    </div>
                    <p className="mt-3 text-foreground/90 leading-relaxed whitespace-pre-line break-words">
                      {post.message}
                    </p>
                    <div className="mt-4 flex items-center">
                      <button
                        onClick={() => handleLike(post.id)}
                        disabled={likedPosts.has(post.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                          likedPosts.has(post.id)
                            ? "bg-primary/10 text-primary cursor-default"
                            : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${likedPosts.has(post.id) ? "fill-primary" : ""}`}
                        />
                        {post.likes}
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Community;
