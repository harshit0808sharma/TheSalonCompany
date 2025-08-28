"use client";

import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import {
  HiOutlineDocumentText,
  HiOutlineClipboardList,
  HiOutlineViewGrid,
  HiOutlineDatabase,
  HiOutlineSparkles,
  HiOutlineCollection,
} from "react-icons/hi";
import AnimateImageRight from "../other/AnimateImageRight";

export default function OurBenefits() {
  return (
    <div className="w-full p-0 md:p-5 mainBg2">
      <div className="relative z-10 flex flex-col mainBg md:rounded-4xl items-center justify-center min-h-screen px-6 py-28">
        <AnimateImageRight/>
        {/* Header content */}
        <motion.div
          className="text-center mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-white">
            <GoDotFill />
            <span className="font-medium">Our Benefits</span>
          </div>
          <h1 className="text-4xl md:text-4xl text-white font-bold leading-snug mb-3">
            Exceptional dermatology, every step of the way
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Experience personalized care, advanced treatments, and visible
            results with our expert dermatology services.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 justify-center items-center">
          {/* Left side features */}
          <div className="space-y-12 text-right">
            {[
              {
                title: "Expert Dermatologists",
                desc: "Our team consists of board-certified dermatologists with experience",
                icon: <HiOutlineDocumentText className="w-8 h-8 mainColor" />,
              },
              {
                title: "Advanced Technology",
                desc: "We use cutting-edge equipment and innovative techniques",
                icon: <HiOutlineClipboardList className="w-8 h-8 mainColor" />,
              },
              {
                title: "Personalized Care",
                desc: "Every treatment plan is tailored to your unique skin type, concerns",
                icon: <HiOutlineViewGrid className="w-8 h-8 mainColor" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-end"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mr-6">
                  <h3 className="text-2xl font-light text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <motion.div
            className="flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-full overflow-hidden bg-teal-700 holo-image">
              <Image
                src="/assets/images/heroImg.png"
                alt="Happy woman with healthy skin"
                width={400}
                height={400}
                className="w-[300px] h-[400px] md:w-[350px] md:h-[550px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right side features */}
          <div className="space-y-12 text-left">
            {[
              {
                title: "Comprehensive Services",
                desc: "From medical dermatology to cosmetic enhancements, we offer a range of treatments",
                icon: <HiOutlineDatabase className="w-8 h-8 mainColor" />,
              },
              {
                title: "High Safety Standards",
                desc: "Your safety is our priority. We adhere to strict hygiene and safety protocols",
                icon: <HiOutlineSparkles className="w-8 h-8 mainColor" />,
              },
              {
                title: "Comfortable Environment",
                desc: "Our clinic provides a welcoming and stress-free atmosphere",
                icon: <HiOutlineCollection className="w-8 h-8 mainColor" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 mr-6">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
