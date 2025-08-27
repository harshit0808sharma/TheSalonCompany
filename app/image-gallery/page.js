
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import ImageHomeComponent from "../components/other/ImageHomeComponent";

export const metadata = {
  title: "Image Gallery | The Salon Company",
  description:
    "Explore before-and-after photos and stunning salon results from The Salon Company in Noida.",
};


export default function ImageGallery() {
    
  return (
    <>
      <Navbar />
      <CommonHeading Text={"Image Gallery"} />
      <ImageHomeComponent/>
      <Footer />
    </>
  );
}
