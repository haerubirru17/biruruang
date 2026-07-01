"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { faq } from "@/lib/content";

export default function FAQ() {
  return (
    <SectionWrapper background="sky-blue" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-night-blue mb-4 font-playfair">
            {faq.h2}
          </h2>
          <p className="text-base md:text-lg text-ink/75 max-w-2xl mx-auto leading-relaxed font-inter">
            {faq.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faq.items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-sea-blue/10 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-3 transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <h3 className="text-lg font-bold text-night-blue font-playfair leading-snug">
                {item.question}
              </h3>
              <p className="text-sm md:text-base text-ink/75 leading-relaxed font-inter">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
