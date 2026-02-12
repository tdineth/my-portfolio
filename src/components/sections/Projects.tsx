"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { projects, type Project } from "@/data/projects";
import { FiGithub, FiExternalLink, FiX, FiStar } from "react-icons/fi";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const tagColors: Record<string, string> = {
  AI: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  Robotics: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Systems: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Research: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Startup: "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

const filters = ["All", "AI", "Startup", "Systems", "Research", "Robotics"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <SectionWrapper id="projects" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-[var(--text-muted)] mt-3 max-w-md mx-auto text-sm">
            Case studies of engineering challenges solved with AI, robotics, and systems thinking.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  activeFilter === filter
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                    : "glass-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onExpand={() => setExpandedProject(project.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expandedProject && (
          <ProjectModal
            project={projects.find((p) => p.id === expandedProject)!}
            onClose={() => setExpandedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

function ProjectCard({
  project,
  index,
  onExpand,
}: {
  project: Project;
  index: number;
  onExpand: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, ...spring }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onExpand}
      className="glass-card rounded-2xl p-6 cursor-pointer glow-border group
        hover:shadow-xl hover:shadow-primary-500/5 transition-shadow duration-300"
    >
      {/* Header: Tags + Stars */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border
                transition-all duration-300 group-hover:shadow-sm ${
                tagColors[tag] || "bg-gray-500/15 text-gray-400 border-gray-500/20"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        {project.stars && (
          <span className="flex items-center gap-1 text-[11px] text-[var(--text-muted)]
            font-medium shrink-0 ml-2">
            <FiStar className="w-3 h-3" />
            {project.stars}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold mb-2 group-hover:text-primary-400 transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="px-1.5 py-0.5 rounded text-[10px] font-mono
              bg-[var(--bg-secondary)] text-[var(--text-muted)]"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[var(--text-muted)]">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[11px] font-medium text-[var(--text-muted)]
                hover:text-primary-400 transition-colors duration-200"
            >
              <FiGithub className="w-3.5 h-3.5" />
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[11px] font-medium text-[var(--text-muted)]
                hover:text-primary-400 transition-colors duration-200"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
        </div>
        <span className="text-[10px] text-[var(--text-muted)] group-hover:text-primary-400 transition-colors">
          View Case Study →
        </span>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={spring}
        onClick={(e) => e.stopPropagation()}
        className="relative glass-card rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg glass-card flex items-center justify-center
            hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
        >
          <FiX className="w-4 h-4" />
        </button>

        {/* Tags + Stars */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${
                  tagColors[tag] || "bg-gray-500/15 text-gray-400 border-gray-500/20"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          {project.stars && (
            <span className="flex items-center gap-1 text-xs text-[var(--text-muted)] font-medium">
              <FiStar className="w-3.5 h-3.5 text-amber-400" />
              {project.stars}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-gradient">
          {project.title}
        </h3>

        {/* Case Study Sections */}
        <div className="space-y-5">
          <CaseStudyBlock
            title="🎯 Problem"
            content={project.problem}
          />
          <CaseStudyBlock
            title="🔧 Approach"
            content={project.approach}
          />
          <CaseStudyBlock
            title="📊 Impact"
            content={project.impact}
            highlight
          />
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium
                  bg-primary-500/10 text-primary-400 border border-primary-500/15"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[var(--border-color)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <FiGithub className="w-4 h-4" />
              View Source
            </a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
              }}
              className="btn-primary text-sm"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CaseStudyBlock({
  title,
  content,
  highlight = false,
}: {
  title: string;
  content: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 ${
        highlight
          ? "bg-primary-500/5 border border-primary-500/15"
          : "bg-[var(--bg-secondary)]"
      }`}
    >
      <h4 className="text-sm font-bold mb-1.5">{title}</h4>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {content}
      </p>
    </div>
  );
}
