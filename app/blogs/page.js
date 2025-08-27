import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CommonHeading from "../components/other/CommonHeading";
import BlogSection from "../components/home/LatestBlog";

export const metadata = {
  title: "Blogs & Beauty Tips | The Salon Company",
  description:
    "Explore expert blogs from The Salon Company on hair care, beauty, makeup, skincare, and wellness trends to keep you looking and feeling your best.",
};

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
