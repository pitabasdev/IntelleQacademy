import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnrollmentModal } from "@/components/EnrollmentModal";

export function EnrollmentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const popupClosed = localStorage.getItem("enrollmentPopupClosed");
    const lastShown = localStorage.getItem("enrollmentPopupLastShown");
    const now = Date.now();
    
    const ONE_DAY = 24 * 60 * 60 * 1000;
    
    if (popupClosed === "true" && lastShown) {
      const timeSinceLastShown = now - parseInt(lastShown);
      if (timeSinceLastShown < ONE_DAY) {
        return;
      }
    }

    const showTimer = setTimeout(() => {
      setIsVisible(true);
      localStorage.setItem("enrollmentPopupLastShown", now.toString());
    }, 5000);

    const handleScroll = () => {
      if (window.scrollY > 300 && !hasInteracted) {
        setIsVisible(true);
        localStorage.setItem("enrollmentPopupLastShown", now.toString());
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasInteracted]);

  const handleClose = () => {
    setIsVisible(false);
    setHasInteracted(true);
    localStorage.setItem("enrollmentPopupClosed", "true");
    localStorage.setItem("enrollmentPopupLastShown", Date.now().toString());
  };

  const handleEnrollClick = () => {
    setIsVisible(false);
    setIsModalOpen(true);
    setHasInteracted(true);
    localStorage.setItem("enrollmentPopupClosed", "true");
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-lg w-full mx-4"
            >
              <div className="bg-gradient-to-br from-primary/95 via-accent/95 to-chart-2/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all hover-elevate active-elevate-2 z-10"
                aria-label="Close popup"
                data-testid="popup-close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-yellow-300">Limited Offer</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight mb-2">
                      Start Your Tech Career Today!
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      Join 5000+ students who transformed their careers. Get expert training, internship & certification!
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span className="text-white/90">Live classes with industry experts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span className="text-white/90">Guaranteed internship opportunity</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span className="text-white/90">100% placement support</span>
                  </div>
                </div>

                <Button
                  onClick={handleEnrollClick}
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-base py-6 rounded-xl shadow-lg hover-elevate active-elevate-2 group"
                  size="lg"
                  data-testid="popup-enroll"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-xs text-white/70">
                  Limited seats available • Early bird discount ending soon
                </p>
              </div>

                <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <EnrollmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle="Our Training Programs"
      />
    </>
  );
}
