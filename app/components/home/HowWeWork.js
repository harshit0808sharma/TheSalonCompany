"use client";
import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";
import Heading from "../other/Heading";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

export default function HowWeWorkUI() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const steps = [
    {
      num: "01",
      title: "Personalized Consultation",
      desc: "This helps us create a customized treatment plan that aligns with your specific needs and expectations.",
    },
    {
      num: "02",
      title: "Tailored Treatment Plans",
      desc: "This helps us create a customized treatment plan that aligns with your specific needs and expectations.",
    },
    {
      num: "03",
      title: "Continuous Care & Follow-Up",
      desc: "This helps us create a customized treatment plan that aligns with your specific needs and expectations.",
    },
  ];

  return (
    <div className="max-w-[1920px] m-auto px-4 sm:px-6 lg:px-12 py-16 md:py-28 mainBg2">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-[60%]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerParent}
        >
          <motion.div className="flex items-center gap-2 mb-4" variants={fadeUp}>
            <GoDotFill className="text-teal-800 text-lg" />
            <span className="font-medium text-teal-800 tracking-wide">
              How We Work
            </span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Heading Text={"How we work: a commitment to your skin health"} />
          </motion.div>

          <motion.p className="text-gray-600 text-base sm:text-lg mb-10 sm:mb-12 leading-relaxed" variants={fadeUp}>
            {"We're dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you."}
          </motion.p>

          {/* Steps */}
          <motion.div className="space-y-10 sm:space-y-12" variants={staggerParent}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pb-4 ${idx !== steps.length - 1 ? 'border-b border-gray-300' : ''}`}
                variants={fadeUp}
              >
                <div className="flex-shrink-0">
                  <span className="text-4xl sm:text-5xl text-teal-800">{step.num}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-teal-800 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-[40%] relative mt-8 lg:mt-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[700px] rounded-3xl overflow-hidden holo-image">
            <Image
              src="/assets/images/blog1.jpg"
              alt="Dermatologist performing facial treatment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#214037]/90 via-[#214037]/40"></div>

            {/* Contact overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-8 p-4 sm:p-6 text-white z-50">
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">
                {"Have Questions? We're Here to Help You!"}
              </h3>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-teal-800 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <FiPhone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-base sm:text-lg">(123) 456 789</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
