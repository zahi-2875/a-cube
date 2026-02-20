import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Trash2, Save, RefreshCw, Shield } from "lucide-react";
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

const CommunityAdmin = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState({ name: "", occupation: "", message: "" });
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("community_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setPosts(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const { error } = await supabase.from("community_posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Failed to delete", variant: "destructive" });
    } else {
      setPosts((prev) => prev.filter((p) => p.id !== id));
      toast({ title: "Post deleted" });
    }
  };

  const startEdit = (post: CommunityPost) => {
    setEditingId(post.id);
    setEditData({ name: post.name, occupation: post.occupation, message: post.message });
  };

  const handleSave = async (id: string) => {
    const { error } = await supabase
      .from("community_posts")
      .update({ name: editData.name, occupation: editData.occupation, message: editData.message })
      .eq("id", id);

    if (error) {
      toast({ title: "Failed to save", variant: "destructive" });
    } else {
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...editData } : p))
      );
      setEditingId(null);
      toast({ title: "Post updated" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <h1 className="font-display text-2xl font-bold text-foreground">
              Community Admin
            </h1>
          </div>
          <Button variant="outline" size="sm" onClick={fetchPosts}>
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          {posts.length} total posts
        </p>

        {loading ? (
          <p className="text-muted-foreground text-center py-12">Loading...</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                {editingId === post.id ? (
                  <div className="space-y-3">
                    <Input
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      placeholder="Name"
                    />
                    <Input
                      value={editData.occupation}
                      onChange={(e) => setEditData({ ...editData, occupation: e.target.value })}
                      placeholder="Occupation"
                    />
                    <Textarea
                      value={editData.message}
                      onChange={(e) => setEditData({ ...editData, message: e.target.value })}
                      rows={3}
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleSave(post.id)}>
                        <Save className="w-4 h-4" /> Save
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setEditingId(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-foreground">{post.name}</p>
                        <p className="text-sm text-muted-foreground">{post.occupation}</p>
                      </div>
                      <p className="text-xs text-muted-foreground whitespace-nowrap">
                        {format(new Date(post.created_at), "dd MMM yyyy, h:mm a")} · ❤️ {post.likes}
                      </p>
                    </div>
                    <p className="mt-2 text-foreground/90 text-sm whitespace-pre-line break-words">
                      {post.message}
                    </p>
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => startEdit(post)}>
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="w-4 h-4" /> Delete
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityAdmin;
