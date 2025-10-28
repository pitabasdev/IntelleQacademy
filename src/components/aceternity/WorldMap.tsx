import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface Location {
  name: string;
  country: string;
  x: number;
  y: number;
  color: string;
}

export function WorldMap() {
  const locations: Location[] = [
    { name: "San Francisco", country: "USA", x: 15, y: 35, color: "#10b981" },
    { name: "London", country: "UK", x: 48, y: 25, color: "#3b82f6" },
    { name: "Berlin", country: "Germany", x: 52, y: 27, color: "#8b5cf6" },
    { name: "Bangalore", country: "India", x: 72, y: 48, color: "#ef4444" },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 3 },
  ];

  return (
    <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="2"
            height="2"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0.5" cy="0.5" r="0.3" fill="currentColor" opacity="0.2" />
          </pattern>
        </defs>

        <g fill="url(#dotPattern)">
          <path d="M 5,15 Q 10,12 15,15 Q 20,18 25,15 Q 30,12 35,15 L 35,25 Q 30,28 25,25 Q 20,22 15,25 Q 10,28 5,25 Z" />
          <path d="M 45,10 Q 50,8 55,10 Q 60,12 65,10 Q 70,8 75,10 L 75,30 Q 70,32 65,30 Q 60,28 55,30 Q 50,32 45,30 Z" />
          <path d="M 30,35 Q 35,33 40,35 Q 45,37 50,35 Q 55,33 60,35 L 60,45 Q 55,47 50,45 Q 45,43 40,45 Q 35,47 30,45 Z" />
          <path d="M 65,35 Q 70,33 75,35 Q 80,37 85,35 L 85,48 Q 80,50 75,48 Q 70,46 65,48 Z" />
          <path d="M 10,30 Q 15,28 20,30 Q 25,32 30,30 L 30,40 Q 25,42 20,40 Q 15,38 10,40 Z" />
          <path d="M 78,12 Q 82,10 86,12 Q 90,14 94,12 L 94,25 Q 90,27 86,25 Q 82,23 78,25 Z" />
        </g>

        {connections.map((conn, idx) => {
          const from = locations[conn.from];
          const to = locations[conn.to];
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2 - 5;

          return (
            <motion.path
              key={`conn-${idx}`}
              d={`M ${from.x},${from.y} Q ${midX},${midY} ${to.x},${to.y}`}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              fill="none"
              strokeDasharray="2,2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: idx * 0.3 }}
            />
          );
        })}

        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {locations.map((location, idx) => (
          <g key={idx}>
            <motion.circle
              cx={location.x}
              cy={location.y}
              r="2.5"
              fill={location.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            />
            <motion.circle
              cx={location.x}
              cy={location.y}
              r="2.5"
              fill={location.color}
              opacity="0.3"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.8, 1] }}
              transition={{
                duration: 2,
                delay: idx * 0.2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </g>
        ))}
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        {locations.map((location, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 + 0.5 }}
          >
            <div className="relative group pointer-events-auto">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                <div className="text-sm font-bold">{location.name}</div>
                <div className="text-xs text-muted-foreground">{location.country}</div>
                <div
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-r border-b border-border"
                  style={{ backgroundColor: "hsl(var(--background))" }}
                />
              </div>
              <div className="w-6 h-6 rounded-full bg-background/80 backdrop-blur-sm border-2 border-border flex items-center justify-center shadow-lg">
                <MapPin className="w-3 h-3" style={{ color: location.color }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
