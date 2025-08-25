"use client";

import { HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { motion } from "framer-motion";

export default function ContactInfo() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">

          {/* Contact Us */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-left relative"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <HiOutlinePhone className="w-6 h-6 text-teal-700" />
              <h3 className="text-xl text-gray-900">Contact Us</h3>
            </div>
            <div className="space-y-2">
              <div>
                <span className="font-semibold text-gray-900">Email: </span>
                <span className="text-gray-600">info@thesaloncompany.com</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Phone: </span>
                <span className="text-gray-600">(123) 465 - 798</span>
              </div>
            </div>
            {/* Line separator (hidden on mobile, shown on desktop) */}
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
          </motion.div>

          {/* Our Location */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-left relative"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <HiOutlineLocationMarker className="w-6 h-6 text-teal-700" />
              <h3 className="text-xl text-gray-900">Our Location</h3>
            </div>
            <div className="text-gray-600">
              <p>Lokaci H.Q, Sector 117</p>
              <p>Noida</p>
            </div>
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <HiOutlineClock className="w-6 h-6 text-teal-700" />
              <h3 className="text-xl text-gray-900">Working Hours</h3>
            </div>
            <div className="space-y-1 text-gray-600">
              <p>Monday – Friday : 9:00 am to 6:00 pm</p>
              <p>Saturday : 11:00 am to 5pm</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
