'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaCheck } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

import salonImg from '../../../public/assets/images/salon.jpg';
import Heading from '../other/Heading';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Expert Artists',
      desc: 'Certified professionals with years of experience delivering flawless results.',
    },
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Luxury Experience',
      desc: 'A space designed to pamper, relax, and delight you every visit.',
    },
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Personalized Care',
      desc: 'Every service is customized to your unique needs and style.',
    },
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Premium Products',
      desc: 'Only the finest pigments, tools, and techniques for lasting results.',
    },
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Results That Last',
      desc: 'Flawless beauty that stays from morning to night.',
    },
  ];

  return (
    <section className="py-16 bg-[#fdf8f9]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <GoDotFill className="text-teal-800" />
            <span className="text-[#264D45] font-medium">Why Choose The Salon Company?</span>
          </div>
          <Heading Text={" Trust Builders – Your Beauty, Our Expertise"}/>
          <p className="text-gray-600 mb-10 text-sm md:text-base">
            Because you deserve more than just a salon—you deserve The Salon Company.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="p-3 bg-[#214037]/5 rounded-lg text-[#214037] flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#214037]">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
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
