"use client";

interface Stalk {
  x: number;
  h: number;
  color: string;
  opacity: number;
}

// Детерминированный псевдослучайный генератор (без Math.random),
// чтобы компонент оставался чистой функцией при рендере.
function seededRandom(seed: number) {
  const x = Math.sin(seed * 999.7) * 43758.5453;
  return x - Math.floor(x);
}

const WIDTH = 1200;
const COUNT = 90;
const BASE = 150;

const stalks: Stalk[] = Array.from({ length: COUNT }, (_, i) => {
  const x = (i / COUNT) * WIDTH + (seededRandom(i) * 6 - 3);
  const h = 60 + seededRandom(i + 0.5) * 55;
  return {
    x,
    h,
    color: i % 3 === 0 ? "#7C8B5B" : "#D9A227",
    opacity: 0.5 + seededRandom(i + 0.25) * 0.3,
  };
});

export function WheatField() {
  const base = BASE;

  return (
    <div className="relative mt-16 h-[150px]" aria-hidden="true">
      <svg
        viewBox="0 0 1200 150"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-full w-full"
      >
        {stalks.map((s, i) => (
          <g
            key={i}
            className="stalk"
            style={{ transformOrigin: `${s.x}px ${base}px` }}
          >
            <line
              x1={s.x}
              y1={base}
              x2={s.x}
              y2={base - s.h}
              stroke={s.color}
              strokeWidth={1.6}
              strokeLinecap="round"
              opacity={s.opacity}
            />
            <circle cx={s.x} cy={base - s.h} r={2.4} fill="#E9C15E" opacity={0.7} />
          </g>
        ))}
      </svg>
    </div>
  );
}
