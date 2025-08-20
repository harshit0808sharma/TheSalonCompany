"use client";

import { useState } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CommonHeading from "../components/other/CommonHeading";
import OurBenefits from "../components/home/OurBenefits";
import Testimonials from "../components/home/Testimonials";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

export default function BookAppointment() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Appointment request submitted!");
    };

    // Animations
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25 },
        },
    };

    return (
        <>
            <Navbar />
            <CommonHeading Text={"Appointment Booking"} />

            {/* Appointment Section */}
            <section className="bg-[#faf7f7] py-16 px-4 sm:px-6 md:px-12">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    {/* Section Header */}
                    <div className="flex justify-center items-center gap-2">
                        <GoDotFill className="text-teal-800" />
                        <span className="text-[#264D45] font-medium"> Appointment Booking</span>
                    </div>
                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-teal-900 mb-4"
                    >
                        Schedule your appointment
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base"
                    >
                        {"It’s time to take control of your skin health! Booking your"}
                        appointment is easy and fast. Choose a time that works for you and
                        our dermatology experts will be ready.
                    </motion.p>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={fadeUp}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
                    >
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name Here"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                            required
                        />

                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                            required
                        >
                            <option value="">Select Service</option>
                            <option value="Facial">Facial</option>
                            <option value="Hair Treatment">Hair Treatment</option>
                            <option value="Skin Care">Skin Care</option>
                            <option value="Laser Therapy">Laser Therapy</option>
                        </select>

                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                            required
                        />

                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                            required
                        >
                            <option value="">Choose Time</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="02:00 PM">02:00 PM</option>
                            <option value="04:00 PM">04:00 PM</option>
                        </select>

                        <textarea
                            name="message"
                            placeholder="Description here about service or your problem..."
                            value={formData.message}
                            onChange={handleChange}
                            className="md:col-span-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                            rows="4"
                        />

                        <div className="md:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="bg-teal-800 text-white px-8 py-3 rounded-lg hover:bg-teal-900 transition shadow-md"
                            >
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </motion.div>
            </section>

            {/* Contact Info Section */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 px-4 sm:px-8 md:px-10 text-black gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
            >
                {[
                    {
                        icon: <FaPhone className="w-6 h-6" />,
                        title: "Contact Us",
                        lines: ["salon@gmail.com", "+91 123 456 987"],
                    },
                    {
                        icon: <FaMailBulk className="w-6 h-6" />,
                        title: "Location",
                        lines: ["Lokaci H.Q. sector 117, Noida", "Uttar Pradesh, India"],
                    },
                    {
                        icon: <FaLocationPin className="w-6 h-6" />,
                        title: "Working Hours",
                        lines: [
                            "Monday - Friday : 9:00 am to 6:00 pm",
                            "Saturday : 11:00 am to 5pm",
                        ],
                    },
                ].map((card, idx) => (
                    <motion.div
                        key={idx}
                        variants={fadeUp}
                        className="bg-white text-teal-800 p-6 rounded-xl shadow-md flex flex-col items-start"
                    >
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                            {card.icon}
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            {card.title}
                        </h3>
                        {card.lines.map((line, i) => (
                            <p key={i} className="text-black/80 text-sm md:text-base">
                                {line}
                            </p>
                        ))}
                    </motion.div>
                ))}
            </motion.div>

            <OurBenefits />
            <Testimonials />
            <Footer />
        </>
    );
}
