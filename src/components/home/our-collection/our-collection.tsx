import { ProductCard } from "@/components/common/product-card";
import { Title } from "@/components/common/title";

const products = [
  {
    image: "/images/products/product-1.png",
    name: "THE ORBIT LOUNGER",
    price: "£249.00",
    description:
      "Elevated design meets deep relaxation for the ultimate lounge.",
    colors: ["#F5F0E8", "#C4A484", "#2F3F2F", "#1A1A1A"],
  },
  {
    image: "/images/products/product-2.png",
    name: "THE MONARCH NEST",
    price: "£279.00",
    description: "A private retreat for cats who love to hide in luxury.",
    colors: ["#F5F0E8", "#C4A484", "#2F3F2F", "#1A1A1A"],
  },
  {
    image: "/images/products/product-3.png",
    name: "THE HALO BED",
    price: "£229.00",
    description:
      "A modern statement piece with curved lines and cloud-like comfort.",
    colors: ["#F5F0E8", "#C4A484", "#2F3F2F", "#1A1A1A"],
  },
];

export function OurCollection() {
  return (
    <div className="py-8">
      <Title
        header="Our Collection"
        title="Designer Cat Beds"
        description="Every bed is thoughtfully designed to elevate your cat's comfort while complementing your home."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14 container mx-auto mt-8 p-2 sm:p-0">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            colors={product.colors}
          />
        ))}
      </div>
    </div>
  );
}
