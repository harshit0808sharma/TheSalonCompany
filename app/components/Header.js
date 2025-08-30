'use client'

import React, { useState, useRef, useContext } from 'react';
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
    <header className="max-w-[1920px] m-auto mainBg1 px-6 relative z-50 h-20 md:h-28 flex items-center">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-[#24544B]">
            Tha Salon Company<span className="text-[#24544B]">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[#24544B]">
          {/* Home Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={() => handleMouseLeave("home")}
          >
            <button className="flex items-center text-gray-500 hover:text-[#24544B] transition-colors font-medium">
              Home <FaChevronDown className="ml-1 w-4 h-4" />
            </button>

            <AnimatePresence>
              {isHomeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white text-[#24544B] shadow-lg rounded-2xl py-2 z-50"
                  onMouseEnter={() => handleMouseEnter("home")}
                  onMouseLeave={() => handleMouseLeave("home")}
                >
                  <Link
                    href="/"
                    className="block px-4 text-gray-500 font-medium py-2 hover:text-[#24544B]"
                  >
                    Home - Main
                  </Link>
                  <Link
                    href="/home-image"
                    className="block px-4 text-gray-500 font-medium py-2 hover:text-[#24544B]"
                  >
                    Home - Image
                  </Link>
                  <Link
                    href="/home-video"
                    className="block px-4 text-gray-500 font-medium py-2 hover:text-[#24544B]"
                  >
                    Home - Video
                  </Link>
                  <Link
                    href="/home-slider"
                    className="block px-4 text-gray-500 font-medium py-2 hover:text-[#24544B]"
                  >
                    Home - Slider
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="text-gray-500 hover:text-[#24544B] transition-colors font-medium">About Us</Link>
          <Link href="/services" className="text-gray-500 hover:text-[#24544B] transition-colors font-medium">Services</Link>
          <Link href="/blogs" className="text-gray-500 hover:text-[#24544B] transition-colors font-medium">Blog</Link>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={() => handleMouseLeave("pages")}
          >
            <button className="flex items-center text-gray-500 hover:text-[#24544B] transition-colors font-medium">
              Pages <FaChevronDown className="ml-1 w-4 h-4" />
            </button>

            <AnimatePresence>
              {isPagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-2xl py-2 z-50"
                  onMouseEnter={() => handleMouseEnter("pages")}
                  onMouseLeave={() => handleMouseLeave("pages")}
                >
                  <Link href="/services/service-details" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Service Details</Link>
                  <Link href="/casestudy" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Case Study</Link>
                  <Link href="/blogs/how-to-care-for-your-skin-after-a-botox-treatment" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Blog Details</Link>
                  <Link href="/our-team" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Our Team</Link>
                  <Link href="/our-team/kristin-watson" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Team Details</Link>
                  <Link href="/testimonials" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Testimonials</Link>
                  <Link href="/image-gallery" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Image Gallery</Link>
                  <Link href="/video-gallery" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Video Gallery</Link>
                  <Link href="/faqs" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">FAQs</Link>
                  <Link href="/404" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">404</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="text-gray-500 hover:text-[#24544B] transition-colors font-medium">Contact Us</Link>
        </nav>

        {/* Book Appointment Button */}
        {["/", "/home-image", "/home-video", "/home-slider"].includes(pathname) && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/book-appointment"
              className="relative overflow-hidden px-5 py-3  rounded-full font-medium text-white inline-flex gap-2 items-center text-sm sm:text-base group mainBg transition-all duration-300"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12 group-hover:translate-x-[220%] transition-transform duration-700 ease-in-out">
                </span>
              </span>

              <span className="relative z-10">Book Appointment</span>
              <FaArrowRightLong className="relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        )}

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes className="text-gray-700 w-6 h-6" /> :
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className="block w-full h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-700"></span>
            </div>
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 mainBg2 overflow-y-auto transform transition-transform duration-300 ${mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-6 md:p-10 border-b">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={() => setMobileMenu(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <ul className="space-y-6 font-medium p-6">
          {/* Home */}
          <li>
            <button
              className="flex justify-between w-full items-center"
              onClick={() => toggleMobileDropdown("home")}
            >
              Home{" "}
              <FaChevronDown
                className={`${mobileDropdown === "home"
                  ? "rotate-180 transform transition-transform"
                  : ""
                  }`}
              />
            </button>
            <ul
              className={`overflow-hidden transition-[max-height] duration-300 ${mobileDropdown === "home" ? "max-h-40" : "max-h-0"
                } mt-2 pl-4 space-y-2`}
            >
              <li><Link href="/">Home - Main</Link></li>
              <li><Link href="/home-image">Home - Image</Link></li>
              <li><Link href="/home-video">Home - Video</Link></li>
              <li><Link href="/home-slider">Home - Slider</Link></li>
            </ul>
          </li>

          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/blogs">Blog</Link></li>

          {/* Pages Dropdown */}
          <li>
            <button
              className="flex justify-between w-full items-center"
              onClick={() => toggleMobileDropdown("pages")}
            >
              Pages{" "}
              <FaChevronDown
                className={`${mobileDropdown === "pages"
                  ? "rotate-180 transform transition-transform"
                  : ""
                  }`}
              />
            </button>
            <ul
              className={`overflow-hidden transition-[max-height] duration-300 ${mobileDropdown === "pages" ? "max-h-[600px]" : "max-h-0"
                } mt-2 pl-4 space-y-2`}
            >
              <li><Link href="/services/service-details" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Service Details</Link></li>
              <li><Link href="/casestudy" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Case Study</Link></li>
              <li><Link href="/blogs/how-to-care-for-your-skin-after-a-botox-treatment" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Blog Details</Link></li>
              <li><Link href="/our-team" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Our Team</Link></li>
              <li><Link href="/our-team/kristin-watson" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Team Details</Link></li>
              <li><Link href="/testimonials" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Testimonials</Link></li>
              <li><Link href="/image-gallery" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Image Gallery</Link></li>
              <li><Link href="/video-gallery" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">Video Gallery</Link></li>
              <li><Link href="/faqs" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">FAQs</Link></li>
              <li><Link href="/404" className="block px-4 py-2 font-medium text-gray-500 hover:text-[#24544B]">404</Link></li>
            </ul>
          </li>

          <li>
            <button className="w-full flex items-center justify-center py-2 px-6 font-medium rounded-full bg-[#24544B] text-white hover:bg-emerald-800 transition-colors">
              Book Appointment <FaArrowRight className="ml-2" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
