
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import VideoGalleryComponent from "../components/other/VideoGalleryComponent";


export default function VideoGallery() {

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Video Gallery"} />
      <VideoGalleryComponent/>
      <Footer />
    </>
  );
}
