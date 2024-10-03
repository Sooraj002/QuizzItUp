// import { motion } from "framer-motion";

// React Server Components
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <motion.div
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 200 }}
        transition={{
          ease: "linear",
          duration: 20,
          x: { duration: 20 },
        }}
        whileDrag={{ scale: 0.5 }}
        className="w-10 h-10 bg-black"
      ></motion.div>
    </div>
  );
}
