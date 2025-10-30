"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;
    }
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full overflow-hidden bg-transparent",
        className
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 0 }} />
          </linearGradient>
          <filter id="beam-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated beams */}
        <motion.path
          ref={pathRef}
          d="M50 200 Q300 100 600 250 T950 200"
          stroke="url(#beam-gradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#beam-glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        />
        
        <motion.path
          d="M100 600 Q500 400 800 650 T950 600"
          stroke="url(#beam-gradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#beam-glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
          }}
        />

        <motion.path
          d="M200 800 Q400 700 700 850 T900 750"
          stroke="url(#beam-gradient)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#beam-glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
          }}
        />
      </svg>

      {/* Floating dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};