import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruang Biru — Seluas langit. Setenang laut.",
  description:
    "Ruang Biru adalah layanan pendampingan emosional gratis. Didengar, bukan didiagnosa. Voice call, video call, atau bertemu langsung — kamu yang pilih.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-warm-white text-ink antialiased font-inter">
        {children}
      </body>
    </html>
  );
}
