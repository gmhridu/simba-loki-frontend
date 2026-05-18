export interface Collection {
  id: string;
  name: string;
  color?: string;
  image: string;
  shopUrl?: string;
}

export const COLLECTIONS: Collection[] = [
  {
    id: "1",
    name: "Charcoal Grey",
    image: "/images/collections/charcoal-grey.png",
  },
  {
    id: "2",
    name: "Ivory Cream",
    image: "/images/collections/ivory-cream.png",
  },
  {
    id: "3",
    name: "Sand Beige",
    image: "/images/collections/sand-beige.png",
  },
  {
    id: "4",
    name: "Olive Green",
    image: "/images/collections/olive-green.png",
  },
  {
    id: "5",
    name: "Midnight Black",
    image: "/images/collections/midnight-black.png",
  },
];
