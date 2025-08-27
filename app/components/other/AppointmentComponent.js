'use client'
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { appointmentValidation } from "@/app/validation/appointmentValidation";
import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


const AppointmentComponent = () => {
    const { theme } = useContext(SalonContext);

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
                        {"It’s time to take control of your skin health! Booking your"}
                        appointment is easy and fast. Choose a time that works for you and
                        our dermatology experts will be ready.
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
                                <Form className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl transition-colors duration-500`}>
                                    {/* Full Name */}
                                    <div>
                                        <Field
                                            type="text"
                                            name="fullName"
                                            placeholder="Full Name Here"
                                            className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${theme
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-black"
                                                }`}
                                        />
                                        <ErrorMessage
                                            name="fullName"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <Field
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            className={`w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-teal-600 ${theme
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-black"
                                                }`}
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            className={`w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-teal-600 ${theme
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-black"
                                                }`}
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Service */}
                                    <div>
                                        <Field
                                            as="select"
                                            name="service"
                                            className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${theme
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-black"
                                                }`}
                                        >
                                            <option value="">Select Service</option>
                                            <option value="Facial">Facial</option>
                                            <option value="Hair Treatment">Hair Treatment</option>
                                            <option value="Skin Care">Skin Care</option>
                                            <option value="Laser Therapy">Laser Therapy</option>
                                        </Field>
                                        <ErrorMessage
                                            name="service"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Date */}
                                    <div>
                                        <Field
                                            type="date"
                                            name="date"
                                            min={new Date().toISOString().split("T")[0]}
                                            className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${theme
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-black"
                                                }`}
                                        />
                                        <ErrorMessage
                                            name="date"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Time */}
                                    <div>
                                        <Field
                                            as="select"
                                            name="time"
                                            className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${theme
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-black"
                                                }`}
                                        >
                                            <option value="">Choose Time</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="02:00 PM">02:00 PM</option>
                                            <option value="04:00 PM">04:00 PM</option>
                                        </Field>
                                        <ErrorMessage
                                            name="time"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="md:col-span-2">
                                        <Field
                                            as="textarea"
                                            name="message"
                                            placeholder="Description here about service or your problem..."
                                            rows="4"
                                            className={`w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-600 ${theme
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-black"
                                                }`}
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Button */}
                                    <div className="md:col-span-2 flex justify-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="mainBg text-white px-8 py-3 rounded-full hover:bg-teal-900 transition shadow-md"
                                        >
                                            {isSubmitting ? "Submitting..." : "Send Message"}
                                        </button>
                                    </div>
                                </Form>
                            </motion.div>
                        )}
                    </Formik>
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