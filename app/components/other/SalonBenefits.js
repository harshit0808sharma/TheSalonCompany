"use client";

import Image from "next/image";
import { FaUserFriends, FaCut, FaShieldAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

import imgSalon from "../../../public/assets/images/image4.jpeg";

export default function SalonBenefits() {
  return (
    <section className="bg-[#fef9f8] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE WITH OVERLAY */}
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
          {/* Overlay Text */}
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
            <GoDotFill className="text-teal-800" />
            <span className="text-[#264D45] font-medium">Our Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#214037] mb-4 leading-snug">
            Exceptional salon care, <br /> every step
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
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
                <h5 className="text-lg font-semibold text-[#214037]">
                  Comprehensive Services
                </h5>
                <p className="text-gray-600 text-sm md:text-base">
                  From hair styling to skincare, our team provides tailored solutions.
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
                <h5 className="text-lg font-semibold text-[#214037]">
                  High Safety Standards
                </h5>
                <p className="text-gray-600 text-sm md:text-base">
                  We follow top safety and hygiene standards for every treatment.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#214037] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a322b] transition-all"
          >
            Contact Us →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
