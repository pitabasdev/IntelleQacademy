import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { GradientBackground } from "@/components/GradientBackground";
import { GlassCard } from "@/components/GlassCard";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageSquare, Loader2, Clock, Star } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "../shared/schema";
import { useMutation } from "@tanstack/react-query";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_y4sek53';
const EMAILJS_TEMPLATE_ID = 'template_p4v0wyu';
const EMAILJS_PUBLIC_KEY = '3cElEiu64Ct3C6ckt';

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const templateParams = {
        to_email: 'pitabas.pradhan834@gmail.com',
        subject: `New Contact Form: ${data.subject}`,
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        date: new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      return await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      console.error('Email submission error:', error);
      toast({
        title: "Submission Error",
        description: error.text || "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918217668872";
    const message = "Hello IntelleQacademy! I'm interested in learning more about your courses and would like to get some information.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <GradientBackground variant="hero" className="py-24 mt-[-115px] sm:mt-[-130px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get In Touch With Us
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Whether you're a learner, corporate partner, or trainer - we're here to connect and help you achieve your goals.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                <div className="text-xs sm:text-sm text-white/80">Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">1H</div>
                <div className="text-xs sm:text-sm text-white/80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-xs sm:text-sm text-white/80">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </GradientBackground>

      {/* Contact Form and Info */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <GlassCard className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                      <div className="grid gap-4 md:gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm md:text-base font-semibold">Full Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  {...field} 
                                  className="h-12 md:h-14 text-base"
                                  required
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm md:text-base font-semibold">Email *</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    {...field} 
                                    className="h-12 md:h-14 text-base"
                                    required
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm md:text-base font-semibold">Phone *</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="+91 9876543210" 
                                    {...field} 
                                    className="h-12 md:h-14 text-base"
                                    required
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm md:text-base font-semibold">Subject *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Course Inquiry, Partnership, Support, etc." 
                                  {...field} 
                                  className="h-12 md:h-14 text-base"
                                  required
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
                              <FormLabel className="text-sm md:text-base font-semibold">Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please tell us about your inquiry, questions, or how we can help you..."
                                  className="min-h-[120px] md:min-h-[150px] text-base resize-none"
                                  {...field}
                                  required
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      
                      <p className="text-xs md:text-sm text-muted-foreground text-center pt-2">
                        We respect your privacy and will never share your information with third parties.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </GlassCard>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-6 order-1 lg:order-2"
            >
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                {/* WhatsApp Card */}
                <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <SiWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-lg md:text-xl mb-1">WhatsApp Support</h3>
                        <p className="text-white/90 text-sm md:text-base mb-2 md:mb-3">
                          Quick responses within minutes
                        </p>
                        <Button 
                          onClick={handleWhatsAppClick}
                          className="w-full bg-white text-green-600 hover:bg-white/90 font-semibold text-sm md:text-base h-9 md:h-10"
                        >
                          <SiWhatsapp className="w-4 h-4 mr-2" />
                          Start Chat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Info Cards */}
                <Card className="hover-elevate border-0 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg md:text-xl mb-2">Email Us</h3>
                        <div className="space-y-1">
                          <a href="mailto:info@intelleqacademy.com" className="text-primary hover:underline block text-sm md:text-base">
                            info@intelleqacademy.com
                          </a>
                          <a href="mailto:support@intelleqacademy.com" className="text-primary hover:underline block text-sm md:text-base">
                            support@intelleqacademy.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate border-0 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg md:text-xl mb-2">Call Us</h3>
                        <a href="tel:+918217668872" className="text-primary hover:underline block text-lg md:text-xl font-bold">
                          +91 8217668872
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">
                          Mon-Sat, 9AM-6PM IST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate border-0 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg md:text-xl mb-2">Our Location</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          IntelleQacademy<br />
                          Bengaluru, Karnataka<br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Response Time & Stats */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-bold text-lg md:text-xl mb-4 text-center">Our Response Promise</h3>
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                      </div>
                      <div className="font-bold text-primary text-sm md:text-base">1 Hour</div>
                      <div className="text-xs md:text-sm text-muted-foreground">WhatsApp</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <div className="font-bold text-primary text-sm md:text-base">24 Hours</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Email</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                      </div>
                      <div className="font-bold text-primary text-sm md:text-base">Immediate</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Phone</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card className="hover-elevate border-0 overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Find Us
                  </CardTitle>
                  <CardDescription>
                    Our headquarters in Bengaluru, India's tech capital
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-48 sm:h-56 md:h-64 bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085284757324!3d12.953945613621084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="IntelleQacademy Location"
                      className="filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Contact CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch today and let us help you achieve your career goals with our expert guidance and comprehensive courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick} 
                className="gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-base h-12 px-6"
              >
                <SiWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="gap-2 font-semibold text-base h-12 px-6"
              >
                <a href="tel:+918217668872">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="gap-2 font-semibold text-base h-12 px-6"
              >
                <a href="mailto:info@intelleqacademy.com">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}