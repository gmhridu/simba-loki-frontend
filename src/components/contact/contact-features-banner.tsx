import { Truck, RotateCcw, ShieldCheck, Lock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "FREE PREMIUM SHIPPING",
    subtitle: "On all orders",
  },
  {
    icon: RotateCcw,
    title: "30 DAY RETURNS",
    subtitle: "Love it or return it",
  },
  {
    icon: ShieldCheck,
    title: "2 YEAR WARRANTY",
    subtitle: "Peace of mind",
  },
  {
    icon: Lock,
    title: "SECURE CHECKOUT",
    subtitle: "100% safe & secure",
  },
];

export function ContactFeaturesBanner() {
  return (
    <section className="bg-secondary py-8 w-full border-t border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <feature.icon className="w-8 h-8 text-primary shrink-0" strokeWidth={1.25} />
              <div className="flex flex-col">
                <h4 className="text-[13px] md:text-[14px] font-medium tracking-wide text-primary mb-0.5 font-sans uppercase">
                  {feature.title}
                </h4>
                <p className="text-[13px] md:text-[14px] text-muted-foreground m-0">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
