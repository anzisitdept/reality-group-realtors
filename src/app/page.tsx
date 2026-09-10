import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  TrendingUp,
  Key,
  Building2,
  MapPin,
  Compass,
  Award,
  Phone,
  Quote,
  Users,
  BarChart3,
} from "lucide-react";
import HeroSearch from "@/components/forms/HeroSearch";
import PropertyCard from "@/components/properties/PropertyCard";
import LeadForm from "@/components/forms/LeadForm";
import { getFeaturedProperties } from "@/data/properties";
import { communities } from "@/data/communities";
import { insights } from "@/data/insights";

export default function HomePage() {
  const featured = getFeaturedProperties();
  const featuredCommunities = communities.slice(0, 6);
  const latestInsights = insights.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[var(--color-charcoal)]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-miami.jpg"
            alt="Miami waterfront skyline at golden hour"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="container-x relative z-10 w-full py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="fade-in fade-in-delay-1 mb-6 text-[var(--color-bronze)] text-[0.7rem] md:text-xs tracking-[0.3em] uppercase font-medium flex items-center gap-3">
              <span className="block w-10 h-px bg-[var(--color-bronze)]" />
              Global Group Realty · South Florida
            </div>
            <h1 className="fade-in fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.02] mb-6">
              Find Your Place
              <br />
              in South Florida.
            </h1>
            <p className="fade-in fade-in-delay-2 text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              Expert real estate guidance for buying, selling, renting, and investing across Miami
              and South Florida's most sought-after communities.
            </p>
            <div className="fade-in fade-in-delay-3 flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 bg-[var(--color-warm-white)] text-[var(--color-charcoal)] px-7 py-3.5 text-xs tracking-[0.15em] uppercase font-medium border border-[var(--color-warm-white)] hover:bg-white transition-colors"
              >
                Search Properties
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
              <Link href="/sell" className="btn-outline-light">
                Sell Your Property
              </Link>
            </div>
          </div>
        </div>

        {/* Search panel overlaid on bottom of hero */}
        <div className="container-x absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 hidden md:block pointer-events-none">
          <div className="max-w-6xl pointer-events-auto">
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* Mobile search panel */}
      <section className="md:hidden bg-[var(--color-soft-gray)] px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <HeroSearch />
        </div>
      </section>

      {/* Spacer for desktop floating search */}
      <div className="hidden md:block h-[180px]" />

      {/* FEATURED PROPERTIES */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <div>
              <div className="section-kicker">Featured Listings</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">
                Curated properties
                <br />
                across South Florida.
              </h2>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] font-medium link-underline"
            >
              View All Properties
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BUY / SELL / RENT PATHWAYS */}
      <section className="bg-[var(--color-soft-gray)] py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="section-kicker">How We Help</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              Guidance for every step of your real estate journey.
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Whether you're searching for your first home, listing a luxury property, or looking
              for a rental, our team brings local expertise and a disciplined process to every
              transaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {[
              {
                icon: Home,
                title: "Buy a Home",
                body: "From first-time purchases to luxury waterfront estates, we represent buyers across South Florida with market insight and disciplined negotiation.",
                href: "/buy",
                cta: "Start Your Search",
              },
              {
                icon: TrendingUp,
                title: "Sell a Property",
                body: "We position, price, and market our listings for maximum exposure. Our process is built to generate serious offers and strong terms.",
                href: "/sell",
                cta: "Request a Valuation",
              },
              {
                icon: Key,
                title: "Rent",
                body: "We maintain a curated selection of long-term rentals across Miami and represent tenants with the same care we bring to purchases.",
                href: "/rent",
                cta: "Browse Rentals",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--color-soft-gray)] p-8 md:p-10 flex flex-col">
                <div className="w-10 h-10 border border-[var(--color-charcoal)]/30 flex items-center justify-center mb-6 text-[var(--color-charcoal)]">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-1">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] font-medium link-underline self-start"
                >
                  {item.cta}
                  <ArrowRight size={13} strokeWidth={1.5} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GLOBAL GROUP REALTY */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] bg-[var(--color-stone)] overflow-hidden">
            <Image
              src="/images/brickell-community.jpg"
              alt="Brickell Miami high-rises"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="section-kicker">Why Global Group Realty</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Real estate guided by local expertise.
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Global Group Realty is a South Florida brokerage focused on one thing: representing
              our clients' interests with discipline, transparency, and deep market knowledge. We
              don't chase volume at the expense of service. We focus on doing each transaction well.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: Compass,
                  title: "Market Expertise",
                  body: "Deep, hyper-local knowledge of Miami neighborhoods, buildings, and inventory.",
                },
                {
                  icon: Users,
                  title: "Client-First",
                  body: "Representation built around your goals—not our commission check.",
                },
                {
                  icon: Award,
                  title: "Full-Service",
                  body: "From initial search and pricing through closing and beyond.",
                },
                {
                  icon: BarChart3,
                  title: "Data-Informed",
                  body: "Decisions guided by comparable sales, market data, and building history.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <div className="flex items-center gap-2 mb-2 text-[var(--color-charcoal)]">
                    <item.icon size={16} strokeWidth={1.5} />
                    <h4 className="font-sans font-medium text-sm tracking-wide uppercase">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
              <Link href="/contact" className="btn-primary">
                Talk to an Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITIES */}
      <section className="bg-[var(--color-charcoal)] text-white py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <div className="section-kicker !text-[var(--color-bronze)]">Explore South Florida</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
                Neighborhoods we serve.
              </h2>
              <p className="text-white/70 leading-relaxed">
                From the beaches of Miami Beach to the tree-lined streets of Coral Gables and the
                high-rises of Brickell, we work across the communities that define South Florida
                living.
              </p>
            </div>
            <Link
              href="/communities"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline text-white self-start"
            >
              All Communities
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {featuredCommunities.map((c) => (
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
                  <span className="inline-flex items-center gap-1.5 mt-4 text-[10px] tracking-[0.2em] uppercase text-white group-hover:text-[var(--color-bronze)] transition-colors">
                    Explore
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP / PROCESS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="section-kicker">Our Approach</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              A clear process. Better outcomes.
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Real estate transactions are significant. Our process is designed to give you clarity,
              reduce friction, and make sure nothing falls through the cracks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Listen",
                body: "We start by understanding your goals, timeline, and the variables that matter most to you.",
              },
              {
                num: "02",
                title: "Strategize",
                body: "We build a tailored plan—whether that's a pricing strategy, a target neighborhood search, or a rental portfolio review.",
              },
              {
                num: "03",
                title: "Execute",
                body: "We handle showings, marketing, offers, due diligence, and the dozens of small details that make or break a transaction.",
              },
              {
                num: "04",
                title: "Close",
                body: "We negotiate strongly, coordinate with attorneys, lenders, and title, and stay with you through closing and beyond.",
              },
            ].map((step) => (
              <div key={step.num}>
                <div className="text-xs tracking-[0.3em] text-[var(--color-bronze)] mb-3">{step.num}</div>
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET INSIGHTS */}
      <section className="bg-[var(--color-soft-gray)] py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <div>
              <div className="section-kicker">Market Insights</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">
                Perspectives on South Florida real estate.
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)] font-medium link-underline"
            >
              All Insights
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {latestInsights.map((a) => (
              <article key={a.slug} className="bg-white group flex flex-col">
                <Link href={`/insights/${a.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[var(--color-stone)]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                    <span>{a.category}</span>
                    <span className="w-1 h-1 bg-[var(--color-border-dark)]" />
                    <span>{a.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug mb-3 group-hover:text-[var(--color-bronze-dark)] transition-colors">
                    <Link href={`/insights/${a.slug}`}>{a.title}</Link>
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1 line-clamp-3">
                    {a.excerpt}
                  </p>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline self-start"
                  >
                    Read Article
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / TESTIMONIAL */}
      <section className="py-20 md:py-28">
        <div className="container-x max-w-4xl text-center">
          <Quote size={32} strokeWidth={1.25} className="mx-auto text-[var(--color-bronze)] mb-6" />
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-[var(--color-charcoal)] mb-8">
            "Working with Global Group Realty was straightforward and professional. They knew the
            Brickell market cold, walked us through every building, and negotiated strongly on our
            behalf. We felt represented from the first tour through closing."
          </p>
          <div className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
            Verified client · Buyer, Brickell
          </div>
          <p className="text-xs text-[var(--color-text-muted)] italic mt-3 max-w-lg mx-auto">
            Note: Testimonial placeholder. This section will be updated with verified client reviews
            before launch.
          </p>
        </div>
      </section>

      {/* STRONG LEAD CTA */}
      <section className="relative bg-[var(--color-charcoal)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/miami-community.jpg"
            alt="Miami skyline"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-charcoal)]/70" />
        </div>
        <div className="container-x relative z-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="section-kicker !text-[var(--color-bronze)]">Get in Touch</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Let's talk real estate.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8 max-w-lg">
              Whether you're ready to transact or just exploring the market, our team is happy to
              share insights, answer questions, and help you plan your next move.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} strokeWidth={1.5} className="text-[var(--color-bronze)] shrink-0" />
                <a href="tel:+13055550123" className="text-white hover:text-[var(--color-bronze)] transition-colors text-lg">
                  (305) 555-0123
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Building2 size={18} strokeWidth={1.5} className="text-[var(--color-bronze)] shrink-0" />
                <span className="text-white/80 text-sm">Miami, Florida</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-bronze)] shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@globalgrouprealty.com" className="text-white/80 hover:text-white transition-colors text-sm">
                  info@globalgrouprealty.com
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[var(--color-warm-white)] text-[var(--color-text-primary)] p-6 md:p-10">
            <LeadForm
              leadType="general"
              title="Send us a message"
              subtitle="We'll respond within one business day."
              submitLabel="Get in Touch"
              showInterestSelect
            />
          </div>
        </div>
      </section>
    </>
  );
}
