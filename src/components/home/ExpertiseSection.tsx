import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, Layers } from "lucide-react";

const expertiseAreas = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, scalable web applications built with the latest technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud migration, infrastructure automation, and continuous delivery pipelines.",
  },
  {
    icon: Layers,
    title: "System Integrations",
    description: "Seamless integration of enterprise systems, APIs, and third-party services.",
  },
];

const ExpertiseSection = () => {
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
            Our Expertise
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive solutions across the full technology stack to power your digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
