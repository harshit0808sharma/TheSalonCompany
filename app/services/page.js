'use client'
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CommonHeading from "../components/other/CommonHeading";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactForm";
import { GoDotFill } from "react-icons/go";
import Services from "../components/home/OurServices";

export default function ServicesPage() {
  const { servicesData } = useContext(HomeContext);

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Services"} />
      <Services/>
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
