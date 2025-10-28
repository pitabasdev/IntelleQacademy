import { motion } from "framer-motion";

interface GradientBackgroundProps {
  children: React.ReactNode;
  variant?: "hero" | "section" | "card";
  className?: string;
}

export function GradientBackground({ children, variant = "section", className = "" }: GradientBackgroundProps) {
  const gradients = {
    hero: "bg-gradient-to-br from-[#1E1E2F] via-[#00B4D8]/20 to-[#1E1E2F]",
    section: "bg-gradient-to-b from-background to-accent/5",
    card: "bg-gradient-to-br from-card to-accent/10",
  };

  return (
    <div className={`relative overflow-hidden ${gradients[variant]} ${className}`}>
      {variant === "hero" && (
        <>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2/30 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </>
      )}
      {children}
    </div>
  );
}
