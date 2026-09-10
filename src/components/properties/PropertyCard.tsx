import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Ruler, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/data/properties";

interface Props {
  property: Property;
  variant?: "grid" | "list";
}

export default function PropertyCard({ property, variant = "grid" }: Props) {
  if (variant === "list") {
    return (
      <article className="group border border-[var(--color-border)] bg-white hover:border-[var(--color-border-dark)] transition-colors">
        <div className="grid grid-cols-[160px_1fr] sm:grid-cols-[220px_1fr] md:grid-cols-[280px_1fr] gap-0">
          <div className="property-image relative aspect-[4/3] sm:aspect-auto overflow-hidden bg-[var(--color-soft-gray)]">
            <Image
              src={property.image}
              alt={`${property.title} at ${property.address}, ${property.city}`}
              fill
              sizes="(max-width: 640px) 160px, 280px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-[var(--color-warm-white)] text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-charcoal)] px-2 py-1">
              {property.status}
            </div>
          </div>
          <div className="p-5 sm:p-6 flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="text-2xl font-serif font-medium text-[var(--color-charcoal)]">
                {formatPrice(property.price, property.status)}
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-1.5 whitespace-nowrap">
                {property.type}
              </span>
            </div>
            <h3 className="text-base font-sans font-medium text-[var(--color-charcoal)] mb-1">
              {property.title}
            </h3>
            <div className="flex items-start gap-1 text-sm text-[var(--color-text-secondary)] mb-4">
              <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
              <span>
                {property.address}, {property.city}, {property.state} {property.zip}
              </span>
            </div>
            <div className="flex items-center gap-5 text-sm text-[var(--color-text-secondary)] mt-auto pt-4 border-t border-[var(--color-border)]">
              <span className="flex items-center gap-1.5">
                <Bed size={15} strokeWidth={1.5} /> {property.beds} Bd{property.beds !== 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-1.5">
                <Bath size={15} strokeWidth={1.5} /> {property.baths} Ba{property.baths !== 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-1.5">
                <Ruler size={15} strokeWidth={1.5} /> {property.sqft.toLocaleString()} Sq Ft
              </span>
            </div>
            <Link
              href={`/properties/${property.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] font-medium link-underline"
            >
              View Property
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="property-card group bg-white">
      <div className="property-image relative aspect-[4/3] overflow-hidden bg-[var(--color-soft-gray)]">
        <Image
          src={property.image}
          alt={`${property.title} at ${property.address}, ${property.city}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-[var(--color-warm-white)] text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-charcoal)] px-2.5 py-1">
          {property.status}
        </div>
      </div>
      <div className="pt-5 pb-2 px-0.5">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <div className="text-2xl font-serif font-medium text-[var(--color-charcoal)]">
            {formatPrice(property.price, property.status)}
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] whitespace-nowrap">
            {property.type}
          </span>
        </div>
        <h3 className="text-[1.05rem] font-sans font-medium text-[var(--color-charcoal)] mb-1 leading-tight">
          {property.title}
        </h3>
        <div className="flex items-start gap-1 text-sm text-[var(--color-text-secondary)] mb-4">
          <MapPin size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" />
          <span className="truncate">
            {property.address}, {property.city}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] py-4 border-t border-[var(--color-border)]">
          <span className="flex items-center gap-1.5">
            <Bed size={14} strokeWidth={1.5} /> {property.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={14} strokeWidth={1.5} /> {property.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler size={14} strokeWidth={1.5} /> {property.sqft.toLocaleString()}
          </span>
        </div>
        <Link
          href={`/properties/${property.slug}`}
          className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] font-medium link-underline"
        >
          View Property
        </Link>
      </div>
    </article>
  );
}
