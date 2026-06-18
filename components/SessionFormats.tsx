"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { sessionFormats } from "@/lib/content";

function VoiceIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="w-10 h-10 mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24 C10 14, 18 34, 24 24 C30 14, 38 34, 44 24" stroke="#2E6DA4" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M8 30 C12 22, 16 36, 20 30 C24 24, 28 36, 32 30 C36 24, 40 32, 42 30" stroke="#1B3A5C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" fill="none" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="w-10 h-10 mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="#2E6DA4" strokeWidth="2" />
      <circle cx="24" cy="24" r="10" stroke="#1B3A5C" strokeWidth="1.5" opacity="0.5" />
      <circle cx="24" cy="24" r="4" fill="#2E6DA4" opacity="0.6" />
    </svg>
  );
}

function MeetIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="w-10 h-10 mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="24" r="12" stroke="#2E6DA4" strokeWidth="2" />
      <circle cx="32" cy="24" r="12" stroke="#1B3A5C" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

const icons = [VoiceIcon, VideoIcon, MeetIcon];

export default function SessionFormats() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 } },
  };

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <SectionWrapper background="sky-blue">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-night-blue mb-4 font-playfair">
            {sessionFormats.h2}
          </h2>
          <p className="text-base md:text-lg text-ink/70 max-w-xl mx-auto leading-relaxed font-inter">
            {sessionFormats.intro}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {sessionFormats.formats.map((format, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={format.id}
                variants={cardVariants}
                className="bg-warm-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Icon />
                <h3 className="text-xl md:text-2xl font-semibold text-night-blue mb-3 font-playfair">
                  {format.label}
                </h3>
                <p className="text-base text-ink/75 leading-relaxed mb-2 font-inter">
                  {format.description}
                </p>
                {format.note && (
                  <p className="text-sm text-ink/50 leading-relaxed mt-3 pt-3 border-t border-sea-blue/10 font-inter">
                    {format.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
