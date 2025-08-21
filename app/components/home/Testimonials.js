'use client';

import { useContext, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { SalonContext } from "@/app/context/SalonContext";

export default function Testimonials() {
  const { testimonials } = useContext(SalonContext)
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
          Real experiences. Real transformations. Real confidence.
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Hear from our satisfied clients about their transformations with The Salon Company. Their stories reflect confidence, luxury, and exceptional results.
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
                <FaQuoteLeft className="text-3xl text-[#214037] mb-4" />

                {/* Stars */}
                <div className="flex text-[#214037] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="mr-1" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">{t.text}</p>

                {/* Client Info */}
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
