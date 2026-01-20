import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Get in <span className="text-gradient-primary">Touch</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Ready to start your digital transformation journey? We'd love to hear about your project and discuss how ITERAC can help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Request a Consultation
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                          });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone (optional)
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your project or requirements..."
                          rows={5}
                          className="w-full resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Request Consultation
                            <Send size={18} />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Have a question or want to learn more about our services? Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>

                      <div className="flex flex-col gap-1">
                      <a
                        href="mailto:info@iterac.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Business: info@iterac.com
                      </a>

                      <a
                        href="mailto:hr@iterac.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Careers: hr@iterac.com
                      </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+919811428989"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 (98114) 28989
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        Location
                      </h3>
                      <p className="text-muted-foreground">
                        Technology Hub, Innovation District
                        <br />
                        Noida, 201301
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-surface rounded-xl p-6 border border-border">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
