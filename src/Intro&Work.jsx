import { useState } from "react";
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
  opacity: 0.16,
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

      <svg
        viewBox="0 0 180 220"
        width="180"
        height="220"
        style={{ position: "relative", zIndex: 1, opacity: 0.92 }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="90" cy="70" rx="38" ry="40" fill="#ccc" stroke="#888" strokeWidth="2" />
        <ellipse cx="90" cy="68" rx="26" ry="27" fill="#b07840" opacity="0.85" />
        <ellipse cx="82" cy="62" rx="7" ry="5" fill="white" opacity="0.25" />
        <rect x="62" y="106" width="56" height="68" rx="16" fill="#ddd" stroke="#999" strokeWidth="1.5" />
        <rect x="76" y="118" width="28" height="18" rx="5" fill="#bbb" />
        <circle cx="90" cy="127" r="5" fill="#888" />
        <rect x="38" y="110" width="26" height="14" rx="7" fill="#ddd" stroke="#aaa" strokeWidth="1" transform="rotate(18,51,117)" />
        <circle cx="36" cy="130" r="9" fill="#ccc" stroke="#aaa" strokeWidth="1" />
        <rect x="116" y="110" width="26" height="14" rx="7" fill="#ddd" stroke="#aaa" strokeWidth="1" transform="rotate(-18,129,117)" />
        <circle cx="144" cy="130" r="9" fill="#ccc" stroke="#aaa" strokeWidth="1" />
        <rect x="68" y="170" width="20" height="36" rx="10" fill="#ccc" stroke="#aaa" strokeWidth="1" />
        <rect x="92" y="170" width="20" height="36" rx="10" fill="#ccc" stroke="#aaa" strokeWidth="1" />
        <ellipse cx="78" cy="206" rx="13" ry="7" fill="#888" />
        <ellipse cx="102" cy="206" rx="13" ry="7" fill="#888" />
        <rect x="62" y="130" width="8" height="3" rx="1.5" fill="#c8602a" />
        <rect x="110" y="130" width="8" height="3" rx="1.5" fill="#c8602a" />
      </svg>

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

function TagPills({ activeTag, setActiveTag, interactive = true, compact = false }) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-3">
      {tags.map((tag, index) => {
        const isActive = activeTag === index;

        return (
          <button
            key={tag}
            type="button"
            onClick={interactive ? () => setActiveTag(isActive ? null : index) : undefined}
            className="rounded-full border text-sm font-medium transition-all duration-300"
            style={{
              ...sectionFont,
              padding: compact ? "0.45rem 1rem" : "0.55rem 1.25rem",
              background: isActive ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
              border: isActive
                ? "1px solid rgba(255,255,255,0.4)"
                : "1px solid rgba(255,255,255,0.18)",
              color: isActive ? "#fff" : "#aaa",
              letterSpacing: "0.01em",
              cursor: interactive ? "pointer" : "default",
            }}
            onMouseEnter={
              interactive
                ? (event) => {
                    if (!isActive) {
                      event.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      event.currentTarget.style.color = "#ddd";
                    }
                  }
                : undefined
            }
            onMouseLeave={
              interactive
                ? (event) => {
                    if (!isActive) {
                      event.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      event.currentTarget.style.color = "#aaa";
                    }
                  }
                : undefined
            }
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

function IntroHeader({ activeTag, setActiveTag, interactive = true, compact = false }) {
  return (
    <section className={compact ? "px-5 pb-10 pt-24 text-center md:px-8" : "px-6 pb-16 pt-24 text-center"}>
      <h1
        className={compact ? "mb-5 text-4xl font-light leading-none text-white md:text-6xl" : "mb-6 text-5xl font-light leading-none text-white md:text-7xl"}
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
        &amp; WHAT WE{" "}
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
        className={compact ? "mx-auto max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base" : "mx-auto max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"}
        style={sectionFont}
      >
        A cutting-edge AI technology company dedicated to revolutionizing web
        and app development through intelligent automation. We create
        innovative, scalable digital products faster and smarter by harnessing
        the power of artificial intelligence.
      </p>

      <div className={compact ? "mb-8 mt-10" : "mb-10 mt-14"}>
        <span
          className={compact ? "text-base font-semibold tracking-wide text-white md:text-lg" : "text-lg font-semibold tracking-wide text-white md:text-xl"}
          style={{ ...sectionFont, letterSpacing: "0.04em" }}
        >
          Over 20+ AI-powered projects delivered
        </span>
        <div
          className="mx-auto mt-3"
          style={{
            width: 60,
            height: 1,
            background: "linear-gradient(90deg, transparent, #555, transparent)",
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
    <section className={compact ? "px-5 pb-14 md:px-8" : "px-6 pb-24"}>
      <div className={compact ? "grid gap-5 md:grid-cols-[300px_minmax(0,1fr)] md:items-stretch" : "flex flex-col items-stretch gap-8 md:flex-row"}>
        <div
          className="overflow-hidden rounded-2xl"
          style={{
            width: "100%",
            minHeight: compact ? 280 : 320,
            maxWidth: compact ? "100%" : 380,
            background: "#161616",
            border: "1px solid rgba(255,255,255,0.07)",
            position: "relative",
          }}
        >
          <IntroArtwork />
        </div>

        <div
          className={compact ? "flex flex-col justify-center rounded-2xl p-6 md:p-7" : "flex flex-1 flex-col justify-center rounded-2xl p-8"}
          style={{
            background: "rgba(255,255,255,0.045)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
          }}
        >
          <h2
            className={compact ? "mb-4 text-xl font-bold text-white md:text-2xl" : "mb-5 text-2xl font-bold text-white"}
            style={{ ...sectionFont, letterSpacing: "-0.01em" }}
          >
            About Us
          </h2>

          <p
            className={compact ? "mb-4 text-sm leading-7 text-gray-400" : "mb-4 text-sm leading-relaxed text-gray-400"}
            style={sectionFont}
          >
            {aboutText1}
          </p>

          <p
            className={compact ? "text-sm leading-7 text-gray-500" : "text-sm leading-relaxed text-gray-500"}
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

function IntroWorkContent({ activeTag, setActiveTag, interactive = true, compact = false }) {
  return (
    <div
      className={compact ? "mx-auto w-full max-w-6xl" : "mx-auto w-full max-w-5xl"}
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
  const shellOpacity = useTransform(scrollYProgress, [0.24, 0.34], [0, 1]);
  const shellScale = useTransform(scrollYProgress, [0.34, 0.78], [0.14, 1]);
  const shellY = useTransform(scrollYProgress, [0.34, 0.78], [310, 0]);
  const shellRotate = useTransform(scrollYProgress, [0.34, 0.58, 0.78], [0, -1.5, 0]);
  const shellRadius = useTransform(scrollYProgress, [0.34, 0.58, 0.78], ["999px", "48px", "0px"]);
  const artOpacity = useTransform(scrollYProgress, [0.34, 0.58, 0.82], [1, 0.42, 0.14]);
  const contentOpacity = useTransform(scrollYProgress, [0.54, 0.78], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.54, 0.78], [42, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.88, 0.98], [1, 0]);
  const backdropOpacity = useTransform(scrollYProgress, [0.24, 0.5], [0, 1]);

  return (
    <motion.div
      style={{ opacity: overlayOpacity }}
      className="pointer-events-none absolute inset-0 z-[35] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a]"
        style={{ opacity: backdropOpacity }}
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

        <motion.div style={{ opacity: artOpacity }} className="absolute inset-0">
          <IntroArtwork />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),transparent_35%,rgba(0,0,0,0.62))]" />
        </motion.div>

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.18),rgba(10,10,10,0.84)_30%,#0a0a0a_100%)]" />
          <div className="relative h-full overflow-hidden">
            <IntroWorkContent
              activeTag={null}
              setActiveTag={() => {}}
              interactive={false}
              compact
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function IntroWork() {
  const [activeTag, setActiveTag] = useState(null);

  return (
    <section
      className="relative -mt-[100vh] min-h-screen overflow-hidden bg-[#0a0a0a] pt-[100vh]"
      style={sectionFont}
    >
      <div className="absolute inset-0 pointer-events-none z-0" style={textureStyle} />

      <div className="relative z-10">
        <IntroWorkContent
          activeTag={activeTag}
          setActiveTag={setActiveTag}
          interactive
        />
      </div>
    </section>
  );
}
