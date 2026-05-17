import ContactSection from "../Component/Contact";
import Footer from "../Component/Footer";
import GooeyNav from "../Component/NavbarAnimination";
import {
  NAV_ITEMS,
  ROUTES,
  SECTION_IDS,
  navigateToPath,
  navigateToSection,
} from "../navigation";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GooeyNav
        items={NAV_ITEMS}
        initialActiveIndex={0}
        onItemSelect={(item) => navigateToSection(item.sectionId)}
        onLogoClick={() => navigateToSection(SECTION_IDS.home)}
        ctaLabel="Back Home"
        onCtaClick={() => navigateToPath(ROUTES.home)}
      />

      <main className="bg-black">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
