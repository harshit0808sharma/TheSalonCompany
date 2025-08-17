"use client";

import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Cooper",
    role: "Beauty Treatments",
    text: "The experts at this clinic took the time to truly understand my condition and prescribed a treatment plan that worked wonders. The combination of medical treatments.",
    avatar: "/assets/images/image3.jpeg",
  },
  {
    name: "Dianne Russell",
    role: "Eczema Treatment",
    text: "The experts at this clinic took the time to truly understand my condition and prescribed a treatment plan that worked wonders. The combination of medical treatments.",
    avatar: "/assets/images/image2.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#faf7f7] py-16 px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <p className="text-sm text-[#214037] mb-2">• Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#214037] leading-snug mb-3">
          Real patient stories that reflect exceptional skin care
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Hear from our satisfied patients about their journey to healthier,
          glowing skin. Their stories reflect the care, expertise.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
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
          </motion.div>
        ))}
      </div>

      {/* Dots Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-10 gap-2"
      >
        <span className="w-3 h-3 bg-[#214037] rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </motion.div>
    </section>
  );
}
