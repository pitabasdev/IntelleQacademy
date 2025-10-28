import { useState } from "react";
import { useParams, Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GradientBackground } from "@/components/GradientBackground";
import { GlassCard } from "@/components/GlassCard";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Video,
  CheckCircle2,
  Award,
  Users,
  BookOpen,
  Briefcase,
  Calendar,
  TrendingUp,
  Play,
  Target,
  Code,
  Rocket,
  MessageSquare,
  HeadphonesIcon,
  GraduationCap,

} from "lucide-react";
import { coursesData } from "@/data/courses";
import courseVideoThumb from "../assets/generated_images/Course_video_thumbnail_95c49f3f.png";

export default function CourseDetail() {
  const params = useParams();
  const [, ] = useLocation();
  const courseId = params.id;
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  
  const course = coursesData.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="pt-6 text-center space-y-4">
            <h2 className="text-2xl font-bold">Course Not Found</h2>
            <p className="text-muted-foreground">The course you're looking for doesn't exist.</p>
            <Link href="/courses">
              <Button>Browse All Courses</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const features = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: Video, label: "Mode", value: course.mode },
    { icon: Award, label: "Certification", value: "Industry Recognized" },
    { icon: Users, label: "Mentorship", value: "1:1 Support" },
    { icon: Briefcase, label: "Internship", value: "Included" },
    { icon: TrendingUp, label: "Level", value: course.level },
  ];

  const benefits = [
    "Live interactive sessions with industry experts",
    "Hands-on projects and real-world case studies",
    "Placement assistance and resume building",
    "Lifetime access to course materials",
    "Industry-recognized certification",
    "Dedicated mentor support throughout the program",
    "Job-ready skills and portfolio development",
    "Networking opportunities with peers and professionals",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <GradientBackground variant="hero" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10" data-testid="button-back-to-courses">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="text-white space-y-6 relative z-10">
              <Badge variant="secondary" className="text-sm">
                {course.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
              <p className="text-xl text-white/90">{course.description}</p>
              <div className="flex flex-wrap gap-3">
                {course.highlights.map((highlight) => (
                  <Badge key={highlight} variant="outline" className="border-white/30 text-white">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {highlight}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-get-started">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Started
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => setIsEnrollModalOpen(true)}
                  data-testid="button-enroll-now"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group cursor-pointer"
            >
              <img
                src={courseVideoThumb}
                alt="Course preview"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </GradientBackground>

      {/* Course Features */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{feature.label}</div>
                      <div className="font-semibold text-lg">{feature.value}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Course Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
                <GlassCard hover={false}>
                  <CardContent className="pt-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </CardContent>
                </GlassCard>
              </div>

              {/* Week-wise Plan */}
              <div>
                <h2 className="text-3xl font-bold mb-6">8-Week Learning Plan</h2>
                <div className="space-y-4">
                  {[
                    { week: 1, title: "Foundation & Setup", topics: ["Introduction to fundamentals", "Development environment setup", "Basic concepts and syntax"] },
                    { week: 2, title: "Core Concepts", topics: ["Deep dive into core principles", "Hands-on exercises", "Best practices introduction"] },
                    { week: 3, title: "Intermediate Techniques", topics: ["Advanced concepts", "Real-world examples", "Code optimization"] },
                    { week: 4, title: "Project 1 - Basics", topics: ["Project planning", "Implementation phase 1", "Code review and refactoring"] },
                    { week: 5, title: "Advanced Topics", topics: ["Advanced frameworks", "Design patterns", "Performance optimization"] },
                    { week: 6, title: "Project 2 - Advanced", topics: ["Complex project implementation", "Integration techniques", "Testing strategies"] },
                    { week: 7, title: "Industry Best Practices", topics: ["Security considerations", "Scalability patterns", "Deployment strategies"] },
                    { week: 8, title: "Final Project & Review", topics: ["Capstone project", "Code review", "Career preparation"] }
                  ].map((weekPlan, index) => (
                    <motion.div
                      key={weekPlan.week}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Card className="hover-elevate cursor-pointer">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold">{weekPlan.week}</span>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-muted-foreground">Week {weekPlan.week}</div>
                              <h3 className="font-bold text-lg">{weekPlan.title}</h3>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {weekPlan.topics.map((topic, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Detailed Curriculum</h2>
                <GlassCard hover={false}>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {course.syllabus?.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 group">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <span className="text-sm font-semibold text-primary">{index + 1}</span>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-foreground">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </GlassCard>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Hands-On Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Beginner Project",
                      description: "Build a foundational project applying core concepts",
                      skills: ["Fundamentals", "Basic Syntax", "Problem Solving"]
                    },
                    {
                      title: "Intermediate Project",
                      description: "Create a real-world application with multiple features",
                      skills: ["API Integration", "State Management", "Testing"]
                    },
                    {
                      title: "Advanced Project",
                      description: "Develop a production-ready full-scale application",
                      skills: ["Architecture Design", "Optimization", "Deployment"]
                    },
                    {
                      title: "Capstone Project",
                      description: "Portfolio-worthy project showcasing all learned skills",
                      skills: ["Full Stack", "Best Practices", "Documentation"]
                    }
                  ].map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover-elevate">
                        <CardHeader>
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center mb-3">
                            <Code className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Career Path */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Career Path After Completion</h2>
                <GlassCard hover={false}>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {[
                        {
                          role: "Junior Developer",
                          salary: "₹4-6 LPA",
                          companies: ["Startups", "IT Services"],
                          icon: Rocket
                        },
                        {
                          role: "Mid-Level Developer",
                          salary: "₹8-15 LPA",
                          companies: ["Product Companies", "Consultancies"],
                          icon: Target
                        },
                        {
                          role: "Senior Developer / Lead",
                          salary: "₹18-30 LPA",
                          companies: ["FAANG", "Unicorns", "MNCs"],
                          icon: Award
                        }
                      ].map((path, ) => (
                        <div key={path.role} className="flex items-start gap-4 pb-6 border-b last:border-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                            <path.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-1">{path.role}</h4>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                                {path.salary}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Typical employers: {path.companies.join(", ")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </GlassCard>
              </div>

              {/* Support */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Learning Support</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Users,
                      title: "1:1 Mentorship",
                      description: "Dedicated mentor assigned for personalized guidance throughout your journey"
                    },
                    {
                      icon: MessageSquare,
                      title: "24/7 Community Support",
                      description: "Active Discord community with fellow learners and alumni for instant help"
                    },
                    {
                      icon: HeadphonesIcon,
                      title: "Doubt Clearing Sessions",
                      description: "Weekly live Q&A sessions to resolve all your queries and challenges"
                    },
                    {
                      icon: BookOpen,
                      title: "Learning Resources",
                      description: "Comprehensive study materials, code samples, and reference documentation"
                    }
                  ].map((support, index) => (
                    <motion.div
                      key={support.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover-elevate">
                        <CardContent className="pt-6 space-y-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <support.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-bold text-lg">{support.title}</h4>
                          <p className="text-sm text-muted-foreground">{support.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
                <GlassCard hover={false}>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-3">
                      {course.tools?.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-base px-4 py-2">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </GlassCard>
              </div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Enroll Card */}
                <GlassCard hover={false} className="border-2 border-primary/20">
                  <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10">
                    <CardTitle className="text-2xl">Enroll Now</CardTitle>
                    <p className="text-sm text-muted-foreground">Limited seats available!</p>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Next Batch Starts</span>
                        </div>
                        <span className="font-bold text-primary">15 Nov 2025</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Seats Available</span>
                        </div>
                        <Badge variant="destructive" className="font-bold">
                          12 Left
                        </Badge>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Duration</span>
                        </div>
                        <span className="font-bold">{course.duration}</span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Mode</span>
                        </div>
                        <span className="font-bold">{course.mode}</span>
                      </div>
                    </div>

                    <Separator />

                    {course.price && (
                      <div className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Course Fee</span>
                          {course.originalPrice && (
                            <Badge variant="secondary" className="bg-green-500/10 text-green-600">
                              Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-baseline gap-3">
                          <span className="text-4xl font-bold text-primary">
                            ₹{course.price.toLocaleString('en-IN')}
                          </span>
                          {course.originalPrice && (
                            <span className="text-xl text-muted-foreground line-through">
                              ₹{course.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Limited time offer - Enroll now!
                        </p>
                      </div>
                    )}

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Placement assistance included</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Industry certification</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Lifetime course access</span>
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() => setIsEnrollModalOpen(true)}
                      data-testid="button-enroll-sidebar"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Enroll Now - Secure Your Spot
                    </Button>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full" data-testid="button-contact-us">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Request More Info
                      </Button>
                    </Link>

                    <div className="text-center pt-2">
                      <p className="text-xs text-muted-foreground">
                        🔥 <span className="font-semibold">{course.mentees}</span> students already enrolled
                      </p>
                    </div>
                  </CardContent>
                </GlassCard>

                {/* Program Benefits */}
                <GlassCard hover={false}>
                  <CardHeader>
                    <CardTitle>Program Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-chart-2/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Career with {course.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of successful professionals who started their journey with IntelleQacademy
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsEnrollModalOpen(true)}
              data-testid="button-enroll-cta"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Enroll Now
            </Button>
            <Link href="/courses">
              <Button size="lg" variant="outline" data-testid="button-explore-courses">
                Explore More Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseTitle={course.title}
        courseId={course.id}
      />
    </div>
  );
}
