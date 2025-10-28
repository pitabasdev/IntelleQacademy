import { motion } from "framer-motion";
import { trustedPartnersData } from "@/data/courses";
import { Building2 } from "lucide-react";

export function TrustedPartners() {
  const firstRow = trustedPartnersData.slice(0, 9);
  const secondRow = trustedPartnersData.slice(9, 18);

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Companies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our graduates are hired by top companies worldwide. Join our alumni network working at these industry leaders.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* First Row - Scroll Left */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...firstRow, ...firstRow, ...firstRow].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-64 h-32 bg-card border border-card-border rounded-lg flex flex-col items-center justify-center gap-2 shadow-sm hover-elevate"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{partner.name}</div>
                  <div className="text-xs text-muted-foreground">{partner.category}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Scroll Right */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-2000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...secondRow, ...secondRow, ...secondRow].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-64 h-32 bg-card border border-card-border rounded-lg flex flex-col items-center justify-center gap-2 shadow-sm hover-elevate"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-chart-2 to-chart-3 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{partner.name}</div>
                  <div className="text-xs text-muted-foreground">{partner.category}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
