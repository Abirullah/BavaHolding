import { motion } from "framer-motion";
import styles from "./Component.module.css";

const AnimatedGlowText = ({
  text = "Build Smarter, Launch Faster with AI-Powered Development",
}) => {
  return (
    <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold text-indigo-200 px-4 leading-tight">
      {text.split("").map((char, idx) => (
        <motion.span
          key={idx}
          className={styles.hoverText}
          initial={{
            scale: 0,
            opacity: 0,
            y: 20,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: idx * 0.03,
            type: "spring",
            stiffness: 160,
            damping: 12,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

export default AnimatedGlowText;