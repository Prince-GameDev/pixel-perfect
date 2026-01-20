import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">ITERAC</h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Innovating with Technology – Reliable, Adaptable, Customer-Centric IT Solutions for the Modern Enterprise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Our Pillars", path: "/pillars" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Applications",
                "Cloud & DevOps",
                "System Integrations",
              ].map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70">
                  info@iterac.com
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70">
                  +91 (98114) 28989
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70">
                  Technology Hub, Innovation District
                  Noida, 201301
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} ITERAC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="#"
                className="text-secondary-foreground/60 hover:text-accent text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-secondary-foreground/60 hover:text-accent text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
