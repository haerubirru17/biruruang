# RUANG BIRU — CONTENT & COMPONENT SPECIFICATIONS

This document provides final copy (in Indonesian) and per-component specs.
Read alongside `BLUEPRINT.md` (tech stack, design system, structure).
All text below is FINAL — do not rewrite, paraphrase, or "improve" the copy. Use it verbatim in `lib/content.ts`.

---

## lib/content.ts — Structure

Export one object per section, e.g.:

```ts
export const hero = { ... }
export const philosophy = { ... }
export const aboutBirru = { ... }
export const sessionFormats = { ... }
export const howItWorks = { ... }
export const testimonials = { ... }
export const booking = { ... }
export const donation = { ... }
export const footer = { ... }
```

---

## 1. Hero (`components/Hero.tsx`)

**Layout:** Full viewport height on desktop (`min-h-screen` or close), centered content, mobile: generous top/bottom padding instead of forced full height.

**Content:**
- Eyebrow/small label (optional, subtle): `Ruang Biru`
- H1 (Playfair Display): `Seluas langit. Setenang laut.`
- Subtext (Inter, max-w-md, centered): `Kadang kamu hanya butuh seseorang yang benar-benar hadir. Tanpa dihakimi, tanpa terburu-buru.`
- Primary CTA button: `Booking Sesi` → smooth-scrolls to `#booking`
- Background: warm-white base with a subtle abstract SVG (soft horizontal wave or gradient circle in sky-blue, low opacity) positioned behind/around text — decorative only, `aria-hidden`.

**Animation:** Fade-in + slide-up on initial load (not scroll-triggered, since it's the first thing visible). Stagger: eyebrow → H1 → subtext → CTA, each ~0.15s apart.

---

## 2. Philosophy (`components/Philosophy.tsx`)

**Layout:** Centered text block, `max-w-2xl`, generous vertical padding. Background: `sky-blue` (this section gets the light blue background to visually separate from Hero).

**Content (H2 + body, Playfair for emphasis on key phrase if desired):**

> Biru itu ada di tempat-tempat yang luas — di langit dan di lautan. Di sana, tidak ada yang menghakimi. Tidak ada yang terburu-buru. Hanya ruang yang cukup untuk kamu bernapas dan bercerita.

No heading needed — this stands alone as a large quote/statement. Consider larger font size (`text-xl md:text-3xl`, Playfair, leading-relaxed) since it's the emotional core of the brand.

**Animation:** Fade-in + slide-up on scroll into view.

---

## 3. About Birru (`components/AboutBirru.tsx`)

**Layout:** Text block, `max-w-2xl`, warm-white background.

**Content:**
- H2: `Tentang Birru`
- Body paragraph:
  > Birru adalah seseorang yang percaya bahwa setiap orang berhak punya ruang untuk didengar — tanpa harus menjelaskan, tanpa harus terlihat kuat. Bukan psikolog, bukan terapis. Hanya seseorang yang hadir, sepenuhnya, untuk mendengarkan ceritamu.

- Small disclaimer line below (smaller text, muted color e.g. `text-ink/70`):
  > Ruang Biru bukan layanan konseling, psikologi, atau psikiatri profesional. Birru bukan tenaga kesehatan berlisensi. Layanan ini adalah pendampingan emosional berbasis kemanusiaan.

**Animation:** Fade-in + slide-up on scroll.

---

## 4. Session Formats (`components/SessionFormats.tsx`)

**Layout:** H2 + intro line, then 3 cards in a row on desktop (`md:grid-cols-3`), stacked on mobile. Background: `sky-blue`.

**Content:**
- H2: `Sesi Sesuai Kenyamananmu`
- Intro (below H2, `max-w-xl`):
  > Tidak semua orang siap bertatap muka dari awal — dan itu wajar. Mulai dari suara saja pun cukup. Yang penting, kamu mulai.

- **Card 1 — Voice Call**
  - Label: `Voice Call`
  - Description: `Aku belum siap dilihat. Tapi aku butuh didengar.`
- **Card 2 — Video Call**
  - Label: `Video Call`
  - Description: `Aku mau terhubung, tapi dari tempat yang aman.`
- **Card 3 — Offline (Bertemu Langsung)**
  - Label: `Bertemu Langsung`
  - Description: `Aku butuh kehadiran nyata seseorang.`
  - Additional note (smaller text, below description):
    > Bertemu di tempat publik pilihan kamu — kafe, taman, atau ruang terbuka lain di area Jabodetabek.

**Card styling:** warm-white background cards on the sky-blue section background, soft shadow (`shadow-sm`), rounded corners (`rounded-2xl`), padding `p-6`. Each card has a small abstract SVG icon at top (wave for voice, eye/circle for video, two overlapping circles for meeting — keep abstract, not literal icons).

**Animation:** Fade-in + slide-up on scroll, staggered across the 3 cards (`staggerChildren: 0.15`).

---

## 5. How It Works (`components/HowItWorks.tsx`)

**Layout:** H2 centered, then 3 numbered steps — vertical list on mobile, horizontal on desktop (`md:grid-cols-3`). Warm-white background.

**Content:**
- H2: `Cara Kerja`

- **Step 1**
  - Number: `01`
  - Title: `Isi Form`
  - Description: `Ceritakan sedikit tentang dirimu dan format sesi yang kamu inginkan — voice call, video call, atau bertemu langsung.`
- **Step 2**
  - Number: `02`
  - Title: `Konfirmasi`
  - Description: `Birru akan menghubungimu dalam 1x24 jam untuk menyepakati waktu dan detail sesi.`
- **Step 3**
  - Number: `03`
  - Title: `Sesi Berlangsung`
  - Description: `Maksimal 2 jam, sesuai kenyamanan dan kebutuhanmu. Tidak ada agenda, tidak ada penilaian.`

**Styling:** Numbers in large Playfair Display, `text-night-blue`, low-ish opacity or as a large background numeral behind the title.

**Animation:** Fade-in + slide-up on scroll, staggered.

---

## 6. Testimonials (`components/Testimonials.tsx`)

**Layout:** H2 + 1–2 placeholder quote cards. Background: `sky-blue`.

**Content:**
- H2: `Cerita Mereka`
- Intro line (small, italic or muted):
  > Setelah sesi, beberapa orang berkenan membagikan perasaannya — secara anonim.

- **Placeholder quote 1:**
  > "Aku nggak nyangka cuma butuh didengar aja bisa bikin lega seperti ini."
  — *Anonim*

- **Placeholder quote 2:**
  > "Untuk pertama kalinya aku merasa nggak perlu menjelaskan kenapa aku sedih."
  — *Anonim*

**Note for builder:** These are placeholder testimonials representing the expected tone — keep them, they can be replaced later with real ones. Do not invent additional fake testimonials beyond these two.

**Animation:** Fade-in + slide-up on scroll.

---

## 7. Booking (`components/BookingForm.tsx`)

**Layout:** `id="booking"` on the section (for Hero CTA anchor link). H2 + short intro text, then embedded Google Form iframe. Warm-white background.

**Content:**
- H2: `Booking Sesi`
- Intro:
  > Isi form di bawah ini. Birru akan menghubungimu dalam 1x24 jam untuk konfirmasi.

- Below the intro, before the iframe, a short note about offline sessions and donation framing (since this is where users decide):
  > Untuk sesi bertemu langsung, kamu bisa menyertakan biaya transportasi Birru di form ini. Untuk sesi voice/video call, semuanya gratis — kalau setelahnya kamu merasa sesi ini berarti, ada cara sederhana untuk 'traktir Birru kopi' (lihat bagian bawah halaman).

- Google Form iframe (placeholder URL, see BLUEPRINT.md §6):
  ```html
  <iframe src="https://docs.google.com/forms/d/e/PLACEHOLDER/viewform?embedded=true" width="100%" style={{ minHeight: '600px' }} frameBorder="0">Loading…</iframe>
  ```

**Form fields reference (for whoever builds the actual Google Form — not built in code, just documented here for completeness):**
1. Nama (boleh nama samaran)
2. Usia
3. Format sesi (Voice Call / Video Call / Bertemu Langsung)
4. Preferensi waktu (2–3 slot)
5. Apa yang ingin kamu ceritakan? (opsional)
6. Kontak (WhatsApp/email)
7. Ini sesi pertama kamu? (Ya/Tidak)
8. *(jika Bertemu Langsung)* Lokasi yang kamu usulkan + estimasi biaya transportasi

**Animation:** Fade-in + slide-up on scroll. Iframe itself does not need animation (avoid animating iframes — can cause layout issues).

---

## 8. Donation (`components/Donation.tsx`)

**Layout:** `id="donasi"`. Smaller/more understated section than Booking — should not visually compete with the booking CTA. Background: warm-white or a very subtle tint. Centered, `max-w-xl`.

**Content:**
- H2 (smaller than other H2s, e.g. `text-xl md:text-2xl`): `Traktir Birru Kopi`
- Body:
  > Tidak ada tagihan setelah sesi ini. Tapi kalau kamu mau, kamu bisa 'traktir Birru kopi' — supaya Ruang Biru tetap bisa buka untuk yang lain.

- Two options, side-by-side on desktop (`md:flex-row`), stacked on mobile (`flex-col`), each in a simple card:
  - **QRIS card:** Label `Scan QRIS`, image placeholder `/qris.png` (if no image, render a `bg-gray-100` box with centered text `QRIS` and dimensions `200x200px`)
  - **Saweria card:** Label `Saweria`, button/link: `Buka Saweria` → `href="https://saweria.co/PLACEHOLDER"`, `target="_blank" rel="noopener noreferrer"`

**Styling note:** Use `warm-gold` only for the Saweria button/accent — nowhere else on the page. Keep this section visually quiet (no large headlines, no bold colors beyond the gold accent).

**Animation:** Fade-in + slide-up on scroll. Subtle — this section should feel calm, not like a call-to-action banner.

---

## 9. Footer (`components/Footer.tsx`)

**Layout:** `night-blue` background, light text (`warm-white` or `sky-blue` for text color), `py-12 px-6`, centered or left-aligned content, `text-sm`.

**Content:**
- Brand line: `Ruang Biru`
- Area line: `Melayani area Jabodetabek`
- Crisis line (important — keep visible, not buried):
  > Ruang Biru bukan layanan darurat. Jika kamu dalam kondisi krisis, hubungi Into The Light Indonesia: 119 ext 8.
- Disclaimer (repeat, smaller/muted):
  > Ruang Biru bukan layanan konseling, psikologi, atau psikiatri profesional. Birru bukan tenaga kesehatan berlisensi.
- Optional: WhatsApp contact link (placeholder, see BLUEPRINT.md §6) — only include if a generic contact link is desired beyond the booking form.
- Copyright/year line: `© 2026 Ruang Biru`

**Animation:** None — footer should not animate, it's always "settled".

---

## 10. Shared Components

### `SectionWrapper.tsx`
- Wraps each section with consistent `py-16 md:py-24 px-6 md:px-12` padding and the Framer Motion `whileInView` fade/slide-up behavior.
- Accepts a `background` prop (`'warm-white' | 'sky-blue' | 'night-blue'`) to set section background color.
- All sections except Hero and Footer should use this wrapper for consistency.

### `WaveDivider.tsx`
- A thin abstract SVG wave (single path, currentColor or palette color, low opacity).
- Use between: Hero→Philosophy, and SessionFormats→HowItWorks (2 placements total — do not overuse).
- `aria-hidden="true"`.

---

## 11. Page Composition (`app/page.tsx`)

Order of sections, top to bottom:

```
1. Hero
2. WaveDivider
3. Philosophy        (sky-blue bg)
4. AboutBirru        (warm-white bg)
5. SessionFormats    (sky-blue bg)
6. WaveDivider
7. HowItWorks        (warm-white bg)
8. Testimonials      (sky-blue bg)
9. BookingForm       (warm-white bg)  — id="booking"
10. Donation         (warm-white bg, understated) — id="donasi"
11. Footer           (night-blue bg)
```

---

## 12. Final Tone Check (for builder reference)

Every piece of copy above follows these rules — if generating any additional microcopy (button labels, error states, etc.), match this tone:

- No exclamation marks used for excitement/sales energy.
- No phrases like "Jangan lewatkan!", "Buruan!", "Gratis loh!", or similar urgency/hype language.
- Second person ("kamu") throughout — warm but not overly casual/slang-heavy.
- Sentences can be short and simple. Avoid corporate jargon ("solusi", "terbaik", "profesional" — except where used deliberately in the disclaimer).
- When in doubt, write less. Whitespace and restraint are part of the brand voice.
