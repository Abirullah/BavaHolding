import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from './Button'

// Inline SVG brand icons (lucide-react does not export Facebook/Instagram/LinkedIn)
const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <LinkedinIcon />, label: "LinkedIn" },
  { icon: <InstagramIcon />, label: "Instagram" },
];

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05010d] text-white px-6 md:px-20 py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-700/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/20 blur-[140px] rounded-full" />
        <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
            <span className="text-sm tracking-widest uppercase text-purple-300">
              Contact Us
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            Let's Build Something
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            From AI-powered systems to immersive digital experiences,
            we transform ideas into world-class products.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-sm font-semibold mb-6 shadow-lg shadow-purple-500/20">
                Get In Touch
              </div>

              <h2 className="text-3xl font-bold leading-tight mb-6">
                Contact Experts
              </h2>

              <p className="text-white/65 text-lg leading-relaxed max-w-xl">
                We specialize in AI systems, full-stack apps,
                immersive AR/VR experiences, metaverse products,
                SaaS platforms, and premium web experiences.
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="group p-6 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Email Support</h3>
                    <p className="text-white/60">contact@baveholdings.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="group p-6 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Let's Talk</h3>
                    <p className="text-white/60">+1 279 229 2380</p>
                    <p className="text-white/60">+92 309 921 9129</p>
                    <p className="text-white/60">+92 320 190 3991</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="group p-6 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Head Office</h3>
                    <p className="text-white/60">2108 Sten St, Sacramento, CA 95816, USA</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* SOCIALS */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socials.map(({ icon, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -6, scale: 1.08 }}
                    className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-500 shadow-lg"
                    aria-label={label}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-3xl rounded-[40px]" />

            <div className="relative p-8 md:p-10 rounded-[40px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-2xl">
              <h2 className="text-2xl font-bold mb-3">Send us a message</h2>
              <p className="text-white/60 mb-10">
                AI, Web Development, SaaS, AR/VR, Metaverse, Gaming & Product Design
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <InputField placeholder="Your Name" />
                  <InputField placeholder="Company" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <InputField placeholder="Phone" />
                  <InputField placeholder="Email" />
                </div>

                <InputField placeholder="Subject" />

                <textarea
                  placeholder="Tell us about your project..."
                  rows="6"
                  className="w-full rounded-2xl border border-white/10 bg-[#12051f] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-violet-500 transition-all duration-300 resize-none"
                />

                <Button label="SEND MESSAGE" type="submit" />
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-2xl border border-white/10 bg-[#12051f] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-violet-500 focus:shadow-lg focus:shadow-violet-500/10 transition-all duration-300"
    />
  );
}
