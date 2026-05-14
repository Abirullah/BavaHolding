import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("rgba(99,102,241,0.4)");

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // color shifting effect
  useEffect(() => {
    const interval = setInterval(() => {
      const colors = [
        "rgba(99,102,241,0.4)",   // indigo
        "rgba(34,211,238,0.4)",   // cyan
        "rgba(236,72,153,0.4)",   // pink
        "rgba(16,185,129,0.4)",   // green
      ];

      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75"
      style={{
        transform: `translate(${position.x - 25}px, ${position.y - 25}px)`,
      }}
    >
      <div
  style={{
    borderColor: color,
    boxShadow: `0 0 25px ${color}`,
  }}
  className="w-16 h-16 rounded-full border-2 bg-white/5 backdrop-blur-md"
/>
    </div>
  );
};

export default Cursor;