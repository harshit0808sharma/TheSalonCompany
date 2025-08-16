"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full bg-white pb-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#416b63]">The Salon Company</h1>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-gray-500 font-medium">
            <li className="relative group">
              <button
                onClick={() => toggleDropdown("home")}
                className="flex items-center gap-1 hover:text-[#416b63]"
              >
                Home <FaChevronDown size={12} />
              </button>
              {openDropdown === "home" && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
                  <li>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                      Home 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-2" className="block px-4 py-2 hover:bg-gray-100">
                      Home 2
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li><Link href="/about" className="hover:text-[#416b63]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#416b63]">Services</Link></li>
            <li><Link href="/blogs" className="hover:text-[#416b63]">Blogs</Link></li>
            <li className="relative group">
              <button
                onClick={() => toggleDropdown("pages")}
                className="flex items-center gap-1 hover:text-[#416b63]"
              >
                Pages <FaChevronDown size={12} />
              </button>
              {openDropdown === "pages" && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
                  <li><Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link></li>
                  <li><Link href="/team" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link></li>
                  <li><Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Pricing</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/contact" className="hover:text-[#416b63]">Contact Us</Link></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button className="flex items-center py-2 px-4 text-white font-medium bg-[#416b63] rounded-full hover:bg-[#2f514a] transition">
            Book Appointment <FaArrowRightLong className="ml-2" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-gray-500 text-2xl"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li>
              <button
                onClick={() => toggleDropdown("home")}
                className="flex items-center justify-between w-full"
              >
                Home <FaChevronDown />
              </button>
              {openDropdown === "home" && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link href="/">Home 1</Link></li>
                  <li><Link href="/home-2">Home 2</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li>
              <button
                onClick={() => toggleDropdown("pages")}
                className="flex items-center justify-between w-full"
              >
                Pages <FaChevronDown />
              </button>
              {openDropdown === "pages" && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link href="/gallery">Gallery</Link></li>
                  <li><Link href="/team">Our Team</Link></li>
                  <li><Link href="/pricing">Pricing</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li>
              <button className="flex items-center w-full justify-center py-2 px-4 text-white font-medium bg-[#416b63] rounded-full hover:bg-[#2f514a] transition">
                Book Appointment <FaArrowRightLong className="ml-2" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
