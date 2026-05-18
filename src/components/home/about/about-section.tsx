import { FeatureHighlights } from "@/components/shared/feature-highlights";
import {
  ArrowRightIcon,
  HeadsetIcon,
  HeartIcon,
  HomeIcon,
  Layers3Icon,
  LayersIcon,
  LeafIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: LeafIcon,
    title: "SUSTAINABLY SOURCED",
    description: "Responsible materials, consciously chosen.",
  },
  {
    icon: LayersIcon,
    title: "BUILT TO LAST",
    description: "Reinforced structure for maximum stability.",
  },
  {
    icon: HeartIcon,
    title: "CAT FIRST DESIGN",
    description: "Thoughtful details for comfort, enrichment and safety.",
  },
  {
    icon: HomeIcon,
    title: "MADE TO BLEND IN",
    description: "Timeless designs that elevate your space.",
  },
  {
    icon: HeadsetIcon,
    title: "DEDICATED SUPPORT",
    description: "Our concierge team is here to help.",
  },
];

export default function AboutSection() {
  return (
    <>
      <section className="relative w-full overflow-hidden border-t border-primary bg-background">
        {/* Background Image */}
        <div className="relative w-full h-[280px] sm:h-[500px] md:h-[620px]">
          <Image
            src="/images/about/about.png"
            alt="Luxury Cat Furniture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* gradient overlay from left to right */}
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto md:mx-20 w-full px-5 sm:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 items-center">
              {/* Left Content */}
              <div className="max-w-lg space-y-5 md:space-y-6 text-white">
                {/* Eyebrow */}
                <p className="text-primary tracking-[3px] text-xs sm:text-sm font-medium uppercase">
                  About Simba & Loki
                </p>

                {/* Heading */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                  WHERE LUXURY
                  <br />
                  MEETS LOVE
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md">
                  We believe your cat deserves the very best. Our furniture is
                  designed to elevate your home while providing the ultimate
                  environment for your cat to rest, play and thrive.
                </p>

                {/* Link */}
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-3 group text-primary hover:text-primary/80 transition-colors duration-300 text-xs sm:text-sm tracking-[3px] font-medium uppercase"
                >
                  Our Story
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeatureHighlights data={features} gridCols="grid-cols-3 md:grid-cols-5" />
    </>
  );
}
