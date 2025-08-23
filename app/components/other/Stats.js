"use client";

import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaRegSmile, FaCrown, FaCut, FaLeaf } from "react-icons/fa";
import { SalonContext } from "@/app/context/SalonContext";

const stats = [
  { icon: <FaRegSmile className="text-4xl text-teal-600" />, value: 96, suffix: "%", label: "Happy Clients" },
  { icon: <FaCut className="text-4xl text-teal-600" />, value: 12, suffix: "+", label: "Years of Styling" },
  { icon: <FaLeaf className="text-4xl text-teal-600" />, value: 1000, suffix: "+", label: "Beauty Treatments" },
  { icon: <FaCrown className="text-4xl text-teal-600" />, value: 30, suffix: "+", label: "Luxury Facilities" },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const { theme } = useContext(SalonContext); // true = dark, false = light

  useEffect(() => {
    stats.forEach((item, i) => {
      let start = 0;
      const end = item.value;
      const duration = 2000;
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
    <section
      className={`w-full px-30 py-5 transition-colors duration-500 ${
        theme ? "bg-black" : ""
      }`}
    >
      <div className="container border-t border-gray-200 mx-auto p-4 md:px-8">
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
              <h3
                className={`text-4xl md:text-5xl font-bold ${
                  theme ? "text-white" : "text-[#28554E]"
                }`}
              >
                {counts[index]}
                {item.suffix}
              </h3>
              <p
                className={`text-sm md:text-base font-medium ${
                  theme ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
