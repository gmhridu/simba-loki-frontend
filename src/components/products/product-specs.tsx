import Image from "next/image";
import { Star } from "lucide-react";

export function ProductSpecs() {
  return (
    <section className="py-20 bg-background border-y border-primary/20">
      <div className="px-6 sm:px-10 lg:px-18 mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* Column 1: Product Details */}
          <div className="flex-1 pb-12 lg:pb-0 lg:pr-14 border-primary/20 border-b lg:border-b-0 lg:border-r py-4 flex flex-col justify-start">
            <h3 className="text-primary font-heading text-[18px] tracking-[0.16em] font-bold mb-10 uppercase">
              PRODUCT DETAILS
            </h3>
            <ul className="flex flex-col gap-6 text-[15px] text-foreground/90">
              <li>
                <span className="text-foreground font-medium mr-1 tracking-tight">
                  Height:
                </span>{" "}
                240 - 260cm (Adjustable)
              </li>
              <li>
                <span className="text-foreground font-medium mr-1 tracking-tight">
                  Base Dimensions:
                </span>{" "}
                60cm x 60cm
              </li>
              <li>
                <span className="text-foreground font-medium mr-1 tracking-tight">
                  Post Diameter:
                </span>{" "}
                11cm
              </li>
              <li className="leading-snug">
                <span className="text-foreground font-medium mr-1 tracking-tight">
                  Materials:
                </span>{" "}
                Plush Fabric, Natural Sisal, Solid Wood, Engineered Wood
              </li>
              <li>
                <span className="text-foreground font-medium mr-1 tracking-tight">
                  Colour:
                </span>{" "}
                Charcoal Grey
              </li>
              <li>
                <span className="text-foreground font-medium mr-1 tracking-tight">
                  Assembly:
                </span>{" "}
                Required (Tools Included)
              </li>
            </ul>
          </div>

          {/* Column 2: What's Included */}
          <div className="flex-1 py-12 lg:py-4 lg:px-14 border-primary/20 border-b lg:border-b-0 lg:border-r">
            <h3 className="text-primary font-heading text-[18px] tracking-[0.16em] font-bold mb-10 uppercase">
              WHAT&apos;S INCLUDED
            </h3>
            <ul className="flex flex-col gap-6 text-[15px] text-foreground/90">
              <li>• 1 x Ceiling Tension Pole</li>
              <li>• 1 x Base</li>
              <li>• 1 x Luxury Condo</li>
              <li>• 2 x Hammock Baskets</li>
              <li>• 5 x Platforms</li>
              <li>• 1 x Hanging Rope</li>
              <li>• 1 x Pom Pom Toy</li>
              <li>• All Fixings & Instructions</li>
            </ul>
          </div>

          {/* Column 3: Technical Drawing */}
          <div className="flex-1 py-12 lg:py-4 px-6 lg:px-16 border-primary/20 border-b lg:border-b-0 lg:border-r flex flex-col items-center justify-center">
            <div className="relative w-full aspect-[4/5] flex items-center justify-center">
              <Image
                src="/images/products/midnight-black-hero.png"
                alt="Dimensions"
                width={220}
                height={300}
                className="object-contain opacity-40 invert brightness-200"
              />
              {/* Vertical Dimension Line */}
              <div className="absolute right-0 top-[5%] bottom-[5%] w-[1.5px] bg-primary/30 flex items-center">
                <div className="absolute top-0 w-3 -left-1.5 h-[1.5px] bg-primary/30" />
                <div className="absolute bottom-0 w-3 -left-1.5 h-[1.5px] bg-primary/30" />
                <span className="absolute left-6 translate-y-[-50%] top-1/2 text-foreground text-[11px] whitespace-nowrap font-semibold tracking-widest rotate-90">
                  240 - 260cm
                </span>
              </div>
              {/* Horizontal Dimension Line */}
              <div className="absolute bottom-0 left-[10%] right-[10%] h-[1.5px] bg-primary/30 flex justify-center">
                <div className="absolute left-0 h-3 -top-1.5 w-[1.5px] bg-primary/30" />
                <div className="absolute right-0 h-3 -top-1.5 w-[1.5px] bg-primary/30" />
                <span className="absolute top-4 text-foreground text-[11px] whitespace-nowrap font-semibold tracking-widest">
                  60cm x 60cm
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Context Photo */}
          <div className="flex-1 border-primary/20 border-b lg:border-b-0 lg:border-r overflow-hidden px-10 py-12 lg:py-0">
            <div className="relative w-full h-full min-h-[480px]">
              <Image
                src="/images/products/midnight-black-hero.png"
                alt="Product in home"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 5: Testimonial */}
          <div className="flex-1 py-12 lg:py-4 lg:pl-14 flex flex-col justify-center">
            <span className="text-primary text-[84px] font-serif leading-none italic select-none">
              &ldquo;
            </span>
            <p className="text-foreground text-[20px] leading-[1.6] mb-8 font-serif italic opacity-90 max-w-[380px]">
              &ldquo;Our cats absolutely love it. The quality is outstanding and
              it looks incredible in our home.&rdquo;
            </p>
            <div className="flex flex-col gap-4">
              <span className="text-primary font-heading text-[16px] tracking-[0.2em] uppercase font-bold">
                - SOPHIE M.
              </span>
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-3.5 fill-primary text-primary"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
