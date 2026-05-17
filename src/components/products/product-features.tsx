import { Feather, ShieldCheck, PawPrint, Wrench, Crown } from "lucide-react";

const features = [
  {
    icon: Feather,
    title: "ULTRA PREMIUM",
    description:
      "Ultra-soft plush, natural sisal and solid wood for unmatched quality and comfort.",
  },
  {
    icon: ShieldCheck,
    title: "BUILT TO LAST",
    description:
      "Reinforced structure and thick sisal posts for maximum stability and durability.",
  },
  {
    icon: PawPrint,
    title: "COMFORT & PLAY",
    description:
      "Spacious platforms, cozy hammocks and engaging features for endless enrichment.",
  },
  {
    icon: Wrench,
    title: "EASY TO ASSEMBLE",
    description:
      "Simple, intuitive assembly with all tools and instructions included.",
  },
  {
    icon: Crown,
    title: "DESIGNED TO IMPRESS",
    description:
      "A statement piece that elevates your home and complements your interior.",
  },
];

export function ProductFeatures() {
  return (
    <section className="py-12 bg-background border-y border-primary/20">
      <div className="px-6 sm:px-10 lg:px-14 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-stretch gap-y-10 lg:gap-0 justify-between">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex gap-4 lg:px-8 border-primary/10 lg:border-r last:border-r-0 group flex-1"
            >
              <div className="shrink-0">
                <feature.icon
                  className="size-12 text-primary transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
                  strokeWidth={1.4}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-primary font-heading text-[18px] leading-tight tracking-[0.16em] font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-[14px] leading-[1.6] max-w-[240px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
