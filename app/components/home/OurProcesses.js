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

export default function ProcessSection() {
  const { proocessSteps, theme } = useContext(SalonContext);

  const handleClick = () => {
    toast.info("Oops! This video is coming soon. Check back later!");
  };

  return (
    <>
      <div className="w-full p-0 md:p-5 mainBg2">
        <section
          className={`grid grid-cols-1 lg:grid-cols-2 min-h-[600px] sm:min-h-[650px] lg:min-h-[600px] rounded-none md:rounded-4xl mainBg1 relative`}
        >
          <motion.div
            className="absolute top-0 right-0 w-40 md:w-56 pointer-events-none select-none"
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/assets/images/rightDesign.png"
              alt="Right Design"
              width={224}
              height={224}
              className="object-contain opacity-40"
            />
          </motion.div>
          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex items-end justify-center overflow-hidden rounded-none lg:rounded-l-4xl order-1 lg:order-1 h-80 sm:h-96 lg:h-full holo-image"
          >
            <Image
              src={doctorImg}
              alt="Dermatology Process"
              fill
              className="object-cover"
            />
            <div
              className={`absolute inset-0 rounded-none sm:rounded-2xl lg:rounded-3xl 
          ${theme ? "bg-gradient-to-t from-black/90 via-black/40" : "bg-gradient-to-t from-[#214037]/90 via-[#214037]/40"}`}
            ></div>

            {/* Play Button + Text */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 text-white">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <button
                  onClick={handleClick}
                  className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white 
              transition-all duration-300 shadow-lg hover:scale-110`}
                >
                  <FaPlay size={12} className="text-white sm:text-sm md:text-base" />
                </button>
                <div>
                  <p className="text-sm sm:text-base md:text-lg">Our process</p>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium">
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
            className={`flex flex-col items-start rounded-none sm:rounded-2xl px-4 sm:px-6 md:px-8 lg:px-14 py-8 sm:py-12 md:py-16 lg:py-24 order-2 lg:order-2`}
          >
            {/* Small Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-3 sm:mb-4"
            >
              <GoDotFill className={`${theme ? "text-teal-400" : "text-teal-800"} text-lg sm:text-xl`} />
              <span className={`${theme ? "text-teal-300" : "text-[#264D45]"} font-medium text-sm sm:text-base`}>
                Our Processes
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight sm:leading-snug"
            >
              {"Beauty, Simplified – Step by Step"}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={`mb-6 sm:mb-8 text-sm sm:text-base ${theme ? "text-gray-300" : "text-gray-600"}`}
            >
              {"At The Salon Company, we believe that beauty should be effortless, seamless, and tailored just for you."}
            </motion.p>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full mb-10 gap-x-0 gap-y-4 sm:gap-y-6">
              {proocessSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                  className="flex items-start cursor-pointer transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 text-xl sm:text-2xl md:text-3xl">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <div className="ml-2 sm:ml-3">
                    <h4 className="font-semibold text-gray-500 text-sm sm:text-base">
                      {step.title}
                    </h4>
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
              className={`px-4 sm:px-6 py-2.5 sm:py-3 my-10 flex items-center gap-2 rounded-full shadow transition-all duration-300 text-sm sm:text-base
          ${theme ? "bg-teal-500 text-black hover:bg-teal-400" : "bg-[#214037] text-white hover:bg-[#19332b] hover:scale-105"}`}
            >
              <span>Learn More</span> <FaArrowRightLong />
            </motion.a>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className={`text-xs sm:text-sm mt-4 sm:mt-6 ${theme ? "text-gray-400" : "text-gray-600"}`}
            >
              {"Your skin's transformation starts here "}
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