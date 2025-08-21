"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const videoData = [
  {
    src: "",
    fallback: "/assets/images/image4.jpeg",
    caption: "Bridal Makeup Transformation",
  },
  {
    src: "",
    fallback: "/assets/images/image3.jpeg",
    caption: "Hair Styling Session",
  },
  {
    src: "",
    fallback: "/assets/images/image2.jpeg",
    caption: "Nail Art Process",
  },
  {
    src: "",
    fallback: "/assets/images/image10.jpeg",
    caption: "Luxury Facial Treatment",
  },
  {
    src: "",
    fallback: "/assets/images/image5.jpeg",
    caption: "Glam Party Look",
  },
  {
    src: "",
    fallback: "/assets/images/image6.jpeg",
    caption: "Elegant Hair Coloring",
  },
];


export default function VideoGallery() {
  return (
    <>
      <Navbar />
      <CommonHeading Text={"Video Gallery"} />

      <section className="py-12 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videoData.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {video.src ? (
                <video
                  src={video.src}
                  controls
                  className="w-full h-64 object-cover rounded-2xl"
                />
              ) : (
                <Image
                  src={video.fallback}
                  alt={video.caption}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              )}

              {/* Overlay caption + Play Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3">
                {video.src && (
                  <FaPlay className="text-white text-4xl opacity-90" />
                )}
                <p className="text-white text-lg font-semibold text-center px-2">
                  {video.caption}
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
