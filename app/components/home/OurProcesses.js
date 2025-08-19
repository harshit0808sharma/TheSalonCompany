"use client";

import Image from "next/image";
import { FaCheck, FaPlay } from "react-icons/fa";
import doctorImg from "../../../public/assets/images/image6.jpeg";

export default function ProcessSection() {
  return (
    <section className="grid md:grid-cols-2 min-h-[600px] px-5">
      {/* Left side with image + overlay */}
      <div className="relative flex items-end justify-center overflow-hidden rounded-4xl">
        <Image
          src={doctorImg}
          alt="Dermatology Process"
          fill
          className="object-cover rounded-4xl"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40 to-transparent rounded-r-2xl"></div>

        {/* Text overlay */}
        <div className="relative p-8 md:p-12 text-white">
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white hover:bg-white hover:text-[#214037] transition">
              <FaPlay size={16} />
            </button>
            <div>
              <p className="text-sm opacity-80">Our process</p>
              <h3 className="text-lg md:text-xl font-semibold">
                Watch our procedure
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Right side content */}
      <div className="bg-[#f9f6f5] flex items-center">
        <div className="p-8 md:p-14">
          <p className="text-sm text-[#214037] mb-2">• Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#214037] mb-4 leading-snug">
            Expert dermatology care for healthy, radiant skin
          </h2>
          <p className="text-gray-600 mb-8">
            From preventive care to specialized treatments, our wide range of
            services is designed to support your health at every stage.
          </p>

          {/* Checklist in 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Expert Dermatologists",
              "Advanced Technology",
              "Effective Solutions",
              "Personalized Care",
              "Comprehensive Services",
              "Comfortable Environment",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#214037]">
                <FaCheck className="text-[#214037]" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-[#214037] text-white rounded-lg shadow hover:bg-[#19332b] transition">
            Learn More →
          </button>

          {/* Bottom text */}
          <p className="text-gray-600 text-sm mt-6">
            Your skin’s transformation starts here —{" "}
            <a href="#" className="text-[#214037] font-semibold underline">
              Book Today!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
