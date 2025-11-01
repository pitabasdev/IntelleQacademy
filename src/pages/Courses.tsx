import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { GradientText } from "@/components/aceternity/GradientText";
import { TextReveal } from "@/components/aceternity/TextReveal";
import { FloatingCard } from "@/components/aceternity/FloatingCard";
import { MovingBorder } from "@/components/aceternity/MovingBorder";
import { SpotlightEffect } from "@/components/aceternity/SpotlightEffect";
import { motion } from "framer-motion";
import {

  Video, ArrowRight, Award, Users, BookOpen, CheckCircle2,
  Sparkles, Target, Briefcase, GraduationCap, Star, Calendar
} from "lucide-react";
import { coursesData } from "@/data/courses";
import heroImage from "./modern_tech_educatio_985c7633.jpg";
import learningImage from "../assets/stock_images/modern_tech_educatio_858447fc.jpg";
import workshopImage from "../assets/stock_images/programming_bootcamp_42169cf9.jpg";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popularity");

  const categories = ["all", ...Array.from(new Set(coursesData.map(c => c.category)))];
  const durations = ["all", "2 Months"];
  const levels = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = coursesData.filter(course => {
    const categoryMatch = selectedCategory === "all" || course.category === selectedCategory;
    const durationMatch = selectedDuration === "all" || course.duration === selectedDuration;
    const levelMatch = selectedLevel === "all" || course.level === selectedLevel;
    return categoryMatch && durationMatch && levelMatch;
  });

  // const getIcon = (category: string) => {
  //   switch (category) {
  //     case "Web Development": return Code;
  //     case "Data Science": return Database;
  //     case "AI": return TrendingUp;
  //     case "Cyber Security": return Shield;
  //     case "DevOps": return Cloud;
  //     case "Mobile Development": return Smartphone;
  //     case "Design": return Palette;
  //     case "Marketing": return TrendingUp;
  //     case "Programming": return Code;
  //     default: return Code;
  //   }
  // };

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
      case "AI":
        return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988622/GEN_AI_xteud8.png";
       case "Deep Learning & LLM":
        return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988626/DEEP_LEARNING_ekldwv.png";
      case "Cyber Security":
        return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988616/CYBERSECURITY_yjqhuj.png";
       case "Ethical Hacking":
        return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988627/ETHICAL_HACKING_ljwinp.png";
      case "DevOps":
        return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988615/CLOUD_COMPUTING_zobcb2.png";
      case "Design":
        return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988627/UIUX_eisdpv.png";
      case "Programming":
        return "https://res.cloudinary.com/dhe93bqbx/image/upload/v1761988619/PYTHON_DEVELOPMENT_ho69z5.png";
      default:
        return "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80";
    }
  };

  const stats = [
    { icon: GraduationCap, value: "11+", label: "Expert-Led Programs" },
    { icon: Users, value: "5000+", label: "Active Learners" },
    { icon: Award, value: "100%", label: "Certification" },
    { icon: Briefcase, value: "95%", label: "Placement Rate" }
  ];

  const benefits = [
    {
      icon: Video,
      title: "Live Interactive Sessions",
      description: "Attend real-time classes with industry experts and get your doubts cleared instantly"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "2-month intensive programs covering everything from basics to advanced concepts"
    },
    {
      icon: Target,
      title: "Project-Based Learning",
      description: "Build 5+ real-world projects to strengthen your portfolio and practical skills"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Earn recognized certificates and prepare for industry-standard certifications"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-background/95 mt-[-130px] sm:mt-[-170px]">
        <BackgroundBeams />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  <GradientText>11 Industry-Ready Programs</GradientText>
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <TextReveal>
                  <span className="block">Master the Skills</span>
                </TextReveal>
                <GradientText className="block mt-2">
                  <TextReveal delay={0.2}>
                    <span>That Matter</span>
                  </TextReveal>
                </GradientText>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Transform your career with our comprehensive 2-month training programs. Learn from industry experts, build real projects, and get certified in high-demand tech skills.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="text-base group"
                  data-testid="button-browse-courses"
                  onClick={() => {
                    const coursesSection = document.getElementById('courses-grid');
                    coursesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  Browse All Courses
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-base" data-testid="button-talk-advisor">
                    Talk to an Advisor
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <SpotlightEffect key={stat.label} className="w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10"
                    >
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold">
                        <GradientText>{stat.value}</GradientText>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </motion.div>
                  </SpotlightEffect>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Students learning technology"
                className="relative rounded-3xl shadow-2xl w-full border border-primary/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 bg-gradient-to-b from-background/95 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose <GradientText>IntelleQacademy</GradientText> Programs?
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              Our comprehensive training programs are designed to make you job-ready with practical skills, industry certifications, and hands-on experience.
            </p>
          </TextReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FloatingCard key={benefit.title} delay={index * 0.1}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                <img
                  src={learningImage}
                  alt="Interactive learning environment"
                  className="relative rounded-2xl shadow-xl w-full border border-primary/20"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Everything You Need to <GradientText>Succeed</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our programs include comprehensive resources and support to ensure your success in the tech industry.
              </p>

              <div className="space-y-4">
                {[
                  "Live interactive classes with Q&A sessions",
                  "Lifetime access to recorded sessions",
                  "Real-world project portfolio development",
                  "1:1 mentorship from industry experts",
                  "Resume building and interview preparation",
                  "Internship opportunities with partner companies",
                  "Industry-recognized certifications",
                  "Dedicated placement assistance"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 md:py-12 border-y border-border bg-card/50 backdrop-blur-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full">
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger data-testid="filter-category" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <label className="text-sm font-medium mb-2 block">Duration</label>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger data-testid="filter-duration" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {durations.map(dur => (
                    <SelectItem key={dur} value={dur}>
                      {dur === "all" ? "All Durations" : dur}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <label className="text-sm font-medium mb-2 block">Level</label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger data-testid="filter-level" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>
                      {level === "all" ? "All Levels" : level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <label className="text-sm font-medium mb-2 block">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger data-testid="sort-by" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="latest">Latest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <span className="font-semibold">{filteredCourses.length}</span> courses found
            </Badge>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses-grid" className="py-16 bg-gradient-to-b from-background to-background/95 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No courses found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => {

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <MovingBorder duration={3000} className="h-full">
                      <Card className="h-full bg-card/80 backdrop-blur-sm border-0 flex flex-col overflow-hidden">
                        <div className="relative h-48 overflow-hidden flex-shrink-0">
                          <img
                            src={getCourseImage(course.category)}
                            alt={course.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                          {course.level === "Advanced" && (
                            <Badge className="absolute top-4 right-4 bg-primary text-white">
                              Best Seller
                            </Badge>
                          )}
                        </div>
                        <CardHeader className="flex-shrink-0">
                          <CardTitle className="text-xl mb-3">{course.title}</CardTitle>
                          <CardDescription>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{course.description}</p>
                            <div className="flex items-center gap-2 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(course.rating || 0)
                                      ? 'fill-yellow-500 text-yellow-500'
                                      : i < (course.rating || 0)
                                        ? 'fill-yellow-500 text-yellow-500 opacity-50'
                                        : 'text-gray-300'
                                    }`}
                                />
                              ))}
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                <span>{course.mentees} Mentees</span>
                              </div>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-1 flex flex-col justify-end">
                          {course.price && (
                            <div className="flex items-baseline gap-3 pb-2 border-t pt-4">
                              <span className="text-3xl font-bold text-primary">
                                ₹{course.price.toLocaleString('en-IN')}
                              </span>
                              {course.originalPrice && (
                                <>
                                  <span className="text-lg text-muted-foreground line-through">
                                    ₹{course.originalPrice.toLocaleString('en-IN')}
                                  </span>
                                  <Badge variant="secondary" className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
                                    {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                                  </Badge>
                                </>
                              )}
                            </div>
                          )}
                          <Link href={`/courses/${course.id}`} className="w-full">
                            <Button
                              className="w-full group"
                              data-testid={`button-details-${course.id}`}
                            >
                              Know More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </MovingBorder>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What You'll <GradientText>Achieve</GradientText>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              Our courses are designed to help you achieve your career goals with industry-relevant skills
            </p>
          </TextReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Industry-Ready Skills",
                description: "Master the exact technologies and frameworks used by top tech companies worldwide"
              },
              {
                icon: Award,
                title: "Recognized Certifications",
                description: "Earn certificates that boost your resume and credibility with employers"
              },
              {
                icon: BookOpen,
                title: "Portfolio Projects",
                description: "Build 5+ real-world projects that showcase your expertise to potential employers"
              },
              {
                icon: Users,
                title: "Professional Network",
                description: "Connect with industry mentors, fellow learners, and hiring partners"
              },
              {
                icon: Briefcase,
                title: "Career Advancement",
                description: "Get placement assistance, interview prep, and direct company connections"
              },
              {
                icon: GraduationCap,
                title: "Lifetime Learning",
                description: "Access course materials and updates forever, stay current with tech trends"
              }
            ].map((outcome, index) => (
              <FloatingCard key={outcome.title} delay={index * 0.1}>
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <outcome.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg">{outcome.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories from Our Alumni</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from students who achieved their career goals with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Amit Sharma",
                role: "Full Stack Developer",
                company: "Google",
                course: "MERN Stack",
                testimonial: "IntelleQacademy's MERN Stack course was life-changing. The hands-on projects and expert mentorship helped me land my dream job at Google!",
                salary: "₹28 LPA"
              },
              {
                name: "Priya Patel",
                role: "Data Scientist",
                company: "Microsoft",
                course: "Data Science & ML",
                testimonial: "The Data Science program gave me the skills and confidence to transition from a non-tech background to becoming a Data Scientist.",
                salary: "₹32 LPA"
              },
              {
                name: "Rahul Singh",
                role: "Security Analyst",
                company: "Cisco",
                course: "Cybersecurity",
                testimonial: "Best investment in my career! The practical approach and industry connections helped me secure a role in cybersecurity.",
                salary: "₹24 LPA"
              }
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <SpotlightEffect className="h-full">
                  <Card className="h-full hover:shadow-xl transition-shadow flex flex-col">
                    <CardContent className="pt-6 space-y-4 flex flex-col flex-1">
                      <div className="flex items-center justify-between flex-shrink-0">
                        <div>
                          <div className="font-bold text-lg">{story.name}</div>
                          <div className="text-sm text-muted-foreground">{story.role} at {story.company}</div>
                        </div>
                        <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400 font-semibold">
                          {story.salary}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground italic flex-1">"{story.testimonial}"</p>
                      <div className="pt-2 flex-shrink-0">
                        <Badge variant="outline" className="text-xs">
                          Completed: {story.course}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </SpotlightEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <GradientText>Questions</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our programs
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I enroll if I'm a complete beginner?",
                a: "Absolutely! Most of our courses are designed for beginners. We provide foundational content and gradually progress to advanced topics. Our mentors guide you every step of the way."
              },
              {
                q: "How long will I have access to the course materials?",
                a: "You get lifetime access to all course materials, including live session recordings, projects, and resources. You can revisit and learn at your own pace anytime."
              },
              {
                q: "What is the refund policy?",
                a: "We offer a 7-day money-back guarantee if you're not satisfied with the course. No questions asked! Your satisfaction is our priority."
              },
              {
                q: "Will I get a job after completing the course?",
                a: "While we can't guarantee a job, we provide comprehensive placement assistance including resume building, interview preparation, and connections with 100+ hiring partners. 95% of our students get placed within 6 months."
              },
              {
                q: "Can I switch between different courses?",
                a: "Yes! If you find that a course isn't the right fit, you can switch to another program within the first two weeks. We want you to find the perfect learning path."
              },
              {
                q: "Are the classes live or pre-recorded?",
                a: "We offer a hybrid approach - live interactive sessions for real-time learning and doubt clearing, plus recorded sessions for revision and flexible learning. Best of both worlds!"
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
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground pl-9">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background/95 to-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-2/20 backdrop-blur-sm" />
            <img
              src={workshopImage}
              alt="Join our tech training programs"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10 text-center py-20 px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 max-w-3xl mx-auto"
              >
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to Start Your <GradientText>Tech Journey</GradientText>?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of successful learners who transformed their careers with IntelleQacademy. Get personalized guidance from our advisors.
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Link href="/get-quote">
                    <Button size="lg" className="text-base" data-testid="button-get-quote">
                      Get a Free Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="text-base backdrop-blur-sm" data-testid="button-contact-us">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
