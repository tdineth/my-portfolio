"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function ResumeDownload() {
  return (
    <section className="py-16 relative">
      <div className="section-container">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={spring}
            className="inline-block"
          >
            <motion.a
              href="/resume.pdf"
              download="Theekshana_Dineth_Resume.pdf"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow:
                  "0 0 30px rgba(99, 102, 241, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl
                bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600
                text-white font-bold text-lg
                shadow-xl shadow-primary-500/30
                neural-glow"
            >
              <span className="absolute inset-0 rounded-2xl animate-glow-pulse" />
              <FiDownload className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download Resume</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary-400 animate-float" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-accent-400 animate-float-delayed" />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-[var(--text-muted)] mt-4"
          >
            Get a detailed overview of my experience and qualifications
          </motion.p>
        </div>
      </div>
    </section>
  );
}
