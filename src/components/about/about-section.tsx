import Image from "next/image";
import {
  GlobeIcon,
  HeartIcon,
  HomeIcon,
  LeafIcon,
  PawPrintIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { FeatureHighlights } from "@/components/shared/feature-highlights";

const aboutData = [
  {
    icon: LeafIcon,
    title: "Premium Quality",
    description: "Only the finest materials for lasting beauty and durability.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built to Last",
    description:
      "Reinforced structures designed for stability, safety and strength.",
  },
  {
    icon: HeartIcon,
    title: "Designed for Cats",
    description:
      "Every detail is crafted for comfort, enrichment and well-being.",
  },
  {
    icon: HomeIcon,
    title: "Made to fit your home",
    description:
      "Timeless designs that complement your space, not compromise it.",
  },
  {
    icon: GlobeIcon,
    title: "Responsibly Made",
    description:
      "We care about our planet and are committed to sustainable practices.",
  },
];

export function AboutSection() {
  return (
    <>
      <section className="relative w-full overflow-hidden border-t border-primary bg-background">
        {/* Background Image */}
        <div className="relative w-full h-[420px] md:h-[550px]">
          <Image
            src="/images/about-us/about-us.png"
            alt="Luxury Cat Furniture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* gradient overlay from left to right */}

          <div className="absolute inset-0 bg-linear-to-r from-black/10 via-black/5 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto md:mx-22 w-full px-5 sm:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 items-center">
              {/* Left Content */}
              <div className="max-w-lg space-y-5 md:space-y-6 text-white">
                {/* Eyebrow */}
                <p className="text-primary tracking-[3px] text-xs sm:text-sm font-medium uppercase">
                  Our Story
                </p>

                {/* Heading */}
                <h1 className="text-xl sm:text-3xl leading-relaxed  font-medium uppercase text-black">
                  From a love of cats <br />
                  <span className="border-b-2 border-primary">To A</span>{" "}
                  Promise of quality
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed max-w-md">
                  Simba & Loki was founded by cat lovers, for cat lovers.
                  Frustated by bulky, unattractive cat trees that didn't
                  complement our homes, we set out to create something different
                  — furniture that elevates your space and enriches your cat's
                  life.
                </p>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed max-w-md">
                  We collaborate with expert designers and use only the finest
                  materials to craft pieces that are as durable as they are
                  beautiful.
                </p>

                {/* Signature */}
                <div className="flex items-center gap-3 text-primary pt-4">
                  <span className="text-xl font-light">—</span>

                  <span
                    className="text-3xl tracking-wide"
                    style={{ fontFamily: "var(--font-signature)" }}
                  >
                    The Simba &amp; Loki Team
                  </span>

                  <PawPrintIcon className="w-5 h-5 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureHighlights data={aboutData} gridCols="grid-cols-3 md:grid-cols-5">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent via-primary to-transparent" />

          <h2 className="text-primary text-sm md:text-base font-semibold tracking-[3px] uppercase">
            Our Values
          </h2>

          <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent via-primary to-transparent" />
        </div>
      </FeatureHighlights>
    </>
  );
}
