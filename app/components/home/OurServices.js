"use client";

import { useState, useEffect } from "react";
import {
  HiOutlineSquares2X2,
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineScissors,
  HiOutlineBeaker,
  HiOutlineSwatch,
  HiOutlineShieldCheck,
  HiOutlineHeart,
} from "react-icons/hi2";

import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import img from '../../../public/assets/images/blog1.jpg';

export default function ServicesCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const services = [
    { id: 1, title: "Wrinkle Reduction", description: "Advanced treatments to smooth fine lines and restore youthful skin.", icon: HiOutlineSquares2X2, image: img },
    { id: 2, title: "Dermal Fillers", description: "Enhance your natural beauty with subtle, volume-restoring fillers.", icon: HiOutlineCube, image: img },
    { id: 3, title: "Chemical Peels", description: "Reveal brighter, smoother skin with our professional-grade peels.", icon: HiOutlineGlobeAlt, image: img },
    { id: 4, title: "Laser Hair Removal", description: "Say goodbye to unwanted hair with long-lasting laser treatments.", icon: HiOutlineSparkles, image: img },
    { id: 5, title: "Facial Rejuvenation", description: "Custom facials designed to hydrate, brighten, and refresh your skin.", icon: HiOutlineScissors, image: img },
    { id: 6, title: "Microneedling", description: "Stimulate collagen and improve texture with expert microneedling.", icon: HiOutlineBeaker, image: img },
    { id: 7, title: "Skin Brightening", description: "Advanced treatments that even skin tone and enhance radiance.", icon: HiOutlineSwatch, image: img },
    { id: 8, title: "Acne Treatments", description: "Effective solutions to reduce breakouts and improve skin clarity.", icon: HiOutlineShieldCheck, image: img },
    { id: 9, title: "Wellness Therapy", description: "Relax, recharge, and restore balance with holistic wellness care.", icon: HiOutlineHeart, image: img },
  ];

  const totalSlides = services.length;

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const Heading = ({ Text }) => <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">{Text}</h2>;

  return (
    <div className="w-full p-5 mainBg2">
      <section className="p-8 md:p-20 bg-pink-50 rounded-3xl md:rounded-4xl">
        <div className="mx-auto flex flex-col gap-8 max-w-7xl">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 justify-center">
              <GoDotFill className="text-teal-800 text-lg" />
              <span className="font-medium text-teal-800 uppercase tracking-wide"> Services </span>
            </div>
            <Heading Text="The Experience at The Salon Company" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From preventive care to specialized treatments, our wide range of services is designed to support your health and beauty at every stage.
            </p>
          </motion.div>

          {/* Single Service Card */}
          <div className="relative h-80 md:h-96 lg:h-[28rem]">
            <AnimatePresence mode="wait">
              {services.map((service, i) => {
                if (i !== currentSlide) return null;
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-3xl shadow-lg w-full h-full"
                  >
                    <div className="relative w-full h-full">
                      {/* Skeleton */}
                      {!loadedImages[service.id] && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-3xl"></div>}

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className={`object-cover transition-all duration-500 group-hover:scale-105 ${loadedImages[service.id] ? "opacity-100" : "opacity-0"}`}
                        onLoad={() => setLoadedImages(prev => ({ ...prev, [service.id]: true }))}
                        onError={() => setLoadedImages(prev => ({ ...prev, [service.id]: true }))}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300"></div>

                      {/* Icon */}
                      <div className="absolute top-6 left-6 z-10">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-teal-700 transition-all duration-300 transform group-hover:scale-110">
                          <Icon className="w-6 h-6 text-teal-800 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                        <h3 className="text-2xl font-bold mb-3 transition-colors duration-300">{service.title}</h3>
                        <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <motion.div className="flex justify-center items-center space-x-3 mb-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 hover:opacity-80 ${index === currentSlide ? "bg-teal-700 w-8" : "bg-gray-300 w-3 hover:bg-gray-400"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center">
            <p className="text-lg text-gray-600 mb-2">
              Experience beauty redefined.{" "}
              <Link href="/book-appointment" className="text-teal-800 font-semibold underline hover:text-teal-900 transition-colors duration-200">
                Book Your Appointment Today!
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
