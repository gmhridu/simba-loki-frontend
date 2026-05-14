import { HeroSection } from "@/components/home/hero/hero-section";
import { LuxuryFeatures } from "@/components/home/luxury-features/luxury-features";
import { OurCollection } from "@/components/home/our-collection/our-collection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <OurCollection />
      <LuxuryFeatures />
    </div>
  );
}
