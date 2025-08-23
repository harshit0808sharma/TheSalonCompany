"use client";

import Image from "next/image";
import { FaUserFriends, FaCut, FaShieldAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

import imgSalon from "../../../public/assets/images/benefitsImage.jpg";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

export default function SalonBenefits() {
  const { theme } = useContext(SalonContext); // true = dark, false = light

  return (
    <section
      className={`py-20 px-6 md:px-12 transition-colors duration-300 ${
        theme ? "bg-black text-white" : "bg-[#fef9f8] text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={imgSalon}
            alt="Salon Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#214037]/80 via-[#214037]/50 to-transparent text-white p-6">
            <div className="flex items-center gap-3">
              <FaUserFriends className="text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">
                  Continuous Care & Follow-Up
                </h4>
                <p className="text-sm text-gray-100">
                  Your beauty is our priority, so we provide ongoing support and care.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <GoDotFill
              className={`${theme ? "text-teal-400" : "text-teal-800"}`}
            />
            <span
              className={`font-medium ${
                theme ? "text-gray-200" : "text-[#264D45]"
              }`}
            >
              Our Benefits
            </span>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 leading-snug ${
              theme ? "text-white" : "text-[#214037]"
            }`}
          >
            Exceptional salon care, <br /> every step
          </h2>
          <p
            className={`mb-8 leading-relaxed ${
              theme ? "text-gray-300" : "text-gray-600"
            }`}
          >
            At The Salon Company, we go beyond styling — we create experiences
            that enhance your natural beauty with high-quality services and
            premium care standards.
          </p>

          {/* Features */}
          <div className="space-y-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="bg-[#214037] text-white p-3 rounded-lg">
                <FaCut className="text-xl" />
              </div>
              <div>
                <h5
                  className={`text-lg font-semibold ${
                    theme ? "text-white" : "text-[#214037]"
                  }`}
                >
                  Comprehensive Services
                </h5>
                <p
                  className={`text-sm md:text-base ${
                    theme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  From hair styling to skincare, our team provides tailored
                  solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="bg-[#214037] text-white p-3 rounded-lg">
                <FaShieldAlt className="text-xl" />
              </div>
              <div>
                <h5
                  className={`text-lg font-semibold ${
                    theme ? "text-white" : "text-[#214037]"
                  }`}
                >
                  High Safety Standards
                </h5>
                <p
                  className={`text-sm md:text-base ${
                    theme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  We follow top safety and hygiene standards for every treatment.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              theme
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-[#214037] text-white hover:bg-[#1a322b]"
            }`}
          >
            Contact Us →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
