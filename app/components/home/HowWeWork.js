'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import treatmentImg from "../../../public/assets/images/image2.jpeg";
import Heading from "../other/Heading";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

export default function HowWeWork() {
  const { steps } = useContext(SalonContext);

  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-16 px-6 md:px-12 bg-[#fdf9f8]">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <GoDotFill className="text-teal-800" />
          <span className="text-[#264D45] font-medium">How We Works</span>
        </motion.div>
        <Heading Text={"Seamless, Luxurious, and Client-Centered"} />
        <p className="text-gray-600 mb-8">
          At <span className="font-semibold">The Salon Company</span>{", we’ve perfected a workflow that combines expertise, comfort, and efficiency, ensuring every client leaves radiant and confident."}
        </p>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 pb-4"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-[#214037]">
                <span className="text-3xl font-light">{step.num}</span>
                {step.title}
              </h3>
              <p className="text-gray-600 mt-1 ml-11">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side with Image & Overlay */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src={treatmentImg}
          alt="Skin treatment"
          className="rounded-2xl object-cover w-full h-full"
        />

        {/* Bottom overlay */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 bg-[#214037]/90 text-white rounded-b-2xl p-6"
        >
          <p className="text-lg font-medium">
            Have Questions? We’re Here to Help You!
          </p>
          <div className="flex items-center gap-3 mt-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white">
              <FaPhone />
            </div>
            <p className="text-lg font-semibold">(123) 456 789</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
