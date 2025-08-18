"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaSpa,
  FaHandSparkles,
  FaGem,
  FaLeaf,
  FaPhoneAlt,
} from "react-icons/fa";

import salonImg from "../../../public/assets/images/image4.jpeg";

export default function OurBenefits() {
  const leftBenefits = [
    {
      icon: <FaPaintBrush className="text-[#214037] text-2xl" />,
      title: "Permanent Makeup",
      desc: "Wake up flawless with microblading, lip blushing, and eyeliner tattoo done by skilled artists.",
    },
    {
      icon: <FaSpa className="text-[#214037] text-2xl" />,
      title: "Luxury Beauty Treatments",
      desc: "Indulge in bespoke facials, eyebrow lamination, and skin rejuvenation therapies.",
    },
    {
      icon: <FaHandSparkles className="text-[#214037] text-2xl" />,
      title: "Eyelash Extensions",
      desc: "Choose from Classic, Hybrid, Volume, or Colorful extensions tailored to your style.",
    },
  ];

  const rightBenefits = [
    {
      icon: <FaGem className="text-[#214037] text-2xl" />,
      title: "Premium Salon Experience",
      desc: "Step into a sanctuary where natural beauty is enhanced with precision and artistry.",
    },
    {
      icon: <FaLeaf className="text-[#214037] text-2xl" />,
      title: "Safe & Hygienic",
      desc: "We maintain the highest standards of cleanliness and safety for every treatment.",
    },
    {
      icon: <FaPhoneAlt className="text-[#214037] text-2xl" />,
      title: "Free Consultation",
      desc: "Call us at +91 88000 26046 and let our experts guide you to the perfect treatment.",
    },
  ];

  return (
    <section className="bg-teal-800 text-white py-20 px-6 md:px-12 lg:rounded-4xl lg:mx-5">
      {/* Top Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm mb-2">• The Salon Company</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Hair • Beauty • Makeup • Nail Extensions
        </h2>
        <p className="text-gray-200 text-sm md:text-base">
          Discover the art of luxury beauty. From permanent makeup to
          rejuvenating facials, our expert team ensures you leave glowing with
          confidence and elegance.
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
