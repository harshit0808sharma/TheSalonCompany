"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegCircle, FaGem, FaCog } from "react-icons/fa";
import { VscSymbolKey } from "react-icons/vsc"; // ✅ correct import

export default function Stats() {
  const stats = [
    { icon: <FaRegCircle className="text-4xl text-[#28554E]" />, value: 96, suffix: "%", label: "Patient Satisfaction Rate" },
    { icon: <VscSymbolKey className="text-4xl text-[#28554E]" />, value: 12, suffix: "+", label: "Years Of Experience" },
    { icon: <FaCog className="text-4xl text-[#28554E]" />, value: 1000, suffix: "+", label: "Successful Surgeries" },
    { icon: <FaGem className="text-4xl text-[#28554E]" />, value: 30, suffix: "+", label: "State-Of-The-Art Facilities" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((item, i) => {
      let start = 0;
      const end = item.value;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
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
  }, []);

  return (
    <section className="bg-[#FBF7F7] py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#28554E]">
                {counts[index]}
                {item.suffix}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
