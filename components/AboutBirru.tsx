"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { aboutBirru } from "@/lib/content";

export default function AboutBirru() {
  return (
    <SectionWrapper background="sky-blue">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-night-blue mb-6 font-playfair">
          {aboutBirru.h2}
        </h2>
        <p className="text-base md:text-lg text-ink leading-relaxed mb-8 font-inter">
          {aboutBirru.body}
        </p>
        <div aria-hidden="true" className="w-12 h-0.5 bg-sea-blue opacity-30 mb-6" />
        <p className="text-sm text-ink/60 leading-relaxed font-inter">
          {aboutBirru.disclaimer}
        </p>
      </div>
    </SectionWrapper>
  );
}
