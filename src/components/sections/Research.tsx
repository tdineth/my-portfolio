"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { researchInterests, publications } from "@/data/research";
import { FiFileText, FiDownload, FiExternalLink } from "react-icons/fi";

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

export default function Research() {
  return (
    <SectionWrapper id="research" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary-400 mb-2"
          >
            04. Research
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Research <span className="text-gradient">Interests</span>
          </h2>
        </div>

        {/* Research Interests */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {researchInterests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
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

        {/* Publications */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FiFileText className="w-5 h-5 text-primary-400" />
            Publications & Papers
          </h3>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card rounded-xl p-5 hover:shadow-lg hover:shadow-primary-500/5
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
                <p className="text-xs text-[var(--text-muted)] mb-1">
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

          {/* Download Research CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary text-sm"
            >
              <FiDownload className="w-4 h-4" />
              Download Research CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
