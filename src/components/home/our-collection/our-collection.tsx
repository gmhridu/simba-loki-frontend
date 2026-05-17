import { ProductCard } from "@/components/common/product-card";
import { Title } from "@/components/common/title";
import { PRODUCTS } from "@/constants/products";

export function OurCollection() {
  return (
    <div className="py-8">
      <Title
        header="Our Collection"
        title="Designer Cat Beds"
        description="Every bed is thoughtfully designed to elevate your cat's comfort while complementing your home."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14 container mx-auto mt-8 p-2 sm:p-0">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={`£${product.price.toFixed(2)}`}
            description={product.description}
            colors={product.colors}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
}
