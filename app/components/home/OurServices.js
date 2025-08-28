"use client";
import React, { useState, useEffect, useContext } from "react";
import Heading from "../other/Heading";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { SalonContext } from "@/app/context/SalonContext";
import AnimateImageLeft from "../other/AnimateImageLeft";

const Services = () => {
  const { servicesData } = useContext(SalonContext)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);


  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % (servicesData.length - cardsPerView + 1)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerView, servicesData.length]);

  return (
    <div className="w-full px-0 md:px-5 mainBg2 py-16">
      <div className="relative px-6 md:px-20 py-16 md:py-28 mainBg1 rounded-none md:rounded-4xl mx-auto">
        <AnimateImageLeft/>
        {/* Header */}
        <div className="flex flex-col gap-4 items-center mb-10">
          <div className="flex items-center justify-center gap-2">
            <GoDotFill className="mainColor" />
            <span className="font-medium text-sm sm:text-base mainColor">
              Our Services
            </span>
          </div>
          <Heading Text={"Comprehensive dermatology services for every skin need"} />
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto font-normal text-center">
            From preventive care to specialized treatments, our wide range of
            services is designed to support your health at every stage.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden mb-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-0 md:px-4"
              >
                <div
                  className="relative h-96 rounded-4xl overflow-hidden shadow-lg cursor-pointer group holo-image"
                  onClick={() => goToSlide(index)}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.img})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 gap-5 group">
                    <div className="flex">
                      <div className="w-16 h-16 bg-white text-teal-900 
                        group-hover:bg-teal-900 group-hover:text-white 
                        bg-opacity-20 backdrop-blur-sm rounded-2xl 
                        flex items-center justify-center transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>

                    <div className="text-white transition-colors duration-300">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {Array.from({ length: servicesData.length - cardsPerView + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "mainBg w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 text-lg">
            Professional electrical solutions for every need.{" "}
            <Link href="/contact" className="mainColor font-semibold underline">
              Contact Us Today!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
