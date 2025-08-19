"use client";

import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="text-center">
        {/* Spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-[#214037] border-t-transparent rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Loading Text */}
        <motion.p
          className="mt-6 text-lg font-medium text-gray-600"
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
