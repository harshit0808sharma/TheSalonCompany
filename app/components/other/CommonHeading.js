"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimateImageRight from "./AnimateImageRight";

export default function CommonHeading({ Text }) {

  return (
    <div className={`w-full p-0 md:px-5 mainBg2`}>
      <div
        className={`relative p-5 md:p-10 overflow-hidden md:rounded-4xl transition-colors duration-500 mainBg`}
      >
        <AnimateImageRight />

        {/* Content */}
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
            className="flex items-center justify-center text-white/80 font-semibold"
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
    </div>
  );
}
