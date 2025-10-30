import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Shield, Cloud, Code, Users, Zap, CheckCircle, Server, Lock, ArrowRight, Star } from "lucide-react"

export default function ITServicesFeaturesSection() {
  const features = [
    {
      title: "Cloud Solutions & Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with our expert guidance and 24/7 support.",
      skeleton: <CloudSkeleton />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r border-gray-200 dark:border-gray-800",
    },
    {
      title: "Cybersecurity Services",
      description: "Protect your business with enterprise-grade security solutions and threat monitoring.",
      skeleton: <SecuritySkeleton />,
      className: "border-b col-span-1 lg:col-span-2 border-gray-200 dark:border-gray-800",
    },
    {
      title: "Custom Software Development",
      description: "Build scalable applications tailored to your business needs with our expert development team.",
      skeleton: <DevelopmentSkeleton />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-gray-200 dark:border-gray-800",
    },
    {
      title: "24/7 IT Support & Consulting",
      description:
        "Get round-the-clock technical support and strategic IT consulting to keep your business running smoothly.",
      skeleton: <SupportSkeleton />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none border-gray-200 dark:border-gray-800",
    },
  ]

  return (
    <div className="relative z-20 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Comprehensive IT Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From cloud migration to cybersecurity, we provide end-to-end IT solutions that help your business scale and
            succeed in the digital age.
          </p>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 border rounded-xl shadow-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
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
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn(`p-6 sm:p-8 relative overflow-hidden bg-white dark:bg-gray-900`, className)}>{children}</div>
  )
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">{children}</h3>
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{children}</p>
}

const CloudSkeleton = () => {
  const services = [
    { name: "AWS Migration", status: "completed", icon: <Cloud className="w-5 h-5" /> },
    { name: "Azure Setup", status: "in-progress", icon: <Server className="w-5 h-5" /> },
    { name: "Database Optimization", status: "completed", icon: <CheckCircle className="w-5 h-5" /> },
    { name: "Load Balancing", status: "pending", icon: <Zap className="w-5 h-5" /> },
  ]

  return (
    <div className="relative h-64 sm:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">Cloud Migration Dashboard</h4>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Live</span>
          </div>
        </div>

        <div className="space-y-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={cn(
                    "p-2 rounded-full",
                    service.status === "completed"
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                      : service.status === "in-progress"
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400",
                  )}
                >
                  {service.icon}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{service.name}</span>
              </div>
              <div
                className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  service.status === "completed"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    : service.status === "in-progress"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
                )}
              >
                {service.status === "completed" ? "Done" : service.status === "in-progress" ? "Active" : "Queue"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SecuritySkeleton = () => {
  const threats = [
    { type: "Malware", blocked: 247, severity: "high" },
    { type: "Phishing", blocked: 89, severity: "medium" },
    { type: "DDoS", blocked: 12, severity: "high" },
  ]

  return (
    <div className="relative h-64 sm:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Security Monitor</h4>
          </div>
          <div className="flex items-center space-x-1">
            <Lock className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Protected</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Threats Blocked Today</span>
              <span className="text-2xl font-bold text-red-600 dark:text-red-400">348</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: "78%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            {threats.map((threat, idx) => (
              <motion.div
                key={threat.type}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm"
              >
                <span className="text-sm text-gray-900 dark:text-white">{threat.type}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{threat.blocked}</span>
                  <div
                    className={cn("w-2 h-2 rounded-full", threat.severity === "high" ? "bg-red-500" : "bg-yellow-500")}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const DevelopmentSkeleton = () => {
  const technologies = [
    { name: "React", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "AWS", color: "bg-orange-500" },
    { name: "Docker", color: "bg-blue-600" },
  ]

  return (
    <div className="relative h-64 sm:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Development Stack</h4>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Building</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Project Progress</span>
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">85%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn("px-3 py-1 rounded-full text-xs font-medium text-white", tech.color)}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">12</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Active Projects</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">98%</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SupportSkeleton = () => {
  const supportStats = [
    { label: "Avg Response Time", value: "< 2 min", icon: <Zap className="w-4 h-4" /> },
    { label: "Resolution Rate", value: "99.8%", icon: <CheckCircle className="w-4 h-4" /> },
    { label: "Client Satisfaction", value: "4.9/5", icon: <Star className="w-4 h-4" /> },
  ]

  return (
    <div className="relative h-64 sm:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Support Center</h4>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Online</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {supportStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                      {stat.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{stat.label}</span>
                  </div>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">{stat.value}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Active Support Tickets</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "92%" }}></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">23/25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
