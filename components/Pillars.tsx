"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { pillars } from "@/lib/content";

// Abstract inline SVGs for the pillars
const icons = {
  p1: (
    <svg
      className="w-12 h-12 text-sea-blue"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path
        d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 11V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="6" y="11" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
  ),
  p2: (
    <svg
      className="w-12 h-12 text-sea-blue"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path
        d="M12 7.6C10.5 4.5 6.5 4.5 5.5 7.5C4.2 11.4 10.3 17.5 12 18.5C13.7 17.5 19.8 11.4 18.5 7.5C17.5 4.5 13.5 4.5 12 7.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  p3: (
    <svg
      className="w-12 h-12 text-sea-blue"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path
        d="M8 9H16M8 13H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 18L8 20V18H6C4.89543 18 4 17.1046 4 16V8C4 6.89543 4.89543 6 6 8H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Pillars() {
  return (
    <SectionWrapper background="warm-white" id="pilar">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-night-blue mb-4 font-playfair">
            {pillars.h2}
          </h2>
          <p className="text-base md:text-lg text-ink/75 max-w-2xl mx-auto leading-relaxed font-inter">
            {pillars.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-sea-blue/10 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <div className="mb-2 p-3 bg-sky-blue/35 rounded-full">
                {icons[item.id as keyof typeof icons]}
              </div>
              <h3 className="text-lg font-bold text-night-blue font-playfair">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-ink/75 leading-relaxed font-inter">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
