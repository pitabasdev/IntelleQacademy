import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your IntelleQacademy assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Course information",
    "Pricing details",
    "Enrollment process",
    "Certification",
    "Placement assistance"
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("course") || lowerMessage.includes("program")) {
      return "We offer 11+ comprehensive courses including Full Stack Development, Data Science, Digital Marketing, and more! Each course is 2 months long with live sessions, projects, and certifications. Which domain interests you?";
    }
    
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("fee")) {
      return "We have flexible pricing options including individual courses and value packs! Our Golden Pass gives you lifetime access to 20+ courses. Would you like me to connect you with our admissions team for detailed pricing?";
    }
    
    if (lowerMessage.includes("enroll") || lowerMessage.includes("admission") || lowerMessage.includes("join")) {
      return "Great! To enroll, simply: 1) Choose your course 2) Complete the registration form 3) Make payment 4) Get instant access to the learning platform. Our next batch starts soon! Shall I help you get started?";
    }
    
    if (lowerMessage.includes("certif")) {
      return "Yes! You'll receive industry-recognized certificates upon course completion. Our certifications are from top organizations like Google, IBM, Microsoft, and more. These add great value to your resume!";
    }
    
    if (lowerMessage.includes("placement") || lowerMessage.includes("job") || lowerMessage.includes("career")) {
      return "We provide comprehensive placement assistance including resume building, mock interviews, and direct connections with 100+ hiring partners like Google, Amazon, Meta, and more! Our alumni work at top tech companies worldwide.";
    }
    
    if (lowerMessage.includes("duration") || lowerMessage.includes("long") || lowerMessage.includes("time")) {
      return "Most of our courses are 2 months long with live interactive sessions, hands-on projects, and dedicated mentorship. We design our programs to be intensive and comprehensive!";
    }
    
    if (lowerMessage.includes("live") || lowerMessage.includes("online") || lowerMessage.includes("mode")) {
      return "All our courses are conducted through LIVE interactive online sessions! You can ask questions in real-time, participate in discussions, and work on projects with your peers. Recorded sessions are also available for revision.";
    }
    
    if (lowerMessage.includes("mentor") || lowerMessage.includes("instructor") || lowerMessage.includes("teacher")) {
      return "Our mentors are industry experts currently working at top tech companies! You'll get personalized 1:1 guidance, dedicated query sessions, and career advice from professionals with years of experience.";
    }
    
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Welcome to IntelleQacademy! I'm here to help you find the perfect course to kickstart your tech career. What would you like to know?";
    }
    
    if (lowerMessage.includes("thank")) {
      return "You're welcome! Feel free to ask if you have any other questions. We're here to help! 😊";
    }
    
    return "That's a great question! Our support team can provide detailed information about that. Would you like me to connect you with them? You can also email us at support@intelleqacademy.com or call +1 (800) 123-4567.";
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
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 z-50 w-[85vw] md:w-80"
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
                        className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                          message.sender === "user"
                            ? "bg-primary text-white rounded-tr-none"
                            : "bg-card border border-border rounded-tl-none"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
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

                {messages.length === 1 && (
                  <div className="p-4 border-t border-border bg-card/50">
                    <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply) => (
                        <Badge
                          key={reply}
                          variant="secondary"
                          className="cursor-pointer hover-elevate active-elevate-2"
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
                      placeholder="Type your message..."
                      className="flex-1"
                      data-testid="input-chat-message"
                    />
                    <Button
                      onClick={handleSend}
                      size="icon"
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
