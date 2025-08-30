import Footer from "../components/Footer";
import Header from "../components/Header";
import CaseStudyComponent from "../components/other/CaseStudyComponent";
import CommonHeading from "../components/other/CommonHeading";


export const metadata = {
  title: "Case Studies | The Salon Company",
  description:
    "See real transformations from The Salon Company. Explore our case studies showcasing hair, makeup, and beauty service results.",
};

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <CommonHeading Text="Case Studies" />
      <CaseStudyComponent/>
      <Footer />
    </>
  );
}
