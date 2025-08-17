"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-[#faf3f3] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Google Map */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9041380763556!2d77.39281827528674!3d28.57264117569747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b5c46418751aef3%3A0x2d35829dafac334d!2sLokaci%20HQ!5e0!3m2!1sen!2sin!4v1755430508239!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#214037] mb-4">
            Reach out to us today!
          </h2>
          <p className="text-gray-600 mb-8">
            It’s time to take control of your skin health! Booking your appointment 
            is easy and fast. Choose a time that works for you and our dermatology 
            experts will be ready.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name Here"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none"
            />
            <select className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none">
              <option>Select Service</option>
              <option>Skin Care</option>
              <option>Laser Treatment</option>
              <option>Hair Therapy</option>
            </select>
            <input
              type="date"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none"
            />
            <input
              type="time"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none"
            />
            <textarea
              placeholder="Description here about service or your problem..."
              className="col-span-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none h-28"
            ></textarea>

            <button
              type="submit"
              className="col-span-2 bg-[#214037] text-white py-3 rounded-full font-medium hover:bg-[#2d6d5f] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
