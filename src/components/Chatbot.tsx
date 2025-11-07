import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User, Mail, Phone, MapPin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "contact" | "quick_reply";
}

interface ConversationContext {
  lastTopic?: string;
  awaitingResponse?: boolean;
  userInterests?: string[];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your IntelleQacademy assistant. We specialize in corporate learning and workforce development. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [, ] = useState<ConversationContext>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Corporate Training Programs",
    "Technical Courses Offered",
    "Pricing & Packages",
    "Enrollment Process",
    "Enterprise Solutions",
    "Instructor Qualifications",
    "Placement Assistance",
    "Schedule & Duration",
    "Contact Support"
  ];

  const contactInfo = {
    email: "support@intelleqacademy.com",
    phone: "+91 8217668872",
    address: "Bengaluru, Karnataka, India",
    website: "https://intelleqacademy.com/"
  };

  const getBotResponse = (userMessage: string): { text: string; type?: "contact" | "quick_reply" } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return { 
        text: "Hello! Welcome to IntelleQacademy! We're a premier corporate learning organization dedicated to workforce development. How can I assist you with your training needs today?" 
      };
    }
    
    // Corporate training focus
    if (lowerMessage.includes("corporate") || lowerMessage.includes("enterprise") || lowerMessage.includes("company")) {
      return {
        text: "We offer comprehensive corporate training solutions tailored to your organization's needs. Our programs include:\n\n• Technical upskilling in Java, Data Science, AWS, Cybersecurity\n• Leadership and soft skills development\n• Customized training programs\n• Workforce transformation initiatives\n\nWe work with 51-200 employee companies to enhance their capabilities. Would you like to know about our enterprise partnership models?"
      };
    }
    
    // Courses and programs
    if (lowerMessage.includes("course") || lowerMessage.includes("program") || lowerMessage.includes("technical") || lowerMessage.includes("training")) {
      return {
        text: "We offer 11+ comprehensive courses including:\n\n• Full Stack Development\n• Data Science & Analytics\n• Java Development\n• Python Development\n• Cyber Security\n• UI/UX Design\n• AWS Cloud Technologies\n• Digital Marketing\n\nEach program includes live sessions, real-world projects, and industry-recognized certifications. Which technology area interests you or your team?"
      };
    }
    
    // Pricing information
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("fee") || lowerMessage.includes("investment")) {
      return {
        text: "We offer flexible pricing options:\n\n• Individual courses with competitive pricing\n• Corporate packages with volume discounts\n• Golden Pass - Lifetime access to 20+ courses\n• Custom enterprise solutions\n\nFor detailed corporate pricing, I can connect you with our business development team. Would you like to discuss specific requirements?"
      };
    }
    
    // Enrollment process
    if (lowerMessage.includes("enroll") || lowerMessage.includes("admission") || lowerMessage.includes("join") || lowerMessage.includes("register")) {
      return {
        text: "Our enrollment process is straightforward:\n\n1. Course selection and consultation\n2. Registration form completion\n3. Payment processing\n4. Immediate platform access\n5. Onboarding session\n\nFor corporate enrollments, we provide dedicated account managers. Ready to get started?"
      };
    }
    
    // Certification
    if (lowerMessage.includes("certif") || lowerMessage.includes("certificate") || lowerMessage.includes("recognition")) {
      return {
        text: "Yes! You'll receive industry-recognized certifications upon completion. Our credentials are valued by employers and include partnerships with leading technology organizations. These certifications significantly enhance professional credibility and career prospects."
      };
    }
    
    // Placement assistance
    if (lowerMessage.includes("placement") || lowerMessage.includes("job") || lowerMessage.includes("career") || lowerMessage.includes("hire")) {
      return {
        text: "We provide comprehensive placement assistance:\n\n• Resume building and optimization\n• Mock interviews and feedback\n• Portfolio development\n• Direct connections with 100+ hiring partners\n• Career counseling sessions\n\nOur alumni work at top companies like Google, Amazon, Meta, and other leading organizations worldwide."
      };
    }
    
    // Duration and schedule
    if (lowerMessage.includes("duration") || lowerMessage.includes("long") || lowerMessage.includes("time") || lowerMessage.includes("schedule")) {
      return {
        text: "Most programs are 2 months intensive training with:\n\n• Live interactive online sessions\n• Flexible scheduling options\n• Hands-on project work\n• 1:1 mentorship sessions\n• Recorded sessions for revision\n\nWe also offer self-paced options for corporate teams with busy schedules."
      };
    }
    
    // Mentors and instructors
    if (lowerMessage.includes("mentor") || lowerMessage.includes("instructor") || lowerMessage.includes("teacher") || lowerMessage.includes("trainer")) {
      return {
        text: "Our instructors are industry experts currently working at top tech companies! Features include:\n\n• Professionals with 5+ years industry experience\n• Personalized 1:1 guidance\n• Dedicated query resolution sessions\n• Real-world project mentorship\n• Career guidance and networking"
      };
    }
    
    // Company information
    if (lowerMessage.includes("company") || lowerMessage.includes("about") || lowerMessage.includes("found") || lowerMessage.includes("size")) {
      return {
        text: "IntelleQacademy was founded in 2023 and has grown to 51-200 employees. We specialize in professional training and coaching, focusing on both technical and non-technical skill development for corporate workforce enhancement."
      };
    }
    
    // Contact information
    if (lowerMessage.includes("contact") || lowerMessage.includes("support") || lowerMessage.includes("email") || lowerMessage.includes("phone") || lowerMessage.includes("call")) {
      return {
        text: "Here's how you can reach us:",
        type: "contact"
      };
    }
    
    // Website
    if (lowerMessage.includes("website") || lowerMessage.includes("online") || lowerMessage.includes("portal")) {
      return {
        text: `Visit our website: ${contactInfo.website}\n\nYou'll find detailed course information, upcoming batches, corporate partnership details, and success stories from our learners.`
      };
    }
    
    // Thank you responses
    if (lowerMessage.includes("thank")) {
      return {
        text: "You're welcome! I'm here to help you and your organization succeed. Feel free to ask any other questions about our training programs or corporate solutions. 😊"
      };
    }
    
    // Default response for unrecognized queries
    return {
      text: "That's an excellent question about workforce development and training! Our support team can provide detailed information tailored to your specific needs. Would you like me to connect you with a training consultant for personalized assistance?"
    };
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponseData = getBotResponse(inputValue);
      const botResponse: Message = {
        id: messages.length + 2,
        text: botResponseData.text,
        sender: "bot",
        timestamp: new Date(),
        type: botResponseData.type
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    // Auto-send after a brief delay
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  const ContactCard = () => (
    <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-blue-600" />
          <div>
            <p className="text-sm font-medium">Email</p>
            <a href={`mailto:${contactInfo.email}`} className="text-sm text-blue-600 hover:underline">
              {contactInfo.email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-blue-600" />
          <div>
            <p className="text-sm font-medium">Phone</p>
            <a href={`tel:${contactInfo.phone}`} className="text-sm text-blue-600 hover:underline">
              {contactInfo.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-blue-600" />
          <div>
            <p className="text-sm font-medium">Address</p>
            <p className="text-sm text-gray-700">{contactInfo.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-blue-600" />
          <div>
            <p className="text-sm font-medium">Website</p>
            <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
              {contactInfo.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 z-50 w-[85vw] md:w-96"
          >
            <Card className="shadow-2xl border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-white pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">IntelleQ Assistant</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs text-white/90">Online</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                    data-testid="button-close-chat"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="h-80 overflow-y-auto p-4 space-y-4 bg-accent/5">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                          message.sender === "user"
                            ? "bg-primary text-white rounded-tr-none"
                            : "bg-card border border-border rounded-tl-none"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        {message.type === "contact" && <ContactCard />}
                        <p className={`text-xs mt-1 ${message.sender === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {messages.length <= 2 && (
                  <div className="p-4 border-t border-border bg-card/50">
                    <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply) => (
                        <Badge
                          key={reply}
                          variant="secondary"
                          className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors text-xs"
                          onClick={() => handleQuickReply(reply)}
                          data-testid={`badge-quick-${reply.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {reply}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Ask about courses, corporate training, pricing..."
                      className="flex-1"
                      data-testid="input-chat-message"
                    />
                    <Button
                      onClick={handleSend}
                      size="icon"
                      disabled={!inputValue.trim()}
                      data-testid="button-send-message"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-4 md:right-8 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl bg-gradient-to-r from-primary to-accent hover:shadow-primary/50 transition-all"
          data-testid="button-toggle-chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </>
  );
}