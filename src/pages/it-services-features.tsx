import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Shield, Cloud, Code, Users, Zap, CheckCircle, Server, ArrowRight, BookOpen, Video, GraduationCap, Target, Clock, Award } from "lucide-react"

export default function ITTrainingFeaturesSection() {
  const features = [
    {
      title: "Cloud Certification Training",
      description: "Master AWS, Azure, and Google Cloud with hands-on labs and expert-led certification programs.",
      skeleton: <CloudTrainingSkeleton />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r border-gray-200 dark:border-gray-800",
    },
    {
      title: "Cybersecurity Bootcamps",
      description: "Become a security expert with intensive training in ethical hacking, threat analysis, and defense strategies.",
      skeleton: <SecurityTrainingSkeleton />,
      className: "border-b col-span-1 lg:col-span-2 border-gray-200 dark:border-gray-800",
    },
    {
      title: "Full-Stack Development Courses",
      description: "Learn modern web development with React, Node.js, and cloud technologies through project-based learning.",
      skeleton: <DevelopmentTrainingSkeleton />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-gray-200 dark:border-gray-800",
    },
    {
      title: "IT Support & Career Pathways",
      description: "Start your IT career with comprehensive support training and job placement assistance programs.",
      skeleton: <CareerTrainingSkeleton />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none border-gray-200 dark:border-gray-800",
    },
  ]

  return (
    <div className="relative z-20 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6"
          >
            <GraduationCap className="w-4 h-4" />
            Transform Your IT Career
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Professional IT Training Programs
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Accelerate your career with industry-recognized certifications, hands-on projects, and expert mentorship in today's most demanded technologies.
          </p>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 border rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} className={feature.className} index={index}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full mt-6">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
  index,
}: {
  children?: React.ReactNode
  className?: string
  index?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index || 0) * 0.1 }}
      className={cn(`p-6 sm:p-8 relative overflow-hidden bg-white dark:bg-gray-900 group hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300`, className)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {children}
    </motion.div>
  )
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
      {children}
    </h3>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
      {children}
    </p>
  )
}

const CloudTrainingSkeleton = () => {
  const courses = [
    { name: "AWS Solutions Architect", progress: 85, students: 1247, icon: <Cloud className="w-4 h-4" /> },
    { name: "Azure Fundamentals", progress: 92, students: 892, icon: <Server className="w-4 h-4" /> },
    { name: "Google Cloud Associate", progress: 78, students: 567, icon: <Zap className="w-4 h-4" /> },
    { name: "Kubernetes Certification", progress: 65, students: 423, icon: <CheckCircle className="w-4 h-4" /> },
  ]

  return (
    <div className="relative h-64 sm:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h4 className="font-bold text-gray-900 dark:text-white">Popular Courses</h4>
          </div>
          <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 px-2 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Live Classes</span>
          </div>
        </div>

        <div className="space-y-4">
          {courses.map((course, idx) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    {course.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{course.name}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{course.students} students</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{course.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SecurityTrainingSkeleton = () => {
  const bootcamps = [
    { name: "Ethical Hacking", duration: "12 weeks", level: "Advanced", enrolled: true },
    { name: "SOC Analyst", duration: "8 weeks", level: "Intermediate", enrolled: false },
    { name: "Network Security", duration: "10 weeks", level: "Intermediate", enrolled: true },
  ]

  return (
    <div className="relative h-64 sm:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
            <h4 className="font-bold text-gray-900 dark:text-white">Security Bootcamps</h4>
          </div>
          <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 px-2 py-1 rounded-full">
            <Target className="w-3 h-3 text-red-500" />
            <span className="text-xs text-red-600 dark:text-red-400 font-medium">Intensive</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Certification Rate</span>
              <span className="text-lg font-bold text-green-600 dark:text-green-400">94%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: "94%" }}></div>
            </div>
          </div>

          <div className="space-y-3">
            {bootcamps.map((bootcamp, idx) => (
              <motion.div
                key={bootcamp.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div>
                  <div className="font-medium text-sm text-gray-900 dark:text-white">{bootcamp.name}</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{bootcamp.duration}</span>
                    <span className={cn(
                      "text-xs px-1.5 py-0.5 rounded-full",
                      bootcamp.level === "Advanced" 
                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                    )}>
                      {bootcamp.level}
                    </span>
                  </div>
                </div>
                <div className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  bootcamp.enrolled
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                )}>
                  {bootcamp.enrolled ? "Enrolled" : "Available"}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const DevelopmentTrainingSkeleton = () => {
  const tracks = [
    { technology: "React & Next.js", projects: 8, duration: "6 weeks", color: "bg-blue-500" },
    { technology: "Node.js & Express", projects: 6, duration: "5 weeks", color: "bg-green-500" },
    { technology: "Python & Django", projects: 7, duration: "7 weeks", color: "bg-yellow-500" },
    { technology: "Cloud Deployment", projects: 4, duration: "4 weeks", color: "bg-orange-500" },
  ]

  return (
    <div className="relative h-64 sm:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h4 className="font-bold text-gray-900 dark:text-white">Learning Tracks</h4>
          </div>
          <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 px-2 py-1 rounded-full">
            <Video className="w-3 h-3 text-purple-500" />
            <span className="text-xs text-gray-600 dark:text-gray-300">Project-Based</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Portfolio Builder</span>
              <span className="text-sm text-purple-600 dark:text-purple-400 font-bold">25+ Projects</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {tracks.map((track, idx) => (
                <motion.div
                  key={track.technology}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn("px-2 py-1 rounded text-xs font-medium text-white text-center", track.color)}
                >
                  {track.technology.split('&')[0].trim()}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm text-center border border-gray-100 dark:border-gray-700">
              <div className="text-lg font-bold text-gray-900 dark:text-white">1:1</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Mentorship</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm text-center border border-gray-100 dark:border-gray-700">
              <div className="text-lg font-bold text-gray-900 dark:text-white">98%</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Job Success</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CareerTrainingSkeleton = () => {
  const pathways = [
    { role: "IT Support Specialist", duration: "3 months", salary: "$55K", demand: "high" },
    { role: "Cloud Engineer", duration: "6 months", salary: "$95K", demand: "very high" },
    { role: "Security Analyst", duration: "5 months", salary: "$85K", demand: "high" },
  ]

  return (
    <div className="relative h-64 sm:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h4 className="font-bold text-gray-900 dark:text-white">Career Pathways</h4>
          </div>
          <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 px-2 py-1 rounded-full">
            <Award className="w-3 h-3 text-green-500" />
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Guaranteed</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {pathways.map((pathway, idx) => (
              <motion.div
                key={pathway.role}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">{pathway.role}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{pathway.duration}</span>
                      <span className={cn(
                        "text-xs px-1.5 py-0.5 rounded-full",
                        pathway.demand === "very high" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      )}>
                        {pathway.demand}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">{pathway.salary}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Job Placement Rate</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "96%" }}></div>
              </div>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">96%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}