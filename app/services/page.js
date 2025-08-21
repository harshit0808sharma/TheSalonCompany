import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CommonHeading from "../components/other/CommonHeading";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactForm";
import Services from "../components/home/OurServices";

export default function ServicesPage() {

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
