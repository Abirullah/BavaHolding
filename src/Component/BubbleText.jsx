import { motion } from "framer-motion";

const AnimatedGlowText = ({
  text = "Build Smarter, Launch Faster with AI-Powered Development",
}) => {
  const tokens = text.split(/(\s+)/).filter(Boolean);

  return (
    <motion.h2
      whileHover="hover"
      variants={{
        hover: { x: -4 },
      }}
      transition={{ type: "spring", staggerChildren: 0.04, delayChildren: 0.05 }}
      className="text-center text-3xl sm:text-4xl md:text-6xl font-bold text-indigo-200 px-4 leading-tight"
    >
      {tokens.map((token, tokenIndex) =>
        /^\s+$/.test(token) ? (
          <motion.span key={tokenIndex}> </motion.span>
        ) : (
          <span
            key={tokenIndex}
            className="inline-flex whitespace-nowrap"
          >
            {Array.from(token).map((char, charIndex) => {
              const letterIndex = `${tokenIndex}-${charIndex}`;

              return (
                <motion.span
                  key={letterIndex}
                  variants={{
                    hover: { x: 3 },
                  }}
                  className="inline-block"
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
                    delay: (tokenIndex + charIndex) * 0.03,
                    type: "spring",
                    stiffness: 160,
                    damping: 12,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ),
      )}
    </motion.h2>
  );
};

export default AnimatedGlowText;
