"use client";

import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://github.com/tdineth", icon: FiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/theekshana-dineth-8675b7311/", icon: FiLinkedin, label: "LinkedIn" },
  { href: "mailto:theekshanadineth201@gmail.com", icon: FiMail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-color)]">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span>© {new Date().getFullYear()} Theekshana Dineth</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline-flex items-center gap-1">
              Built with <FiHeart className="w-3 h-3 text-red-400" /> and Next.js
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center
                  text-[var(--text-muted)] hover:text-primary-400 transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
