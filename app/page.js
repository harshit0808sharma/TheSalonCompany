// import Image from "next/image";

import Header from "./components/Header";
import AboutSection from "./components/home/AboutUs";
import Hero from "./components/home/Hero";
import Services from "./components/home/OurServices";
import WhyChooseUs from "./components/home/WhyChoseUs";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-4 px-10 py-4">
      <Header/>
      <Hero/>
      <AboutSection/>
      <Services/>
      <WhyChooseUs/>
    </div>
    </>
  );
}
