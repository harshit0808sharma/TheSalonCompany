"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

import imgMain from "../../../public/assets/images/image4.jpeg";
import imgSmall from "../../../public/assets/images/image2.jpeg";

export default function AboutNewSection() {
  const { theme } = useContext(SalonContext);

  return (
    <section
      className={`max-w-[1920px] m-auto py-20 px-6 md:px-12 transition-colors duration-500 mainBg2`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <GoDotFill
              className={`mainColor`}
            />
            <span
              className={`font-medium mainColor`}
            >
              Hat Sets Us Apart
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 leading-snug ${theme ? "text-white" : "text-[#214037]"
              }`}
          >
            Redefining salon care <br /> with elegance & innovation
          </h2>

          <p
            className={`mb-8 leading-relaxed ${theme ? "text-gray-300" : "text-gray-600"
              }`}
          >
            At The Salon Company, we combine modern beauty techniques with a
            personalized touch. From hair styling to skin and nail treatments,
            our goal is to bring out your natural radiance with exceptional care.
          </p>

          {/* Progress Bars */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div
              className={`flex justify-between text-lg md:text-xl font-medium mb-1 ${theme ? "text-gray-200" : "text-gray-700"
                }`}
            >
              <span>Personalized Care</span>
              <span>95%</span>
            </div>
            <div
              className={`w-full h-4 rounded-full ${theme ? "bg-gray-700" : "bg-gray-200"
                }`}
            >
              <motion.div
                className={`h-4 rounded-full mainBg`}
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div
              className={`flex justify-between text-lg md:text-xl font-medium mb-1 ${theme ? "text-gray-200" : "text-gray-700"
                }`}
            >
              <span>Advanced Styling</span>
              <span>88%</span>
            </div>
            <div
              className={`w-full h-4 rounded-full ${theme ? "bg-gray-700" : "bg-gray-200"
                }`}
            >
              <motion.div
                className={`h-4 rounded-full mainBg`}
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Images */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Circle Image with holo effect */}
          <div className="w-72 h-72 md:w-[600px] md:h-[600px] rounded-full overflow-hidden shadow-xl">
            <div className="holo-image w-full h-full rounded-full">
              <Image
                src={imgMain}
                alt="Salon Treatment"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Small Circle Image */}
          <motion.div
            className={`absolute z-10 bottom-4 right-4 w-28 h-28 md:w-50 md:h-50 rounded-full overflow-hidden border-8 border-white`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="holo-image w-full h-full rounded-full">
              <Image
                src={imgSmall}
                width={400}
                height={400}
                alt="Salon Service"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* Stats Badge */}
          <motion.div
            className={`absolute bottom-0 left-20 -translate-x-1/2 px-6 py-3 rounded-xl flex items-center gap-3 ${theme ? "bg-gray-800" : "bg-white"
              }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <FaStar className="text-4xl mainColor" />
            <div>
              <p
                className={`text-xl md:text-2xl font-bold ${theme ? "text-white" : "text-[#214037]"
                  }`}
              >
                27k
              </p>
              <p
                className={`text-sm md:text-lg ${theme ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Happy Clients
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
