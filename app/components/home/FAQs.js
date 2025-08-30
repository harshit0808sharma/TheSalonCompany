"use client";

import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { SalonContext } from "@/app/context/SalonContext";
import AnimateImageLeft from "../other/AnimateImageLeft";
import { FaArrowRight } from "react-icons/fa";

export default function FAQSection() {
  const { faqs } = useContext(SalonContext);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1920px] m-auto px-0 md:px-5 mainBg2">
      <section className="relative py-16 px-5 md:px-5 sm:py-20 md:py-28 rounded-none md:rounded-4xl mainBg text-white">
        <AnimateImageLeft />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-start items-center gap-2 mb-3 sm:mb-4">
              <GoDotFill className="text-white" />
              <span className="font-medium text-sm sm:text-base">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-6">
              Your Questions, Answered
            </h2>

            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed text-gray-200">
              At The Salon Company, informed clients are confident clients.
              Explore our FAQ section to better understand our treatments,
              processes, and results.
            </p>
            <Link
              href="/faqs"
              className="relative inline-block w-fit font-medium rounded-full group mt-8 overflow-hidden"
            >
              <div className="flex items-center px-6 py-3 relative">
                <span className="absolute inset-0 bg-white rounded-full"></span>
                <span className="absolute inset-0 w-0 bg-[#204c44] transition-all duration-500 ease-out group-hover:w-full rounded-full border border-white"></span>
                <span className="relative flex items-center text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-white">
                  View All FAQs
                  <FaArrowRight className="ml-2 w-5 h-5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Right Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {faqs.slice(0, 6).map((faq, index) => (
              <div
                key={index}
                className="border-b pb-4 sm:pb-5 cursor-pointer border-gray-400"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FiChevronUp className="text-lg sm:text-xl md:text-2xl" />
                  ) : (
                    <FiChevronDown className="text-lg sm:text-xl md:text-2xl" />
                  )}
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-gray-200"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
