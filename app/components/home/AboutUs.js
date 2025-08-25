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
      className={`py-20 px-32 flex flex-col gap-10 transition-colors duration-300 mainBg2`}
    >
      <div className="pb-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Images */}
        <div className="relative">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={image1}
              alt="Doctor"
              className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-4xl"
            />
          </motion.div>

          <motion.div
            className={`absolute -bottom-10 right-4 md:right-8 w-2/3 md:w-2/3 h-2/5 rounded-4xl overflow-hidden shadow-lg border-8 ${theme ? "border-gray-800" : "border-white"
              }`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={image2}
              alt="Doctor at work"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.a
            href="/contact"
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`absolute top-6 md:top-10 right-4 md:right-20 w-36 h-36 flex items-center gap-2 justify-center rounded-full border-8 text-sm text-center font-medium shadow-lg spin-slow ${theme
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-[#214037] text-white border-white"
              }`}
          >
            <span className="leading-tight">Contact Us </span>
            <FaArrowRight />
          </motion.a>
        </div>

        {/* Right Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <div className="flex items-center gap-2">
            <GoDotFill className={theme ? "text-teal-400" : "text-teal-800"} />
            <span
              className={`font-medium ${theme ? "text-teal-300" : "text-[#264D45]"
                }`}
            >
              About Us
            </span>
          </div>
          <Heading Text={"The Experience at The Salon Company"} />
          <p
            className={`text-sm font-medium md:text-base text-gray-500`}
          >
            Step into The Salon Company, where luxury meets precision. We
            aren’t just a salon, we’re a sanctuary designed for confidence,
            self-expression, and renewal.
          </p>

          {/* Content + Team Card */}
          <div className="flex flex-col lg:flex-row items-stretch gap-8 w-full">
            {/* Left Paragraph */}
            <div
              className={`flex flex-col space-y-4 gap-10 text-lg sm:text-base md:text-lg w-full lg:w-2/3`}
            >
              <ul className="space-y-3 list-none text-md">
                <li className="flex items-start gap-3">
                  <FaRegSquareCheck className="text-gray-500 mt-1 flex-shrink-0" />
                  <span>Beauty should feel effortless.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegSquareCheck className="text-gray-500 mt-1 flex-shrink-0" />
                  <span>Confidence should last beyond.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegSquareCheck className="text-gray-500 mt-1 flex-shrink-0" />
                  <span>Every client deserves a touch of luxury.</span>
                </li>
              </ul>

              <div className="flex gap-4 flex-wrap w-full">
                <Link
                  href="/about"
                  className={`px-6 py-3 rounded-full flex items-center gap-2 transition text-sm md:text-base w-full sm:w-auto ${theme
                      ? "bg-[#264D45] text-white hover:bg-[#264D45]"
                      : "bg-[#264D45] text-white hover:bg-[#1d3b35]"
                    }`}
                >
                  <span> About More</span> <FaArrowRightLong />
                </Link>
                <button
                  onClick={handleClick}
                  className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition text-sm md:text-base border w-full sm:w-auto ${theme
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
              className={`rounded-4xl px-10 py-8 flex gap-2 flex-col items-center justify-center shadow-lg w-full lg:w-1/3 h-auto lg:h-full ${theme ? "bg-gray-800 text-white" : "bg-[#264D45] text-white"
                }`}
              style={{ minHeight: "100%" }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <TbUsers size={60} className="mb-2" />
              <h3 className="text-5xl">{teamCount}+</h3>
              <p className="text-sm">Team Members</p>
            </motion.div>
          </div>


        </motion.div>
      </div>

      <Stats />

    </section>
  );
}
