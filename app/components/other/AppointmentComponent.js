'use client'
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const AppointmentComponent = () => {
    const { theme } = useContext(SalonContext);

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const items = [
        {
            id: 1,
            icon: <FiPhone className="w-6 h-6 text-white" />,
            title: "For More Information",
            detail: "+91 123 456 789",
        },
        {
            id: 2,
            icon: <FiMail className="w-6 h-6 text-white" />,
            title: "For E-Mail",
            detail: "support@thesaloncompany.com",
        },
        {
            id: 3,
            icon: <FiMapPin className="w-6 h-6 text-white" />,
            title: "Address",
            detail: "Lokaci H.Q, Noida",
        },
    ];

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

    // Validation function
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
            newErrors.name = 'Name should only contain letters';
        }

        const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }

        if (!formData.date) {
            newErrors.date = 'Please select a date';
        } else {
            const selectedDate = new Date(formData.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                newErrors.date = 'Please select a future date';
            }
        }

        if (!formData.time) {
            newErrors.time = 'Please select a time';
        }

        if (formData.message.trim() && formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters if provided';
        }

        return newErrors;
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log("Form Submitted:", formData);
            toast.success("Appointment request submitted!");

            // Reset form
            setFormData({
                fullName: "",
                phone: "",
                email: "",
                service: "",
                date: "",
                time: "",
                message: "",
            });
            setErrors({});
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className={`py-16 px-4 sm:px-6 md:px-12 transition-colors duration-500 mainBg2`}>
                <motion.div
                    className="max-w-4xl mx-auto text-center py-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    {/* Section Header */}
                    <div className="flex justify-center items-center gap-2">
                        <GoDotFill
                            className={`${theme ? "text-teal-400" : "text-teal-800"}`}
                        />
                        <span
                            className={`font-medium ${theme ? "text-teal-400" : "text-[#264D45]"
                                }`}
                        >
                            {" "}
                            Appointment Booking
                        </span>
                    </div>
                    <motion.h2
                        variants={fadeUp}
                        className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 ${theme ? "text-white" : "text-teal-900"
                            }`}
                    >
                        Schedule your appointment
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className={`max-w-2xl mx-auto mb-10 text-sm sm:text-base ${theme ? "text-gray-300" : "text-gray-600"
                            }`}
                    >
                        {"It's time to take control of your skin health! Booking your"}
                        appointment is easy and fast. Choose a time that works for you and
                        our dermatology experts will be ready.
                    </motion.p>

                    <motion.div variants={fadeUp}>
                        <form onSubmit={handleSubmit} className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl transition-colors duration-500`}>
                            {/* Full Name */}
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name Here"
                                    className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.fullName ? 'border-red-500' : ''
                                        } ${theme
                                            ? "bg-gray-800 border-gray-700 text-white"
                                            : "bg-white border-gray-300 text-black"
                                        }`}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className={`w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.phone ? 'border-red-500' : ''
                                        } ${theme
                                            ? "bg-gray-800 border-gray-700 text-white"
                                            : "bg-white border-gray-300 text-black"
                                        }`}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className={`w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.email ? 'border-red-500' : ''
                                        } ${theme
                                            ? "bg-gray-800 border-gray-700 text-white"
                                            : "bg-white border-gray-300 text-black"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Service */}
                            <div>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.service ? 'border-red-500' : ''
                                        } ${theme
                                            ? "bg-gray-800 border-gray-700 text-white"
                                            : "bg-white border-gray-300 text-black"
                                        }`}
                                >
                                    <option value="">Select Service</option>
                                    <option value="Facial">Facial</option>
                                    <option value="Hair Treatment">Hair Treatment</option>
                                    <option value="Skin Care">Skin Care</option>
                                    <option value="Laser Therapy">Laser Therapy</option>
                                </select>
                                {errors.service && (
                                    <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                                )}
                            </div>

                            {/* Date */}
                            <div>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split("T")[0]}
                                    className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.date ? 'border-red-500' : ''
                                        } ${theme
                                            ? "bg-gray-800 border-gray-700 text-white"
                                            : "bg-white border-gray-300 text-black"
                                        }`}
                                />
                                {errors.date && (
                                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                                )}
                            </div>

                            {/* Time */}
                            <div>
                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.time ? 'border-red-500' : ''
                                        } ${theme
                                            ? "bg-gray-800 border-gray-700 text-white"
                                            : "bg-white border-gray-300 text-black"
                                        }`}
                                >
                                    <option value="">Choose Time</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="02:00 PM">02:00 PM</option>
                                    <option value="04:00 PM">04:00 PM</option>
                                </select>
                                {errors.time && (
                                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Description here about service or your problem..."
                                    rows="4"
                                    className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.message ? 'border-red-500' : ''
                                        } ${theme
                                            ? "bg-gray-800 border-gray-700 text-white"
                                            : "bg-white border-gray-300 text-black"
                                        }`}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            {/* Button */}
                            <div className="md:col-span-2 flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mainBg text-white px-8 py-3 rounded-full hover:bg-teal-900 transition shadow-md disabled:opacity-70"
                                >
                                    {isSubmitting ? "Submitting..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
                <div className="w-full px-32 flex justify-between items-center">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-16 border-t border-t-gray-200">
                        {items.map((item) => (
                            <div key={item.id} className="flex flex-col items-center sm:items-start">
                                {/* Icon */}
                                <div className="bg-[#24544B] p-3 rounded-lg flex items-center justify-center mb-3">
                                    {item.icon}
                                </div>
                                {/* Title */}
                                <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                                {/* Detail */}
                                <p className="text-gray-500">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppointmentComponent;