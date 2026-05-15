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
import { HeroBottom } from "@/components/home/hero/hero-bottom";

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
    <section className="relative overflow-hidden min-h-dvh flex flex-col dark:bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-image.png"
          alt="Premium Cat Bed"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/20 md:to-transparent" />
      </div>

      <div className="shrink-0 h-[106px] md:hidden" />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center px-5 md:px-10 lg:px-16 md:pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl space-y-3 md:space-y-4">
            {/* Eyebrow */}
            <p className="font-medium text-[10px] md:text-xl text-primary uppercase">
              The Crown Collection
            </p>

            {/* Heading */}
            <h1 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] md:leading-[0.95] font-light uppercase">
              Luxury.
              <br />
              Elevated.
            </h1>

            {/* Description */}
            <p className="max-w-[240px] sm:max-w-sm text-xs sm:text-sm text-foreground/80 leading-relaxed">
              Floor to ceiling cat trees. Beautifully designed to complement
              your home and enrich your cat’s life.
            </p>

            {/* Button */}
            <div className="flex items-center gap-6">
              <div className="pt-1 md:pt-2">
                <button className="primary-button group inline-flex items-center text-white/80 gap-2 md:gap-3 py-3! px-6! text-[11px]! md:py-4! md:px-9! md:text-[0.8rem]! uppercase">
                  Shop the Collection
                </button>
              </div>

              <div className="pt-1 md:pt-2">
                <button className="group inline-flex items-center text-primary gap-2 md:gap-3 py-3! px-5! text-[11px]! md:py-4! md:text-[0.8rem]! font-semibold uppercase">
                  Explore
                  <ArrowRightIcon className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Hero Bottom */}
      <div className="relative z-20 mt-auto">
        <HeroBottom data={heroData} />
      </div>
    </section>
  );
}
