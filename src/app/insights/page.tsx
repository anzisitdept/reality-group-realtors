import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { insights } from "@/data/insights";

export const metadata = {
  title: "Market Insights | Global Group Realty",
  description:
    "South Florida real estate insights: market updates, buying and selling advice, neighborhood guides, and investment perspectives from the Global Group Realty team.",
  alternates: { canonical: "/insights" },
};

const categories = [
  "All",
  "Market Updates",
  "Buying Advice",
  "Selling Advice",
  "Neighborhood Guides",
  "Investment",
  "Miami Real Estate",
  "South Florida Real Estate",
  "Homeownership",
];

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <section className="bg-[var(--color-soft-gray)] border-b border-[var(--color-border)]">
        <div className="container-x py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="section-kicker">Market Insights</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-5">
              Perspectives on South Florida real estate.
            </h1>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
              Market updates, neighborhood guides, and practical guidance for buyers, sellers,
              investors, and renters—written by the Global Group Realty team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-medium border transition-colors ${
                  i === 0
                    ? "bg-[var(--color-charcoal)] text-white border-[var(--color-charcoal)]"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="py-14 md:py-20">
          <div className="container-x">
            <h2 className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-8">Featured Article</h2>
            <article className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <Link href={`/insights/${featured.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-[var(--color-stone)]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </Link>
              <div>
                <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
                  <span className="text-[var(--color-bronze)]">{featured.category}</span>
                  <span className="w-1 h-1 bg-[var(--color-border-dark)]" />
                  <span>{featured.readTime}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 hover:text-[var(--color-bronze-dark)] transition-colors">
                  <Link href={`/insights/${featured.slug}`}>{featured.title}</Link>
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">{featured.excerpt}</p>
                <Link
                  href={`/insights/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline"
                >
                  Read Article <ArrowRight size={13} strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="py-14 md:py-20 bg-[var(--color-soft-gray)]">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl font-serif mb-10">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {rest.map((a) => (
              <article key={a.slug} className="flex flex-col bg-white">
                <Link href={`/insights/${a.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[var(--color-stone)]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                    <span className="text-[var(--color-bronze)]">{a.category}</span>
                    <span className="w-1 h-1 bg-[var(--color-border-dark)]" />
                    <span>{a.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug mb-3 hover:text-[var(--color-bronze-dark)] transition-colors">
                    <Link href={`/insights/${a.slug}`}>{a.title}</Link>
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1 line-clamp-3">
                    {a.excerpt}
                  </p>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline self-start"
                  >
                    Read <ArrowRight size={13} strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-x max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Need help with your real estate goals?
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            Talk to Global Group Realty for guidance tailored to your specific situation in the
            South Florida market.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Global Group Realty
          </Link>
        </div>
      </section>
    </>
  );
}
