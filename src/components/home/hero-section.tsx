import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden dark:bg-black text-white">
      {/* Hero Container */}
      <div className="relative aspect-[16/9] min-h-[700px] w-full">
        {/* Background Image */}
        <Image
          src="/images/home/hero-image.png"
          alt="Premium Cat Bed"
          fill
          priority
          className="object-cover object-center"
        />



        {/* Left Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" /> */}

        {/* Content */}
        <main className="relative z-10 flex items-center h-full px-6 md:px-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl space-y-8">
              {/* Eyebrow */}
              <p className="eyebrow brand-text font-semibold text-xl tracking-wider">
                Designer Cat Beds
              </p>

              {/* Heading */}
              <h1 className="hero-title max-w-xl">
                Sleep.
                <br />
                Lounge.
              <br />
                <span className="italic text-champagne">
                  Be Royal.
                </span>
              </h1>

              {/* Description */}
              <p className="body-copy max-w-md">
                Our designer cat beds combine timeless design
                with deep, calming comfort. Because your cat
                deserves a throne of their own.
              </p>

              {/* Button */}
              <button className="primary-button group gap-3">
                <span>
                  Explore the Collection
                </span>

                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
