import { useRef } from "react";
import { useScroll } from "framer-motion";
import "./App.css";

import WaterDropGrid from "./Component/UnderHersection";
import BubbleTextGenerator from "./Component/BubbleText";
import Cursor from "./Component/MyCursere";
import HeroLogo from "./HeroLogo";
import { IntroTransition } from "./Intro&Work";
import OurFDevelopment from "./Component/OurFDevelopment";
import { Projects } from "./UnusedComponent/AmazingForProjects";
import SplashCursor from './Component/SplishCurserAffect'

function App() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-black relative min-h-screen">
      {/* <Cursor /> */}
    
     
     {/* <SplashCursor
       DENSITY_DISSIPATION={3.5}
       VELOCITY_DISSIPATION={2}
       PRESSURE={0.1}
       CURL={3}
       SPLAT_RADIUS={0.2}
       SPLAT_FORCE={6000}
       COLOR_UPDATE_SPEED={10}
       SHADING
       RAINBOW_MODE={false}
       COLOR="#A855F7"
     />
      */}

      {/* SCROLL ANIMATION AREA */}
      <section
        ref={heroRef}
        className="relative h-[350vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <WaterDropGrid />

          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <BubbleTextGenerator />
          </div>

          <HeroLogo scrollYProgress={scrollYProgress} />

          <IntroTransition scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* FINAL SECTION THAT STAYS */}
      <section className="relative z-10 min-h-screen bg-[#0a0a0a]">
        <OurFDevelopment/>
        
      </section>

      {/* <section className="relative z-10 min-h-screen">
        
        
      </section> */}
      

    </div>
  );
}

export default App;
