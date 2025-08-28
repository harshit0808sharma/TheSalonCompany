"use client";

import { FaHeart, FaStar, FaSmile } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import { useState } from "react";

export default function OurMission() {
  const [selected, setSelected] = useState(null); // track selected card

  const cards = [
    {
      title: "Our Mission",
      icon: <FaHeart className="text-3xl transition-colors" />,
      text: "To deliver flawless beauty solutions with personalized care, precision, and artistry, helping every client feel confident and radiant.",
    },
    {
      title: "Our Vision",
      icon: <FaStar className="text-3xl transition-colors" />,
      text: "To be the most trusted beauty sanctuary, where luxury meets effortless beauty and every client experiences care that lasts beyond the mirror.",
    },
    {
      title: "Our Values",
      icon: <FaSmile className="text-3xl transition-colors" />,
      text: "Passion for excellence, personalized attention, premium quality, and creating confidence that shines through every service we offer.",
    },
  ];

  return (
    <div className="max-w-[1920px] m-auto px-0 md:px-5 mainBg2 relative">
      <section className="pt-28 pb-20 w-full text-center transition-colors duration-500 mainBg1 rounded-none md:rounded-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12 px-4"
        >
          <div className="flex justify-center items-center gap-2">
            <GoDotFill className="text-teal-800" />
            <span className="font-medium text-teal-800">
              Our Mission / Vision
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-teal-900">
            Crafting Effortless Beauty <br /> With Confidence & Care
          </h2>
          <p className="mt-4 text-gray-600">
            At <strong>The Salon Company</strong>, we combine artistry, luxury,
            and personalized care to enhance your natural beauty and empower your
            confidence every single day.
          </p>
        </motion.div>

        {/* Cards with sticky hover bg */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-6 md:px-10">
          {cards.map((card, i) => {
            const isSelected = selected === i; // check if this card is selected
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setSelected(i)} // set selected on click
                className="relative group overflow-hidden rounded-3xl shadow-md px-6 md:px-8 py-12 md:py-16 flex flex-col items-center cursor-pointer bg-white text-teal-900"
              >
                {/* Dark overlay flowing from bottom */}
                <span
                  className={`absolute inset-0 mainBg origin-bottom transition-transform duration-700 ease-in-out z-0
                    ${isSelected ? "scale-y-100" : "scale-y-0"} 
                    group-hover:scale-y-100
                  `}
                ></span>

                {/* Icon wrapper */}
                <div className="relative z-10 p-4 rounded-xl mb-4 transition-all duration-500 bg-pink-100 text-teal-800 group-hover:bg-white group-hover:text-teal-900">
                  {card.icon}
                </div>

                <h3
                  className={`relative z-10 text-lg md:text-xl font-semibold mb-2 transition-colors
                    ${isSelected ? "text-white" : "group-hover:text-white"}
                  `}
                >
                  {card.title}
                </h3>
                <p
                  className={`relative z-10 text-sm md:text-base transition-colors
                    ${isSelected ? "text-gray-200" : "text-gray-600 group-hover:text-gray-200"}
                  `}
                >
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
