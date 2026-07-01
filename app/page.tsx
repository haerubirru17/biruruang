import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Pillars from "@/components/Pillars";
import AboutBirru from "@/components/AboutBirru";
import SessionFormats from "@/components/SessionFormats";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/shared/WaveDivider";

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. WaveDivider — Hero → Philosophy */}
      <WaveDivider />

      {/* 3. Philosophy */}
      <Philosophy />

      {/* 3.5. Pillars */}
      <Pillars />

      {/* 4. About Birru */}
      <AboutBirru />

      {/* 5. Session Formats */}
      <SessionFormats />

      {/* 6. WaveDivider — SessionFormats → HowItWorks */}
      <WaveDivider flip />

      {/* 7. How It Works */}
      <HowItWorks />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 8.5. FAQ */}
      <FAQ />

      {/* 9. Booking Form — id="booking" for Hero CTA anchor */}
      <BookingForm />

      {/* 10. Donation — id="donasi", understated */}
      <Donation />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
