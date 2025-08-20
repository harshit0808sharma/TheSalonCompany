'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { HomeContext } from "@/app/context/HomeContext";
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Heading from "../other/Heading";

export default function Services() {
  const { servicesData } = useContext(HomeContext);
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % servicesData.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);

  const currentCategory = servicesData[index];

  return (
    <section className="bg-[#f9f6f7] py-16 px-4 md:px-12">
      
      {/* Category Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2">
          <GoDotFill className="text-teal-800" />
          <span className="text-teal-800 font-medium">Our Services</span>
        </div>
        <Heading Text={currentCategory.category}/>
        <p className="text-gray-600 mt-4 text-sm md:text-base">{currentCategory.description}</p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-200 mt-2">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={prevSlide}
          className="p-3 bg-[#214037] text-white rounded-full shadow-md hover:bg-[#28554E] transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-[#214037] text-white rounded-full shadow-md hover:bg-[#28554E] transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#214037]">{currentCategory.cta}</h3>
        <p className="mt-4">
          <Link
            href="/contact"
            className="inline-block bg-[#214037] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#28554E] transition"
          >
            Book Your Free Consultation
          </Link>
        </p>
      </div>
    </section>
  );
}
