'use client'
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const HomeImage = () => {

    return (
        <>
            <div className="mainBg1 max-w-[1920px] m-auto px-0 md:px-5 pb-10">
                {/* Hero Section */}
                <section className="relative py-36 overflow-hidden rounded-4xl">
                    <Image
                        src='/assets/images/salon-home-image.jpg'
                        alt="Skincare treatment"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />
                    <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl mx-auto"
                        >
                            <h1 className={`text-4xl md:text-7xl font-medium leading-tight text-white`}>
                                Comprehensive care <br />
                                for your skin&apos;s health <br />
                                and beauty
                            </h1>
                            <p className={`mt-6 text-lg font-light text-gray-200`}>
                                At Logoipsum we believe in creating digital solutions that drive
                                real-world impact. <br />
                                From creative strategies to cutting-edge.
                            </p>
                            <Link
                                href="/services"
                                className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-white rounded-full group px-6 py-3 mt-8"
                            >
                                <span className="absolute inset-0 w-0 bg-teal-800 transition-all duration-500 ease-out group-hover:w-full"></span>
                                <span className="relative flex items-center text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-white">
                                    View Our Services
                                    <FaArrowRight className="ml-2 w-5 h-5" />
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </section>
                <ContactInfo />
            </div>
        </>
    )
}

export default HomeImage;