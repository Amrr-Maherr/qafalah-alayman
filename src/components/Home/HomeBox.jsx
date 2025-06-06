import { Link } from "react-router-dom";
import { motion, scale } from "framer-motion";
export default function HomeBox({item,index}) {
    return (
      <>
        <Link to={item.link}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="w-full max-w-[247px] h-auto mx-auto text-center flex items-center justify-center flex-col gap-4 relative z-50 
               hover:bg-[#FBF5EA5C] rounded-[20px]  p-4 md:p-6"
          >
            <img
              src={item.icon}
              className="w-16 md:w-20 h-16 md:h-20 object-contain"
              alt={item.title}
            />
            <h3 className="text-xl md:text-2xl font-[700] text-[#FBF5EA]">
              {item.title}
            </h3>
          </motion.div>
        </Link>
      </>
    );
}