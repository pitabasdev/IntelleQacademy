import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientBackground } from "@/components/GradientBackground";
import { GlassCard } from "@/components/GlassCard";
import { TrustedPartners } from "@/components/TrustedPartners";
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { GradientText } from "@/components/aceternity/GradientText";
import { TextReveal } from "@/components/aceternity/TextReveal";
import { FloatingCard } from "@/components/aceternity/FloatingCard";
import { MovingBorder } from "@/components/aceternity/MovingBorder";
import { SpotlightEffect } from "@/components/aceternity/SpotlightEffect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Rocket,
  Users,
  Award,
  BookOpen,
  Target,
  Briefcase,
  CheckCircle2,
  Clock,
  Video,
  MessageSquare,
  Calendar,
  ArrowRight,
  Sparkles,
  Code,


  Palette,
  Star,
} from "lucide-react";
import { 
  SiDiscord, 
  SiLinkedin, 
  SiWhatsapp, 
  SiGoogle, 
  SiAmazon, 
  SiMeta,
  SiAdobe,
  SiOracle,
  SiIntel,
  SiCisco,
  SiNetflix,
  SiSpotify,
  SiUber,
  SiApple,
  SiNvidia,
  SiPaypal,
  SiTesla
} from "react-icons/si";

import trainingImage from "../assets/generated_images/Training_classroom_session_ff5cebfc.png";
import mentorImage from "../assets/generated_images/Professional_tech_mentor_portrait_13a36820.png";
import alumniImage from "../assets/generated_images/Alumni_success_portrait_cda91d31.png";
import techCubesImage from "../assets/generated_images/3D_tech_cubes_visualization_8399390b.png";
import certificationImage from "../assets/stock_images/professional_online__6f20a20a.jpg";
import digitalMarketingImage from "../assets/stock_images/business_professiona_61d491d1.jpg";
import dataScienceImage from "../assets/stock_images/data_science_analyti_bfd03135.jpg";
import { coursesData, testimonialsData } from "@/data/courses";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Video,
      title: "Live Interactive Classes",
      description: "Real-time learning with expert instructors and immediate doubt resolution"
    },
    {
      icon: Code,
      title: "Hands-on Real Projects",
      description: "Build industry-standard applications and strengthen your portfolio"
    },
    {
      icon: Users,
      title: "1:1 Mentorship",
      description: "Personalized guidance from industry professionals throughout your journey"
    },
    {
      icon: Rocket,
      title: "Startup-Ready Curriculum",
      description: "Learn cutting-edge technologies used by top tech companies"
    },
    {
      icon: Target,
      title: "Resume & Interview Prep",
      description: "Get job-ready with professional resume building and mock interviews"
    },
    {
      icon: Award,
      title: "Internship + Certification",
      description: "Gain real work experience and industry-recognized certificates"
    }
  ];

  const programs = coursesData.slice(0, 6);

  const comparisonData = [
    {
      program: "MERN Stack",
      duration: "2 Months",
      mode: "Live + Recorded",
      certification: true,
      internship: true
    },
    {
      program: "Data Science",
      duration: "2 Months",
      mode: "Live + Recorded",
      certification: true,
      internship: true
    },
    {
      program: "Cyber Security",
      duration: "2 Months",
      mode: "Live",
      certification: true,
      internship: true
    }
  ];

  const timeline = [
    { date: "5 Nov", program: "MERN Stack", badge: "Seats Filling Fast", color: "text-destructive" },
    { date: "10 Nov", program: "Data Science", badge: "Limited Seats", color: "text-primary" },
    { date: "15 Nov", program: "Cyber Security", badge: "Enroll Now", color: "text-chart-2" },
    { date: "20 Nov", program: "DevOps & Cloud", badge: "New Batch", color: "text-chart-3" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-background via-background to-background">
        <BackgroundBeams />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full px-5 py-2.5 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  <GradientText>Empowering 5000+ Learners</GradientText>
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Future{" "}
                <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                  Tech Leaders
                </span>{" "}
                with Real-World Skills
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Join IntelleQacademy — where learning meets innovation. Gain hands-on experience through live projects, expert mentorship, and startup-ready training programs.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/courses">
                  <Button size="lg" className="text-base" data-testid="button-explore-programs">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Programs
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-base" data-testid="button-join-internship">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Join Internship
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Live Sessions", "Industry Mentors", "Certification", "Placement Assistance"].map((badge) => (
                  <Badge key={badge} variant="secondary" className="px-4 py-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl shadow-2xl w-full overflow-hidden bg-black/5">
                <iframe
                  className="w-full aspect-video rounded-3xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&modestbranding=1&rel=0"
                  title="IntelleQacademy Training Programs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <img
                src={trainingImage}
                alt="Training classroom session"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About IntelleQacademy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At IntelleQacademy, we bridge the gap between education and employment. Our programs are designed by industry professionals to help students and professionals gain in-demand technical skills in MERN Stack, Data Science, Cyber Security, DevOps, AI, and more.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expert mentorship, real-world projects, and placement support, we ensure our learners are not just educated, but job-ready and future-proof.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Mentors</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={featuresRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose IntelleQacademy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed in your tech career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <SpotlightEffect key={feature.title} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <GlassCard className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              </SpotlightEffect>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our industry-leading training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const getCourseImage = (category: string) => {
                switch (category) {
                  case "Web Development":
                    return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80";
                  case "Data Science":
                    return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80";
                  case "AI":
                    return "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80";
                  case "Cyber Security":
                    return "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80";
                  case "DevOps":
                    return "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80";
                  case "Design":
                    return "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80";
                  case "Programming":
                    return "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80";
                  default:
                    return "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80";
                }
              };
              
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={getCourseImage(program.category)}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      {program.level === "Advanced" && (
                        <Badge className="absolute top-4 right-4 bg-primary text-white">
                          Best Seller
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="flex-shrink-0">
                      <CardTitle className="text-xl mb-3">{program.title}</CardTitle>
                      <CardDescription>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{program.description}</p>
                        <div className="flex items-center gap-2 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(program.rating || 0)
                                  ? 'fill-yellow-500 text-yellow-500'
                                  : i < (program.rating || 0)
                                  ? 'fill-yellow-500 text-yellow-500 opacity-50'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{program.mentees} Mentees</span>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col justify-end">
                      {program.price && (
                        <div className="flex items-baseline gap-3 pb-2 border-t pt-4">
                          <span className="text-3xl font-bold text-primary">
                            ₹{program.price.toLocaleString('en-IN')}
                          </span>
                          {program.originalPrice && (
                            <>
                              <span className="text-lg text-muted-foreground line-through">
                                ₹{program.originalPrice.toLocaleString('en-IN')}
                              </span>
                              <Badge variant="secondary" className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
                                {Math.round(((program.originalPrice - program.price) / program.originalPrice) * 100)}% OFF
                              </Badge>
                            </>
                          )}
                        </div>
                      )}
                      <Link href={`/courses/${program.id}`} className="w-full">
                        <Button variant="default" className="w-full group" data-testid={`button-view-${program.id}`}>
                          Know More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg" data-testid="button-view-all-courses">
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3D Interactive Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Experience the Future of Learning
              </h2>
              <p className="text-lg text-muted-foreground">
                Step into an immersive learning experience powered by cutting-edge technology, live projects, and community-driven growth. Our platform combines theory with practice, ensuring you master real-world skills.
              </p>
              <div className="space-y-3">
                {["Interactive 3D Learning Environment", "Live Code Collaboration", "Instant Feedback & Support"].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={techCubesImage}
                alt="3D tech visualization"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <TrustedPartners />

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our alumni who transformed their careers
            </p>
          </div>

          <div className="space-y-6">
            <style>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              @keyframes scroll-right {
                0% {
                  transform: translateX(-50%);
                }
                100% {
                  transform: translateX(0);
                }
              }
              .animate-scroll-left {
                animation: scroll-left 40s linear infinite;
              }
              .animate-scroll-right {
                animation: scroll-right 40s linear infinite;
              }
              .animate-scroll-left:hover,
              .animate-scroll-right:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            {/* First Row - Scrolling Left */}
            <div className="relative">
              <div className="flex animate-scroll-left" data-testid="testimonials-scroll-container">
                {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                  <div
                    key={`row1-${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-80 mx-3"
                  >
                    <GlassCard hover={false} className="h-64">
                      <CardContent className="pt-6 space-y-4 h-full flex flex-col">
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <img
                            src={index % testimonialsData.length < 2 ? mentorImage : alumniImage}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground italic flex-1 line-clamp-4">"{testimonial.message}"</p>
                        <div className="flex items-center gap-2 text-sm flex-shrink-0">
                          <Badge variant="secondary" className="text-xs">
                            <Briefcase className="w-3 h-3 mr-1" />
                            {testimonial.company}
                          </Badge>
                        </div>
                      </CardContent>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Scrolling Right */}
            <div className="relative">
              <div className="flex animate-scroll-right">
                {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                  <div
                    key={`row2-${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-80 mx-3"
                  >
                    <GlassCard hover={false} className="h-64">
                      <CardContent className="pt-6 space-y-4 h-full flex flex-col">
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <img
                            src={index % testimonialsData.length >= 2 ? mentorImage : alumniImage}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground italic flex-1 line-clamp-4">"{testimonial.message}"</p>
                        <div className="flex items-center gap-2 text-sm flex-shrink-0">
                          <Badge variant="secondary" className="text-xs">
                            <Briefcase className="w-3 h-3 mr-1" />
                            {testimonial.company}
                          </Badge>
                        </div>
                      </CardContent>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Value Packs */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TextReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Premium <GradientText>Value Packs</GradientText>
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get lifetime access to multiple courses with our exclusive value packs
              </p>
            </TextReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Golden Pass",
                subtitle: "AN EXCLUSIVE COURSE ACCESS",
                courses: "20+ Courses",
                badge: "LIFETIME ACCESS",
                icon: Award,
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                name: "Tech Starter",
                subtitle: "12+ Diverse Courses",
                courses: "12+ Tech Courses",
                features: ["10+ Projects", "5+ Certifications", "Live Classes", "Internship"],
                icon: Code,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "MBA Lite",
                subtitle: "7+ Business Domain",
                courses: "7+ Business Courses",
                features: ["10+ Projects", "5+ Certifications", "Live Classes", "Internship"],
                icon: Briefcase,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                name: "Creators Pack",
                subtitle: "6+ Creative Domain",
                courses: "6+ Creator Courses",
                features: ["3+ Projects", "6+ Certifications", "Live Classes", "Internship"],
                icon: Palette,
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((pack, index) => (
              <FloatingCard key={pack.name} delay={index * 0.1}>
                <div className="relative overflow-hidden h-full flex flex-col">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pack.gradient} opacity-10 blur-2xl`} />
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${pack.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <pack.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{pack.name}</CardTitle>
                    <CardDescription className="text-sm">{pack.subtitle}</CardDescription>
                    {pack.badge && (
                      <Badge className={`bg-gradient-to-r ${pack.gradient} text-white border-0 mt-2`}>
                        {pack.badge}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <div className="text-2xl font-bold">
                      <GradientText gradient={pack.gradient}>{pack.courses}</GradientText>
                    </div>
                    {pack.features ? (
                      <div className="space-y-2 flex-1">
                        {pack.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex-1" />
                    )}
                    <Button className="w-full mt-auto" data-testid={`button-${pack.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Programs */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced <GradientText>Programs</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Master in-demand skills with our specialized advanced programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Digital Marketing",
                badge: "Trending",
                description: "Digital Marketing to boost your online presence and engage with your audience effectively. Learn strategies to drive traffic, increase conversions, and grow your brand.",
                duration: "6 Months",
                mentees: "20k+",
                image: digitalMarketingImage,
                certification: ["Google", "HubSpot"]
              },
              {
                title: "Data Science",
                badge: "Popular",
                description: "Master Data Science to unlock valuable insights from data and make informed decisions. Gain expertise in data analysis, machine learning, and predictive modeling.",
                duration: "6 Months",
                mentees: "20k+",
                image: dataScienceImage,
                certification: ["IBM", "Microsoft"]
              }
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <MovingBorder duration={3000}>
                  <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-0 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-primary text-white">
                        {program.badge}
                      </Badge>
                    </div>
                    <CardHeader className="flex-shrink-0">
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{program.mentees} Mentees</span>
                        </div>
                      </div>
                      <div className="flex-1 flex-shrink-0">
                        <div className="text-sm text-muted-foreground mb-2">Certification from:</div>
                        <div className="flex flex-wrap gap-2">
                          {program.certification.map((cert) => (
                            <Badge key={cert} variant="secondary">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 mt-auto flex-shrink-0">
                        <Button className="flex-1" data-testid={`button-${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          View Details
                        </Button>
                        <Button variant="outline" className="flex-1" data-testid={`button-brochure-${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          Download Brochure
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </MovingBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IntelleQacademy - Learning Challenges */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <GradientText>IntelleQacademy</GradientText>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
              LEARNING CHALLENGES - HOW WE ENCOUNTER
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "LIVE Interactive Session",
                description: "Engage in real-time with expert instructors, ask questions instantly, and participate in hands-on coding sessions",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Award,
                title: "Industry Ratified Certifications",
                description: "Earn certifications recognized by top companies worldwide, adding credibility to your professional profile",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Users,
                title: "Expert Industry Mentor",
                description: "Learn directly from professionals working at top tech companies with years of real-world experience",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Briefcase,
                title: "Portfolio Worthy Projects",
                description: "Build impressive, production-ready projects that showcase your skills to potential employers",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: MessageSquare,
                title: "Dedicated Query Session",
                description: "Get personalized support with dedicated doubt-clearing sessions and mentor office hours",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Target,
                title: "Placement Assistance",
                description: "Comprehensive career support including resume building, mock interviews, and direct company connections",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((challenge, index) => (
              <SpotlightEffect key={challenge.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${challenge.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <challenge.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {challenge.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </SpotlightEffect>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <img
              src={certificationImage}
              alt="Professional certifications and learning"
              className="rounded-3xl shadow-2xl mx-auto max-w-4xl w-full border border-primary/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Program Comparison Table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Comparison</h2>
            <p className="text-lg text-muted-foreground">
              Compare our top training programs
            </p>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent/50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Program</th>
                    <th className="px-6 py-4 text-left font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left font-semibold">Mode</th>
                    <th className="px-6 py-4 text-center font-semibold">Certification</th>
                    <th className="px-6 py-4 text-center font-semibold">Internship</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.program}
                      className={`border-t hover-elevate ${index % 2 === 0 ? 'bg-accent/10' : ''}`}
                    >
                      <td className="px-6 py-4 font-medium">{row.program}</td>
                      <td className="px-6 py-4">{row.duration}</td>
                      <td className="px-6 py-4">{row.mode}</td>
                      <td className="px-6 py-4 text-center">
                        {row.certification ? (
                          <CheckCircle2 className="w-5 h-5 text-primary inline" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.internship ? (
                          <CheckCircle2 className="w-5 h-5 text-primary inline" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Your <GradientText>Learning Journey</GradientText> in 4 Simple Steps
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
              From enrollment to placement, we guide you every step of the way
            </p>
          </TextReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Enroll & Onboard",
                description: "Choose your program, complete registration, and get access to learning materials",
                icon: BookOpen
              },
              {
                step: "02",
                title: "Learn & Build",
                description: "Attend live classes, complete assignments, and build real-world projects",
                icon: Code
              },
              {
                step: "03",
                title: "Get Certified",
                description: "Complete assessments, earn industry-recognized certifications, and build your portfolio",
                icon: Award
              },
              {
                step: "04",
                title: "Land Your Job",
                description: "Get placement assistance, interview preparation, and connect with hiring partners",
                icon: Briefcase
              }
            ].map((item, index) => (
              <FloatingCard key={item.step} delay={index * 0.1}>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{item.description}</p>
                </CardContent>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven <GradientText>Track Record</GradientText> of Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our numbers speak for themselves - see the impact we've made in tech education
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5000+", label: "Students Trained", icon: Users },
              { value: "95%", label: "Placement Rate", icon: Target },
              { value: "100+", label: "Hiring Partners", icon: Briefcase },
              { value: "20+", label: "Expert Mentors", icon: Award }
            ].map((stat, index) => (
              <SpotlightEffect key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-primary/10"
                >
                  <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <GradientText>{stat.value}</GradientText>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              </SpotlightEffect>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <GradientText>Questions</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What are the prerequisites for joining the programs?",
                answer: "Most of our programs are beginner-friendly and require only basic computer knowledge. For advanced programs, we recommend foundational knowledge in the respective field."
              },
              {
                question: "How long are the training programs?",
                answer: "All our comprehensive programs are 2 months long, designed to provide in-depth knowledge and hands-on experience. We also offer intensive courses with flexible durations."
              },
              {
                question: "Do you provide placement assistance?",
                answer: "Yes! We offer dedicated placement assistance including resume building, interview preparation, mock interviews, and direct connections with 100+ hiring partners."
              },
              {
                question: "Are the classes live or recorded?",
                answer: "We offer a hybrid model - live interactive sessions for real-time learning and doubt clearing, plus recorded sessions for lifetime access and revision."
              },
              {
                question: "Will I get a certificate after completion?",
                answer: "Absolutely! You'll receive an industry-recognized certificate upon successful completion of the program, along with project completion certificates."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="hover-elevate">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">?</span>
                      </div>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground pl-9">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-contact-support">
                Contact Our Support Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-chart-2/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Be part of a global learning network. Connect with mentors and learners worldwide, share knowledge, and grow together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" variant="outline" className="gap-2" data-testid="button-join-discord">
              <SiDiscord className="w-5 h-5" />
              Join Discord Community
            </Button>
            <Button size="lg" variant="outline" className="gap-2" data-testid="button-connect-linkedin">
              <SiLinkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="gap-2" data-testid="button-whatsapp-group">
              <SiWhatsapp className="w-5 h-5" />
              WhatsApp Group
            </Button>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TextReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <GradientText>Hiring Partners</GradientText>
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our graduates are hired by leading tech companies worldwide. Join our alumni network working at these prestigious organizations.
              </p>
            </TextReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {[
                { Icon: SiGoogle, name: "Google" },
                { Icon: SiApple, name: "Apple" },
                { Icon: SiAmazon, name: "Amazon" },
                { Icon: SiMeta, name: "Meta" },
                { Icon: SiNetflix, name: "Netflix" },
                { Icon: SiAdobe, name: "Adobe" },
                { Icon: SiNvidia, name: "Nvidia" },
                { Icon: SiOracle, name: "Oracle" },
                { Icon: SiIntel, name: "Intel" },
                { Icon: SiCisco, name: "Cisco" },
                { Icon: SiSpotify, name: "Spotify" },
                { Icon: SiUber, name: "Uber" },
                { Icon: SiPaypal, name: "PayPal" },
                { Icon: SiTesla, name: "Tesla" }
              ].map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <SpotlightEffect className="w-full h-full">
                    <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 h-full">
                      <company.Icon className="w-12 h-12 md:w-16 md:h-16 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                      <span className="text-xs mt-3 text-muted-foreground group-hover:text-foreground transition-colors">
                        {company.name}
                      </span>
                    </div>
                  </SpotlightEffect>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Card className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="py-6 px-8">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center"
                      >
                        <Users className="w-6 h-6 text-white" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold">
                      <GradientText>100+ Companies</GradientText>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Actively hiring our graduates
                    </div>
                  </div>
                  <Link href="/career">
                    <Button size="lg" data-testid="button-view-opportunities">
                      View Opportunities
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Batches Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Batches</h2>
            <p className="text-lg text-muted-foreground">
              Secure your spot in our next batch
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-chart-2" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 group"
                >
                  <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                    <div className="text-center">
                      <div className="text-xs">{item.date.split(' ')[1]}</div>
                      <div className="text-lg">{item.date.split(' ')[0]}</div>
                    </div>
                  </div>
                  
                  <Card className="group-hover:shadow-xl transition-shadow hover-elevate">
                    <CardContent className="py-6">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.program}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>Starting {item.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className={item.color}>
                            {item.badge}
                          </Badge>
                          <Link href="/courses">
                            <Button data-testid={`button-enroll-${item.program.toLowerCase().replace(/\s+/g, '-')}`}>
                              Enroll Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <GradientBackground variant="hero" className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Don't just learn — build, create, and innovate with IntelleQacademy
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transform your career with industry-ready skills. Join thousands of successful alumni who started their tech journey with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/courses">
                <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90" data-testid="button-start-learning">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Learning Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" data-testid="button-get-in-touch">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </GradientBackground>
    </div>
  );
}
