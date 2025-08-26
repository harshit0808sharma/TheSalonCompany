"use client";

import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <section className="w-full h-screen flex items-center justify-center mainBg text-white">
      <div className="text-center">
        {/* Spinner */}
        <motion.div
          className="w-16 h-16 border-5 border-white border-t-transparent rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Loading Text */}
        <motion.p
          className="mt-6 text-2xl font-medium text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        >
          Loading, please wait...
        </motion.p>
      </div>
    </section>
  );
}
