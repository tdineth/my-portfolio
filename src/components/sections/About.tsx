"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const highlights = [
  { label: "AI & ML", icon: "🧠" },
  { label: "LLMs & GenAI", icon: "⚡" },
  { label: "Research", icon: "🔬" },
  { label: "Startups", icon: "🚀" },
  { label: "IEEE", icon: "🌐" },
  { label: "Teaching", icon: "📚" },
  { label: "Backend", icon: "⚙️" },
  { label: "Leadership", icon: "👥" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
              I&apos;m a{" "}
              <span className="text-primary-400 font-medium">
                Computer Engineering
              </span>{" "}
              undergraduate at the{" "}
              <span className="text-primary-400 font-medium">
                University of Peradeniya
              </span>{" "}
              (GPA: 3.83/4.00), specializing in{" "}
              <span className="text-primary-400 font-medium">
                Artificial Intelligence
              </span>{" "}
              and software engineering with extensive experience in research,
              startups and leadership.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              As Executive Director of Sri Lanka&apos;s first student-focused AI
              Forum, I lead national-level awareness programs and
              interdisciplinary tech initiatives. My research at the{" "}
              <span className="text-primary-400 font-medium">
                Multidisciplinary AI Research Centre
              </span>{" "}
              spans lung sound analysis, LLM studies, GenAI diffusion models,
              and implicit neural representations.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              On the entrepreneurial side, I founded{" "}
              <span className="text-primary-400 font-medium">NovaMinds</span>{" "}
              (WriteScan — recognized as Top 50 Inventors at Neo Ventures) and
              I&apos;m building{" "}
              <span className="text-primary-400 font-medium">NexClinic</span>,
              an AI-powered medical decision support system with agentic RAG
              architectures. I actively collaborate with industry, government
              and international academic partners.
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
                transition={{ delay: i * 0.08, ...spring }}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  transition: { ...spring },
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
