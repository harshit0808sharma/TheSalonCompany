"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaCheck, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

import img1 from "../../../public/assets/images/image11.jpeg";
import img2 from "../../../public/assets/images/image4.jpeg";
import { GoDotFill } from "react-icons/go";

export default function WhoWeAre() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 49;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
        >
          {/* First image */}
          <Image
            src={img1}
            alt="Salon"
            className="w-full sm:w-72 md:w-80 rounded-4xl object-cover shadow-lg"
          />

          <div className="flex flex-col gap-8 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#214037] text-white rounded-4xl px-5 py-6 flex items-center gap-5 shadow-lg"
            >
              <FaUsers size={40} />
              <div>
                <p className="text-4xl font-bold">{count}+</p>
                <p className="text-lg">Years of Expertise</p>
              </div>
            </motion.div>

            {/* Second image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src={img2}
                alt="Salon Treatment"
                className="w-72 sm:w-56 md:w-64 rounded-4xl object-cover shadow-lg"
              />
            </motion.div>

            {/* Circular Contact Badge */}
            <motion.a
              href="/book-appointment"
              initial={{ rotate: -90, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute left-56 md:-left-20 top-1/2 -translate-y-1/2 bg-[#214037] text-white w-36 h-36 flex items-center justify-center gap-2 rounded-full border-8 border-white text-sm text-center font-medium shadow-lg spin-slow"
            >
              <span className="leading-tight">Book Your Consultation</span> <FaArrowRight />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-2">
            <GoDotFill className="text-teal-800" />
            <span className="text-[#264D45] font-medium">Who We Are</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#214037] mb-4 leading-snug">
            Where Luxury Meets Effortless Beauty
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <strong>The Salon Company</strong>, we combine **premium beauty treatments, skilled artistry, and personalized care** to help you look and feel your absolute best. From **hair, makeup, skin, and nails**, every service is crafted to **enhance your confidence and radiance**.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Certified Beauty Experts",
              "Tailored Beauty Plans",
              "State-of-the-Art Tools",
              "Comprehensive Services",
              "Trusted by Clients",
              "Relaxing Luxury Environment",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-2 text-gray-700"
              >
                <FaCheck className="text-green-600" /> {item}
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.a
          href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#214037] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a322b] transition-all"
          >
            Learn More →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
