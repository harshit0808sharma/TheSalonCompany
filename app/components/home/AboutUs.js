"use client";

import Image from "next/image";
import { FaCheck, FaUsers, FaPlay } from "react-icons/fa";
import image1 from "../../../public/assets/images/image4.jpeg";
import image2 from "../../../public/assets/images/image2.jpeg";

export default function AboutSection() {
    return (
        <section className="py-20 bg-[#fef9f9]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Images */}
                <div className="relative">
                    {/* Large Image */}
                    <div className="overflow-hidden">
                        <Image src={image1} alt="Doctor" className="w-96 h-auto object-cover rounded-4xl" />
                    </div>

                    {/* Small Overlapping Image */}
                    <div className="absolute -bottom-10 left-10 w-2/5 rounded-4xl overflow-hidden shadow-lg border-4 border-white">
                        <Image src={image2} alt="Doctor at work" className="w-full h-auto object-cover" />
                    </div>

                    {/* Circular Contact Badge */}
                    <div className="absolute top-10 -right-10 w-28 h-28 rounded-full bg-[#264D45] text-white flex items-center justify-center text-sm font-medium text-center">
                        <span className="rotate-[-20deg]">{"* Contact Us *"}</span>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-6">
                    <span className="text-[#264D45] font-medium">• About Us</span>
                    <h2 className="text-4xl font-bold leading-snug text-[#264D45]">
                        Why choose us for all your dermatology needs
                    </h2>
                    <p className="text-gray-600">
                        {"The Salon Company beckons you into a sanctuary where every detail is dedicated to your glow. From effortless hair artistry and rejuvenating beauty treatments to the precision of permanent makeup and nail extensions, our mission is to highlight your natural elegance."}

                        {"Our PMU Studio is where transformation begins—whether it’s perfectly sculpted brows, timeless eyeliner, or lips that whisper effortless charm. Beyond makeup, our luxury facials, massages, and body rituals are designed to refresh your skin, relax your mind, and restore your spirit."}

                        {"Here, beauty is more than a service—it’s an experience, a celebration of your most exquisite self."}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <FaCheck className="text-[#264D45]" /> Commitment to Excellence in Skin Health
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheck className="text-[#264D45]" /> State-of-the-Art Facility and Technology
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheck className="text-[#264D45]" /> Trusted by Thousands of Satisfied Patients
                        </li>
                    </ul>

                    {/* Buttons + Stats */}
                    <div className="flex items-center gap-6 mt-8 flex-wrap">
                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button className="bg-[#264D45] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1d3b35] transition">
                                About More →
                            </button>
                            <button className="border border-[#264D45] text-[#264D45] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#264D45] hover:text-white transition">
                                <FaPlay /> Play Session
                            </button>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-[#264D45] text-white rounded-2xl px-8 py-6 flex flex-col items-center shadow-md">
                            <FaUsers size={28} className="mb-2" />
                            <h3 className="text-3xl font-bold">29+</h3>
                            <p className="text-sm">Team Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
