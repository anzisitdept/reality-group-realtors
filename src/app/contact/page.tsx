import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import LeadForm from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Contact Global Group Realty",
  description:
    "Contact Global Group Realty for buying, selling, renting, or investing in South Florida real estate. Call, email, or send a message and a member of our team will respond shortly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/miami-community.jpg" alt="Miami skyline" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
        </div>
        <div className="container-x relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="text-[var(--color-bronze)] text-xs tracking-[0.3em] uppercase mb-6">Contact</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-5 leading-tight">
              Let's talk real estate.
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
              Whether you're ready to transact, exploring the market, or have a question about a
              specific property or neighborhood, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-start">
          <div>
            <div className="section-kicker">Get In Touch</div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Contact information.</h2>

            <div className="space-y-6 mb-10">
              <InfoRow icon={Phone} label="Phone" value="(305) 555-0123" href="tel:+13055550123" />
              <InfoRow icon={Mail} label="Email" value="info@globalgrouprealty.com" href="mailto:info@globalgrouprealty.com" />
              <InfoRow icon={MapPin} label="Office" value="Miami, Florida" />
              <InfoRow icon={Clock} label="Business Hours" value="Mon – Fri · 9:00 AM – 6:00 PM ET · Weekends by appointment" />
            </div>

            {/* Map placeholder */}
            <div className="aspect-[16/9] w-full border border-[var(--color-border)] bg-[var(--color-soft-gray)] relative overflow-hidden mb-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-stone)] to-[var(--color-stone-dark)]" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <MapPin size={28} strokeWidth={1.25} className="mx-auto text-[var(--color-charcoal)] mb-2" />
                  <div className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">Google Maps</div>
                  <div className="text-sm text-[var(--color-charcoal)] mt-1">Miami, Florida</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-3">Quick Links</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Search Properties", href: "/properties" },
                  { label: "Buy", href: "/buy" },
                  { label: "Sell", href: "/sell" },
                  { label: "Rent", href: "/rent" },
                  { label: "Communities", href: "/communities" },
                  { label: "Our Team", href: "/team" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-medium border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-[var(--color-border)] p-6 md:p-8 bg-[var(--color-warm-white)] lg:sticky lg:top-28">
            <LeadForm
              title="Send us a message"
              subtitle="We typically respond within one business day."
              submitLabel="Send Message"
              showInterestSelect
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4 pb-6 border-b border-[var(--color-border)] last:border-0">
      <div className="w-10 h-10 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-charcoal)] shrink-0">
        <Icon size={17} strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-1">{label}</div>
        {href ? (
          <a href={href} className="text-[var(--color-charcoal)] hover:text-[var(--color-bronze-dark)] transition-colors text-base">
            {value}
          </a>
        ) : (
          <div className="text-[var(--color-charcoal)] text-base">{value}</div>
        )}
      </div>
    </div>
  );
}
