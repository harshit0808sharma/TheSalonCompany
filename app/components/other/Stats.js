"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PiScissorsLight } from "react-icons/pi";
import { GrEmoji } from "react-icons/gr";
import { PiCrownThin, PiSparkleThin } from "react-icons/pi";

const stats = [
  { icon: <GrEmoji className="text-3xl sm:text-4xl lg:text-5xl" />, value: 96, suffix: "%", label: "Happy Clients" },
  { icon: <PiScissorsLight className="text-3xl sm:text-4xl lg:text-5xl" />, value: 12, suffix: "+", label: "Years of Styling" },
  { icon: <PiSparkleThin className="text-3xl sm:text-4xl lg:text-5xl" />, value: 1000, suffix: "+", label: "Beauty Treatments" },
  { icon: <PiCrownThin className="text-3xl sm:text-4xl lg:text-5xl" />, value: 30, suffix: "+", label: "Luxury Facilities" },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;

    stats.forEach((item, i) => {
      let start = 0;
      const end = item.value;
      const duration = 2000; 
      const steps = 60; 
      const increment = Math.ceil(end / steps); 
      const stepTime = Math.floor(duration / steps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCounts((prev) => {
            const copy = [...prev];
            copy[i] = end;
            return copy;
          });
        } else {
          setCounts((prev) => {
            const copy = [...prev];
            copy[i] = start;
            return copy;
          });
        }
      }, stepTime);
    });
  }, [inView]);

  return (
    <section className="w-full pt-16 pb-0 transition-colors duration-500 mainBg2 border-t border-gray-200 text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              onViewportEnter={() => setInView(true)}
            >
              <div className="flex justify-start">{item.icon}</div>
              <div className="flex flex-col items-start">
                <h3 className="text-2xl sm:text-3xl md:text-5xl">
                  {counts[index]}
                  {item.suffix}
                </h3>
                <p className="text-xs text-gray-500 sm:text-sm md:text-base font-medium">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
