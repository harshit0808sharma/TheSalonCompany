
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CommonHeading from "../components/other/CommonHeading";
import OurBenefits from "../components/home/OurBenefits";
import Testimonials from "../components/home/Testimonials";
import AppointmentComponent from "../components/other/AppointmentComponent";

export const metadata = {
  title: "Book Appointment | The Salon Company",
  description:
    "Easily book your salon appointment online with The Salon Company in Noida. Choose your preferred service and time today!",
};

export default function BookAppointment() {


  return (
    <>
      <Navbar />
      <CommonHeading Text={"Appointment Booking"} />
      <AppointmentComponent/>
      <OurBenefits />
      <Testimonials />
      <Footer />
    </>
  );
}
