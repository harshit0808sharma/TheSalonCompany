// import Image from "next/image";

import Header from "./components/Header";
import AboutSection from "./components/home/AboutUs";
import FAQSection from "./components/home/FAQs";
import Hero from "./components/home/Hero";
import OurBenefits from "./components/home/OurBenefits";
import BeforeAfter from "./components/home/OurResult";
import Services from "./components/home/OurServices";
import WhyChooseUs from "./components/home/WhyChoseUs";

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">
        <Header />
        <Hero />
        <AboutSection />
        <Services />
        <WhyChooseUs />
        <OurBenefits />
        <BeforeAfter />
        <FAQSection />
      </div>

    </>
  );
}
