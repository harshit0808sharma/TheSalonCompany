"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const faqs = [
  {
    question: "What salon services do you provide?",
    answer:
      "We offer professional haircuts, styling, coloring, keratin treatments, facials, manicures, pedicures, waxing, and spa therapies tailored to your needs.",
  },
  {
    question: "Do I need to book an appointment?",
    answer:
      "Appointments are recommended to secure your preferred time, but we also welcome walk-ins whenever available.",
  },
  {
    question: "Are your products safe for all hair and skin types?",
    answer:
      "Yes, we only use high-quality, professional-grade salon products that are gentle and suitable for all hair and skin types.",
  },
  {
    question: "Do you offer bridal and party packages?",
    answer:
      "Absolutely. We specialize in bridal makeovers and offer exclusive group packages for weddings, parties, and special events.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-teal-800 text-white py-20 px-4 sm:px-6 md:px-12 lg:rounded-3xl mx-0 lg:mx-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left Content */}
        <div className="md:pr-8">
          <div className="flex justify-center items-center gap-2">
            <GoDotFill className="text-white" />
            <span className="text-white font-medium">Our Services</span>
          </div>
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
