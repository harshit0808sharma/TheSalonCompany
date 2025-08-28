"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import image1 from "../../../public/assets/images/blog7.jpg";
import image2 from "../../../public/assets/images/salon-home-image.jpg";
import { useState, useEffect, useContext } from "react";
import { GoDotFill } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Heading from "../other/Heading";
import { toast } from "react-toastify";
import { SalonContext } from "@/app/context/SalonContext";
import { FaRegSquareCheck } from "react-icons/fa6";
import Stats from "../other/Stats";

export default function AboutSection() {
  const { theme } = useContext(SalonContext);
  const [teamCount, setTeamCount] = useState(0);
  const targetCount = 29;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setTeamCount(current);
      if (current >= targetCount) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    toast.info("Oops! This video is coming soon. Check back later!");
  };

  return (
    <section
      className={`max-w-[1920px] m-auto pt-8 sm:pt-12 md:py-16 lg:pt-28 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 flex flex-col gap-6 sm:gap-8 md:gap-10 transition-colors duration-300 mainBg2`}
    >
      <div className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-8 items-center">
        {/* Left Images */}
        <div className="relative order-2 lg:order-1 ">
          {/* First Image */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="holo-image w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 rounded-4xl">
              <Image
                src={image1}
                alt="Doctor"
                className="w-full h-auto object-cover rounded-4xl"
              />
            </div>
          </motion.div>

          {/* Second Image */}
          <motion.div
            className={`absolute z-10 -bottom-6 sm:-bottom-8 md:-bottom-10 right-2 sm:right-4 md:right-8 w-1/2 sm:w-2/3 md:w-2/3 h-2/5 rounded-4xl overflow-hidden shadow-lg border-4 sm:border-6 md:border-8 border-white`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="holo-image w-full h-full rounded-4xl">
              <Image
                src={image2}
                alt="Doctor at work"
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>
          </motion.div>

          {/* Contact Button */}
          <motion.a
            href="/contact"
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`absolute z-10 top-4 sm:top-6 md:top-10 right-2 sm:right-4 md:right-12 lg:right-20 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 flex items-center gap-1 sm:gap-2 justify-center rounded-full border-4 sm:border-6 md:border-8 text-xs sm:text-sm text-center font-medium shadow-lg spin-slow ${theme
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-[#214037] text-white border-white"
              }`}
          >
            <span className="leading-tight text-xs sm:text-sm">Contact Us </span>
            <FaArrowRight className="text-xs sm:text-sm" />
          </motion.a>
        </div>


        {/* Right Content */}
        <motion.div
          className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <div className="flex items-center gap-2">
            <GoDotFill className={theme ? "text-teal-400" : "text-teal-800"} />
            <span
              className={`font-medium text-sm sm:text-base ${theme ? "text-teal-300" : "text-[#264D45]"
                }`}
            >
              About Us
            </span>
          </div>
          <Heading Text={"The Experience at The Salon Company"} />
          <p className={`text-sm sm:text-base text-gray-500 font-medium`}>
            {"Step into The Salon Company, where luxury meets precision. We aren't just a salon, we're a sanctuary designed for confidence, self-expression, and renewal."}
          </p>

          {/* Content + Team Card */}
          <div className="flex flex-col xl:flex-row items-stretch gap-6 sm:gap-8 w-full">
            {/* Left Paragraph */}
            <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 w-full xl:w-2/3">
              <ul className="space-y-2 sm:space-y-3 list-none text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <FaRegSquareCheck className="text-gray-500 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>Beauty should feel effortless.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <FaRegSquareCheck className="text-gray-500 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>Confidence should last beyond.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <FaRegSquareCheck className="text-gray-500 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>Every client deserves a touch of luxury.</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <Link
                  href="/about"
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 transition text-sm sm:text-base w-full sm:w-auto flex-shrink-0 ${theme
                      ? "bg-[#264D45] text-white hover:bg-[#264D45]"
                      : "bg-[#264D45] text-white hover:bg-[#1d3b35]"
                    }`}
                >
                  <span>About More</span> <FaArrowRightLong />
                </Link>
                <button
                  onClick={handleClick}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold flex items-center justify-center gap-2 transition text-sm sm:text-base border w-full sm:w-auto flex-shrink-0 ${theme
                      ? "border-teal-400 text-teal-400 hover:bg-teal-400"
                      : "border-[#264D45] text-[#264D45]"
                    }`}
                >
                  <FaPlay /> Play Session
                </button>
              </div>
            </div>

            {/* Right Team Count */}
            <motion.div
              className={`rounded-4xl px-6 sm:px-8 md:px-10 py-6 sm:py-8 flex gap-2 flex-col items-center justify-center shadow-lg w-full xl:w-1/3 h-auto min-h-[160px] sm:min-h-[180px] md:min-h-[200px] ${theme ? "bg-gray-800 text-white" : "bg-[#264D45] text-white"
                }`}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <TbUsers size={40} className="sm:w-12 sm:h-12 md:w-15 md:h-15 mb-1 sm:mb-2" />
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">{teamCount}+</h3>
              <p className="text-xs sm:text-sm text-center">Team Members</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Stats />
    </section>
  );
}