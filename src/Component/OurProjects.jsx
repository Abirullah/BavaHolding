import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import AiTutImg from "../../public/Projects/AI TURTOR.png";
import Answarly from "../../public/Projects/Ansarly.jpg";
import Chatterly from "../../public/Projects/ChatterlyAI.png";
import QHello from "../../public/Projects/QHello.png";
import Questhunder from "../../public/Projects/Questhunder.png";
import SportEcom from "../../public/Projects/SportsEcomress.png";
import VirtualWorld from "../../public/Projects/Virtual World.png";
import YourFrontDeskAi from "../../public/Projects/YourFrontBeskAI.jpg";

const DEFAULT_ITEMS = [
  {
    id: 1,
    label: "Education Learning Management System",
    title: "AI Tutor",
    description:
      "Built to provide a personalized language-speaking practice experience through real-time, AI-driven conversations. Simulates a human tutor who guides users through structured conversations using CEFR-aligned topics and feedback.",
    highlights: ["Website", "LMS", "Mobile App"],
    accent: "from-blue-300/20 via-sky-500/10 to-transparent",
    glowColor: "rgba(6,95,240,0.24)",
    cardBackground:
      "linear-gradient(135deg, #070b24 0%, #0d1a49 46%, #0b4fbd 100%)",
    imageBackdrop:
      "radial-gradient(circle at 50% 30%, rgba(71,128,255,0.35) 0%, rgba(16,12,70,0.62) 48%, rgba(8,10,26,0.96) 100%)",
    icon: FiFileText,
    image: AiTutImg,
    imagePosition: "object-top",
  },
  {
    id: 2,
    label: "AR-Based Scavenger Hunt Game",
    title: "Questhunter GO",
    description:
      "An interactive AR-based scavenger hunt game that encourages exploration by guiding players to real-world points of interest. Dynamically detects proximity to the nearest POI, allowing players to discover and unlock clues through immersive touch interactions.",
    highlights: ["AR", "Unity", "Game"],
    accent: "from-orange-300/20 via-rose-400/10 to-transparent",
    glowColor: "rgba(237,148,117,0.22)",
    cardBackground:
      "linear-gradient(135deg, #120d0a 0%, #352114 45%, #8e4b32 100%)",
    imageBackdrop:
      "radial-gradient(circle at 50% 35%, rgba(237,148,117,0.30) 0%, rgba(100,58,31,0.55) 45%, rgba(20,11,7,0.96) 100%)",
    icon: FiCircle,
    image: Questhunder,
    imagePosition: "object-center",
  },
  {
    id: 3,
    label: "Immersive Historical Experience",
    title: "Virtual World",
    description:
      "An engaging virtual experience where users can explore famous historical places and interact with renowned personalities as if they were alive. Navigate through historical locations and communicate with famous individuals through immersive interactions.",
    highlights: ["Unity", "3D", "VR"],
    accent: "from-amber-200/20 via-violet-500/10 to-transparent",
    glowColor: "rgba(255,240,166,0.16)",
    cardBackground:
      "linear-gradient(135deg, #0b1020 0%, #1a1f33 45%, #6d4a2f 100%)",
    imageBackdrop:
      "radial-gradient(circle at 50% 35%, rgba(255,240,166,0.22) 0%, rgba(60,20,95,0.30) 42%, rgba(20,24,34,0.96) 100%)",
    icon: FiLayers,
    image: VirtualWorld,
    imagePosition: "object-center",
  },
  {
    id: 4,
    label: "Sports Community Platform",
    title: "Qhelo",
    description:
      "A Bangladeshi app that lets people easily find, join, and host sports games, book fields, invite friends, rate players, and climb leaderboards through points. Connects sports enthusiasts and makes it simple to organize games.",
    highlights: ["Mobile App", "Sports", "Social"],
    accent: "from-emerald-300/20 via-sky-500/10 to-transparent",
    glowColor: "rgba(0,236,124,0.18)",
    cardBackground:
      "linear-gradient(135deg, #090b10 0%, #152744 44%, #0c5334 100%)",
    imageBackdrop:
      "radial-gradient(circle at 50% 35%, rgba(0,236,124,0.20) 0%, rgba(34,91,150,0.30) 45%, rgba(10,11,15,0.96) 100%)",
    icon: FiLayout,
    image: QHello,
    imagePosition: "object-center",
  },
  {
    id: 5,
    label: "Sports Retail Platform",
    title: "Sports Ecommerce",
    description:
      "A comprehensive sports ecommerce platform for buying equipment, clothing, and accessories. Features secure payment processing, real-time inventory management, user reviews, advanced filtering, and a responsive design for all devices.",
    highlights: ["Ecommerce", "Web App", "Retail"],
    accent: "from-violet-300/20 via-rose-500/10 to-transparent",
    glowColor: "rgba(200,9,9,0.18)",
    cardBackground:
      "linear-gradient(135deg, #0f0821 0%, #23114d 46%, #6a0b21 100%)",
    imageBackdrop:
      "radial-gradient(circle at 50% 35%, rgba(200,9,9,0.20) 0%, rgba(58,17,99,0.42) 42%, rgba(10,7,20,0.96) 100%)",
    icon: FiCode,
    image: SportEcom,
    imagePosition: "object-top",
  },
  {
    id: 6,
    label: "AI Business Blueprint Platform",
    title: "Chatterly AI",
    description:
      "An all-in-one platform that transforms startup ideas into actionable business blueprints and ready-to-launch previews within minutes. Combines AI-powered business planning, instant landing page generation, integrated payments, and an AI assistant.",
    highlights: ["AI", "Business", "Startup Platform"],
    accent: "from-sky-300/20 via-fuchsia-400/10 to-transparent",
    glowColor: "rgba(23,85,179,0.20)",
    cardBackground:
      "linear-gradient(135deg, #091225 0%, #12335f 48%, #5f1f49 100%)",
    imageBackdrop:
      "radial-gradient(circle at 50% 35%, rgba(23,85,179,0.28) 0%, rgba(168,60,120,0.18) 45%, rgba(10,16,34,0.96) 100%)",
    icon: FiFileText,
    image: Chatterly,
    imagePosition: "object-center",
  },
  {
    id: 7,
    label: "AI Voice Receptionist",
    title: "Your Front Desk AI",
    description:
      "Revolutionizes traditional reception management through real-time AI voice technology. Sub-800ms response times and multi-lingual capabilities simulate a human receptionist handling bookings, enquiries, and patient reminders.",
    highlights: ["AI", "Voice AI", "Healthcare"],
    accent: "from-rose-200/20 via-stone-300/10 to-transparent",
    glowColor: "rgba(241,219,217,0.18)",
    cardBackground:
      "linear-gradient(135deg, #1e1719 0%, #5b4e54 52%, #b88887 100%)",
    imageBackdrop:
      "radial-gradient(circle at 50% 35%, rgba(241,219,217,0.24) 0%, rgba(170,171,170,0.18) 44%, rgba(24,18,19,0.96) 100%)",
    icon: FiCircle,
    image: YourFrontDeskAi,
    imagePosition: "object-center",
  },
  {
    id: 8,
    label: "AI Knowledge Platform",
    title: "Answerly",
    description:
      "Provides an optimized, seamless search and resolution experience through advanced real-time language models. Helps users instantly navigate complex queries with a highly responsive minimalist interface that maintains context throughout.",
    highlights: ["AI", "Knowledge Platform", "Web App"],
    accent: "from-cyan-200/20 via-blue-400/10 to-transparent",
    glowColor: "rgba(149,200,255,0.20)",
    cardBackground:
      "linear-gradient(135deg, #09111e 0%, #103055 48%, #2e78cf 100%)",
    imageBackdrop:
      "radial-gradient(circle at 50% 35%, rgba(149,200,255,0.26) 0%, rgba(0,120,255,0.18) 40%, rgba(9,17,30,0.96) 100%)",
    icon: FiLayers,
    image: Answarly,
    imagePosition: "object-center",
  },
];

const GAP = 24;
const DRAG_BUFFER = 80;
const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 220,
  damping: 28,
};

function ProjectCard({ item, index, itemWidth, trackItemOffset, x }) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];

  const rotateY = useTransform(x, range, [16, 0, -16], { clamp: false });
  const scale = useTransform(x, range, [0.93, 1, 0.93], { clamp: false });
  const opacity = useTransform(x, range, [0.45, 1, 0.45], { clamp: false });

  const Icon = item.icon;

  return (
    <motion.article
      className="relative h-full min-h-[560px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 md:min-h-[620px] lg:min-h-0"
      style={{
        width: itemWidth,
        rotateY,
        scale,
        opacity,
        background:
          item.cardBackground ??
          "linear-gradient(135deg, #0f0c1a 0%, #1a1025 40%, #0f1a1f 100%)",
        boxShadow: `0 24px 72px ${item.glowColor ?? "rgba(0,0,0,0.14)"}`,
      }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-24`}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(2,4,8,0.5),rgba(4,6,10,0.24)_42%,rgba(2,4,8,0.62))]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: item.imageBackdrop,
          mixBlendMode: "screen",
          opacity: 0.14,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.015),transparent_28%,transparent_72%,rgba(255,255,255,0.008))]" />

      <div className="relative grid h-full grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Icon className="h-5 w-5 text-white" />
              </span>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/60"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <AnimatedHeading
              as="h2"
              className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {item.title}
            </AnimatedHeading>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base lg:max-w-sm">
              {item.description}
            </p>
          </div>

          <div className="mt-8">
            <Button label="VIEW PROJECT" size="compact" />
          </div>
        </div>

        <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden p-4 sm:min-h-[280px] sm:p-6 md:min-h-[320px] md:p-8 lg:min-h-0">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${item.glowColor ?? "rgba(139,92,246,0.2)"} 0%, transparent 70%)`,
              opacity: 0.35,
            }}
          />

          <div className="relative flex h-full w-full max-w-[560px] flex-col rounded-[30px] border border-white/6 bg-black/40 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.46)] backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2 px-1">
              <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/16" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <div className="ml-3 h-2.5 flex-1 rounded-full bg-white/6" />
            </div>

            <div
              className="relative flex-1 overflow-hidden rounded-[24px] border border-white/8"
              style={{
                background:
                  item.imageBackdrop ??
                  "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.15), rgba(0,0,0,0.92))",
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(0,0,0,0.08)_18%,rgba(0,0,0,0.24)_62%,rgba(0,0,0,0.58))]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_20%,rgba(0,0,0,0.3)_72%,rgba(0,0,0,0.5)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-black/12" />

            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className={`relative h-full w-full object-contain p-3 drop-shadow-[0_18px_34px_rgba(0,0,0,0.42)] sm:p-4 md:p-6 ${item.imagePosition ?? "object-center"}`}
              />
            ) : (
              <div className="flex h-full flex-col gap-3 p-4">
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-red-400/60" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400/60" />
                  <div className="h-2 w-2 rounded-full bg-green-400/60" />
                  <div className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
                </div>

                <div className="flex flex-1 gap-3">
                  <div className="flex w-1/4 flex-col gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`h-6 rounded-lg bg-white/${i === 1 ? "15" : "5"}`} />
                    ))}
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="h-24 rounded-xl bg-white/5 border border-white/8" />
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="rounded-xl bg-white/5 border border-white/8" />
                      <div className="rounded-xl bg-white/8 border border-white/8" />
                      <div className="rounded-xl bg-white/5 border border-white/8" />
                      <div className="rounded-xl bg-white/5 border border-white/8" />
                    </div>
                  </div>
                </div>

              </div>
            )}

              <div className="absolute bottom-4 right-4 rounded-full border border-white/8 bg-black/35 px-4 py-2 backdrop-blur-sm">
                <p className="text-sm font-semibold tracking-[0.28em] text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.article>
  );
}

export default function OurProjects({
  items = DEFAULT_ITEMS,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
}) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return undefined;
    }

    const updateWidth = () => {
      setViewportWidth(node.clientWidth);
    };

    updateWidth();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay || items.length <= 1) {
      return undefined;
    }

    if (pauseOnHover && isHovered) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, autoplayDelay);

    return () => window.clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, items.length, pauseOnHover]);

  const itemWidth = Math.max(viewportWidth || 0, 320);
  const trackItemOffset = itemWidth + GAP;
  const currentIndex = activeIndex >= items.length ? 0 : activeIndex;

  useEffect(() => {
    const controls = animate(x, -(currentIndex * trackItemOffset), SPRING_OPTIONS);

    return () => controls.stop();
  }, [currentIndex, trackItemOffset, x]);

  if (items.length === 0) {
    return null;
  }

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;

    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) {
      animate(x, -(currentIndex * trackItemOffset), SPRING_OPTIONS);
      return;
    }

    setActiveIndex((current) => {
      const nextIndex = current + direction;

      if (nextIndex < 0) {
        return items.length - 1;
      }

      if (nextIndex > items.length - 1) {
        return 0;
      }

      return nextIndex;
    });
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return (
    <div
      className="flex h-full min-h-[640px] flex-col shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:min-h-[720px] lg:min-h-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="relative min-h-0 w-full flex-1 overflow-hidden rounded-[28px]"
      >
        <motion.div
          className="flex h-full"
          drag="x"
          dragConstraints={{
            left: -trackItemOffset * Math.max(items.length - 1, 0),
            right: 0,
          }}
          style={{
            gap: `${GAP}px`,
            perspective: 1400,
            perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, index) => (
            <ProjectCard
              key={item.id}
              item={item}
              index={index}
              itemWidth={itemWidth}
              trackItemOffset={trackItemOffset}
              x={x}
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-4 flex shrink-0 flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={goToPrevious}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition-colors duration-300 hover:bg-white hover:text-black"
          aria-label="Show previous project"
        >
          <FiArrowLeft className="h-5 w-5" />
        </button>

        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-10 bg-white"
                : "w-2.5 bg-white/25 hover:bg-white/45"
            }`}
            aria-label={`Show project ${index + 1}`}
          />
        ))}

        <button
          type="button"
          onClick={goToNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition-colors duration-300 hover:bg-white hover:text-black"
          aria-label="Show next project"
        >
          <FiArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
