"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Header";
import CommonHeading from "@/app/components/other/CommonHeading";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlay, FaChevronDown, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const ServiceDetails = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const faqs = [
    {
      q: "How long do the results last?",
      a: "Depending on the service, results can last from several weeks to months. Our team will guide you with aftercare tips.",
    },
    {
      q: "Will my results look natural?",
      a: "Yes! Our experts focus on enhancing your natural features while keeping the results subtle and beautiful.",
    },
  ];

  const src = "";

  const categories = [
    "Lip Blushing",
    "Microblading",
    "Eyeliner Tattoo",
    "Lash Extensions",
    "Skin Rejuvenation",
  ];

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Service Details – The Salon Company"} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Services Category
                </h3>
                <ul className="space-y-4">
                  {categories.map((cat, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="py-2 border-b border-gray-200 cursor-pointer"
                      onClick={() => setOpenCategory(openCategory === i ? null : i)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{cat}</span>
                        <FaChevronDown
                          className={`text-gray-400 text-sm transition-transform ${
                            openCategory === i ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {openCategory === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-gray-500 mt-2"
                        >
                          Learn more about {cat.toLowerCase()} services.
                        </motion.p>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Promo Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-teal-800 text-white p-6 rounded-lg shadow-lg mt-8 text-center"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💄</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">
                    Enhancing Beauty with Confidence
                  </h4>
                </div>
                <div className="bg-white text-purple-600 rounded-full px-4 py-2 inline-flex items-center text-sm font-semibold">
                  <FaPhone className="mr-2" />
                  Call 954 627 790
                </div>
              </motion.div>
            </motion.div>

            {/* Service Details Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 h-screen overflow-auto scrollbar-none rounded-4xl space-y-12"
            >
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <Image
                  src="/assets/images/salon-home-image.jpg"
                  priority
                  width={600}
                  height={400}
                  alt="Salon Service"
                  className="w-full h-96 object-cover rounded-4xl"
                />
              </motion.div>

              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg mb-12"
              >
                <p className="text-gray-600 mb-6">
                  At The Salon Company, our beauty services are tailored to enhance your natural features, boost confidence, and give you a refreshed look.
                </p>
                <p className="text-gray-600 mb-6">
                  Our experienced professionals combine artistry with state-of-the-art techniques to deliver safe, comfortable, and long-lasting results.
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  { icon: "💋", title: "Natural Enhancements", desc: "Designed to complement your natural beauty." },
                  { icon: "✨", title: "Radiant Glow", desc: "Treatments that leave your skin and features refreshed." },
                  { icon: "🌸", title: "Lasting Confidence", desc: "Walk out feeling confident, radiant, and beautiful." },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ delay: idx * 0.2 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-pink-600 text-xl">{item.icon}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Video Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 relative"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  See the Transformation
                </h2>
                <p className="text-gray-600 mb-8">
                  Watch how our services create stunning transformations in just one visit.
                </p>
                <div className="relative">
                  <Image
                    src="/assets/images/salonface1.jpg"
                    alt="Transformation"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={() => setShowVideo(true)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-all"
                    >
                      <FaPlay className="text-teal-800 ml-1" />
                    </motion.div>
                  </button>
                </div>

                {showVideo && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                  >
                    <div className="bg-white rounded-lg p-4 max-w-2xl w-full">
                      <button
                        className="mb-2 text-red-500 font-bold"
                        onClick={() => setShowVideo(false)}
                      >
                        ✕ Close
                      </button>
                      {src ? (
                        <iframe
                          width="100%"
                          height="400"
                          src={src}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <Image
                          src="/assets/images/image4.jpeg"
                          alt="Transformation"
                          width={400}
                          height={400}
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  FAQs about Our Services
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="border border-gray-200 rounded-lg"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="font-medium text-gray-900">{faq.q}</span>
                        <FaChevronDown
                          className={`text-gray-400 transition-transform ${
                            openFaq === i ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4 text-sm text-gray-600"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;
