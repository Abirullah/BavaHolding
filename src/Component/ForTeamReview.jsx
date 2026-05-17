"use client";

import React from "react";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  ChevronDown,
  X,
} from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import Exporter from "../../public/Exporter.jsx";

const DEPARTMENTS = [
  "All",
  "Executives",
  "AI Department",
  "Web and App Development",
  "UI / UX & Graphics Designer",
  "Quality Assurance",
  "Game and XR Development",
  "Management",
];

const people = [
  {
    id: 1,
    name: "Saleem Khan",
    role: "CEO & Founder",
    department: "Executives",
    profile: Exporter.SaleemKhan,
  },
  {
    id: 2,
    name: "Aqsa Maqsood",
    role: "CTO & Co-Founder",
    department: "Executives",
    profile: Exporter.AqsaMaqsood,
  },
  {
    id: 3,
    name: "Naqib Ahmad",
    role: "Senior AI Engineer",
    department: "AI Department",
    profile: Exporter.NaqibAhmad,
  },
  {
    id: 4,
    name: "Mohammad Umair",
    role: "Senior AI Engineer",
    department: "AI Department",
    profile: Exporter.MohmmadUmair,
  },
  {
    id: 5,
    name: "Osama Zaman",
    role: "AI Engineer",
    department: "AI Department",
    profile: Exporter.OsamaZaman,
  },
  {
    id: 6,
    name: "Usman Ghani",
    role: "AI Engineer",
    department: "AI Department",
    profile: Exporter.UsmanGhani,
  },
  {
    id: 7,
    name: "Muhammad Talha",
    role: "AI Engineer",
    department: "AI Department",
    profile: Exporter.MuhammadTalha,
  },
  {
    id: 8,
    name: "Talha Alhamd",
    role: "AI Engineer",
    department: "AI Department",
    profile: Exporter.TalhaAhmad,
  },
  {
    id: 9,
    name: "Salman Khan",
    role: "Full Stack Developer",
    department: "Web and App Development",
    profile: Exporter.SalmanKhan,
  },
  {
    id: 10,
    name: "Muhammad Hamza Riaz",
    role: "Full Stack Developer",
    department: "Web and App Development",
    profile: Exporter.MuhammadHamza,
  },
  {
    id: 11,
    name: "Roqais Mahmood",
    role: "Full Stack Developer",
    department: "Web and App Development",
    profile: Exporter.RoqaisMuhammad,
  },
  {
    id: 12,
    name: "Syed Arsalan Shah",
    role: "Unity Developer",
    department: "Game and XR Development",
    profile: Exporter.SayadArsalan,
  },
  {
    id: 13,
    name: "Ameer",
    role: "Unity Technical Lead",
    department: "Game and XR Development",
    profile: Exporter.Ameer,
  },
  {
    id: 14,
    name: "Zarak Khan",
    role: "Unity AR Developer",
    department: "Game and XR Development",
    profile: Exporter.ZarakKhan,
  },
  {
    id: 15,
    name: "Saim Sanan",
    role: "Android Developer",
    department: "Game and XR Development",
    profile: Exporter.SaimSanan,
  },
  {
    id: 16,
    name: "Fahad Sharif",
    role: "Project Manager",
    department: "Management",
    profile: Exporter.FahadSharif,
  },
  {
    id: 17,
    name: "Ruba Wahid Khan",
    role: "Technical Product Owner",
    department: "Management",
    profile: Exporter.RubaWahidKhan,
  },
  {
    id: 18,
    name: "Zeenat Nisa",
    role: "HR & Social Media Manager",
    department: "Management",
    profile: Exporter.ZeenatNiqsa,
  },
  {
    id: 19,
    name: "Hannah Viqar",
    role: "Software Quality Engineer",
    department: "Quality Assurance",
    profile: Exporter.HannahViqar,
  },
  {
    id: 20,
    name: "Fizza Ali",
    role: "QA Analyst",
    department: "Quality Assurance",
    profile: Exporter.FizzaAli,
  },
  {
    id: 21,
    name: "Ismail",
    role: "Senior UI/UX Designer",
    department: "UI / UX & Graphics Designer",
    profile: Exporter.Ismail,
  },
  {
    id: 22,
    name: "Ali Abbass",
    role: "UI/UX Designer",
    department: "UI / UX & Graphics Designer",
    profile: Exporter.AliAbass,
  },
  {
    id: 23,
    name: "Laiba Nazir",
    role: "Graphic Designer",
    department: "UI / UX & Graphics Designer",
    profile: Exporter.LaibaNazir,
  },
];

const safeImage = (e) => {
  e.target.src =
    "https://placehold.co/100x100/1a1a2e/ffffff?text=?";
};

const useIsMobile = (breakpoint = 868) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const check = () => setIsMobile(window.innerWidth < breakpoint);

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

function TiltCard({ person }) {
  const ref = React.useRef(null);

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

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
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
      className="
        relative
        h-[420px]
        w-[320px]
        rounded-[32px]
        bg-gradient-to-br
        from-white/10
        to-white/5
      "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="
          absolute
          inset-4
          overflow-hidden
          rounded-[28px]
          border
          border-white
          bg-black
        "
      >
        <img
          src={person.profile}
          alt={person.name}
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}

function OrbitCarousel({
  filteredPeople,
  showDoubleRing,
  setSelectedPerson,
}) {
  const isMobile = useIsMobile();

  const [rotation, setRotation] = React.useState(0);

  const outerRadius = isMobile ? 140 : 210;
  const innerRadius = isMobile ? 80 : 125;
  const profileSize = isMobile ? 52 : 68;

  const containerSize = outerRadius * 2 + 120;

  React.useEffect(() => {
    let frame;

    const animate = () => {
      setRotation((prev) => prev + 0.08);
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  const getAngle = (index, total) => (index / total) * 360;

  if (filteredPeople.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-white/40 text-sm">
        No team members.
      </div>
    );
  }

  const outerPeople = showDoubleRing
    ? filteredPeople.slice(0, Math.ceil(filteredPeople.length / 2))
    : filteredPeople;

  const innerPeople = showDoubleRing
    ? filteredPeople.slice(Math.ceil(filteredPeople.length / 2))
    : [];

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div
        className="relative flex items-center justify-center"
        style={{
          width: containerSize,
          height: containerSize,
        }}
      >
        {/* OUTER TRACK */}
        <div
          className="absolute rounded-full border border-white/20"
          style={{
            width: outerRadius * 2,
            height: outerRadius * 2,
          }}
        />

        {/* INNER TRACK */}
        {showDoubleRing && (
          <div
            className="absolute rounded-full border border-white/20"
            style={{
              width: innerRadius * 2,
              height: innerRadius * 2,
            }}
          />
        )}

        {/* OUTER PEOPLE */}
        {outerPeople.map((p, i) => {
          const angle =
            (getAngle(i, outerPeople.length) + rotation - 90) *
            (Math.PI / 180);

          const cx = Math.cos(angle) * outerRadius;
          const cy = Math.sin(angle) * outerRadius;

          return (
            <motion.div
              key={p.id}
              className="absolute"
              animate={{
                x: cx,
                y: cy,
              }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.2, 0.64, 1],
              }}
              style={{
                width: profileSize,
                height: profileSize,
              }}
            >
              <motion.img
                src={p.profile}
                alt={p.name}
                onError={safeImage}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPerson(p)}
                className="
                  h-full
                  w-full
                  cursor-pointer
                  rounded-full
                  border
                  border-white/20
                  object-cover
                  opacity-70
                  transition-all
                  duration-300
                  hover:opacity-100
                "
              />
            </motion.div>
          );
        })}

        {/* INNER PEOPLE */}
        {innerPeople.map((p, i) => {
          const angle =
            (getAngle(i, innerPeople.length) - rotation - 90) *
            (Math.PI / 180);

          const cx = Math.cos(angle) * innerRadius;
          const cy = Math.sin(angle) * innerRadius;

          return (
            <motion.div
              key={p.id}
              className="absolute"
              animate={{
                x: cx,
                y: cy,
              }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.2, 0.64, 1],
              }}
              style={{
                width: profileSize * 0.8,
                height: profileSize * 0.8,
              }}
            >
              <motion.img
                src={p.profile}
                alt={p.name}
                onError={safeImage}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPerson(p)}
                className="
                  h-full
                  w-full
                  cursor-pointer
                  rounded-full
                  border
                  border-white/15
                  object-cover
                  opacity-50
                  transition-all
                  duration-300
                  hover:opacity-100
                "
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function TeamReview() {
  const [activeDept, setActiveDept] = React.useState("All");

  const [selectedPerson, setSelectedPerson] = React.useState(null);

  const filteredPeople =
    activeDept === "All"
      ? people
      : people.filter((p) => p.department === activeDept);

  const showDoubleRing = activeDept === "All";

  return (
    <section className="relative isolate h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">

      {/* GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-500/5 blur-3xl" />

      {/* DROPDOWN */}
      <div className="absolute right-6 top-6 z-40 md:right-10 md:top-10">
        <div className="group relative">

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              text-sm
              text-white
              backdrop-blur-md
            "
          >
            Department
            <ChevronDown size={16} />
          </button>

          <div
            className="
              invisible
              absolute
              right-0
              top-[110%]
              w-64
              translate-y-2
              rounded-2xl
              border
              border-white/10
              bg-[#0f0f0f]/95
              p-3
              opacity-0
              backdrop-blur-xl
              transition-all
              duration-300
              group-hover:visible
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <div className="flex flex-col gap-2">
              {DEPARTMENTS.map((dept) => {
                const isActive = activeDept === dept;

                const count =
                  dept === "All"
                    ? people.length
                    : people.filter((p) => p.department === dept).length;

                return (
                  <button
                    key={dept}
                    onClick={() => setActiveDept(dept)}
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-white/[0.03] text-white/60 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    <span>{dept}</span>
                    <span>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="relative flex h-full flex-col px-6 py-10 md:px-14 md:py-12">

        {/* TITLE */}
        <div className="mb-8 text-center">
          <AnimatedHeading
            as="h1"
            className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Our Team of{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #e879f9, #67e8f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Innovators & Creators
            </span>
          </AnimatedHeading>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
            A diverse group of architects, developers, designers,
            and AI experts committed to building smarter digital
            experiences.
          </p>
        </div>

        {/* ORBIT */}
        <div className="flex flex-1 items-center justify-center">
          <OrbitCarousel
            filteredPeople={filteredPeople}
            showDoubleRing={showDoubleRing}
            setSelectedPerson={setSelectedPerson}
          />
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/80
              backdrop-blur-md
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedPerson(null)}
              className="
                absolute
                right-20
                top-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
              "
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center gap-8">

              <div className="text-center">
                <AnimatedHeading
                  as="h2"
                  className="text-4xl font-bold text-white"
                >
                  {selectedPerson.name}
                </AnimatedHeading>

                <p className="mt-3 text-white/60">
                  {selectedPerson.role}
                </p>
              </div>

              <TiltCard person={selectedPerson} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
