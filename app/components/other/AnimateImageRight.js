import { motion } from "framer-motion"
import Image from "next/image"

const AnimateImageRight = () => {
    return (
        <>
            <motion.div
                className="absolute top-0 left-0 w-40 md:w-56 pointer-events-none select-none"
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Image
                    src="/assets/images/leftDesign.png"
                    alt="Left Design"
                    width={224}
                    height={224}
                    className="object-contain opacity-20"
                />
            </motion.div>

            <motion.div
                className="absolute bottom-0 right-0 w-40 md:w-56 pointer-events-none select-none"
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Image
                    src="/assets/images/rightDesign.png"
                    alt="Right Design"
                    width={224}
                    height={224}
                    className="object-contain opacity-20"
                />
            </motion.div>
        </>
    )
}

export default AnimateImageRight;