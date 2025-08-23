"use client";

import { FaFacebook, FaPhone, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import RunningText from "./other/RunningText";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function Footer() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  return (
    <>
      <RunningText />
      <footer className="bg-teal-800 text-white md:rounded-4xl md:m-5 mt-5">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-teal-800 text-sm font-bold">S</span>
                </div>
                <span className="ml-2 text-xl font-semibold">
                  The Salon Company
                </span>
              </div>
              <p className="text-white/80 mb-6">
                Experience luxury grooming and beauty care with expert stylists,
                premium products, and a relaxing atmosphere.
              </p>

              {/* Subscription Form */}
              <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  toast.success(`Subscribed with: ${values.email}`);
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className={`flex-1 px-3 py-2 bg-white/10 border rounded-lg text-white placeholder-white/60 
                        ${errors.email && touched.email ? "border-red-500" : "border-white/20"}`}
                      />
                      <button
                        type="submit"
                        className="bg-teal-600 p-2 rounded-lg hover:bg-teal-500 transition-colors"
                      >
                        <IoIosSend className="w-5 h-5" />
                      </button>
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-400 text-sm"
                    />
                  </Form>
                )}
              </Formik>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <FaPhone className="w-4 h-4" />
                  <span className="text-white/80">Book Your Appointment</span>
                </div>
                <p className="text-white/80">(987) 654-3210</p>
                <div className="flex items-center space-x-2">
                  <FaPhone className="w-4 h-4" />
                  <span className="text-white/80">Customer Support</span>
                </div>
                <p className="text-white/80">(987) 654-3210</p>
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-white/80">Salon Location</p>
                  <p className="text-white/80">GT-08, Sector 117, </p>
                  <p className="text-white/80">Noida</p>
                </div>
                <div>
                  <p className="text-white/80">Email</p>
                  <p className="text-white/80">bookings@lokaci.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/book-appointment"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 The Salon Company. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-white/80">Follow Us</span>
              <div className="flex space-x-3">
                <Link
                  href="https://x.com/lokaciofficial"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.facebook.com/LokaciOfficial"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaFacebook className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/lokaciofficial?igsh=Z3phaXBiNnZrd2Fy"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
