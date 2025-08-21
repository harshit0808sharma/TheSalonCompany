'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const faqs = [
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes, we recommend booking your appointment 1–2 weeks in advance to secure your preferred time slot, especially for weekends and bridal services.",
  },
  {
    question: "Which hair treatments do you offer?",
    answer:
      "We provide a wide range of treatments including keratin, smoothening, coloring, hair spa, and advanced styling to suit every hair type.",
  },
  {
    question: "Are the products used safe for my skin and hair?",
    answer:
      "Absolutely! We only use high-quality, dermatologist-tested, and salon-grade products to ensure safe and long-lasting results.",
  },
  {
    question: "Do you provide bridal and party makeup?",
    answer:
      "Yes! Our expert artists specialize in bridal, engagement, and party makeup tailored to your style, ensuring a flawless look for every occasion.",
  },
  {
    question: "Can I get multiple services in one visit?",
    answer:
      "Definitely. Many clients book a combination of services such as hair styling, facials, nail extensions, and makeup in a single appointment.",
  },
  {
    question: "How long does a typical salon session take?",
    answer:
      "The duration depends on the service — haircuts may take 30–45 minutes, facials 45–60 minutes, and bridal packages 3–5 hours.",
  },
  {
    question: "Do you offer men’s grooming services?",
    answer:
      "Yes, we also provide services for men including haircuts, beard styling, facials, and hair treatments.",
  },
  {
    question: "What hygiene standards do you follow?",
    answer:
      "We maintain the highest hygiene protocols with sanitized tools, fresh linens, and safe single-use products wherever possible.",
  },
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-teal-800 text-white py-20 px-6 md:px-12 lg:rounded-3xl lg:mx-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <GoDotFill className="text-white" />
            <span className="text-white font-medium">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Your Questions, Answered
          </h2>
          {/* <Heading Text={"Your Questions, Answered"}/> */}
          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
            At The Salon Company, informed clients are confident clients. Explore our FAQ section to better understand our treatments, processes, and results.
          </p>
          <button className="bg-white text-[#214037] font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 hover:bg-gray-100 transition">
            View All FAQs →
          </button>
        </motion.div>

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
