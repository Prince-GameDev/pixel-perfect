import { motion } from "framer-motion";
import { Shield, RefreshCw, Users, Lightbulb, TrendingUp, Eye } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Dependable solutions you can count on, backed by enterprise-grade security.",
  },
  {
    icon: RefreshCw,
    title: "Adaptability",
    description: "Flexible approaches that evolve with your business needs and market changes.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Your success is our priority. We listen, understand, and deliver tailored solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge technologies and modern practices to keep you ahead of the curve.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Solutions designed to grow with your business from startup to enterprise.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication, honest timelines, and no hidden surprises.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why Choose ITERAC
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine technical excellence with a genuine commitment to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <reason.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
