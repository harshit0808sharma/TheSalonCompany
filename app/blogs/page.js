import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CommonHeading from "../components/other/CommonHeading";
import BlogSection from "../components/home/LatestBlog";


export default function BlogPage() {

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Blog"} />
      <BlogSection/>
      <Footer />
    </>
  );
}
