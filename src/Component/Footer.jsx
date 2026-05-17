import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { FiFacebook, FiInstagram, FiGlobe, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import {
  ROUTES,
  SECTION_IDS,
  navigateToPath,
  navigateToSection,
} from "../navigation";

const AnimatedLink = ({ heading, href, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const content = (
    <>
      <motion.span
        variants={{
          initial: { x: 0 },
          whileHover: { x: -4 },
        }}
        transition={{ type: "spring", staggerChildren: 0.04, delayChildren: 0.05 }}
        className="flex text-sm text-white/45 transition-colors duration-300 group-hover:text-white"
      >
        {heading.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { x: 0 },
              whileHover: { x: 3 },
            }}
            transition={{ type: "spring" }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>

      <motion.span
        variants={{
          initial: { opacity: 0, x: -4 },
          whileHover: { opacity: 1, x: 0 },
        }}
        transition={{ type: "spring" }}
        className="text-white/60"
      >
        <FiArrowUpRight size={12} />
      </motion.span>
    </>
  );

  const sharedProps = {
    ref,
    onMouseMove: handleMouseMove,
    initial: "initial",
    whileHover: "whileHover",
    className: "group relative flex items-center gap-1 text-left",
  };

  if (onClick) {
    return (
      <motion.button type="button" onClick={onClick} {...sharedProps}>
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a href={href} {...sharedProps}>
      {content}
    </motion.a>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { heading: "Home", onClick: () => navigateToSection(SECTION_IDS.home) },
    { heading: "About", onClick: () => navigateToSection(SECTION_IDS.about) },
    { heading: "Services", onClick: () => navigateToSection(SECTION_IDS.services) },
    { heading: "Case Study", onClick: () => navigateToSection(SECTION_IDS.caseStudy) },
    { heading: "Contact", onClick: () => navigateToPath(ROUTES.contact) },
  ];

  const serviceLinks = [
    "Product Design",
    "Web Development",
    "Mobile Development",
    "VR Development",
    "Gen-AI Development",
    "AI Solutions",
    "Data Analytics",
  ];

  return (
    <footer className="relative isolate w-full overflow-hidden bg-black">
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <button
              type="button"
              onClick={() => navigateToSection(SECTION_IDS.home)}
              className="w-fit text-left"
            >
              <span className="text-2xl font-bold tracking-tight text-white">
                bav
                <span
                  style={{
                    background: "linear-gradient(90deg, #f97316, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  e
                </span>
              </span>
            </button>

            <p className="text-sm leading-6 text-white/40">
              Endless Possibilities. <br /> Next Imagine.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: <FiFacebook size={16} />, href: "#" },
                { icon: <FiInstagram size={16} />, href: "#" },
                { icon: <FiGlobe size={16} />, href: "#" },
                { icon: <FiLinkedin size={16} />, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.15, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/35 transition-colors duration-200 hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-white">Quick Links</p>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <AnimatedLink key={link.heading} heading={link.heading} onClick={link.onClick} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-white">Services</p>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <AnimatedLink
                  key={link}
                  heading={link}
                  onClick={() => navigateToPath(ROUTES.contact)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="flex flex-col gap-3">
              {["contact@baveholdings.com", "hr@baveholdings.com"].map((email) => (
                <AnimatedLink key={email} heading={email} href={`mailto:${email}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row md:px-10">
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-white/60">Legal</span>
            <button
              type="button"
              onClick={() => navigateToPath(ROUTES.privacy)}
              className="text-sm text-white/35 transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </button>
          </div>

          <p className="text-sm text-white/30">
            © {currentYear} bave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
