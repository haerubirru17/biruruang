"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Background = "warm-white" | "sky-blue" | "night-blue";

const bgMap: Record<Background, string> = {
  "warm-white": "bg-warm-white",
  "sky-blue": "bg-sky-blue",
  "night-blue": "bg-night-blue",
};

interface SectionWrapperProps {
  children: ReactNode;
  background?: Background;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  background = "warm-white",
  className = "",
  id,
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id={id}
      className={`${bgMap[background]} py-16 md:py-24 px-6 md:px-12 ${className}`}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
