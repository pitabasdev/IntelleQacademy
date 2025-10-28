import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  const Component = hover ? motion.div : "div";
  
  return (
    <Component
      {...(hover && {
        whileHover: { y: -8, scale: 1.02 },
        transition: { duration: 0.3 },
      })}
    >
      <Card className={`backdrop-blur-sm bg-card/80 border-card-border shadow-lg ${hover ? 'hover-elevate active-elevate-2' : ''} ${className}`}>
        {children}
      </Card>
    </Component>
  );
}
