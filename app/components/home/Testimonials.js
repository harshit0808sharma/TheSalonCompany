'use client'
import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { SalonContext } from '@/app/context/SalonContext';
import { FaQuoteLeft } from "react-icons/fa";
import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { testimonials, theme } = useContext(SalonContext); // ✅ get theme also

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className="text-emerald-600 text-sm" />
    ));
  };

  return (
    <div
      className={`min-h-screen py-10 px-4 transition-colors duration-500
        ${theme ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col gap-10">
          {/* Header */}
          <motion.div
            className="text-center max-w-3xl flex flex-col gap-5 mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center gap-2">
              <GoDotFill className={`${theme ? "text-white" : "text-teal-800"}`} />
              <span className={`font-medium ${theme ? "text-white" : "text-teal-800"}`}>
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real experiences. Real transformations. Real confidence.
            </h2>
            <p className="text-base md:text-lg">
              Hear from our satisfied clients about their transformations with The Salon Company. 
              Their stories reflect confidence, luxury, and exceptional results.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Testimonial */}
            <motion.div
              className={`rounded-4xl p-8 relative overflow-hidden cursor-grab active:cursor-grabbing transition-colors duration-500 bg-[#f7f0f2]`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.02 }}
            >
              <FaQuoteLeft className="text-4xl font-bold" />
              <div className="flex mb-4 mt-4">{renderStars()}</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="leading-relaxed mb-6 text-sm">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      width={400}
                      height={400}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs opacity-80">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right Testimonial */}
            <motion.div
              className={`rounded-4xl p-8 relative overflow-hidden cursor-grab active:cursor-grabbing transition-colors duration-500 bg-[#f7f0f2]`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.02 }}
            >
              <FaQuoteLeft className="text-4xl font-bold" />
              <div className="flex mb-4 mt-4">{renderStars()}</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={(currentIndex + 1) % testimonials.length}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="leading-relaxed mb-6 text-sm">
                    {testimonials[(currentIndex + 1) % testimonials.length].text}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonials[(currentIndex + 1) % testimonials.length].avatar}
                      alt={testimonials[(currentIndex + 1) % testimonials.length].name}
                      width={400}
                      height={400}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">
                        {testimonials[(currentIndex + 1) % testimonials.length].name}
                      </h4>
                      <p className="text-xs opacity-80">
                        {testimonials[(currentIndex + 1) % testimonials.length].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${index === currentIndex
                    ? "bg-emerald-600"
                    : theme
                    ? "bg-gray-600 hover:bg-gray-500"
                    : "bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
