import Image from "next/image";
import Link from "next/link";

const materials = [
  {
    id: "1",
    img: "/images/materials/fabrics.png",
    title: "ULTRA PLUSH FABRICS",
    desc: "Incredibly soft, durable and gentle on paws.",
  },
  {
    id: "2",
    img: "/images/materials/sistal.png",
    title: "NATURAL SISAL",
    desc: "Thick, tightly wound for the perfect scratch.",
  },
  {
    id: "3",
    img: "/images/materials/solid-wood.png",
    title: "SOLID WOOD STRUCTURE",
    desc: "Strong, stable and built to last.",
  },
  {
    id: "4",
    img: "/images/materials/luxury.png",
    title: "LUXURY IN EVERY DETAIL",
    desc: "Thoughtful touches that make every piece exceptional.",
  },
];

export function MaterialsSection() {
  return (
    <section className="bg-ivory py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(380px,420px)_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="max-w-md lg:max-w-lg">
            <p className="text-primary tracking-[4px] text-xs font-medium uppercase mb-4">
              EXCEPTIONAL CRAFTSMANSHIP
            </p>

            <h2 className="text-[2.75rem] lg:text-5xl leading-[1.1] font-medium uppercase text-black">
              Beauty is in <br />
              <span className="border-b-2 border-primary pb-1">The</span>{" "}
              Details
            </h2>

            <p className="mt-6 text-neutral-600 leading-relaxed text-[15px] lg:text-base">
              From plush, ultra-soft fabrics to solid wood and natural sisal,
              every element is chosen with purpose and precision. Because your
              cat deserves the best — and so does your home.
            </p>

            <Link
              href="/our-story"
              className="mt-8 inline-block border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-xs tracking-[3px] font-medium uppercase px-8 py-3.5"
            >
              OUR MATERIALS
            </Link>
          </div>

          {/* Right Content - 4 Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pt-4 cursor-pointer">
            {materials.map((item) => (
              <div key={item.id} className="flex flex-col group">
                {/* Image */}
                <div className="relative w-full aspect-[1.05/1] overflow-hidden rounded-sm mb-5 bg-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 260px"
                  />
                </div>

                {/* Text */}
                <div className="space-y-2.5 px-1">
                  <h3 className="uppercase text-sm tracking-[2px] font-semibold text-black text-nowrap">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
