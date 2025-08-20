"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { HomeContext } from "@/app/context/HomeContext";
import Link from "next/link";
import Heading from "../other/Heading";

export default function Team() {
  const { teamMembersData } = useContext(HomeContext);

  return (
    <section className="bg-[#faf7f7] py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex justify-center items-center gap-2">
          <GoDotFill className="text-teal-800" />
          <span className="text-teal-800 font-medium">Our Team</span>
        </div>
        <Heading Text={"Meet Our Expert Team: Masters of Beauty & Confidence"}/>
        <p className="text-gray-600">
          {"Our team of certified beauty artists, skincare specialists, and PMU experts are dedicated to **enhancing your natural beauty** and delivering a luxurious, personalized experience every visit."}
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
  {teamMembersData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl shadow-md group"
    >
      {/* Wrap entire card */}
      <Link href={`/our-team/${member.slug}`} className="block relative">
        <Image
          src={member.image}
          alt={member.name}
          width={500}
          height={500}
          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Name + Position */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          <p className="text-sm text-gray-200">{member.position}</p>
        </div>

        {/* Hover social icons (but still whole card is clickable) */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="p-3 bg-white rounded-full text-[#214037]">
            <FaFacebookF />
          </span>
          <span className="p-3 bg-white rounded-full text-[#214037]">
            <FaTwitter />
          </span>
          <span className="p-3 bg-white rounded-full text-[#214037]">
            <FaLinkedinIn />
          </span>
          <span className="p-3 bg-white rounded-full text-[#214037]">
            <FaInstagram />
          </span>
        </div>
      </Link>
    </motion.div>
  ))}
</div>

    </section>
  );
}
