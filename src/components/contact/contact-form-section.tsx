"use client";

import Image from "next/image";
import { Lock, ChevronRight, Package, RefreshCcw, ShieldCheck, HelpCircle, PawPrint, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactFormSection() {
  return (
    <section className="bg-card text-card-foreground py-16 lg:py-24 px-6 md:px-12 lg:px-32 border-t border-border">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Form Area */}
        <div className="space-y-8">
          <h3 className="eyebrow">SEND US A MESSAGE</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Your Name" 
                className="bg-transparent border-border focus-visible:ring-gold focus-visible:border-gold h-12 rounded-none text-foreground placeholder:text-muted-foreground" 
              />
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-border focus-visible:ring-gold focus-visible:border-gold h-12 rounded-none text-foreground placeholder:text-muted-foreground" 
              />
            </div>
            
            <Input 
              placeholder="Order Number (optional)" 
              className="bg-transparent border-border focus-visible:ring-gold focus-visible:border-gold h-12 rounded-none text-foreground placeholder:text-muted-foreground" 
            />
            
            <Select>
              <SelectTrigger className="bg-transparent border-border focus:ring-gold focus:border-gold h-12 rounded-none text-foreground">
                <SelectValue placeholder="How can we help?" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border text-foreground">
                <SelectItem value="order">Order inquiry</SelectItem>
                <SelectItem value="product">Product question</SelectItem>
                <SelectItem value="returns">Returns & Exchanges</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Textarea 
              placeholder="Your Message" 
              className="bg-transparent border-border focus-visible:ring-gold focus-visible:border-gold min-h-[150px] rounded-none text-foreground placeholder:text-muted-foreground resize-none" 
            />

            <button type="submit" className="primary-button w-full h-14 text-sm font-bold tracking-widest uppercase">
              Send Message
            </button>
          </form>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <Lock className="w-4 h-4 text-gold shrink-0" />
            <p>
              Your information is safe with us. <br className="md:hidden" />
              Read our <a href="#" className="text-gold hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>

        {/* Right Links Area */}
        <div className="space-y-8">
          <h3 className="eyebrow">OTHER WAYS WE CAN HELP</h3>
          
          <div className="space-y-0">
            {/* Link Items */}
            <LinkItem 
              icon={<Package className="w-6 h-6 text-gold" strokeWidth={1.5} />}
              title="ORDER & SHIPPING"
              description="Track your order, shipping info and delivery times."
            />
            <LinkItem 
              icon={<RefreshCcw className="w-6 h-6 text-gold" strokeWidth={1.5} />}
              title="RETURNS & EXCHANGES"
              description="Learn about our 30-day returns policy."
            />
            <LinkItem 
              icon={<ShieldCheck className="w-6 h-6 text-gold" strokeWidth={1.5} />}
              title="WARRANTY INFORMATION"
              description="View details about our 2-year warranty."
            />
            <LinkItem 
              icon={<HelpCircle className="w-6 h-6 text-gold" strokeWidth={1.5} />}
              title="FAQS"
              description="Find answers to common questions."
            />
            <LinkItem 
              icon={<PawPrint className="w-6 h-6 text-gold" strokeWidth={1.5} />}
              title="CUSTOMER CARE"
              description="General support and product enquiries."
              hideBorder
            />
          </div>

          {/* Prefer Email Card */}
          <div className="mt-8 border border-border rounded-xl overflow-hidden flex flex-col sm:flex-row items-stretch group hover:border-gold/30 transition-colors bg-background">
            <div className="p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-heading text-sm tracking-widest text-gold uppercase">PREFER EMAIL?</h4>
              </div>
              <p className="text-sm text-foreground mb-1">Drop us an email anytime at</p>
              <p className="text-sm text-foreground font-medium mb-2">hello@simbaandloki.com</p>
              <p className="text-xs text-muted-foreground">We&apos;ll get back to you as soon as possible.</p>
            </div>
            <div className="relative w-full sm:w-[40%] min-h-[150px] bg-black">
              <Image 
                src="/images/about/about.png" 
                alt="Cat resting" 
                fill 
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function LinkItem({ icon, title, description, hideBorder }: { icon: React.ReactNode, title: string, description: string, hideBorder?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-5 py-6 group ${!hideBorder ? 'border-b border-border' : ''}`}>
      <div className="w-12 h-12 rounded-xl bg-transparent border border-border flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-heading text-sm tracking-widest text-foreground uppercase mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors shrink-0" strokeWidth={1.5} />
    </a>
  );
}
