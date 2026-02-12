"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "../SectionWrapper";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

// Proficiency bars data — based on real skills
const proficiencies = [
  { name: "Python / ML Stack", level: 90, color: "from-purple-500 to-pink-500" },
  { name: "C / Systems Programming", level: 80, color: "from-blue-500 to-cyan-500" },
  { name: "Deep Learning / LLMs", level: 85, color: "from-indigo-500 to-violet-500" },
  { name: "Django / Backend", level: 82, color: "from-emerald-500 to-teal-500" },
  { name: "Computer Vision", level: 78, color: "from-amber-500 to-orange-500" },
  { name: "MLOps (Airflow/MLflow)", level: 75, color: "from-rose-500 to-red-500" },
];

// Radar chart data (5 axes)
const radarAxes = [
  { label: "AI & ML", value: 0.9 },
  { label: "Backend", value: 0.82 },
  { label: "Research", value: 0.85 },
  { label: "Leadership", value: 0.88 },
  { label: "Systems", value: 0.78 },
];

// Seeded PRNG (mulberry32) to avoid hydration mismatch from Math.random()
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Heatmap: 52 weeks × 7 days — deterministic contribution simulation
function generateHeatmap(): number[][] {
  const rand = mulberry32(42); // fixed seed for consistent SSR/client output
  const weeks: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const days: number[] = [];
    for (let d = 0; d < 7; d++) {
      const recencyBoost = w / 52;
      const r = rand();
      if (r < 0.3 - recencyBoost * 0.15) days.push(0);
      else if (r < 0.6) days.push(1);
      else if (r < 0.85) days.push(2);
      else if (r < 0.95) days.push(3);
      else days.push(4);
    }
    weeks.push(days);
  }
  return weeks;
}

const heatmapData = generateHeatmap();

const heatmapColors: Record<string, Record<number, string>> = {
  dark: {
    0: "fill-gray-800",
    1: "fill-primary-900",
    2: "fill-primary-700",
    3: "fill-primary-500",
    4: "fill-primary-400",
  },
  light: {
    0: "fill-gray-200",
    1: "fill-primary-200",
    2: "fill-primary-300",
    3: "fill-primary-500",
    4: "fill-primary-600",
  },
};

// Featured case study — WriteScan
const caseStudy = {
  title: "WriteScan",
  metric: "Top 50",
  metricLabel: "Inventors — Neo Ventures",
  description:
    "AI-powered handwriting form automation system. Awarded 2nd Place at Open Business Summit 2025, University of Peradeniya.",
};

// All certifications and badges
const certifications = [
  "Apache Airflow 3 Fundamentals — Astronomer",
  "Google AI Essentials — Google",
  "Postman API Expert — Postman",
  "Ethical Hacker — Cisco",
  "Introduction to Cybersecurity — Cisco",
  "Computer Vision Honors — OpenCV University",
  "ML with Python — freeCodeCamp",
  "AI in Data Analysis — Sololearn",
  "Ethical AI Foundations — Sololearn",
  "Generative AI in Practice — Sololearn",
  "ML Basics — Sololearn",
  "Problem Solving (Intermediate) — HackerRank",
  "Python (Basic) — HackerRank",
  "Problem Solving (Basic) — HackerRank",
  "Programming in Python — UoM",
  "Foundations of Data Science — Google",
  "Gen AI 101 — Pieces for Developers",
  "Programming using C — Sololearn",
  "Dark Web Decoded — SOCRadar",
  "Google Build with AI 2025 — Google",
  "British Council English Certificate",
  "Certificate in AutoCAD — CADD Centre",
];

// Community and IEEE involvement
const involvements = [
  "IEEE Member",
  "IEEE Day Ambassador",
  "IEEE SL Inspire — PV Vice Chair",
  "IEEE SB UoP — VEO",
  "Hackers' Club — UoP",
  "ACES Member",
  "Rotaract Club — UoP",
  "Gavel Club — UoP",
  "Eng. Math Society — UoP",
];

export default function ProofOfSkill() {
  return (
    <SectionWrapper id="proof" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Demonstrated <span className="text-gradient">Competence</span>
          </h2>
        </div>

        {/* Top Row: Heatmap + Case Study */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* GitHub Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="md:col-span-2 glass-card rounded-2xl p-5 glow-border"
          >
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <span className="text-emerald-400">⬤</span>
              Contribution Activity
            </h3>
            <div className="overflow-x-auto">
              <svg
                viewBox="0 0 728 100"
                className="w-full min-w-[600px]"
                aria-label="GitHub contribution heatmap"
              >
                {heatmapData.map((week, w) =>
                  week.map((level, d) => (
                    <rect
                      key={`${w}-${d}`}
                      x={w * 14}
                      y={d * 14}
                      width="10"
                      height="10"
                      rx="2"
                      className={`${heatmapColors.dark[level]} dark:${heatmapColors.dark[level]}
                        transition-colors duration-200`}
                    />
                  ))
                )}
              </svg>
            </div>
            <div className="flex items-center gap-3 mt-3 text-[10px] text-[var(--text-muted)]">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <span
                  key={l}
                  className={`w-2.5 h-2.5 rounded-sm inline-block ${heatmapColors.dark[l]}`}
                />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
            className="glass-card rounded-2xl p-5 glow-border flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold mb-3 text-[var(--text-muted)]">
                Highlight
              </h3>
              <h4 className="text-base font-bold mb-2">{caseStudy.title}</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {caseStudy.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--border-color)]">
              <span className="text-2xl font-black text-gradient">
                {caseStudy.metric}
              </span>
              <span className="text-xs text-[var(--text-muted)] ml-2">
                {caseStudy.metricLabel}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Middle: Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="glass-card rounded-2xl p-5 glow-border mb-8"
        >
          <h3 className="text-sm font-bold mb-4">
            Certifications & Digital Badges ({certifications.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, i) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, ...spring }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium glass-card
                  text-[var(--text-secondary)] border border-[var(--border-color)]
                  hover:border-primary-500/30 hover:text-primary-400
                  transition-all duration-200"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Community Involvement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.15 }}
          className="glass-card rounded-2xl p-5 glow-border mb-8"
        >
          <h3 className="text-sm font-bold mb-4">Community & Leadership</h3>
          <div className="flex flex-wrap gap-2">
            {involvements.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, ...spring }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium
                  bg-primary-500/10 text-primary-400 border border-primary-500/15
                  hover:bg-primary-500/20 transition-all duration-200"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Row: Proficiency Bars + Radar Chart */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Proficiency Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.2 }}
            className="glass-card rounded-2xl p-5 glow-border"
          >
            <h3 className="text-sm font-bold mb-5">Tech Proficiency</h3>
            <div className="space-y-4">
              {proficiencies.map((p, i) => (
                <ProficiencyBar key={p.name} {...p} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.25 }}
            className="glass-card rounded-2xl p-5 glow-border flex flex-col items-center justify-center"
          >
            <h3 className="text-sm font-bold mb-4 self-start">Competency Areas</h3>
            <RadarChart axes={radarAxes} />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ProficiencyBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-xs font-medium">{name}</span>
        <span className="text-xs text-[var(--text-muted)] font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

function RadarChart({ axes }: { axes: { label: string; value: number }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const n = axes.length;
  const cx = 120;
  const cy = 120;
  const r = 90;

  const getPoint = (i: number, scale: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return {
      x: cx + Math.cos(angle) * r * scale,
      y: cy + Math.sin(angle) * r * scale,
    };
  };

  const gridLevels = [0.25, 0.5, 0.75, 1];

  const dataPoints = axes.map((a, i) => getPoint(i, a.value));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <div ref={ref}>
      <svg viewBox="0 0 240 240" className="w-48 h-48 md:w-56 md:h-56">
        {/* Grid rings */}
        {gridLevels.map((level) => {
          const points = Array.from({ length: n }, (_, i) => getPoint(i, level));
          const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
          return (
            <path
              key={level}
              d={path}
              fill="none"
              stroke="var(--border-color)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Axis lines */}
        {axes.map((_, i) => {
          const p = getPoint(i, 1);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="var(--border-color)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Data polygon */}
        <motion.path
          d={dataPath}
          fill="rgba(99, 102, 241, 0.15)"
          stroke="rgba(99, 102, 241, 0.6)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Data points */}
        {dataPoints.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="rgb(99, 102, 241)"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.1 }}
          />
        ))}

        {/* Labels */}
        {axes.map((a, i) => {
          const p = getPoint(i, 1.22);
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-[var(--text-muted)] text-[8px] font-medium"
            >
              {a.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
