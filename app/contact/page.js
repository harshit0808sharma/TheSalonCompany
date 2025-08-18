'use client';
import React, { useState } from 'react';
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaClock, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import img from '../../public/assets/images/image5.jpeg';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import CommonHeading from '../components/other/CommonHeading';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Contact Us"} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Contact Image & Hours */}
            <motion.div variants={fadeUp} className="relative">
              <div className="bg-teal-700 rounded-4xl overflow-hidden relative">
                <Image 
                  src={img} 
                  alt="Dermatology consultation"
                  className="w-full h-[100%] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40 to-transparent"></div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <FaClock className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Opening hours</h3>
                    <p className="text-sm text-gray-600">Mon - Sat: 10:00 to 07:00 pm</p>
                    <p className="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} className='flex flex-col gap-6'>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">Get in touch with us</h2>
              <p className="text-gray-600 mb-8">
                {"Have questions or need assistance? Reach out to us for expert guidance, personalized solutions, and exceptional support. We're here to help!"}
              </p>
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input variants={fadeUp} type="text" name="firstName" placeholder="First Name"
                    value={formData.firstName} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <motion.input variants={fadeUp} type="text" name="lastName" placeholder="Last Name"
                    value={formData.lastName} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input variants={fadeUp} type="email" name="email" placeholder="E-mail Address"
                    value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <motion.input variants={fadeUp} type="tel" name="phone" placeholder="Phone No."
                    value={formData.phone} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <motion.textarea variants={fadeUp} name="message" placeholder="Write Message" rows={6}
                  value={formData.message} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                ></motion.textarea>

                <motion.button 
                  type="submit"
                  variants={fadeUp}
                  className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors font-medium"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div className="grid md:grid-cols-3 gap-6 mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { icon: <FaPhone className="w-6 h-6" />, title: 'Phone', lines: ['+91 123 456 789', '+91 123 456 987'] },
              { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: 'Address', lines: ['Lokaci H.Q. sector 117, Noida', 'CA 90001, USA'] },
              { icon: <FaEnvelope className="w-6 h-6" />, title: 'Email', lines: ['salon@gmail.com', 'thesaloncompany@gmail.com'] }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-teal-700 text-white p-6 rounded-2xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                {card.lines.map((line, i) => <p key={i} className="text-white/90">{line}</p>)}
              </motion.div>
            ))}
          </motion.div>

          {/* Map Section */}
          <motion.div className="mt-16 rounded-2xl overflow-hidden h-96 bg-gray-200 relative" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9041380763556!2d77.39281827528674!3d28.57264117569747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b5c46418751aef3%3A0x2d35829dafac334d!2sLokaci%20HQ!5e0!3m2!1sen!2sin!4v1755430508239!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* Company name section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-teal-800 mb-8">
              {"✱ THE SALON COMPANY"}
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
