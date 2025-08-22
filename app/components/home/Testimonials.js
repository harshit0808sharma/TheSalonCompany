'use client'
import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { SalonContext } from '@/app/context/SalonContext';
import { FaQuoteLeft } from "react-icons/fa";
import { GoDotFill } from 'react-icons/go';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { testimonials } = useContext(SalonContext);

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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col gap-10">
          <motion.div
            className="text-center max-w-3xl flex flex-col gap-5 mx-auto mb-10 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center gap-2">
              <GoDotFill className="text-teal-800" />
              <span className="text-teal-800 font-medium">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real experiences. Real transformations. Real confidence.
            </h2>
            <p className="text-black text-base md:text-lg">
              Hear from our satisfied clients about their transformations with The Salon Company. Their stories reflect confidence, luxury, and exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Testimonial */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.02 }}
            >
              <FaQuoteLeft className='text-4xl font-bold' />
              <div className="flex mb-4 mt-4">
                {renderStars()}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right Testimonial */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.02 }}
            >
              <FaQuoteLeft className='text-4xl font-bold' />
              <div className="flex mb-4 mt-4">
                {renderStars()}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={(currentIndex + 1) % testimonials.length}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {testimonials[(currentIndex + 1) % testimonials.length].text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonials[(currentIndex + 1) % testimonials.length].avatar}
                      alt={testimonials[(currentIndex + 1) % testimonials.length].name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {testimonials[(currentIndex + 1) % testimonials.length].name}
                      </h4>
                      <p className="text-gray-500 text-xs">
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-emerald-600'
                  : 'bg-gray-300 hover:bg-gray-400'
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