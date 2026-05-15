import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 25;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

function Card({ title, description, gradient }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`
    rotateX(${xSpring}deg)
    rotateY(${ySpring}deg)
  `;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX =
      ((mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;

    const rotateY =
      (mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`
        relative"bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#222222]"
        h-[220px]
        w-full
        rounded-3xl
        ${gradient}
        p-[1px]
      `}
    >
      <div
        style={{
          transform: "translateZ(60px)",
          transformStyle: "preserve-3d",
        }}
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-white/10
          bg-black/40
          backdrop-blur-xl
          p-8
          flex
          flex-col
          justify-between
          overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        {/* Heading */}
        <h2
          style={{
            transform: "translateZ(50px)",
          }}
          className="
            text-2xl
            md:text-3xl
            font-bold
            text-white
            leading-tight
          "
        >
          {title}
        </h2>

        {/* Description */}
        <p
          style={{
            transform: "translateZ(40px)",
          }}
          className="
            mt-6
            text-gray-300
            leading-relaxed
            text-sm
            md:text-base
          "
        >
          {description}
        </p>

      </div>
    </motion.div>
  );
}

export default Card;