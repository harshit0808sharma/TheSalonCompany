"use client";

import { useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import Footer from "../components/Footer";
import { FaChevronDown, FaPhone } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "FAQs | The Salon Company",
  description:
    "Find answers to frequently asked questions about The Salon Company’s services, appointments, and treatments.",
};

export default function FAQs() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedTreatment, setExpandedTreatment] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "What services does The Salon Company offer?",
      answer:
        "We provide a full range of beauty services including hair, makeup, nails, permanent makeup (PMU), skincare treatments, and eyelash extensions."
    },
    {
      id: 2,
      question: "Do I need an appointment?",
      answer:
        "Yes, we recommend booking a free consultation so we can tailor your experience to your preferences and ensure availability."
    },
    {
      id: 3,
      question: "Are treatments suitable for all skin and hair types?",
      answer:
        "Absolutely! Our experts customize treatments for every client, making sure they’re safe, effective, and long-lasting."
    },
    {
      id: 4,
      question: "Do you offer bridal and special event services?",
      answer:
        "Yes! From bridal makeup to party glam, our team ensures you look flawless for every occasion."
    },
    {
      id: 5,
      question: "What should I expect during my first visit?",
      answer:
        "Our team will consult with you, assess your needs, and provide a personalized treatment plan for the best results."
    }
  ];

  const treatmentFaqs = [
    {
      id: 1,
      question: "Permanent Makeup (PMU) Options",
      answer:
        "We offer lip blushing, microblading, and eyeliner tattoo, all applied by skilled professionals for effortless beauty every day."
    },
    {
      id: 2,
      question: "Beauty Treatments Available",
      answer:
        "Our luxury facials, eyebrow lamination, BB Glow, and more are designed to rejuvenate your skin and boost confidence."
    },
    {
      id: 3,
      question: "Eyelash Extensions",
      answer:
        "Classic, Hybrid, Volume, or Colorful lashes to elevate your natural beauty and match your style."
    }
  ];

   const categories = [
    "Lip Blushing",
    "Microblading",
    "Eyeliner Tattoo",
    "Lash Extensions",
    "Skin Rejuvenation",
  ];

  const toggleFaq = (id) => setExpandedFaq(expandedFaq === id ? null : id);
  const toggleTreatment = (id) =>
    setExpandedTreatment(expandedTreatment === id ? null : id);

  return (
    <>
      <Navbar />
      <CommonHeading Text="Frequently Asked Questions" />

      <div className="min-h-screen mainBg2">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 py-8 md:py-16">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 min-h-screen">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="xl:col-span-1 order-1 xl:order-1"
            >
              <div className="mainBg1 rounded-2xl md:rounded-4xl p-4 md:p-6 mb-6 xl:mb-0">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">
                  Services Category
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {categories.map((cat, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-3 md:p-4 border-b border-gray-200 cursor-pointer bg-white rounded-lg md:rounded-xl hover:shadow-md transition-shadow"
                      onClick={() => setOpenCategory(openCategory === i ? null : i)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base text-gray-700 font-medium">{cat}</span>
                        <FaChevronDown
                          className={`text-gray-400 text-xs md:text-sm transition-transform ${openCategory === i ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                      {openCategory === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="text-xs md:text-sm text-gray-500 mt-2"
                        >
                          Learn more about {cat.toLowerCase()} services.
                        </motion.p>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Promo Card - Hidden on mobile, visible on larger screens */}
              <div className="hidden lg:block relative w-full max-w-sm rounded-2xl md:rounded-3xl overflow-hidden shadow-lg mt-6 md:mt-10">
                <Image
                  src="/assets/images/image4.jpeg"
                  alt="Skincare"
                  width={400}
                  height={500}
                  className="w-full h-80 md:h-[500px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 flex flex-col justify-between p-4 md:p-6 text-white">
                  {/* Top Icon */}
                  <div className="flex justify-center mt-2 md:mt-4">
                    <div className="bg-white/20 rounded-full p-2 md:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-8 h-8 md:w-10 md:h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3c2.5 4 4 7 4 9a4 4 0 11-8 0c0-2 1.5-5 4-9z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Middle Text */}
                  <div className="text-center space-y-1 md:space-y-2">
                    <p className="text-xs md:text-sm">Small Steps, Big Transformations</p>
                    <h2 className="text-sm md:text-lg font-bold leading-snug">
                      EMPOWERING EVERY INDIVIDUAL <br /> THROUGH SKINCARE
                    </h2>
                  </div>

                  {/* Bottom Call Section */}
                  <div className="bg-black/40 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center gap-2 md:gap-3">
                    <div className="bg-white text-green-600 rounded-full p-1.5 md:p-2">
                      <FaPhone className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm">Call Us!</p>
                      <p className="text-sm md:text-lg font-semibold">+91 123 456 789</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="xl:col-span-2 order-2 xl:order-2 h-[140vh] overflow-scroll scrollbar-none"
            >
              <div className="space-y-6 md:space-y-8">
                <motion.section
                  id="faq-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className=" rounded-lg p-4 md:p-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
                    FAQs
                  </h2>
                  <div className="space-y-4">
                    {faqItems.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleFaq(item.id)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.question}
                          </h3>
                          <FaArrowAltCircleDown className="h-5 w-5 text-gray-500" />
                        </button>
                        {expandedFaq === item.id && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Treatment Options */}
                <motion.section
                  id="treatment-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className=" rounded-lg p-4 md:p-8"
                >
                  <h2 className="text-3xl font-bold text-teal-700 mb-6">
                    Treatment Options
                  </h2>
                  <div className="space-y-4">
                    {treatmentFaqs.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleTreatment(item.id)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.question}
                          </h3>
                          <FaArrowAltCircleDown className="h-5 w-5 text-gray-500" />
                        </button>
                        {expandedTreatment === item.id && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Product Guidance */}
                <motion.section
                  id="product-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-lg p-4 md:p-8"
                >
                  <h2 className="text-3xl font-bold text-teal-700 mb-6">
                    Product Guidance
                  </h2>
                  <p className="text-gray-600 mb-2">
                    Our experts recommend products for home care based on your skin and treatment plan.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Cleansers & exfoliators for daily use</li>
                    <li>Moisturizers to hydrate & repair</li>
                    <li>Sun protection (SPF) guidance</li>
                    <li>Specialty serums & masks for specific concerns</li>
                  </ul>
                </motion.section>

                {/* Service Policies */}
                <motion.section
                  id="policy-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className=" rounded-lg p-4 md:p-8"
                >
                  <h2 className="text-3xl font-bold text-teal-700 mb-6">
                    Service Policies
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Cancel appointments at least 24 hours in advance</li>
                    <li>Arrive 10 minutes early for your treatment</li>
                    <li>Children under 16 must be accompanied by an adult</li>
                    <li>Payment accepted via cash, card, or online methods</li>
                    <li>Hygiene and safety are our top priority</li>
                  </ul>
                </motion.section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
