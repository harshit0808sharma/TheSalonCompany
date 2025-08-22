'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import Heading from "../other/Heading";

export default function BlogSection({ limit = "all" }) {
  const { blogsData } = useContext(SalonContext);
  const [loading, setLoading] = useState(true);
  const itemsToShow = limit === "all" ? blogsData : blogsData.slice(0, Number(limit));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#fdf6f6] py-20 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="flex justify-center items-center gap-2">
          <GoDotFill className="text-teal-800" />
          <span className="text-teal-800 font-medium">Our Blog</span>
        </div>
        <Heading Text={"Tips, Trends & Beauty Secrets"} />
        <p className="text-gray-600">
          Stay inspired with expert insights from The Salon Company. From latest beauty trends to skincare tips, our blog keeps you looking and feeling your best.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {loading
          ? Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden animate-pulse h-[400px]"
              >
                <div className="w-full h-[250px] bg-gray-200"></div>
                <div className="flex flex-col flex-grow p-5 space-y-3">
                  <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-300 rounded mt-auto"></div>
                </div>
              </div>
            ))
          : itemsToShow.map((blog, index) => (
            // <motion.div
            //   key={index}
            //   initial={{ opacity: 0, y: 40 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.6, delay: index * 0.2 }}
            //   viewport={{ once: true }}
            //   className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            // >
            //   {/* Image */}
            //   <div className="w-full overflow-hidden">
            //     <Image
            //       src={blog.image}
            //       alt={blog.title}
            //       width={400}
            //       height={300}
            //       className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            //     />
            //   </div>

            //   {/* Content */}
            //   <div className="flex flex-col flex-grow p-5">
            //     <h3 className="text-lg font-semibold text-[#214037] mb-3 hover:text-[#2d6d5f] transition-colors cursor-pointer">
            //       {blog.title}
            //     </h3>
            //     <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>

            //     {/* Read More */}
            //     <Link
            //       href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}
            //       className="flex items-center text-teal-800 font-medium hover:text-teal-900 transition-colors"
            //     >
            //       Read More <FaArrowRight className="ml-2" />
            //     </Link>
            //   </div>
            // </motion.div>
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg" key={index}>
              <Image
                alt="random Image"
                src={blog.image}
                width={400}
                height={400}
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    {blog.title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {blog.content}
                </p>
                <Link href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  Read More
                  <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
      </div>
    </section>
  );
}

