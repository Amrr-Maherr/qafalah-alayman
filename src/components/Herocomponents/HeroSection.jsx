import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

export default function HeroSection({
  backgroundSrc, // Renamed from BackGroundImage to be more generic
  backgroundType = "image", // New prop to specify type: "image" or "video"
  title,
  description,
  children,
}) {
  return (
    <>
      <Navbar />
      <section className="h-screen relative flex items-center justify-center mx-[19px] my-3 rounded-[80px] overflow-hidden">
        {/* Background */}
        {backgroundType === "video" ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={backgroundSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundSrc})` }}
          />
        )}

        {/* Overlay and Content */}
        <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-between flex-col p-8 text-center rounded-[80px]">
          <div className="h-full flex items-end justify-center flex-col w-full">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl font-normal text-white mb-10 max-w-3xl"
            >
              {description}
            </motion.p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
