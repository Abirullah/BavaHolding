import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ButtonWrapper = () => {
  return <SpotlightButton />;
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    if (!btn) return;

    const handleMouseMove = (e) => {
      if (!spanRef.current) return;

      const { width } = btn.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate(
        { left },
        {
          duration: 250,
          fill: "forwards",
        }
      );
    };

    const handleMouseLeave = () => {
      if (!spanRef.current) return;

      spanRef.current.animate(
        { left: "50%" },
        {
          duration: 180,
          fill: "forwards",
        }
      );
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      ref={btnRef}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-15
        py-3
        text-sm
        font-semibold
        tracking-[0.15em]
        text-white
        backdrop-blur-md
      "
    >
      <span className="relative z-10 mix-blend-difference">
        LEARN MORE
      </span>

      <span
        ref={spanRef}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-32
          w-32
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
        "
      />
    </motion.button>
  );
};

export default ButtonWrapper;