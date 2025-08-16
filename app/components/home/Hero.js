"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../../../public/assets/images/image9.png";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#416b63] text-white h-screen rounded-[2rem] overflow-hidden">
        <div className="w-full h-full mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center px-6 md:px-10">

          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center text-center md:text-left z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              ✨ “Wake Up Beautiful, <span className="text-white">Every Single Day” ✨</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 md:mb-8">
              At The Salon Company, we believe beauty is not just skin deep—it’s the art of confidence, self-care, and individuality. Step into a world where hair, beauty, makeup, and nail artistry come together to celebrate your unique glow.
            </p>

            <Link
              href="/"
              className="bg-white text-[#416b63] inline-block w-full sm:w-auto px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition text-sm sm:text-base text-center"
            >
              📞 Book your free consultation today → +91 88000 26046
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-end self-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={image1}
              alt="Salon Hero"
              className="object-cover rounded-2xl max-w-[400px] sm:max-w-[500px] md:max-w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Info Section (3 Columns) */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <div className="bg-[#416b63] text-white rounded-2xl p-6 shadow-md hover:scale-105 transition transform">
          <FaPhoneAlt size={28} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-100">+91 98765 43210</p>
        </div>
        <div className="bg-[#416b63] text-white rounded-2xl p-6 shadow-md hover:scale-105 transition transform">
          <FaMapMarkerAlt size={28} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-100">Lokaci H.Q., Sector 117, Noida</p>
        </div>
        <div className="bg-[#416b63] text-white rounded-2xl p-6 shadow-md hover:scale-105 transition transform">
          <FaClock size={28} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-100">Mon - Sat: 10 AM - 8 PM</p>
        </div>
      </div>
    </div>
  );
}
