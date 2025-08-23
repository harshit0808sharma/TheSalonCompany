'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import Heading from "../other/Heading";

export default function Services() {
  const { servicesData, theme } = useContext(SalonContext);
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % servicesData.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);

  const currentCategory = servicesData[index];

  return (
    <div className="w-full p-5">
      <section
        className={`py-16 transition-colors duration-300 md:rounded-4xl
        ${theme ? "bg-black text-white" : "bg-[#f9f6f7] text-gray-900"}`}
      >
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2">
            <GoDotFill className={theme ? "text-teal-400" : "text-teal-800"} />
            <span className={`font-medium ${theme ? "text-teal-400" : "text-teal-800"}`}>
              Our Services
            </span>
          </div>
          <Heading Text={currentCategory.category} />
          <p
            className={`mt-4 text-sm md:text-base flex items-center justify-center gap-2
          ${theme ? "text-gray-300" : "text-gray-600"}`}
          >
            <FaRegCalendarAlt className={theme ? "text-teal-400" : "text-teal-700"} />
            {currentCategory.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentCategory.services.map((service, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={400}
                className="object-cover w-full h-[300px] md:h-[400px] group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t 
                ${theme ? "from-black/80 via-black/50" : "from-[#214037]/90 via-[#214037]/40"} 
                to-transparent`}
              ></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <GoDotFill className="text-teal-400" />
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200 mt-2">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className={`p-3 rounded-full shadow-md transition
            ${theme ? "bg-teal-600 text-white hover:bg-teal-500" : "bg-[#214037] text-white hover:bg-[#28554E]"}`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className={`p-3 rounded-full shadow-md transition
            ${theme ? "bg-teal-600 text-white hover:bg-teal-500" : "bg-[#214037] text-white hover:bg-[#28554E]"}`}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 px-6">
          <h3
            className={`text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 
            ${theme ? "text-white" : "text-[#214037]"}`}
          >
            <FaRegCalendarAlt className={theme ? "text-teal-400" : "text-teal-700"} />
            {currentCategory.cta}
          </h3>
          <p className="mt-4">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-md transition
              ${theme ? "bg-teal-600 text-white hover:bg-teal-500" : "bg-[#214037] text-white hover:bg-[#28554E]"}`}
            >
              Book Your Free Consultation <FaArrowRight />
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
