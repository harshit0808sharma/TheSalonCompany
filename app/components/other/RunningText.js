"use client";

import { motion } from "framer-motion";

export default function RunningText() {
  const text =
    "✨ Welcome to The Salon Company | Hair • Beauty • Makeup • Nail Extension | Free Consultation: 12345 67890 ✨";

  return (
    <div className="w-full overflow-hidden bg-white py-10 flex justify-center">
      <motion.div
        className="flex whitespace-nowrap text-teal-800 text-4xl md:text-6xl lg:text-8xl font-semibold uppercase"
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
