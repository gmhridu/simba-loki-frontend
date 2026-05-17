export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  image: string;
  colors: string[];
  slug: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "midnight-black",
    name: "MIDNIGHT BLACK",
    collection: "THE CROWN COLLECTION",
    price: 899.00,
    rating: 5.0,
    reviews: 128,
    description: "Floor-to-ceiling luxury for cats who deserve the best. A statement piece that blends luxury design with unmatched comfort.",
    features: [
      "Adjustable height: 240 - 260cm",
      "Ultra plush premium fabric",
      "Extra large hammock baskets",
      "Thick sisal scratching posts",
      "Spacious luxury condo",
      "Ceiling tension mount for maximum stability"
    ],
    image: "/images/products/midnight-black-hero.png",
    colors: ["#1A1A1A"],
    slug: "/products/midnight-black"
  },
  {
    id: "orbit-lounger",
    name: "THE ORBIT LOUNGER",
    collection: "SIGNATURE SERIES",
    price: 249.00,
    rating: 4.9,
    reviews: 84,
    description: "Elevated design meets deep relaxation for the ultimate lounge. Designed for the modern home.",
    features: [
      "Minimalist circular design",
      "Breathable mesh fabric",
      "Sleek walnut base",
      "Machine washable cushion"
    ],
    image: "/images/products/product-1.png",
    colors: ["#F5F0E8", "#C4A484", "#1A1A1A"],
    slug: "/products/orbit-lounger"
  },
  {
    id: "monarch-nest",
    name: "THE MONARCH NEST",
    collection: "THE CROWN COLLECTION",
    price: 279.00,
    rating: 4.8,
    reviews: 62,
    description: "A private retreat for cats who love to hide in luxury. Hand-woven sisal with velvet interior.",
    features: [
      "Hand-woven outer shell",
      "High-density memory foam",
      "Anti-skid velvet bottom",
      "Interchangeable covers"
    ],
    image: "/images/products/product-2.png",
    colors: ["#F5F0E8", "#2F3F2F"],
    slug: "/products/monarch-nest"
  },
  {
    id: "halo-bed",
    name: "THE HALO BED",
    collection: "MODERNIST LINE",
    price: 229.00,
    rating: 5.0,
    reviews: 45,
    description: "A modern statement piece with curved lines and cloud-like comfort.",
    features: [
      "Floating aesthetic",
      "Eco-friendly bamboo frame",
      "Orthopedic support",
      "Space-saving design"
    ],
    image: "/images/products/product-3.png",
    colors: ["#F5F0E8", "#C4A484", "#1A1A1A"],
    slug: "/products/halo-bed"
  }
];
