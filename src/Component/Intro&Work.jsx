import { motion, useTransform } from "framer-motion";

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
  "Our team of expert developers and AI specialists work together to automate complex processes, optimize user experiences, and build scalable platforms that help businesses thrive in a digital-first world. With a commitment to innovation and quality, we empower our clients to stay ahead of the curve through intelligent automation and data-driven design.";

const sectionFont = {
  fontFamily: "'Georgia', 'Times New Roman', serif",
};

const textureStyle = {
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.05) 0.7px, transparent 0.7px), radial-gradient(rgba(255,255,255,0.03) 0.7px, transparent 0.7px)",
  backgroundPosition: "0 0, 10px 10px",
  backgroundSize: "18px 18px",
  opacity: 0.12,
};

function IntroArtwork() {
  return (
    <div
      className="h-full w-full"
      style={{
        background:
          "linear-gradient(135deg, #1a1a1a 0%, #0f1f10 40%, #1a1208 70%, #0a0a0a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(60,90,30,0.45) 0%, transparent 55%), radial-gradient(ellipse at 70% 70%, rgba(80,50,10,0.3) 0%, transparent 50%)",
        }}
      />

      {[
        [20, 40],
        [150, 30],
        [30, 160],
        [155, 170],
        [90, 15],
        [10, 100],
      ].map(([x, y], i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: x,
            top: y,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#c0392b",
            opacity: 0.7,
            boxShadow: "0 0 6px 2px rgba(192,57,43,0.4)",
          }}
        />
      ))}
    </div>
  );
}

function TagPills({
  activeTag,
  setActiveTag,
  interactive = true,
  compact = false,
}) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-3">
      {tags.map((tag, index) => {
        const isActive = activeTag === index;

        return (
          <button
            key={tag}
            type="button"
            onClick={
              interactive
                ? () => setActiveTag(isActive ? null : index)
                : undefined
            }
            className="rounded-full border text-sm font-medium transition-all duration-300"
            style={{
              ...sectionFont,
              padding: compact ? "0.45rem 1rem" : "0.55rem 1.25rem",
              background: isActive
                ? "rgba(255,255,255,0.12)"
                : "rgba(255,255,255,0.04)",
              border: isActive
                ? "1px solid rgba(255,255,255,0.4)"
                : "1px solid rgba(255,255,255,0.18)",
              color: isActive ? "#fff" : "#aaa",
              letterSpacing: "0.01em",
              cursor: interactive ? "pointer" : "default",
            }}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

function IntroHeader({
  activeTag,
  setActiveTag,
  interactive = true,
  compact = false,
}) {
  return (
    <section
      className={
        compact
          ? "px-5 pb-6 pt-10 text-center md:px-8 md:pb-8 md:pt-14"
          : "px-6 pb-16 pt-24 text-center" 
      }
    >
      <h1
        className={
          compact
            ? "mb-4 text-3xl font-light leading-none text-white md:text-5xl"
            : "mb-6 text-5xl font-light leading-none text-white md:text-7xl"
        }
        style={{
          ...sectionFont,
          letterSpacing: "-0.02em",
        }}
      >
        WHO WE{" "}
        <span
          className="font-black"
          style={{
            background: "linear-gradient(90deg, #fff 0%, #aaa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ARE
        </span>{" "}
        & WHAT WE{" "}
        <span
          className="font-black"
          style={{
            background: "linear-gradient(90deg, #fff 0%, #aaa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          DO
        </span>
      </h1>

      <p
        className={
          compact
            ? "mx-auto max-w-5xl text-xs leading-6 text-gray-400 md:text-sm"
            : "mx-auto max-w-5xl text-base leading-relaxed text-gray-400 md:text-lg"
        }
        style={sectionFont}
      >
        A cutting-edge AI technology company dedicated to revolutionizing web and app development through intelligent automation. We create innovative, scalable digital products faster and smarter by harnessing the power of artificial intelligence.
      </p>

      <div className={compact ? "mb-6 mt-6" : "mb-10 mt-14"}>
        <span
          className={
            compact
              ? "text-sm font-semibold tracking-wide text-white md:text-base"
              : "text-lg font-semibold tracking-wide text-white md:text-xl"
          }
          style={{ ...sectionFont, letterSpacing: "0.04em" }}
        >
          Over 20+ AI-powered projects delivered
        </span>

        <div
          className="mx-auto mt-3"
          style={{
            width: 60,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, #555, transparent)",
          }}
        />
      </div>

      <TagPills
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        interactive={interactive}
        compact={compact}
      />
    </section>
  );
}

function AboutSection({ compact = false }) {
  return (
    <section className={compact ? "px-5 pb-8 md:px-8" : "px-6 pb-24"}>
      <div
        className={
          compact
            ? "grid gap-4 md:grid-cols-[250px_minmax(0,1fr)] md:items-stretch"
            : "flex flex-col items-stretch gap-8 md:flex-row"
        }
      >
        <div
          className="overflow-hidden rounded-2xl"
          style={{
            width: "100%",
            minHeight: compact ? 220 : 320,
            maxWidth: compact ? "100%" : 380,
            background: "#161616",
            border: "1px solid rgba(255,255,255,0.07)",
            position: "relative",
          }}
        >
          <IntroArtwork />
        </div>

        <div
          className={
            compact
              ? "flex flex-col justify-center rounded-2xl p-5 md:p-6"
              : "flex flex-1 flex-col justify-center rounded-2xl p-8"
          }
          style={{
            background: "rgba(255,255,255,0.045)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
          }}
        >
          <h2
            className={
              compact
                ? "mb-4 text-xl font-bold text-white md:text-2xl"
                : "mb-5 text-2xl font-bold text-white"
            }
            style={{ ...sectionFont, letterSpacing: "-0.01em" }}
          >
            About Us
          </h2>

          <p
            className={
              compact
                ? "mb-3 text-xs leading-6 text-gray-400 md:text-sm"
                : "mb-4 text-sm leading-relaxed text-gray-400"
            }
            style={sectionFont}
          >
            {aboutText1}
          </p>

          <p
            className={
              compact
                ? "text-xs leading-6 text-gray-500 md:text-sm"
                : "text-sm leading-relaxed text-gray-500"
            }
            style={sectionFont}
          >
            {aboutText2}
          </p>

          <div className="mt-8">
            <button
              type="button"
              className="rounded-full px-7 py-3 text-sm font-semibold text-black transition-all duration-300"
              style={{
                background: "linear-gradient(90deg, #e8e8e8, #fff)",
                ...sectionFont,
                letterSpacing: "0.04em",
              }}
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroWorkContent({
  activeTag,
  setActiveTag,
  interactive = true,
  compact = false,
}) {
  return (
    <div
      className={
        compact
          ? "mx-auto w-full max-w-6xl"
          : "mx-auto w-full max-w-5xl"
      }
      style={sectionFont}
    >
      <IntroHeader
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        interactive={interactive}
        compact={compact}
      />

      <AboutSection compact={compact} />
    </div>
  );
}

export function IntroTransition({ scrollYProgress }) {


const shellOpacity = useTransform(
  scrollYProgress,
  [0.22, 0.34, 0.90, 1.0],  
  [1, 1, 1, 0],
  { clamp: true }
);

const shellScale = useTransform(
  scrollYProgress,
  [0.34, 0.60],             
  [0.12, 1],
  { clamp: true }
);

const shellY = useTransform(
  scrollYProgress,
  [0.34, 0.60],
  [300, 0],
  { clamp: true }
);

const shellRotate = useTransform(
  scrollYProgress,
  [0.34, 0.47, 0.60],
  [0, -1.2, 0],
  { clamp: true }
);

const shellRadius = useTransform(
  scrollYProgress,
  [0.34, 0.60],
  ["999px", "0px"],
  { clamp: true }
);

const artOpacity = useTransform(
  scrollYProgress,
  [0.34, 0.46],
  [1, 0],
  { clamp: true }
);

const contentOpacity = useTransform(
  scrollYProgress,
  [0.44, 0.60],
  [0, 1],
  { clamp: true }
);

const contentY = useTransform(
  scrollYProgress,
  [0.44, 0.60],
  [60, 0],
  { clamp: true }
);

const backdropOpacity = useTransform(
  scrollYProgress,
  [0.22, 0.34],
  [0, 1],
  { clamp: true }
);

  return (
    <div className="pointer-events-none fixed inset-0 z-[35] ">

      {/* FULL SOLID BACKGROUND */}
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

        {/* INTRO ART */}
        <motion.div
          style={{ opacity: artOpacity }}
          className="absolute inset-0"
        >
          <IntroArtwork />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),transparent_35%,rgba(0,0,0,0.7))]" />
        </motion.div>

        {/* FINAL CONTENT */}
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          <div className="relative flex h-full items-center">
            <IntroWorkContent
              activeTag={null}
              setActiveTag={() => {}}
              interactive={false}
              compact
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
