import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import OurProjects from "./OurProjects";
import Button from "./Button";

export default function ProjectsReveal() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  // Dot starts tiny, expands to full screen
  const scale = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Content fades in after dot has expanded
  const contentOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.7, 1], [30, 0]);

  return (
    <div ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        {/* The expanding dot */}
        <motion.div
          style={{ scale }}
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a0a0a]"
        />

        {/* Content fades in once dot fills screen */}
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="absolute inset-0 z-10 flex justify-center overflow-hidden"
        >
          <div className="flex h-full w-full max-w-[90%] flex-col px-6 py-8 md:px-10 md:py-10">

            {/* TOP 20% — Heading + Button */}
            <div className="flex h-[20%] flex-col items-center justify-center gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-4xl">
                <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                  Real-World Success Stories
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 md:text-base">
                  How Our Solutions Helped Businesses Overcome Challenges and Achieve Growth
                </p>
              </div>
              <div className="flex justify-start md:justify-end">
                <Button />
              </div>
            </div>

            {/* BOTTOM 80% — Projects */}
            <div className="h-[80%] w-full">
              <OurProjects autoplay={false} pauseOnHover={false} />
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}