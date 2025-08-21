'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Header";
import CommonHeading from "../components/other/CommonHeading";
import Footer from "../components/Footer";
import { useContext } from "react";
import { SalonContext } from "../context/SalonContext";
import { GoDotFill } from "react-icons/go";


export default function Testimonials() {
    const { testimonials } = useContext(SalonContext)
    return (
        <>
            <Navbar />
            <CommonHeading Text={"Testimonials"} />
            <section className="bg-white py-16 px-4 sm:px-6 md:px-12 mx-0 md:mx-5 md:rounded-4xl my-5">
                {/* Heading */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12 text-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center items-center gap-2">
                        <GoDotFill className="text-teal-800" />
                        <span className="text-teal-800 font-medium">Testimonials</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                       Real experiences. Real transformations. Real confidence.
                    </h2>
                    <p className="text-black text-base md:text-lg">
                        Hear from our satisfied clients about their transformations with The Salon Company. Their stories reflect confidence, luxury, and exceptional results.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <p className="text-gray-700 mb-6 leading-relaxed">“{t.text}”</p>
                            <div className="flex items-center gap-3 mt-auto">
                                <Image
                                    src={t.avatar}
                                    alt={t.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-black">{t.name}</p>
                                    <p className="text-gray-600 text-sm">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
            <Footer />
        </>
    );
}
