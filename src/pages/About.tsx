import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";

const About = () => {
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
                About <span className="text-gradient-primary">ITERAC</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We are a modern IT, Cloud, and DevOps consulting company focused on enabling digital transformation for enterprises through scalable engineering solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    ITERAC is positioned as a trusted partner for businesses seeking to modernize their IT infrastructure and embrace digital transformation. Our team of experienced engineers combines deep technical expertise with a genuine commitment to client success.
                  </p>
                  <p>
                    We help businesses modernize legacy IT systems, migrate to cloud, implement DevOps practices, and build scalable web and mobile applications that drive real business value.
                  </p>
                  <p>
                    Our approach is straightforward, non-hype, and solution-focused. We believe in transparent communication, honest timelines, and delivering results that exceed expectations.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-primary/5 rounded-2xl p-8 text-center">
                  <span className="text-4xl font-bold text-primary">15+</span>
                  <p className="mt-2 text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="bg-accent/5 rounded-2xl p-8 text-center">
                  <span className="text-4xl font-bold text-accent">100%</span>
                  <p className="mt-2 text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-8 text-center">
                  <span className="text-4xl font-bold text-secondary">2+</span>
                  <p className="mt-2 text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-8 text-center">
                  <span className="text-4xl font-bold text-primary">24/7</span>
                  <p className="mt-2 text-sm text-muted-foreground">Support Available</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl p-8 shadow-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted technology partner for enterprises seeking digital transformation, known for our reliability, innovation, and unwavering commitment to client success.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-xl p-8 shadow-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To enable enterprises to thrive in the digital era by providing reliable, adaptable, and customer-centric IT solutions that drive faster software delivery, reduced costs, and improved operational efficiency.
                </p>
              </motion.div>
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
                Let's Work Together
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Ready to start your digital transformation journey?
              </p>
              <Button
                asChild
                size="xl"
                className="mt-8 bg-background text-primary hover:bg-background/90"
              >
                <Link to="/contact">
                  Get in Touch
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

export default About;
