import Image from "next/image";
import { Heart, MapPin, Users } from "lucide-react";

export function ContactFaqSection() {
  return (
    <section className="bg-background text-foreground border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px]">
        
        {/* Left Image */}
        <div className="lg:col-span-4 relative h-[400px] lg:h-auto">
          <Image 
            src="/images/products/product-3.png" 
            alt="Cat resting on cat tree" 
            fill 
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Middle Content */}
        <div className="lg:col-span-5 p-10 md:p-16 flex flex-col justify-center bg-background">
          <div className="max-w-md">
            <h3 className="eyebrow text-gold mb-4">STILL HAVE QUESTIONS?</h3>
            <h2 className="section-title font-heading uppercase text-4xl leading-tight mb-6">
              WE&apos;RE HAPPY TO HELP
            </h2>
            <div className="divider w-1/6 mx-0 h-[1px] bg-gold mb-4"></div>
            <p className="body-copy text-muted-foreground mb-10">
              Our team is passionate about cats and committed to helping you find the perfect cat tree for your home.
            </p>
            <button className="secondary-button text-foreground border-border hover:bg-muted px-8 py-4">
              VIEW FAQS
            </button>
          </div>
        </div>

        {/* Right Features */}
        <div className="lg:col-span-3 p-10 md:p-12 flex flex-col justify-center space-y-10 bg-muted">
          
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 text-foreground">
              <Heart className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-heading text-xs tracking-widest uppercase mb-1">WE LOVE CATS</h4>
              <p className="text-sm text-muted-foreground">Everything we do is inspired by our love for cats.</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 text-foreground">
              <MapPin className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-heading text-xs tracking-widest uppercase mb-1">QUALITY YOU CAN TRUST</h4>
              <p className="text-sm text-muted-foreground">Premium materials. Expert craftsmanship. Built to last.</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 text-foreground">
              <Users className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-heading text-xs tracking-widest uppercase mb-1">HERE FOR YOU</h4>
              <p className="text-sm text-muted-foreground">From pre-purchase advice to aftercare, we&apos;ve got you covered.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
