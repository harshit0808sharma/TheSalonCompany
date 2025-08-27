"use client";

import { motion } from "framer-motion";
import Heading from "../other/Heading";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "@/app/validation/contactSchema";
import { SalonContext } from "@/app/context/SalonContext";
import { GoDotFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import AnimateImageLeft from "../other/AnimateImageLeft";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(SalonContext);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      console.log("Form Submitted:", values);
      toast.success("🎉 Appointment booked successfully!");
      resetForm();
    } catch (error) {
      toast.error("❌ Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-0 md:p-5 mainBg2">
      <section className="py-10 sm:py-16 md:py-20 rounded-none md:rounded-4xl px-4 md:px-12 transition-colors duration-300 mainBg1 relative">
        <AnimateImageLeft/>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Side (Map) */}
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

          {/* Right Side - Contact Form */}
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
              className={`mb-6 text-sm sm:text-base ${
                theme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Get the perfect look you deserve. Schedule your salon visit and
              let our experts take care of your hair, skin, and beauty needs.
            </p>

            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                service: "",
                date: "",
                time: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 font-medium">
                  {/* Full Name */}
                  <div>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      className="p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-[#214037]"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Field
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                      className="p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-[#214037]"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-[#214037]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <Field
                      as="select"
                      name="service"
                      className="p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-gray-400 focus:ring-2 focus:ring-[#214037]"
                    >
                      <option value="">Select Service</option>
                      <option>Hair Styling</option>
                      <option>Facial & Skin Care</option>
                      <option>Makeup</option>
                      <option>Manicure & Pedicure</option>
                    </Field>
                    <ErrorMessage
                      name="service"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <Field
                      name="date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-gray-400 focus:ring-2 focus:ring-[#214037]"
                    />
                    <ErrorMessage
                      name="date"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <Field
                      name="time"
                      type="time"
                      className="p-3 sm:p-4 rounded-lg outline-none w-full bg-white text-gray-400 focus:ring-2 focus:ring-[#214037]"
                    />
                    <ErrorMessage
                      name="time"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-span-1 sm:col-span-2">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Tell us more about your preferred style or service..."
                      className="p-3 sm:p-4 rounded-lg outline-none h-28 sm:h-32 w-full bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-[#214037]"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Submit */}
                  <div className="sm:col-span-2 flex justify-start">
                    <button
                      type="submit"
                      disabled={loading || isSubmitting}
                      className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition w-auto mainBg text-white hover:bg-[#2d6d5f] disabled:opacity-70 text-left"
                    >
                      {loading ? "Booking..." : "Book Appointment"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
