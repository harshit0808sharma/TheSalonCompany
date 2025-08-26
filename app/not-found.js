"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "./components/Header";
import CommonHeading from "./components/other/CommonHeading";
import Footer from "./components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <CommonHeading Text={"Page Not Found"} />
      <section className="flex items-center justify-center mainBg2 px-5 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-9xl font-extrabold text-gray-800 drop-shadow-lg"
          >
            404
          </motion.h1>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-700">
            Page Not Found
          </h2>
          <p className="mt-2 text-gray-500">
            {"Sorry, the page you’re looking for doesn’t exist or has been moved."}
          </p>

          <Link href="/" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 flex items-center gap-2 text-white bg-[#214037] hover:bg-[#1a312c] rounded-2xl shadow-lg"
            >
              <FaArrowLeft />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
