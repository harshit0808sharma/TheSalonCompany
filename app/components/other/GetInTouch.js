"use client";

import React, { useContext, useState } from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { SalonContext } from '@/app/context/SalonContext';

import img from '../../../public/assets/images/image5.jpeg';

const GetInTouch = () => {
  const { theme } = useContext(SalonContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const contactCards = [
    { icon: <FaPhone className="w-6 h-6" />, title: 'Phone', lines: ['+91 123 456 789', '+91 123 456 987'] },
    { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: 'Address', lines: ['Lokaci H.Q. sector 117, Noida', 'CA 90001, USA'] },
    { icon: <FaEnvelope className="w-6 h-6" />, title: 'Email', lines: ['salon@gmail.com', 'thesaloncompany@gmail.com'] },
  ];

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = 'First name should only contain letters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = 'Last name should only contain letters';
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("Form Submitted:", formData);
      toast.success("Thank You for your message!");

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`mainBg2 max-w-[1920px] m-auto`}>
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Contact Image & Hours */}
          <motion.div variants={fadeUp} className="relative">
            <div className="rounded-4xl overflow-hidden relative holo-image">
              <Image
                src={img}
                alt="Salon services"
                className="w-full h-[100%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#214037]/90 via-[#214037]/40 to-transparent"></div>

              <div className={`absolute bottom-6 left-6 rounded-lg p-4 flex items-center space-x-3 ${theme ? "bg-gray-800/90" : "bg-white/90 backdrop-blur-sm"}`}>
                <div className={`${theme ? "bg-gray-700 text-teal-200" : "bg-teal-100 text-teal-700"} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <FaClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`${theme ? "text-white" : "text-gray-900"} font-semibold`}>Opening hours</h3>
                  <p className={`${theme ? "text-gray-300" : "text-gray-600"} text-sm`}>Mon - Sat: 10:00 to 07:00 pm</p>
                  <p className={`${theme ? "text-gray-300" : "text-gray-600"} text-sm`}>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeUp} className='flex flex-col gap-6'>
            <h2 className={`text-4xl md:text-5xl font-medium mb-4 ${theme ? "text-white" : "text-gray-900"}`}>
              Get in touch with us
            </h2>
            <p className={`${theme ? "text-gray-300" : "text-gray-600"} mb-8`}>
              {"Have questions or need assistance? Reach out to us for expert guidance, personalized solutions, and exceptional support. We're here to help!"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} className="flex flex-col">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className={`border bg-white border-gray-200 w-full p-4 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>}
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-col">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className={`border bg-white border-gray-200 w-full p-4 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>}
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail Address"
                    className={`border bg-white border-gray-200 w-full p-4 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-col">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No."
                    className={`border border-gray-200 bg-white w-full p-4 rounded-2xl focus:ring-2 focus:ring-teal-700 focus:border-transparent ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="flex flex-col">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Message"
                  rows={6}
                  className={`border bg-white border-gray-200 w-full p-4 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                variants={fadeUp}
                className="mainBg bg-white text-white px-8 py-3 rounded-full hover:bg-teal-800 transition-colors font-medium disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {contactCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`mainBg text-white p-6 rounded-4xl flex items-center gap-5`}
            >
              <div className={`text-white bg-white mainColor w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                {card.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-white/90">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        className="w-full rounded-4xl overflow-hidden lg:h-[80vh] relative px-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9041380763556!2d77.39281827528674!3d28.57264117569747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b5c46418751aef3%3A0x2d35829dafac334d!2sLokaci%20HQ!5e0!3m2!1sen!2sin!4v1755430508239!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-4xl"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default GetInTouch;