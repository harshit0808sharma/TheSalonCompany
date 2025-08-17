"use client";

import React from "react";
import Image from "next/image";
import ReactCompareImage from "react-compare-image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

import before1 from "../../../public/assets/images/before2.jpg";
import after1 from "../../../public/assets/images/before1.jpg";
import before2 from "../../../public/assets/images/before4.jpg";
import after2 from "../../../public/assets/images/before3.jpg";

export default function BeforeAfter() {
  const MotionHandle = () => (
    <motion.div
      className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#214037] border border-gray-300 cursor-pointer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="flex items-center gap-1 text-xl select-none">
        <FiChevronLeft />
        <FiChevronRight />
      </div>
    </motion.div>
  );

  return (
    <section className="bg-[#fefbfb] py-20 px-6 md:px-12">
      {/* Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm mb-2">• Our Result</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-[#214037]">
          Before & after: witness the power of dermatology
        </h2>
        <p className="text-gray-600">
          See the remarkable transformations for yourself—our ‘Before & After’ gallery highlights the powerful impact of dermatological treatments.
        </p>
      </motion.div>

      {/* Comparison Gallery */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Slider 1 */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ReactCompareImage
            leftImage={before1.src}
            rightImage={after1.src}
            sliderLineColor="#214037"
            sliderLineWidth={3}
            handle={<MotionHandle />}
          />
        </motion.div>

        {/* Slider 2 */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ReactCompareImage
            leftImage={before2.src}
            rightImage={after2.src}
            sliderLineColor="#214037"
            sliderLineWidth={3}
            handle={<MotionHandle />}
          />
        </motion.div>
      </div>
    </section>
  );
}
