import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Key, Home, Handshake } from "lucide-react";
import PropertyCard from "@/components/properties/PropertyCard";
import LeadForm from "@/components/forms/LeadForm";
import { properties } from "@/data/properties";

export const metadata = {
  title: "Rent in South Florida",
  description:
    "Find long-term rentals in Miami, Brickell, Coral Gables, and South Florida. Global Group Realty represents tenants and landlords with a curated selection of rental properties.",
  alternates: { canonical: "/rent" },
};

export default function RentPage() {
  const rentals = properties.filter((p) => p.status === "For Rent");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/property-4.jpg" alt="Miami Beach Art Deco condominium" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
        </div>
        <div className="container-x relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="text-[var(--color-bronze)] text-xs tracking-[0.3em] uppercase mb-6">Long-Term Rentals</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-5 leading-tight">
              Find a place that fits your life.
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Explore long-term rental properties across South Florida, from Brickell high-rises to
              Miami Beach condos and family homes in Doral and Pinecrest.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#rentals" className="inline-flex items-center gap-2 bg-white text-[var(--color-charcoal)] px-7 py-3.5 text-xs tracking-[0.15em] uppercase font-medium border border-white hover:bg-[var(--color-warm-white)] transition-colors">
                <Search size={15} strokeWidth={1.5} />
                Search Rentals
              </Link>
              <a href="#rental-inquiry" className="btn-outline-light">Rental Inquiry</a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick search / path */}
      <section className="bg-[var(--color-soft-gray)] border-b border-[var(--color-border)]">
        <div className="container-x py-10 md:py-14">
          <div className="max-w-2xl mb-6">
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Browse available rentals.</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              We maintain a curated selection of long-term rentals. If you don't see what you're
              looking for, our rental team can source options for you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["All Rentals", "Miami", "Miami Beach", "Brickell", "Coral Gables", "Doral", "Sunny Isles"].map((t, i) => (
              <button
                key={t}
                className={`px-4 py-2 text-xs tracking-[0.1em] uppercase font-medium border transition-colors ${
                  i === 0
                    ? "bg-[var(--color-charcoal)] text-white border-[var(--color-charcoal)]"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section id="rentals" className="py-16 md:py-20">
        <div className="container-x">
          {rentals.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-[var(--color-border)]">
              <Key size={32} strokeWidth={1.25} className="mx-auto text-[var(--color-text-muted)] mb-4" />
              <h3 className="font-serif text-2xl mb-2">No rental listings currently active</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
                Our inventory changes weekly. Send us your criteria and we'll let you know when
                matching properties become available.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {rentals.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How we help */}
      <section className="bg-[var(--color-soft-gray)] py-16 md:py-20">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="section-kicker">Tenant & Landlord Services</div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">More than a listings search.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "For Tenants",
                body: "We help you find the right long-term rental, navigate applications, negotiate lease terms, and make your move smoother.",
              },
              {
                icon: Key,
                title: "For Landlords",
                body: "We lease and manage South Florida rental properties with careful tenant screening, market pricing, and responsive service.",
              },
              {
                icon: Handshake,
                title: "Lease Advisory",
                body: "We review lease terms, explain your obligations, and make sure you understand the agreement before you sign.",
              },
            ].map((s) => (
              <div key={s.title}>
                <div className="w-10 h-10 border border-[var(--color-charcoal)]/30 flex items-center justify-center mb-4">
                  <s.icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="rental-inquiry" className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="section-kicker">Rental Inquiry</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">Tell us what you're looking for.</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-lg">
              Share your budget, preferred areas, move date, and must-haves. Our rental team will
              send you curated options and schedule tours that fit your schedule.
            </p>
            <Link href="/properties?status=For+Rent" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline">
              Browse All Listings <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="border border-[var(--color-border)] p-6 md:p-10 bg-[var(--color-warm-white)]">
            <LeadForm
              leadType="rental"
              title="Rental Search"
              submitLabel="Send Inquiry"
            />
          </div>
        </div>
      </section>
    </>
  );
}
