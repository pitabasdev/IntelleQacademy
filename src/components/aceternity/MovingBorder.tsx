import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MovingBorderProps {
  children: ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
}

export function MovingBorder({
  children,
  duration = 2000,
  className = "",
  containerClassName = "",
  borderClassName = "",
}: MovingBorderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg p-[1px] h-full ${containerClassName}`}
    >
      <motion.div
        className={`absolute inset-0 ${borderClassName}`}
        style={{
          background: `linear-gradient(90deg, 
            transparent, 
            rgba(139, 92, 246, 0.8), 
            transparent
          )`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className={`relative rounded-lg bg-card h-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
