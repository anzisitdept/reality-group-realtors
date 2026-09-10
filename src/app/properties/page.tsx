"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid3X3, List, MapPin, SlidersHorizontal, X, ChevronRight, Home as HomeIcon } from "lucide-react";
import { properties } from "@/data/properties";
import type { Property, PropertyStatus, PropertyType } from "@/data/properties";
import { formatPrice } from "@/data/properties";

const propertyTypes: (PropertyType | "Any")[] = [
  "Any",
  "Single Family",
  "Condominium",
  "Townhouse",
  "Villa",
  "Penthouse",
  "Multi-Family",
];

type ViewMode = "grid" | "list";
type SortKey = "newest" | "price-asc" | "price-desc" | "relevant";

export default function PropertiesPage() {
  const [view, setView] = useState<ViewMode>("grid");
  const [status, setStatus] = useState<"All" | "For Sale" | "For Rent">("All");
  const [type, setType] = useState<string>("Any");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [beds, setBeds] = useState<string>("Any");
  const [baths, setBaths] = useState<string>("Any");
  const [location, setLocation] = useState<string>("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo<Property[]>(() => {
    let list = [...properties];
    if (status !== "All") {
      list = list.filter((p) => p.status === status);
    }
    if (type !== "Any") {
      list = list.filter((p) => p.type === type);
    }
    if (minPrice) list = list.filter((p) => p.price >= Number(minPrice));
    if (maxPrice) list = list.filter((p) => p.price <= Number(maxPrice));
    if (beds !== "Any") list = list.filter((p) => p.beds >= Number(beds));
    if (baths !== "Any") list = list.filter((p) => p.baths >= Number(baths));
    if (location) {
      const q = location.toLowerCase();
      list = list.filter(
        (p) =>
          p.city.toLowerCase().includes(q) ||
          p.community.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q) ||
          p.zip.includes(q)
      );
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [status, type, minPrice, maxPrice, beds, baths, location, sort]);

  return (
    <div>
      {/* Hero / Page header */}
      <section className="bg-[var(--color-soft-gray)] border-b border-[var(--color-border)]">
        <div className="container-x py-12 md:py-16">
          <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-4">
            <Link href="/" className="hover:text-[var(--color-charcoal)]">Home</Link>
            <ChevronRight size={12} strokeWidth={1.5} />
            <span className="text-[var(--color-charcoal)]">Properties</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif mb-3">South Florida Property Search</h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl">
            Browse active listings across Miami, Miami Beach, Brickell, Coral Gables, and the
            surrounding communities. Filter by price, type, size, and neighborhood.
          </p>
        </div>
      </section>

      {/* Filter bar (desktop) */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-warm-white)] sticky top-[60px] md:top-[70px] z-30">
        <div className="container-x py-4">
          <div className="hidden md:grid grid-cols-12 gap-3 items-end">
            <div className="col-span-3">
              <label className="form-label mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, neighborhood, ZIP"
                className="form-input"
              />
            </div>
            <div className="col-span-2">
              <label className="form-label mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as typeof status)}
                className="form-input"
              >
                <option>All</option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="form-label mb-1">Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className="form-input">
                {propertyTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label className="form-label mb-1">Beds</label>
              <select value={beds} onChange={(e) => setBeds(e.target.value)} className="form-input">
                {["Any", "1", "2", "3", "4", "5"].map((b) => (
                  <option key={b} value={b}>{b === "Any" ? "Any" : `${b}+`}</option>
                ))}
              </select>
            </div>
            <div className="col-span-1 flex items-center gap-1 h-full">
              <button
                type="button"
                onClick={() => setView("grid")}
                className={`p-2.5 flex-1 border ${
                  view === "grid"
                    ? "bg-[var(--color-charcoal)] text-white border-[var(--color-charcoal)]"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)]"
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 size={16} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                className={`p-2.5 flex-1 border ${
                  view === "list"
                    ? "bg-[var(--color-charcoal)] text-white border-[var(--color-charcoal)]"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)]"
                }`}
                aria-label="List view"
              >
                <List size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-[var(--color-border)] px-4 py-2.5 text-xs tracking-[0.15em] uppercase font-medium"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters
            </button>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as typeof status)}
              className="form-input flex-1 text-sm"
            >
              <option>All</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
        </div>
      </section>

      <div className="container-x py-10 md:py-14">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-[var(--color-text-secondary)]">
            <span className="text-[var(--color-charcoal)] font-medium">{filtered.length}</span>{" "}
            propert{filtered.length === 1 ? "y" : "ies"} found
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="form-input w-auto text-sm py-2"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="relevant">Most Relevant</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[var(--color-border)]">
            <HomeIcon size={32} strokeWidth={1.25} className="mx-auto text-[var(--color-text-muted)] mb-4" />
            <h3 className="font-serif text-2xl mb-2">No properties match your search</h3>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
              Try adjusting your filters or expand your search area to see more listings.
            </p>
            <button
              onClick={() => {
                setStatus("All");
                setType("Any");
                setBeds("Any");
                setBaths("Any");
                setMinPrice("");
                setMaxPrice("");
                setLocation("");
              }}
              className="btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        ) : view === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filtered.map((p) => (
              <Link key={p.id} href={`/properties/${p.slug}`} className="property-card group block">
                <div className="property-image relative aspect-[4/3] overflow-hidden bg-[var(--color-soft-gray)]">
                  <Image
                    src={p.image}
                    alt={`${p.title}, ${p.address} ${p.city}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-warm-white)] text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-charcoal)] px-2.5 py-1">
                    {p.status}
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <div className="text-2xl font-serif font-medium">{formatPrice(p.price, p.status)}</div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
                      {p.type}
                    </span>
                  </div>
                  <h3 className="text-base font-sans font-medium text-[var(--color-charcoal)] mb-1">
                    {p.title}
                  </h3>
                  <div className="flex items-start gap-1 text-sm text-[var(--color-text-secondary)] mb-4">
                    <MapPin size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                    <span>{p.address}, {p.city}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] py-4 border-t border-[var(--color-border)]">
                    <span>{p.beds} Bd{p.beds !== 1 ? "s" : ""}</span>
                    <span>{p.baths} Ba{p.baths !== 1 ? "s" : ""}</span>
                    <span>{p.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {filtered.map((p) => (
              <Link
                key={p.id}
                href={`/properties/${p.slug}`}
                className="group grid grid-cols-[140px_1fr] sm:grid-cols-[220px_1fr] border border-[var(--color-border)] bg-white hover:border-[var(--color-border-dark)] transition-colors"
              >
                <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden bg-[var(--color-soft-gray)]">
                  <Image
                    src={p.image}
                    alt={`${p.title}, ${p.address} ${p.city}`}
                    fill
                    sizes="(max-width: 640px) 140px, 220px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-[var(--color-warm-white)] text-[9px] tracking-[0.2em] uppercase font-medium px-2 py-0.5">
                    {p.status}
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <div className="text-xl sm:text-2xl font-serif font-medium">
                      {formatPrice(p.price, p.status)}
                    </div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
                      {p.type}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-medium mb-1">{p.title}</h3>
                  <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] flex items-center gap-1 mb-3">
                    <MapPin size={12} strokeWidth={1.5} className="shrink-0" />
                    <span className="truncate">
                      {p.address}, {p.city}, {p.state} {p.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-[var(--color-text-secondary)] mt-auto pt-2 border-t border-[var(--color-border)]">
                    <span>{p.beds} Bd</span>
                    <span>{p.baths} Ba</span>
                    <span>{p.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[var(--color-warm-white)] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="space-y-5">
              <div>
                <label className="form-label">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or ZIP"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as typeof status)}
                  className="form-input"
                >
                  <option>All</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
              <div>
                <label className="form-label">Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)} className="form-input">
                  {propertyTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Min Price</label>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="form-input"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="form-label">Max Price</label>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="form-input"
                    placeholder="Any"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Beds</label>
                  <select value={beds} onChange={(e) => setBeds(e.target.value)} className="form-input">
                    {["Any", "1", "2", "3", "4", "5"].map((b) => (
                      <option key={b} value={b}>{b === "Any" ? "Any" : `${b}+`}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label">Baths</label>
                  <select value={baths} onChange={(e) => setBaths(e.target.value)} className="form-input">
                    {["Any", "1", "2", "3", "4"].map((b) => (
                      <option key={b} value={b}>{b === "Any" ? "Any" : `${b}+`}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary w-full"
              >
                View Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
