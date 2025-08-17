"use client";

import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaDribbble } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#214037] text-white py-12 px-6 md:px-12 lg:rounded-4xl m-0 lg:mx-5 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand + Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Dermal.</h2>
          <p className="text-gray-200 mb-6">
            With a passion for skin health, Dermal combines the latest technologies.
          </p>
          <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 text-gray-800 outline-none"
            />
            <button className="bg-[#214037] p-3 text-white">
              <IoIosSend size={20} />
            </button>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex items-start gap-3 mb-4">
            <FaPhoneAlt size={22} className="text-white" />
            <div>
              <p className="font-medium">For more information</p>
              <p className="text-gray-300">(702) 555-0122</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MdOutlineSupportAgent size={24} className="text-white" />
            <div>
              <p className="font-medium">Emergency toll free no</p>
              <p className="text-gray-300">(219) 555-0114</p>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-2 text-gray-200">
            Location <br />
            6391 Elgin St. Santa Ana Celina, Delaware 10299
          </p>
          <p className="text-gray-200">
            Email <br />
            info@domain.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-300">
          Copyright © 2025 All Rights Reserved.
        </p>
        <div className="flex items-center gap-3">
          <span>Follow Us On Social</span>
          <div className="flex gap-3">
            <a href="#" className="bg-white text-[#214037] p-2 rounded">
              <FaDribbble size={18} />
            </a>
            <a href="#" className="bg-white text-[#214037] p-2 rounded">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="bg-white text-[#214037] p-2 rounded">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
