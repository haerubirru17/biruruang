"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { donation } from "@/lib/content";

export default function Donation() {
  return (
    <SectionWrapper background="warm-white" id="donasi">
      <div className="max-w-xl mx-auto text-center">
        {/* Understated heading — smaller than other sections by design */}
        <h2 className="text-xl md:text-2xl font-semibold text-night-blue mb-4 font-playfair">
          {donation.h2}
        </h2>
        <p className="text-base text-ink/65 leading-relaxed mb-10 font-inter">
          {donation.body}
        </p>

        {/* Side-by-side on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {/* QRIS Card */}
          <div className="flex-1 bg-warm-white border border-night-blue/10 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-sm">
            <p className="text-sm font-medium text-night-blue tracking-wide uppercase font-inter">
              {donation.qrisLabel}
            </p>
            {/* Plain img tag for Cloudflare Pages compatibility */}
            {/* TODO: Replace /qris.png with actual QRIS QR code image */}
            <img
              src={donation.qrisImage}
              alt="QRIS QR Code untuk donasi ke Ruang Biru"
              width={200}
              height={200}
              className="rounded-xl object-contain"
              loading="lazy"
            />
          </div>

          {/* Saweria Card */}
          <div className="flex-1 bg-warm-white border border-night-blue/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm">
            <p className="text-sm font-medium text-night-blue tracking-wide uppercase font-inter">
              {donation.saweriaLabel}
            </p>
            <p className="text-sm text-ink/55 text-center leading-relaxed font-inter">
              Kamu bisa juga traktir lewat Saweria — pilih nominal sesukamu.
            </p>
            {/* TODO: Replace PLACEHOLDER in href with actual Saweria username */}
            <a
              id="saweria-donation-btn"
              href={donation.saweriaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block px-6 py-3 min-h-[44px] rounded-full text-sm font-medium text-white bg-warm-gold hover:opacity-90 transition-opacity duration-300 shadow-md font-inter focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-offset-2"
            >
              {donation.saweriaButtonText}
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
