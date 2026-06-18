import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-night-blue text-sky-blue py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Brand */}
        <p className="text-lg font-semibold text-white mb-1 font-playfair">
          {footer.brand}
        </p>
        <p className="text-sm text-sky-blue/60 mb-8 font-inter">
          {footer.area}
        </p>

        <div aria-hidden="true" className="w-full h-px bg-sky-blue/15 mb-8" />

        {/* Crisis line — must stay visible */}
        <div className="mb-6 p-4 rounded-xl bg-sky-blue/[0.08] border border-sky-blue/15">
          <p className="text-sm text-sky-blue/85 leading-relaxed font-inter">
            {footer.crisisLine}
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-sky-blue/45 leading-relaxed mb-6 font-inter">
          {footer.disclaimer}
        </p>

        {/* WhatsApp — optional contact */}
        {/* TODO: Replace PLACEHOLDER in href with actual WhatsApp number */}
        <p className="text-xs text-sky-blue/40 mb-6 font-inter">
          Ada pertanyaan?{" "}
          <a
            href={footer.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-sky-blue/70 transition-colors"
          >
            Hubungi via WhatsApp
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs text-sky-blue/35 font-inter">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
