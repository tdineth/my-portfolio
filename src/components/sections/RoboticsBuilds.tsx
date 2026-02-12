"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { FiCpu, FiZap } from "react-icons/fi";

const builds = [
  {
    title: "Obstacle Avoiding Robot",
    description:
      "Autonomous mobile robot using ultrasonic sensors and Arduino for real-time obstacle detection and path planning. Features PID-controlled motors and a custom PCB design.",
    tech: ["Arduino", "Ultrasonic Sensors", "PID Control", "3D Printed"],
    icon: "🤖",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Embedded AI Vision Module",
    description:
      "Compact computer vision module built on ESP32-CAM for real-time object classification. Runs a quantized MobileNet model for edge inference at 10 FPS.",
    tech: ["ESP32", "TensorFlow Lite", "Computer Vision", "C++"],
    icon: "👁",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Smart Environment Monitor",
    description:
      "IoT-based environmental monitoring system with multiple sensors (temperature, humidity, air quality) and a web dashboard for data visualization.",
    tech: ["Arduino", "Sensors", "MQTT", "Web Dashboard"],
    icon: "🌡",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Robotic Arm Controller",
    description:
      "6-DOF robotic arm with inverse kinematics solver. Controlled via custom Python GUI with real-time joint angle visualization and path planning.",
    tech: ["Servo Motors", "Inverse Kinematics", "Python", "3D Printed"],
    icon: "🦾",
    color: "from-orange-500 to-amber-500",
  },
];

export default function RoboticsBuilds() {
  return (
    <SectionWrapper id="robotics" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary-400 mb-2"
          >
            05. Hardware
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Robotics <span className="text-gradient">Builds</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-lg mx-auto">
            Hands-on hardware projects where algorithms meet the physical world.
          </p>
        </div>

        {/* Builds Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {builds.map((build, i) => (
            <motion.div
              key={build.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl overflow-hidden glow-border group"
            >
              {/* Image Placeholder / Gradient Header */}
              <div
                className={`h-40 bg-gradient-to-br ${build.color} opacity-20 relative
                  flex items-center justify-center`}
              >
                <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                  {build.icon}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 -mt-8 relative">
                <div className="flex items-center gap-2 mb-3">
                  <FiCpu className="w-4 h-4 text-primary-400" />
                  <h3 className="text-lg font-bold">{build.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {build.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {build.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium
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
