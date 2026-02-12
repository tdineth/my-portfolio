"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const milestones = [
  {
    year: "2016–2024",
    title: "GCE Advanced Level — Physical Science",
    description:
      "Bandaranayake Central College Veyangoda. 3 A passes in Combined Mathematics, Physics and Chemistry.",
    icon: "🎓",
  },
  {
    year: "Mar 2024",
    title: "British Council & AutoCAD Certifications",
    description:
      "Advanced English Communication Skills from British Council. Certificate in AutoCAD from CADD Centre.",
    icon: "📜",
  },
  {
    year: "Oct 2024",
    title: "BSc Computer Engineering — University of Peradeniya",
    description:
      "Enrolled with focus on AI and software engineering. GPA: 3.83/4.00.",
    icon: "🏛️",
  },
  {
    year: "Dec 2024",
    title: "Line-Following Robot — Lead Developer",
    description:
      "Led development of an autonomous line-following robot for the EE Department. Arduino Uno, IR sensors, L293D motor driver.",
    icon: "🤖",
  },
  {
    year: "Apr 2025",
    title: "IEEE & Student Community",
    description:
      "Joined IEEE, ACES, Rotaract Club, Gavel Club, and Engineering Mathematics Society at UoP. IEEE SL Inspire Public Visibility Vice Chair.",
    icon: "🌐",
  },
  {
    year: "May 2025",
    title: "Hackers' Club & IEEE Sri Lanka Section",
    description:
      "Became IEEE Sri Lanka Section student member. Joined Hackers' Club UoP. Co-organized Jambor IEEE (Zone B) 2025.",
    icon: "💻",
  },
  {
    year: "Jun 2025",
    title: "Founded NovaMinds — WriteScan",
    description:
      "Co-founded NovaMinds as Team Leader. Built WriteScan handwriting automation system. Top 50 Inventors at Neo Ventures.",
    icon: "🚀",
  },
  {
    year: "Jul 2025",
    title: "AIFS Executive Director & MARC Event Organizer",
    description:
      "Executive Director of AI Forum for Students — Sri Lanka's first student AI forum, launched at AI Skills Week. Event Organizer at MARC. IEEE Day Ambassador.",
    icon: "👥",
  },
  {
    year: "Nov 2025",
    title: "Casual Instructor — CO1010",
    description:
      "Casual instructor for CO1010, Department of Computer Engineering, University of Peradeniya.",
    icon: "📚",
  },
  {
    year: "2025–Present",
    title: "NexClinic — AI Medical Decision Support",
    description:
      "Building agentic RAG system with vector databases and knowledge graphs for doctor-assisted diagnostics.",
    icon: "🏥",
  },
  {
    year: "2025",
    title: "Awards & Recognition",
    description:
      "2nd Place at Open Business Summit 2025. Multiple certificates of excellence from inter-university competitions.",
    icon: "🏆",
  },
];

export default function LearningTimeline() {
  return (
    <SectionWrapper id="journey" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Learning <span className="text-gradient">Timeline</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b
            from-transparent via-primary-500/20 to-transparent md:-translate-x-px" />

          <div className="space-y-8">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, ...spring }}
                  className={`relative flex items-start gap-4 md:gap-0
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      {m.year}
                    </span>
                    <h4 className="text-sm font-bold mt-0.5">{m.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center
                    w-5 h-5 rounded-full bg-[var(--bg-primary)] border-2 border-primary-500/40
                    text-[10px] z-10">
                    {m.icon}
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
