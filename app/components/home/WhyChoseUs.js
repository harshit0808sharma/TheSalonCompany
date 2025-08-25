"use client";

import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Heading from "../other/Heading";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full px-5 md:px-32 items-center mainBg2">
      {/* Main content container */}
      <div className="flex flex-col md:flex-row items-center justify-between py-12">
        
        {/* Left content section - wider */}
        <motion.div
          className="w-full md:flex-[0.60] md:pr-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-2 text-teal-900">
            <GoDotFill />
            <span className="font-medium">Why Choose Us</span>
          </div>

          {/* Main heading */}
          <Heading Text={"Why choose us for all your dermatology needs"} />

          {/* Subtitle */}
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            {"We're dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you."}
          </p>

          {/* Features section */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <motion.div
              className="flex items-start group border-t-2 border-gray-200 pt-6"
              variants={fadeUp}
            >
              <div className="w-20 h-20 bg-gray-100 text-teal-800 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-teal-800 group-hover:text-white transition-colors duration-300">
                <HiOutlineShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl text-teal-800 mb-3">
                  Personalized, compassionate care
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {"We believe that every patient is unique. That's why we take the time to understand your specific needs and tailor treatment plans."}
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex items-start group border-t-2 border-gray-200 pt-6"
              variants={fadeUp}
            >
              <div className="w-20 h-20 bg-gray-100 text-teal-800 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-teal-800 group-hover:text-white transition-colors duration-300">
                <MdOutlineHealthAndSafety className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl text-teal-800 mb-3">
                  Comprehensive care for all skin needs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {"Whether you're seeking medical dermatology, cosmetic treatments, or preventive care, we offer a comprehensive range of services."}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right image section - smaller */}
        <motion.div
          className="w-full md:flex-[0.40]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="relative w-full h-[380px] md:h-[640px] rounded-4xl overflow-hidden">
            <Image
              src="/assets/images/blog1.jpg"
              alt="Dermatologist performing treatment"
              fill
              className="object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
