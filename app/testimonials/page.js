import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import Footer from "../components/Footer";
import TestimonialComponent from "../components/other/TestimonialComponent";

export const metadata = {
  title: "Client Testimonials | The Salon Company",
  description:
    "Read what our happy clients have to say about their salon experiences at The Salon Company in Noida.",
};

export default function Testimonials() {
    return (
        <>
            <Navbar />
            <CommonHeading Text={"Testimonials"} />
            <TestimonialComponent/>
            <Footer />
        </>
    );
}
