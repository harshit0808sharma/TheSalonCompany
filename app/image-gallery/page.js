"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import { motion } from "framer-motion";
import { useContext } from "react";
import { SalonContext } from "../context/SalonContext";

export default function ImageGallery() {
    const { galleryData } = useContext(SalonContext);
    
  return (
    <>
      <Navbar />
      <CommonHeading Text={"Image Gallery"} />

      <section className="py-12 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryData.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt || `Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {image.caption || "Beauty Shot"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
