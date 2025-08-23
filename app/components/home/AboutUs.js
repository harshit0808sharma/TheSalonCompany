"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaPlay, FaHeart, FaStar } from "react-icons/fa";
import image1 from "../../../public/assets/images/blog7.jpg";
import image2 from "../../../public/assets/images/image2.jpeg";
import { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Heading from "../other/Heading";
import { toast } from "react-toastify";

export default function AboutSection() {
    const [teamCount, setTeamCount] = useState(0);
    const targetCount = 29;

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current += 1;
            setTeamCount(current);
            if (current >= targetCount) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        toast.info("Oops! This video is coming soon. Check back later!")
    }

    return (
        <section className="bg-[#fef9f9] py-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Images */}
                <div className="relative">
                    <motion.div
                        className="overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src={image1}
                            alt="Doctor"
                            className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-4xl"
                        />
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-10 right-4 md:right-8 w-2/3 md:w-1/2 h-auto rounded-4xl overflow-hidden shadow-lg border-8 border-white"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src={image2}
                            alt="Doctor at work"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>

                    <motion.a
                        href="/contact"
                        initial={{ rotate: -90, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute top-6 md:top-10 right-4 md:right-20 bg-[#214037] text-white w-36 h-36 flex items-center gap-2 justify-center rounded-full border-8 border-white text-sm text-center font-medium shadow-lg spin-slow"
                    >
                        <span className="leading-tight">Contact Us </span>
                        <FaArrowRight />
                    </motion.a>
                </div>

                {/* Right Content */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Heading */}
                    <div className="flex items-center gap-2">
                        <GoDotFill className="text-teal-800" />
                        <span className="text-[#264D45] font-medium"> About Us</span>
                    </div>
                    <Heading Text={"The Experience at The Salon Company"} />
                    <p className="text-gray-600 text-sm md:text-base">
                        Step into The Salon Company, where luxury meets precision. We aren’t
                        just a salon—we’re a sanctuary designed for confidence,
                        self-expression, and renewal.
                    </p>

                    {/* Philosophy */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#264D45]">
                        <h3 className="text-xl font-semibold text-[#264D45] mb-3 flex items-center gap-2">
                            <FaHeart className="text-pink-500" /> Our Philosophy
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                            <li className="flex items-center gap-2">
                                <FaStar className="text-yellow-500" /> Beauty should feel effortless, not exhausting.
                            </li>
                            <li className="flex items-center gap-2">
                                <FaStar className="text-yellow-500" /> Confidence should last beyond the mirror.
                            </li>
                            <li className="flex items-center gap-2">
                                <FaStar className="text-yellow-500" /> Every client deserves a touch of luxury and artistry.
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base">
                        Whether you’re looking for permanent makeup that saves you time,
                        beauty treatments that rejuvenate your skin, or lashes and nails
                        that add a finishing touch—we’ve mastered the balance between
                        artistry and care. At The Salon Company, every visit is a
                        celebration of your most radiant self.
                    </p>

                    {/* Buttons + Team Count */}
                    <div className="flex items-center gap-6 mt-8 flex-wrap">
                        <div className="flex gap-4 flex-wrap">
                            <Link
                                href="/about"
                                className="bg-[#264D45] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1d3b35] transition text-sm md:text-base"
                            >
                                <span> About More</span> <FaArrowRightLong />
                            </Link>
                            <button onClick={handleClick} className="border border-[#264D45] text-[#264D45] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#264D45] hover:text-white transition text-sm md:text-base">
                                <FaPlay /> Play Session
                            </button>
                        </div>

                        <motion.div
                            className="bg-[#264D45] text-white rounded-2xl px-8 py-6 flex gap-2 flex-col items-center shadow-md"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <TbUsers size={50} className="mb-2" />
                            <h3 className="text-5xl font-bold">{teamCount}+</h3>
                            <p className="text-lg">Team Members</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
