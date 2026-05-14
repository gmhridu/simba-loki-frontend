import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

export function ReviewsSection() {
  return (
    <div className="border-t-2 border-primary">
      <div className="px-6 lg:px-16 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 lg:gap-16">
          {/* Left - Testimonial Quote */}
          <div className="lg:w-5/16">
            <p className="text-[#D4AF37] text-2xl md:text-3xl leading-tight font-light italic mb-6">
              “Our Bengal absolutely loves his Orbit Lounger. It&apos;s
              beautiful and he sleeps in it every single day.”
            </p>
            <p className="text-gray-400 font-medium">— LUCY, LONDON</p>
          </div>

          {/* Middle - Cat Image */}
          <div className="lg:w-5/16 relative aspect-video sm:aspect-15/5.5 overflow-hidden">
            <Image
              src="/images/luxury-features/luxury-features-image.png"
              alt="Happy Bengal Cat in Orbit Lounger"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right - Rating & Button */}
          <div className="lg:w-5/16 flex flex-col items-start">
            <div className="flex text-[#D4AF37] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-current" />
              ))}
            </div>

            <p className="dark:text-white text-gray-800 text-2xl font-semibold mb-1">
              Rated 4.9/5
            </p>
            <p className="text-foreground/50 mb-8">from 1,200+ happy customers</p>

            <button className="group flex items-center gap-3 border border-primary hover:bg-primary hover:text-black text-primary px-8 py-3.5 rounded-lg transition-all duration-300 uppercase tracking-widest text-sm font-medium">
              SEE ALL REVIEWS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
