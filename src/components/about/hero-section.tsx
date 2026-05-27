import Image from "next/image";

export function AboutUsHeroSection() {
  return (
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
          <div className="w-full max-w-7xl mx-auto md:mx-28 px-5 sm:px-6 md:px-8">
            <div className="space-y-3 md:space-y-5">
              {/* Eyebrow */}
              <p className="font-medium text-[10px] sm:text-xs md:text-lg tracking-[0.3em] text-primary uppercase">
                About Simba & Loki
              </p>

              {/* Heading */}
              <h1 className="text-xl sm:text-5xl leading-relaxed  font-light uppercase">
                Thoughtfully Designed. <br />
                <span className="border-b-2 border-primary">Built</span> For a
                Lifetime.
              </h1>

              {/* Description */}
              <p className="max-w-[240px] sm:max-w-sm md:max-w-lg text-xs sm:text-sm md:text-base text-white/75 leading-relaxed">
                At Simba & Loki, we believe cats are family. That's why we
                create premium cat furniture that blends beautifully into your
                home while giving your ca the very best.
              </p>
              <p className="max-w-[240px] sm:max-w-sm md:max-w-lg text-xs sm:text-sm md:text-base text-white/75 leading-relaxed">
                Every piece is thoughtfully designed, meticulosly crafted, and
                built to stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
