import { ContactHero } from "@/components/contact/contact-hero";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { ContactFaqSection } from "@/components/contact/contact-faq-section";
import { ContactFeaturesBanner } from "@/components/contact/contact-features-banner";

export const metadata = {
  title: "Contact Us - Simba & Loki",
  description: "Get in touch with the Simba & Loki team. We're here to help.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />
      <ContactFormSection />
      <ContactFaqSection />
      <ContactFeaturesBanner />
    </div>
  );
}
