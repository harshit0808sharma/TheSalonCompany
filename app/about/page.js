import Footer from "../components/Footer";
import Navbar from "../components/Header";
import AboutSection from "../components/home/AboutUs";
import CommonHeading from "../components/other/CommonHeading";
import Stats from "../components/other/Stats";


export default function AboutPage(){
    return(
        <>
            <Navbar/>
            <CommonHeading Text={"About Us"}/>
            <AboutSection/>
            <Stats/>
            <Footer/>
        </>
    )
}
