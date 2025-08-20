import Navbar from '../components/Header';
import Footer from '../components/Footer';
import CommonHeading from '../components/other/CommonHeading';
import GetInTouch from '../components/other/GetInTouch';

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
