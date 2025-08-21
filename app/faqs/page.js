"use client";

import { useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import Footer from "../components/Footer";

export default function FAQs() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedTreatment, setExpandedTreatment] = useState(null);

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

  const sidebarItems = [
    { name: "FAQs", target: "faq-section" },
    { name: "Treatment Options", target: "treatment-section" },
    { name: "Product Guidance", target: "product-section" },
    { name: "Service Policies", target: "policy-section" }
  ];

  const toggleFaq = (id) => setExpandedFaq(expandedFaq === id ? null : id);
  const toggleTreatment = (id) =>
    setExpandedTreatment(expandedTreatment === id ? null : id);

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />
      <CommonHeading Text="Frequently Asked Questions" />

      <div className="min-h-screen bg-gray-50 py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 lg:sticky lg:top-24 self-start">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-4">
                {sidebarItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(item.target)}
                    className="flex justify-between items-center p-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md w-full transition-colors"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="text-teal-600">→</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 space-y-12">
            {/* FAQ Section */}
            <motion.section
              id="faq-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm p-8"
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
              className="bg-white rounded-lg shadow-sm p-8"
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
              className="bg-white rounded-lg shadow-sm p-8"
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
              className="bg-white rounded-lg shadow-sm p-8"
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
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
