import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bed,
  Bath,
  Ruler,
  MapPin,
  Calendar,
  Home,
  Share2,
  Heart,
  ChevronRight,
  Phone,
  ArrowLeft,
  Check,
} from "lucide-react";
import { getPropertyBySlug, getPropertiesByCommunity, formatPrice } from "@/data/properties";
import LeadForm from "@/components/forms/LeadForm";
import PropertyCard from "@/components/properties/PropertyCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };

  const title = `${property.title} | ${property.city}, ${property.state} | Global Group Realty`;
  const description = `${property.status} in ${property.city}. ${property.beds} beds, ${property.baths} baths, ${property.sqft.toLocaleString()} Sq Ft. ${property.description.slice(0, 120)}...`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [property.image],
    },
    alternates: { canonical: `/properties/${property.slug}` },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const similar = getPropertiesByCommunity(property.community).filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="container-x py-5 border-b border-[var(--color-border)]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
          <Link href="/" className="hover:text-[var(--color-charcoal)]">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link href="/properties" className="hover:text-[var(--color-charcoal)]">Properties</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-[var(--color-charcoal)]">{property.city}</span>
        </nav>
      </div>

      {/* Top: Gallery + sticky CTA on desktop */}
      <section className="container-x py-8 md:py-12">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] mb-6"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to Properties
        </Link>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
          <div>
            {/* Main gallery */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-soft-gray)] mb-3">
              <Image
                src={property.image}
                alt={`${property.title} at ${property.address}, ${property.city}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={85}
                className="object-cover"
              />
              <div className="absolute top-5 left-5 bg-[var(--color-warm-white)] text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-charcoal)] px-3 py-1.5">
                {property.status}
              </div>
            </div>

            {/* Thumbnail strip (using same image placeholders) */}
            <div className="grid grid-cols-4 gap-3">
              {[property.image, property.image, property.image, property.image].map((src, i) => (
                <div key={i} className={`relative aspect-square overflow-hidden bg-[var(--color-soft-gray)] ${i === 0 ? "ring-1 ring-[var(--color-charcoal)]" : "opacity-60"}`}>
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Key facts */}
            <div className="py-8 border-b border-[var(--color-border)]">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-charcoal)] mb-2">
                    {formatPrice(property.price, property.status)}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-serif text-[var(--color-charcoal)] mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-start gap-1.5 text-[var(--color-text-secondary)]">
                    <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                    <span>
                      {property.address}, {property.city}, {property.state} {property.zip}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] transition-colors" aria-label="Save property">
                    <Heart size={17} strokeWidth={1.5} />
                  </button>
                  <button className="p-2.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] transition-colors" aria-label="Share property">
                    <Share2 size={17} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mt-6">
                <Fact icon={Bed} label="Bedrooms" value={`${property.beds}`} />
                <Fact icon={Bath} label="Bathrooms" value={`${property.baths}${property.halfBaths ? ` + ${property.halfBaths}` : ""}`} />
                <Fact icon={Ruler} label="Square Feet" value={property.sqft.toLocaleString()} />
                <Fact icon={Home} label="Property Type" value={property.type} />
              </div>
            </div>

            {/* Overview */}
            <div className="py-10 border-b border-[var(--color-border)]">
              <h2 className="font-serif text-2xl mb-4">Property Overview</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="py-10 border-b border-[var(--color-border)]">
              <h2 className="font-serif text-2xl mb-6">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
                {property.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <Check size={15} strokeWidth={1.75} className="mt-0.5 text-[var(--color-bronze)] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="py-10 border-b border-[var(--color-border)]">
              <h2 className="font-serif text-2xl mb-6">Property Details</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm">
                <Detail label="Status" value={property.status} />
                <Detail label="Property Type" value={property.type} />
                <Detail label="City" value={property.city} />
                <Detail label="Zip Code" value={property.zip} />
                {property.yearBuilt && <Detail label="Year Built" value={`${property.yearBuilt}`} />}
                {property.lotSize && <Detail label="Lot Size" value={`${property.lotSize.toLocaleString()} Sq Ft`} />}
                {property.pricePerSqFt && <Detail label="Price per Sq Ft" value={`$${property.pricePerSqFt.toLocaleString()}`} />}
                {property.halfBaths && <Detail label="Half Baths" value={`${property.halfBaths}`} />}
              </dl>
            </div>

            {/* Location */}
            <div className="py-10 border-b border-[var(--color-border)]">
              <h2 className="font-serif text-2xl mb-4">Location</h2>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Located in {property.community}, one of South Florida's most desirable
                neighborhoods.
              </p>
              <div className="aspect-[16/9] w-full bg-[var(--color-soft-gray)] border border-[var(--color-border)] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-stone)] to-[var(--color-stone-dark)]" />
                <div className="relative text-center z-10">
                  <MapPin size={28} strokeWidth={1.25} className="mx-auto text-[var(--color-charcoal)] mb-2" />
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
                    Map Placeholder
                  </p>
                  <p className="text-sm text-[var(--color-charcoal)] mt-1">{property.address}, {property.city}</p>
                </div>
              </div>
            </div>

            {/* Schedule tour inline on mobile */}
            <div id="contact-form" className="lg:hidden py-10">
              <LeadForm
                leadType="property"
                property={`${property.address}, ${property.city}`}
                title="Request Information"
                subtitle={`About ${property.title}`}
                submitLabel="Request a Private Tour"
              />
            </div>

            {/* Similar properties */}
            {similar.length > 0 && (
              <div className="py-10">
                <h2 className="font-serif text-2xl mb-6">Similar Properties in {property.community}</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {similar.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky inquiry panel (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="border border-[var(--color-border)] bg-[var(--color-warm-white)] p-7">
                <LeadForm
                  leadType="property"
                  property={`${property.address}, ${property.city}`}
                  title="Schedule a Tour"
                  subtitle={`${property.status} in ${property.city}`}
                  submitLabel="Request a Private Tour"
                  compact
                />
                <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                  <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">
                    Or call us directly
                  </p>
                  <a
                    href="tel:+13055550123"
                    className="inline-flex items-center gap-2 text-[var(--color-charcoal)] font-medium"
                  >
                    <Phone size={16} strokeWidth={1.5} />
                    (305) 555-0123
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-warm-white)] border-t border-[var(--color-border)] p-3 grid grid-cols-2 gap-2">
        <a href="tel:+13055550123" className="btn-secondary py-3">
          <Phone size={15} strokeWidth={1.5} />
          Call
        </a>
        <Link href="#contact-form" className="btn-primary py-3">
          Request Tour
        </Link>
      </div>
      <div className="lg:hidden h-[70px]" />
    </div>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[var(--color-warm-white)] p-5">
      <Icon size={18} strokeWidth={1.5} className="text-[var(--color-bronze)] mb-2" />
      <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-1">{label}</div>
      <div className="font-sans text-base font-medium text-[var(--color-charcoal)]">{value}</div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-1">
        {label}
      </dt>
      <dd className="text-[var(--color-charcoal)] font-medium">{value}</dd>
    </div>
  );
}
