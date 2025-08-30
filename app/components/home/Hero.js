"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";
import womanImage from "../../../public/assets/images/hero-img.png";
import ContactInfo from "../other/ContactInfo";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import AnimateImageLeft from "../other/AnimateImageLeft";
import Link from "next/link";

export default function Hero() {
  const { theme } = useContext(SalonContext);

  return (
    <div className={`w-full ${theme ? 'bg-black' : 'bg-[#f7f0f2]'} pb-5 md:pb-8 lg:pb-12`}>
      <section className={`relative overflow-hidden md:mx-5 md:rounded-4xl lg:mx-5 mainBg text-white`}>
        <AnimateImageLeft />
        <div className="container mx-auto px-5 lg:px-16 xl:px-24 h-full">
          <div className="flex flex-col lg:flex-row w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-[45%] mt-8 md:mt-12 lg:mt-24 py-6 lg:py-16 xl:py-20 flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 px-2 sm:px-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block"
                >
                  Redefining Beauty
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="block"
                >
                  One Experience
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  className="block"
                >
                  at a Time
                </motion.span>
              </h1>



              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                {"At The Salon Company, we believe beauty is not just skin deep, it's the art of confidence, self-care, and individuality."}
              </p>
              <Link
                href="/book-appointment"
                className="relative inline-block w-fit font-medium rounded-full group mt-8 overflow-hidden"
              >
                <div className="flex items-center px-6 py-3 relative">
                  <span className="absolute inset-0 bg-white rounded-full"></span>
                  <span className="absolute inset-0 w-0 bg-[#204c44] transition-all duration-500 ease-out group-hover:w-full rounded-full border border-white"></span>
                  <span className="relative flex items-center text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-white">
                    Get Started
                    <FaArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </div>
              </Link>

              <div className="pt-4 sm:pt-6 lg:pt-8">
                <h2 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  Reviews
                </h2>
                <hr className="border-gray-400 mb-4 sm:mb-6" />
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/images/profileImage1.png"
                      alt="Customer review"
                      width={400}
                      height={400}
                      priority
                      className="w-16 h-16 rounded-full object-cover relative z-10"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-2">
                      I am beyond thrilled with the results of my facelift.
                    </p>
                    <div className="flex items-center text-yellow-400">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4" />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-[55%] relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto mt-6 lg:mt-0"
            >
              <Image
                src={womanImage}
                alt="Beauty treatment result"
                priority
                fill
                className="object-contain object-center lg:object-bottom"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 mt-6">
        <ContactInfo />
      </div>
    </div>
  );
}