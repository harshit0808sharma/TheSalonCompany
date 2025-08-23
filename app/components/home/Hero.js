"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import womanImage from "../../../public/assets/images/faceImage (1).png";
import ContactInfo from "../other/ContactInfo";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

export default function Hero() {
  const { theme } = useContext(SalonContext);

  return (
    <div className={`w-full ${theme ? 'bg-black' : 'bg-[#f7f0f2]'} pb-5 md:pb-8 lg:pb-12`}>
      <section
        className={`relative overflow-hidden md:mx-5 md:rounded-4xl lg:mx-5 ${theme ? "bg-gray-900 text-white" : "bg-[#24544B] text-white"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 h-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-0 items-stretch min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] h-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 lg:space-y-8 py-8 lg:py-16 xl:py-20 order-1 lg:order-1 flex flex-col justify-center"
            >
              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-tight">
                Redefining Beauty,{" "}
                <span className="block">One Experience</span>
                <span className="block">at a Time</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 leading-relaxed max-w-lg">
                At The Salon Company, we believe beauty is not just skin deep—it's
                the art of confidence, self-care, and individuality.
              </p>

              {/* CTA Button */}
              <motion.a
                href="/book-appointment"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${theme
                    ? 'bg-gray-700 border border-white hover:bg-gray-600'
                    : 'text-teal-800 bg-white hover:bg-gray-50'
                  } inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base lg:text-lg font-medium rounded-full shadow-lg transition-all duration-300 max-w-max`}
              >
                <span>Book your free consultation today</span>
                <span className="text-lg">→</span>
              </motion.a>

              {/* Reviews Section */}
              <div className="pt-4 sm:pt-6 lg:pt-8">
                <h2 className="font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl mb-3 sm:mb-4">
                  Reviews
                </h2>
                <hr className="border-gray-400 mb-4 sm:mb-6" />

                {/* Review Item */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/images/person1.png"
                      alt="Customer review"
                      width={40}
                      height={40}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed mb-2">
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
              className="relative w-full order-2 lg:order-2 h-96 sm:h-[450px] md:h-[500px] lg:h-full lg:py-0"
            >
              <Image
                src={womanImage}
                alt="Beauty treatment result"
                priority
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 95vw, (max-width: 768px) 85vw, (max-width: 1024px) 55vw, 45vw"
                style={{ objectPosition: 'bottom' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Cards */}
      <div className="px-2 sm:px-4 lg:px-8">
        <ContactInfo />
      </div>
    </div>
  );
}