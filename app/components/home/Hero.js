"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import womanImage from "../../../public/assets/images/faceImage.png";
// import { FcContacts } from "react-icons/fc";

export default function Hero() {
  return (
    <section className="relative m-0 bg-[#28554E] lg:mx-5 text-white overflow-hidden p-4 md:p-0 lg:rounded-[2rem] pt-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center md:px-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:py-20"
        >
          <h1 className="text-4xl md:text-5xl leading-tight">
            Redefining Beauty, <br />{"One Experience "}<br /> at a Time
          </h1>
          <p className="text-lg text-gray-200">
            {"At The Salon Company, we believe beauty is not just skin deep—it’s the art of confidence, self-care, and individuality. Step into a world where hair, beauty, makeup, and nail artistry come together to celebrate your unique glow."}
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#28554E] px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-md"
          >
            Book your free consultation today →
          </motion.button>

          <h2 className="text-white font-semibold text-2xl">Reviews</h2>
          <hr className="text-gray-400" />

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
  );
}
