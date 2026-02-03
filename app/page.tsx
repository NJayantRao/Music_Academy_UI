import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import ImpressiveSection from "@/components/ImpressiveSection";
import MovingCards from "@/components/MovingCards";
import WavyBg from "@/components/Instructors";
import Webinars from "@/components/Webinars";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <main className="min-h-screen w-full relative overflow-hidden">
        <HeroSection />
        <FeaturedSection />
        <ImpressiveSection />
        <MovingCards />
        <Webinars />
        <WavyBg />
        <Footer />
      </main>
    </div>
  );
}
