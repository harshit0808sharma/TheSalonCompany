"use client";

import { FaFacebook, FaPhone, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import RunningText from "./other/RunningText";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import AnimateImageLeft from "./other/AnimateImageLeft";

export default function Footer() {
  const { theme } = useContext(SalonContext);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.trim()) {
      return "Email is required";
    }
    
    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }
    
    return "";
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError("");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const error = validateEmail(email);
    
    if (error) {
      setEmailError(error);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success(`Subscribed with: ${email}`);
      setEmail("");
      setEmailError("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <RunningText />
      <div className={`max-w-[1920px] m-auto p-0 md:p-5 mainBg2`}>
        <footer
          className={`text-white mainBg relative rounded-none md:rounded-4xl`}
        >
          <AnimateImageLeft />
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

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                  <div className="flex items-center bg-white rounded-lg overflow-hidden border border-white/20 w-full p-1">
                    <input
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email"
                      className={`flex-1 px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none ${
                        emailError ? 'border-red-500' : ''
                      }`}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center px-4 py-3 mainBg text-white hover:opacity-90 rounded-md transition-colors disabled:opacity-70"
                    >
                      <IoIosSend className="w-5 h-5" />
                    </button>
                  </div>

                  {emailError && (
                    <div className="text-red-400 text-sm">{emailError}</div>
                  )}
                </form>
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
              <p className="opacity-80 text-white text-md">
                © 2025 The Salon Company. All Rights Reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="opacity-80">Follow Us</span>
                <div className="flex space-x-4">
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
                      className={`w-10 h-10 flex items-center justify-center transition-colors mainColor bg-white rounded-lg`}
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