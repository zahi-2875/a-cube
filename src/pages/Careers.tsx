import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Heart, Users, Clock, Award, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Set your own hours and work-life balance.",
  },
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Make a real difference in people's lives.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Join a team of passionate professionals.",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Continuous learning and development opportunities.",
  },
];

const requirements = [
  "Licensed psychologist (PhD, PsyD, or equivalent)",
  "Minimum 2 years of clinical experience",
  "Valid state licensure in good standing",
  "Experience with telehealth platforms preferred",
  "Strong communication and empathy skills",
  "Commitment to ethical practice",
];

const openPositions = [
  {
    title: "Clinical Psychologist",
    type: "Full-time / Part-time",
    location: "Remote / Hybrid",
    description: "Join our team to provide individual therapy sessions to clients seeking mental health support.",
  },
  {
    title: "Group Therapy Facilitator",
    type: "Part-time",
    location: "Remote",
    description: "Lead group therapy sessions focused on various mental health topics.",
  },
  {
    title: "Child & Adolescent Specialist",
    type: "Full-time",
    location: "San Francisco, CA",
    description: "Specialize in providing therapy to young clients and their families.",
  },
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Are you a passionate mental health professional looking to make a difference? Join MindfulPath and help us transform lives through compassionate care.
            </p>
            <Link to="/psychologist-portal">
              <Button variant="hero" size="lg">
                Psychologist Portal
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We value our team members and provide an environment where you can thrive professionally and personally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-soft transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                What We Look For
              </h2>
              <p className="text-muted-foreground mb-8">
                We seek dedicated professionals who share our commitment to providing exceptional mental health care.
              </p>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Ready to Apply?
              </h3>
              <p className="text-muted-foreground mb-6">
                If you meet these qualifications and are passionate about mental health care, we'd love to hear from you.
              </p>
              <Link to="/psychologist-portal">
                <Button variant="hero" className="w-full">
                  Access Psychologist Portal
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current openings and find the role that's right for you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-elevated transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {position.title}
                    </h3>
                    <p className="text-sm text-primary mb-2">
                      {position.type} • {position.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {position.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="flex-shrink-0">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
