
import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import Footer from "../components/Footer";
import FaqsComponent from "../components/other/FaqsComponent";

export const metadata = {
  title: "FAQs | The Salon Company",
  description:
    "Find answers to frequently asked questions about The Salon Company’s services, appointments, and treatments.",
};

export default function FAQs() {

  return (
    <>
      <Navbar />
      <CommonHeading Text="Frequently Asked Questions" />
      <FaqsComponent/>
      <Footer />
    </>
  );
}
