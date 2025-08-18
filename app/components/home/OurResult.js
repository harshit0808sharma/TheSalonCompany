"use client";

import React from "react";
import ReactCompareImage from "react-compare-image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

import before1 from "../../../public/assets/images/before1.jpg";
import after1 from "../../../public/assets/images/after1.jpg";
import before2 from "../../../public/assets/images/before2.jpg";
import after2 from "../../../public/assets/images/after2.jpg";

export default function BeforeAfter() {
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
          See the remarkable transformations for yourself—our 'Before & After' gallery highlights the powerful impact of dermatological treatments.
        </p>
      </motion.div>

      {/* Comparison Gallery */}
      <div className="grid md:grid-cols-2 gap-10 md:p-20">
        {/* Slider 1 */}
        <motion.div
          className="rounded-4xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ReactCompareImage
            leftImage={before1.src}
            rightImage={after1.src}
            sliderLineColor="#214037"
            sliderLineWidth={2}
            handle={
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black border border-gray-300 cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-1 text-xl select-none">
                  <FiChevronLeft />
                  <FiChevronRight />
                </div>
              </div>
            }
            onlyHandleDraggable={true}
            hover={true}
          />
        </motion.div>

        {/* Slider 2 */}
        <motion.div
          className="rounded-4xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ReactCompareImage
            leftImage={before2.src}
            rightImage={after2.src}
            sliderLineColor="#214037"
            sliderLineWidth={2}
            handle={
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#214037] border border-gray-300 cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-1 text-xl select-none">
                  <FiChevronLeft />
                  <FiChevronRight />
                </div>
              </div>
            }
            onlyHandleDraggable={true}
            hover={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
