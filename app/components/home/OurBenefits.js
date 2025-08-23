'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaSpa,
  FaHandSparkles,
  FaGem,
  FaLeaf,
  FaPhoneAlt,
  FaClock,
  FaSmileBeam,
} from "react-icons/fa";
import salonImg from "../../../public/assets/images/hair.png";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

export default function OurBenefits() {
  const { theme } = useContext(SalonContext); // ✅ true = dark, false = light

  const leftBenefits = [
    {
      icon: <FaPaintBrush className={`${theme ? "text-teal-200" : "text-[#214037]"} text-2xl`} />,
      title: "Permanent Makeup",
      desc: "Wake up flawless every day with PMU, lip blushing, and eyeliner tattoo applied by expert artists.",
    },
    {
      icon: <FaSpa className={`${theme ? "text-teal-200" : "text-[#214037]"} text-2xl`} />,
      title: "Luxury Beauty Treatments",
      desc: "Indulge in bespoke facials, eyebrow lamination, and skin rejuvenation therapies designed for your skin type.",
    },
    {
      icon: <FaHandSparkles className={`${theme ? "text-teal-200" : "text-[#214037]"} text-2xl`} />,
      title: "Eyelash Extensions",
      desc: "Choose from Classic, Hybrid, Volume, or Colorful lashes to enhance your natural beauty effortlessly.",
    },
    {
      icon: <FaClock className={`${theme ? "text-teal-200" : "text-[#214037]"} text-2xl`} />,
      title: "Time-Saving Solutions",
      desc: "Long-lasting treatments reduce your daily routine without compromising style or elegance.",
    },
  ];

  const rightBenefits = [
    {
      icon: <FaGem className={`${theme ? "text-teal-200" : "text-[#214037]"} text-2xl`} />,
      title: "Premium Salon Experience",
      desc: "Step into a sanctuary where natural beauty is enhanced with precision, artistry, and attention to detail.",
    },
    {
      icon: <FaLeaf className={`${theme ? "text-teal-200" : "text-[#214037]"} text-2xl`} />,
      title: "Safe & Hygienic",
      desc: "Highest standards of cleanliness and safety ensure peace of mind for every treatment.",
    },
    {
      icon: <FaPhoneAlt className={`${theme ? "text-teal-200" : "text-[#214037]"} text-2xl`} />,
      title: "Free Consultation",
      desc: "Call us at +91 88000 26046 for personalized guidance to find the perfect beauty solution.",
    },
    {
      icon: <FaSmileBeam className={`${theme ? "text-teal-200" : "text-[#214037]"} text-2xl`} />,
      title: "Confidence That Lasts",
      desc: "Leave the salon glowing, radiant, and unstoppable with treatments designed to boost your self-esteem.",
    },
  ];

  return (
    <div className={`w-full p-5 ${theme ? 'bg-black ' : ''}`}>
      <section
      className={`py-20 md:py-28 px-6 md:px-12 lg:rounded-4xl transition-colors duration-300
        ${theme ? "bg-gray-900 text-white" : "bg-teal-800 text-white"}
      `}
    >
      {/* Top Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center gap-2">
          <GoDotFill className="text-white" />
          <span className="font-medium">{"Why You'll Love Us"}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          {"Hair • Beauty • Makeup • Nail Extensions"}
        </h2>
        <p className="text-gray-200 text-sm md:text-base">
          {"Choosing The Salon Company is more than a beauty appointment—it’s an investment in confidence, luxury, and effortless style."}
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
              <div className={`p-3 rounded-lg shadow-md ${theme ? "bg-gray-800" : "bg-white"}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-200 text-sm md:text-base">{item.desc}</p>
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
              src={salonImg}
              alt="The Salon Company"
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
              <div className={`p-3 rounded-lg shadow-md ${theme ? "bg-gray-800" : "bg-white"}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-200 text-sm md:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
