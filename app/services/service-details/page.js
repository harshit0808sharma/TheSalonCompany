"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Header";
import CommonHeading from "@/app/components/other/CommonHeading";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlay, FaChevronDown, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiSettings, FiPackage, FiGrid, FiUsers } from "react-icons/fi";

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
                          className={`text-gray-400 text-xs md:text-sm transition-transform ${
                            openCategory === i ? "rotate-180" : ""
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

            {/* Service Details Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="xl:col-span-2 order-2 xl:order-2 h-[140vh] overflow-scroll scrollbar-none"
            >
              <div className="space-y-6 md:space-y-8">
                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 md:mb-8"
                >
                  <Image
                    src="/assets/images/salon-home-image.jpg"
                    priority
                    width={600}
                    height={400}
                    alt="Salon Service"
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl md:rounded-4xl"
                  />
                </motion.div>

                {/* Intro */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="prose prose-sm sm:prose-base lg:prose-lg mb-8 md:mb-12 max-w-none"
                >
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm sm:text-base">
                    At The Salon Company, our beauty services are tailored to enhance your natural features, boost confidence, and give you a refreshed look.
                  </p>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm sm:text-base">
                    Our experienced professionals combine artistry with state-of-the-art techniques to deliver safe, comfortable, and long-lasting results.
                  </p>
                </motion.div>

                {/* Comprehensive Care Section */}
                <div className="mainBg2 p-4 md:p-6 flex flex-col gap-6 md:gap-10 rounded-2xl md:rounded-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 md:mb-6">
                      Comprehensive care for your skin
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                      We believe in highlighting your unique features with treatments that enhance and preserve your natural beauty. Our expert care ensures subtle.
                    </p>
                  </motion.div>

                  <div className="max-w-6xl mx-auto w-full">
                    {/* Top Row - Images */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8"
                    >
                      {/* Left Image */}
                      <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden">
                        <Image
                          src="/assets/images/blog1.jpg"
                          alt="Professional skincare treatment"
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Right Image */}
                      <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden">
                        <Image
                          src="/assets/images/blog1.jpg"
                          alt="Skincare consultation"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6"
                    >
                      {/* Tailored Treatment Plans */}
                      <div className="mainBg text-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                        <div className="bg-white bg-opacity-20 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                          <FiSettings className="w-6 h-6 md:w-8 md:h-8 text-black" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Tailored Treatment Plans</h2>
                        <p className="text-white text-base md:text-lg leading-relaxed">
                          Every skin is unique, and so are our solutions. We create personalized treatment plans designed.
                        </p>
                      </div>

                      {/* Advanced Skin Technology */}
                      <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm">
                        <div className="bg-gray-100 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                          <FiPackage className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Advanced Skin Technology</h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          Every skin is unique, and so are our solutions. We create personalized treatment plans designed.
                        </p>
                      </div>

                      {/* Expert Guidance */}
                      <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm">
                        <div className="bg-gray-100 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                          <FiGrid className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Expert Guidance</h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          Every skin is unique, and so are our solutions. We create personalized treatment plans designed.
                        </p>
                      </div>

                      {/* Results You Can Trust */}
                      <div className="mainBg text-white p-6 md:p-8 rounded-2xl md:rounded-3xl">
                        <div className="bg-white bg-opacity-20 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                          <FiUsers className="w-6 h-6 md:w-8 md:h-8 text-black" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Results You Can Trust</h2>
                        <p className="text-white text-base md:text-lg leading-relaxed">
                          Every skin is unique, and so are our solutions. We create personalized treatment plans designed.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Video Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-left mb-8 md:mb-12 relative"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                    See the Transformation
                  </h2>
                  <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
                    Watch how our services create stunning transformations in just one visit.
                  </p>
                  <div className="relative">
                    <Image
                      src="/assets/images/salonface1.jpg"
                      alt="Transformation"
                      width={600}
                      height={400}
                      className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg md:rounded-2xl"
                    />
                    <button
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={() => setShowVideo(true)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                      >
                        <FaPlay className="text-teal-800 ml-1 text-sm sm:text-base md:text-lg" />
                      </motion.div>
                    </button>
                  </div>

                  {showVideo && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    >
                      <div className="bg-white rounded-lg p-4 max-w-2xl w-full max-h-[90vh] overflow-hidden">
                        <button
                          className="mb-2 text-red-500 font-bold hover:text-red-600 transition-colors"
                          onClick={() => setShowVideo(false)}
                        >
                          ✕ Close
                        </button>
                        {src ? (
                          <iframe
                            width="100%"
                            height="300"
                            className="sm:h-80 md:h-96"
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
                            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
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
                  className="mb-8 md:mb-12"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                    FAQs about Our Services
                  </h2>
                  <div className="space-y-3 md:space-y-4">
                    {faqs.map((faq, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="border border-gray-200 rounded-lg md:rounded-xl overflow-hidden"
                      >
                        <button
                          className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                          <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">{faq.q}</span>
                          <FaChevronDown
                            className={`text-gray-400 transition-transform flex-shrink-0 text-sm ${
                              openFaq === i ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openFaq === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="px-4 md:px-6 pb-3 md:pb-4 text-xs sm:text-sm text-gray-600 border-t border-gray-100"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;