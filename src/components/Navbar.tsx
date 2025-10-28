import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/quote", label: "Corporate Training" },
  ];

  return (
    <nav
      className={`fixed top-[44px] left-0 right-0 z-50 transition-all duration-300
    ${scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"}
    pt-4 md:pt-0
  `}
      style={{ marginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <button className="flex items-center hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all">
              <img
                src="/1.png"
                alt="IntelleQacademy Logo"
                className="h-8 object-contain"
              />
            </button>
          </Link>



          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all hover-elevate active-elevate-2 ${location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                  data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <Link href="/courses">
              <Button variant="default" className="ml-2" data-testid="button-enroll">
                Enroll Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover-elevate active-elevate-2"
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all hover-elevate active-elevate-2 ${location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground"
                      }`}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
              <Link href="/courses">
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-enroll"
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
