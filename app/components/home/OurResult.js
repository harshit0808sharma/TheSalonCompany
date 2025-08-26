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
  const { theme } = useContext(SalonContext); // ✅ theme from context

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
    <section
      className={`py-10 md:py-20 px-6 md:px-12 transition-colors duration-300 mainBg2`}
    >
      {/* Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center items-center gap-2">
          <GoDotFill className={theme ? "text-teal-400" : "text-teal-800"} />
          <span
            className={`font-medium ${
              theme ? "text-teal-400" : "text-teal-800"
            }`}
          >
            Our Results
          </span>
        </div>
        <Heading Text={"Before & after: witness the power of dermatology"} />
        <p className={theme ? "text-gray-300" : "text-gray-600"}>
          {"See the remarkable transformations for yourself—our 'Before & After' gallery highlights the powerful impact of dermatological treatments."}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:p-10">
        {/* First Compare */}
        <motion.div
          className={`rounded-4xl overflow-hidden shadow-lg ${
            theme ? "bg-[#1e1e1e]" : "bg-white"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
                className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center border cursor-pointer ${
                  theme
                    ? "bg-[#1e1e1e] border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-800"
                } ${hover1 ? "ring-2 ring-teal-500" : ""}`}
              >
                <div className="flex items-center gap-1 text-xl select-none">
                  <FiChevronLeft
                    onClick={(e) => {
                      e.stopPropagation();
                      setPos1((p) => clamp(p - step));
                    }}
                  />
                  <FiChevronRight
                    onClick={(e) => {
                      e.stopPropagation();
                      setPos1((p) => clamp(p + step));
                    }}
                  />
                </div>
              </div>
            }
          />
        </motion.div>

        {/* Second Compare */}
        <motion.div
          className={`rounded-4xl overflow-hidden shadow-lg ${
            theme ? "bg-[#1e1e1e]" : "bg-white"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
                className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center border cursor-pointer ${
                  theme
                    ? "bg-[#1e1e1e] border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-800"
                } ${hover2 ? "ring-2 ring-teal-500" : ""}`}
              >
                <div className="flex items-center gap-1 text-xl select-none">
                  <FiChevronLeft
                    onClick={(e) => {
                      e.stopPropagation();
                      setPos2((p) => clamp(p - step));
                    }}
                  />
                  <FiChevronRight
                    onClick={(e) => {
                      e.stopPropagation();
                      setPos2((p) => clamp(p + step));
                    }}
                  />
                </div>
              </div>
            }
          />
        </motion.div>
      </div>
      <div className="text-center">
        <Link href="/result" className="bg-[#24544B] text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-800 transition-colors inline-flex gap-2 items-center"><span>View All Result</span> <FaArrowRightLong/></Link>
      </div>
    </section>
  );
}
