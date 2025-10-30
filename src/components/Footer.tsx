import { Link } from "wouter";
import { Linkedin, Instagram, Youtube, Twitter, Mail, Phone, MapPin, Shield, Award, CreditCard, Lock } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/contact", label: "Contact" },
    { href: "/quote", label: "Corporate Training" },
  ];

  const legalLinks = [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/cancellations", label: "Cancellation & Refund" },
    { href: "/cookies", label: "Cookie Policy" },
  ];

  const courses = [
    "MERN Stack Development",
    "Data Science & AI",
    "Cyber Security",
    "DevOps & Cloud",
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1E1E2F] to-[#0A0A0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" data-testid="link-home">
              <button className="flex items-center hover-elevate active-elevate-2 px-[-1px] py-2 rounded-md transition-all">
                <img
                  src="/white-bg.png"
                  alt="IntelleQacademy Logo"
                  className="h-9 mb-5 pl-4 object-contain"
                />
              </button>
            </Link>

            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Empowering future tech leaders with real-world skills through hands-on training and expert mentorship.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="social-linkedin">
                <button className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all hover-elevate active-elevate-2">
                  <Linkedin className="w-5 h-5" />
                </button>
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" data-testid="social-instagram">
                <button className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all hover-elevate active-elevate-2">
                  <Instagram className="w-5 h-5" />
                </button>
              </a>

              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" data-testid="social-youtube">
                <button className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all hover-elevate active-elevate-2">
                  <Youtube className="w-5 h-5" />
                </button>
              </a>

              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" data-testid="social-twitter">
                <button className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all hover-elevate active-elevate-2">
                  <Twitter className="w-5 h-5" />
                </button>
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <button className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group w-full text-left" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                      {link.label}
                    </button>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/career">
                  <button className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group w-full text-left" data-testid="footer-link-career">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                    Career
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <Link href="/courses">
                    <button className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group w-full text-left" data-testid={`footer-course-${course.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                      {course}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <button className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group w-full text-left" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                      {link.label}
                    </button>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy">
                  <button className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group w-full text-left" data-testid="footer-link-privacy">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                    Privacy Policy
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/70 group hover:text-white/90 transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>123 Tech Street, Bengaluru, Karnataka, India</span>
              </div>
              <a href="mailto:support@intelleqacademy.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>support@intelleqacademy.com</span>
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </a>
            </div>
          </div>
        </div>

        {/* Certifications & Security Badges */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Certifications */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:gap-6 w-full justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <Award className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="text-xs text-white/50">Certified By</div>
                  <div className="text-sm font-semibold text-white">ISO 9001:2015</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 ml-2 bg-white/5 rounded-lg border border-white/10">
                <Shield className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <div className="text-xs text-white/50">Verified</div>
                  <div className="text-sm font-semibold text-white">Trusted Partner</div>
                </div>
              </div>
            </div>

            {/* Payment Security */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:gap-6 w-full justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <Lock className="w-5 h-5 text-green-400" />
                <div className="text-left">
                  <div className="text-xs text-white/50">Secure</div>
                  <div className="text-sm font-semibold text-white">SSL Encrypted</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 ml-2 bg-white/5 rounded-lg border border-white/10">
                <CreditCard className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-xs text-white/50">Payment</div>
                  <div className="text-sm font-semibold text-white">100% Secure</div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          {/* Copyright and Trusted Text */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} IntelleQacademy. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs">Trusted by 5000+ Students Worldwide</span>
            </div>
          </div>

          {/* Trusted/Payment Logos */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <img src="https://res.cloudinary.com/df07zpsev/image/upload/v1761659626/ftr-razorpay_savzrm.png" alt="Razorpay" className="h-8 object-contain" />
            <img src="https://res.cloudinary.com/df07zpsev/image/upload/v1761659626/ftr-easebuzz_vlbo8c.png" alt="Easebuzz" className="h-8 object-contain" />
            <img src="https://res.cloudinary.com/df07zpsev/image/upload/v1761659626/Frame-1686563909_kc6bwv.png" alt="Skill India" className="h-8 object-contain" />
            <img src="https://res.cloudinary.com/df07zpsev/image/upload/v1761659626/Frame-1686563910_gukfzv.png" alt="Microsoft" className="h-8 object-contain" />
            <img src="https://res.cloudinary.com/df07zpsev/image/upload/v1761659626/Frame-1686563909_kc6bwv.png" alt="NSDC" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
