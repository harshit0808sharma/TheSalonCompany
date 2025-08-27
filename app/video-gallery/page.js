"use client";

import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { SalonContext } from "../context/SalonContext";
import { FaYoutube } from "react-icons/fa";
import { toast } from "react-toastify";

export const metadata = {
  title: "Video Gallery | The Salon Company",
  description:
    "Watch salon transformations, tutorials, and behind-the-scenes clips from The Salon Company.",
};


export default function VideoGallery() {
  const { galleryVideoData } = useContext(SalonContext);

  const handleClick = () => {
    toast.info("Oops! This video is coming soon. Check back later!")
  }

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Video Gallery"} />

      <section className="py-12 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryVideoData.map((video, index) => (
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
                  <FaYoutube className="text-white text-4xl opacity-90" />
                )}
                <p className="text-white flex flex-col items-center gap-4 text-lg font-semibold rounded-2xltext-center px-2">
                  <span onClick={handleClick}>{<FaPlay className="text-4xl cursor-pointer"/>}</span>
                  {/* <span>{video.caption}</span> */}
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
