"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaPlay, FaHeart, FaStar } from "react-icons/fa";
import image1 from "../../../public/assets/images/blog7.jpg";
import image2 from "../../../public/assets/images/image2.jpeg";
import { useState, useEffect, useContext } from "react";
import { GoDotFill } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Heading from "../other/Heading";
import { toast } from "react-toastify";
import { SalonContext } from "@/app/context/SalonContext";
import { FaRegSquareCheck } from "react-icons/fa6";

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
      className={`py-20 transition-colors duration-300 ${theme ? "bg-gray-900 text-white" : " text-black"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
            className={`absolute -bottom-10 right-4 md:right-8 w-2/3 md:w-1/2 h-auto rounded-4xl overflow-hidden shadow-lg border-8 ${theme ? "border-gray-800" : "border-white"
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
            <GoDotFill
              className={theme ? "text-teal-400" : "text-teal-800"}
            />
            <span
              className={`font-medium ${theme ? "text-teal-300" : "text-[#264D45]"
                }`}
            >
              About Us
            </span>
          </div>
          <Heading Text={"The Experience at The Salon Company"} />
          <p
            className={`text-sm md:text-base ${theme ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Step into The Salon Company, where luxury meets precision. We
            aren’t just a salon—we’re a sanctuary designed for confidence,
            self-expression, and renewal.
          </p>

          {/* Philosophy */}
          <div className={`text-lg sm:text-base md:text-lg ${theme ? "text-gray-300" : "text-gray-700"} w-full sm:max-w-md lg:max-w-lg`}>
            <ul className="space-y-2">
              <li className="flex items-start sm:items-center gap-2">
                <FaRegSquareCheck className="text-teal-800 mt-1 sm:mt-0" />
                <span>Beauty should feel effortless, not exhausting.</span>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <FaRegSquareCheck className="text-teal-800 mt-1 sm:mt-0" />
                <span>Confidence should last beyond the mirror.</span>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <FaRegSquareCheck className="text-teal-800 mt-1 sm:mt-0" />
                <span>Every client deserves a touch of luxury and artistry.</span>
              </li>
            </ul>
          </div>


          {/* Buttons + Team Count */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mt-8">
            {/* Buttons */}
            <div className="flex gap-4 flex-wrap w-full lg:w-auto">
              <Link
                href="/about"
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition text-sm md:text-base w-full sm:w-auto ${theme
                  ? "bg-teal-500 text-white hover:bg-teal-600"
                  : "bg-[#264D45] text-white hover:bg-[#1d3b35]"
                  }`}
              >
                <span> About More</span> <FaArrowRightLong />
              </Link>
              <button
                onClick={handleClick}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition text-sm md:text-base border w-full sm:w-auto ${theme
                  ? "border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white"
                  : "border-[#264D45] text-[#264D45] hover:bg-[#264D45] hover:text-white"
                  }`}
              >
                <FaPlay /> Play Session
              </button>
            </div>

            {/* Team Count */}
            <motion.div
              className={`rounded-2xl px-8 py-6 flex gap-2 flex-col items-center shadow-md w-full lg:w-auto ${theme ? "bg-gray-800 text-white" : "bg-[#264D45] text-white"
                }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <TbUsers size={50} className="mb-2" />
              <h3 className="text-5xl font-bold">{teamCount}+</h3>
              <p className="text-lg">Team Members</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
