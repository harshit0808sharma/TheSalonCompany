"use client";

import { FaPhone, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

const ContactInfo = () => {
  const { theme } = useContext(SalonContext);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cards = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Contact Us",
      lines: ["Phone: +91 123 456 987", "Email: salon@gmail.com"],
    },
    {
      icon: <FaLocationDot className="w-5 h-5" />,
      title: "Location",
      lines: ["Lokaci H.Q. sector 117, Noida", "Uttar Pradesh, India"],
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      title: "Working Hours",
      lines: ["Monday - Friday : 9:00 am to 6:00 pm", "Saturday : 11:00 am to 5:00 pm"],
    },
  ];

  return (
    <motion.div
      className={`grid grid-cols-1 pt-16 pb-10 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 md:px-10 ${
        theme ? "text-white" : "text-black"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          variants={fadeUp}
          className="flex flex-col items-center text-center space-y-2"
        >
          {/* Icon + Heading inline */}
          <div className="flex items-center gap-2">
            {card.icon}
            <h3 className="text-lg md:text-xl font-semibold">{card.title}</h3>
          </div>

          {/* Lines */}
          <div className="flex flex-col gap-1">
            {card.lines.map((line, i) => (
              <p
                key={i}
                className={`text-sm md:text-base ${
                  theme ? "text-gray-300" : "text-black/80"
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ContactInfo;
