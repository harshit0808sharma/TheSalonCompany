"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const theme = false;

  const testimonials = [
    {
      id: 1,
      text: "The Salon Company transformed my skin completely. The personalized care and attention to detail exceeded all my expectations. I've never felt more confident about my appearance.",
      name: "Sarah Johnson",
      role: "Marketing Executive",
      avatar: "/assets/images/blog1.jpg",
    },
    {
      id: 2,
      text: "Professional service from start to finish. The team's expertise and the luxurious environment made every visit a pleasure. Highly recommend their dermal treatments.",
      name: "Michael Chen",
      role: "Business Owner",
      avatar: "/assets/images/blog1.jpg",
    },
    {
      id: 3,
      text: "Amazing results with their chemical peel treatments. The staff is knowledgeable, friendly, and made me feel comfortable throughout the entire process.",
      name: "Emma Davis",
      role: "Teacher",
      avatar: "/assets/images/blog1.jpg",
    },
    {
      id: 4,
      text: "The wrinkle reduction treatment exceeded my expectations. Professional, clean, and the results speak for themselves. I look years younger!",
      name: "Robert Wilson",
      role: "Consultant",
      avatar: "/assets/images/blog1.jpg",
    },
    {
      id: 5,
      text: "Exceptional service and incredible results. The Salon Company truly understands skincare and delivers on their promises. Couldn't be happier!",
      name: "Lisa Anderson",
      role: "Designer",
      avatar: "/assets/images/blog1.jpg",
    },
    {
      id: 6,
      text: "From consultation to treatment, everything was perfect. The team's expertise and the luxurious atmosphere make this place stand out.",
      name: "James Brown",
      role: "Engineer",
      avatar: "/assets/images/blog1.jpg",
    },
  ];

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  const cardsVisible = isMobile ? 1 : 2;
  const slideStep = 1; 
  const maxIndex = testimonials.length - cardsVisible;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + slideStep, maxIndex));
  }, [maxIndex, slideStep]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - slideStep, 0));
  }, [slideStep]);

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; 
        }
        return prev + slideStep;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [maxIndex, slideStep]);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  const renderStars = () =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className="text-lg" />
    ));

  const cardWidthPercentage = isMobile ? 100 : 50;

  return (
    <div className="min-h-screen py-10 md:py-28 px-4 transition-colors duration-500 mainBg2">
      <div className="max-w-7xl mx-auto">
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
              <GoDotFill
                className={`${theme ? "text-white" : "text-teal-800"}`}
              />
              <span
                className={`font-medium ${
                  theme ? "text-white" : "text-teal-800"
                }`}
              >
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real experiences. Real transformations. Real confidence.
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Hear from our satisfied clients about their transformations with
              The Salon Company. Their stories reflect confidence, luxury, and
              exceptional results.
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.02 }}
              style={{ 
                transform: `translateX(-${currentIndex * cardWidthPercentage}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-3 ${isMobile ? 'w-full' : 'w-1/2'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mainBg1 flex justify-start gap-4 md:gap-8 rounded-4xl p-4 md:p-8 relative overflow-hidden cursor-grab active:cursor-grabbing transition-all duration-300 h-full">
                    <FaQuoteLeft className="text-4xl md:text-6xl font-bold mainColor flex-shrink-0" />
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex mb-4 mainColor">
                          {renderStars()}
                        </div>
                        <p className="leading-relaxed mb-6 text-sm md:text-base mainColor">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={400}
                          height={400}
                          className="w-12 h-12 rounded-full mr-4 object-cover flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-semibold text-sm md:text-base text-gray-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs md:text-sm opacity-80 text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${
                    index === currentIndex
                      ? "bg-emerald-600 w-8"
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