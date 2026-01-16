import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Layers,
  Server,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Software Development",
    description:
      "Modern, scalable web applications built with cutting-edge technologies. From enterprise portals to customer-facing platforms.",
    features: [
      "React, Angular, Vue.js frontends",
      "Node.js, Python, Go backends",
      "RESTful & GraphQL APIs",
      "Microservices architecture",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android.",
    features: [
      "React Native & Flutter",
      "iOS & Android native",
      "Offline-first architecture",
      "Push notifications & analytics",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud migration, infrastructure automation, and continuous delivery pipelines for faster, more reliable deployments.",
    features: [
      "AWS, Azure, GCP expertise",
      "Kubernetes & Docker",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
    ],
  },
  {
    icon: Layers,
    title: "System Integrations",
    description:
      "Seamless integration of enterprise systems, APIs, and third-party services to create unified business workflows.",
    features: [
      "API development & management",
      "ERP & CRM integrations",
      "Data synchronization",
      "Legacy system connectivity",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure Modernization",
    description:
      "Transform legacy infrastructure into modern, cloud-native architectures that reduce costs and improve agility.",
    features: [
      "Legacy system assessment",
      "Migration planning & execution",
      "Performance optimization",
      "Security hardening",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-hero">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Our <span className="text-gradient-primary">Services</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Comprehensive IT solutions across the full technology stack to power your digital transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-primary">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Let's discuss which services are right for your business.
              </p>
              <Button
                asChild
                size="xl"
                className="mt-8 bg-background text-primary hover:bg-background/90"
              >
                <Link to="/contact">
                  Book Consultation
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
