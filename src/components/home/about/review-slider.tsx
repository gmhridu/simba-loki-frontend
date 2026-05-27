"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "The quality is simply unmatched. It looks like a designer piece of furniture and my cat absolutely loves it.",
    name: "EMILY R.",
    stars: 5,
  },
  {
    id: 2,
    text: "I was amazed by how stylish and sturdy this cat tree is. It blends perfectly with my living room decor.",
    name: "MICHAEL T.",
    stars: 5,
  },
  {
    id: 3,
    text: "Finally a cat furniture brand that understands both cats and modern design. Worth every penny!",
    name: "SOPHIA L.",
    stars: 5,
  },
];

export function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex((index + reviews.length) % reviews.length);
      setVisible(true);
    }, 250);
  };

  const nextReview = useCallback(() => goTo(currentIndex + 1), [currentIndex]);
  const prevReview = () => goTo(currentIndex - 1);

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, nextReview]);

  const review = reviews[currentIndex];

  return (
    <div
      className="relative w-full bg-[#0A0A0A] px-14 sm:px-20 py-10 sm:py-12 overflow-hidden"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A96E 50%, transparent)",
        }}
      />
      {/* Bottom gradient border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A96E 50%, transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center min-h-40 flex flex-col items-center justify-center">
        {/* Quote mark */}
        <span
          className="block leading-none mb-3 select-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(56px, 8vw, 80px)",
            color: "#C9A96E",
            letterSpacing: "-4px",
            opacity: 0.9,
          }}
        >
          &#8220;
        </span>

        {/* Review text */}
        <p
          className="italic leading-relaxed mx-auto mb-5 px-4 transition-all duration-400"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(15px, 2.5vw, 19px)",
            color: "#F0EDE8",
            maxWidth: "580px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {review.text}
        </p>

        <div className="flex items-center justify-center gap-6">
          {/* Stars */}
          <div
            className="flex justify-center gap-1 transition-opacity duration-400 delay-100"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                style={{
                  color: "#C9A96E",
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                }}
              >
                ★
              </span>
            ))}
          </div>

          {/* Author */}
          <p
            className="transition-opacity duration-400 delay-150"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(10px, 1.5vw, 12px)",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "rgba(201,169,110,0.7)",
              opacity: visible ? 1 : 0,
            }}
          >
            — {review.name}
          </p>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 transition-all duration-200 hover:scale-110"
          style={{
            color: "#C9A96E",
            opacity: 0.75,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 transition-all duration-200 hover:scale-110"
          style={{
            color: "#C9A96E",
            opacity: 0.75,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Review ${i + 1}`}
            className="rounded-full border-none cursor-pointer transition-all duration-300"
            style={{
              width: i === currentIndex ? "9px" : "6px",
              height: i === currentIndex ? "9px" : "6px",
              background:
                i === currentIndex ? "#C9A96E" : "rgba(255,255,255,0.2)",
              transform: i === currentIndex ? "scale(1)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
