"use client";

import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CommonHeading from "../components/other/CommonHeading";
import OurBenefits from "../components/home/OurBenefits";
import Testimonials from "../components/home/Testimonials";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import ContactInfo from "../components/other/ContactInfo";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { appointmentValidation } from "../validation/appointmentValidation";
export default function BookAppointment() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Appointment Booking"} />

      {/* Appointment Section */}
      <section className="bg-[#faf7f7] py-16 px-4 sm:px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Section Header */}
          <div className="flex justify-center items-center gap-2">
            <GoDotFill className="text-teal-800" />
            <span className="text-[#264D45] font-medium"> Appointment Booking</span>
          </div>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-teal-900 mb-4"
          >
            Schedule your appointment
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base"
          >
            {"It’s time to take control of your skin health! Booking your"}
            appointment is easy and fast. Choose a time that works for you and our
            dermatology experts will be ready.
          </motion.p>

          <Formik
            initialValues={{
              fullName: "",
              phone: "",
              email: "",
              service: "",
              date: "",
              time: "",
              message: "",
            }}
            validationSchema={appointmentValidation}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              toast.success("Appointment request submitted!");
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <motion.div variants={fadeUp}>
                <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                  {/* Full Name */}
                  <div>
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Full Name Here"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <ErrorMessage name="fullName" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Phone */}
                  <div>
                    <Field
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <ErrorMessage name="phone" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Service */}
                  <div>
                    <Field
                      as="select"
                      name="service"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="">Select Service</option>
                      <option value="Facial">Facial</option>
                      <option value="Hair Treatment">Hair Treatment</option>
                      <option value="Skin Care">Skin Care</option>
                      <option value="Laser Therapy">Laser Therapy</option>
                    </Field>
                    <ErrorMessage name="service" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Date */}
                  <div>
                    <Field
                      type="date"
                      name="date"
                      min={new Date().toISOString().split("T")[0]} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <ErrorMessage name="date" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Time */}
                  <div>
                    <Field
                      as="select"
                      name="time"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="">Choose Time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </Field>
                    <ErrorMessage name="time" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Description here about service or your problem..."
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <ErrorMessage name="message" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Button */}
                  <div className="md:col-span-2 flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-teal-800 text-white px-8 py-3 rounded-lg hover:bg-teal-900 transition shadow-md"
                    >
                      {isSubmitting ? "Submitting..." : "Send Message"}
                    </button>
                  </div>
                </Form>
              </motion.div>
            )}
          </Formik>
        </motion.div>
      </section>
      <ContactInfo />
      <OurBenefits />
      <Testimonials />
      <Footer />
    </>
  );
}
