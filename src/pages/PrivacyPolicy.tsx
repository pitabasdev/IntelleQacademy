import { Card, CardContent } from "@/components/ui/card";
import { GradientBackground } from "@/components/GradientBackground";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and address provided during registration or course enrollment.",
        "Payment Information: Credit card details, billing address, and transaction history (securely processed through our payment partners).",
        "Technical Information: IP address, browser type, device information, and cookies for website functionality and analytics.",
        "Educational Data: Course progress, assignments, test scores, and certificates earned.",
        "Communication Data: Emails, messages, and feedback you share with our support team or instructors."
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Course Delivery: To provide access to courses, track progress, issue certificates, and facilitate learning.",
        "Communication: To send course updates, promotional offers, newsletters, and important announcements.",
        "Payment Processing: To process enrollment fees, refunds, and maintain transaction records.",
        "Improvement: To analyze user behavior, improve our platform, and develop new courses.",
        "Legal Compliance: To comply with applicable laws, regulations, and respond to legal requests.",
        "Security: To protect against fraud, unauthorized access, and ensure platform security."
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "Service Providers: We share data with trusted third-party services (payment processors, email providers, analytics tools) who help us operate our platform.",
        "Educational Partners: Course completion data may be shared with certification partners and accrediting bodies.",
        "Hiring Partners: With your consent, we share your profile with our placement partners for job opportunities.",
        "Legal Requirements: We may disclose information when required by law, court order, or government request.",
        "Business Transfers: In case of merger, acquisition, or sale, your data may be transferred to the new entity.",
        "Never Sold: We never sell your personal information to third parties for marketing purposes."
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights and Choices",
      content: [
        "Access: Request a copy of all personal data we hold about you.",
        "Correction: Update or correct inaccurate information in your account.",
        "Deletion: Request deletion of your account and associated data (subject to legal retention requirements).",
        "Opt-Out: Unsubscribe from marketing emails using the link in any promotional message.",
        "Data Portability: Request your data in a machine-readable format.",
        "Withdraw Consent: Opt out of non-essential data processing activities.",
        "Contact: Email support@intelleqacademy.com to exercise any of these rights."
      ]
    },
    {
      icon: FileText,
      title: "Data Security",
      content: [
        "Encryption: All sensitive data is encrypted in transit (SSL/TLS) and at rest (AES-256).",
        "Access Control: Strict access controls ensure only authorized personnel can access your data.",
        "Regular Audits: We conduct security audits and vulnerability assessments regularly.",
        "Secure Storage: Data is stored on secure servers with robust backup and disaster recovery systems.",
        "Payment Security: We are PCI-DSS compliant and never store complete credit card information.",
        "Incident Response: We have procedures to detect, respond to, and notify users of any data breaches."
      ]
    },
    {
      icon: AlertCircle,
      title: "Cookies and Tracking",
      content: [
        "Essential Cookies: Required for basic functionality like login sessions and security.",
        "Analytics Cookies: Help us understand user behavior and improve the platform (Google Analytics).",
        "Marketing Cookies: Track effectiveness of our advertising campaigns (can be disabled).",
        "Third-Party Cookies: Some embedded content may place cookies (YouTube videos, payment processors).",
        "Cookie Control: You can manage cookie preferences through your browser settings.",
        "Do Not Track: We respect Do Not Track signals where technically feasible."
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <GradientBackground variant="hero" className="py-16 mt-[-95px] sm:mt-[-110px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white space-y-4"
          >
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-white/70">
              Last Updated: December 2024
            </p>
          </motion.div>
        </div>
      </GradientBackground>

      <section className="py-16 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-elevate">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                        <ul className="space-y-3">
                          {section.content.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground leading-relaxed">
                              <span className="font-semibold text-foreground">
                                {item.split(':')[0]}:
                              </span>
                              {item.split(':')[1] && ` ${item.split(':').slice(1).join(':')}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    If you have any questions or concerns about this privacy policy, please contact us:
                  </p>
                  <div className="space-y-2 mt-4">
                    <p className="font-semibold text-foreground">
                      Email: support@intelleqacademy.com
                    </p>
                    <p className="font-semibold text-foreground">
                      Phone: +91 8217668872
                    </p>
                    <p className="font-semibold text-foreground">
                      WhatsApp: +91 8217668872
                    </p>
                    <p className="font-semibold text-foreground">
                      Address: Bengaluru, Karnataka, India
                    </p>
                    <p className="font-semibold text-foreground">
                      Website: https://intelleqacademy.com/
                    </p>
                  </div>
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm">
                      <strong>Support Hours:</strong> Monday - Sunday, 9:00 AM - 9:00 PM (IST)
                    </p>
                  </div>
                  <p className="text-sm mt-4">
                    We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}