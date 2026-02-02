import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full bg-black/96 antialiased bg-grid-white[0.02]">
        <HeroSection />
        <FeaturedSection />
      </main>
    </div>
  );
}
