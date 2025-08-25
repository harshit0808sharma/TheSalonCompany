"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import { toast } from "react-toastify";
import Link from "next/link";
import doctorImg from "../../../public/assets/images/image6.jpeg";
import { FaRegCheckSquare } from "react-icons/fa";


export default function ProcessSection() {
  const { proocessSteps, theme } = useContext(SalonContext);

  const handleClick = () => {
    toast.info("Oops! This video is coming soon. Check back later!");
  };

  return (
    <>
      <div className="w-full p-0 md:p-5 mainBg2">
        <section
          className={`grid md:grid-cols-2 min-h-[600px] md:rounded-4xl gap-8 bg-[#f7f0f2] p-5`}
        >
          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex items-end justify-center overflow-hidden rounded-4xl md:rounded-l-4xl"
          >
            <Image
              src={doctorImg}
              alt="Dermatology Process"
              fill
              className="object-cover"
            />
            <div
              className={`absolute inset-0 rounded-3xl 
          ${theme ? "bg-gradient-to-t from-black/90 via-black/40" : "bg-gradient-to-t from-[#214037]/90 via-[#214037]/40"}`}
            ></div>

            {/* Play Button + Text */}
            <div className="relative p-8 md:p-12 text-white">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <button
                  onClick={handleClick}
                  className={`flex items-center justify-center w-16 h-16 rounded-full border-2 border-white 
              transition-all duration-300 shadow-lg hover:scale-110`}
                >
                  <FaPlay size={16} className="text-white"/>
                </button>
                <div>
                  <p className="text-lg">Our process</p>
                  <h3 className="text-2xl font-medium md:text-4xl">
                    Watch our procedure
                  </h3>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col items-start rounded-3xl px-8 md:px-14 py-16 md:py-24`}
          >
            {/* Small Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <GoDotFill className={`${theme ? "text-teal-400" : "text-teal-800"} text-xl`} />
              <span className={`${theme ? "text-teal-300" : "text-[#264D45]"} font-medium`}>
                Our Processes
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl font-bold mb-4 leading-snug"
            >
              Beauty, Simplified – Step by Step
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={`mb-8 ${theme ? "text-gray-300" : "text-gray-600"}`}
            >
              At The Salon Company, we believe that beauty should be effortless,
              seamless, and tailored just for you.
            </motion.p>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
              {proocessSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                  className={`flex gap-2 items-start p-4 cursor-pointer transition-all duration-300`}
                >
                  <div className={`text-3xl flex-shrink-0 ${theme ? "text-teal-300" : "text-[#214037]"}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-500">{step.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className={`px-6 py-3 flex items-center gap-2 rounded-lg shadow transition-all duration-300 
          ${theme ? "bg-teal-500 text-black hover:bg-teal-400" : "bg-[#214037] text-white hover:bg-[#19332b] hover:scale-105"}`}
            >
              <span>Learn More</span> <FaArrowRightLong />
            </motion.a>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className={`text-sm mt-6 ${theme ? "text-gray-400" : "text-gray-600"}`}
            >
              Your skin’s transformation starts here —{" "}
              <Link
                href="/book-appointment"
                className={`${theme ? "text-teal-300 hover:text-teal-200" : "text-[#214037] font-semibold underline hover:text-[#19332b]"}`}
              >
                Book Today!
              </Link>
            </motion.p>
          </motion.div>
        </section>
      </div>
    </>
  );
}
