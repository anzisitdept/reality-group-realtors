import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, ShieldCheck, Handshake } from "lucide-react";

export const metadata = {
  title: "About Global Group Realty",
  description:
    "Global Group Realty is a South Florida real estate brokerage providing buyer, seller, rental, and investment representation across Miami and the surrounding communities.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/miami-community.jpg" alt="Miami skyline" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
        </div>
        <div className="container-x relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="text-[var(--color-bronze)] text-xs tracking-[0.3em] uppercase mb-6">About</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-5 leading-tight">
              Real estate. Guided by experience.
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
              Global Group Realty is a South Florida real estate brokerage serving buyers, sellers,
              renters, and investors across Miami and the surrounding communities. We focus on
              client outcomes rather than volume for volume's sake.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] bg-[var(--color-stone)] overflow-hidden">
            <Image src="/images/brickell-community.jpg" alt="Brickell Miami towers" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <div className="section-kicker">Our Story</div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Built on local knowledge and client trust.
            </h2>
            <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Global Group Realty operates with one guiding principle: represent our clients'
                interests the way we would want our own interests represented. That means honest
                counsel, data-driven decisions, and disciplined execution from first showing to
                closing day.
              </p>
              <p>
                We work across Miami-Dade and South Florida in the markets we know best: Miami,
                Miami Beach, Brickell, Coral Gables, Doral, Pinecrest, Sunny Isles Beach, Bal
                Harbour, the Venetian Islands, and the ultra-luxury markets of Fisher Island and
                Indian Creek.
              </p>
              <p>
                Our team handles residential purchases and sales, rental placements, investment
                acquisitions, and relocation. We work with first-time buyers, seasoned investors,
                international purchasers, and long-time South Florida residents alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-soft-gray)] py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="section-kicker">What We Stand For</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              The principles behind every transaction.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {[
              {
                icon: Target,
                title: "Local Expertise",
                body: "We focus on South Florida. Every recommendation we make is rooted in firsthand knowledge of neighborhoods, buildings, and market history.",
              },
              {
                icon: ShieldCheck,
                title: "Client-First Representation",
                body: "We don't chase transactions. Our job is to protect your interests, tell you the truth, and help you make the best decision for your goals.",
              },
              {
                icon: Eye,
                title: "Transparency",
                body: "We explain commission, pricing, comparables, HOA finances, property history, and potential risks clearly and without spin.",
              },
              {
                icon: Handshake,
                title: "Long-Term Relationships",
                body: "Most of our business comes from repeat clients and referrals. We're building a business that serves our clients for years—not just one closing.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-[var(--color-warm-white)] p-8 md:p-10">
                <div className="w-11 h-11 border border-[var(--color-charcoal)]/30 flex items-center justify-center mb-5 text-[var(--color-charcoal)]">
                  <v.icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="section-kicker">What We Do</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Services we offer.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: "Residential Buying", body: "Full buyer representation across South Florida, from first homes to luxury waterfront estates." },
              { title: "Residential Selling", body: "Strategic listing services, professional marketing, and strong negotiation for home sellers." },
              { title: "Luxury Real Estate", body: "Discreet, expert handling of high-end homes, condominiums, and island properties." },
              { title: "Rentals", body: "Long-term rental placement for tenants and landlord representation for rental properties." },
              { title: "Investment Properties", body: "Data-backed acquisition and disposition support for investors building cash-flowing portfolios." },
              { title: "Relocation", body: "Comprehensive support for individuals and families relocating to South Florida from out of state or abroad." },
            ].map((s) => (
              <div key={s.title} className="border-t border-[var(--color-border)] pt-6">
                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/contact" className="btn-primary">
              Work With Us
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
