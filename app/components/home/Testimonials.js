"use client";

import { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const testimonials = [
  {
    name: "Jane Cooper",
    role: "Beauty Treatments",
    text: "The experts at this clinic took the time to truly understand my condition and prescribed a treatment plan that worked wonders.",
    avatar: "/assets/images/person1.png",
  },
  {
    name: "Dianne Russell",
    role: "Eczema Treatment",
    text: "The clinic staff provided amazing support and the treatment improved my skin significantly in just weeks.",
    avatar: "/assets/images/person2.png",
  },
  {
    name: "Cody Fisher",
    role: "Acne Therapy",
    text: "I struggled with acne for years, but their personalized care and treatment made a huge difference.",
    avatar: "/assets/images/person3.png",
  },
  {
    name: "Robert Fox",
    role: "Hair & Skin Care",
    text: "Professional, kind, and truly effective treatments. I feel more confident than ever.",
    avatar: "/assets/images/person4.png",
  },
  {
    name: "Kristin Watson",
    role: "Wellness Program",
    text: "The holistic approach really impressed me, and I saw great improvements in both skin and health.",
    avatar: "/assets/images/person5.png",
  },
  {
    name: "Esther Howard",
    role: "Dermatology Care",
    text: "The best skincare experience I’ve ever had. Highly professional team and long-lasting results.",
    avatar: "/assets/images/person7.png",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleDotClick = (i) => {
    setActiveIndex(i);
  };

  return (
    <section className="bg-[#faf7f7] py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="flex justify-center items-center gap-2">
          <GoDotFill className="text-teal-800" />
          <span className="text-teal-800 font-medium">Testimonials</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#214037] leading-snug mb-3">
          Real patient stories that reflect exceptional skin care
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Hear from our satisfied patients about their journey to healthier,
          glowing skin. Their stories reflect the care, expertise.
        </p>
      </motion.div>

      {/* Sliding Container */}
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          key={activeIndex}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials
            .slice(activeIndex * itemsPerPage, activeIndex * itemsPerPage + itemsPerPage)
            .map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-3xl text-[#214037] mb-4" />

                {/* Stars */}
                <div className="flex text-[#214037] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="mr-1" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">{t.text}</p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#214037]">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-10 gap-3"
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === activeIndex ? "bg-[#214037]" : "bg-gray-300"
              }`}
          />
        ))}
      </motion.div>
    </section>
  );
}
