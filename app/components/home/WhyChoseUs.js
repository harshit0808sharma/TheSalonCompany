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
    <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-32 items-center mainBg2">
      {/* Main content container */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-10 md:py-16 lg:py-28 gap-8 lg:gap-12">
        
        {/* Left content section */}
        <motion.div
          className="w-full lg:flex-[0.60]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-2 text-teal-900 mb-4">
            <GoDotFill />
            <span className="font-medium">Why Choose Us</span>
          </div>

          {/* Main heading */}
          <div className="mb-6">
            <Heading Text={"Why choose us for all your dermatology needs"} />
          </div>

          <p className="text-gray-600 text-base lg:text-lg mb-8 lg:mb-10 leading-relaxed">
            {"We're dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you."}
          </p>

          {/* Features section */}
          <div className="space-y-6 lg:space-y-8">
            {/* Feature 1 */}
            <motion.div
              className="flex items-start group border-t-2 border-gray-200 pt-6"
              variants={fadeUp}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 text-teal-800 rounded-xl flex items-center justify-center mr-4 lg:mr-6 flex-shrink-0 group-hover:bg-teal-800 group-hover:text-white transition-colors duration-300">
                <HiOutlineShieldCheck className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl text-teal-800 mb-3">
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
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 text-teal-800 rounded-xl flex items-center justify-center mr-4 lg:mr-6 flex-shrink-0 group-hover:bg-teal-800 group-hover:text-white transition-colors duration-300">
                <MdOutlineHealthAndSafety className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl text-teal-800 mb-3">
                  Comprehensive care for all skin needs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {"Whether you're seeking medical dermatology, cosmetic treatments, or preventive care, we offer a comprehensive range of services."}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right section */}
        <motion.div
          className="w-full lg:flex-[0.40]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="holo-image relative w-full h-80 sm:h-96 lg:h-[500px] xl:h-[640px] rounded-4xl overflow-hidden holo-image">
            <Image
              src="/assets/images/blog1.jpg"
              alt="Dermatologist performing treatment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}