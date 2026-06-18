"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { philosophy } from "@/lib/content";

export default function Philosophy() {
  return (
    <SectionWrapper background="sky-blue">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl md:text-3xl text-night-blue leading-relaxed font-playfair">
          {philosophy.quote}
        </p>
      </div>
    </SectionWrapper>
  );
}
