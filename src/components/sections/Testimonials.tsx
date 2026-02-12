"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { FiMessageSquare } from "react-icons/fi";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const testimonials = [
  {
    quote:
      "Theekshana demonstrates an exceptional grasp of both theoretical foundations and practical implementation in AI and signal processing. His research-oriented approach and ability to independently design experiments sets him apart from his peers.",
    author: "Research Advisor",
    role: "Multidisciplinary AI Research Centre",
    affiliation: "University of Peradeniya",
  },
  {
    quote:
      "One of the most driven students in the batch. His ability to lead teams, organize national-level AI events, and simultaneously deliver strong academic results is remarkable for an undergraduate.",
    author: "Faculty Mentor",
    role: "Department of Computer Engineering",
    affiliation: "University of Peradeniya",
  },
  {
    quote:
      "Delivered a complex AI-powered product at WriteScan with production-quality thinking and strong system design instincts. His entrepreneurial mindset combined with deep technical ability made him an outstanding team lead.",
    author: "Industry Mentor",
    role: "Neo Ventures / Startup Ecosystem",
    affiliation: "Innovation Advisor",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ...spring }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 glow-border"
            >
              <FiMessageSquare className="w-5 h-5 text-primary-400/50 mb-3" />
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-[var(--border-color)] pt-3">
                <p className="text-sm font-bold">{t.author}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  {t.role} · {t.affiliation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
