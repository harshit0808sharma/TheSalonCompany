
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./components/home/AboutUs";
import ContactSection from "./components/home/ContactForm";
import FAQSection from "./components/home/FAQs";
import Hero from "./components/home/Hero";
import HowWeWork from "./components/home/HowWeWork";
import BlogSection from "./components/home/LatestBlog";
import OurBenefits from "./components/home/OurBenefits";
import ProcessSection from "./components/home/OurProcesses";
import BeforeAfter from "./components/home/OurResult";
import Services from "./components/home/OurServices";
import Team from "./components/home/OurTeam";
import Testimonials from "./components/home/Testimonials";
import WhyChooseUs from "./components/home/WhyChoseUs";
import Stats from "./components/other/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <Services />
      <Stats/>
      <WhyChooseUs />
      <ProcessSection/>
      <HowWeWork/>
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
