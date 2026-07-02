"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { booking } from "@/lib/content";

export default function BookingForm() {
  return (
    <SectionWrapper background="warm-white" id="booking">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-night-blue mb-4 font-playfair">
          {booking.h2}
        </h2>
        <p className="text-base md:text-lg text-ink/75 leading-relaxed mb-6 font-inter">
          {booking.intro}
        </p>
        <p className="text-sm text-ink/55 leading-relaxed mb-8 p-4 bg-sky-blue rounded-xl border-l-4 border-sea-blue/30 font-inter">
          {booking.note}
        </p>

        {/* Google Form iframe — do NOT animate iframes */}
        {/* TODO: Replace PLACEHOLDER in src with actual Google Form embed URL */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-sea-blue/10">
          <iframe
            src={booking.formUrl}
            width="100%"
            style={{ minHeight: "600px", border: "none" }}
            title="Form Booking Sesi Ruang Biru"
            aria-label="Form pendaftaran sesi Ruang Biru"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </SectionWrapper>
  );
}
