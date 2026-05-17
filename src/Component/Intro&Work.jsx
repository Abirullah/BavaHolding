import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import BubbleTextGenerator from "./BubbleText";
import WaterDropGrid from "./UnderHersection";
import HeroLogo from "./HeroLogo";
import Button from "./Button";
import { SECTION_IDS } from "../navigation";

import Astronote from '../../public/Astronote.jpg'

const tags = [
  "AI-powered coding",
  "AI-driven development",
  "Intelligent automation",
  "Smart app building",
  "AI-powered solutions",
];

const aboutText1 =
  "At BAVE, we harness the power of artificial intelligence to revolutionize the way web and mobile applications are built. Founded with a vision to blend human creativity with cutting-edge AI technology, we deliver smarter, faster, and more efficient digital solutions tailored to your unique business needs.";

const aboutText2 =
  "Our team of expert developers and AI specialists work together to automate complex processes, optimize user experiences, and build scalable platforms that help businesses thrive in a digital-first world.";

const textureStyle = {
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.05) 0.7px, transparent 0.7px), radial-gradient(rgba(255,255,255,0.03) 0.7px, transparent 0.7px)",
  backgroundPosition: "0 0, 10px 10px",
  backgroundSize: "18px 18px",
  opacity: 0.12,
};

/* ── glowing orb blob ───────────────────────────────────── */
function GlowOrb({ style }) {
  return (
    <div
      className="pointer-events-none absolute rounded-full blur-[80px]"
      style={style}
    />
  );
}

/* ── artwork panel ──────────────────────────────────────── */
function IntroArtwork() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_36%,rgba(255,255,255,0.03))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute inset-0">
        <img
          src={Astronote}
          alt="Astronaut artwork"
          className="h-full w-full rounded-[22px] object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.04),transparent_38%,rgba(6,6,6,0.34))]" />
    </div>
  );
}

/* ── tag pills ──────────────────────────────────────────── */
function TagPills({ activeTag, setActiveTag, interactive = true }) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {tags.map((tag, i) => {
        const isActive = activeTag === i;
        return (
          <button
            key={tag}
            type="button"
            onClick={interactive ? () => setActiveTag(isActive ? null : i) : undefined}
            className="rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/75 shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-all duration-300"
            style={{
              fontFamily: "'Georgia', serif",
              background: isActive
                ? "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.08))"
                : "rgba(255,255,255,0.04)",
              border: isActive
                ? "1px solid rgba(255,255,255,0.35)"
                : "1px solid rgba(255,255,255,0.12)",
              color: isActive ? "#fff" : "rgba(255,255,255,0.72)",
              cursor: interactive ? "pointer" : "default",
              transform: isActive ? "translateY(-1px)" : "translateY(0px)",
            }}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

/* ── stat chip ──────────────────────────────────────────── */
function StatChip({ value, label }) {
  return (
    <div
      className="flex flex-col items-center gap-0.5 rounded-xl px-4 py-2.5"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.09)",
      }}
    >
      <span
        className="text-lg font-black text-white leading-none"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {value}
      </span>
      <span
        className="text-[10px] text-gray-500 uppercase tracking-widest"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── main content (compact = inside scroll shell) ───────── */
function IntroWorkContent({ activeTag, setActiveTag, interactive = true, compact = false }) {
  return (
    <div
      className="relative w-full h-full overflow-y-auto"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Background glow blobs */}
      <GlowOrb
        style={{
          width: 420,
          height: 420,
          top: -80,
          left: "30%",
          background: "rgba(255,255,255,0.025)",
        }}
      />

      <div
        className={`
          relative z-10 mx-auto flex h-full w-full flex-col
          ${compact ? "max-w-6xl px-5 py-8 sm:px-7 lg:px-10" : "max-w-6xl px-6 py-14 md:px-10"}
        `}
      >
        {/* ── TOP: heading + descriptor ── */}
        <div className="mb-4 md:mt-12 text-center">

          <AnimatedHeading
            as="h1"
            className={`font-light leading-none text-white ${compact ? "text-4xl md:text-5xl" : "text-6xl"}`}
            style={{ letterSpacing: "-0.025em" }}
          >
            WHO WE{" "}
            <em
              className="not-italic font-black"
              style={{
                background: "linear-gradient(95deg, #fff 0%, #666 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ARE
            </em>
            <br />
            &amp; WHAT WE{" "}
            <em
              className="not-italic font-black"
              style={{
                background: "linear-gradient(95deg, #fff 0%, #666 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DO
            </em>
          </AnimatedHeading>

          <p className="mx-auto mt-4 max-w-xl  leading-7 text-gray-400">
            A cutting-edge AI technology company dedicated to revolutionizing web
            and app development through intelligent automation. We create
            innovative, scalable digital products faster and smarter.
          </p>
        </div>

        {/* ── STATS ROW ── */}
        <div className="mb-4 flex justify-center gap-3 flex-wrap">
          <StatChip value="20+" label="Projects Delivered" />
          <StatChip value="100%" label="AI-Powered" />
          <StatChip value="∞" label="Scalability" />
        </div>

        {/* ── TAGS ── */}
        <div className="mb-6">
          <TagPills activeTag={activeTag} setActiveTag={setActiveTag} interactive={interactive} />
        </div>

        {/* ── ABOUT GRID ── */}
        <div className="grid min-h-0 flex-1 gap-6 lg:grid-cols-[minmax(320px,0.95fr)_minmax(420px,1.05fr)] xl:gap-7">
          {/* Image / artwork card */}
          <div
            className="relative overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(0,0,0,0.24)]"
          >
            <IntroArtwork />
          </div>

          {/* Text card */}
          <div
            className="relative flex flex-col justify-between overflow-hidden rounded-[28px] p-6 sm:p-7 lg:p-8 shadow-[0_28px_70px_rgba(0,0,0,0.24)]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              minHeight: compact ? 320 : 380,
            }}
          >


            <div>
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="h-px flex-1"
                  style={{ background: "linear-gradient(90deg, #fff2, transparent)" }}
                />
                <span className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  About Us
                </span>
                <span
                  className="h-px flex-1"
                  style={{ background: "linear-gradient(90deg, transparent, #fff2)" }}
                />
              </div>

              <AnimatedHeading
                as="h2"
                className="mb-5 text-2xl font-bold text-white"
                style={{ letterSpacing: "-0.01em" }}
              >
                Building the future
              </AnimatedHeading>

              <p className="mb-4 text-sm leading-7 text-gray-400">
                {aboutText1}
              </p>
              <p className="text-sm leading-7 text-gray-500">
                {aboutText2}
              </p>
            </div>

            {/* CTA row */}
            <Button/>

            {/* Subtle bottom glow */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 rounded-b-2xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.04), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN EXPORT — scroll-animated wrapper unchanged
═══════════════════════════════════════════════════════════ */
export function IntroTransition() {
  const sectionRef = useRef(null);
  const [activeTag, setActiveTag] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const shellScale  = useTransform(scrollYProgress, [0.34, 0.6],  [0.12, 1],    { clamp: true });
  const shellY      = useTransform(scrollYProgress, [0.34, 0.6],  [300, 0],     { clamp: true });
  const shellRotate = useTransform(scrollYProgress, [0.34, 0.47, 0.6], [0, -1.2, 0], { clamp: true });
  const shellRadius = useTransform(scrollYProgress, [0.34, 0.6],  ["999px", "0px"], { clamp: true });
  const artOpacity  = useTransform(scrollYProgress, [0.34, 0.46], [1, 0],       { clamp: true });
  const contentOpacity = useTransform(scrollYProgress, [0.30, 0.42], [0, 1],    { clamp: true });
  const contentY    = useTransform(scrollYProgress, [0.42, 0.55], [60, 0],      { clamp: true });
  const shellOpacity = useTransform(scrollYProgress, [0.22, 0.34, 0.92, 1], [1, 1, 1, 0], { clamp: true });
  const backdropOpacity = useTransform(scrollYProgress, [0.22, 0.34], [0, 1],   { clamp: true });

  return (
    <section ref={sectionRef} className="relative h-[600vh]">
      <div
        id={SECTION_IDS.about}
        className="absolute left-0 top-[210vh] h-px w-px"
        style={{ scrollMarginTop: "112px" }}
      />

      <div className="sticky top-0 h-screen overflow-hidden isolate">
        <WaterDropGrid />

        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <BubbleTextGenerator />
        </div>

        <HeroLogo scrollYProgress={scrollYProgress} />

        <div className="pointer-events-none fixed inset-0 z-[35]">
          <motion.div
            style={{ opacity: backdropOpacity }}
            className="absolute inset-0 bg-black"
          />

          <motion.div
            style={{
              opacity: shellOpacity,
              scale: shellScale,
              y: shellY,
              rotate: shellRotate,
              borderRadius: shellRadius,
              transformOrigin: "50% 88%",
              willChange: "transform, opacity, border-radius",
            }}
            className="absolute inset-0 overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_40px_140px_rgba(0,0,0,0.52)]"
          >
            <div className="absolute inset-0" style={textureStyle} />

            {/* artwork shown before content fades in */}
            <motion.div
              style={{ opacity: artOpacity }}
              className="absolute inset-0"
            >
              <IntroArtwork />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),transparent_35%,rgba(0,0,0,0.7))]" />
            </motion.div>

            {/* main content */}
            <motion.div
              style={{ opacity: contentOpacity, y: contentY }}
              className="pointer-events-auto absolute inset-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0a0a0a]" />

              <div className="relative flex h-full items-center pointer-events-auto">
                <IntroWorkContent
                  activeTag={activeTag}
                  setActiveTag={setActiveTag}
                  interactive
                  compact
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroTransition;
