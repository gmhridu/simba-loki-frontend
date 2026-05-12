import {
  ArrowRightIcon,
  CrownIcon,
  GemIcon,
  LeafIcon,
  PawPrintIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import { HeroBottom } from "./hero-bottom";

const heroData = [
  {
    icon: LeafIcon,
    title: "Ultra Plush Comfort",
    description: "For deeper, more restful sleep",
  },
  {
    icon: GemIcon,
    title: "Premium Materials",
    description: "The finest fabrics built to last",
  },
  {
    icon: CrownIcon,
    title: "Timeless Design",
    description: "Beautiful in every home",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built to Last",
    description: "Durable, stable and secure",
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
            <p className="font-semibold text-[10px] md:text-xl tracking-[0.2em] text-primary">
              DESIGNER CAT BEDS
            </p>

            {/* Heading */}
            <h1 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] md:leading-[0.95] font-light">
              SLEEP.
              <br />
              LOUNGE.
              <br />
              <span className="italic text-primary">BE ROYAL.</span>
            </h1>

            {/* Description */}
            <p className="max-w-[220px] sm:max-w-sm text-xs sm:text-sm md:text-lg text-gray-200 leading-relaxed">
              Our designer cat beds combine timeless design with deep, calming
              comfort. Because your cat deserves a throne of their own.
            </p>

            {/* Button */}
            <div className="pt-1 md:pt-2">
              <button className="primary-button group inline-flex items-center gap-2 md:gap-3 py-3! px-6! text-[11px]! md:py-4! md:px-9! md:text-[0.8rem]!">
                <span>Explore the Collection</span>
                <ArrowRightIcon className="w-3 h-3 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
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
