"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";

import doctorImg from "../../../public/assets/images/image4.jpeg";
import { GoDotFill } from "react-icons/go";

export default function WhyChooseUs() {
  return (
    <section className="py-10 bg-[#fdf8f9]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <GoDotFill className="text-teal-800" />
            <span className="text-[#264D45] font-medium"> About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#214037] leading-snug mb-4">
            Why choose us for all your dermatology needs
          </h2>
          <p className="text-gray-600 mb-10 text-sm md:text-base">
            {"We’re dedicated to helping you achieve and maintain beautiful, healthy"}
            {" skin. Trust us to provide exceptional care tailored to you."}
          </p>

          {/* Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <motion.div
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-3 bg-[#214037]/5 rounded-lg text-[#214037]">
                <FaHeart className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#214037]">
                  Personalized, compassionate care
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {"We believe that every patient is unique. That’s why we take the"}
                  {" time to understand your specific needs and tailor treatment plans."}
                </p>
              </div>
            </motion.div>

            <hr className="border-gray-200" />

            {/* Feature 2 */}
            <motion.div
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-3 bg-[#214037]/5 rounded-lg text-[#214037]">
                <FaStar className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#214037]">
                  Comprehensive care for all skin needs
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {"Whether you’re seeking medical dermatology, cosmetic treatments,"}
                  {" or preventive care, we offer a comprehensive range of services."}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={doctorImg}
            alt="Dermatology Care"
            className="rounded-2xl object-cover shadow-lg w-full h-auto "
          />
        </motion.div>

      </div>
    </section>
  );
}
