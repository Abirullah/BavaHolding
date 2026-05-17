import LeftImage from "../../public/vrgirl.0952d727.png";
import RightImage from "../../public/space.b00b888c.png";
import AnimatedHeading from "./AnimatedHeading";
import Button from './Button'

export default function AIUpdatesBanner() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-black h-screen lg:h-[80vh]">

      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/8 blur-[120px]" />
      <div className="pointer-events-none absolute left-[20%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-orange-500/8 blur-[100px]" />
      <div className="pointer-events-none absolute right-[20%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-purple-500/8 blur-[100px]" />

      {/* Top border line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[70%]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      />

      {/* Bottom border line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-[70%]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">

        {/* ── LEFT IMAGE — VR Girl ── */}
        <div className="hidden w-[30%] md:flex items-end justify-center">
          <img
            src={LeftImage}
            alt="AI VR"
            className="h-auto w-full max-h-[75vh] object-contain
              drop-shadow-[0_0_60px_rgba(249,115,22,0.2)]
              transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        {/* ── CENTER TEXT ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center md:px-10">

          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: "linear-gradient(90deg, #f97316, #a855f7)" }}
            />
            Newsletter
          </div>

          {/* Heading */}
          <AnimatedHeading
            as="h2"
            className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Get{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f97316, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI
            </span>{" "}
            Updates
          </AnimatedHeading>

          {/* Divider */}
          <div
            className="my-6 h-px w-16"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }}
          />

          {/* Description */}
          <p className="max-w-xs text-sm leading-7 mb-5 text-white/50 md:max-w-sm md:text-base">
            Subscribe for news, tips, and the latest on AI-powered apps and websites
          </p>

          {/* Button */}
          <Button/>

          {/* Social proof */}
          <p className="mt-5 text-xs text-white/25">
            Join 2,000+ developers & founders already subscribed
          </p>
        </div>

        {/* ── RIGHT IMAGE — Space ── */}
        <div className="hidden w-[30%] md:flex items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-3xl border ">
            {/* Overlay gradient on image */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.35))] z-10" />
            <img
              src={RightImage}
              alt="Space"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
