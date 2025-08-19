"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck, FaPlay } from "react-icons/fa";
import doctorImg from "../../../public/assets/images/image6.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProcessSection() {
  return (
    <section className="grid md:grid-cols-2 min-h-[600px] px-5 py-10 md:py-20 gap-8">
      {/* Left side with image + overlay */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex items-end justify-center overflow-hidden rounded-3xl"
      >
        <Image
          src={doctorImg}
          alt="Dermatology Process"
          fill
          className="object-cover rounded-3xl"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40 to-transparent rounded-3xl"></div>

        {/* Text overlay */}
        <div className="relative p-8 md:p-12 text-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white hover:bg-white hover:text-[#214037] transition">
              <FaPlay size={16} />
            </button>
            <div>
              <p className="text-sm opacity-80">Our process</p>
              <h3 className="text-lg md:text-xl font-semibold">
                Watch our procedure
              </h3>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right side content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white flex items-center rounded-3xl"
      >
        <div className="p-8 md:p-14">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm text-[#214037] mb-2"
          >
            • Our Process
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#214037] mb-4 leading-snug"
          >
            Expert dermatology care for healthy, radiant skin
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-600 mb-8"
          >
            From preventive care to specialized treatments, our wide range of
            services is designed to support your health at every stage.
          </motion.p>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            {[
              "Expert Dermatologists",
              "Advanced Technology",
              "Effective Solutions",
              "Personalized Care",
              "Comprehensive Services",
              "Comfortable Environment",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#214037]">
                <FaCheck className="text-[#214037]" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="px-6 py-3 bg-[#214037] text-white flex items-center gap-2 rounded-lg shadow hover:bg-[#19332b] transition"
          >
            <span>Learn More</span> <FaArrowRightLong />
          </motion.button>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-gray-600 text-sm mt-6"
          >
            {"Your skin’s transformation starts here —"}
            <a href="#" className="text-[#214037] font-semibold underline">
              Book Today!
            </a>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
