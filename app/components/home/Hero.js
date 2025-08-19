"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaClock, FaFileContract, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import womanImage from "../../../public/assets/images/faceImage.png";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      <section className="relative m-0 bg-[#28554E] lg:mx-5 px-5 md:px-0 text-white overflow-hidden lg:rounded-[2rem] pt-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center md:px-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:py-20"
          >
            <h1 className="text-4xl md:text-5xl leading-tight">
              Redefining Beauty, <br /> One Experience <br /> at a Time
            </h1>
            <p className="text-lg text-gray-200">
              At The Salon Company, we believe beauty is not just skin deep—it’s
              the art of confidence, self-care, and individuality. Step into a
              world where hair, beauty, makeup, and nail artistry come together
              to celebrate your unique glow.
            </p>

            {/* Button */}
            <motion.a
            href="/book-appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#28554E] px-6 py-3 rounded-full font-mediutm inline-flex items-center gap-2 shadow-md"
            >
              Book your free consultation today →
            </motion.a>

            <h2 className="text-white font-semibold text-2xl">Reviews</h2>
            <hr className="text-gray-400" />

            {/* Reviews */}
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/assets/images/person1.png"
                alt="review"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-sm md:text-base">
                  I am beyond thrilled with the results of my facelift.
                </p>
                <div className="flex items-center text-yellow-400 mt-1">
                  <FaStar className="mr-1" />
                  <span className="text-white">5.0</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-64 md:h-full flex items-center justify-center"
          >
            <Image
              src={womanImage}
              alt="Hero"
              priority
              fill
              className="object-contain md:object-cover rounded-lg drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Bottom Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 mt-16 px-10 text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {[
          {
            icon: <FaFileContract className="w-6 h-6" />,
            title: "Contact Us",
            lines: ["salon@gmail.com", "+91 123 456 987"],
          },
          {
            icon: <FaLocationDot className="w-6 h-6" />,
            title: "Location",
            lines: ["Lokaci H.Q. sector 117, Noida", "Uttar Pradesh, India"],
          },
          {
            icon: <FaClock className="w-6 h-6" />,
            title: "Working Hours",
            lines: [
              "Monday - Friday : 9:00 am to 6:00 pm",
              "Saturday : 11:00 am to 5pm",
            ],
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className={`
        bg-white text-teal-800 p-6 
        ${idx !== 2 ? "border-b md:border-b-0 md:border-r" : ""} 
        border-gray-300
      `}
          >
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            {card.lines.map((line, i) => (
              <p key={i} className="text-black/90">
                {line}
              </p>
            ))}
          </motion.div>
        ))}
      </motion.div>

    </>
  );
}
