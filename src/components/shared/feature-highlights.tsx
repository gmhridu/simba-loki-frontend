import { LucideIcon } from "lucide-react";

interface FeatureHighlightsProps {
  data: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];

  gridCols?: string;
}

export function FeatureHighlights({
  data,
  gridCols = "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
}: FeatureHighlightsProps) {
  return (
    <div className="relative dark:bg-[#0A0A0A] bg-background py-6 md:py-12 border-y border-border">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-[92%] mx-auto px-2 md:px-6">
        <div className={`grid ${gridCols} gap-y-7 gap-x-3 md:gap-0 relative`}>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group relative px-2 md:px-4"
            >
              {/* Icon */}
              <div className="mb-2 md:mb-6">
                <item.icon className="w-7 h-7 md:w-14 md:h-14 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="text-primary font-semibold tracking-widest uppercase text-[9px] md:text-sm mb-1 md:mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-300 text-[10px] md:text-[15px] leading-relaxed max-w-[120px] md:max-w-[180px]">
                {item.description}
              </p>

              {/* Divider */}
              {index < data.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 h-[70%] w-px bg-linear-to-b from-transparent via-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
