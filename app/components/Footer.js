"use client";

import { FaFacebook, FaPhone, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import RunningText from "./other/RunningText";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import AnimateImageLeft from "./other/AnimateImageLeft";

export default function Footer() {
  const { theme } = useContext(SalonContext); 

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  return (
    <>
      <RunningText />
      <div className={`w-full p-0 md:p-5 mainBg2`}>
        <footer
          className={`text-white mainBg relative rounded-none md:rounded-4xl`}
        >
          <AnimateImageLeft/>
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-8 h-8 ${theme ? "bg-gray-800 text-white" : "bg-white text-teal-800"
                      } rounded-full flex items-center justify-center`}
                  >
                    <span className="text-sm font-bold">S</span>
                  </div>
                  <span className="ml-2 text-xl font-semibold">
                    The Salon Company
                  </span>
                </div>
                <p className="opacity-80 mb-6">
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
                          className={`flex-1 px-3 py-2 ${theme
                              ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
                              : "bg-white/10 border-white/20 text-white placeholder-white/60"
                            } border rounded-lg`}
                        />
                        <button
                          type="submit"
                          className={`${theme
                              ? "bg-gray-700 hover:bg-gray-600"
                              : "bg-teal-600 hover:bg-teal-500"
                            } p-2 rounded-lg transition-colors`}
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
                    <span className="opacity-80">Book Your Appointment</span>
                  </div>
                  <p className="opacity-80">(987) 654-3210</p>
                  <div className="flex items-center space-x-2">
                    <FaPhone className="w-4 h-4" />
                    <span className="opacity-80">Customer Support</span>
                  </div>
                  <p className="opacity-80">(987) 654-3210</p>
                </div>
              </div>

              {/* Get In Touch */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <div>
                    <p className="opacity-80">Salon Location</p>
                    <p className="opacity-80">GT-08, Sector 117, </p>
                    <p className="opacity-80">Noida</p>
                  </div>
                  <div>
                    <p className="opacity-80">Email</p>
                    <p className="opacity-80">bookings@lokaci.com</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {["Home", "About Us", "Our Services", "Book Appointment"].map(
                    (link, i) => (
                      <Link
                        key={i}
                        href={
                          link === "Home"
                            ? "/"
                            : `/${link.toLowerCase().replace(" ", "-")}`
                        }
                        className="block opacity-80 hover:opacity-100 transition-colors"
                      >
                        {link}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div
              className={`mt-12 pt-8 flex flex-col md:flex-row justify-between items-center border-t ${theme ? "border-gray-700" : "border-white/20"
                }`}
            >
              <p className="opacity-60 text-sm">
                © 2025 The Salon Company. All Rights Reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="opacity-80">Follow Us</span>
                <div className="flex space-x-3">
                  {[
                    {
                      href: "https://x.com/lokaciofficial",
                      icon: <FaTwitter className="w-6 h-6" />,
                    },
                    {
                      href: "https://www.facebook.com/LokaciOfficial",
                      icon: <FaFacebook className="w-6 h-6" />,
                    },
                    {
                      href: "https://www.instagram.com/lokaciofficial?igsh=Z3phaXBiNnZrd2Fy",
                      icon: <FaInstagram className="w-6 h-6" />,
                    },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${theme
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-white/10 hover:bg-white/20"
                        }`}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
