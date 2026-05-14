import { useRef } from "react";
import { useScroll } from "framer-motion";
import "./App.css";

import WaterDropGrid from "./Component/UnderHersection";
import BubbleTextGenerator from "./Component/BubbleText";
import Cursor from "./Component/MyCursere";
import HeroLogo from "./HeroLogo";
import IntroWork, { IntroTransition } from "./Intro&Work";

function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  return (
    <div className="bg-black relative">
      <Cursor />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-[360vh] z-10">
        <div className="sticky top-0 h-screen overflow-hidden">
          <WaterDropGrid />

          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <BubbleTextGenerator />
          </div>

          <HeroLogo scrollYProgress={scrollYProgress} />
          <IntroTransition scrollYProgress={scrollYProgress} />
        </div>
      </section>

   
    </div>
  );
}

export default App;
