"use client";
import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";
import Heading from "../other/Heading";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

export default function HowWeWorkUI() {
  // motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen px-6 py-12 mainBg2">
      {/* Responsive container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left content section */}
        <motion.div
          className="w-full flex-[0.60]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerParent}
        >
          <motion.div className="flex items-center gap-2" variants={fadeUp}>
            <GoDotFill className="text-teal-800 text-lg" />
            <span className="font-medium text-teal-800 tracking-wide">
              How We Work
            </span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Heading Text={"How we work: a commitment to your skin health"} />
          </motion.div>

          <motion.p
            className="text-gray-600 text-lg mb-12 leading-relaxed"
            variants={fadeUp}
          >
            We're dedicated to helping you achieve and maintain beautiful,
            healthy skin. Trust us to provide exceptional care tailored to you.
          </motion.p>

          {/* Steps */}
          <motion.div className="space-y-12" variants={staggerParent}>
            {[ 
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
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="flex items-start"
                variants={fadeUp}
              >
                <div className="flex items-center mr-6">
                  <span className="text-4xl sm:text-5xl text-teal-800 mr-4">
                    {step.num}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl text-teal-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right image section */}
        <motion.div
          className="flex-[0.40] relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="relative w-full h-[400px] sm:h-[510px] lg:h-[710px] rounded-3xl overflow-hidden">
            <Image
              src="/assets/images/blog1.jpg"
              alt="Dermatologist performing facial treatment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#214037]/90 via-[#214037]/40"></div>

            {/* Contact overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-8 p-6 sm:p-8 text-white z-50">
              <h3 className="text-xl sm:text-2xl mb-4">
                Have Questions? We're Here to Help You!
              </h3>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-teal-800 rounded-full flex items-center justify-center mr-4">
                  <FiPhone className="w-6 h-6" />
                </div>
                <span className="text-lg sm:text-xl">(123) 456 789</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
