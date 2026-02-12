"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";

const highlights = [
  { label: "AI & ML", icon: "🧠" },
  { label: "Deep Learning", icon: "⚡" },
  { label: "Robotics", icon: "🤖" },
  { label: "Research", icon: "📚" },
  { label: "Physics", icon: "🔬" },
  { label: "Systems", icon: "⚙️" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary-400 mb-2"
          >
            01. About Me
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
              I&apos;m a Computer Engineering undergraduate with a deep passion for
              building intelligent systems that operate at the intersection of
              software and hardware. My work spans{" "}
              <span className="text-primary-400 font-medium">
                artificial intelligence
              </span>
              ,{" "}
              <span className="text-primary-400 font-medium">
                machine learning
              </span>
              , and{" "}
              <span className="text-primary-400 font-medium">robotics</span>,
              driven by a research-oriented mindset and a foundation in physics
              and mathematics.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I specialize in designing and implementing deep learning models,
              optimizing them for real-world deployment, and integrating AI
              capabilities into robotic systems. From developing reinforcement
              learning agents for autonomous navigation to building efficient
              neural architectures for edge devices, I thrive on solving complex
              engineering problems.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              My approach combines rigorous mathematical thinking with hands-on
              engineering — I believe that truly impactful AI systems must be
              grounded in both theoretical understanding and practical
              implementation. I&apos;m actively pursuing research opportunities and
              seeking roles where I can contribute to advancing the state of the
              art.
            </p>
          </div>

          {/* Floating Highlights */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className={`glass-card rounded-xl p-4 text-center cursor-default
                  hover:shadow-lg hover:shadow-primary-500/10 transition-shadow duration-300
                  ${i % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
