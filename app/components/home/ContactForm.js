"use client";

import { motion } from "framer-motion";
import Heading from "../other/Heading";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SalonContext } from "@/app/context/SalonContext";
import { GoDotFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import AnimateImageLeft from "../other/AnimateImageLeft";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(SalonContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name should only contain letters';
    }

    const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    if (formData.message.trim() && formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters if provided';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("Form Submitted:", formData);
      toast.success("🎉 Appointment booked successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      toast.error("❌ Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1920px] m-auto p-0 md:p-5 mainBg2">
      <section className="py-10 sm:py-16 md:py-20 rounded-none md:rounded-4xl px-4 md:px-12 transition-colors duration-300 mainBg1 relative">
        <AnimateImageLeft />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pb-8 sm:pb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 mainBg rounded-2xl flex justify-center items-center">
                  <FaLocationDot className="text-white" size={22} />
                </div>
                <div>
                  <p>Lokaci H.Q,</p>
                  <p>Sector 117, Noida</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 mainBg rounded-2xl flex justify-center items-center">
                  <FaPhone className="text-white" size={22} />
                </div>
                <div>
                  <p>{"(123) 456 789"}</p>
                  <p>{"(987) 654 321"}</p>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9041380763556!2d77.39281827528674!3d28.57264117569747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b5c46418751aef3%3A0x2d35829dafac334d!2sLokaci%20HQ!5e0!3m2!1sen!2sin!4v1755757777309!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl sm:rounded-3xl lg:rounded-4xl relative z-10"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full mt-36 sm:mt-20 md:mt-16 lg:mt-0 lg:w-3/5 flex flex-col gap-6 sm:gap-8"
          >
            <div className="flex items-center gap-2">
              <GoDotFill className="mainColor" />
              <span className="font-medium text-sm sm:text-base mainColor">
                Book An Appointment
              </span>
            </div>
            <Heading Text={"Book your appointment today!"} />
            <p
              className={`mb-6 text-sm sm:text-base ${theme ? "text-gray-300" : "text-gray-600"
                }`}
            >
              Get the perfect look you deserve. Schedule your salon visit and
              let our experts take care of your hair, skin, and beauty needs.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 font-medium">
              <div>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-black placeholder-gray-400 focus:ring-1 focus:ring-[#214037] ${errors.name ? 'ring-1 ring-red-500' : ''
                    }`}
                />
                {errors.name && (
                  <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-black placeholder-gray-400 focus:ring-1 focus:ring-[#214037] ${errors.phone ? 'ring-1 ring-red-500' : ''
                    }`}
                />
                {errors.phone && (
                  <div className="text-red-400 text-sm mt-1">{errors.phone}</div>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-black placeholder-gray-400 focus:ring-1 focus:ring-[#214037] ${errors.email ? 'ring-1 ring-red-500' : ''
                    }`}
                />
                {errors.email && (
                  <div className="text-red-400 text-sm mt-1">{errors.email}</div>
                )}
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-gray-400 focus:ring-1 focus:ring-[#214037] ${errors.service ? 'ring-1 ring-red-500' : ''
                    }`}
                >
                  <option value="">Select Service</option>
                  <option value="Hair Styling">Hair Styling</option>
                  <option value="Facial & Skin Care">Facial & Skin Care</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                </select>
                {errors.service && (
                  <div className="text-red-400 text-sm mt-1">{errors.service}</div>
                )}
              </div>

              {/* Date */}
              <div>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={`p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-gray-400 focus:ring-1 focus:ring-[#214037] ${errors.date ? 'ring-1 ring-red-500' : ''
                    }`}
                />
                {errors.date && (
                  <div className="text-red-400 text-sm mt-1">{errors.date}</div>
                )}
              </div>

              {/* Time */}
              <div>
                <input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-gray-400 focus:ring-1 focus:ring-[#214037] ${errors.time ? 'ring-1 ring-red-500' : ''
                    }`}
                />
                {errors.time && (
                  <div className="text-red-400 text-sm mt-1">{errors.time}</div>
                )}
              </div>

              {/* Message */}
              <div className="col-span-1 sm:col-span-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your preferred style or service..."
                  className={`p-3 sm:p-4 rounded-lg outline-none h-28 sm:h-32 w-full bg-white text-black placeholder-gray-400 focus:ring-1 focus:ring-[#214037] ${errors.message ? 'ring-1 ring-red-500' : ''
                    }`}
                />
                {errors.message && (
                  <div className="text-red-400 text-sm mt-1">{errors.message}</div>
                )}
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 flex justify-start">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition w-auto mainBg text-white hover:bg-[#2d6d5f] disabled:opacity-70 text-left"
                >
                  {loading ? "Booking..." : "Book Appointment"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}