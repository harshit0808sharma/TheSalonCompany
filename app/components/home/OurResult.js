"use client";

import React, { useState, useContext } from "react";
import ReactCompareImage from "react-compare-image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

import before1 from "../../../public/assets/images/before1.jpg";
import after1 from "../../../public/assets/images/after1.jpg";
import before2 from "../../../public/assets/images/before2.jpg";
import after2 from "../../../public/assets/images/after2.jpg";
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
    <section className={`py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-28 transition-colors duration-300 mainBg2`}>
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

      {/* Compare Images Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {/* First Compare */}
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
              sliderLineColor={theme ? "#38b2ac" : "#214037"}
              sliderLineWidth={2}
              hover={hover1}
              sliderPositionPercentage={pos1}
              onSliderPositionChange={(p) => setPos1(p)}
              handle={
                <div
                  onMouseDown={() => handlePress(setHover1)}
                  onTouchStart={() => handlePress(setHover1)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center border cursor-pointer transition-all duration-200 ${theme ? "bg-[#1e1e1e] border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"
                    } ${hover1 ? "ring-2 ring-teal-500 scale-105" : ""}`}
                >
                  <div className="flex items-center gap-0.5 sm:gap-1 text-lg sm:text-xl select-none">
                    <FiChevronLeft
                      className="cursor-pointer hover:text-teal-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPos1((p) => clamp(p - step));
                      }}
                    />
                    <FiChevronRight
                      className="cursor-pointer hover:text-teal-500 transition-colors"
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
          
          {/* Mobile Labels */}
          <div className="flex sm:hidden justify-between items-center p-3 text-xs font-medium">
            <span className={theme ? "text-gray-400" : "text-gray-500"}>Before</span>
            <span className={theme ? "text-gray-400" : "text-gray-500"}>After</span>
          </div>
        </motion.div>

        {/* Second Compare */}
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
              sliderLineColor={theme ? "#38b2ac" : "#214037"}
              sliderLineWidth={2}
              hover={hover2}
              sliderPositionPercentage={pos2}
              onSliderPositionChange={(p) => setPos2(p)}
              handle={
                <div
                  onMouseDown={() => handlePress(setHover2)}
                  onTouchStart={() => handlePress(setHover2)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border cursor-pointer transition-all duration-200 bg-white ${hover2 ? "ring-2 ring-teal-500 scale-105" : ""}`}
                >
                  <div className="flex items-center gap-0.5 sm:gap-1 text-lg sm:text-xl select-none">
                    <FiChevronLeft
                      className="cursor-pointer hover:text-teal-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPos2((p) => clamp(p - step));
                      }}
                    />
                    <FiChevronRight
                      className="cursor-pointer hover:text-teal-500 transition-colors"
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

      {/* Call to Action Button */}
      <motion.div 
        className="text-center mt-8 sm:mt-10 md:mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          href="/casestudy"
          className="mainBg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-emerald-800 focus:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 inline-flex gap-2 items-center text-sm sm:text-base group"
        >
          <span>View All Results</span> 
          <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </motion.div>

      {/* Mobile Instructions */}
      <div className="sm:hidden text-center mt-6">
        <p className={`text-xs ${theme ? "text-gray-400" : "text-gray-500"}`}>
          Drag the slider or tap the arrows to compare
        </p>
      </div>
    </section>
  );
}