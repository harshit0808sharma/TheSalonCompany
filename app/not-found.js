"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "./components/Header";
import CommonHeading from "./components/other/CommonHeading";
import Footer from "./components/Footer";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <CommonHeading Text={"Page Not Found"} />
      <section className="max-w-[1920px] m-auto flex items-center justify-center mainBg2 px-5 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col justify-center items-center gap-8"
        >
          <Image src="/assets/images/error-img.png"
            alt="not found image"
            width={600}
            height={500}
          />
          <div className="flex flex-col items-center gap-4">
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
                className="mt-6 px-6 py-3 flex items-center gap-2 text-white mainBg hover:bg-[#1a312c] rounded-full"
              >
                Back to Home
                <FaArrowRight />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
