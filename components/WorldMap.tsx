"use client";

import { motion } from "motion/react";
import { useState } from "react";

// Stylised dot-matrix world; coordinates are on a 100 x 50 grid.
// Continents as overlapping ellipses: [cx, cy, rx, ry]
const land: [number, number, number, number][] = [
  [20, 14, 11, 7], [12, 9, 6, 4], [27, 21, 5, 5], [25, 26, 3, 2.5], [36, 6, 4, 3], // North America
  [30, 35, 5, 9], [30, 30, 6, 4], // South America
  [50, 12, 5, 4], [54, 9, 5, 4], // Europe
  [51, 26, 7, 7], [54, 34, 5, 6], // Africa
  [60, 22, 4, 3], // Middle East
  [72, 12, 15, 6.5], [68, 22, 3.5, 4.5], [78, 20, 6, 4], [83, 26, 3, 3], [88, 13, 4, 4], // Asia
  [84, 32, 5, 1.4], [88, 40, 6, 4], // Oceania
];

const pts: [number, number][] = [];
for (let y = 2; y < 48; y += 1.4)
  for (let x = 2; x < 98; x += 1.4)
    if (land.some(([cx, cy, rx, ry]) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1)) pts.push([+x.toFixed(2), +y.toFixed(2)]);

const hq = { name: "Hong Kong HQ", x: 80, y: 24 };
const nodes = [
  { name: "Dhaka", x: 71, y: 24 },
  { name: "Gurugram", x: 67, y: 22 },
  { name: "Manchester", x: 47, y: 11 },
  { name: "Keqiao", x: 81, y: 20 },
  { name: "Dubai", x: 60, y: 24 },
  { name: "Toronto", x: 26, y: 14 },
  { name: "Paris", x: 48, y: 14 },
  { name: "Warsaw", x: 53, y: 12 },
  { name: "Sydney", x: 89, y: 40 },
];

export default function WorldMap() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-paper/10 bg-ink-2 p-4 md:p-10">
      <svg viewBox="0 0 100 50" className="w-full">
        {pts.map(([x, y], i) => (
          <motion.circle key={i} cx={x} cy={y} r={0.32} fill="#f3efe7" initial={{ opacity: 0 }} whileInView={{ opacity: 0.22 }} viewport={{ once: true }} transition={{ delay: (x / 100) * 1.2, duration: 0.6 }} />
        ))}
        {nodes.map((n, i) => {
          const mx = (n.x + hq.x) / 2;
          const my = Math.min(n.y, hq.y) - Math.abs(n.x - hq.x) * 0.25 - 2;
          return (
            <motion.path
              key={n.name}
              d={`M${hq.x} ${hq.y} Q${mx} ${my} ${n.x} ${n.y}`}
              fill="none"
              stroke="var(--clay-2)"
              strokeWidth={hover === n.name ? 0.35 : 0.18}
              strokeDasharray="0.8 0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.6 + i * 0.12, ease: "easeInOut" }}
            />
          );
        })}
        {[hq, ...nodes].map((n, i) => (
          <g key={n.name} onMouseEnter={() => setHover(n.name)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
            <motion.circle cx={n.x} cy={n.y} r={i === 0 ? 1.4 : 0.9} fill="var(--clay)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1 + i * 0.1, type: "spring" }} />
            <circle cx={n.x} cy={n.y} r={i === 0 ? 1.4 : 0.9} fill="none" stroke="var(--clay-2)" strokeWidth="0.2">
              <animate attributeName="r" from={i === 0 ? 1.4 : 0.9} to={i === 0 ? 4 : 2.6} dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            {(hover === n.name || i === 0) && (
              <text x={n.x} y={n.y - 2.2} textAnchor="middle" fontSize="1.8" fontWeight="700" fill="#faf8f3">
                {n.name}
              </text>
            )}
          </g>
        ))}
      </svg>
      <div className="mt-6 flex flex-wrap gap-6 text-xs text-paper/60 md:absolute md:bottom-8 md:left-10 md:mt-0">
        <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-clay" /> Weftora office / market</span>
        <span className="flex items-center gap-2"><span className="h-px w-6 border-t border-dashed border-clay-2" /> Shipping route</span>
      </div>
    </div>
  );
}
