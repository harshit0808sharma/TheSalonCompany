import Footer from "../components/Footer";
import Navbar from "../components/Header";
import AboutSection from "../components/home/AboutUs";
import ContactSection from "../components/home/ContactForm";
import OurBenefits from "../components/home/OurBenefits";
import Team from "../components/home/OurTeam";
import Testimonials from "../components/home/Testimonials";
import AboutNewSection from "../components/other/AboutNewSection";
import CommonHeading from "../components/other/CommonHeading";
import DedicatedToYou from "../components/other/DedicatedToYou";
import OurMission from "../components/other/OurMission";
import SalonBenefits from "../components/other/SalonBenefits";
import WhoWeAre from "../components/other/WhoWeAre";

export const metadata = {
  title: "About Us | The Salon Company",
  description: "Learn more about The Salon Company in Noida.",
};


export default function AboutPage(){
    return(
        <>
            <Navbar/>
            <CommonHeading Text={"About Us"}/>
            <AboutSection/>
            <OurMission/>
            <WhoWeAre/>
            <OurBenefits/>
            <AboutNewSection/>
            <SalonBenefits/>
            <DedicatedToYou/>
            <Team/>
            <Testimonials/>
            <ContactSection/>
            <Footer/>
        </>
    )
}
