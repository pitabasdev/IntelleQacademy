import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, Gift, Star, Award, Zap, TrendingUp, Rocket, Crown, Target } from "lucide-react";
import { useDiscountBar } from "@/context/DiscountBarContext";

const discountMessages = [
  { 
    icon: Sparkles, 
    text: "🎉 FLASH SALE: Get 60% OFF on all courses! Use code: INTEL60", 
    color: "from-purple-600 to-pink-600" 
  },
  { 
    icon: Gift, 
    text: "🎁 SPECIAL: Enroll now and get FREE certification + Placement Assistance worth ₹15,000!", 
    color: "from-blue-600 to-cyan-600" 
  },
  { 
    icon: Clock, 
    text: "⏰ LIMITED TIME: Early bird discount ending soon - Save up to ₹20,000!", 
    color: "from-orange-600 to-red-600" 
  },
  { 
    icon: Star, 
    text: "✨ NEW YEAR OFFER: First 50 students get 70% discount + FREE 3-month internship!", 
    color: "from-green-600 to-emerald-600" 
  },
  { 
    icon: Award, 
    text: "🏆 EXCLUSIVE: Get 6 months of career mentorship FREE with any premium course!", 
    color: "from-indigo-600 to-purple-600" 
  },
  { 
    icon: Zap, 
    text: "⚡ HOT DEAL: Buy 1 course, get 1 FREE for your friend! Limited spots available!", 
    color: "from-yellow-600 to-orange-600" 
  },
  { 
    icon: TrendingUp, 
    text: "📈 CAREER BOOST: Enroll in Data Science & AI program and get 100% job guarantee!", 
    color: "from-teal-600 to-blue-600" 
  },
  { 
    icon: Rocket, 
    text: "🚀 LAUNCH OFFER: Full Stack Development with MERN - Now at 65% discountv!", 
    color: "from-red-600 to-pink-600" 
  },
  { 
    icon: Crown, 
    text: "👑 PREMIUM: Cybersecurity Masterclass with 75% OFF + FREE ethical hacking toolkit!", 
    color: "from-amber-600 to-yellow-600" 
  },
  { 
    icon: Target, 
    text: "🎯 SMART DEAL: UI/UX Design course with 55% OFF + FREE Figma Pro subscription!", 
    color: "from-violet-600 to-purple-600" 
  },
  { 
    icon: Sparkles, 
    text: "💫 WEEKEND SPECIAL: All courses at 50% OFF + Extra 10% with code WEEKEND10", 
    color: "from-rose-600 to-pink-600" 
  },
  { 
    icon: Gift, 
    text: "🎊 FESTIVE OFFER: Diwali Special - Get 2 courses for the price of 1! Limited period!", 
    color: "from-sky-600 to-blue-600" 
  },
  { 
    icon: Clock, 
    text: "🔥 LAST CHANCE: Cyber Monday Deal - 80% OFF on all certifications + Lifetime access!", 
    color: "from-fuchsia-600 to-purple-600" 
  },
  { 
    icon: Star, 
    text: "⭐ STUDENT SPECIAL: Extra 25% OFF on already discounted courses!", 
    color: "from-lime-600 to-green-600" 
  },
  { 
    icon: Award, 
    text: "🏅 CORPORATE OFFER: Team training packages starting at 70% OFF!", 
    color: "from-cyan-600 to-teal-600" 
  },
];

export function DiscountBar() {
  const { isVisible } = useDiscountBar();
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % discountMessages.length);
    }, 4000); // Reduced interval for faster rotation with more messages
    return () => clearInterval(interval);
  }, []);

  // Adjust body margin dynamically to avoid empty space when bar hides
  useEffect(() => {
    if (isVisible) {
      document.body.style.marginTop = "67px"; // matches bar height
    } else {
      document.body.style.marginTop = "0px";
    }
    return () => {
      document.body.style.marginTop = "0px";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const message = discountMessages[currentMessage];
  const Icon = message.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden cursor-pointer"
          onClick={() => {
            // Optional: Add click behavior to redirect to courses page
            window.location.href = '/courses';
          }}
        >
          <div className={`bg-gradient-to-r ${message.color} text-white py-2.5 px-4 relative group hover:opacity-95 transition-opacity`}>
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 flex-shrink-0 animate-pulse" />
                  <span className="text-sm sm:text-base font-semibold text-center">
                    {message.text}
                  </span>
                  <div className="hidden sm:flex items-center gap-1 ml-2">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full animate-bounce">
                      Click to claim offer →
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar for message transition */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30">
              <motion.div
                key={currentMessage}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-full bg-white/70"
              />
            </div>

            {/* Hover effect indicator */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
          </div>

          {/* Shimmer effect line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}