'use client';

import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
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
import ContactInfo from "../components/other/ContactInfo";

export const metadata = {
  title: "Salon Highlights | The Salon Company",
  description:
    "Explore highlights of our beauty and salon services through interactive sliders showcasing transformations at The Salon Company.",
};


export default function HomeImagePage() {
  const { theme } = useContext(SalonContext);

  return (
    <>
      <Navbar />
      <div className="mainBg1 w-full px-0 md:px-5 pb-10">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden rounded-4xl">
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
        <ContactInfo/>
      </div>
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
      <BlogSection limit={3}/>
      <ContactSection />

      <Footer />
    </>
  );
}
