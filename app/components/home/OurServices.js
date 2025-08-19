"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { HomeContext } from "@/app/context/HomeContext";
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const { servicesData } = useContext(HomeContext);

  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setIndex((prev) =>
      prev + itemsPerPage >= servicesData.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, servicesData.length - itemsPerPage)
        : prev - itemsPerPage
    );
  };

  return (
    <section className="bg-[#f9f6f7] py-10">
      {/* Heading */}
      <div className="text-center mx-auto px-4 pb-10">
        <div className="flex justify-center items-center gap-2">
          <GoDotFill className="text-teal-800" />
          <span className="text-teal-800 font-medium">Our Services</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#214037] mt-2">
          Comprehensive dermatology services <br /> for every skin need
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          From preventive care to specialized treatments, our wide range of
          services is designed to support your health at every stage.
        </p>
      </div>

      {/* Services Grid - Only 3 visible */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {servicesData.slice(index, index + itemsPerPage).map((service, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Image */}
            <Image
              src={service.img}
              alt={service.title}
              width={400}
              height={400}
              className="object-cover w-full h-[300px] md:h-[400px] group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 text-white">
              <div
                className="bg-white/20 backdrop-blur-md p-3 rounded-lg inline-block mb-3 
                           transition-colors duration-300 group-hover:bg-[#28554E]"
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-200 mt-2">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
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

      {/* ✅ CTA Section */}
      <div className="text-center mt-16 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#214037]">
          Professional electrical solutions for every need.
        </h3>
        <p className="mt-4">
          <Link
            href="/contact"
            className="inline-block bg-[#214037] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#28554E] transition"
          >
            Contact Us Today!
          </Link>
        </p>
      </div>
    </section>
  );
}
