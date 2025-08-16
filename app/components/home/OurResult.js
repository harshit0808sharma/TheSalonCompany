"use client";

import React from "react";
import Image from "next/image";
import ReactCompareImage from "react-compare-image";

import before1 from "../../../public/assets/images/image7.jpg"; 
import after1 from "../../../public/assets/images/image6.jpg"; 
import before2 from "../../../public/assets/images/image7.jpg"; 
import after2 from "../../../public/assets/images/image6.jpg"; 

export default function BeforeAfter() {
  return (
    <section className="bg-[#fefbfb] py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm mb-2">• Our Result</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-[#214037]">
          Before & after: witness the power of dermatology
        </h2>
        <p className="text-gray-600">
          {"See the remarkable transformations for yourself—our ‘Before & After’ gallery highlights"}
          {"the powerful impact of dermatological treatments."}
        </p>
      </div>

      {/* Comparison Gallery */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <ReactCompareImage
            leftImage={before1.src}
            rightImage={after1.src}
            sliderLineColor="#214037"
            handle={<div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-[#214037]">↔</div>}
          />
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <ReactCompareImage
            leftImage={before2.src}
            rightImage={after2.src}
            sliderLineColor="#214037"
            handle={<div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-[#214037]">↔</div>}
          />
        </div>
      </div>
    </section>
  );
}
