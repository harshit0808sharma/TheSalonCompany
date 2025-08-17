"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCube, FaGlobe, FaRegSmile } from "react-icons/fa";

import service1 from '../../../public/assets/images/image4.jpeg';
import service2 from "../../../public/assets/images/image5.jpeg";
import service3 from "../../../public/assets/images/image6.jpeg";

const services = [
  {
    title: "Dermal Fillers",
    desc: "From preventive care to specialized treatments, our wide range.",
    icon: <FaCube className="text-2xl" />,
    img: service1,
  },
  {
    title: "Chemical Peels",
    desc: "From preventive care to specialized treatments, our wide range.",
    icon: <FaGlobe className="text-2xl" />,
    img: service2,
  },
  {
    title: "Acne Treatment",
    desc: "From preventive care to specialized treatments, our wide range.",
    icon: <FaRegSmile className="text-2xl" />,
    img: service3,
  },
];

export default function Services() {
  return (
    <section className=" bg-[#f9f6f7] rounded-4xl">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto px-4 pb-10">
        <p className="text-sm text-gray-500">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#214037]">
          Comprehensive dermatology services <br /> for every skin need
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          From preventive care to specialized treatments, our wide range of
          services is designed to support your health at every stage.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 px-4 md:px-16 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Background Image */}
            <Image
              src={service.img}
              alt={service.title}
              className="object-cover w-full h-[300px] md:h-[400px] group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 text-white">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-lg inline-block mb-3">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-200 mt-2">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
