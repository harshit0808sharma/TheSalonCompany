import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Testimonials from "../components/home/Testimonials";
import CommonHeading from "../components/other/CommonHeading";

export default function TestimonialsPage(){
    return(
        <>
            <Navbar/>
            <CommonHeading Text={"Testimonials"}/>
            <Testimonials/>
            <Footer/>
        </>
    )
}