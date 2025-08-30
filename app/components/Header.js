'use client'

import React, { useState, useRef } from 'react';
import { FaChevronDown, FaArrowRight, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from 'react-icons/fa6';

const Header = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const hoverTimeout = useRef(null);
  const pathname = usePathname();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(prev => prev === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(hoverTimeout.current);
    if (menu === 'home') setIsHomeOpen(true);
    if (menu === 'pages') setIsPagesOpen(true);
  };

  const handleMouseLeave = (menu) => {
    hoverTimeout.current = setTimeout(() => {
      if (menu === 'home') setIsHomeOpen(false);
      if (menu === 'pages') setIsPagesOpen(false);
    }, 200);
  };

  return (
    <header className="max-w-[1920px] m-auto mainBg1 px-4 sm:px-6 relative z-50 h-16 sm:h-20 md:h-28 flex items-center">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-[#24544B] truncate">
            <span className="">Tha Salon Company</span>
            <span className="text-[#24544B]">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[#24544B]">
          {/* Home Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={() => handleMouseLeave("home")}
          >
            <button className="flex items-center text-gray-500 hover:text-[#24544B] transition-colors font-semibold text-sm xl:text-base">
              Home <FaChevronDown className="ml-1 w-3 h-3 xl:w-4 xl:h-4" />
            </button>

            <AnimatePresence>
              {isHomeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute top-full left-0 mt-2 w-44 xl:w-48 bg-white text-[#24544B] shadow-lg rounded-2xl py-2 z-50"
                  onMouseEnter={() => handleMouseEnter("home")}
                  onMouseLeave={() => handleMouseLeave("home")}
                >
                  <Link
                    href="/"
                    className="block px-4 text-gray-500 font-semibold py-2 hover:text-[#24544B] text-sm xl:text-base"
                  >
                    Home - Main
                  </Link>
                  <Link
                    href="/home-image"
                    className="block px-4 text-gray-500 font-semibold py-2 hover:text-[#24544B] text-sm xl:text-base"
                  >
                    Home - Image
                  </Link>
                  <Link
                    href="/home-video"
                    className="block px-4 text-gray-500 font-semibold py-2 hover:text-[#24544B] text-sm xl:text-base"
                  >
                    Home - Video
                  </Link>
                  <Link
                    href="/home-slider"
                    className="block px-4 text-gray-500 font-semibold py-2 hover:text-[#24544B] text-sm xl:text-base"
                  >
                    Home - Slider
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="text-gray-500 hover:text-[#24544B] transition-colors font-semibold text-sm xl:text-base">About Us</Link>
          <Link href="/services" className="text-gray-500 hover:text-[#24544B] transition-colors font-semibold text-sm xl:text-base">Services</Link>
          <Link href="/blogs" className="text-gray-500 hover:text-[#24544B] transition-colors font-semibold text-sm xl:text-base">Blog</Link>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={() => handleMouseLeave("pages")}
          >
            <button className="flex items-center text-gray-500 hover:text-[#24544B] transition-colors font-semibold text-sm xl:text-base">
              Pages <FaChevronDown className="ml-1 w-3 h-3 xl:w-4 xl:h-4" />
            </button>

            <AnimatePresence>
              {isPagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute top-full left-0 mt-2 w-44 xl:w-48 bg-white shadow-lg rounded-2xl py-2 z-50"
                  onMouseEnter={() => handleMouseEnter("pages")}
                  onMouseLeave={() => handleMouseLeave("pages")}
                >
                  <Link href="/services/service-details" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">Service Details</Link>
                  <Link href="/casestudy" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">Case Study</Link>
                  <Link href="/blogs/how-to-care-for-your-skin-after-a-botox-treatment" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">Blog Details</Link>
                  <Link href="/our-team" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">Our Team</Link>
                  <Link href="/our-team/kristin-watson" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">Team Details</Link>
                  <Link href="/testimonials" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">Testimonials</Link>
                  <Link href="/image-gallery" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">Image Gallery</Link>
                  <Link href="/video-gallery" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">Video Gallery</Link>
                  <Link href="/faqs" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">FAQs</Link>
                  <Link href="/404" className="block px-4 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm xl:text-base">404</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="text-gray-500 hover:text-[#24544B] transition-colors font-semibold text-sm xl:text-base">Contact Us</Link>
        </nav>

        {/* Book Appointment Button - Desktop */}
        {["/", "/home-image", "/home-video", "/home-slider"].includes(pathname) && (
          <motion.div
            className="hidden lg:block text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/book-appointment"
              className="relative overflow-hidden px-4 xl:px-5 py-2.5 xl:py-3 rounded-full font-semibold text-white inline-flex gap-2 items-center text-sm xl:text-base group mainBg transition-all duration-300"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12 group-hover:translate-x-[220%] transition-transform duration-700 ease-in-out">
                </span>
              </span>

              <span className="relative z-10">Book Appointment</span>
              <FaArrowRightLong className="relative z-10 transition-transform duration-500 group-hover:translate-x-2 w-3 h-3 xl:w-4 xl:h-4" />
            </Link>
          </motion.div>
        )}

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center" 
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <FaTimes className="text-gray-700 w-5 h-5 sm:w-6 sm:h-6" /> :
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center">
              <span className="block w-full h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-700"></span>
            </div>
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 mainBg2 overflow-y-auto transform transition-transform duration-300 scrollbar-none ${mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 sm:p-5 md:p-10 border-b">
          <span className="text-lg sm:text-xl font-semibold">Menu</span>
          <button 
            onClick={() => setMobileMenu(false)} 
            className="text-xl sm:text-2xl p-2 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="space-y-4 sm:space-y-6 font-semibold p-4 sm:p-6">
          {/* Home */}
          <li>
            <button
              className="flex justify-between w-full items-center py-2 touch-manipulation min-h-[44px] text-left"
              onClick={() => toggleMobileDropdown("home")}
            >
              <span className="text-base sm:text-lg">Home</span>
              <FaChevronDown
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${mobileDropdown === "home" ? "rotate-180" : ""}`}
              />
            </button>
            <ul
              className={`overflow-hidden transition-[max-height] duration-300 ${mobileDropdown === "home" ? "max-h-48" : "max-h-0"
                } mt-2 pl-4 space-y-2`}
            >
              <li><Link href="/" className="block py-2 text-sm text-gray-500 sm:text-base touch-manipulation">Home - Main</Link></li>
              <li><Link href="/home-image" className="block py-2 text-gray-500 text-sm sm:text-base touch-manipulation">Home - Image</Link></li>
              <li><Link href="/home-video" className="block py-2 text-gray-500 text-sm sm:text-base touch-manipulation">Home - Video</Link></li>
              <li><Link href="/home-slider" className="block py-2 text-gray-500 text-sm sm:text-base touch-manipulation">Home - Slider</Link></li>
            </ul>
          </li>

          <li><Link href="/about" className=" py-2 text-base sm:text-lg touch-manipulation min-h-[44px] flex items-center">About Us</Link></li>
          <li><Link href="/services" className=" py-2 text-base sm:text-lg touch-manipulation min-h-[44px] flex items-center">Services</Link></li>
          <li><Link href="/blogs" className=" py-2 text-base sm:text-lg touch-manipulation min-h-[44px] flex items-center">Blog</Link></li>

          {/* Pages Dropdown */}
          <li>
            <button
              className="flex justify-between w-full items-center py-2 touch-manipulation min-h-[44px] text-left"
              onClick={() => toggleMobileDropdown("pages")}
            >
              <span className="text-base sm:text-lg">Pages</span>
              <FaChevronDown
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${mobileDropdown === "pages" ? "rotate-180" : ""}`}
              />
            </button>
            <ul
              className={`overflow-hidden transition-[max-height] duration-300 ${mobileDropdown === "pages" ? "max-h-[800px]" : "max-h-0"
                } mt-2 pl-4 space-y-2`}
            >
              <li><Link href="/services/service-details" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">Service Details</Link></li>
              <li><Link href="/casestudy" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">Case Study</Link></li>
              <li><Link href="/blogs/how-to-care-for-your-skin-after-a-botox-treatment" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">Blog Details</Link></li>
              <li><Link href="/our-team" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">Our Team</Link></li>
              <li><Link href="/our-team/kristin-watson" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">Team Details</Link></li>
              <li><Link href="/testimonials" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">Testimonials</Link></li>
              <li><Link href="/image-gallery" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">Image Gallery</Link></li>
              <li><Link href="/video-gallery" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">Video Gallery</Link></li>
              <li><Link href="/faqs" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">FAQs</Link></li>
              <li><Link href="/404" className="block px-2 py-2 font-semibold text-gray-500 hover:text-[#24544B] text-sm sm:text-base touch-manipulation">404</Link></li>
            </ul>
          </li>

          <li><Link href="/contact" className="py-2 text-base sm:text-lg touch-manipulation min-h-[44px] flex items-center">Contact Us</Link></li>

          {/* Mobile Book Appointment Button */}
          {["/", "/home-image", "/home-video", "/home-slider"].includes(pathname) && (
            <li className="pt-4">
              <Link
                href="/book-appointment"
                className="w-full flex items-center justify-center py-3 px-6 font-semibold rounded-full bg-[#24544B] text-white hover:bg-emerald-800 transition-colors text-sm sm:text-base touch-manipulation min-h-[44px]"
              >
                <span>Book Appointment</span>
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;