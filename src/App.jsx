import "./App.css";

import { IntroTransition } from "./Component/Intro&Work";
import OurFDevelopment from "./Component/OurDevelopment";
import ProjectsReveal from "./Component/ProjectRenevel";
import TeamReview from "./Component/ForTeamReview";
import AIUpdatesBanner from "./Component/LastGenerallSection";
import Footer from "./Component/Footer";
import GooeyNav from "./Component/NavbarAnimination";
import {
  NAV_ITEMS,
  ROUTES,
  SECTION_IDS,
  navigateToPath,
  navigateToSection,
} from "./navigation";

function App() {
  return (
    <div id={SECTION_IDS.home} className="bg-black text-white">
      <GooeyNav
        items={NAV_ITEMS}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        onItemSelect={(item) => navigateToSection(item.sectionId)}
        onLogoClick={() => navigateToSection(SECTION_IDS.home)}
        ctaLabel="Contact"
        onCtaClick={() => navigateToPath(ROUTES.contact)}
      />
      <div className="bg-black">
        <IntroTransition />

        <section
          id={SECTION_IDS.services}
          className="relative z-10 min-h-screen scroll-mt-28 bg-[#0a0a0a] pb-10"
        >
          <OurFDevelopment />
        </section>
      </div>

      <section id={SECTION_IDS.caseStudy} className="scroll-mt-28">
        <ProjectsReveal />
      </section>
      <TeamReview />
      <AIUpdatesBanner />
      <Footer />
    </div>
  );
}

export default App;
