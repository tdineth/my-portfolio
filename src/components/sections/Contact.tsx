"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { FiSend, FiGithub, FiLinkedin, FiMail, FiCheck } from "react-icons/fi";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const socialLinks = [
  {
    href: "https://github.com/tdineth",
    icon: FiGithub,
    label: "GitHub",
    color: "hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700",
  },
  {
    href: "https://www.linkedin.com/in/theekshana-dineth-8675b7311/",
    icon: FiLinkedin,
    label: "LinkedIn",
    color: "hover:text-white hover:bg-blue-600",
  },
  {
    href: "mailto:theekshanadineth201@gmail.com",
    icon: FiMail,
    label: "Email",
    color: "hover:text-white hover:bg-primary-500",
  },
];

// ⚠️ Get your free access key at https://web3forms.com (enter your email to get a key)
const WEB3FORMS_KEY = "6bef5775-7783-47a8-b639-2bc01b70875f";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: "Portfolio Contact Form",
          subject: `New message from ${formState.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-md mx-auto">
            Interested in collaborating on research, have a project in mind, or
            just want to connect? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium mb-2 text-[var(--text-secondary)]"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                value={formState.name}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]
                  text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
                  focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20
                  transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium mb-2 text-[var(--text-secondary)]"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                value={formState.email}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]
                  text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
                  focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20
                  transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium mb-2 text-[var(--text-secondary)]"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]
                  text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
                  focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20
                  transition-all duration-200 resize-none"
                placeholder="Tell me about your project, research opportunity, or just say hello..."
              />
            </div>

            {error && (
              <p className="text-sm text-red-400 text-center">{error}</p>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              transition={spring}
              className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2
                transition-all duration-300 ${
                  isSubmitted
                    ? "bg-emerald-500 text-white"
                    : "btn-primary w-full justify-center"
                }`}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.span
                    key="done"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <FiCheck className="w-5 h-5" />
                    Message Sent!
                  </motion.span>
                ) : isSubmitting ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...spring }}
            className="flex justify-center gap-4 mt-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
                className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center
                  text-[var(--text-muted)] transition-all duration-200 ${link.color}`}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
