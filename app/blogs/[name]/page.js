'use client';

import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import Navbar from "@/app/components/Header";
import CommonHeading from "@/app/components/other/CommonHeading";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function ReadBlog() {
  const params = useParams();
  const { blogsData } = useContext(SalonContext);
  const { name } = params;

  const blog = blogsData.find(
    (b) => b.title.toLowerCase().replace(/\s+/g, "-") === name
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // clear error on typing
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // show first error as toast
      const firstError = Object.values(validationErrors)[0];
      toast.error(firstError);
      return;
    }

    console.log("Comment submitted:", formData);
    toast.success("Your comment has been posted!");
    setFormData({ name: "", email: "", website: "", message: "" });
    setErrors({});
  };

  if (!blog) return <div className="text-center py-20">Blog not found</div>;

  return (
    <>
      <Navbar />
      <CommonHeading Text={blog.title} />

      <div className="max-w-[1920px] m-auto px-5 md:px-20 py-24 lg:px-32 mainBg2">
        <div className="flex flex-col gap-10">
          {/* Top Image */}
          <motion.div
            className="h-[400px] md:h-[600px] relative holo-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover rounded-4xl"
            />
          </motion.div>

          {/* Blog Content */}
          <motion.section
            className="max-w-5xl mx-auto space-y-6 rounded-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#214037]">
              {blog.title}
            </h1>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {blog.content}
            </p>

            {blog.points && blog.points.length > 0 && (
              <motion.div
                className="bg-[#fdf6f6] p-6 rounded-xl shadow-inner space-y-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-semibold text-[#214037] mb-4">
                  Important Points:
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {blog.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-[#214037] mb-6">
                Leave a Reply
              </h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`border rounded-lg p-3 w-full ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`border rounded-lg p-3 w-full ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 w-full"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`border rounded-lg p-3 w-full md:col-span-2 h-32 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="submit"
                  className="md:col-span-2 mainBg text-white px-6 py-3 rounded-full 
                   hover:bg-[#28554E] transition-colors duration-300 
                   inline-flex items-center justify-center font-medium 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#28554E]"
                >
                  Post Comment
                </button>
              </form>
            </motion.div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </>
  );
}
