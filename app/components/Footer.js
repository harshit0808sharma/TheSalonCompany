"use client";

import { FaFacebook, FaPhone, FaRegEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import RunningText from "./other/RunningText";

export default function Footer() {
  return (
    <>
    <RunningText/>
    <footer className="bg-teal-800 text-white md:rounded-4xl md:m-5 mt-5">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-teal-800 text-sm font-bold">S</span>
              </div>
              <span className="ml-2 text-xl font-semibold">The Salon Company</span>
            </div>
            <p className="text-white/80 mb-6">
              Experience luxury grooming and beauty care with expert stylists, premium products, and a relaxing atmosphere.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60"
              />
              <button className="bg-teal-600 p-2 rounded-lg hover:bg-teal-500 transition-colors">
                <IoIosSend className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4" />
                <span className="text-white/80">Book Your Appointment</span>
              </div>
              <p className="text-white/80">(702) 555-0122</p>
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4" />
                <span className="text-white/80">Customer Support</span>
              </div>
              <p className="text-white/80">(716) 555-0114</p>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="text-white/80">Salon Location</p>
                <p className="text-white/80">6391 Elgin St, Santa Ana,</p>
                <p className="text-white/80">California 10299</p>
              </div>
              <div>
                <p className="text-white/80">Email</p>
                <p className="text-white/80">hello@saloncompany.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-white/80 hover:text-white transition-colors">Home</Link>
              <Link href="/" className="block text-white/80 hover:text-white transition-colors">About Us</Link>
              <Link href="/" className="block text-white/80 hover:text-white transition-colors">Our Services</Link>
              <Link href="/" className="block text-white/80 hover:text-white transition-colors">Book Appointment</Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© 2025 The Salon Company. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-white/80">Follow Us</span>
            <div className="flex space-x-3">
              <Link href="/" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaTwitter className="w-4 h-4" />
              </Link>
              <Link href="/" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaFacebook className="w-4 h-4" />
              </Link>
              <Link href="/" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
