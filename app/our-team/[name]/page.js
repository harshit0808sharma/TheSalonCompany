"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Header";
import CommonHeading from "@/app/components/other/CommonHeading";
import GetInTouch from "@/app/components/other/GetInTouch";
import React, { useContext } from "react";
import { useParams } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { SalonContext } from "@/app/context/SalonContext";
import Image from "next/image";

export default function OurTeamDetails() {
      const { teamMembersData } = useContext(SalonContext)
    
  const params = useParams();
  const { name } = params;

  const member = teamMembersData.find((m) => m.slug === name);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Team member not found.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <CommonHeading Text={member.name} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Profile Image */}
            <div className="relative holo-image">
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-4xl"
              />
            </div>

            {/* About Me */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About me</h2>
              {member.about.map((p, i) => (
                <p key={i} className="text-gray-600 mb-6">
                  {p}
                </p>
              ))}

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="w-12 h-12 mainBg rounded-full flex items-center justify-center mr-4">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Position</p>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="w-12 h-12 mainBg rounded-full flex items-center justify-center mr-4">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">{member.email}</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="w-12 h-12 mainBg rounded-full flex items-center justify-center mr-4">
                    <FaCalendarAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Experience</p>
                    <p className="text-sm text-gray-600">{member.experience}</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="w-12 h-12 mainBg rounded-full flex items-center justify-center mr-4">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">{member.phone}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-gray-600 mb-3">Follow Us:</p>
                <div className="flex space-x-3">
                  <a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:mainBg hover:text-white transition">
                    <FaTwitter />
                  </a>
                  <a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:mainBg hover:text-white transition">
                    <FaFacebookF />
                  </a>
                  <a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:mainBg hover:text-white transition">
                    <FaInstagram />
                  </a>
                  <a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:mainBg hover:text-white transition">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Know About & Expertise */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Know about {member.name}
              </h2>
              <p className="text-gray-600 mb-6">{member.knowAbout}</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaCheckCircle className="mainColor mr-3" />
                  <span className="text-gray-700">
                    Expertise in salon skincare & beauty
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mainColor mr-3" />
                  <span className="text-gray-700">
                    Personalized beauty treatments
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mainColor mr-3" />
                  <span className="text-gray-700">
                    Modern salon technology expertise
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                My expertise
              </h2>
              <p className="text-gray-600 mb-6">
                Our salon specialists provide advanced skincare, beauty, and
                hair treatments tailored for each client.
              </p>

              <div className="space-y-6">
                {member.expertise.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {exp.label} :
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {exp.value}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="mainBg h-3 rounded-full"
                        style={{ width: `${exp.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetInTouch />
      <Footer />
    </>
  );
}
