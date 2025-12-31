import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Heart, Award, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every interaction with empathy and genuine care for your well-being.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections that foster healing and mutual support among individuals.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering the highest quality mental health care through evidence-based practices.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Maintaining the highest ethical standards in all our professional relationships.",
  },
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & Clinical Director",
    bio: "20+ years experience in clinical psychology with a focus on trauma-informed care.",
  },
  {
    name: "Dr. James Chen",
    role: "Head of Group Therapy",
    bio: "Specialist in group dynamics and community mental health initiatives.",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Lead Psychologist",
    bio: "Expert in cognitive behavioral therapy and anxiety disorders.",
  },
  {
    name: "Michael Thompson",
    role: "Events Director",
    bio: "Passionate about creating meaningful mental health awareness programs.",
  },
];

const events = [
  "Panel Discussions with Expert Psychologists",
  "Professional Meetups for Mental Health Practitioners",
  "Educational Seminars and Workshops",
  "Open Circle Conversations",
  "Collaborative Book Writing Projects",
  "Virtual Gaming Nights for Community Building",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              About MindfulPath
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a dedicated team of mental health professionals committed to making quality psychological care accessible to everyone. Our mission is to destigmatize mental health and create a world where seeking help is celebrated.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At MindfulPath, we believe that mental wellness is fundamental to living a fulfilling life. Our mission is to provide compassionate, accessible, and evidence-based mental health services that empower individuals to overcome challenges and thrive.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Founded in 2018, we have grown from a small practice to a comprehensive mental health platform, serving thousands of individuals through therapy, community events, and educational resources.
              </p>
              <Link to="/services">
                <Button variant="hero">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of licensed professionals brings decades of combined experience in mental health care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border text-center hover:shadow-elevated transition-all hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-2xl text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Conduct */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Events We Conduct
              </h2>
              <p className="text-muted-foreground">
                We organize a variety of events to educate, connect, and support mental health awareness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:bg-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-foreground">{event}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/events">
                <Button variant="outline" size="lg">
                  View All Events
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
