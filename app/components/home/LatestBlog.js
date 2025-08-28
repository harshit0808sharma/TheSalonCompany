"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import Heading from "../other/Heading";

export default function BlogSection({ limit = "all" }) {
  const { blogsData, theme } = useContext(SalonContext);
  const [loading, setLoading] = useState(true);

  const itemsToShow =
    limit === "all" ? blogsData : blogsData.slice(0, Number(limit));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`max-w-[1920px] m-auto py-20 px-6 md:px-12 transition-colors duration-300 mainBg2`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="flex justify-center items-center gap-2">
          <GoDotFill
            className={`${theme ? "text-teal-400" : "text-teal-800"}`}
          />
          <span
            className={`font-medium ${
              theme ? "text-teal-400" : "text-teal-800"
            }`}
          >
            Latest Blogs
          </span>
        </div>
        <Heading Text={"Tips, Trends & Beauty Secrets"} />
        <p className={`${theme ? "text-gray-300" : "text-gray-600"}`}>
          Stay inspired with expert insights from The Salon Company. From latest
          beauty trends to skincare tips, our blog keeps you looking and feeling
          your best.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col rounded-2xl overflow-hidden animate-pulse h-[400px] ${
                    theme ? "bg-gray-800" : "bg-white shadow-md"
                  }`}
                >
                  <div
                    className={`w-full h-[250px] ${
                      theme ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  ></div>
                  <div className="flex flex-col flex-grow p-5 space-y-3">
                    <div
                      className={`h-5 w-3/4 rounded ${
                        theme ? "bg-gray-600" : "bg-gray-300"
                      }`}
                    ></div>
                    <div
                      className={`h-4 w-1/2 rounded mt-auto ${
                        theme ? "bg-gray-600" : "bg-gray-300"
                      }`}
                    ></div>
                  </div>
                </div>
              ))
          : itemsToShow.map((blog, index) => (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                key={index}
                className={`overflow-hidden transition-colors duration-300 holo-image rounded-4xl`}
              >
                <Image
                  alt={blog.title}
                  src={blog.image}
                  width={400}
                  height={400}
                  className="h-80 w-full object-cover rounded-4xl"
                />

                <div className="py-4">
                  <h3
                    className={`text-lg font-medium mb-2 ${
                      theme ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {blog.title}
                  </h3>
                  <Link
                    href={`/blogs/${blog.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className={`group mt-4 inline-flex items-center gap-1 text-md font-bold mainColor`}
                  >
                    Read More
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
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
