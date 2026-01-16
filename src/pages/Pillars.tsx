import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, RefreshCw, Award, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovate",
    subtitle: "Think Forward",
    description:
      "We embrace cutting-edge technologies and modern practices to deliver innovative solutions that keep you ahead of the curve. Innovation isn't just about new technology—it's about finding smarter ways to solve real business problems.",
    points: [
      "Continuous exploration of emerging technologies",
      "Creative problem-solving approaches",
      "Modern development practices and tooling",
      "Research-driven decision making",
    ],
  },
  {
    icon: RefreshCw,
    title: "Transform",
    subtitle: "Evolve Continuously",
    description:
      "Digital transformation is a journey, not a destination. We help organizations evolve their technology landscape, processes, and culture to thrive in an ever-changing digital world.",
    points: [
      "Legacy system modernization",
      "Cloud migration and optimization",
      "Process automation and efficiency",
      "Agile methodology adoption",
    ],
  },
  {
    icon: Award,
    title: "Excel",
    subtitle: "Deliver Excellence",
    description:
      "Excellence is our standard. We combine deep technical expertise with rigorous quality practices to deliver solutions that not only meet expectations but exceed them.",
    points: [
      "Enterprise-grade quality standards",
      "Comprehensive testing and QA",
      "Performance optimization",
      "Security-first development",
    ],
  },
];

const Pillars = () => {
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
                Our <span className="text-gradient-primary">Pillars</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The foundational principles that guide everything we do at ITERAC. These pillars shape our approach to solving complex technology challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="space-y-16">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <pillar.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        {pillar.subtitle}
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {pillar.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <ul className="space-y-3">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div
                      className={`aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br ${
                        index === 0
                          ? "from-primary/10 to-accent/10"
                          : index === 1
                          ? "from-accent/10 to-primary/10"
                          : "from-secondary/10 to-primary/10"
                      } flex items-center justify-center`}
                    >
                      <pillar.icon className="w-32 h-32 text-primary/30" />
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
                Partner with Purpose
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Experience the ITERAC difference. Let's build something great together.
              </p>
              <Button
                asChild
                size="xl"
                className="mt-8 bg-background text-primary hover:bg-background/90"
              >
                <Link to="/contact">
                  Start a Conversation
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

export default Pillars;
