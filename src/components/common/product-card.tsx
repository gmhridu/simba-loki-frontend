import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  colors: string[];
  slug?: string;
}

export function ProductCard({
  image,
  name,
  price,
  description,
  colors,
  slug = "/products",
}: ProductCardProps) {
  return (
    <div className="group h-full flex flex-col border-2 border-border overflow-hidden hover:border-primary/70 transition-all duration-300 rounded-sm cursor-pointer">
      {/* product image section */}
      <div className="relative aspect-4/3 overflow-hidden bg-background">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-primary text-xl font-semibold tracking-wide">
            {name}
          </h3>
          <span className="text-primary font-semibold whitespace-normal">
            {price}
          </span>
        </div>
        <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Color Swatches */}
        <div className="flex gap-2.5 mb-6">
          {colors.map((color, index) => (
            <div
              key={index}
              className="size-6 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* View details button */}
        <Link href={slug} className="mt-auto block">
          <button className="w-full border border-primary/70 hover:border-primary text-primary py-3 px-6 text-sm font-medium tracking-widest uppercase flex items-center justify-between transition-all hover:bg-primary/5 rounded-lg">
            VIEW DETAILS
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}
