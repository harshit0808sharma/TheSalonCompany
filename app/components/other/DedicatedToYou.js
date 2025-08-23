"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaRegSmile, FaCut, FaSpa } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext"; // ✅ Import your context
import imgRight from "../../../public/assets/images/image11.jpeg";

export default function DedicatedToYou() {
  const { theme } = useContext(SalonContext); // ✅ get theme (true = dark, false = light)

  return (
    <section
      className={`${
        theme ? "bg-black text-white" : "bg-[#fef9f8] text-[#214037]"
      } py-20 px-6 md:px-12 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <GoDotFill
              className={`text-xl ${theme ? "text-teal-400" : "text-teal-800"}`}
            />
            <span className="font-medium">
              Dedicated To You
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold leading-snug ${
              theme ? "text-white" : "text-[#214037]"
            }`}
          >
            Delivering excellence in <br /> every aspect of salon care
          </h2>

          <p className={`${theme ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
            At The Salon Company, we combine expertise, innovation, and passion
            to deliver a premium beauty experience. Every step is designed to
            make you feel confident and radiant.
          </p>

          {/* Step List */}
          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "Custom Care",
                desc: "We design personalized beauty plans tailored to your unique style and needs.",
              },
              {
                num: "2",
                title: "Tailored Advice",
                desc: "Our experts provide recommendations to enhance your look with confidence.",
              },
              {
                num: "3",
                title: "Expert Guidance",
                desc: "We ensure lasting results with aftercare tips and continuous support.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                {/* Number Box */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-md font-bold ${
                    theme
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-[#214037]"
                  }`}
                >
                  {step.num}
                </div>
                {/* Text */}
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme ? "text-white" : "text-[#214037]"
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`text-sm md:text-base ${
                      theme ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-full sm:w-96 md:w-[450px] rounded-4xl shadow-lg relative">
            <Image
              src={imgRight}
              alt="Salon Service"
              className="w-full h-full object-cover rounded-4xl"
            />

            {/* Floating Service Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-0 md:-left-28 -translate-y-1/2 
              rounded-4xl shadow-xl flex flex-col w-52 overflow-hidden ${
                theme ? "bg-gray-900 text-white" : "bg-white"
              }`}
            >
              {[
                {
                  icon: <FaSpa className="text-xl mt-1" />,
                  title: "Hair Styling",
                  desc: "From classic to modern looks.",
                },
                {
                  icon: <FaCut className="text-xl mt-1" />,
                  title: "Makeup & Beauty",
                  desc: "Personalized looks for every occasion.",
                },
                {
                  icon: <FaRegSmile className="text-xl mt-1" />,
                  title: "Skin & Glow",
                  desc: "Professional care to enhance your glow.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-start p-5 gap-3 transition-all duration-300 ${
                    theme
                      ? "hover:bg-teal-600 hover:text-white"
                      : "hover:bg-teal-800 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <h5 className="text-base font-semibold">{item.title}</h5>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
