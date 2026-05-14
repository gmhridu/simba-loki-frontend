import { CircleCheckIcon } from "lucide-react";
import Image from "next/image";

const features = [
  "Orthopedic support",
  "Non-toxic, pet-safe materials",
  "Calming, secure design",
  "Durable and scratch-resistant",
  "Machine-washable cushions",
  "Designed in the UK",
];

export function CraftedComfort() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="relative aspect-video sm:aspect-15/5.5 overflow-hidden">
          <Image
            src="/images/luxury-features/luxury-features-image.png"
            alt="Luxury Cat Bed"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center text-white p-2">
          {/* Small Header */}
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            CRAFTED FOR COMFORT
          </p>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl dark:text-white text-gray-800 font-light leading-none mb-6">
            <span className="border-b border-primary">LUX</span>URY IN EVERY DETAIL
          </h2>

          {/* Description */}
          <p className="text-foreground/50 dark:text-foreground/80 text-base leading-relaxed mb-10 max-w-lg">
            From the softest fabrics to the most supportive fills, every detail
            is chosen with one thing in mind: your cat&apos;s ultimate comfort.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CircleCheckIcon className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-foreground/50 dark:text-foreground/80 text-base leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
