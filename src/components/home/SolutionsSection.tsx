import { motion } from "framer-motion";
import { Building2, Rocket, ArrowUpRight, Zap } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "SMEs Cloud Adoption",
    description: "Help small and medium enterprises migrate to cloud infrastructure efficiently and cost-effectively.",
    color: "bg-primary",
  },
  {
    icon: ArrowUpRight,
    title: "Enterprise Modernization",
    description: "Transform legacy systems into modern, scalable architectures that drive business value.",
    color: "bg-secondary",
  },
  {
    icon: Rocket,
    title: "SaaS Scaling",
    description: "Scale your SaaS platform with robust infrastructure, optimized performance, and reliability.",
    color: "bg-accent",
  },
  {
    icon: Zap,
    title: "Startup MVP",
    description: "Launch your product faster with lean, agile development and cloud-native architecture.",
    color: "bg-primary",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Solutions We Deliver
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tailored solutions for businesses at every stage of their digital journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${solution.color} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2`} />
              <div className={`w-14 h-14 rounded-xl ${solution.color} flex items-center justify-center mb-5`}>
                <solution.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
