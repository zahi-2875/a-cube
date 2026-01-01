import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Video, Clock, User, Mail, Lock, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Session Scheduling",
    description: "Manage your availability and schedule therapy sessions with clients.",
  },
  {
    icon: Video,
    title: "Online Meetings",
    description: "Conduct secure video therapy sessions directly from the platform.",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Track your hours, sessions, and client interactions efficiently.",
  },
  {
    icon: User,
    title: "Client Management",
    description: "Access client profiles, notes, and treatment progress.",
  },
];

const PsychologistPortal = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Layout showFooter={false}>
      <div className="min-h-[calc(100vh-5rem)] flex">
        {/* Left Panel - Features */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          
          <div className="max-w-md relative z-10">
            <h2 className="font-display text-3xl font-semibold text-primary-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0s", animationFillMode: "forwards" }}>
              Psychologist Portal
            </h2>
            <p className="text-primary-foreground/80 mb-12 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Access your personalized dashboard to manage sessions, connect with clients, and grow your practice with A-Cube.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-up opacity-0"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <div className="text-center mb-8">
              <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                {isLogin ? "Welcome Back" : "Create Your Profile"}
              </h1>
              <p className="text-muted-foreground">
                {isLogin
                  ? "Sign in to access your psychologist dashboard"
                  : "Register to join our team of mental health professionals"}
              </p>
            </div>

            <form className="space-y-5">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="transition-all duration-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="transition-all duration-200" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="you@example.com" className="pl-10 transition-all duration-200" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-10 transition-all duration-200" />
                </div>
              </div>

              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="license">License Number</Label>
                    <Input id="license" placeholder="PSY-XXXXXX" className="transition-all duration-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Specialty</Label>
                    <Input id="specialty" placeholder="e.g., Cognitive Behavioral Therapy" className="transition-all duration-200" />
                  </div>
                </>
              )}

              <Button variant="hero" className="w-full" type="submit">
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:underline transition-colors duration-200"
              >
                {isLogin
                  ? "Don't have an account? Register here"
                  : "Already have an account? Sign in"}
              </button>
            </div>

            {isLogin && (
              <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border animate-fade-in">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Demo Access:</strong> This is a preview of the psychologist portal. 
                  Full functionality requires backend integration.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PsychologistPortal;