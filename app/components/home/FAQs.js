"use client";

import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { SalonContext } from "@/app/context/SalonContext";

export default function FAQSection() {
  const { faqs, theme } = useContext(SalonContext);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`py-20 px-6 md:px-12 lg:rounded-3xl lg:mx-5 ${
        theme ? "bg-gray-900 text-white" : "bg-teal-800 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-start items-center gap-2 mb-4">
            <GoDotFill className="text-white" />
            <span className="font-medium">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Your Questions, Answered
          </h2>
          <p
            className={`text-base md:text-lg mb-8 leading-relaxed ${
              theme ? "text-gray-300" : "text-gray-200"
            }`}
          >
            At The Salon Company, informed clients are confident clients. Explore our FAQ section to better understand our treatments, processes, and results.
          </p>
          <Link
            href="/faqs"
            className={`font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full inline-flex w-auto items-center gap-3 hover:bg-gray-100 transition ${
              theme ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-white text-[#214037]"
            }`}
          >
            View All FAQs →
          </Link>
        </motion.div>

        {/* Right Content (Accordion) */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b pb-4 cursor-pointer ${
                theme ? "border-gray-700" : "border-gray-400"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-base md:text-lg lg:text-xl font-semibold ${theme ? "text-white" : "text-white"}`}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FiChevronUp className="text-xl md:text-2xl" />
                ) : (
                  <FiChevronDown className="text-xl md:text-2xl" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`overflow-hidden mt-2 text-sm md:text-base leading-relaxed ${
                      theme ? "text-gray-300" : "text-gray-200"
                    }`}
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
  );
}
