'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck, FaPlay } from "react-icons/fa";
import doctorImg from "../../../public/assets/images/image6.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiLipstick, GiFeather, GiEyeTarget } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";

const steps = [
  {
    title: "Personalized Consultation",
    desc: "Our experts take the time to understand your style, preferences, and goals, ensuring the results match your personality and lifestyle.",
    icon: <FaPlay className="text-xl" />
  },
  {
    title: "Expert Recommendations",
    desc: "We suggest the best treatments, techniques, and products for your unique needs. One-size-fits-all doesn’t exist in beauty.",
    icon: <GiLipstick className="text-xl" />
  },
  {
    title: "Precision & Care",
    desc: "Certified artists bring years of experience and meticulous attention to detail to every service, crafted to perfection.",
    icon: <GiFeather className="text-xl" />
  },
  {
    title: "Relax & Enjoy",
    desc: "Sit back in our luxurious, calming environment and enjoy the experience as indulgent as the results themselves.",
    icon: <GiEyeTarget className="text-xl" />
  },
  {
    title: "Walk Out Radiant",
    desc: "Leave the salon confident, glowing, and ready to conquer your day. Our work fits effortlessly into your life.",
    icon: <FaCheck className="text-xl" />
  },
  {
    title: "Continuous Care",
    desc: "From aftercare tips to follow-up consultations, we ensure your results last longer and look better over time.",
    icon: <FaCheck className="text-xl" />
  }
];

export default function ProcessSection() {
  return (
    <section className="grid md:grid-cols-2 min-h-[600px] px-5 py-10 md:py-20 gap-8">

      {/* Left side with image + overlay */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex items-end justify-center overflow-hidden rounded-3xl"
      >
        <Image
          src={doctorImg}
          alt="Dermatology Process"
          fill
          className="object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40 to-transparent rounded-3xl"></div>
        <div className="relative p-8 md:p-12 text-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white hover:bg-white hover:text-[#214037] transition">
              <FaPlay size={16} />
            </button>
            <div>
              <p className="text-sm opacity-80">Our process</p>
              <h3 className="text-lg md:text-xl font-semibold">
                Watch our procedure
              </h3>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right side content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white flex flex-col items-start rounded-3xl p-8 md:p-14"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <GoDotFill className="text-teal-800" />
          <span className="text-[#264D45] font-medium">Our Processes</span>
        </motion.div>


        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-4xl font-bold text-[#214037] mb-4 leading-snug"
        >
          Beauty, Simplified – Step by Step
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-600 mb-8"
        >
          At The Salon Company, we believe that beauty should be effortless, seamless, and tailored just for you.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
              className="flex gap-4 items-start bg-[#f9f6f7] rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="text-[#214037] text-2xl flex-shrink-0">{step.icon}</div>
              <div>
                <h4 className="font-semibold text-[#214037]">{step.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="px-6 py-3 bg-[#214037] text-white flex items-center gap-2 rounded-lg shadow hover:bg-[#19332b] transition"
        >
          <span>Learn More</span> <FaArrowRightLong />
        </motion.a>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-gray-600 text-sm mt-6"
        >
          Your skin’s transformation starts here —{" "}
          <a href="#" className="text-[#214037] font-semibold underline">
            Book Today!
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
