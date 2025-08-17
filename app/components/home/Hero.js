"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import womanImage from "../../../public/assets/images/image9.png";
import { FcContacts } from "react-icons/fc";

export default function Hero() {
  return (
    <section className="relative m-0 bg-[#28554E] lg:mx-5 text-white min-h-screen flex items-center justify-center overflow-hidden lg:rounded-[2rem">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center p-6 md:px-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
           {" Comprehensive care "}<br />{" for your skin's health "}<br /> and beauty
          </h1>
          <p className="text-lg text-gray-200">
            {"At Logoipsum we believe in creating digital solutions that drive"}
            {"real–world impact. From creative strategies to cutting–edge."}
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#28554E] px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-md"
          >
            View Our Services →
          </motion.button>

          {/* Reviews */}
          <div className="mt-6 flex items-center gap-4">
            <Image
              src="/assets/images/image1.png"
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
          className="relative flex"
        >
          <Image
            src={womanImage}
            alt="Hero"
            width={500}
            height={600}
            className="rounded-lg object-cover"
          />

          {/* Circle Motion Text (Optional) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-6 right-10 w-32 h-32 border bg-[#28554E] border-white rounded-full flex items-center justify-center text-sm"
          >
            <FcContacts className="text-4xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
