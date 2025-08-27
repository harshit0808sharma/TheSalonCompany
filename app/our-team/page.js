import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Team from "../components/home/OurTeam";
import CommonHeading from "../components/other/CommonHeading";

export const metadata = {
  title: "Our Team | The Salon Company",
  description:
    "Meet the professional stylists, makeup artists, and beauty experts who make The Salon Company the best salon in Noida.",
};


export default function OurTeamPage(){
    return(
        <>
            <Navbar/>
            <CommonHeading Text={"Our Team"}/>
            <Team/>
            <Footer/>
        </>
    )
}