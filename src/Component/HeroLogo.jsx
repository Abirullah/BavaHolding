import { motion, useTransform } from "framer-motion";
import BavaLogo from "../../public/Pasted image.png";

function HeroLogo({ scrollYProgress }) {
  const scaleOuter = useTransform(scrollYProgress, [0, 0.3, 0.55], [1, 3.2, 12]);
  const scaleMiddle = useTransform(scrollYProgress, [0, 0.3, 0.55], [1, 2.5, 8.5]);
  const scaleInner = useTransform(scrollYProgress, [0, 0.3, 0.55], [1, 1.7, 4.5]);
  const outerOpacity = useTransform(scrollYProgress, [0, 0.35, 0.56], [0.34, 0.24, 0]);
  const middleOpacity = useTransform(scrollYProgress, [0, 0.38, 0.58], [0.38, 0.28, 0]);
  const innerOpacity = useTransform(scrollYProgress, [0, 0.42, 0.6], [0.85, 0.65, 0]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.34, 0.48], [1, 1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.38, 0.5], [1, 1.15, 0.65]);

  return (
    <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 flex items-center justify-center">
      <motion.div
        style={{
          scale: scaleOuter,
          opacity: outerOpacity,
          willChange: "transform, opacity",
          width: "14rem",
          height: "14rem",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(168,85,247,0.12) 35%, transparent 72%)",
        }}
        className="absolute rounded-full"
      />

      <motion.div
        style={{
          scale: scaleMiddle,
          opacity: middleOpacity,
          willChange: "transform, opacity",
          width: "10rem",
          height: "10rem",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.28) 0%, rgba(236,72,153,0.1) 38%, transparent 72%)",
        }}
        className="absolute rounded-full"
      />

      <motion.div
        style={{
          scale: scaleInner,
          opacity: innerOpacity,
          willChange: "transform, opacity",
        }}
        className="absolute w-16 h-16 rounded-full border border-white/20 bg-white/20"
      />
      {/* LOGO */}
      <motion.img

// ─── GooeyNav core ──────────────────
        src={BavaLogo}
        alt="logo"
        style={{ opacity: logoOpacity, scale: logoScale }}
        className="relative z-40 w-14 h-14 object-contain"
      />
    </div>
  );
}

export default HeroLogo;
