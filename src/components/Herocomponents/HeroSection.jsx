import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { Plane } from "lucide-react";
export default function HeroSection({
  BackGroundImage,
  title,
  description,
  children
}) {
  return (
    <>
      <Navbar />
      <section
        className="min-h-screen relative flex items-center justify-center m-4 rounded-[80px] overflow-hidden"
        style={{
          backgroundImage: `url(${BackGroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-between flex-col p-8 text-center">
          <div className="h-full flex items-end justify-center flex-col w-full">
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
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
