import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { GradientBackground } from "@/components/GradientBackground";
import { GlassCard } from "@/components/GlassCard";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { motion } from "framer-motion";
import { Building, Users, Award, Target, Briefcase, CheckCircle2, Loader2, Video, BookOpen, TrendingUp, Shield, Zap, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertQuoteRequestSchema, type InsertQuoteRequest } from "../shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import corporateImage from "../assets/generated_images/Corporate_training_meeting_fd7949ee.png";

export default function GetQuote() {
  const { toast } = useToast();
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const form = useForm<InsertQuoteRequest>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      organizationName: "",
      contactPersonName: "",
      email: "",
      phone: "",
      trainingDomain: "",
      participants: 0,
      message: "",
    },
  });

  const quoteMutation = useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      return await apiRequest("POST", "/api/quote", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "Thank you for your interest. Our team will contact you within 24 hours with a custom quote.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertQuoteRequest) => {
    quoteMutation.mutate(data);
  };

  const stats = [
    { icon: Building, value: "100+", label: "Companies Trained" },
    { icon: Users, value: "5000+", label: "Professionals Upskilled" },
    { icon: Award, value: "20+", label: "Expert Mentors" },
    { icon: Target, value: "50+", label: "Custom Modules" },
  ];

  const benefits = [
    "Customized curriculum tailored to your industry needs",
    "Flexible scheduling to minimize work disruption",
    "On-site or remote training options available",
    "Post-training support and consultation",
    "Industry-recognized certifications",
    "Progress tracking and reporting",
  ];

  const testimonials = [
    {
      company: "Tech Solutions Inc.",
      feedback: "IntelleQacademy's corporate training transformed our development team. Their customized MERN stack program helped us deliver projects 40% faster.",
      author: "CTO, Tech Solutions Inc."
    },
    {
      company: "Global Analytics Corp",
      feedback: "The Data Science training was exceptional. Our analysts now handle complex ML models with confidence. Highly recommend their corporate programs!",
      author: "Head of Analytics, Global Analytics Corp"
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <GradientBackground variant="hero" className="py-24 mt-[-95px] sm:mt-[-112px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="text-white space-y-6 relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Empower Your Team with Custom Corporate Training
              </h1>
              <p className="text-xl text-white/90">
                Boost your workforce's productivity with tailored upskilling programs in emerging technologies.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={corporateImage}
                alt="Corporate training session"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </GradientBackground>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false}>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Custom Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="organizationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corporation" {...field} data-testid="input-organization-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="contactPersonName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-contact-person" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@acme.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="trainingDomain"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Training Domain</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-training-domain">
                                  <SelectValue placeholder="Select domain" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Web Development">Web Development</SelectItem>
                                <SelectItem value="Data Science">Data Science & AI</SelectItem>
                                <SelectItem value="Cloud & DevOps">Cloud & DevOps</SelectItem>
                                <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                                <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                                <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                                <SelectItem value="Custom">Custom Program</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="participants"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Participants</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="25"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                              data-testid="input-participants"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message / Requirements</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your training requirements, goals, and any specific technologies you'd like to cover..."
                              className="min-h-[150px]"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full" disabled={quoteMutation.isPending} data-testid="button-request-quote">
                      {quoteMutation.isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Briefcase className="w-5 h-5 mr-2" />
                          Request Quote
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-chart-2/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose IntelleQacademy for Corporate Training</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-chart-2 rounded-xl flex items-center justify-center mx-auto">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Program Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Corporate Client Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hover={false}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="text-2xl font-bold text-primary">{testimonial.company}</div>
                    <p className="text-muted-foreground italic">"{testimonial.feedback}"</p>
                    <p className="text-sm font-medium">— {testimonial.author}</p>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology designed to deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Needs Assessment",
                description: "We analyze your team's current skills and identify gaps to create a customized training plan."
              },
              {
                icon: BookOpen,
                title: "Custom Curriculum",
                description: "Our experts design a curriculum tailored to your industry, challenges, and objectives."
              },
              {
                icon: Video,
                title: "Interactive Training",
                description: "Engaging live sessions, hands-on projects, and real-world case studies for practical learning."
              },
              {
                icon: TrendingUp,
                title: "Continuous Support",
                description: "Post-training support, progress tracking, and ongoing consultation to ensure success."
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise-Grade Quality",
                description: "All our trainers are industry veterans with 10+ years of experience working at top tech companies.",
                highlight: "Expert Trainers"
              },
              {
                icon: Zap,
                title: "Rapid Skill Development",
                description: "See measurable improvements in 8 weeks. Our intensive programs are designed for fast, effective learning.",
                highlight: "8-Week Programs"
              },
              {
                icon: Globe,
                title: "Global Best Practices",
                description: "We incorporate international standards and methodologies used by Fortune 500 companies.",
                highlight: "World-Class Content"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-primary" />
                      </div>
                      <Badge variant="secondary">{feature.highlight}</Badge>
                    </div>
                    <h3 className="font-bold text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Domains */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Training Domains</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive programs across the most in-demand technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Full Stack Web Development",
              "Data Science & Machine Learning",
              "Cloud Computing & DevOps",
              "Cybersecurity & Ethical Hacking",
              "Mobile App Development & Web App",
              "UI/UX Design & Product Design",
              "Digital Marketing & Analytics",
              "Blockchain & Web3 Development"
            ].map((domain, index) => (
              <motion.div
                key={domain}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover-elevate cursor-pointer">
                  <CardContent className="pt-6 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{domain}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Impact</h2>
            <p className="text-xl text-muted-foreground">Real results from our corporate training programs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: "85%", label: "Skill Improvement", description: "Average increase in technical proficiency" },
              { metric: "40%", label: "Faster Delivery", description: "Reduction in project completion time" },
              { metric: "95%", label: "Satisfaction Rate", description: "Client satisfaction and retention" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hover={false} className="text-center">
                  <CardContent className="pt-6 space-y-3">
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.metric}
                    </div>
                    <div className="font-bold text-lg">{stat.label}</div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Enrollment CTA */}
      <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Looking for Individual Enrollment?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our regular courses and start your learning journey today!
            </p>
            <Button
              size="lg"
              onClick={() => setIsEnrollModalOpen(true)}
              className="shadow-xl hover-elevate"
            >
              <Users className="w-5 h-5 mr-2" />
              Enroll in a Course
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E2F] to-[#00B4D8]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with us to upgrade your team's skills
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's grow together. Schedule a call to discuss your training needs.
          </p>
          <a href="https://cal.com/intelleq-academy-ki5wwv/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" data-testid="button-schedule-call">
              <Briefcase className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </a>

        </div>
      </section>

      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
    </div>
  );
}
