'use client'

import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

const ServiceComponent = () => {
    const { servicesData } = useContext(SalonContext);

    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-20 lg:px-28 mainBg2 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service) => (
                    <div key={service.id} className="w-full flex-shrink-0 px-4">
                        <div className="relative h-96 rounded-4xl overflow-hidden shadow-lg cursor-pointer group">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${service.img})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40 group-hover:from-[#214037]/60 group-hover:via-[#214037]/20 transition-all duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 gap-5">
                                <div className="flex">
                                    <div
                                        className="w-16 h-16 bg-white text-teal-900 
                               group-hover:bg-teal-900 group-hover:text-white 
                               bg-opacity-20 backdrop-blur-sm rounded-2xl 
                               flex items-center justify-center transition-colors duration-300"
                                    >
                                        {service.icon}
                                    </div>
                                </div>

                                <div className="text-white transition-colors duration-300">
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceComponent;
