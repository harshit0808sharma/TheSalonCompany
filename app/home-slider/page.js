'use client';

import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaFileContract } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

import Navbar from "../components/Header";
import Footer from "../components/Footer";

import AboutSection from "../components/home/AboutUs";
import Services from "../components/home/OurServices";
import WhyChooseUs from "../components/home/WhyChoseUs";
import ProcessSection from "../components/home/OurProcesses";
import HowWeWork from "../components/home/HowWeWork";
import OurBenefits from "../components/home/OurBenefits";
import BeforeAfter from "../components/home/OurResult";
import FAQSection from "../components/home/FAQs";
import Testimonials from "../components/home/Testimonials";
import Team from "../components/home/OurTeam";
import BlogSection from "../components/home/LatestBlog";
import ContactSection from "../components/home/ContactForm";

import bgImage from "../../public/assets/images/salon-home-image.jpg";
import { SalonContext } from "../context/SalonContext";

export default function HomeImagePage() {
  const { theme } = useContext(SalonContext); // get theme

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
    <div className={theme ? "bg-black text-white" : "bg-white text-teal-900"}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative mx-0 md:mx-5 h-screen overflow-hidden rounded-4xl mb-10">
        <Image
          src={bgImage}
          alt="Skincare treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: theme ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)" }} />
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className={`text-4xl md:text-7xl font-medium leading-tight ${theme ? "text-white" : "text-white"}`}>
              Comprehensive care <br />
              for your skin&apos;s health <br />
              and beauty
            </h1>
            <p className={`mt-6 text-lg font-light ${theme ? "text-gray-300" : "text-gray-200"}`}>
              At Logoipsum we believe in creating digital solutions that drive
              real-world impact. <br />
              From creative strategies to cutting-edge.
            </p>
            <Link
              href="/services"
              className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-white rounded-full group px-6 py-3 mt-8"
            >
              <span className="absolute inset-0 w-0 bg-teal-800 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-white">
                View Our Services
                <FaArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 mt-16 p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {[
          { icon: <FaFileContract className="w-6 h-6" />, title: "Contact Us", lines: ["salon@gmail.com", "+91 123 456 987"] },
          { icon: <FaLocationDot className="w-6 h-6" />, title: "Location", lines: ["Lokaci H.Q. sector 117, Noida", "CA 90001, USA"] },
          { icon: <FaClock className="w-6 h-6" />, title: "Working Hours", lines: ["Monday - Friday : 9:00 am to 6:00 pm", "Saturday : 11:00 am to 5pm"] },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className={`p-6 ${theme ? "bg-gray-900 text-white" : "bg-white text-teal-800"} ${idx !== 2 ? "border-b md:border-b-0 md:border-r" : ""} border-gray-300`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${theme ? "bg-gray-700 text-teal-200" : "bg-white/20"}`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            {card.lines.map((line, i) => (
              <p key={i} className={`${theme ? "text-gray-300" : "text-black/90"}`}>{line}</p>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Sections */}
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <ProcessSection />
      <HowWeWork />
      <OurBenefits />
      <BeforeAfter />
      <FAQSection />
      <Testimonials />
      <Team />
      <BlogSection />
      <ContactSection />

      <Footer />
    </div>
  );
}
