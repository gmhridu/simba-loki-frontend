"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import {
  CartIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/components/icons/nav-icons";

const NAV_LINKS = [
  { label: "SHOP", href: "/shop" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "ABOUT", href: "/about" },
  { label: "JOURNAL", href: "/journal" },
];

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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="dark:bg-black dark:border-b dark:border-border bg-primary text-brand-cream dark:text-brand-gold py-2.5 text-center text-xs tracking-widest font-medium">
        FREE PREMIUM SHIPPING • 30 DAY RETURNS • 2 YEAR WARRANTY
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "bg-background border-b border-border transition-all duration-300",
          isScrolled && "shadow-md shadow-black/5 dark:shadow-black/50",
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-20 flex items-center justify-between relative">
            {/* Left - Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm tracking-widest font-medium">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <MenuIcon />}
            </button>

            {/* Center Logo - Using Your Exact Code */}
            <Link
              href="/"
              aria-label="Simba & Loki — Home"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0 group select-none"
            >
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
            </Link>

            {/* Right Side Icons */}
            <div className="flex items-center gap-5">
              <ThemeToggle />

              <button className="text-foreground hover:text-brand-gold transition-colors">
                <SearchIcon />
              </button>

              <button className="hidden sm:block text-foreground hover:text-brand-gold transition-colors">
                <UserIcon />
              </button>

              <button className="relative text-foreground hover:text-brand-gold transition-colors">
                <CartIcon />
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold text-[10px] font-semibold text-white">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-background px-6 py-8">
            <div className="flex flex-col gap-6 text-lg">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
