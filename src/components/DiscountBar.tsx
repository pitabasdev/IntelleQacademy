import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Clock, Gift } from "lucide-react";
import { useDiscountBar } from "@/context/DiscountBarContext";

const discountMessages = [
  { icon: Sparkles, text: "🎉 Limited Time: Get 50% OFF on all courses! Use code: SAVE50", color: "from-purple-600 to-pink-600" },
  { icon: Gift, text: "🎁 Special Offer: Enroll now and get FREE certification worth ₹5,000!", color: "from-blue-600 to-cyan-600" },
  { icon: Clock, text: "⏰ Flash Sale: Early bird discount ending in 24 hours - Save up to ₹15,000!", color: "from-orange-600 to-red-600" },
  { icon: Sparkles, text: "✨ New Year Special: First 100 students get 60% discount + FREE internship!", color: "from-green-600 to-emerald-600" },
  { icon: Gift, text: "🔥 Hot Deal: Get 3 months of mentorship absolutely FREE with any course!", color: "from-indigo-600 to-purple-600" },
];

export function DiscountBar() {
  const { isVisible, setIsVisible } = useDiscountBar();
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % discountMessages.length);
    }, 5000);
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
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
        >
          <div className={`bg-gradient-to-r ${message.color} text-white py-2.5 px-4 relative`}>
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
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
