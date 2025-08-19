"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const team = [
  {
    name: "Dr. Kathryn Murphy",
    role: "Anesthesiology",
    image: "/assets/images/member1.jpg",
  },
  {
    name: "Dr. Kristin Watson",
    role: "Infectious Disease",
    image: "/assets/images/member2.jpg",
  },
  {
    name: "Dr. Arlene Mccoy",
    role: "Cardiology",
    image: "/assets/images/member3.jpg",
  },
  {
    name: "Dr. Jenny Wilson",
    role: "Anesthesiology",
    image: "/assets/images/member4.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-[#faf7f7] py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex justify-center items-center gap-2">
          <GoDotFill className="text-teal-800" />
          <span className="text-teal-800 font-medium">Our Team</span>
        </div>        <h2 className="text-3xl md:text-4xl font-bold text-[#214037] leading-snug mb-3">
          Our expert team: committed to your skin health and beauty
        </h2>
        <p className="text-gray-600">
          Our team of dermatology professionals is dedicated to providing you
          with the highest quality care. With years of experience.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-md group"
          >
            {/* Image */}
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay Gradient */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-gray-200">{member.role}</p>
            </div>

            {/* Social Icons (hover) */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="p-3 bg-white rounded-full hover:bg-[#214037] hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-3 bg-white rounded-full hover:bg-[#214037] hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-3 bg-white rounded-full hover:bg-[#214037] hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="p-3 bg-white rounded-full hover:bg-[#214037] hover:text-white transition">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
