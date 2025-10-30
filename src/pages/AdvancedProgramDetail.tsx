import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Clock,
  Users,
  CheckCircle2,
  Star,
  BookOpen,
  TrendingUp,
  Code,
  GraduationCap,
  FileText,
  ArrowLeft,
  Target,
  Award,
  Briefcase,
  Video,
  Lightbulb,
  MessageSquare,
  Globe,
  Zap,
  Trophy,
} from "lucide-react";
import digitalMarketingImage from "../assets/stock_images/business_professiona_61d491d1.jpg";
import dataScienceImage from "../assets/stock_images/data_science_analyti_bfd03135.jpg";

const advancedPrograms = {
  "digital-marketing": {
    title: "Digital Marketing",
    badge: "Trending",
    description: "Digital Marketing to boost your online presence and engage with your audience effectively. Learn strategies to drive traffic, increase conversions, and grow your brand.",
    duration: "6 Months",
    mentees: "20k+",
    image: digitalMarketingImage,
    certification: ["Google", "HubSpot"],
    fullDescription: "Master the art and science of Digital Marketing with our comprehensive program. Learn to create data-driven marketing strategies, manage social media campaigns, optimize for search engines, and build effective email marketing funnels. This course prepares you for a successful career in the digital marketing industry.",
    highlights: [
      "100% Job Oriented Program",
      "Live Interactive Sessions",
      "Real-World Case Studies",
      "Industry Expert Mentors",
      "Capstone Projects",
      "Interview Preparation"
    ],
    whoShouldEnroll: [
      "Marketing professionals looking to upskill in digital channels",
      "Business owners wanting to grow their online presence",
      "Fresh graduates seeking careers in digital marketing",
      "Traditional marketers transitioning to digital",
      "Entrepreneurs building their brand online",
      "Freelancers expanding their service offerings"
    ],
    prerequisites: [
      "Basic understanding of marketing concepts",
      "Familiarity with social media platforms",
      "Basic computer skills and internet navigation",
      "No coding knowledge required"
    ],
    curriculum: [
      {
        module: "Module 1: Digital Marketing Fundamentals",
        topics: ["Introduction to Digital Marketing", "Understanding the Digital Landscape", "Digital Marketing Strategy", "Customer Journey Mapping"]
      },
      {
        module: "Module 2: Search Engine Optimization (SEO)",
        topics: ["On-page SEO Techniques", "Off-page SEO & Link Building", "Technical SEO", "SEO Tools & Analytics"]
      },
      {
        module: "Module 3: Search Engine Marketing (SEM)",
        topics: ["Google Ads Fundamentals", "PPC Campaign Management", "Keyword Research", "Ad Copywriting & A/B Testing"]
      },
      {
        module: "Module 4: Social Media Marketing",
        topics: ["Facebook & Instagram Marketing", "LinkedIn Marketing", "Twitter & Pinterest Strategies", "Social Media Analytics"]
      },
      {
        module: "Module 5: Content Marketing",
        topics: ["Content Strategy & Planning", "Copywriting Essentials", "Video Marketing", "Content Distribution"]
      },
      {
        module: "Module 6: Email Marketing & Automation",
        topics: ["Email Marketing Fundamentals", "List Building Strategies", "Email Automation Workflows", "Newsletter Design"]
      },
      {
        module: "Module 7: Analytics & Data-Driven Marketing",
        topics: ["Google Analytics Mastery", "Conversion Tracking", "Data Interpretation", "ROI Measurement"]
      },
      {
        module: "Module 8: Advanced Topics",
        topics: ["Marketing Automation", "Influencer Marketing", "Affiliate Marketing", "Conversion Rate Optimization"]
      }
    ],
    outcomes: [
      "Plan and execute comprehensive digital marketing campaigns",
      "Master Google Analytics and marketing analytics tools",
      "Create engaging content for various social media platforms",
      "Optimize websites for search engines (SEO)",
      "Run successful paid advertising campaigns",
      "Build and manage email marketing campaigns"
    ],
    tools: ["Google Analytics", "SEMrush", "Hootsuite", "Mailchimp", "HubSpot", "Facebook Ads Manager", "Google Ads", "Canva", "Buffer", "Ahrefs"],
    careerOpportunities: [
      { role: "Digital Marketing Manager", salary: "₹6-12 LPA" },
      { role: "SEO Specialist", salary: "₹4-8 LPA" },
      { role: "Social Media Manager", salary: "₹4-9 LPA" },
      { role: "PPC Specialist", salary: "₹5-10 LPA" },
      { role: "Content Marketing Manager", salary: "₹5-11 LPA" },
      { role: "Marketing Analyst", salary: "₹6-12 LPA" }
    ],
    programFeatures: [
      { icon: Video, title: "Live Classes", description: "60+ hours of live interactive sessions with industry experts" },
      { icon: Briefcase, title: "Real Projects", description: "Work on 5+ live projects from real companies" },
      { icon: Award, title: "Certifications", description: "Google & HubSpot certification exam preparation" },
      { icon: Users, title: "1:1 Mentorship", description: "Personal guidance from experienced digital marketers" },
      { icon: Globe, title: "Industry Network", description: "Connect with 500+ marketing professionals" },
      { icon: Trophy, title: "Placement Support", description: "Dedicated placement assistance and career guidance" }
    ],
    faqs: [
      {
        question: "What is the duration of this program?",
        answer: "The program is 6 months long with flexible learning options. You can access course materials 24/7 and attend live sessions scheduled on weekends."
      },
      {
        question: "Do I need any prior experience in marketing?",
        answer: "No prior experience is required. This program is designed for both beginners and professionals looking to upskill. We start with fundamentals and gradually progress to advanced topics."
      },
      {
        question: "Will I get placement assistance?",
        answer: "Yes! We provide comprehensive placement assistance including resume building, interview preparation, and job referrals to our partner companies."
      },
      {
        question: "What certifications will I receive?",
        answer: "Upon completion, you'll receive our program certificate. Additionally, we prepare you for Google Analytics, Google Ads, and HubSpot certification exams."
      },
      {
        question: "Can I do this course while working full-time?",
        answer: "Absolutely! The program is designed for working professionals with weekend live sessions and flexible self-paced learning throughout the week."
      }
    ],
    price: "₹39,999",
    emi: "₹3,333/month",
    originalPrice: "₹89,999"
  },
  "data-science": {
    title: "Data Science",
    badge: "Popular",
    description: "Master Data Science to unlock valuable insights from data and make informed decisions. Gain expertise in data analysis, machine learning, and predictive modeling.",
    duration: "6 Months",
    mentees: "20k+",
    image: dataScienceImage,
    certification: ["IBM", "Microsoft"],
    fullDescription: "Dive deep into the world of Data Science with our industry-leading program. Learn to analyze complex datasets, build machine learning models, and create predictive analytics solutions. This comprehensive course covers everything from basic statistics to advanced deep learning techniques.",
    highlights: [
      "Industry-Recognized Curriculum",
      "Hands-on ML Projects",
      "Real Dataset Analysis",
      "Expert Data Scientists as Mentors",
      "AI & Deep Learning Modules",
      "Job Guarantee Program"
    ],
    whoShouldEnroll: [
      "Software engineers transitioning to data science",
      "Analytics professionals seeking advanced skills",
      "Recent graduates from STEM backgrounds",
      "Business analysts wanting to leverage ML",
      "Researchers working with data",
      "Tech professionals exploring AI/ML careers"
    ],
    prerequisites: [
      "Basic programming knowledge (preferably Python)",
      "Understanding of basic mathematics and statistics",
      "Familiarity with Excel or data manipulation",
      "Graduate degree in any field (preferred but not mandatory)"
    ],
    curriculum: [
      {
        module: "Module 1: Python for Data Science",
        topics: ["Python Fundamentals", "NumPy & Pandas", "Data Structures", "File Handling & APIs"]
      },
      {
        module: "Module 2: Statistics & Probability",
        topics: ["Descriptive Statistics", "Probability Distributions", "Hypothesis Testing", "Statistical Inference"]
      },
      {
        module: "Module 3: Data Wrangling & Analysis",
        topics: ["Data Cleaning Techniques", "Missing Data Handling", "Feature Engineering", "Exploratory Data Analysis"]
      },
      {
        module: "Module 4: Data Visualization",
        topics: ["Matplotlib & Seaborn", "Tableau Fundamentals", "Power BI Basics", "Interactive Dashboards"]
      },
      {
        module: "Module 5: Machine Learning Fundamentals",
        topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Cross-Validation"]
      },
      {
        module: "Module 6: Advanced Machine Learning",
        topics: ["Ensemble Methods", "Random Forests & Gradient Boosting", "Feature Selection", "Hyperparameter Tuning"]
      },
      {
        module: "Module 7: Deep Learning & Neural Networks",
        topics: ["Neural Network Basics", "CNN for Computer Vision", "RNN & LSTM", "Transfer Learning"]
      },
      {
        module: "Module 8: Specialized Topics",
        topics: ["Natural Language Processing", "Time Series Analysis", "Recommendation Systems", "Big Data with PySpark"]
      },
      {
        module: "Module 9: MLOps & Deployment",
        topics: ["Model Deployment", "Docker & Kubernetes", "Cloud ML Services", "ML Pipeline Automation"]
      }
    ],
    outcomes: [
      "Analyze and visualize complex datasets",
      "Build and deploy machine learning models",
      "Work with big data technologies",
      "Create predictive analytics solutions",
      "Apply statistical methods to solve business problems",
      "Communicate insights effectively to stakeholders"
    ],
    tools: ["Python", "R", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Tableau", "Power BI", "SQL", "Jupyter", "Git", "Docker", "AWS/Azure"],
    careerOpportunities: [
      { role: "Data Scientist", salary: "₹8-18 LPA" },
      { role: "Machine Learning Engineer", salary: "₹10-25 LPA" },
      { role: "Data Analyst", salary: "₹5-12 LPA" },
      { role: "AI Engineer", salary: "₹12-30 LPA" },
      { role: "Business Intelligence Analyst", salary: "₹6-14 LPA" },
      { role: "Research Scientist", salary: "₹15-35 LPA" }
    ],
    programFeatures: [
      { icon: Video, title: "Live Classes", description: "80+ hours of instructor-led live sessions" },
      { icon: Briefcase, title: "Capstone Projects", description: "Work on 8+ industry-standard ML projects" },
      { icon: Award, title: "Certifications", description: "IBM & Microsoft certification preparation included" },
      { icon: Users, title: "Expert Mentorship", description: "1:1 guidance from practicing data scientists" },
      { icon: Code, title: "Coding Practice", description: "500+ coding exercises and assignments" },
      { icon: Trophy, title: "Job Guarantee", description: "100% job assistance with top tech companies" }
    ],
    faqs: [
      {
        question: "Is programming experience mandatory?",
        answer: "Basic programming knowledge is recommended. If you know Python basics, that's great! If not, we have a foundation module to get you started."
      },
      {
        question: "What makes this program different from others?",
        answer: "Our program combines theoretical knowledge with extensive hands-on practice. You'll work on real datasets, build production-ready models, and learn from data scientists working at top companies."
      },
      {
        question: "Will I learn deep learning and AI?",
        answer: "Yes! The curriculum includes comprehensive modules on deep learning, neural networks, computer vision, and NLP. You'll work with TensorFlow and PyTorch."
      },
      {
        question: "What kind of projects will I work on?",
        answer: "You'll build 8+ projects including customer churn prediction, image classification, sentiment analysis, recommendation engines, and time series forecasting."
      },
      {
        question: "Is this suitable for non-CS graduates?",
        answer: "Yes! Many successful data scientists come from diverse backgrounds. If you have basic math skills and are willing to learn programming, you can excel in this field."
      }
    ],
    price: "₹44,999",
    emi: "₹3,750/month",
    originalPrice: "₹1,09,999"
  }
};

export default function AdvancedProgramDetail() {
  const { id } = useParams();
  const program = advancedPrograms[id as keyof typeof advancedPrograms];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[450px] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <Badge className="absolute top-8 right-8 bg-primary text-white text-base px-4 py-2">
          {program.badge}
        </Badge>
        
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-white hover:text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {program.title} Masterclass
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mb-6">
            {program.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">{program.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Users className="w-5 h-5" />
              <span className="font-semibold">{program.mentees}+ Students</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.fullDescription}
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {program.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Who Should Enroll Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Who Should Enroll
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">This program is perfect for:</p>
                <div className="space-y-3">
                  {program.whoShouldEnroll.map((person, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{person}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Prerequisites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {program.prerequisites.map((prereq, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{prereq}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Curriculum Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Comprehensive Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {program.curriculum.map((module, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <span className="font-semibold">{module.module}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start gap-2 ml-4">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                              <span className="text-sm text-muted-foreground">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Learning Outcomes Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  Tools & Technologies You'll Master
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {program.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-sm px-4 py-2">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Opportunities Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Career Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  After completing this program, you'll be prepared for these high-demand roles:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.careerOpportunities.map((job, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{job.role}</h4>
                      <p className="text-sm text-muted-foreground mb-2">Average Salary</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {job.salary}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Program Features Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {program.programFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Boost your career with industry-recognized certifications:
                </p>
                <div className="flex flex-wrap gap-3">
                  {program.certification.map((cert) => (
                    <div key={cert} className="border-2 border-primary rounded-lg px-6 py-4">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <div>
                          <div className="font-bold text-lg">{cert}</div>
                          <div className="text-sm text-muted-foreground">Certified Professional</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQs Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {program.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sticky Enrollment Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Program Fee</div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {program.price}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {program.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-2">
                      Save {Math.round((1 - parseInt(program.price.replace(/[^0-9]/g, '')) / parseInt(program.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      or {program.emi} with 12 months EMI
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3">This program includes:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>{program.duration} comprehensive training</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>Live interactive classes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>Industry expert mentors</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>Real-world projects</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>Internship opportunity</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>Placement assistance</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>Lifetime course access</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>Certificate of completion</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <Button variant="outline" className="w-full" size="lg">
                    <FileText className="w-5 h-5 mr-2" />
                    Download Brochure
                  </Button>

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-center justify-center text-muted-foreground">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span>Limited seats available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
