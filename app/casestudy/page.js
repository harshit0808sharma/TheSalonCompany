import Footer from "../components/Footer";
import Header from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import Image from "next/image";

const caseStudies = [
  { id: 1, title: "Rhinoplasty (Nose Reshaping)", src: "/assets/images/caseStudy1.jpg" },
  { id: 2, title: "Facelift & Anti-Aging Surgery", src: "/assets/images/caseStudy2.jpg" },
  { id: 3, title: "Face Case Study 1", src: "/assets/images/blog3.jpg" },
  { id: 4, title: "Face Case Study 2", src: "/assets/images/blog4.jpg" },
  { id: 5, title: "Lips Case Study", src: "/assets/images/blog5.jpg" },
  { id: 6, title: "Eyebrow Case Study", src: "/assets/images/blog6.jpg" },
];

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <CommonHeading Text="Case Studies" />

      <div className="w-full md:px-28 px-4 sm:px-8 mainBg2 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((item) => (
            <div key={item.id} className="flex flex-col items-start">
              {/* Holographic Effect Wrapper */}
              <div className="holo-image relative w-full aspect-[4/3] rounded-4xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover rounded-4xl"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 text-lg font-semibold mainColor w-full">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
