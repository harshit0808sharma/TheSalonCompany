"use client";

import { motion } from "framer-motion";
import Heading from "../other/Heading";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "@/app/validation/contactSchema";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);


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
    <section className="bg-[#faf3f3] py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-4xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9041380763556!2d77.39281827528674!3d28.57264117569747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b5c46418751aef3%3A0x2d35829dafac334d!2sLokaci%20HQ!5e0!3m2!1sen!2sin!4v1755757777309!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Heading Text={"Book your appointment today!"} />
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Get the perfect look you deserve. Schedule your salon visit and let our
            experts take care of your hair, skin, and beauty needs.
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
              <Form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none w-full"
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
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none w-full"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Service */}
                <div>
                  <Field
                    as="select"
                    name="service"
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none w-full"
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
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Date */}
                <div>
                  <Field
                    name="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]} 
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none w-full"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Time */}
                <div>
                  <Field
                    name="time"
                    type="time"
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none w-full"
                  />
                  <ErrorMessage
                    name="time"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Message */}
                <div className="col-span-1 sm:col-span-2">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Tell us more about your preferred style or service..."
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#214037] outline-none h-28 w-full"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || isSubmitting}
                  className="col-span-1 sm:col-span-2 bg-[#214037] text-white px-5 py-3 rounded-full font-medium hover:bg-[#2d6d5f] transition w-full disabled:opacity-70"
                >
                  {loading ? "Booking..." : "Book Appointment"}
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </section>
  );
}
