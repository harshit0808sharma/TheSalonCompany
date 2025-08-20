
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactInfo = () => {
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
    return(
        <>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 px-4 sm:px-8 md:px-10 text-black gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
            >
                {[
                    {
                        icon: <FaPhone className="w-6 h-6" />,
                        title: "Contact Us",
                        lines: ["salon@gmail.com", "+91 123 456 987"],
                    },
                    {
                        icon: <FaMailBulk className="w-6 h-6" />,
                        title: "Location",
                        lines: ["Lokaci H.Q. sector 117, Noida", "Uttar Pradesh, India"],
                    },
                    {
                        icon: <FaLocationPin className="w-6 h-6" />,
                        title: "Working Hours",
                        lines: [
                            "Monday - Friday : 9:00 am to 6:00 pm",
                            "Saturday : 11:00 am to 5pm",
                        ],
                    },
                ].map((card, idx) => (
                    <motion.div
                        key={idx}
                        variants={fadeUp}
                        className="bg-white text-teal-800 p-6 rounded-xl shadow-md flex flex-col items-start"
                    >
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                            {card.icon}
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            {card.title}
                        </h3>
                        {card.lines.map((line, i) => (
                            <p key={i} className="text-black/80 text-sm md:text-base">
                                {line}
                            </p>
                        ))}
                    </motion.div>
                ))}
            </motion.div>
        </>
    )
}

export default ContactInfo;