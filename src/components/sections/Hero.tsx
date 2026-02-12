"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import Image from "next/image";
import AnimatedCounter from "../AnimatedCounter";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const stats = [
  { target: 9, label: "Projects Built", suffix: "+" },
  { target: 4, label: "Research Topics", suffix: "" },
  { target: 15, label: "Certifications", suffix: "+" },
];

export default function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const rect = photoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientY - centerY) / 30;
      const y = (centerX - e.clientX) / 30;
      setTilt({ x: Math.max(-8, Math.min(8, x)), y: Math.max(-8, Math.min(8, y)) });
    };

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="section-container relative z-10 py-28 md:py-32">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="md:col-span-3 text-center md:text-left">
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card
                text-xs font-medium text-emerald-400 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for Internships
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]"
            >
              Engineering Intelligent{" "}
              <span className="text-gradient">Systems</span> That Learn, Adapt
              and <span className="text-gradient">Move</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.35 }}
              className="text-sm md:text-base text-[var(--text-secondary)] mb-3 font-medium tracking-wide"
            >
              AI & Software Engineering • Research • Startups •
              University of Peradeniya
            </motion.p>

            {/* Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.45 }}
              className="text-sm md:text-base text-[var(--text-muted)] max-w-xl mb-8 leading-relaxed
                md:mx-0 mx-auto"
            >
              Computer Engineering undergraduate with experience in research,
              startups and leadership. Designing and deploying end-to-end AI
              systems — from backend architectures and data pipelines to
              intelligent agents and LLM applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.55 }}
              className="flex flex-wrap justify-center md:justify-start gap-3 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="btn-primary"
              >
                View Projects
                <FiArrowDown className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Theekshana_Dineth_Resume.pdf"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="btn-secondary"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="btn-secondary"
              >
                <FiMail className="w-4 h-4" />
                Contact
              </motion.a>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.65 }}
              className="flex justify-center md:justify-start gap-8"
            >
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </div>

          {/* Right: Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ ...spring, delay: 0.3 }}
            className="md:col-span-2 flex justify-center"
          >
            <div
              ref={photoRef}
              className="relative"
              style={{
                perspective: "1000px",
              }}
            >
              {/* Neural glow ring */}
              <div
                className="absolute -inset-3 rounded-full animate-glow-pulse opacity-60
                  dark:opacity-80"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--glow-primary), var(--glow-secondary), var(--glow-primary))",
                  filter: "blur(20px)",
                }}
              />

              {/* Photo container */}
              <motion.div
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 30 }}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full
                  overflow-hidden border-2 border-[var(--glass-border)]
                  shadow-2xl shadow-primary-500/20"
              >
                <Image
                  src="/img2.jpg"
                  alt="Theekshana Dineth — Computer Engineering Undergraduate"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                />
              </motion.div>

              {/* Floating decoration nodes */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary-400/60 neural-glow-sm"
              />
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-accent-400/60 neural-glow-sm"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-4 w-2.5 h-2.5 rounded-full bg-primary-300/50"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-9 rounded-full border-2 border-primary-500/20 flex justify-center pt-2"
          >
            <motion.div className="w-1 h-1.5 rounded-full bg-primary-400/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
