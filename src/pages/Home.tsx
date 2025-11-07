"use client";

import { useState } from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GradientBackground } from "@/components/GradientBackground";
import { GlassCard } from "@/components/GlassCard";
import { TrustedPartners } from "@/components/TrustedPartners";
import { BackgroundBeams } from "./background-beams";
import { GradientText } from "@/components/aceternity/GradientText";
import { TextReveal } from "@/components/aceternity/TextReveal";
import { FloatingCard } from "@/components/aceternity/FloatingCard";
import { MovingBorder } from "@/components/aceternity/MovingBorder";
import { SpotlightEffect } from "@/components/aceternity/SpotlightEffect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ITServicesFeaturesSection from './it-services-features';
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
  Monitor, XCircle
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


import {

  Download,

  Globe,

  Zap,
  Shield,
  HeartHandshake
} from "lucide-react";

const benefitsData = [
  {
    icon: Award,
    title: "Industry-Recognized Certification",
    description: "Get certified with credentials valued by top employers worldwide",
    features: [
      "Globally recognized certificates",
      "Digital badge for LinkedIn",
      "Verification portal for employers",
      "Lifetime certificate access"
    ],
    highlight: "100% Valid Certificates"
  },
  {
    icon: Users,
    title: "1:1 Mentorship Sessions",
    description: "Personalized guidance from industry experts working in top companies",
    features: [
      "Weekly 1:1 sessions",
      "Career guidance",
      "Project reviews",
      "Interview preparation"
    ],
    highlight: "Expert Mentors"
  },
  {
    icon: Briefcase,
    title: "100% Placement Support",
    description: "Comprehensive career services to land your dream job",
    features: [
      "Resume building",
      "Mock interviews",
      "100+ hiring partners",
      "Job referral system"
    ],
    highlight: "Guaranteed Support"
  },
  {
    icon: Clock,
    title: "Lifetime Course Access",
    description: "Learn at your own pace with lifetime access to all course materials",
    features: [
      "Lifetime video access",
      "Updated content",
      "Community access",
      "Future updates included"
    ],
    highlight: "Never Expires"
  },
  {
    icon: Globe,
    title: "Global Learning Community",
    description: "Join thousands of learners from around the world",
    features: [
      "Active Discord community",
      "Peer learning",
      "Networking events",
      "Collaborative projects"
    ],
    highlight: "10,000+ Members"
  },
  {
    icon: Star,
    title: "Hands-on Projects",
    description: "Build real-world projects that showcase your skills to employers",
    features: [
      "Industry projects",
      "Live case studies",
      "Portfolio building",
      "GitHub integration"
    ],
    highlight: "Real Experience"
  },
  {
    icon: Zap,
    title: "Flexible Learning Schedule",
    description: "Balance your learning with work and personal commitments",
    features: [
      "Live + recorded sessions",
      "Weekend batches",
      "Self-paced options",
      "24/7 access"
    ],
    highlight: "Learn Anywhere"
  },
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    description: "Risk-free learning with our satisfaction guarantee",
    features: [
      "7-day refund policy",
      "Free trial sessions",
      "Course previews",
      "No questions asked"
    ],
    highlight: "Risk Free"
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Career Support",
    description: "Continuous support even after course completion",
    features: [
      "Career counseling",
      "Job updates",
      "Skill upgrades",
      "Alumni network"
    ],
    highlight: "Always Supported"
  }
];
import trainingImage from "../assets/generated_images/Training_classroom_session_ff5cebfc.png";
import mentorImage from "../assets/generated_images/Professional_tech_mentor_portrait_13a36820.png";
import alumniImage from "../assets/generated_images/Alumni_success_portrait_cda91d31.png";
import techCubesImage from "../assets/generated_images/3D_tech_cubes_visualization_8399390b.png";
import certificationImage from "../assets/stock_images/professional_online__6f20a20a.jpg";
import digitalMarketingImage from "../assets/stock_images/business_professiona_61d491d1.jpg";
import dataScienceImage from "../assets/stock_images/data_science_analyti_bfd03135.jpg";
import { coursesData, testimonialsData } from "@/data/courses";

export default function Home() {
  const [selectedPack, setSelectedPack] = useState<any>(null);
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const words = "Empowering Future Tech Leaders with Real-World Skills";
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

  // Add these imports at the top
  const proPackItems = [
    "Placement Assistance",
    "Mockup Interviews",
    "Value Packs",
    "1:1 Mentorship",
    "Industry Projects",
    "Lifetime Access",
    "Certification",
    "Resume Building",
    "Career Guidance",
    "Live Sessions",
    "Recorded Videos",
    "Doubt Support",
    "Community Access",
    "Job Referrals",
    "Portfolio Review",
    "Interview Preparation",
    "Soft Skills Training",
    "Technical Workshops"
  ];

  // Update your comparison data structure
  const comparisonData = [
    {
      program: "Full Stack Development",
      description: "Master frontend and backend technologies",
      duration: "12",
      mode: "Online Live",
      certification: true,
      internship: true,
      placement: true
    },
    {
      program: "Data Science & Analytics",
      description: "Become a data-driven decision maker",
      duration: "16",
      mode: "Online Live",
      certification: true,
      internship: true,
      placement: true
    },
    {
      program: "Java Development",
      description: "Enterprise-level Java applications",
      duration: "10",
      mode: "Online Live",
      certification: true,
      internship: true,
      placement: true
    },
    {
      program: "Python Development",
      description: "Versatile programming for multiple domains",
      duration: "8",
      mode: "Online Live",
      certification: true,
      internship: false,
      placement: true
    },
    {
      program: "Cyber Security",
      description: "Protect systems from cyber threats",
      duration: "14",
      mode: "Online Live",
      certification: true,
      internship: true,
      placement: true
    },
    {
      program: "UI/UX Design",
      description: "Create beautiful and functional designs",
      duration: "10",
      mode: "Online Live",
      certification: true,
      internship: false,
      placement: true
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
      <section className="mt-[-130px] sm:mt-[-70px] relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 pt-20">
        {/* Background Beams */}
        <BackgroundBeams className="absolute inset-0" />

        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-50/20 to-slate-50 dark:via-slate-950/20 dark:to-slate-950"></div>

        {/* Left Trust Badge */}
        <div className="absolute top-10 left-10 z-20 hidden lg:block">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-slate-200/20 dark:border-slate-700/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Trusted by 5000+ Learners
            </span>
          </div>
        </div>

        {/* Right Trust Badge */}
        <div className="absolute top-10 right-10 z-20 hidden lg:block">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-slate-200/20 dark:border-slate-700/30">
            <span className="text-sm text-slate-700 dark:text-slate-300">
              ISO 9001 Certified
            </span>
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              ✓
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/70 dark:bg-blue-950/50 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 backdrop-blur-sm">
              <Sparkles size={16} className="text-blue-500" />
              Live Sessions
            </div>
            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-50/70 dark:bg-green-950/50 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-300 backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-green-500" />
              Industry Mentors
            </div>
            <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-50/70 dark:bg-purple-950/50 px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300 backdrop-blur-sm">
              🎓 Certification
            </div>
            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-50/70 dark:bg-orange-950/50 px-4 py-2 text-sm font-medium text-orange-700 dark:text-orange-300 backdrop-blur-sm">
              💼 Placement Assistance
            </div>
          </motion.div>

          {/* Animated Heading */}
          <div className="mb-8">
            <TextGenerateEffect
              words={words}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent"
            />
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12"
          >
            Join IntelleQacademy where learning meets innovation.
            Gain hands-on experience through live projects, expert mentorship, and
            startup-ready training programs designed to shape tomorrow’s leaders.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <BookOpen size={20} /> Explore Programs
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Briefcase size={20} /> Join Internship
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Video Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20">
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <motion.video
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    src="https://res.cloudinary.com/dhe93bqbx/video/upload/v1762259624/QA_Overview_sxljml.mp4"
                    className="w-full aspect-video object-cover rounded-xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto"
          >
            {[
              { number: "5000+", label: "Learners Empowered", sublabel: "Across India" },
              { number: "200+", label: "Live Projects", sublabel: "Hands-on Training" },
              { number: "50+", label: "Industry Mentors", sublabel: "Top IT Experts" },
              { number: "100%", label: "Career Support", sublabel: "Placement Assistance" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gradient-to-b mt-[-50px] sm:mt-[-34px] from-background to-accent/5">
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
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Pro Packs
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Exclusive benefits and features included in all our training programs
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Infinite Marquee */}
            <div className="flex space-x-6">
              {/* First Marquee */}
              <div className="flex space-x-6 animate-marquee whitespace-nowrap">
                {proPackItems.map((item, index) => (
                  <div
                    key={`first-${index}`}
                    className="inline-flex items-center px-6 py-4 bg-white dark:bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary mr-3 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex space-x-6 animate-marquee2 whitespace-nowrap">
                {proPackItems.map((item, index) => (
                  <div
                    key={`second-${index}`}
                    className="inline-flex items-center px-6 py-4 bg-white dark:bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                  >
                    <div className="w-3 h-3 rounded-full bg-accent mr-3 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Included in All Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>24/7 Support</span>
              </div>
            </div>
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
                    return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988621/SDE_MERN_lleyun.png";
                  case "Java Development":
                    return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988623/SDE_JAVA_ivfszt.png"
                  case "Data Science":
                    return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988620/DATA_SCIENCE_ML_maonqd.png";
                  case "Data Analytics":
                    return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988616/DATA_ANALYTICS_yawhg4.png";

                  case "Cyber Security":
                    return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988616/CYBERSECURITY_yjqhuj.png";

                  case "Programming":
                    return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988619/PYTHON_DEVELOPMENT_ho69z5.png";
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
                              className={`w-4 h-4 ${i < Math.floor(program.rating || 0)
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
                gradient: "from-yellow-500 to-orange-500",
                details: {
                  description: "Get unlimited access to our complete course library with lifetime validity. Perfect for learners who want to explore multiple domains and upskill continuously.",
                  included: [
                    "Access to all 20+ premium courses",
                    "Lifetime course updates and new additions",
                    "15+ Industry certifications",
                    "Priority support and mentorship",
                    "Exclusive community access",
                    "Job placement assistance",
                    "Interview preparation workshops",
                    "Resume building and review"
                  ],
                  price: "₹49,999",
                  originalPrice: "₹1,99,999",
                  validity: "Lifetime Access"
                }
              },
              {
                name: "Tech Starter",
                subtitle: "12+ Diverse Courses",
                courses: "12+ Tech Courses",
                features: ["10+ Projects", "5+ Certifications", "Live Classes", "Internship"],
                icon: Code,
                gradient: "from-blue-500 to-cyan-500",
                details: {
                  description: "Jumpstart your tech career with our comprehensive technology bundle covering web development, mobile apps, data science, and more.",
                  included: [
                    "Full Stack Web Development (MERN, MEAN)",
                    "Python Programming & Data Science",
                    "Mobile App Development (React Native)",
                    "Cloud Computing (AWS, Azure)",
                    "DevOps & CI/CD",
                    "10+ Real-world projects",
                    "5+ Industry certifications",
                    "3 months internship opportunity",
                    "Live interactive classes",
                    "Dedicated mentor support"
                  ],
                  price: "₹29,999",
                  originalPrice: "₹89,999",
                  validity: "2 Years Access"
                }
              },
              {
                name: "MBA Lite",
                subtitle: "7+ Business Domain",
                courses: "7+ Business Courses",
                features: ["10+ Projects", "5+ Certifications", "Live Classes", "Internship"],
                icon: Briefcase,
                gradient: "from-purple-500 to-pink-500",
                details: {
                  description: "Master essential business skills including marketing, finance, operations, and leadership to accelerate your management career.",
                  included: [
                    "Digital Marketing & SEO",
                    "Business Analytics & Data Visualization",
                    "Financial Planning & Analysis",
                    "Product Management",
                    "Project Management (PMP preparation)",
                    "Strategic Management",
                    "Entrepreneurship & Startup Fundamentals",
                    "10+ Case studies and projects",
                    "5+ Business certifications",
                    "Internship with partner companies"
                  ],
                  price: "₹24,999",
                  originalPrice: "₹74,999",
                  validity: "2 Years Access"
                }
              },
              {
                name: "Creators Pack",
                subtitle: "6+ Creative Domain",
                courses: "6+ Creator Courses",
                features: ["3+ Projects", "6+ Certifications", "Live Classes", "Internship"],
                icon: Palette,
                gradient: "from-green-500 to-emerald-500",
                details: {
                  description: "Unleash your creativity with courses in UI/UX design, graphic design, video editing, content creation, and digital art.",
                  included: [
                    "UI/UX Design (Figma, Adobe XD)",
                    "Graphic Design (Photoshop, Illustrator)",
                    "Video Editing (Premiere Pro, After Effects)",
                    "Content Writing & Copywriting",
                    "Social Media Marketing",
                    "Photography & Image Editing",
                    "3+ Portfolio-worthy projects",
                    "6+ Adobe & design certifications",
                    "Live creative sessions",
                    "Freelancing guidance"
                  ],
                  price: "₹19,999",
                  originalPrice: "₹59,999",
                  validity: "18 Months Access"
                }
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
                    <Button
                      className="w-full mt-auto"
                      data-testid={`button-${pack.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setSelectedPack(pack)}
                    >
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
      <div className="mt-[-90px] sm:mt-[-110px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
        <ITServicesFeaturesSection />
      </div>

      {/* Advanced Programs */}
      <section className="py-20 bg-card/30 ">
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
                certification: ["Google", "HubSpot"],
                details: {
                  fullDescription: "Master the art and science of Digital Marketing with our comprehensive program. Learn to create data-driven marketing strategies, manage social media campaigns, optimize for search engines, and build effective email marketing funnels. This course prepares you for a successful career in the digital marketing industry.",
                  curriculum: [
                    "SEO & SEM Fundamentals",
                    "Social Media Marketing (Facebook, Instagram, LinkedIn, Twitter)",
                    "Google Ads & PPC Campaigns",
                    "Email Marketing & Automation",
                    "Content Marketing Strategy",
                    "Analytics & Data-Driven Marketing",
                    "Conversion Rate Optimization",
                    "Marketing Automation Tools",
                    "Influencer Marketing",
                    "Brand Management"
                  ],
                  outcomes: [
                    "Plan and execute comprehensive digital marketing campaigns",
                    "Master Google Analytics and marketing analytics tools",
                    "Create engaging content for various social media platforms",
                    "Optimize websites for search engines (SEO)",
                    "Run successful paid advertising campaigns",
                    "Build and manage email marketing campaigns"
                  ],
                  tools: ["Google Analytics", "SEMrush", "Hootsuite", "Mailchimp", "HubSpot", "Facebook Ads Manager"],
                  price: "₹39,999",
                  emi: "₹3,333/month"
                }
              },
              {
                title: "Data Science",
                badge: "Popular",
                description: "Master Data Science to unlock valuable insights from data and make informed decisions. Gain expertise in data analysis, machine learning, and predictive modeling.",
                duration: "6 Months",
                mentees: "20k+",
                image: dataScienceImage,
                certification: ["IBM", "Microsoft"],
                details: {
                  fullDescription: "Dive deep into the world of Data Science with our industry-leading program. Learn to analyze complex datasets, build machine learning models, and create predictive analytics solutions. This comprehensive course covers everything from basic statistics to advanced deep learning techniques.",
                  curriculum: [
                    "Python Programming for Data Science",
                    "Statistics & Probability",
                    "Data Wrangling & Cleaning",
                    "Exploratory Data Analysis (EDA)",
                    "Machine Learning Algorithms",
                    "Deep Learning & Neural Networks",
                    "Natural Language Processing (NLP)",
                    "Computer Vision",
                    "Big Data Analytics",
                    "Data Visualization with Tableau & Power BI"
                  ],
                  outcomes: [
                    "Analyze and visualize complex datasets",
                    "Build and deploy machine learning models",
                    "Work with big data technologies",
                    "Create predictive analytics solutions",
                    "Apply statistical methods to solve business problems",
                    "Communicate insights effectively to stakeholders"
                  ],
                  tools: ["Python", "R", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Tableau", "Power BI", "SQL"],
                  price: "₹44,999",
                  emi: "₹3,750/month"
                }
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
                        <Link href={`/programs/${program.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex-1">
                          <Button
                            className="w-full"
                            data-testid={`button-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            View Details
                          </Button>
                        </Link>
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
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Compare Programs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Program Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect training program that matches your career goals and learning preferences
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <Card className="border-none shadow-2xl shadow-primary/5 backdrop-blur-sm bg-card/50">
              <div className="overflow-hidden rounded-2xl">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-accent text-white">
                      <th className="px-8 py-6 text-left font-bold text-lg">
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5" />
                          Program Features
                        </div>
                      </th>
                      <th className="px-8 py-6 text-center font-bold text-lg">Duration</th>
                      <th className="px-8 py-6 text-center font-bold text-lg">Learning Mode</th>
                      <th className="px-8 py-6 text-center font-bold text-lg">
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-5 h-5" />
                          Certification
                        </div>
                      </th>
                      <th className="px-8 py-6 text-center font-bold text-lg">
                        <div className="flex items-center justify-center gap-2">
                          <Briefcase className="w-5 h-5" />
                          Internship
                        </div>
                      </th>
                      <th className="px-8 py-6 text-center font-bold text-lg">Placement Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {comparisonData.map((row, index) => (
                      <tr
                        key={row.program}
                        className={`group transition-all duration-300 hover:bg-primary/5 ${index % 2 === 0 ? 'bg-accent/5' : 'bg-background'
                          }`}
                      >
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                              {row.program.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                                {row.program}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">{row.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <div className="flex flex-col items-center">
                            <span className="font-semibold text-foreground text-lg">{row.duration}</span>
                            <span className="text-xs text-muted-foreground mt-1">Weeks</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <Badge
                            variant={row.mode === 'Online Live' ? 'default' : 'secondary'}
                            className="text-sm px-3 py-1"
                          >
                            {row.mode}
                          </Badge>
                        </td>
                        <td className="px-8 py-6 text-center">
                          {row.certification ? (
                            <div className="flex justify-center">
                              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                <XCircle className="w-5 h-5 text-red-600" />
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="px-8 py-6 text-center">
                          {row.internship ? (
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                              </div>
                              <span className="text-xs text-muted-foreground">Included</span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                <XCircle className="w-5 h-5 text-red-600" />
                              </div>
                              <span className="text-xs text-muted-foreground">Not Included</span>
                            </div>
                          )}
                        </td>
                        <td className="px-8 py-6 text-center">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Guaranteed
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Mobile Cards View */}
          <div className="lg:hidden space-y-6">
            {comparisonData.map((row,) => (
              <Card
                key={row.program}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                      {row.program.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-foreground">{row.program}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{row.description}</p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-3 bg-accent/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{row.duration}</p>
                    </div>

                    <div className="text-center p-3 bg-accent/10 rounded-lg">
                      <Monitor className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Mode</p>
                      <p className="font-semibold text-foreground">{row.mode}</p>
                    </div>

                    <div className="text-center p-3 bg-accent/10 rounded-lg">
                      <Award className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Certification</p>
                      {row.certification ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mx-auto" />
                      )}
                    </div>

                    <div className="text-center p-3 bg-accent/10 rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Internship</p>
                      {row.internship ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mx-auto" />
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-border/50">


                    <Link href="/courses">
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white cursor-pointer">
                        <BookOpen className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">100% Placement Support</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">1:1 Mentorship</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Program Benefits & Perks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the exclusive advantages that make our training programs stand out
            </p>
          </div>

          {/* Horizontal Auto-Scrolling Container */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Auto-scrolling wrapper */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 py-4"
                animate={{
                  x: [0, -1600], // Adjust based on total width of cards
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40, // Slower duration for better readability
                    ease: "linear",
                  },
                }}
              >
                {/* First set of cards */}
                {benefitsData.map((benefit, ) => (
                  <div
                    key={`first-${benefit.title}`}
                    className="flex-none w-80"
                  >
                    <Card className="h-full border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm group">
                      <CardContent className="p-8 h-full flex flex-col">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <benefit.icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                          {benefit.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 mb-6">
                          {benefit.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Highlight Badge */}
                        <div className="mt-auto">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {benefit.highlight}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {benefitsData.map((benefit, ) => (
                  <div
                    key={`second-${benefit.title}`}
                    className="flex-none w-80"
                  >
                    <Card className="h-full border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm group">
                      <CardContent className="p-8 h-full flex flex-col">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <benefit.icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                          {benefit.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                          {benefit.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 mb-6">
                          {benefit.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Highlight Badge */}
                        <div className="mt-auto">
                          <Badge
                            variant="secondary"
                            className="bg-accent/10 text-accent border-accent/20"
                          >
                            {benefit.highlight}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/courses">
  <Button
    size="lg"
    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg cursor-pointer"
  >
    <BookOpen className="w-5 h-5 mr-2" />
    Explore All Programs
  </Button>
</Link>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
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
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              data-testid="button-connect-linkedin"
              asChild
            >
              <a
                href="https://www.linkedin.com/company/intelleqacademy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              data-testid="button-whatsapp-group"
              asChild
            >
              <a
                href="https://wa.me/918217668872?text=Hello%20Intelleq%20Academy%20👋%20I%20would%20like%20to%20join%20the%20WhatsApp%20group%20for%20latest%20updates%20and%20announcements."
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="w-5 h-5" />
                WhatsApp Group
              </a>
            </Button>

          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30 ">
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
              Don't just learn build, create, and innovate with IntelleQacademy
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

      {/* Premium Value Pack Details Dialog */}
      <Dialog open={!!selectedPack} onOpenChange={() => setSelectedPack(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPack && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 bg-gradient-to-br ${selectedPack.gradient} rounded-xl flex items-center justify-center`}>
                    <selectedPack.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedPack.name}</DialogTitle>
                    <p className="text-sm text-muted-foreground">{selectedPack.subtitle}</p>
                  </div>
                </div>
                {selectedPack.badge && (
                  <Badge className={`bg-gradient-to-r ${selectedPack.gradient} text-white border-0 w-fit`}>
                    {selectedPack.badge}
                  </Badge>
                )}
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">About This Pack</h3>
                  <p className="text-muted-foreground">{selectedPack.details.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">What's Included</h3>
                  <div className="space-y-2">
                    {selectedPack.details.included.map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {selectedPack.details.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {selectedPack.details.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {selectedPack.details.validity}
                  </p>
                  <Button className="w-full" size="lg">
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
}
