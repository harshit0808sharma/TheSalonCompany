import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Team from "../components/home/OurTeam";
import CommonHeading from "../components/other/CommonHeading";

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