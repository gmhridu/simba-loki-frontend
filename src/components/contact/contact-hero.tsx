import Image from "next/image";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export function ContactHero() {
  return (
    <section className="bg-background text-foreground pt-16 lg:pt-32 lg:pb-0 mt-20 md:mt-0 px-6 md:px-0">
      <div className="grid lg:grid-cols-[40%_60%] min-h-[800px] gap-10 overflow-hidden">
        {/* Left Content */}
        <div className="space-y-10  md:ml-16 lg:ml-32">
          <div className="space-y-4 pt-2">
            <h3 className="eyebrow">GET IN TOUCH</h3>
            <h1 className="hero-title font-heading uppercase text-[clamp(2.5rem,5vw,5rem)] leading-none">
              WE&apos;RE HERE
              <br />
              TO HELP
            </h1>
            <div className="divider w-20 mx-0 h-[1px] bg-gold"></div>
            <p className="body-copy max-w-md pt-2">
              Have a question about our cat trees or need help with your order?
              We&apos;d love to hear from you. Our friendly team is here to
              help.
            </p>
          </div>

          <div className="space-y-8 pt-4">
            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-heading text-sm tracking-widest text-gold uppercase mb-1">
                  EMAIL US
                </h4>
                <p className="text-sm text-foreground">
                  hello@simbaandloki.com
                </p>
                <p className="text-sm text-muted-foreground">
                  We aim to reply within 24 hours
                </p>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-heading text-sm tracking-widest text-gold uppercase mb-1">
                  CALL US
                </h4>
                <p className="text-sm text-foreground">+44 20 3823 1987</p>
                <p className="text-sm text-muted-foreground">
                  Mon - Fri, 9am - 5pm GMT
                </p>
              </div>
            </div>

            {/* Live Chat */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                <MessageCircle
                  className="w-5 h-5 text-gold"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h4 className="font-heading text-sm tracking-widest text-gold uppercase mb-1">
                  LIVE CHAT
                </h4>
                <p className="text-sm text-foreground">
                  Chat with us on our website
                </p>
                <p className="text-sm text-muted-foreground">
                  Mon - Fri, 9am - 5pm GMT
                </p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-heading text-sm tracking-widest text-gold uppercase mb-1">
                  VISIT US
                </h4>
                <p className="text-sm text-foreground">Simba & Loki HQ</p>
                <p className="text-sm text-muted-foreground">
                  71-75 Shelton Street, London, WC2H 9JQ, UK
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[800px] lg:h-auto w-full">
          <Image
            fill
            priority
            src="/images/collections/charcoal-grey.png"
            alt="Charcoal Grey Cat Tree"
            // className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
