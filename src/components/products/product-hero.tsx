"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus, RotateCcw, ShieldCheck, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductHeroProps {
  product: {
    name: string;
    collection: string;
    price: number;
    rating: number;
    reviews: number;
    features: string[];
    image: string;
  };
}

function StatItem({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof Truck;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-10 place-items-center rounded-full border border-primary/20 bg-primary/5">
        <Icon className="size-4 text-primary" strokeWidth={1.5} />
      </div>
      <div className="leading-tight">
        <div className="text-[10px] font-semibold tracking-[0.22em] text-foreground/80 group-hover:text-primary transition-colors">
          {title}
        </div>
        <div className="text-[10px] tracking-[0.22em] text-muted-foreground/60">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export function ProductHero({ product }: ProductHeroProps) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto flex flex-col lg:flex-row min-h-screen lg:min-h-[980px] w-full max-w-[1600px]">
        {/* LEFT IMAGE - Responsive behavior */}
        <div className="relative w-full h-[400px] sm:h-[600px] lg:h-auto lg:flex-1">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover object-center lg:object-right-top"
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-background/5 via-transparent to-background/50 lg:to-background" />

          {/* Dimension label */}
          <div className="absolute w-full left-[9.5%] top-1/2 -translate-y-1/2">
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 h-full w-px bg-primary/30" />
              <div className="absolute left-[-3px] top-0 size-2 rounded-full border border-primary/35 bg-background" />
              <div className="text-[11px] leading-6 tracking-[0.34em] text-foreground">
                <div>FLOOR</div>
                <div>TO</div>
                <div className="mb-4">CEILING</div>
              </div>
              <div className="text-[12px] tracking-[0.18em] text-primary/90">
                240 - 260cm
              </div>
            </div>
          </div>

          {/* Brand mark */}
          <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-center">
            <div className="brand-text text-[12px] tracking-[0.34em] text-primary/75">
              SIMBA &amp; LOKI
            </div>
            <div className="mt-1 text-[10px] tracking-[0.32em] text-primary/50">
              PREMIUM CAT FURNITURE
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Precise Mobile Alignment */}
        <div className="relative flex w-full items-center justify-center px-6 py-12 sm:px-12 lg:w-[560px] lg:px-14 lg:py-0">
          <div className="absolute inset-0 bg-background lg:bg-gradient-to-b lg:from-background lg:via-background/95 lg:to-background" />
          <div className="absolute inset-y-0 left-0 hidden lg:block border-l border-primary/20" />
          <div className="absolute inset-x-0 top-0 lg:hidden border-t border-primary/20" />

          <div className="relative w-full max-w-[520px]">
            <div className="mb-5 text-[11px] font-semibold tracking-[0.34em] text-primary/70">
              {product.collection}
            </div>

            <h1 className="brand-text mb-6 text-[42px] sm:text-[56px] leading-[0.95] tracking-[0.045em] text-foreground lg:text-[64px]">
              {product.name}
            </h1>

            <p className="mb-7 max-w-[460px] text-[13px] leading-[1.9] text-foreground/90">
              A statement piece that blends luxury design with unmatched
              comfort. Built for cats who deserve the very best.
            </p>

            <div className="mb-7 flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                    strokeWidth={1.25}
                  />
                ))}
              </div>
              <span className="text-[12px] text-foreground font-medium">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-[10px] tracking-[0.26em] text-muted-foreground">
                ({product.reviews} REVIEWS)
              </span>
            </div>

            <div className="mb-7">
              <div className="mb-2 text-[34px] font-semibold tracking-[0.02em] text-primary">
                £{product.price.toFixed(2)}
              </div>
              <div className="text-[12px] leading-[1.7] text-foreground/55">
                or 3 interest-free payments of £{(product.price / 3).toFixed(2)}{" "}
                with <span className="font-bold text-[#ff3366]">Klarna.</span>
              </div>
            </div>

            <div className="mb-9 space-y-3">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-[3px] grid size-4 shrink-0 place-items-center rounded-full border border-primary/30 bg-muted/30">
                    <span className="size-1.5 rounded-full bg-primary/90" />
                  </span>
                  <span className="text-[13px] leading-[1.65] text-foreground/90">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <div className="mb-3 text-[10px] tracking-[0.32em] text-white/40">
                QUANTITY
              </div>

              <div className="flex gap-3">
                <div className="flex h-[52px] w-[140px] items-center justify-between border border-primary/20 bg-muted/20 px-3">
                  <button
                    type="button"
                    onClick={decrement}
                    className="grid size-9 place-items-center text-foreground/80 hover:text-foreground"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="text-[13px] text-foreground/80">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={increment}
                    className="grid size-9 place-items-center text-foreground/80 hover:text-foreground"
                    aria-label="Increase quantity"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>

                <Button
                  className={cn(
                    "h-[52px] flex-1 rounded-none bg-primary text-black hover:bg-primary/90",
                    "text-[11px] font-semibold tracking-[0.34em]",
                  )}
                >
                  ADD TO CART
                </Button>
              </div>
            </div>

            <Button
              variant="outline"
              className={cn(
                "h-[52px] w-full rounded-none border-primary/25 bg-transparent text-foreground/80 hover:bg-primary/10 hover:text-foreground",
                "text-[11px] font-semibold tracking-[0.34em]",
              )}
            >
              BUY IT NOW
            </Button>

            <div className="mt-8 grid grid-cols-3 gap-5 border-t border-primary/10 pt-8 group">
              <StatItem icon={Truck} title="FREE PREMIUM" subtitle="SHIPPING" />
              <StatItem icon={RotateCcw} title="30 DAY" subtitle="RETURNS" />
              <StatItem icon={ShieldCheck} title="2 YEAR" subtitle="WARRANTY" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
