import Footer from "../components/Footer";
import Navbar from "../components/Header";
import AboutSection from "../components/home/AboutUs";
import ContactSection from "../components/home/ContactForm";
import Team from "../components/home/OurTeam";
import Testimonials from "../components/home/Testimonials";
import AboutNewSection from "../components/other/AboutNewSection";
import CommonHeading from "../components/other/CommonHeading";
import DedicatedToYou from "../components/other/DedicatedToYou";
import OurMission from "../components/other/OurMission";
import SalonBenefits from "../components/other/SalonBenefits";
import Stats from "../components/other/Stats";
import WhoWeAre from "../components/other/WhoWeAre";


export default function AboutPage(){
    return(
        <>
            <Navbar/>
            <CommonHeading Text={"About Us"}/>
            <AboutSection/>
            <Stats/>
            <OurMission/>
            <WhoWeAre/>
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
