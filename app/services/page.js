import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CommonHeading from "../components/other/CommonHeading";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactForm";
import ServiceComponent from "../components/other/ServiceComponent";

export default function ServicesPage() {

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Services"} />
      <ServiceComponent/>
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
