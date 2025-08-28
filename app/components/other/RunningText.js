"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

export default function RunningText() {
  const { theme } = useContext(SalonContext); // true = dark, false = light

  const text =
    "✨ Welcome to The Salon Company | Hair • Beauty • Makeup • Nail Extension | Free Consultation: 12345 67890 ✨";

  return (
    <div
      className={`max-w-[1920px] m-auto overflow-hidden py-10 flex justify-center transition-colors duration-500 mainBg2`}
    >
      <motion.div
        className={`flex whitespace-nowrap font-semibold uppercase transition-colors duration-500 ${
          theme
            ? "text-white text-4xl md:text-6xl lg:text-8xl"
            : "text-teal-800 text-4xl md:text-6xl lg:text-8xl"
        }`}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }}
      >
        <span className="px-10">{text}</span>
        <span className="px-10">{text}</span>
      </motion.div>
    </div>
  );
}
