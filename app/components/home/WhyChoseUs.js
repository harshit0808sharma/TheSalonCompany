'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GoDotFill } from 'react-icons/go';

import salonImg from '../../../public/assets/images/salon.jpg';
import Heading from '../other/Heading';
import { useContext } from 'react';
import { SalonContext } from '@/app/context/SalonContext';

export default function WhyChooseUs() {
  const { features, theme } = useContext(SalonContext);

  return (
    <section
      className={`py-16 transition-colors duration-300 
        ${theme ? "bg-gray-900 text-white" : "bg-[#fdf8f9] text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <GoDotFill className={theme ? "text-teal-400" : "text-teal-800"} />
            <span className={`font-medium ${theme ? "text-teal-400" : "text-[#264D45]"}`}>
              Why Choose?
            </span>
          </div>

          <Heading Text={" Trust Builders – Your Beauty, Our Expertise"} />

          <p className={`mb-10 text-sm md:text-base 
            ${theme ? "text-gray-300" : "text-gray-600"}`}>
            Because you deserve more than just a salon—you deserve The Salon Company.
          </p>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className={`p-3 rounded-lg flex-shrink-0 transition
                    ${theme ? "bg-teal-600/20 text-teal-400" : "bg-[#214037]/5 text-[#214037]"}`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-semibold 
                    ${theme ? "text-white" : "text-[#214037]"}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm mt-1 
                    ${theme ? "text-gray-300" : "text-gray-600"}`}>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={salonImg}
            alt="Salon Experience"
            className="rounded-2xl object-cover shadow-lg w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
