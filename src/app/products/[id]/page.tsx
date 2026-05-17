import { Navbar } from "@/components/shared/navbar";
import { ProductHero } from "@/components/products/product-hero";
import { ProductFeatures } from "@/components/products/product-features";
import { ProductCrafted } from "@/components/products/product-crafted";
import { ProductSpecs } from "@/components/products/product-specs";
import { ProductBanner } from "@/components/products/product-banner";
import { PRODUCTS } from "@/constants/products";

const productData = PRODUCTS.find((p) => p.id === "midnight-black")!;

export default function MidnightBlackPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-28">
        {" "}
        {/* Offset for the fixed navbar */}
        <ProductHero product={productData} />
        <ProductFeatures />
        <ProductCrafted />
        <ProductSpecs />
        <ProductBanner />
      </main>
    </div>
  );
}
