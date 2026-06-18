"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 } },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <SectionWrapper background="warm-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-night-blue mb-12 text-center font-playfair">
          {howItWorks.h2}
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {howItWorks.steps.map((step) => (
            <motion.div key={step.number} variants={itemVariants} className="relative">
              <div
                aria-hidden="true"
                className="text-7xl md:text-8xl font-bold text-night-blue/[0.06] leading-none select-none mb-2 font-playfair"
              >
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-night-blue mb-3 -mt-4 font-playfair">
                {step.title}
              </h3>
              <p className="text-base text-ink/70 leading-relaxed font-inter">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
