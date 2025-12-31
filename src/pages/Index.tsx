import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, BookOpen, Shield, Sparkles, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Users,
    title: "1:1 Therapy",
    description: "Personal sessions with licensed psychologists tailored to your needs.",
  },
  {
    icon: Calendar,
    title: "Group Sessions",
    description: "Connect with others in guided group therapy environments.",
  },
  {
    icon: BookOpen,
    title: "Premium Articles",
    description: "Expert insights and resources from our mental health events.",
  },
  {
    icon: Shield,
    title: "Safe Space",
    description: "Confidential and judgment-free support for your journey.",
  },
];

const stats = [
  { value: "5,000+", label: "Lives Impacted" },
  { value: "50+", label: "Expert Psychologists" },
  { value: "200+", label: "Events Hosted" },
  { value: "98%", label: "Client Satisfaction" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-hero" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/60 text-accent-foreground text-sm font-medium mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              Compassionate Mental Health Care
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Your Journey to
              <span className="text-primary block mt-2">Mental Wellness</span>
              Starts Here
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We provide compassionate therapy, transformative events, and a supportive community to help you thrive. Take the first step towards a healthier mind.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/services">
                <Button variant="hero" size="lg">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="outline" size="lg">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute right-10 top-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute right-1/4 bottom-1/4 w-48 h-48 rounded-full bg-accent/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-semibold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              How We Support You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to mental wellness combines professional therapy, community support, and educational resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands who have found support, growth, and healing with MindfulPath. Your well-being matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services">
              <Button variant="secondary" size="lg">
                Book a Session
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
