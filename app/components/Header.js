'use client';

import { useRef, useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // Desktop dropdown
  const [mobileMenu, setMobileMenu] = useState(false); // Mobile menu
  const [mobileDropdown, setMobileDropdown] = useState(null); // Mobile dropdown
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (menu) => {
    clearTimeout(hoverTimeout.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 500);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="w-full py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-2xl font-semibold text-[#416b63]">
            The Salon Company
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-gray-600 font-medium">
            {/* Home Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 hover:text-[#416b63]">
                Home <FaChevronDown size={12} />
              </button>
              {openDropdown === "home" && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-md w-52 z-50 shadow-lg">
                  <li>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                      Home - Main
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-image" className="block px-4 py-2 hover:bg-gray-100">
                      Home - Image
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-video" className="block px-4 py-2 hover:bg-gray-100">
                      Home - Video
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-slider" className="block px-4 py-2 hover:bg-gray-100">
                      Home - Slider
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/about" className="hover:text-[#416b63]">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#416b63]">Services</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#416b63]">Blog</Link>
            </li>

            {/* Pages Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 hover:text-[#416b63]">
                Pages <FaChevronDown size={12} />
              </button>
              {openDropdown === "pages" && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md w-52 z-50">
                  <li><Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100">Service Details</Link></li>
                  <li><Link href="/team" className="block px-4 py-2 hover:bg-gray-100">Blog Details</Link></li>
                  <li><Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Case Study</Link></li>
                  <li><Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Case Study Details</Link></li>
                  <li><Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link></li>
                  <li><Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Team Details</Link></li>
                  <li><Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Testimonials</Link></li>
                  <li><Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Image Gallery</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/contact" className="hover:text-[#416b63]">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link href="/book-appointment" className="flex items-center py-2 px-5 text-white font-medium bg-[#416b63] rounded-full hover:bg-[#2f514a] transition">
            Book Appointment <FaArrowRightLong className="ml-2" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-gray-600 text-2xl"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${mobileMenu ? "translate-x-0" : "-translate-x-full"} overflow-y-auto`}>
        <div className="flex justify-between items-center p-6 border-b">
          <span className="text-xl font-semibold text-[#416b63]">Menu</span>
          <button onClick={() => setMobileMenu(false)} className="text-2xl text-gray-700">
            <FaTimes />
          </button>
        </div>

        <ul className="space-y-6 text-gray-700 font-medium p-6">
          {/* Home Dropdown Mobile */}
          <li>
            <button
              onClick={() => toggleMobileDropdown("home")}
              className="flex justify-between w-full items-center"
            >
              Home <FaChevronDown />
            </button>
            {mobileDropdown === "home" && (
              <ul className="mt-2 pl-4 space-y-2">
                <li><Link href="/" onClick={() => setMobileMenu(false)}>Home - Main</Link></li>
                <li><Link href="/home-image" onClick={() => setMobileMenu(false)}>Home - Image</Link></li>
                <li><Link href="/home-video" onClick={() => setMobileMenu(false)}>Home - Video</Link></li>
                <li><Link href="/home-slider" onClick={() => setMobileMenu(false)}>Home - Slider</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/about" onClick={() => setMobileMenu(false)}>About Us</Link></li>
          <li><Link href="/services" onClick={() => setMobileMenu(false)}>Services</Link></li>
          <li><Link href="/blogs" onClick={() => setMobileMenu(false)}>Blog</Link></li>

          {/* Pages Dropdown Mobile */}
          <li>
            <button
              onClick={() => toggleMobileDropdown("pages")}
              className="flex justify-between w-full items-center"
            >
              Pages <FaChevronDown />
            </button>
            {mobileDropdown === "pages" && (
              <ul className="mt-2 pl-4 space-y-2">
                <li><Link href="/gallery" onClick={() => setMobileMenu(false)}>Service Details</Link></li>
                <li><Link href="/team" onClick={() => setMobileMenu(false)}>Blog Details</Link></li>
                <li><Link href="/pricing" onClick={() => setMobileMenu(false)}>Case Study</Link></li>
                <li><Link href="/pricing" onClick={() => setMobileMenu(false)}>Case Study Details</Link></li>
                <li><Link href="/pricing" onClick={() => setMobileMenu(false)}>Our Team</Link></li>
                <li><Link href="/pricing" onClick={() => setMobileMenu(false)}>Team Details</Link></li>
                <li><Link href="/pricing" onClick={() => setMobileMenu(false)}>Testimonials</Link></li>
                <li><Link href="/pricing" onClick={() => setMobileMenu(false)}>Image Gallery</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/contact" onClick={() => setMobileMenu(false)}>Contact Us</Link></li>

          <li>
            <Link
              href="/book-appointment"
              onClick={() => setMobileMenu(false)}
              className="flex items-center w-full justify-center py-2 px-6 text-white font-medium bg-[#416b63] rounded-full hover:bg-[#2f514a] transition"
            >
              Book Appointment <FaArrowRightLong className="ml-2" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
