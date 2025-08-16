"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#416b63]">The Salon Company</h1>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-8 text-gray-500 font-medium">
            
            {/* Home Dropdown */}
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
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Home 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home-2"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Home 2
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* About */}
            <li>
              <Link href="/about" className="hover:text-[#416b63]">
                About Us
              </Link>
            </li>

            {/* Services */}
            <li>
              <Link href="/services" className="hover:text-[#416b63]">
                Services
              </Link>
            </li>

            {/* Blogs */}
            <li>
              <Link href="/blogs" className="hover:text-[#416b63]">
                Blogs
              </Link>
            </li>

            {/* Pages Dropdown */}
            <li className="relative group">
              <button
                onClick={() => toggleDropdown("pages")}
                className="flex items-center gap-1 hover:text-[#416b63]"
              >
                Pages <FaChevronDown size={12} />
              </button>
              {openDropdown === "pages" && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
                  <li>
                    <Link
                      href="/gallery"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link href="/contact" className="hover:text-[#416b63]">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <button className="flex items-center py-2 px-4 text-white font-medium bg-[#416b63] rounded-full hover:bg-[#2f514a] transition">
          Book Appointment <FaArrowRightLong className="ml-2" />
        </button>
      </div>
    </header>
  );
}
