"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What types of treatments do you offer?",
    answer:
      "We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, and cosmetic procedures like Botox etc.",
  },
  {
    question: "Do I need a consultation before getting treatment?",
    answer:
      "Yes, consultations help us understand your skin and recommend the right treatment.",
  },
  {
    question: "Are your treatments suitable for all skin types?",
    answer:
      "Absolutely. We offer customized treatments suitable for all skin types.",
  },
  {
    question: "Do you offer cosmetic dermatology services?",
    answer:
      "Yes, we provide a variety of cosmetic dermatology services to enhance your skin health and appearance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#416b63] text-white py-20 px-6 md:px-12 rounded-4xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <div className="md:pr-8">
          <p className="text-base font-medium mb-4 opacity-90">
            • Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Frequently asked <br /> questions, <br /> find out more
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
            Have questions about our dermatology services? Our ‘Frequently Asked
            Questions’ section will help you understand treatments better.
          </p>
          <button className="bg-white text-[#416b63] font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 hover:bg-gray-100 transition">
            View All FAQs →
          </button>
        </div>

        {/* Right Content (Accordion) */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-400 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base md:text-lg lg:text-xl font-semibold">
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
                    className="overflow-hidden mt-2 text-gray-200 text-sm md:text-base leading-relaxed"
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
