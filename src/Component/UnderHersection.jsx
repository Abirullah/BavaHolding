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
    <div className="w-screen h-screen bg-slate-900 overflow-hidden">
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
            className="dot-point w-2 h-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-300 opacity-50"
            data-index={index}
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