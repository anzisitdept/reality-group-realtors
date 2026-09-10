import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { getInsightBySlug, insights } from "@/data/insights";
import LeadForm from "@/components/forms/LeadForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getInsightBySlug(slug);
  if (!a) return { title: "Article Not Found" };
  return {
    title: `${a.title} | Global Group Realty Insights`,
    description: a.excerpt,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.excerpt,
      images: [a.image],
      type: "article",
      publishedTime: a.publishedAt,
      authors: [a.author],
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const related = insights.filter((a) => a.slug !== article.slug).slice(0, 3);

  // Simple markdown-ish rendering for paragraphs and h2s (we wrote content with ## headings).
  const blocks = article.content.split(/\n\n+/);

  return (
    <div>
      <div className="container-x py-5 border-b border-[var(--color-border)]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
          <Link href="/" className="hover:text-[var(--color-charcoal)]">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link href="/insights" className="hover:text-[var(--color-charcoal)]">Insights</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-[var(--color-charcoal)] line-clamp-1">{article.category}</span>
        </nav>
      </div>

      <article className="container-x py-12 md:py-16 max-w-4xl mx-auto">
        <Link href="/insights" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] mb-8">
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to Insights
        </Link>

        <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[var(--color-bronze-dark)] mb-5">
          <span>{article.category}</span>
          <span className="w-1 h-1 bg-[var(--color-border-dark)]" />
          <span>{article.readTime}</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          {article.title}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-text-secondary)] border-y border-[var(--color-border)] py-4 mb-10">
          <span className="flex items-center gap-2">
            <User size={15} strokeWidth={1.5} className="text-[var(--color-bronze)]" />
            {article.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={15} strokeWidth={1.5} className="text-[var(--color-bronze)]" />
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={15} strokeWidth={1.5} className="text-[var(--color-bronze)]" />
            {article.readTime}
          </span>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-soft-gray)] mb-10">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        <div className="prose-custom max-w-none">
          {blocks.map((block, i) => {
            const trimmed = block.trim();
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={i} className="font-serif text-2xl md:text-3xl mt-10 mb-4 text-[var(--color-charcoal)]">
                  {trimmed.replace(/^##\s+/, "")}
                </h2>
              );
            }
            if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
              const items = trimmed.split("\n").map((l) => l.replace(/^[-*]\s+/, ""));
              return (
                <ul key={i} className="my-5 space-y-2 text-[var(--color-text-secondary)] leading-relaxed">
                  {items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[var(--color-bronze)] mt-1">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-[var(--color-text-secondary)] leading-[1.8] mb-5 text-base">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* End-of-article CTA */}
        <div className="mt-16 border border-[var(--color-border)] bg-[var(--color-soft-gray)] p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="section-kicker">Need Personal Guidance?</div>
              <h2 className="font-serif text-2xl md:text-3xl mb-3">
                Need help with your real estate goals?
              </h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Talk to Global Group Realty for a no-pressure conversation about your South Florida
                plans.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline mt-4">
                Talk to Global Group Realty <ArrowRight size={13} strokeWidth={1.5} />
              </Link>
            </div>
            <div className="bg-white p-6 border border-[var(--color-border)]">
              <LeadForm leadType="general" compact submitLabel="Get in Touch" />
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[var(--color-soft-gray)] py-16 md:py-20">
          <div className="container-x max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl mb-10">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((a) => (
                <article key={a.slug} className="bg-white group flex flex-col">
                  <Link href={`/insights/${a.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                    <Image src={a.image} alt={a.title} fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </Link>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-bronze)] mb-2">{a.category}</div>
                    <h3 className="font-serif text-lg leading-snug mb-2 group-hover:text-[var(--color-bronze-dark)] transition-colors">
                      <Link href={`/insights/${a.slug}`}>{a.title}</Link>
                    </h3>
                    <Link href={`/insights/${a.slug}`} className="mt-auto inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline self-start">
                      Read <ArrowRight size={12} strokeWidth={1.5} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
