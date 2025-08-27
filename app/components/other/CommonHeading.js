"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimateImageRight from "./AnimateImageRight";

export default function CommonHeading({ Text }) {
  return (
    <div className="w-full p-0 md:px-5 mainBg2">
      <div className="relative p-4 sm:p-6 md:p-10 overflow-hidden md:rounded-4xl transition-colors duration-500 mainBg">
        <AnimateImageRight />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 text-center">
          {/* Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {Text}
          </motion.h1>

          {/* Breadcrumb */}
          <motion.div
            className="flex flex-wrap items-center justify-center text-white/80 font-medium text-sm sm:text-base gap-1 sm:gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span>{Text}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
