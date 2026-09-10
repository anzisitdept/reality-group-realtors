import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, MapPin, Check, Building, Home, Users, Key } from "lucide-react";
import { getCommunityBySlug } from "@/data/communities";
import { getPropertiesByCommunity, type Property } from "@/data/properties";
import PropertyCard from "@/components/properties/PropertyCard";
import LeadForm from "@/components/forms/LeadForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCommunityBySlug(slug);
  if (!c) return { title: "Community Not Found" };
  return {
    title: `${c.name} Real Estate & Homes for Sale | Global Group Realty`,
    description: `Explore ${c.name} real estate. ${c.tagline}. Browse homes for sale, rentals, market insights, and lifestyle information for ${c.name}, South Florida.`,
    alternates: { canonical: `/communities/${c.slug}` },
  };
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) notFound();

  const listings = getPropertiesByCommunity(community.name);
  const forSale = listings.filter((p) => p.status === "For Sale");
  const forRent = listings.filter((p) => p.status === "For Rent");

  // We'll display all properties and a few extras from other communities as "more in area"
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="container-x py-5 border-b border-[var(--color-border)]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
          <Link href="/" className="hover:text-[var(--color-charcoal)]">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link href="/communities" className="hover:text-[var(--color-charcoal)]">Communities</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-[var(--color-charcoal)]">{community.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image src={community.image} alt={`${community.name} real estate`} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="container-x relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[var(--color-bronze)] text-xs tracking-[0.3em] uppercase mb-5">
              <MapPin size={14} strokeWidth={1.5} />
              South Florida
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-5 leading-tight">
              {community.name}
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              {community.tagline}. {community.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#listings" className="inline-flex items-center gap-2 bg-white text-[var(--color-charcoal)] px-7 py-3.5 text-xs tracking-[0.15em] uppercase font-medium border border-white hover:bg-[var(--color-warm-white)] transition-colors">
                {forSale.length > 0 ? "View Listings" : "Explore Market"}
              </a>
              <a href="#contact" className="btn-outline-light">
                Talk to a Local Agent
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-warm-white)]">
        <div className="container-x py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat label="Market" value={community.shortName} />
          {community.keyStats.medianHomePrice && <Stat label="Median Home Price" value={community.keyStats.medianHomePrice} />}
          {community.keyStats.medianRent && <Stat label="Median Rent" value={community.keyStats.medianRent} />}
          {community.keyStats.avgDaysOnMarket && <Stat label="Avg Days on Market" value={community.keyStats.avgDaysOnMarket} />}
          {!community.keyStats.medianHomePrice && <Stat label="Local Specialists" value="Available" />}
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 max-w-2xl">
            <div className="section-kicker">About {community.name}</div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Community overview.</h2>
            <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed">
              <p>{community.overview}</p>
              <p>{community.marketOverview}</p>
            </div>
          </div>
          <aside className="border border-[var(--color-border)] p-6 md:p-8 bg-[var(--color-soft-gray)] self-start">
            <h3 className="font-serif text-xl mb-4">Property Types</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              {community.propertyTypes.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Check size={14} strokeWidth={1.75} className="text-[var(--color-bronze)] mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Lifestyle & Attractions */}
      <section className="bg-[var(--color-soft-gray)] py-16 md:py-20">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="section-kicker">Lifestyle</div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">What it's like living in {community.name}.</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{community.lifestyle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-10">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <Building size={14} strokeWidth={1.5} /> Local Highlights
              </h3>
              <ul className="space-y-3">
                {community.attractions.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-[var(--color-text-secondary)] text-sm leading-relaxed pb-3 border-b border-[var(--color-border)] last:border-0">
                    <span className="text-[var(--color-bronze)] mt-0.5">—</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <Home size={14} strokeWidth={1.5} /> Working With Us
              </h3>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                <li className="pb-3 border-b border-[var(--color-border)] flex items-start gap-2">
                  <Check size={14} strokeWidth={1.75} className="text-[var(--color-bronze)] mt-0.5 shrink-0" />
                  <span>Hyper-local market expertise and comparable sales analysis</span>
                </li>
                <li className="pb-3 border-b border-[var(--color-border)] flex items-start gap-2">
                  <Check size={14} strokeWidth={1.75} className="text-[var(--color-bronze)] mt-0.5 shrink-0" />
                  <span>Access to off-market and coming-soon opportunities</span>
                </li>
                <li className="pb-3 border-b border-[var(--color-border)] flex items-start gap-2">
                  <Check size={14} strokeWidth={1.75} className="text-[var(--color-bronze)] mt-0.5 shrink-0" />
                  <span>Building-specific due diligence for condos and HOAs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} strokeWidth={1.75} className="text-[var(--color-bronze)] mt-0.5 shrink-0" />
                  <span>Trusted referrals to local lenders, attorneys, inspectors, and contractors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="py-16 md:py-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="section-kicker">Active Listings</div>
              <h2 className="text-3xl md:text-4xl font-serif">
                {community.name} homes for sale & rent.
              </h2>
            </div>
            <Link
              href={`/properties?location=${encodeURIComponent(community.name)}`}
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline self-start"
            >
              View All <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          {listings.length === 0 ? (
            <div className="border border-dashed border-[var(--color-border)] p-12 text-center">
              <Key size={28} strokeWidth={1.25} className="mx-auto text-[var(--color-text-muted)] mb-4" />
              <h3 className="font-serif text-xl mb-2">No active listings in {community.name} right now</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
                Our inventory changes regularly. Contact our {community.name} specialist to learn
                about upcoming listings or to schedule a tailored tour.
              </p>
              <a href="#contact" className="btn-secondary inline-flex">
                Contact a Local Agent
              </a>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {listings.map((p: Property) => (
                <PropertyCard key={p.id} property={p} />
              ))}
              {forSale.length + forRent.length < 3 &&
                Array.from({ length: 3 - listings.length }).map((_, i) => (
                  <div key={i} className="hidden lg:block" />
                ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      {community.faq.length > 0 && (
        <section className="bg-[var(--color-soft-gray)] py-16 md:py-20">
          <div className="container-x max-w-3xl">
            <div className="section-kicker">Frequently Asked</div>
            <h2 className="text-3xl md:text-4xl font-serif mb-10">Questions about {community.name}.</h2>
            <div className="space-y-8">
              {community.faq.map((f) => (
                <div key={f.question} className="border-b border-[var(--color-border)] pb-8">
                  <h3 className="font-serif text-xl mb-3">{f.question}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="section-kicker">Local Expertise</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Interested in {community.name} real estate?
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-lg">
              Our team works with buyers, sellers, and investors across {community.name}. Get in
              touch for neighborhood insights, current market conditions, or to start your search.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-[var(--color-stone)] flex items-center justify-center text-[var(--color-charcoal)] font-serif text-lg">GR</div>
              <div>
                <div className="text-sm font-medium">Global Group Realty</div>
                <div className="text-xs text-[var(--color-text-secondary)]">Specialists in {community.name}</div>
              </div>
            </div>
            <Link href="/communities" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline">
              Explore Other Communities <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="border border-[var(--color-border)] p-6 md:p-10 bg-[var(--color-warm-white)]">
            <LeadForm
              leadType="buyer"
              location={community.name}
              title={`Talk to a ${community.name} specialist`}
              submitLabel="Get in Touch"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-1">{label}</div>
      <div className="font-serif text-xl md:text-2xl text-[var(--color-charcoal)]">{value}</div>
    </div>
  );
}
