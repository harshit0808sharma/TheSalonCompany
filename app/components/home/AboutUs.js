"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck, FaUsers, FaPlay } from "react-icons/fa";
import image1 from "../../../public/assets/images/image4.jpeg";
import image2 from "../../../public/assets/images/image2.jpeg";
import Stats from "../other/Stats";
import { GoDotFill } from "react-icons/go";
// import { FcContacts } from "react-icons/fc";

export default function AboutSection() {
    return (
        <section className="bg-[#fef9f9] py-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center bord">

                {/* Left Images */}
                <div className="relative">
                    {/* Large Image */}
                    <motion.div
                        className="overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image src={image1} alt="Doctor" className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-4xl" />
                    </motion.div>

                    {/* Small Overlapping Image */}
                    <motion.div
                        className="absolute -bottom-10 right-4 md:right-8 w-2/3 md:w-1/2 h-auto rounded-4xl overflow-hidden shadow-lg border-8 border-white"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image src={image2} alt="Doctor at work" className="w-full h-auto object-cover" />
                    </motion.div>

                    {/* Circular Contact Badge */}
                    <motion.div
                        className="absolute top-6 md:top-10 right-4 md:right-40 w-20 md:w-28 h-20 md:h-28 rounded-full bg-[#264D45] text-white flex items-center justify-center text-xs md:text-sm font-medium text-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                    >
                        <span className="rotate-[-20deg]">{"* Contact Us *"}</span>
                    </motion.div>
                </div>

                {/* Right Content */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2">
                        <GoDotFill className="text-teal-800" />
                        <span className="text-[#264D45] font-medium"> About Us</span>
                    </div>
                    <h2 className="text-4xl font-bold leading-snug text-[#264D45]">
                        Why choose us for all your dermatology needs
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        {"The Salon Company beckons you into a sanctuary where every detail is dedicated to your glow. From effortless hair artistry and rejuvenating beauty treatments to the precision of permanent makeup and nail extensions, our mission is to highlight your natural elegance."}

                        {" Our PMU Studio is where transformation begins—whether it’s perfectly sculpted brows, timeless eyeliner, or lips that whisper effortless charm. Beyond makeup, our luxury facials, massages, and body rituals are designed to refresh your skin, relax your mind, and restore your spirit."}

                        {" Here, beauty is more than a service—it’s an experience, a celebration of your most exquisite self."}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm md:text-base">
                            <FaCheck className="text-[#264D45]" /> Commitment to Excellence in Skin Health
                        </li>
                        <li className="flex items-center gap-3 text-sm md:text-base">
                            <FaCheck className="text-[#264D45]" /> State-of-the-Art Facility and Technology
                        </li>
                        <li className="flex items-center gap-3 text-sm md:text-base">
                            <FaCheck className="text-[#264D45]" /> Trusted by Thousands of Satisfied Patients
                        </li>
                    </ul>

                    {/* Buttons + Stats */}
                    <div className="flex items-center gap-6 mt-8 flex-wrap">
                        {/* Buttons */}
                        <div className="flex gap-4 flex-wrap">
                            <button className="bg-[#264D45] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1d3b35] transition text-sm md:text-base">
                                About More →
                            </button>
                            <button className="border border-[#264D45] text-[#264D45] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#264D45] hover:text-white transition text-sm md:text-base">
                                <FaPlay /> Play Session
                            </button>
                        </div>

                        {/* Stats Card */}
                        <motion.div
                            className="bg-[#264D45] text-white rounded-2xl px-8 py-6 flex flex-col items-center shadow-md"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <FaUsers size={28} className="mb-2" />
                            <h3 className="text-3xl font-bold">29+</h3>
                            <p className="text-sm">Team Members</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <hr className="my-5 w-1/2 mx-auto border-gray-300" />
            <Stats />
            <hr className="my-5 w-1/2 mx-auto border-gray-300" />

        </section>
    );
}
