import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Calendar, Megaphone, ArrowRight, CheckCircle } from "lucide-react";

const opportunities = [
  {
    icon: Calendar,
    title: "Event Support",
    description: "Help organize and run our mental health events, workshops, and community gatherings.",
  },
  {
    icon: Megaphone,
    title: "Outreach",
    description: "Spread awareness about mental health and our services in your community.",
  },
  {
    icon: Users,
    title: "Peer Support",
    description: "Provide peer support in our Open Circle Conversations and community forums.",
  },
  {
    icon: Heart,
    title: "Administrative",
    description: "Assist with administrative tasks, content creation, and social media management.",
  },
];

const benefits = [
  "Make a meaningful difference in your community",
  "Gain experience in mental health advocacy",
  "Connect with like-minded individuals",
  "Receive training and professional development",
  "Flexible commitment hours",
  "Certificate of volunteer service",
];

const Volunteer = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Volunteer With Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our community of compassionate volunteers and help us make mental health support accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect way to contribute based on your skills and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-elevated transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <opportunity.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{opportunity.title}</h3>
                <p className="text-sm text-muted-foreground">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Application */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Benefits */}
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Why Volunteer?
              </h2>
              <p className="text-muted-foreground mb-8">
                Volunteering with MindfulPath is a rewarding experience that allows you to contribute to mental health awareness while developing valuable skills.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Form */}
            <div className="p-8 rounded-2xl bg-background border border-border shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Apply to Volunteer
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (234) 567-890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <select
                    id="interest"
                    className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select an area</option>
                    <option value="events">Event Support</option>
                    <option value="outreach">Outreach</option>
                    <option value="peer">Peer Support</option>
                    <option value="admin">Administrative</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to volunteer?</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about yourself and your motivation..."
                    rows={4}
                  />
                </div>

                <Button variant="hero" className="w-full" type="submit">
                  Submit Application
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
