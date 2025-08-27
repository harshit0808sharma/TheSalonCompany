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
import ContactInfo from "../components/other/ContactInfo";

export default function HomeVideoPage() {

  return (
    <>
      <Navbar />
      <div className="mainBg1 w-full px-0 md:px-5 pb-10">
        {/* Hero Video Section */}
        <section className="relative h-screen overflow-hidden rounded-none md:rounded-4xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/video/home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: theme ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)" }}
          />

          {/* Hero Content */}
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
                At Logoipsum we believe in creating digital solution that drive
                real-world impact. <br />
                From creative strategies to cutting-edge.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
              >
                View Our Services
                <FaArrowRight className="ml-2 w-5 h-5" />
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
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
}
