import Footer from "../components/Footer";
import Navbar from "../components/Header";
import AboutSection from "../components/home/AboutUs";
import CommonHeading from "../components/other/CommonHeading";


export default function AboutPage(){
    return(
        <>
            <Navbar/>
            {/* <div className="relative m-0 bg-[#28554E] lg:mx-5 text-white flex flex-col gap-5 items-center justify-center overflow-hidden lg:rounded-[2rem] py-32">
                <h1 className="text-5xl text-white">About Us</h1>
                <ul className="flex items-center gap-2">
                    <li>Home</li>
                    <li> / </li>
                    <li>About Us</li>
                </ul>
            </div> */}
            <CommonHeading Text={"About Us"}/>
            <AboutSection/>
            <Footer/>
        </>
    )
}
