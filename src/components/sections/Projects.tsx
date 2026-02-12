"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { projects, type Project } from "@/data/projects";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

const tagColors: Record<string, string> = {
  AI: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  Robotics: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Systems: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Research: "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

const filters = ["All", "AI", "Robotics", "Systems", "Research"];

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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary-400 mb-2"
          >
            03. Projects
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isExpanded={expandedProject === project.id}
                onToggle={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id
                  )
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Overlay */}
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
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onToggle}
      className="glass-card rounded-2xl p-6 cursor-pointer glow-border
        hover:shadow-xl hover:shadow-primary-500/5 transition-shadow duration-300 group"
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-0.5 rounded-md text-xs font-medium border ${
              tagColors[tag] || "bg-gray-500/15 text-gray-400 border-gray-500/20"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Links */}
      <div className="flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)]
              hover:text-primary-400 transition-colors duration-200"
          >
            <FiGithub className="w-3.5 h-3.5" />
            Source
          </a>
        )}
        <span className="text-xs text-[var(--text-muted)] ml-auto group-hover:text-primary-400 transition-colors">
          Click to expand →
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
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative glass-card rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg glass-card flex items-center justify-center
            hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
        >
          <FiX className="w-4 h-4" />
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                tagColors[tag] || "bg-gray-500/15 text-gray-400 border-gray-500/20"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-gradient">{project.title}</h3>

        {/* Long Description */}
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">
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
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
