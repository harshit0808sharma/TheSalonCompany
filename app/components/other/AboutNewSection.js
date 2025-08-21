"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import imgMain from "../../../public/assets/images/image4.jpeg";
import imgSmall from "../../../public/assets/images/image2.jpeg";

export default function AboutNewSection() {
  return (
    <section className="bg-[#fef9f8] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <GoDotFill className="text-teal-800" />
            <span className="text-[#264D45] font-medium">About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#214037] mb-4 leading-snug">
            Redefining salon care <br /> with elegance & innovation
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            At The Salon Company, we combine modern beauty techniques with a
            personalized touch. From hair styling to skin and nail treatments,
            our goal is to bring out your natural radiance with exceptional care.
          </p>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between text-lg md:text-xl font-medium text-gray-700 mb-1">
              <span>Personalized Care</span>
              <span>95%</span>
            </div>
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <motion.div
                className="bg-[#214037] h-4 rounded-full"
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
            <div className="flex justify-between text-lg md:text-xl font-medium text-gray-700 mb-1">
              <span>Advanced Styling</span>
              <span>88%</span>
            </div>
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <motion.div
                className="bg-[#214037] h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-72 h-72 md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-xl">
            <Image
              src={imgMain}
              alt="Salon Treatment"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            className="absolute bottom-4 right-4 w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-8 border-white shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={imgSmall}
              width={400}
              height={400}
              alt="Salon Service"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-20 -translate-x-1/2 bg-white shadow-lg px-6 py-3 rounded-xl flex items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <FaStar className="text-green-600 text-xl" />
            <div>
              <p className="text-xl md:text-2xl font-bold text-[#214037]">27k</p>
              <p className="text-sm md:text-lg text-gray-600">Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
