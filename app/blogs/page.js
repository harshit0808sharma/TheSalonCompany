'use client'
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CommonHeading from "../components/other/CommonHeading";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { HomeContext } from "@/app/context/HomeContext";
import Link from "next/link";


export default function BlogPage() {
  const { blogsData } = useContext(HomeContext)

  return (
    <>
      <Navbar />
      <CommonHeading Text={"Blog"} />
      <section className="bg-[#fdf6f6] py-20 px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm text-[#214037] mb-2">• Latest Blog</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#214037] leading-snug mb-3">
            New insights: read our latest posts for skin care tips
          </h2>
          <p className="text-gray-600">
            Read our latest posts for fresh insights on skin care. Our articles
            cover everything from common dermatological concerns.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {blogsData.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-lg font-semibold text-[#214037] mb-3 hover:text-[#2d6d5f] transition-colors cursor-pointer">
                  {blog.title}
                </h3>

                {/* Read More Button */}
                <Link href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
