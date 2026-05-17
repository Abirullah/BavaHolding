import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import OurProjects from "./OurProjects";
import Button from "./Button";

export default function ProjectsReveal() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [
      "rgb(255,255,255)",
      "rgb(180,180,180)",
      "rgb(70,70,70)",
      "rgb(0,0,0)",
    ]
  );

  // Content fades in after dot has expanded
  const contentOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.7, 1], [30, 0]);

  return (
    <div ref={sectionRef} className="relative h-[240vh] md:h-[220vh] lg:h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <motion.div
          style={{
            scale,
            backgroundColor,
          }}
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
        />

        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="absolute inset-0 z-10 flex justify-center overflow-hidden"
        >
          <div className="flex h-full w-full max-w-[96%] min-h-0 flex-col px-4 py-6 sm:px-6 sm:py-8 md:max-w-[92%] md:px-8 md:py-10">
            <div className="flex shrink-0 flex-col items-center justify-center gap-6 border-b border-white/10 pb-6 text-center md:text-left lg:mx-auto lg:w-[90%] lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <AnimatedHeading
                  as="h1"
                  className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl"
                >
                  Real-World Success Stories
                </AnimatedHeading>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 md:text-base">
                  How Our Solutions Helped Businesses Overcome Challenges and Achieve Growth
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Button label="VIEW MORE" />
              </div>
            </div>

            <div className="mt-6 min-h-0 flex-1 self-center lg:w-[90%]">
              <OurProjects autoplay={false} pauseOnHover={false} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
