import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { communities } from "@/data/communities";

export const metadata = {
  title: "South Florida Communities & Neighborhoods",
  description:
    "Explore Miami and South Florida neighborhoods. Community guides, market insights, and active listings for Miami, Miami Beach, Brickell, Coral Gables, Doral, and more.",
  alternates: { canonical: "/communities" },
};

export default function CommunitiesPage() {
  const featured = communities.slice(0, 6);
  const rest = communities.slice(6);

  return (
    <>
      <section className="bg-[var(--color-soft-gray)] border-b border-[var(--color-border)]">
        <div className="container-x py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="section-kicker">Explore South Florida</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-5">
              Communities we serve.
            </h1>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
              Get to know the neighborhoods of Miami and South Florida—from the oceanfront towers
              of Sunny Isles to the tree-lined streets of Coral Gables. Each community has its own
              character, market dynamics, and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Featured communities grid */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl font-serif mb-8">Featured Communities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {featured.map((c) => (
              <Link
                key={c.slug}
                href={`/communities/${c.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden bg-black"
              >
                <Image
                  src={c.image}
                  alt={`${c.name} real estate`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1.5 text-[var(--color-bronze)] text-[10px] tracking-[0.2em] uppercase mb-1">
                    <MapPin size={11} strokeWidth={1.5} />
                    South Florida
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2 text-white">{c.name}</h3>
                  <p className="text-white/75 text-sm leading-snug max-w-xs line-clamp-2">
                    {c.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-[10px] tracking-[0.2em] uppercase text-white group-hover:text-[var(--color-bronze)] transition-colors">
                    Explore <ArrowRight size={12} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All other communities as simple list */}
      {rest.length > 0 && (
        <section className="pb-20">
          <div className="container-x">
            <h2 className="text-2xl md:text-3xl font-serif mb-8">More Neighborhoods</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 border-t border-[var(--color-border)]">
              {rest.map((c) => (
                <Link
                  key={c.slug}
                  href={`/communities/${c.slug}`}
                  className="group py-4 border-b border-[var(--color-border)] flex items-start justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={13} strokeWidth={1.5} className="text-[var(--color-bronze)]" />
                      <h3 className="font-serif text-lg group-hover:text-[var(--color-bronze-dark)] transition-colors">
                        {c.name}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-1">
                      {c.tagline}
                    </p>
                  </div>
                  <ArrowRight size={15} strokeWidth={1.5} className="mt-2 text-[var(--color-text-muted)] group-hover:text-[var(--color-charcoal)] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
