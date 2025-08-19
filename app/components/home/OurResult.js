"use client";

import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

import before1 from "../../../public/assets/images/before1.jpg";
import after1 from "../../../public/assets/images/after1.jpg";
import before2 from "../../../public/assets/images/before2.jpg";
import after2 from "../../../public/assets/images/after2.jpg";

export default function BeforeAfter() {
  // Slider 1 state
  const [hover1, setHover1] = useState(false);
  const [pos1, setPos1] = useState(0.5);

  // Slider 2 state
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
    <section className="bg-[#fefbfb] py-10 md:py-20 px-6 md:px-12">
      {/* Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm mb-2">• Our Result</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-[#214037]">
          Before &amp; after: witness the power of dermatology
        </h2>
        <p className="text-gray-600">
          See the remarkable transformations for yourself—our &apos;Before &amp;
          After&apos; gallery highlights the powerful impact of dermatological
          treatments.
        </p>
      </motion.div>

      {/* Comparison Gallery */}
      <div className="grid md:grid-cols-2 gap-10 md:p-10">
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
            hover={hover1}
            sliderPositionPercentage={pos1}
            onSliderPositionChange={(p) => setPos1(p)}
            handle={
              <div
                onMouseDown={() => handlePress(setHover1)}
                onTouchStart={() => handlePress(setHover1)}
                className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-300 cursor-pointer ${
                  hover1 ? "ring-2 ring-[#214037]" : ""
                }`}
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
            hover={hover2}
            sliderPositionPercentage={pos2}
            onSliderPositionChange={(p) => setPos2(p)}
            handle={
              <div
                onMouseDown={() => handlePress(setHover2)}
                onTouchStart={() => handlePress(setHover2)}
                className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-300 cursor-pointer ${
                  hover2 ? "ring-2 ring-[#214037]" : ""
                }`}
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
    </section>
  );
}
