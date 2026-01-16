import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            Let's discuss how ITERAC can help you modernize your technology stack and accelerate your digital transformation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-background text-primary hover:bg-background/90 shadow-lg"
            >
              <Link to="/contact">
                Book Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
