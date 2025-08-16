"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import image1 from "../../../public/assets/images/image1.png";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#416b63] text-white h-screen rounded-[2rem] overflow-hidden">
        <div className="w-full h-full mx-auto grid md:grid-cols-2 gap-10 items-center px-10">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {"✨ “Wake Up Beautiful,"} <span className="text-white">{"Every Single Day” ✨"}</span>
            </h1>
            <p className="text-lg text-gray-100 mb-8">{"At The Salon Company, we believe beauty is not just skin deep—it’s the art of confidence, self-care, and individuality. Step into a world where hair, beauty, makeup, and nail artistry come together to celebrate your unique glow."}</p>

            <Link
              href="/"
              className=" bg-white text-[#416b63] inline-block w-full px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
            >
              {"📞 Book your free consultation today → +91 88000 26046"}
            </Link>
          </div>

          {/* Right Image INSIDE container */}
          <div className="relative w-full h-[500px] md:h-full">
            <Image
              src={image1}
              alt="Salon Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Info Section (3 Columns) */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 px-6 max-w-6xl mx-auto text-center">
        {/* Contact Us */}
        <div className="bg-[#416b63] text-white rounded-2xl p-6 shadow-md">
          <FaPhoneAlt size={28} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-100">+91 98765 43210</p>
        </div>

        {/* Location */}
        <div className="bg-[#416b63] text-white rounded-2xl p-6 shadow-md">
          <FaMapMarkerAlt size={28} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-100">Lokaci H.Q., Sector 117, Noida</p>
        </div>

        {/* Working Hours */}
        <div className="bg-[#416b63] text-white rounded-2xl p-6 shadow-md">
          <FaClock size={28} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-100">Mon - Sat: 10 AM - 8 PM</p>
        </div>
      </div>
    </div>
  );
}
