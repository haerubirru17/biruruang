// lib/content.ts
// All user-facing text lives here. Components import from this file.
// Do not hardcode copy inside JSX.

export const hero = {
  eyebrow: "Layanan Pendampingan Emosional Gratis & Anonim",
  h1: "Seluas langit. Setenang laut.",
  subtext:
    "Ruang Biru adalah wadah aman untuk bercerita secara anonim. Hubungi Birru via panggilan suara, video call, atau bertemu langsung — didengar sepenuhnya tanpa dihakimi.",
  cta: "Booking Sesi",
  ctaHref: "#booking",
};

export const philosophy = {
  quote:
    "Biru itu ada di tempat-tempat yang luas — di langit dan di lautan. Di sana, tidak ada yang menghakimi. Tidak ada yang terburu-buru. Hanya ruang yang cukup untuk kamu bernapas dan bercerita.",
};

export const pillars = {
  h2: "Tiga Pilar Ruang Biru",
  intro:
    "Kami berkomitmen menciptakan ruang yang aman, tenang, dan sepenuhnya berpihak padamu.",
  items: [
    {
      id: "p1",
      title: "100% Anonim & Rahasia",
      description:
        "Kamu tidak perlu mendaftarkan akun atau memberikan identitas asli. Gunakan nama samaran dan berceritalah dengan bebas tanpa khawatir.",
    },
    {
      id: "p2",
      title: "Didengar, Bukan Dihakimi",
      description:
        "Birru hadir murni sebagai pendengar emosional. Tidak ada penilaian, tidak ada ceramah, dan tidak ada diagnosis psikologis.",
    },
    {
      id: "p3",
      title: "Format Sesuai Kenyamananmu",
      description:
        "Pilih format obrolan yang paling membuatmu merasa aman: panggilan suara (voice), panggilan video (video), atau tatap muka langsung (offline).",
    },
  ],
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

export const faq = {
  h2: "Pertanyaan yang Sering Diajukan",
  intro:
    "Kami memahami bahwa bercerita kepada orang baru membutuhkan keberanian besar. Berikut adalah beberapa hal penting mengenai keamanan dan kenyamanan sesimu.",
  items: [
    {
      id: "q1",
      question: "Apakah identitas dan isi ceritaku benar-benar aman?",
      answer:
        "Tentu saja. Privasi dan keamananmu adalah prioritas mutlak kami. Kamu sepenuhnya bebas menggunakan nama samaran (anonim). Segala hal yang kamu bagi selama sesi dijaga kerahasiaannya secara penuh dan tidak akan pernah direkam, dicatat, atau disebarluaskan kepada siapa pun.",
    },
    {
      id: "q2",
      question: "Apakah aku harus menyalakan kamera saat Video Call?",
      answer:
        "Sama sekali tidak. Kami ingin kamu merasa senyaman mungkin. Jika kamu memilih format Video Call tapi merasa lebih tenang dengan kamera mati (hanya suara), kamu bebas mematikan kameramu kapan saja. Kamu memegang kendali penuh atas sesi ini.",
    },
    {
      id: "q3",
      question: "Bagaimana keamanan untuk sesi tatap muka langsung (offline)?",
      answer:
        "Untuk menjaga kenyamanan dan keamanan bersama, sesi tatap muka langsung hanya akan dilakukan di tempat publik yang ramai dan terbuka, seperti kafe, perpustakaan umum, atau taman kota di Jabodetabek yang disepakati bersama. Birru tidak akan pernah meminta untuk bertemu di ruang privat.",
    },
    {
      id: "q4",
      question: "Apakah obrolanku akan dihakimi, dinilai, atau disebarkan?",
      answer:
        "Tidak akan. Birru hadir murni sebagai pendengar emosional berbasis kemanusiaan, bukan psikolog atau hakim. Birru tidak akan memberikan diagnosis medis, menilai pilihan hidupmu, atau menceramahimu. Semua obrolan terhenti saat sesi berakhir.",
    },
  ],
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
