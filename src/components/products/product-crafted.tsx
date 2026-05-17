import Image from "next/image";
import { Button } from "@/components/ui/button";

const detailCards = [
  {
    title: "EXTRA LARGE HAMMOCKS",
    description: "Deep and spacious for maximum comfort.",
    image: "/images/products/midnight-black-hammock.png",
  },
  {
    title: "LUXURY CONDO",
    description: "A private retreat for rest, security and relaxation.",
    image: "/images/products/midnight-black-condo.png",
  },
  {
    title: "PREMIUM SISAL POSTS",
    description: "Extra thick and durable for natural scratching.",
    image: "/images/products/midnight-black-hero.png",
  },
  {
    title: "ULTRA PLUSH FABRIC",
    description: "Exceptionally soft, durable and easy to clean.",
    image: "/images/products/midnight-black-hero.png",
  },
];

export function ProductCrafted() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="px-6 sm:px-12 lg:px-18 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left: Text Content */}
          <div className="lg:w-[32%] flex flex-col justify-start">
            <h2 className="text-foreground text-3xl md:text-[42px] font-heading mb-8 leading-[1.2] tracking-wide uppercase">
              THOUGHTFULLY DESIGNED.
              <br />
              CRAFTED TO PERFECTION.
            </h2>
            <p className="text-muted-foreground text-[16px] leading-[1.8] mb-12 max-w-[440px]">
              Every detail of the Charcoal Grey cat tree has been carefully
              considered to provide the ultimate experience for your cat while
              complementing your home.
            </p>
            <Button
              variant="outline"
              className="w-fit border-2 border-primary text-primary hover:bg-primary/10 rounded-none h-auto py-5 px-10 tracking-[0.25em] text-[11px] uppercase font-bold transition-all duration-300"
            >
              EXPLORE THE COLLECTION
            </Button>
          </div>

          {/* Right: Feature Cards */}
          <div className="lg:w-[68%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {detailCards.map((card, i) => (
                <div key={i} className="group flex flex-col">
                  <div className="relative aspect-[10/13] mb-6 overflow-hidden border border-primary/10 group-hover:border-primary/40 transition-all duration-500">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-primary font-heading text-[16px] tracking-[0.12em] mb-2 font-bold uppercase transition-colors group-hover:text-soft-gold">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-[14px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
