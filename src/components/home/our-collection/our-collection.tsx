import { Title } from "@/components/common/title";
import { COLLECTIONS } from "@/constants/collections";
import { OurCollectionCard } from "@/components/home/our-collection/our-collection-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function OurCollection() {
  return (
    <div className="py-8">
      <Title
        header="Our Collection"
        title="Designed To Complement Your Home"
        description="Five timeless colours. One uncompromising standard of luxury. Discover the perfect statement piece for you and your cat."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:mx-24 my-10 p-2 sm:p-0">
        {COLLECTIONS.map((collection) => (
          <OurCollectionCard
            key={collection.id}
            id={collection.id}
            name={collection.name}
            color={collection.color}
            image={collection.image}
            shopUrl={collection.shopUrl}
          />
        ))}
      </div>

      <Link
        href={"/collections"}
        className="mt-10 flex items-center justify-center"
        prefetch={true}
      >
        <Button
          variant="ghost"
          size="lg"
          className="rounded-sm border border-primary bg-background px-10 py-5 text-primary hover:bg-primary hover:dark:text-primary/80 hover:text-white uppercase tracking-widest"
        >
          View All Collections
        </Button>
      </Link>
    </div>
  );
}
