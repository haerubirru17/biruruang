"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <SectionWrapper background="sky-blue">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-night-blue mb-4 font-playfair">
          {testimonials.h2}
        </h2>
        <p className="text-sm italic text-ink/55 mb-10 font-inter">
          {testimonials.intro}
        </p>

        <div className="flex flex-col gap-6">
          {testimonials.quotes.map((quote) => (
            <div key={quote.id} className="bg-warm-white rounded-2xl p-8 shadow-sm text-left">
              <div
                aria-hidden="true"
                className="text-4xl text-sea-blue/25 font-bold leading-none mb-2 select-none font-playfair"
              >
                &ldquo;
              </div>
              <p className="text-base md:text-lg text-ink/80 leading-relaxed mb-4 font-inter">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="text-sm text-ink/45 italic font-inter">
                — {quote.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
