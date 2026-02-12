"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary-400 mb-2"
          >
            02. Skills
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 glow-border"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIdx * 0.1 + skillIdx * 0.05,
                      duration: 0.3,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.06,
                      transition: { duration: 0.15 },
                    }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium cursor-default
                      bg-gradient-to-r ${category.color} bg-clip-text text-transparent
                      border border-[var(--border-color)] hover:border-primary-500/30
                      hover:shadow-md hover:shadow-primary-500/5
                      transition-all duration-200`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
