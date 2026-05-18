import AboutSection from "@/components/home/about/about-section";
import { HeroSection } from "@/components/home/hero/hero-section";
import { OurCollection } from "@/components/home/our-collection/our-collection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <OurCollection />
      <AboutSection />
    </div>
  );
}
