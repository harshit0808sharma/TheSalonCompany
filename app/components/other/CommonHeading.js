"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CommonHeading({ Text }) {
  return (
    <div className="bg-teal-800 relative p-5 md:p-10 overflow-hidden mb-5 m-0 md:mx-5 md:rounded-4xl">
      {/* Animated SVG Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <path
            d="M20 20C30 10, 70 10, 80 20C90 30, 90 70, 80 80C70 90, 30 90, 20 80C10 70, 10 30, 20 20Z"
            stroke="white"
            strokeWidth="0.5"
          />
          <path
            d="M30 30C35 25, 65 25, 70 30C75 35, 75 65, 70 70C65 75, 35 75, 30 70C25 65, 25 35, 30 30Z"
            stroke="white"
            strokeWidth="0.3"
          />
        </svg>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {Text}
        </motion.h1>

        {/* Breadcrumb */}
        <motion.div
          className="flex items-center justify-center text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{Text}</span>
        </motion.div>
      </div>
    </div>
  );
}
