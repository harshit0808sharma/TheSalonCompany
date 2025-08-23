"use client";

import { FaHeart, FaStar, FaSmile } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

export default function OurMission() {
  const { theme } = useContext(SalonContext); // true = dark, false = light

  return (
    <section
      className={`py-16 px-6 md:px-12 text-center transition-colors duration-500 ${
        theme ? "bg-gray-900 text-white" : "bg-white text-teal-900"
      }`}
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="flex justify-center items-center gap-2">
          <GoDotFill
            className={`${theme ? "text-white" : "text-teal-800"}`}
          />
          <span
            className={`font-medium ${
              theme ? "text-white" : "text-teal-800"
            }`}
          >
            Our Mission / Vision
          </span>
        </div>
        <h2
          className={`text-3xl md:text-4xl font-semibold leading-snug ${
            theme ? "text-white" : "text-teal-900"
          }`}
        >
          Crafting Effortless Beauty <br /> With Confidence & Care
        </h2>
        <p
          className={`mt-4 ${
            theme ? "text-gray-300" : "text-gray-600"
          }`}
        >
          At <strong>The Salon Company</strong>, we combine artistry, luxury,
          and personalized care to enhance your natural beauty and empower your
          confidence every single day.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Our Mission",
            icon: (
              <FaHeart
                className={`text-3xl ${
                  theme ? "text-white" : "text-teal-800"
                }`}
              />
            ),
            bg: theme ? "bg-gray-800" : "bg-pink-100",
            cardStyle: theme
              ? "bg-black text-white"
              : "bg-white text-teal-900",
            text: "To deliver flawless beauty solutions with personalized care, precision, and artistry, helping every client feel confident and radiant.",
          },
          {
            title: "Our Vision",
            icon: (
              <FaStar
                className={`text-3xl ${
                  theme ? "text-yellow-400" : "text-teal-900"
                }`}
              />
            ),
            bg: theme ? "bg-gray-800" : "bg-white",
            cardStyle: theme
              ? "bg-black text-white"
              : "bg-teal-900 text-white",
            text: "To be the most trusted beauty sanctuary, where luxury meets effortless beauty and every client experiences care that lasts beyond the mirror.",
          },
          {
            title: "Our Values",
            icon: (
              <FaSmile
                className={`text-3xl ${
                  theme ? "text-white" : "text-teal-800"
                }`}
              />
            ),
            bg: theme ? "bg-gray-800" : "bg-pink-100",
            cardStyle: theme
              ? "bg-black text-white"
              : "bg-white text-teal-900",
            text: "Passion for excellence, personalized attention, premium quality, and creating confidence that shines through every service we offer.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`${card.cardStyle} rounded-3xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition`}
          >
            <div className={`${card.bg} p-4 rounded-xl mb-4`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p
              className={`text-sm ${
                card.cardStyle.includes("text-white")
                  ? "text-white/90"
                  : theme
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
