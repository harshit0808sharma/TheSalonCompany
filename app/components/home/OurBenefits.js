"use client";

import Image from "next/image";
import { FaUserMd, FaMicroscope, FaUserCheck, FaDatabase, FaShieldAlt, FaHome } from "react-icons/fa";
import doctorImg from "../../../public/assets/images/image4.jpg"; 

export default function OurBenefits() {
  const leftBenefits = [
    {
      icon: <FaUserMd className="text-[#214037] text-2xl" />,
      title: "Expert Dermatologists",
      desc: "Our team consists of board-certified dermatologists with years of experience.",
    },
    {
      icon: <FaMicroscope className="text-[#214037] text-2xl" />,
      title: "Advanced Technology",
      desc: "We use cutting-edge equipment and innovative techniques for best results.",
    },
    {
      icon: <FaUserCheck className="text-[#214037] text-2xl" />,
      title: "Personalized Care",
      desc: "Every treatment plan is tailored to your unique skin type and concerns.",
    },
  ];

  const rightBenefits = [
    {
      icon: <FaDatabase className="text-[#214037] text-2xl" />,
      title: "Comprehensive Services",
      desc: "From medical dermatology to cosmetic enhancements, we offer it all.",
    },
    {
      icon: <FaShieldAlt className="text-[#214037] text-2xl" />,
      title: "High Safety Standards",
      desc: "Your safety is our priority. We follow strict hygiene and safety protocols.",
    },
    {
      icon: <FaHome className="text-[#214037] text-2xl" />,
      title: "Comfortable Environment",
      desc: "Our clinic provides a welcoming and stress-free atmosphere.",
    },
  ];

  return (
    <section className="bg-[#214037] text-white py-20 px-6 md:px-12">
      {/* Top Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm mb-2">• Our Benefits</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Exceptional dermatology, every step of the way
        </h2>
        <p className="text-gray-200">
          Experience personalized care, advanced treatments, and visible results 
          with our expert dermatology services.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {/* Left Benefits */}
        <div className="space-y-10">
          {leftBenefits.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-md">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src={doctorImg}
              alt="Dermatology Expert"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Benefits */}
        <div className="space-y-10">
          {rightBenefits.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-md">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
