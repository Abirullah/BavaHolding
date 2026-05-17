import Footer from "../Component/Footer";
import GooeyNav from "../Component/NavbarAnimination";
import {
  NAV_ITEMS,
  ROUTES,
  SECTION_IDS,
  navigateToPath,
  navigateToSection,
} from "../navigation";

const policySections = [
  {
    title: "1. Data Controller",
    paragraphs: [
      "For the purposes of the General Data Protection Regulation (EU) 2016/679 (GDPR), the data controller is:",
      "Bave Technologies",
      "2108 Sten St, Sacramento, CA 95816, USA",
      "contact@baveholdings.com",
      "+12792292380",
    ],
  },
  {
    title: "2. Scope of This Policy",
    paragraphs: [
      "This Privacy Policy applies to the processing of personal data collected through Bavetechnologies.com (the Website), which functions solely as a portfolio and contact platform for prospective clients to request quotations.",
    ],
  },
  {
    title: "3. Categories of Personal Data",
    paragraphs: [
      "3.1 Data Provided by the Data Subject",
      "Full name",
      "Email address",
      "Any personal data contained within correspondence or inquiry messages",
      "3.2 Technical and Usage Data",
      "IP address",
      "Browser type and version",
      "Device identifiers",
      "Access timestamps and page interaction data",
      "Such data is collected automatically as part of standard web server operations and is limited to what is strictly necessary.",
    ],
  },
  {
    title: "4. Purposes and Legal Bases for Processing",
    paragraphs: [
      "4.1 Legitimate Interests (Article 6(1)(f))",
      "Processing is necessary for our legitimate interests, including:",
      "Responding to inquiries and quotation requests",
      "Managing client communications",
      "Ensuring network and information security",
      "4.2 Pre-Contractual Measures (Article 6(1)(b))",
      "Processing is necessary in order to take steps at the request of the data subject prior to entering into a contract.",
      "4.3 Consent (Article 6(1)(a))",
      "Where applicable, processing is based on the data subject’s consent (e.g., voluntary submission of information). Consent may be withdrawn at any time.",
    ],
  },
  {
    title: "5. Nature of Processing",
    paragraphs: [
      "Processing activities include collection, recording, structuring, storage, consultation, use, disclosure by transmission (where strictly necessary), and restriction or erasure. All processing follows the principles of Article 5 GDPR.",
    ],
  },
  {
    title: "6. Data Recipients",
    paragraphs: [
      "Personal data may be disclosed strictly on a need-to-know basis to internal personnel, IT/hosting service providers (acting as processors), and competent authorities where required by law. Processors are subject to Article 28 GDPR obligations.",
    ],
  },
  {
    title: "7. International Transfers",
    paragraphs: [
      "Personal data may be transferred to and processed in Pakistan, a third country outside the European Economic Area (EEA). Such transfers are carried out under guards such as Article 49(1)(b) GDPR, strict access controls, and technical/organisational security measures.",
      "By submitting personal data, the data subject acknowledges and consents to such transfers where applicable.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "Inquiry data: Retained for a maximum of 12 months following last interaction.",
      "Technical data: Retained in accordance with server and security requirements.",
      "Data may be retained longer where required to comply with legal obligations.",
    ],
  },
  {
    title: "9. Data Subject Rights",
    paragraphs: [
      "Pursuant to Chapter III of the GDPR, data subjects have rights to access, rectification, erasure, restriction, portability, and objection.",
      "Requests should be submitted to: contact@baveholdings.com",
    ],
  },
  {
    title: "10. Cookies and Tracking",
    paragraphs: [
      "The Website does not deploy non-essential cookies or third-party analytics. Only strictly necessary cookies may be used for technical functioning (ePrivacy Directive 2002/58/EC).",
    ],
  },
  {
    title: "11. Security Measures",
    paragraphs: [
      "We implement TLS/SSL encryption, need-to-know access limitations, secure hosting, and regular monitoring (Article 32 GDPR).",
    ],
  },
  {
    title: "12. Third-Party Links",
    paragraphs: [
      "We bear no responsibility for the content or data protection practices of external websites linked from our Website.",
    ],
  },
  {
    title: "13. Children’s Data",
    paragraphs: [
      "The Website is not directed at individuals under 16. We do not knowingly process personal data relating to children.",
    ],
  },
  {
    title: "14. Supervisory Authority",
    paragraphs: [
      "Data subjects have the right to lodge a complaint with a supervisory authority within the EU (e.g., NAIH in Hungary).",
    ],
  },
  {
    title: "15. Amendments",
    paragraphs: [
      "We reserve the right to amend this Privacy Policy at any time. Changes will be published on this page.",
    ],
  },
  {
    title: "16. Contact",
    paragraphs: [
      "For all data protection-related inquiries:",
      "Company",
      "Bave Technologies",
      "2108 Sten St, Sacramento, CA 95816, USA",
      "Direct Contact",
      "contact@baveholdings.com",
      "+12792292380",
    ],
  },
];

export default function PrivacyPolicyPage() {
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

      <main className="bg-black px-6 pb-20 pt-32 md:px-10">
        <section className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_48%),radial-gradient(circle_at_right,rgba(168,85,247,0.14),transparent_42%)] px-6 py-10 md:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">
              Bave Technologies
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              Effective Date: March 26, 2026. Last Updated: March 26, 2026.
            </p>
          </div>

          <div className="space-y-10 px-6 py-10 md:px-10 md:py-12">
            {policySections.map((section) => (
              <article key={section.title} className="space-y-4">
                <h2 className="text-xl font-semibold text-white md:text-2xl">
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm leading-7 text-white/68 md:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={`${section.title}-${paragraph}`}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <button
              type="button"
              onClick={() => navigateToPath(ROUTES.home)}
              className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              ← Back to Home
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
