import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 z-[70]" // 👈 bottom-left corner
        >
          <div className="bg-card border border-border rounded-xl shadow-2xl p-4 w-[320px] md:w-[360px]">
            <div className="flex items-start gap-3">
              <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-1">Cookie Notice</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We use cookies to enhance your experience. By clicking
                  “Accept”, you agree to our cookie policy.
                </p>
                <div className="flex justify-end gap-2">
                  <Button
                    onClick={handleReject}
                    variant="outline"
                    size="sm"
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={handleAccept}
                    variant="default"
                    size="sm"
                  >
                    Accept
                  </Button>
                </div>
              </div>
              <button
                onClick={handleReject}
                className="p-1.5 rounded-md hover:bg-accent transition-colors"
                aria-label="Close cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
