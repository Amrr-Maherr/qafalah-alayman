import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

export default function HeroSection({
  BackGroundImage,
  title,
  description,
  buttonText,
}) {
  return (
    <>
      <section
        className="min-h-screen relative flex items-center justify-center relative "
        style={{
          backgroundImage: `url(${BackGroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center flex-col px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl font-normal mb-10 text-white max-w-3xl"
          >
            {description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#B38124] text-sm sm:text-base md:text-lg font-semibold text-white px-8 py-3 rounded-full w-fit"
          >
            {buttonText}
          </motion.button>
        </div>
      </section>
    </>
  );
}
