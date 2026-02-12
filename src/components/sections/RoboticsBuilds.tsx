"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { FiCpu, FiZap } from "react-icons/fi";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const builds = [
  {
    title: "Line Following Robot",
    description:
      "Autonomous line-following robot using Arduino Uno, infrared sensors for line detection, and L293D motor driver. Features real-time path correction and motor control logic.",
    tech: ["Arduino Uno", "IR Sensors", "L293D", "C++"],
    icon: "🤖",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Peraswarm Robotics Contributor",
    description:
      "Contributor to the international Peraswarm swarm robotics initiative representing E22 and E23 batches. Collaborative multi-agent robotic systems research.",
    tech: ["Swarm Robotics", "Multi-Agent", "Collaboration"],
    icon: "🐝",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Libtiny3D — 3D Rendering Engine",
    description:
      "3D rendering library built from scratch in C with matrix transformations, camera projection and rasterization. Also includes a Python game prototype using Pygame.",
    tech: ["C", "Python", "Pygame", "3D Graphics"],
    icon: "🎮",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Hardware-Software Integration Projects",
    description:
      "Various embedded systems projects combining hardware prototyping with software intelligence — sensors, actuators, and real-time control systems.",
    tech: ["Arduino", "Sensors", "Embedded C", "PCB Design"],
    icon: "⚡",
    color: "from-orange-500 to-amber-500",
  },
];

export default function RoboticsBuilds() {
  return (
    <SectionWrapper id="robotics" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Hardware & <span className="text-gradient">Builds</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-lg mx-auto">
            Where algorithms meet the physical world — embedded systems, robotics and low-level engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {builds.map((build, i) => (
            <motion.div
              key={build.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ...spring }}
              whileHover={{ y: -5, transition: spring }}
              className="glass-card rounded-2xl overflow-hidden glow-border group"
            >
              <div
                className={`h-36 bg-gradient-to-br ${build.color} opacity-20 relative
                  flex items-center justify-center`}
              >
                <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                  {build.icon}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
              </div>

              <div className="p-6 -mt-6 relative">
                <div className="flex items-center gap-2 mb-3">
                  <FiCpu className="w-4 h-4 text-primary-400" />
                  <h3 className="text-base font-bold">{build.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {build.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {build.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium
                        bg-primary-500/10 text-primary-400 border border-primary-500/15"
                    >
                      <FiZap className="w-2.5 h-2.5 inline mr-0.5" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
