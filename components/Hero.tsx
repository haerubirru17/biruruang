"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/lib/content";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-24 bg-warm-white overflow-hidden">
      {/* Background decorative SVGs — aria-hidden */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Large gradient circle top-right */}
        <svg
          className="absolute -top-32 -right-32 w-[500px] h-[500px] opacity-15"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="heroGrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2E6DA4" />
              <stop offset="100%" stopColor="#E8F4FD" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="250" cy="250" r="250" fill="url(#heroGrad1)" />
        </svg>

        {/* Abstract wave lines bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-10"
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C360,160 720,40 1080,100 C1260,130 1380,90 1440,100 L1440,200 L0,200 Z"
            fill="#2E6DA4"
          />
          <path
            d="M0,130 C240,80 600,170 900,130 C1100,105 1300,140 1440,130 L1440,200 L0,200 Z"
            fill="#1B3A5C"
            opacity="0.5"
          />
        </svg>

        {/* Concentric circles bottom-right */}
        <svg
          className="absolute bottom-20 right-12 w-32 h-32 opacity-10"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="64" cy="64" r="60" stroke="#1B3A5C" strokeWidth="2" fill="none" />
          <circle cx="64" cy="64" r="40" stroke="#2E6DA4" strokeWidth="1.5" fill="none" />
          <circle cx="64" cy="64" r="20" stroke="#2E6DA4" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow label */}
        <motion.span
          variants={itemVariants}
          className="text-sm font-medium tracking-widest text-sea-blue uppercase font-inter"
        >
          {hero.eyebrow}
        </motion.span>

        {/* H1 — only one per page */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-night-blue leading-tight font-playfair"
        >
          {hero.h1}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-ink/75 max-w-md leading-relaxed font-inter"
        >
          {hero.subtext}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          variants={itemVariants}
          href={hero.ctaHref}
          id="hero-booking-cta"
          className="mt-2 inline-block px-8 py-4 min-h-[44px] bg-sea-blue text-white rounded-full text-base font-medium font-inter hover:bg-night-blue transition-colors duration-300 shadow-lg shadow-sea-blue/20 focus-visible:ring-2 focus-visible:ring-sea-blue focus-visible:ring-offset-2"
        >
          {hero.cta}
        </motion.a>
      </motion.div>
    </section>
  );
}
