import { CraftedComfort } from "./crafted-comfort";
import { ReviewsSection } from "./reviews-section";

export function LuxuryFeatures() {
  return (
    <div>
      <div className="border-b border-border">
        <CraftedComfort />
      </div>
      <ReviewsSection />
    </div>
  );
}
