import { cn } from "@/lib/utils";

interface TitleProps {
  header: string;
  title: string;
  description?: string;
  className?: string;
}

export function Title({ header, title, description, className }: TitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        className,
      )}
    >
      {/* Header with decorative lines */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent via-primary to-transparent" />
        <h2 className="text-primary text-sm md:text-base font-semibold tracking-[3px] uppercase">
          {header}
        </h2>
        <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Main Title */}
      <h1 className="text-2xl md:text-4xl font-semibold dark:text-white text-gray-800 mb-3 md:mb-4">
        {title}
      </h1>

      {/* Description */}
      {description && (
        <p className="text-gray-500 dark:text-gray-300 text-[15px] md:text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
