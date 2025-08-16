"use client";

import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import treatmentImg from "../../../public/assets/images/image4.jpeg"; 

export default function HowWeWork() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-16 px-6 md:px-12 bg-[#fdf9f8]">
      {/* Left Side */}
      <div>
        <p className="text-sm text-[#214037] mb-2">How We work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#214037] leading-snug mb-4">
          {"How we work: a commitment to your skin health"}
        </h2>
        <p className="text-gray-600 mb-8">{"We’re dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you."}</p>

        {/* Steps */}
        <div className="space-y-6">
          {[
            {
              num: "01",
              title: "Personalized Consultation",
              desc: "This helps us create a customized treatment plan that aligns with your specific needs and expectations.",
            },
            {
              num: "02",
              title: "Tailored Treatment Plans",
              desc: "This helps us create a customized treatment plan that aligns with your specific needs and expectations.",
            },
            {
              num: "03",
              title: "Continuous Care & Follow-Up",
              desc: "This helps us create a customized treatment plan that aligns with your specific needs and expectations.",
            },
          ].map((step, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-[#214037]">
                <span className="text-3xl font-light">{step.num}</span>
                {step.title}
              </h3>
              <p className="text-gray-600 mt-1 ml-11">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side with Image & Overlay */}
      <div className="relative">
        <Image
          src={treatmentImg}
          alt="Skin treatment"
          className="rounded-2xl object-cover w-full h-[500px]"
        />

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#214037]/90 text-white rounded-b-2xl p-6">
          <p className="text-lg font-medium">{"Have Questions? We’re Here to Help You!"}</p>
          <div className="flex items-center gap-3 mt-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white">
              <FaPhone />
            </div>
            <p className="text-lg font-semibold">(123) 456 789</p>
          </div>
        </div>
      </div>
    </section>
  );
}
