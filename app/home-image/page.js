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
import HomeImage from "../components/other/HomeImage";

export const metadata = {
  title: "Image Gallery | The Salon Company",
  description:
    "Browse the stunning salon images from The Salon Company, showcasing our professional hair, beauty, and makeup services.",
};

export default function HomeImagePage() {

  return (
    <>
      <Navbar />
      <HomeImage/>
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
