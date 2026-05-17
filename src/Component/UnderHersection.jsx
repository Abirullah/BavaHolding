import anime from "animejs";
import { useEffect, useState } from "react";

const DOT_SIZE = 24;

const WaterDropGrid = () => {
  const [grid, setGrid] = useState({
    columns: 0,
    rows: 0,
  });

  useEffect(() => {
    const updateGrid = () => {
      const columns = Math.floor(window.innerWidth / DOT_SIZE);
      const rows = Math.floor(window.innerHeight / DOT_SIZE);

      setGrid({ columns, rows });
    };

    updateGrid();

    window.addEventListener("resize", updateGrid);

    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  return (
   <div
  className="w-screen h-screen overflow-hidden relative"
  style={{
    background: `
      radial-gradient(circle at top left, rgba(120,119,198,0.18), transparent 30%),
      radial-gradient(circle at top right, rgba(0,212,255,0.14), transparent 28%),
      radial-gradient(circle at bottom left, rgba(255,0,128,0.12), transparent 30%),
      linear-gradient(
        135deg,
        #020617 0%,
        #0f172a 35%,
        #111827 65%,
        #020617 100%
      )
    `,
  }}
>
      <DotGrid columns={grid.columns} rows={grid.rows} />
    </div>
  );
};

const DotGrid = ({ columns, rows }) => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(40, {
        grid: [columns, rows],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      dots.push(
        <div
          key={`${x}-${y}`}
          className="flex items-center justify-center"
          data-index={index}
        >
          <div
  className="dot-point w-2 h-2 rounded-full opacity-40"
  data-index={index}
  style={{
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(148,163,184,0.35))",
    boxShadow: "0 0 10px rgba(255,255,255,0.15)",
  }}
/>
        </div>
      );

      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      className="grid w-full h-full"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;