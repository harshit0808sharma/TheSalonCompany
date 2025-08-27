import Navbar from '../components/Header';
import Footer from '../components/Footer';
import CommonHeading from '../components/other/CommonHeading';
import GetInTouch from '../components/other/GetInTouch';

export const metadata = {
  title: "Contact Us | The Salon Company",
  description:
    "Get in touch with The Salon Company in Noida. Call, email, or visit us to book services or consultations.",
};

export default function ContactPage() {

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Contact Us"} />
      <GetInTouch/>
      <Footer />
    </>
  );
}
