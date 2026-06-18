// lib/content.ts
// All user-facing text lives here. Components import from this file.
// Do not hardcode copy inside JSX.

export const hero = {
  eyebrow: "Ruang Biru",
  h1: "Seluas langit. Setenang laut.",
  subtext:
    "Kadang kamu hanya butuh seseorang yang benar-benar hadir. Tanpa dihakimi, tanpa terburu-buru.",
  cta: "Booking Sesi",
  ctaHref: "#booking",
};

export const philosophy = {
  quote:
    "Biru itu ada di tempat-tempat yang luas — di langit dan di lautan. Di sana, tidak ada yang menghakimi. Tidak ada yang terburu-buru. Hanya ruang yang cukup untuk kamu bernapas dan bercerita.",
};

export const aboutBirru = {
  h2: "Tentang Birru",
  body: "Birru adalah seseorang yang percaya bahwa setiap orang berhak punya ruang untuk didengar — tanpa harus menjelaskan, tanpa harus terlihat kuat. Bukan psikolog, bukan terapis. Hanya seseorang yang hadir, sepenuhnya, untuk mendengarkan ceritamu.",
  disclaimer:
    "Ruang Biru bukan layanan konseling, psikologi, atau psikiatri profesional. Birru bukan tenaga kesehatan berlisensi. Layanan ini adalah pendampingan emosional berbasis kemanusiaan.",
};

export const sessionFormats = {
  h2: "Sesi Sesuai Kenyamananmu",
  intro:
    "Tidak semua orang siap bertatap muka dari awal — dan itu wajar. Mulai dari suara saja pun cukup. Yang penting, kamu mulai.",
  formats: [
    {
      id: "voice-call",
      label: "Voice Call",
      description: "Aku belum siap dilihat. Tapi aku butuh didengar.",
      note: null,
    },
    {
      id: "video-call",
      label: "Video Call",
      description: "Aku mau terhubung, tapi dari tempat yang aman.",
      note: null,
    },
    {
      id: "offline",
      label: "Bertemu Langsung",
      description: "Aku butuh kehadiran nyata seseorang.",
      note: "Bertemu di tempat publik pilihan kamu — kafe, taman, atau ruang terbuka lain di area Jabodetabek.",
    },
  ],
};

export const howItWorks = {
  h2: "Cara Kerja",
  steps: [
    {
      number: "01",
      title: "Isi Form",
      description:
        "Ceritakan sedikit tentang dirimu dan format sesi yang kamu inginkan — voice call, video call, atau bertemu langsung.",
    },
    {
      number: "02",
      title: "Konfirmasi",
      description:
        "Birru akan menghubungimu dalam 1x24 jam untuk menyepakati waktu dan detail sesi.",
    },
    {
      number: "03",
      title: "Sesi Berlangsung",
      description:
        "Maksimal 2 jam, sesuai kenyamanan dan kebutuhanmu. Tidak ada agenda, tidak ada penilaian.",
    },
  ],
};

export const testimonials = {
  h2: "Cerita Mereka",
  intro:
    "Setelah sesi, beberapa orang berkenan membagikan perasaannya — secara anonim.",
  quotes: [
    {
      id: "t1",
      text: "Aku nggak nyangka cuma butuh didengar aja bisa bikin lega seperti ini.",
      attribution: "Anonim",
    },
    {
      id: "t2",
      text: "Untuk pertama kalinya aku merasa nggak perlu menjelaskan kenapa aku sedih.",
      attribution: "Anonim",
    },
  ],
};

export const booking = {
  h2: "Booking Sesi",
  intro:
    "Isi form di bawah ini. Birru akan menghubungimu dalam 1x24 jam untuk konfirmasi.",
  note: "Untuk sesi bertemu langsung, kamu bisa menyertakan biaya transportasi Birru di form ini. Untuk sesi voice/video call, semuanya gratis — kalau setelahnya kamu merasa sesi ini berarti, ada cara sederhana untuk \u2018traktir Birru kopi\u2019 (lihat bagian bawah halaman).",
  // TODO: Replace with actual Google Form embed URL
  formUrl:
    "https://docs.google.com/forms/d/e/PLACEHOLDER/viewform?embedded=true",
};

export const donation = {
  h2: "Traktir Birru Kopi",
  body: "Tidak ada tagihan setelah sesi ini. Tapi kalau kamu mau, kamu bisa \u2018traktir Birru kopi\u2019 — supaya Ruang Biru tetap bisa buka untuk yang lain.",
  qrisLabel: "Scan QRIS",
  qrisImage: "/qris.png",
  saweriaLabel: "Saweria",
  saweriaButtonText: "Buka Saweria",
  // TODO: Replace with actual Saweria URL
  saweriaUrl: "https://saweria.co/PLACEHOLDER",
};

export const footer = {
  brand: "Ruang Biru",
  area: "Melayani area Jabodetabek",
  crisisLine:
    "Ruang Biru bukan layanan darurat. Jika kamu dalam kondisi krisis, hubungi Into The Light Indonesia: 119 ext 8.",
  disclaimer:
    "Ruang Biru bukan layanan konseling, psikologi, atau psikiatri profesional. Birru bukan tenaga kesehatan berlisensi.",
  // TODO: Replace with actual WhatsApp number
  whatsappUrl: "https://wa.me/62PLACEHOLDER",
  copyright: "\u00a9 2026 Ruang Biru",
};
