import {
  ArrowRightIcon,
  CrownIcon,
  GemIcon,
  HistoryIcon,
  PawPrintIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import { FeatureHighlights } from "@/components/shared/feature-highlights";

const heroData = [
  {
    icon: TruckIcon,
    title: "Free Premium Delivery",
    description: "On all orders, delivered with care.",
  },
  {
    icon: HistoryIcon,
    title: "30 Day Returns",
    description: "Love it or return it. No hassle.",
  },
  {
    icon: CrownIcon,
    title: "Timeless Design",
    description: "Beautiful in every home",
  },
  {
    icon: ShieldCheckIcon,
    title: "2 Year Warranty",
    description: "Build to last, Peace of mind.",
  },
  {
    icon: GemIcon,
    title: "Premium Quality",
    description: "Only the finest materials for your cat.",
  },
  {
    icon: PawPrintIcon,
    title: "Loved by Cats",
    description: "Ergonomic support they adore",
  },
];

export function HeroSection() {
  return (
    <>
      <section className="relative pt-[117px] overflow-hidden bg-background text-white">
        {/* HERO IMAGE CONTAINER */}
        <div className="relative h-[350px] sm:h-[500px] md:h-[780px] w-full">
          <Image
            src="/images/home/hero-image.png"
            alt="Premium Cat Bed"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

          {/* CONTENT */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="w-full mx-auto px-12 sm:px-16 md:px-32">
              <div className="max-w-[280px] sm:max-w-md md:max-w-2xl space-y-3 md:space-y-5">
                {/* Eyebrow */}
                <p className="font-medium text-[10px] sm:text-xs md:text-lg tracking-[0.3em] text-primary uppercase">
                  The Crown Collection
                </p>

                {/* Heading */}
                <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-none font-light uppercase">
                  Luxury.
                  <br />
                  Elevated.
                </h1>

                {/* Description */}
                <p className="max-w-[240px] sm:max-w-sm md:max-w-lg text-xs sm:text-sm md:text-base text-white/75 leading-relaxed">
                  Floor to ceiling cat trees. Beautifully designed to complement
                  your home and enrich your cat’s life.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3 md:gap-5 pt-2">
                  <button className="primary-button inline-flex items-center justify-center text-white/90 uppercase text-[11px] md:text-sm px-5 py-3 md:px-8 md:py-4">
                    Shop the Collection
                  </button>

                  <button className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-[11px] md:text-sm">
                    Explore
                    <ArrowRightIcon className="size-4 md:size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureHighlights
        data={heroData}
        gridCols="grid-cols-3 md:grid-cols-6"
      />
    </>
  );
}
