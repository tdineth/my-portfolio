"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className={`relative ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={spring}
      >
        {children}
      </motion.div>
    </section>
  );
}
