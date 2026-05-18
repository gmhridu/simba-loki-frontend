import { Collection } from "@/constants/collections";
import Image from "next/image";
import Link from "next/link";

export function OurCollectionCard({
  id,
  name,
  color,
  image,
  shopUrl = "#",
}: Collection) {
  return (
    <div className="group relative overflow-hidden rounded-sm bg-background transition-all duration-300 hover:scale-[1.02] border border-primary cursor-pointer">
      <div className="relative aspect-500/832 md:aspect-1200/2664 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${color} ${name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
        {color && (
          <p className="mb-1 text-sm tracking-[3px] text-amber-400 font-medium">
            {color.toUpperCase()}
          </p>
        )}
        <h3 className="mb-3 text-base md:text-2xl font-semibold text-white tracking-wide">
          {name}
        </h3>

        <Link
          href={`/products/${id}`}
          className="inline-block text-primary px-10 text-sm sm:text-base tracking-widest transition-all duration-300"
          prefetch={true}
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}
