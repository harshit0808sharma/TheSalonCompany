"use client";

import React, { useState, useContext } from "react";
import ReactCompareImage from "react-compare-image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

import before1 from "../../../public/assets/images/before4.jpg";
import after1 from "../../../public/assets/images/after4.jpg";
import before2 from "../../../public/assets/images/before3.jpg";
import after2 from "../../../public/assets/images/after3.jpg";
import { GoDotFill } from "react-icons/go";
import Heading from "../other/Heading";
import { SalonContext } from "@/app/context/SalonContext";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";

export default function BeforeAfter() {
  const { theme } = useContext(SalonContext);

  const [hover1, setHover1] = useState(false);
  const [pos1, setPos1] = useState(0.5);

  const [hover2, setHover2] = useState(false);
  const [pos2, setPos2] = useState(0.5);

  const step = 0.1;
  const clamp = (n) => Math.min(1, Math.max(0, n));

  const handlePress = (setHover) => {
    setHover(true);
    const stopHover = () => setHover(false);
    window.addEventListener("mouseup", stopHover, { once: true });
    window.addEventListener("touchend", stopHover, { once: true });
  };

  return (
    <section className={`max-w-[1920px] m-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-28 transition-colors duration-300 mainBg2`}>
      {/* Heading */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center items-center gap-2 mb-3 sm:mb-4">
          <GoDotFill className={`text-sm sm:text-base ${theme ? "text-teal-400" : "text-teal-800"}`} />
          <span className={`text-sm sm:text-base font-medium ${theme ? "text-teal-400" : "text-teal-800"}`}>
            Our Results
          </span>
        </div>
        <div className="mb-4 sm:mb-6">
          <Heading Text={"Before & after: witness the power of dermatology"} />
        </div>
        <p className={`text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4 ${theme ? "text-gray-300" : "text-gray-600"}`}>
          {"See the remarkable transformations for yourself—our 'Before & After' gallery highlights the powerful impact of dermatological treatments."}
        </p>
      </motion.div>

      {/* Compare Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {/* First image */}
        <motion.div
          className={`rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidde`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] relative">
            <ReactCompareImage
              leftImage={before1.src}
              rightImage={after1.src}
              sliderLineColor={"white"}
              sliderLineWidth={2}
              hover={hover1}
              sliderPositionPercentage={pos1}
              onSliderPositionChange={(p) => setPos1(p)}
              handle={
                <div
                  onMouseDown={() => handlePress(setHover1)}
                  onTouchStart={() => handlePress(setHover1)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border-2 border-white ${hover1 ? "ring-2 ring-teal-500 scale-105" : ""}`}
                >
                  <div className="flex items-center gap-0.5 sm:gap-1 text-lg sm:text-xl select-none">
                    <FiChevronLeft
                      className="cursor-pointer text-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPos1((p) => clamp(p - step));
                      }}
                    />
                    <FiChevronRight
                      className="cursor-pointer text-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPos1((p) => clamp(p + step));
                      }}
                    />
                  </div>
                </div>
              }
            />
          </div>

          <div className="flex sm:hidden justify-between items-center p-3 text-xs font-medium">
            <span className={theme ? "text-gray-400" : "text-gray-500"}>Before</span>
            <span className={theme ? "text-gray-400" : "text-gray-500"}>After</span>
          </div>
        </motion.div>
          
        {/* second image */}
        <motion.div
          className={`rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] relative">
            <ReactCompareImage
              leftImage={before2.src}
              rightImage={after2.src}
              sliderLineColor={"white"}
              sliderLineWidth={2}
              hover={hover2}
              sliderPositionPercentage={pos2}
              onSliderPositionChange={(p) => setPos2(p)}
              handle={
                <div
                  onMouseDown={() => handlePress(setHover2)}
                  onTouchStart={() => handlePress(setHover2)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border-2 border-white ${hover2 ? "ring-2 ring-teal-500 scale-105" : ""}`}
                >
                  <div className="flex items-center gap-0.5 sm:gap-1 text-lg sm:text-xl select-none">
                    <FiChevronLeft
                      className="cursor-pointer text-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPos2((p) => clamp(p - step));
                      }}
                    />
                    <FiChevronRight
                      className="cursor-pointer text-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPos2((p) => clamp(p + step));
                      }}
                    />
                  </div>
                </div>
              }
            />
          </div>

          {/* Mobile Labels */}
          <div className="flex sm:hidden justify-between items-center p-3 text-xs font-medium">
            <span className={theme ? "text-gray-400" : "text-gray-500"}>Before</span>
            <span className={theme ? "text-gray-400" : "text-gray-500"}>After</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="text-center mt-8 sm:mt-10 md:mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          href="/casestudy"
          className="relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-white inline-flex gap-2 items-center text-sm sm:text-base group mainBg transition-all duration-300"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute top-0 left-[-120%] w-[120%] h-full 
        bg-gradient-to-r from-transparent via-white/70 to-transparent 
        skew-x-12 
        group-hover:translate-x-[220%] 
        transition-transform duration-700 ease-in-out">
            </span>
          </span>

          <span className="relative z-10">View All Results</span>
          <FaArrowRightLong className="relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
        </Link>
      </motion.div>

      <div className="sm:hidden text-center mt-6">
        <p className={`text-xs ${theme ? "text-gray-400" : "text-gray-500"}`}>
          Drag the slider or tap the arrows to compare
        </p>
      </div>
    </section>
  );
}