import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { GlassCard } from "../components/GlassCard";
import { BackgroundBeams } from "../components/aceternity/BackgroundBeams";
import { WorldMap } from "../components/aceternity/WorldMap";
import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  CheckCircle2,
  Lightbulb,
  Briefcase,
  Star,
  Cpu,
  Heart,
  Zap,
  Shield,
  Clock,
  Trophy,
  Calendar,
  Rocket,
  GraduationCap,
  TrendingUp
} from "lucide-react";

export default function About() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [achievementsRef, achievementsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [worldwideRef, worldwideInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const coreValues = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for the highest quality in every course, every interaction, and every outcome."
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Your success is our mission. We design every program with your career goals in mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly update our curriculum to match the latest industry trends and technologies."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest guidance, transparent pricing, and authentic learning experiences always."
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Quality tech education accessible to everyone, regardless of background or location."
    },
    {
      icon: Zap,
      title: "Impact",
      description: "Creating meaningful change in students' lives and contributing to the tech ecosystem."
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry-Recognized Certification",
      description: "Earn certificates that are valued by top companies worldwide"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from professionals with 10+ years of real-world experience"
    },
    {
      icon: Briefcase,
      title: "Guaranteed Internship",
      description: "Practical work experience with our partner companies"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Live classes with lifetime access to recorded sessions"
    },
    {
      icon: CheckCircle2,
      title: "100% Job Support",
      description: "Resume building, interview prep, and placement assistance"
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "Guaranteed satisfaction Industry level training with mentro and leadership skills."
    }
  ];

  const achievements = [
    { number: "5000+", label: "Students Trained" },
    { number: "150+", label: "Corporate Clients" },
    { number: "95%", label: "Placement Rate" },
    { number: "4.8/5", label: "Student Rating" },
    { number: "20+", label: "Expert Trainers" },
    { number: "50+", label: "Partner Companies" }
  ];

  const learningApproach = [
    {
      step: "01",
      title: "Assess Your Goals",
      description: "We start by understanding your career aspirations and current skill level to recommend the perfect program."
    },
    {
      step: "02",
      title: "Learn by Doing",
      description: "Hands-on projects from day one. Build real applications that solve actual business problems."
    },
    {
      step: "03",
      title: "Get Expert Guidance",
      description: "1:1 mentorship sessions to clear doubts, review your code, and guide your learning path."
    },
    {
      step: "04",
      title: "Work on Live Projects",
      description: "Collaborate with real clients or contribute to open-source projects for practical experience."
    },
    {
      step: "05",
      title: "Prepare for Jobs",
      description: "Mock interviews, resume reviews, and personalized career coaching to land your dream role."
    },
    {
      step: "06",
      title: "Continue Growing",
      description: "Lifetime access to our community, resources, and advanced courses for continuous learning."
    }
  ];

 const timelineData = [
  {
    year: "2020",
    title: "Beginning of Excellence",
    description: "Started professional and career-oriented tech training programs, fully managed and delivered independently",
    icon: Rocket,
    achievements: [
      "Launched first job-oriented training batches",
      "Strong focus on practical & industry-aligned learning",
      "Early success with highly positive outcomes"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "2021",
    title: "Industry-Ready Training",
    description: "Introduced specialized upskilling programs for IT professionals and freshers entering the workforce",
    icon: TrendingUp,
    achievements: [
      "Advanced curriculums introduced",
      "Collaborated with working professionals",
      "Major boost in placement-focused training"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    year: "2022",
    title: "Corporate Engagement",
    description: "Delivered professional on-job training for corporate teams with tailored modules across technologies",
    icon: Award,
    achievements: [
      "Corporate-level training programs executed",
      "Expanded industry network across India",
      "Specialized domain-based projects introduced"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2023",
    title: "National Expansion & Recognition",
    description: "Recognized as a trusted brand for career-oriented tech education across multiple states in India",
    icon: Globe,
    achievements: [
      "Training footprint across India",
      "Strong student success & placement stories",
      "Collaborations with top tech experts"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    year: "2024",
    title: "AI-Powered Learning",
    description: "Integrated AI-based tools, personalized mentoring, and real-time industry projects into the learning system",
    icon: Cpu,
    achievements: [
      "AI-enabled learning experiences",
      "Project-based training with industry standards",
      "Enhanced global-level curriculum"
    ],
    color: "from-yellow-500 to-amber-500"
  },
  {
    year: "2025",
    title: "Global Reach & Career Success",
    description: "Providing cross-border tech programs with corporate upskilling solutions and growing international presence",
    icon: GraduationCap,
    achievements: [
      "International training operations established",
      "Work-ready professionals trained globally",
      "Trusted by learners & organizations worldwide"
    ],
    color: "from-indigo-500 to-purple-500"
  }
];

  const teamValues = [
    "Passionate educators committed to student success",
    "Industry veterans from top tech companies",
    "Curriculum designers with pedagogical expertise",
    "Dedicated career counselors and mentors",
    "Student support team available 24/7"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden mt-[-130px] sm:mt-[-150px]">
        <BackgroundBeams />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 text-sm px-4 py-2">About IntelleQacademy</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
              Empowering the Next Generation of Tech Leaders
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to democratize quality tech education and bridge the gap
              between academic learning and industry requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <GlassCard className="p-8 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg flex-grow">
                  To provide world-class, affordable tech education that transforms
                  aspiring professionals into industry-ready experts. We believe in
                  practical learning, real-world projects, and personalized mentorship
                  to ensure every student achieves their career goals.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <GlassCard className="p-8 h-[350px] flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-chart-2 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg flex-grow">
                  To become the most trusted platform for tech education globally,
                  where students from any background can access cutting-edge skills,
                  build meaningful careers, and contribute to innovation that shapes
                  the future of technology.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyRef} className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose IntelleQAcademy?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets us apart from other training platforms
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={whyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full hover-elevate">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact by Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real students
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 hover:border-primary/50 transition-all hover-elevate">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section ref={approachRef} className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Learning Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 6-step methodology that ensures your success
            </p>
          </motion.div>

          <div className="space-y-6">
            {learningApproach.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={approachInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <GlassCard className="p-6 hover-elevate">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-lg">{step.description}</p>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent from-primary to-accent">
              Our Journey Through Time
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to becoming a leading force in tech education
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-chart-2 h-full"></div>

            <div className="space-y-12 lg:space-y-20">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                const isReversed = index % 2 === 0; // reverse every other card

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`relative flex flex-col lg:flex-row items-center lg:items-start ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Content Card */}
                    <div className={`lg:w-1/2 mb-6 lg:mb-0 ${isReversed ? 'lg:pr-16' : 'lg:pl-16'}`}>
                      <GlassCard className="hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-primary/50 rounded-2xl">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                <h3 className="text-2xl font-bold text-primary">{item.year}</h3>
                                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                              </div>
                              <p className="text-muted-foreground mb-3 leading-relaxed">
                                {item.description}
                              </p>
                              <ul className="space-y-1">
                                {item.achievements.map((achievement, achievementIndex) => (
                                  <li key={achievementIndex} className="flex items-center text-sm text-muted-foreground">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </GlassCard>
                    </div>

                    {/* Spacer for mobile */}
                    <div className="lg:w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* Team & Culture Section */}
      <section ref={teamRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The experts behind your learning journey
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Who We Are</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    IntelleQacademy is powered by a diverse team of tech enthusiasts,
                    educators, and industry professionals. Our instructors have worked
                    at companies like Google, Amazon, Microsoft, and leading startups,
                    bringing real-world expertise to every session.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We're not just teachers – we're mentors, career guides, and your
                    partners in success. Every team member is dedicated to one goal:
                    helping you achieve your career dreams.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Our Team Includes</h3>
                  <div className="space-y-4">
                    {teamValues.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={teamInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Worldwide Operations Section */}
      <section ref={worldwideRef} className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={worldwideInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Worldwide</span> Operations
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              From our headquarters in Bangalore to our offices in San Francisco and Europe, we deliver
              exceptional IT solutions and Industry 5.0 certifications to clients worldwide with strategic global presence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={worldwideInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12">
              <WorldMap />
            </GlassCard>
          </motion.div>


        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-chart-2/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of successful students who transformed their careers with IntelleQacademy
          </p>
        </div>
      </section>
    </div>
  );
}