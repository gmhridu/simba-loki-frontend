import { AboutSection } from "@/components/about/about-section";
import { AboutUsHeroSection } from "@/components/about/hero-section";
import { MaterialsSection } from "@/components/about/materials-section";

export default function AboutUsPage() {
  return (
    <>
      <AboutUsHeroSection />
      <AboutSection />
      <MaterialsSection />
    </>
  );
}
