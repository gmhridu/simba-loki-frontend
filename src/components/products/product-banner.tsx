"use client";

import Image from "next/image";
import { Truck, RotateCcw, ShieldCheck, Lock, Link } from "lucide-react";
import { cn } from "@/lib/utils";

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 3L25 13L34 5L29.5 21H10.5L6 5L15 13L20 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <rect
        x="9"
        y="22"
        width="22"
        height="3.5"
        rx="0.6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function ProductBanner() {
  return (
    <footer className="py-12 md:py-16 bg-background border-t border-primary/20">
      <div className="px-18 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          <div className="flex items-center gap-5 group">
            <Truck
              className="size-11 text-primary transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1}
            />
            <div>
              <p className="text-primary text-[14px] font-heading tracking-[0.15em] uppercase font-bold">
                FREE PREMIUM SHIPPING
              </p>
              <p className="text-muted-foreground text-[13px] font-medium leading-tight">
                On all orders
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 group">
            <RotateCcw
              className="size-11 text-primary transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.2}
            />
            <div>
              <p className="text-primary text-[14px] font-heading tracking-[0.15em] uppercase font-bold">
                30 DAY RETURNS
              </p>
              <p className="text-muted-foreground text-[13px] font-medium leading-tight">
                No hassle
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-0 group select-none">
            <CrownIcon
              className={cn(
                "w-8 h-auto text-brand-gold mb-0.5",
                "transition-transform duration-300 group-hover:scale-110",
              )}
            />
            <span
              className={cn(
                "font-heading italic text-[23px] leading-none tracking-[0.04em]",
                "text-brand-charcoal dark:text-brand-cream",
                "group-hover:text-brand-gold dark:group-hover:text-brand-gold",
                "transition-colors duration-200",
              )}
            >
              SL
            </span>
            <span
              className={cn(
                "font-sans text-[9.5px] tracking-[0.28em] uppercase mt-[3px]",
                "text-brand-charcoal dark:text-brand-cream",
              )}
            >
              Simba &amp; Loki
            </span>
            <span className="font-sans text-[8px] tracking-[0.18em] text-brand-gold uppercase">
              — Premium Cat Furniture —
            </span>
          </div>

          <div className="flex items-center gap-5 group">
            <ShieldCheck
              className="size-11 text-primary transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.2}
            />
            <div>
              <p className="text-primary text-[14px] font-heading tracking-[0.15em] uppercase font-bold">
                2 YEAR WARRANTY
              </p>
              <p className="text-muted-foreground text-[13px] font-medium leading-tight">
                Peace of mind
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 group">
            <Lock
              className="size-11 text-primary transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1}
            />
            <div>
              <p className="text-primary text-[14px] font-heading tracking-[0.15em] uppercase font-bold">
                SECURE CHECKOUT
              </p>
              <p className="text-muted-foreground text-[13px] font-medium leading-tight">
                100% safe
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
