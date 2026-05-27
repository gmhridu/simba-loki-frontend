"use client";

import { Leaf, ShieldCheck, Home, PawPrint } from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: 1,
    image: "/images/about/feature-1.png", // Replace with your image path
    icon: Leaf,
    title: "PREMIUM MATERIALS",
    description: "Sustainable, durable and built to last.",
  },
  {
    id: 2,
    image: "/images/about/feature-2.png",
    icon: ShieldCheck,
    title: "SAFETY FIRST",
    description: "Stable, secure and designed with your cat in mind.",
  },
  {
    id: 3,
    image: "/images/about/feature-3.png",
    icon: Home,
    title: "HOME INTEGRATED",
    description: "Timeless designs that enhance your interior.",
  },
  {
    id: 4,
    image: "/images/about/feature-4.png",
    icon: PawPrint,
    title: "ENRICHMENT FOCUSED",
    description: "Encourages natural behaviours for a happier, healthier cat.",
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:mx-24 my-10 p-2 sm:p-0">
        {features.map(({ id, image, icon: Icon, title, description }) => (
          <div key={id} className="flex flex-col group">
            {/* Image */}
            <div className="relative w-full aspect-6/4 overflow-hidden border border-primary/60">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
              />
              {/* Subtle dark overlay on hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div
              className="flex flex-col gap-2 px-4 py-5 sm:px-5 sm:py-6 border-t"
              style={{ borderColor: "rgba(201,169,110,0.15)" }}
            >
              {/* Icon + Title row */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <Icon
                  className="w-7 h-7 md:size-12 text-primary transition-transform duration-300 group-hover:scale-110 shrink-0 mt-0.5"
                  style={{ color: "#C9A96E" }}
                  strokeWidth={1.5}
                />
                <div className="flex flex-col items-start gap-2">
                  <p className="text-primary font-semibold tracking-widest uppercase text-[9px] md:text-sm">
                    {title}
                  </p>
                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-300 text-[10px] md:text-[15px] leading-relaxed wrap-break-word max-w-full">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
