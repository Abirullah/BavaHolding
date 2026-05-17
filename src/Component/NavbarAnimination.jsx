import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Button from "./Button";

const randomBetween = (range = 1) => range / 2 - Math.random() * range;

const getParticlePoint = (distance, pointIndex, totalPoints) => {
  const angle =
    ((360 + randomBetween(8)) / totalPoints) *
    pointIndex *
    (Math.PI / 180);

  return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

const buildParticle = (index, duration, distances, radius, particleCount, colors) => {
  const rotate = randomBetween(radius / 10);

  return {
    start: getParticlePoint(distances[0], particleCount - index, particleCount),
    end: getParticlePoint(
      distances[1] + randomBetween(7),
      particleCount - index,
      particleCount
    ),
    time: duration,
    scale: 1 + randomBetween(0.2),
    color: colors[Math.floor(Math.random() * colors.length)],
    rotate:
      rotate > 0
        ? (rotate + radius / 20) * 10
        : (rotate - radius / 20) * 10,
  };
};

export default function GooeyNav({
  items = [],
  logo = "/Pasted image.png",
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  initialActiveIndex = 0,
  animationTime = 600,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  ctaLabel = "Contact",
  onCtaClick,
  onItemSelect,
  onLogoClick,
  onActiveChange,
}) {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const makeParticles = (element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;

    element.style.setProperty(
      "--time",
      `${bubbleTime}ms`
    );

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + randomBetween(timeVariance * 2);
      const p = buildParticle(i, t, d, r, particleCount, colors);

      element.classList.remove("active");

      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");

        particle.classList.add("particle");

        particle.style.setProperty(
          "--start-x",
          `${p.start[0]}px`
        );

        particle.style.setProperty(
          "--start-y",
          `${p.start[1]}px`
        );

        particle.style.setProperty(
          "--end-x",
          `${p.end[0]}px`
        );

        particle.style.setProperty(
          "--end-y",
          `${p.end[1]}px`
        );

        particle.style.setProperty(
          "--time",
          `${p.time}ms`
        );

        particle.style.setProperty(
          "--scale",
          `${p.scale}`
        );

        particle.style.setProperty(
          "--color",
          `var(--color-${p.color}, white)`
        );

        particle.style.setProperty(
          "--rotate",
          `${p.rotate}deg`
        );

        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);

        requestAnimationFrame(() => element.classList.add("active"));

        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch (error) {
            void error;
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };

    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);

    textRef.current.innerText = element.innerText;
  };

  const triggerItemChange = (index, element) => {
    const nextItem = items[index];

    onItemSelect?.(nextItem, index);
    onActiveChange?.(index);

    if (activeIndex === index) {
      if (element) {
        updateEffectPosition(element);
      }
      return;
    }

    setActiveIndex(index);

    if (!element) {
      return;
    }

    updateEffectPosition(element);

    if (filterRef.current) {
      filterRef.current
        .querySelectorAll(".particle")
        .forEach((particle) => filterRef.current.removeChild(particle));
    }

    if (textRef.current) {
      textRef.current.classList.remove("active");

      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleDesktopClick = (event, index) => {
    triggerItemChange(index, event.currentTarget);
  };

  const handleMobileChange = (event) => {
    const index = Number(event.target.value);

    if (Number.isNaN(index)) {
      return;
    }

    setActiveIndex(index);
    onActiveChange?.(index);
    onItemSelect?.(items[index], index);
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) {
      return;
    }

    const activeLi = navRef.current.querySelectorAll("li")[activeIndex];

    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }

    const ro = new ResizeObserver(() => {
      const currentItem = navRef.current?.querySelectorAll("li")[activeIndex];

      if (currentItem) {
        updateEffectPosition(currentItem);
      }
    });

    ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, [activeIndex]);

  return (
    <>
      <style>{`
        :root {
          --color-1: #ffffff;
          --color-2: rgba(255,255,255,0.8);
          --color-3: rgba(255,255,255,0.55);
          --color-4: rgba(255,255,255,0.95);
        }

        .effect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          display: grid;
          place-items: center;
          z-index: 1;
        }

        .effect.text {
          color: white;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.03em;
          transition: color 0.3s ease;
        }

        .effect.text.active {
          color: #0a0a0a;
        }

        .effect.filter {
          filter: blur(10px) contrast(25);
          mix-blend-mode: screen;
          isolation: isolate;
        }

        .effect.filter::before {
          content: "";
          position: absolute;
          inset: -60px;
          background: transparent;
          z-index: -2;
        }

        .effect.filter::after {
          content: "";
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,1),
              rgba(255,255,255,0.9)
            );

          transform: scale(0);
          opacity: 0;

          z-index: -1;

          border-radius: 9999px;

          box-shadow:
            0 0 30px rgba(255,255,255,0.2),
            inset 0 1px 0 rgba(255,255,255,0.6);
        }

        .effect.active::after {
          animation: pill 0.35s ease both;
        }

        @keyframes pill {
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .particle,
        .point {
          display: block;
          opacity: 0;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          transform-origin: center;
        }

        .particle {
          position: absolute;

          top: calc(50% - 8px);
          left: calc(50% - 8px);

          animation:
            particle calc(var(--time))
            ease
            1
            -350ms;
        }

        .point {
          background: var(--color);

          opacity: 1;

          filter: blur(1px);

          box-shadow:
            0 0 12px rgba(255,255,255,0.5);

          animation:
            point calc(var(--time))
            ease
            1
            -350ms;
        }

        @keyframes particle {
          0% {
            transform:
              rotate(0deg)
              translate(
                var(--start-x),
                var(--start-y)
              );

            opacity: 1;
          }

          70% {
            transform:
              rotate(calc(var(--rotate)*0.5))
              translate(
                calc(var(--end-x)*1.2),
                calc(var(--end-y)*1.2)
              );

            opacity: 1;
          }

          100% {
            transform:
              rotate(calc(var(--rotate)*1.2))
              translate(
                calc(var(--end-x)*0.5),
                calc(var(--end-y)*0.5)
              );

            opacity: 0;
          }
        }

        @keyframes point {
          0% {
            transform: scale(0);
            opacity: 0;
          }

          38% {
            opacity: 1;
          }

          65% {
            transform: scale(var(--scale));
            opacity: 1;
          }

          100% {
            transform: scale(0);
            opacity: 0;
          }
        }

        .gooey-item.active {
          color: black;
        }

        .gooey-item::after {
          content: "";

          position: absolute;

          inset: 0;

          border-radius: 9999px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,1),
              rgba(255,255,255,0.88)
            );

          opacity: 0;

          transform: scale(0.85);

          transition: all 0.3s ease;

          z-index: -1;

          box-shadow:
            0 8px 30px rgba(255,255,255,0.15),
            inset 0 1px 0 rgba(255,255,255,0.6);
        }

        .gooey-item.active::after {
          opacity: 1;
          transform: scale(1);
        }

        @keyframes navSlideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }

          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .nav-enter {
          animation:
            navSlideDown
            0.7s
            cubic-bezier(0.22,1,0.36,1)
            both;
        }
      `}</style>

      <header
        className="nav-enter fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-3 px-4 sm:px-6 md:px-8 lg:px-10"
        style={{
          height: "88px",
        }}
      >
        <button
          type="button"
          onClick={onLogoClick}
          className="z-50 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-[1.03] sm:h-14 sm:w-14 lg:h-16 lg:w-16"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </button>

        <div
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          style={{
            background:
              scrolled
                ? "rgba(255,255,255,0.08)"
                : "rgba(255,255,255,0.05)",

            border:
              "1px solid rgba(255,255,255,0.12)",

            borderRadius: "999px",

            padding: "6px",

            backdropFilter:
              "blur(20px) saturate(180%)",

            WebkitBackdropFilter:
              "blur(20px) saturate(180%)",

            boxShadow: scrolled
              ? `
                0 10px 40px rgba(0,0,0,0.45),
                inset 0 1px 0 rgba(255,255,255,0.12)
              `
              : `
                0 8px 32px rgba(0,0,0,0.25),
                inset 0 1px 0 rgba(255,255,255,0.08)
              `,
          }}
        >
          <div className="relative" ref={containerRef}>
            <nav
              className="flex relative"
              style={{
                transform:
                  "translate3d(0,0,0.01px)",
              }}
            >
              <ul
                ref={navRef}
                className="flex gap-1 list-none p-0 m-0 relative z-[3]"
              >
                {items.map((item, index) => (
                  <li
                    key={index}
                    className={`gooey-item rounded-full relative cursor-pointer transition-all duration-300 ${
                      activeIndex === index
                        ? "active"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={(event) =>
                        handleDesktopClick(event, index)
                      }
                      className="inline-block py-[0.72rem] px-[1.3rem] text-[13px] font-medium tracking-wide text-white/70 outline-none transition-all duration-300 hover:text-white"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <span className="effect filter" ref={filterRef} />

            <span className="effect text" ref={textRef} />
          </div>
        </div>

        <div className="flex flex-1 justify-center px-2 lg:hidden">
          <div
            className="relative w-full max-w-[260px] overflow-hidden rounded-full border border-white/12 bg-white/6 backdrop-blur-xl"
            style={{
              boxShadow: scrolled
                ? "0 10px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)"
                : "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <select
              value={String(activeIndex)}
              onChange={handleMobileChange}
              aria-label="Select a section"
              className="w-full appearance-none bg-transparent px-5 py-3 pr-11 text-sm font-medium tracking-[0.08em] text-white outline-none"
            >
              {items.map((item, index) => (
                <option key={item.label} value={index} className="bg-black text-white">
                  {item.label}
                </option>
              ))}
            </select>

            <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
          </div>
        </div>

        <div className="z-50 shrink-0">
          <Button
            label={ctaLabel}
            size="compact"
            onClick={onCtaClick}
          />
        </div>
      </header>
    </>
  );
}
