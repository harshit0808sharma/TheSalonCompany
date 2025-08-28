"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaRegSmile, FaCut, FaSpa } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import imgRight from "../../../public/assets/images/image11.jpeg";

export default function DedicatedToYou() {
  const { theme } = useContext(SalonContext);

  return (
    <section
      className={`max-w-[1920px] mx-auto ${theme ? "bg-black text-white" : "bg-[#fef9f8] text-[#214037]"
        } py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Small heading */}
          <div className="flex items-center gap-3">
            <GoDotFill
              className={`text-xl ${theme ? "text-teal-400" : "text-teal-800"
                }`}
            />
            <span className="font-medium">Dedicated To You</span>
          </div>

          {/* Main heading */}
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-snug ${theme ? "text-white" : "text-[#214037]"
              }`}
          >
            Delivering excellence in <br /> every aspect of salon care
          </h2>

          {/* Paragraph */}
          <p
            className={`${theme ? "text-gray-300" : "text-gray-600"
              } leading-relaxed text-base sm:text-lg`}
          >
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
                  className={`w-10 h-10 flex items-center justify-center rounded-md font-bold ${theme
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-[#214037]"
                    }`}
                >
                  {step.num}
                </div>
                {/* Text */}
                <div>
                  <h4
                    className={`text-lg font-semibold ${theme ? "text-white" : "text-[#214037]"
                      }`}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`text-sm md:text-base ${theme ? "text-gray-300" : "text-gray-600"
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
          className="flex flex-col items-center lg:flex-row lg:justify-end lg:items-start gap-6"
        >
          <div className="w-full sm:w-[85%] md:w-[450px] lg:w-[500px] rounded-4xl shadow-lg relative">
            {/* Main Image */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-4xl overflow-hidden">
              <Image
                src={imgRight}
                alt="Salon Service"
                className="h-full w-full object-cover rounded-4xl"
              />
            </div>

            {/* Floating Service Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={`mt-6 lg:mt-0 flex flex-col w-full sm:w-80 lg:w-52 overflow-hidden rounded-4xl shadow-none lg:shadow-xl mainBg1
        lg:absolute lg:top-1/2 lg:-left-28 lg:-translate-y-1/2`}
            >
              {[
                {
                  icon: <FaSpa className="text-4xl" />,
                  title: "Hair Styling",
                  desc: "From classic to modern looks.",
                },
                {
                  icon: <FaCut className="text-4xl" />,
                  title: "Makeup & Beauty",
                  desc: "Personalized looks for every occasion.",
                },
                {
                  icon: <FaRegSmile className="text-4xl" />,
                  title: "Skin & Glow",
                  desc: "Professional care to enhance your glow.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center justify-center p-5 gap-3 overflow-hidden group cursor-pointer"
                >
                  {/* Smooth background effect */}
                  <span
                    className={`absolute inset-0 bg-gradient-to-b ${theme ? "from-teal-600 to-teal-700" : "from-teal-800 to-teal-900"
                      } transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100`}
                  ></span>

                  {/* Content */}
                  <div className="relative flex flex-col gap-4 items-center justify-center text-center z-10 group-hover:text-white transition-colors duration-300">
                    <p className="text-center mainColor p-4 rounded-xl bg-white">
                      {item.icon}
                    </p>
                    <h5 className="text-base font-semibold">{item.title}</h5>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
