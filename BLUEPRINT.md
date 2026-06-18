# RUANG BIRU — TECHNICAL BLUEPRINT

This document is the technical reference for building the "Ruang Biru" website.
Read alongside `CONTENT_AND_COMPONENTS.md` (content, copy, and per-section specs).
Execute as a single Next.js project. Do not ask clarifying questions — all decisions are final and documented here.

---

## 1. Project Overview

**Name:** Ruang Biru
**Type:** Single-page marketing/booking website for a free, anonymous, in-person/online emotional listening service ("Birru" is the anonymous listener).
**Goal:** Communicate trust, calm, and warmth. Drive users to a booking form. Offer optional post-session donation.

**Non-goals:** No user accounts, no database, no payment processing, no real-time chat. Everything is static + embeds.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14+ (App Router) | TypeScript |
| Styling | Tailwind CSS | Utility-first, custom theme tokens (see §4) |
| Animation | Framer Motion | Subtle only — fade/slide on scroll. No parallax, no bounce, no stagger-heavy effects |
| Fonts | next/font/google | Playfair Display (display/headings), Inter (body) |
| Icons/Illustration | Inline SVG (custom abstract wave/sky shapes) — no photos, no stock icons, no emoji in UI copy except where explicitly specified |
| Booking | Google Form (embedded via `<iframe>`) | URL is a placeholder, see §6 |
| Donation | Static QRIS image (`/public/qris.png` placeholder) + Saweria link button | No payment gateway integration |
| Deployment | Vercel | Default Next.js deployment, no special config needed |
| Domain | Not configured yet (optional `ruangbiru.my.id` later) | Out of scope for build |

---

## 3. Project Structure

```
ruang-biru/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Single page, composes all sections
│   └── globals.css         # Tailwind base + custom utilities
├── components/
│   ├── Hero.tsx
│   ├── Philosophy.tsx
│   ├── AboutBirru.tsx
│   ├── SessionFormats.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── BookingForm.tsx
│   ├── Donation.tsx
│   ├── Footer.tsx
│   └── shared/
│       ├── SectionWrapper.tsx   # Common padding/animation wrapper
│       └── WaveDivider.tsx      # Abstract SVG divider between sections
├── lib/
│   └── content.ts          # All copy/text constants exported here (see CONTENT_AND_COMPONENTS.md)
├── public/
│   ├── qris.png             # placeholder QR image
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

**Rule:** All user-facing text strings live in `lib/content.ts` as exported constants/objects. Components import from there — no hardcoded copy inside JSX. This makes future copy edits a single-file change.

---

## 4. Design System

### 4.1 Color Tokens (add to `tailwind.config.ts` theme.extend.colors)

```js
colors: {
  'night-blue': '#1B3A5C',   // primary — headings, nav, footer bg
  'sea-blue': '#2E6DA4',     // secondary — buttons, links, accents
  'sky-blue': '#E8F4FD',     // light section backgrounds
  'warm-white': '#FAFAF8',   // page background
  'ink': '#1A1A2E',          // body text
  'warm-gold': '#C8A96E',    // donation CTA only — used sparingly
}
```

### 4.2 Typography

- **Display/headings (h1–h3):** Playfair Display, serif. Weight 600–700.
- **Body, UI, buttons:** Inter, sans-serif. Weight 400–500.
- **Scale (mobile-first, Tailwind classes):**
  - H1: `text-3xl md:text-5xl`
  - H2: `text-2xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
  - Body: `text-base md:text-lg`
  - Small/footer: `text-sm`

### 4.3 Spacing & Layout

- Mobile-first. Design and build for `< 640px` first, then enhance at `md:` (768px) and `lg:` (1024px).
- Section vertical padding: `py-16 md:py-24`
- Max content width: `max-w-3xl` for text-heavy sections, `max-w-5xl` for grid sections (e.g. session formats)
- Horizontal padding: `px-6 md:px-12`
- Generous whitespace is a core design value — do not compress sections to fit more content.

### 4.4 Visual Motifs (no photos, no stock icons)

- Use custom inline SVGs for abstract shapes: soft wave lines, gradient circles ("moon"/"sun" suggestion), horizon lines.
- Color these SVGs using the palette above, often with low opacity (10–25%) as background decoration behind text.
- `WaveDivider.tsx`: a thin abstract SVG wave used between 2–3 section transitions (not every section — overuse breaks the calm feel).

### 4.5 Animation Guidelines (Framer Motion)

- **Only use:** fade-in + slight upward slide (`opacity 0→1`, `y: 20→0`) on scroll-into-view, using `whileInView`.
- Duration: `0.6–0.8s`, easing `easeOut`.
- Stagger children only for short lists (max 3 items), with `staggerChildren: 0.15`.
- **Do not use:** parallax scrolling, bouncing, rotation, scale-pop effects, autoplay carousels.
- Respect `prefers-reduced-motion` — wrap animations to disable if user has this setting (Framer Motion's `useReducedMotion` hook).

---

## 5. Responsiveness Requirements

- Primary target: mobile viewport (360px–428px width). Design and test at this size first.
- All sections must be single-column on mobile. Multi-column grids (e.g. session format cards) collapse to stacked cards below `md:`.
- Touch targets (buttons, form fields) minimum `44px` height.
- Embedded Google Form iframe: set `width="100%"` with a reasonable fixed or min height (e.g. `min-height: 600px` on mobile, can be `700px` on desktop) — avoid horizontal scroll.
- Donation section (QRIS + Saweria): side-by-side on desktop (`md:flex-row`), stacked on mobile (`flex-col`).

---

## 6. External Integration Placeholders

These are placeholders. Mark clearly in code with `// TODO:` comments so they're easy to find and replace.

| Integration | Placeholder value | Where used |
|---|---|---|
| Google Form embed URL | `https://docs.google.com/forms/d/e/PLACEHOLDER/viewform?embedded=true` | `BookingForm.tsx` iframe `src` |
| Saweria link | `https://saweria.co/PLACEHOLDER` | `Donation.tsx` button `href` |
| QRIS image | `/public/qris.png` (placeholder image, can be a simple gray box with "QRIS" text if no image provided) | `Donation.tsx` |
| WhatsApp contact (footer/contact, if referenced) | `https://wa.me/62PLACEHOLDER` | `Footer.tsx` |
| Crisis hotline | Into The Light Indonesia — 119 ext 8 (this is real, not a placeholder — use as-is) | `Footer.tsx` |

---

## 7. Accessibility

- All interactive elements (buttons, links, form iframe) must be keyboard-navigable and have visible focus states (`focus-visible:ring-2 ring-sea-blue`).
- Sufficient color contrast: body text (`ink` on `warm-white`) passes WCAG AA. Avoid placing `ink` text directly on `sky-blue` without checking contrast — prefer `night-blue` for text on light blue backgrounds.
- All decorative SVGs: `aria-hidden="true"`.
- Semantic HTML: use `<section>`, `<h1>`–`<h3>` in correct hierarchy (one `h1` only, in Hero).

---

## 8. SEO / Metadata (app/layout.tsx)

```ts
export const metadata = {
  title: "Ruang Biru — Seluas langit. Setenang laut.",
  description: "Ruang Biru adalah layanan pendampingan emosional gratis. Didengar, bukan didiagnosa. Voice call, video call, atau bertemu langsung — kamu yang pilih.",
}
```

- Language: `lang="id"` on `<html>`.
- No social share images required for v1 (can be added later).

---

## 9. Deployment Notes

Source of truth: GitHub repository. Deployment platform: choose ONE of the following two options. Both connect via auto-deploy from the GitHub repo (push to deploy).

### Option A — Vercel (recommended, simplest)
- Default Next.js deployment, no custom build command or config needed.
- All Next.js features (next/font, image optimization, etc.) work out of the box.
- Connect repo in Vercel dashboard → auto-deploys on push to main branch.

### Option B — Cloudflare Pages
- Requires the `@cloudflare/next-on-pages` adapter.
- Build command: `npx @cloudflare/next-on-pages`
- Output directory: `.vercel/output/static`
- Add to `package.json` scripts: `"pages:build": "npx @cloudflare/next-on-pages"`
- next/font (Google Fonts) generally works fine. Built-in `next/image` optimization is NOT supported on Cloudflare Pages — since this project uses no photos and only inline SVGs/static images (qris.png), this is not a blocking issue. Avoid using the `next/image` component for `qris.png`; use a plain `<img>` tag instead.
- Connect repo in Cloudflare Pages dashboard → set build command/output dir above → auto-deploys on push.

### Common to both options
- Environment variables: none required for v1 (no API keys, all static).
- Before deploy, replace all `// TODO:` placeholders listed in §6.
- No platform-specific code branching needed in the app itself — the only adjustment is the `<img>` vs `next/image` choice noted above, which should be followed regardless of platform for portability.

---

## 10. Explicit Constraints (do not deviate)

- No user photos, no stock photography, no generic flat-icon illustration packs.
- No bright/corporate blue — stick to the muted palette in §4.1.
- No aggressive sales language anywhere (booking CTA, donation CTA) — tone must match `CONTENT_AND_COMPONENTS.md` exactly.
- No backend, no database, no auth — if any feature seems to require these, flag it instead of implementing a workaround.
- Keep the donation section understated — it should not visually compete with the booking CTA.
