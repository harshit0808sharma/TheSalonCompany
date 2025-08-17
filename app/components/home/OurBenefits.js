"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaMicroscope,
  FaUserCheck,
  FaDatabase,
  FaShieldAlt,
  FaHome,
} from "react-icons/fa";

import doctorImg from "../../../public/assets/images/image4.jpeg";

export default function OurBenefits() {
  const leftBenefits = [
    {
      icon: <FaUserMd className="text-[#214037] text-2xl" />,
      title: "Expert Dermatologists",
      desc: "Our team consists of board-certified dermatologists with years of experience.",
    },
    {
      icon: <FaMicroscope className="text-[#214037] text-2xl" />,
      title: "Advanced Technology",
      desc: "We use cutting-edge equipment and innovative techniques for best results.",
    },
    {
      icon: <FaUserCheck className="text-[#214037] text-2xl" />,
      title: "Personalized Care",
      desc: "Every treatment plan is tailored to your unique skin type and concerns.",
    },
  ];

  const rightBenefits = [
    {
      icon: <FaDatabase className="text-[#214037] text-2xl" />,
      title: "Comprehensive Services",
      desc: "From medical dermatology to cosmetic enhancements, we offer it all.",
    },
    {
      icon: <FaShieldAlt className="text-[#214037] text-2xl" />,
      title: "High Safety Standards",
      desc: "Your safety is our priority. We follow strict hygiene and safety protocols.",
    },
    {
      icon: <FaHome className="text-[#214037] text-2xl" />,
      title: "Comfortable Environment",
      desc: "Our clinic provides a welcoming and stress-free atmosphere.",
    },
  ];

  return (
    <section className="bg-[#214037] text-white py-20 px-6 md:px-12 lg:rounded-4xl lg:mx-5">
      {/* Top Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm mb-2">• Our Benefits</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Exceptional dermatology, every step of the way
        </h2>
        <p className="text-gray-200 text-sm md:text-base">
          Experience personalized care, advanced treatments, and visible results
          with our expert dermatology services.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center">
        {/* Left Benefits */}
        <div className="space-y-10 order-1">
          {leftBenefits.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-3 rounded-lg shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          className="flex justify-center order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
            <Image
              src={doctorImg}
              alt="Dermatology Expert"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Right Benefits */}
        <div className="space-y-10 order-3">
          {rightBenefits.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-3 rounded-lg shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
