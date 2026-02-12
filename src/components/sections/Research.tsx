"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import {
  researchInterests,
  publications,
  researchTimeline,
  futureTopics,
} from "@/data/research";
import { FiFileText, FiDownload, FiExternalLink, FiCompass } from "react-icons/fi";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const statusBadge: Record<string, string> = {
  published: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "under-review": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "in-progress": "bg-blue-500/15 text-blue-400 border-blue-500/20",
};

const statusLabel: Record<string, string> = {
  published: "Published",
  "under-review": "Under Review",
  "in-progress": "In Progress",
};

const timelineTypeColor: Record<string, string> = {
  project: "bg-primary-500",
  topic: "bg-accent-500",
  milestone: "bg-emerald-500",
};

export default function Research() {
  return (
    <SectionWrapper id="research" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Research <span className="text-gradient">Profile</span>
          </h2>

          {/* Currently Exploring Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={spring}
            className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full glass-card
              text-xs font-medium text-primary-400"
          >
            <FiCompass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
            Currently Exploring: Sim-to-Real Transfer Learning
          </motion.div>
        </div>

        {/* Research Interests */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {researchInterests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ...spring }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 glow-border"
            >
              <span className="text-3xl mb-3 block">{interest.icon}</span>
              <h3 className="text-lg font-bold mb-2">{interest.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two Column: Timeline + Publications */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-primary-400">📅</span>
              Research Timeline
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3 top-2 bottom-2 w-px bg-[var(--border-color)]" />

              <div className="space-y-5">
                {researchTimeline.map((event, i) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, ...spring }}
                    className="relative pl-9"
                  >
                    {/* Dot */}
                    <div
                      className={`absolute left-1.5 top-1.5 w-3 h-3 rounded-full ${
                        timelineTypeColor[event.type]
                      } ring-4 ring-[var(--bg-primary)]`}
                    />

                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      {event.year}
                    </span>
                    <h4 className="text-sm font-bold mt-0.5">{event.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FiFileText className="w-5 h-5 text-primary-400" />
              Publications
            </h3>

            <div className="space-y-4">
              {publications.map((pub, i) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ...spring }}
                  className="glass-card rounded-xl p-4 hover:shadow-lg hover:shadow-primary-500/5
                    transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-sm leading-snug flex-1">
                      {pub.title}
                    </h4>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-medium border shrink-0 ${
                        statusBadge[pub.status]
                      }`}
                    >
                      {statusLabel[pub.status]}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-0.5">
                    {pub.authors}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {pub.venue} · {pub.year}
                  </p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary-400 mt-2 hover:underline"
                    >
                      <FiExternalLink className="w-3 h-3" />
                      Read Paper
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Future Focus Areas */}
            <div className="mt-8">
              <h4 className="text-sm font-bold mb-3 text-[var(--text-secondary)]">
                Future Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {futureTopics.map((topic, i) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, ...spring }}
                    className="px-3 py-1 rounded-full text-xs font-medium glass-card
                      text-[var(--text-muted)] hover:text-primary-400
                      transition-colors duration-200"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Download Research CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <motion.a
                href="/resume.pdf"
                download="Theekshana_Dineth_Resume.pdf"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="btn-secondary text-sm"
              >
                <FiDownload className="w-4 h-4" />
                Download Research CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
