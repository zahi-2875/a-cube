import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";
import { User, Users, BookOpen, Check, ArrowRight, Clock, Video, Shield } from "lucide-react";
import servicesBg from "@/assets/bg-services.jpg";

const services = [
  {
    id: "individual",
    icon: User,
    title: "1:1 Therapy Sessions",
    description: "Personalized one-on-one sessions with licensed psychologists tailored to your unique needs and goals.",
    features: [
      "50-minute sessions with licensed professionals",
      "Personalized treatment plans",
      "Flexible scheduling options",
      "In-person and virtual sessions available",
      "Confidential and judgment-free environment",
      "Progress tracking and goal setting",
    ],
    price: "From $120/session",
    popular: true,
  },
  {
    id: "group",
    icon: Users,
    title: "Group Therapy",
    description: "Connect with others facing similar challenges in a supportive, professionally-led group setting.",
    features: [
      "Small groups of 6-10 participants",
      "Topic-focused sessions",
      "Facilitated by experienced therapists",
      "Weekly or bi-weekly meetings",
      "Build community and support networks",
      "More affordable than individual therapy",
    ],
    price: "From $45/session",
    popular: false,
  },
  {
    id: "articles",
    icon: BookOpen,
    title: "Premium Articles",
    description: "Exclusive access to in-depth articles and resources from our expert psychologists and event speakers.",
    features: [
      "Expert-written mental health content",
      "Event summaries and key takeaways",
      "Downloadable worksheets and guides",
      "Video recordings from past events",
      "Monthly newsletter with insights",
      "Access to resource library",
    ],
    price: "$9.99/month",
    popular: false,
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your lifestyle with evening and weekend availability.",
  },
  {
    icon: Video,
    title: "Virtual Options",
    description: "Connect from anywhere with secure video therapy sessions.",
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Your confidentiality is our top priority with HIPAA-compliant practices.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0s", animationFillMode: "forwards" }}>
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              We offer a range of mental health services designed to support you at every stage of your wellness journey. Find the right fit for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 100}>
                <div
                  className={`relative p-8 rounded-2xl border card-hover h-full ${
                    service.popular
                      ? "bg-primary/5 border-primary"
                      : "bg-card border-border"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-semibold text-foreground">
                        {service.price}
                      </span>
                    </div>
                    <Button
                      variant={service.popular ? "hero" : "outline"}
                      className="w-full"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Why Choose A-Cube?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We prioritize your comfort and convenience to make therapy accessible and effective.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a free 15-minute consultation with our team to discuss your needs and find the perfect fit.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;