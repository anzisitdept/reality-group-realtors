import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, LineChart, Hammer, Megaphone, Users, Scale, FileCheck, TrendingUp } from "lucide-react";
import LeadForm from "@/components/forms/LeadForm";

export const metadata = {
  title: "Sell Your South Florida Property",
  description:
    "Sell your Miami or South Florida property with Global Group Realty. Market expertise, pricing strategy, professional marketing, and strong negotiation to get you the best outcome.",
  alternates: { canonical: "/sell" },
};

const whyItems = [
  {
    icon: LineChart,
    title: "Pricing Strategy",
    body: "We build your price on closed comparables, active competition, absorption, and market momentum—not guesswork.",
  },
  {
    icon: Hammer,
    title: "Property Preparation",
    body: "We walk your property with you and recommend the highest-ROI repairs, updates, and staging decisions before launch.",
  },
  {
    icon: Camera,
    title: "Professional Marketing",
    body: "Architectural photography, 3D tours, floor plans, custom print pieces, and a coordinated digital campaign across top portals.",
  },
  {
    icon: Megaphone,
    title: "Buyer Exposure",
    body: "Syndication to all major listing platforms, direct outreach to local agents, our internal buyer database, and targeted social.",
  },
  {
    icon: Users,
    title: "Buyer Qualification",
    body: "We pre-qualify every showing and every offer so you only spend time with serious, well-positioned buyers.",
  },
  {
    icon: Scale,
    title: "Negotiation",
    body: "We negotiate on price, terms, contingencies, timelines, repairs, and credits to get you the strongest total package.",
  },
  {
    icon: FileCheck,
    title: "Transaction Management",
    body: "We manage inspections, appraisals, title, lender deadlines, and documentation end-to-end through closing.",
  },
  {
    icon: TrendingUp,
    title: "Post-Close Support",
    body: "Our relationship doesn't end at closing. We stay in touch with market updates and trusted referrals for contractors, property management, and more.",
  },
];

const processSteps = [
  { num: "01", title: "Valuation & Consultation", body: "We provide a detailed comparative market analysis and an honest, no-pressure conversation about your goals, timeline, and positioning." },
  { num: "02", title: "Preparation & Launch", body: "We help you prepare the home for market, arrange professional photography and assets, and launch a coordinated listing campaign." },
  { num: "03", title: "Showings & Offers", body: "We handle all showings, buyer follow-up, offer presentation, and negotiation so you can focus on the decision-making." },
  { num: "04", title: "Under Contract to Close", body: "We project-manage every milestone from inspection through closing day and stay closely in touch with all parties." },
];

export default function SellPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/property-2.jpg" alt="Coral Gables estate" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
        </div>
        <div className="container-x relative z-10 py-20 md:py-28 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="text-[var(--color-bronze)] text-xs tracking-[0.3em] uppercase mb-6">Seller Representation</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-5 leading-tight">
              Ready to sell with confidence?
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              The right price, the right preparation, and the right marketing mean more money in
              your pocket and less stress during the transaction. We position South Florida homes
              to sell.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#valuation" className="inline-flex items-center gap-2 bg-white text-[var(--color-charcoal)] px-7 py-3.5 text-xs tracking-[0.15em] uppercase font-medium border border-white hover:bg-[var(--color-warm-white)] transition-colors">
                Request a Home Valuation
              </a>
              <Link href="/contact" className="btn-outline-light">Talk to a Listing Agent</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why sell with us */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="section-kicker">Why Global Group Realty</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              A disciplined approach to selling your property.
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We don't just list properties—we position them, market them, and negotiate strongly
              on your behalf.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {whyItems.map((item) => (
              <div key={item.title} className="bg-[var(--color-warm-white)] p-6 md:p-8">
                <div className="w-10 h-10 border border-[var(--color-charcoal)]/30 flex items-center justify-center mb-4 text-[var(--color-charcoal)]">
                  <item.icon size={17} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--color-soft-gray)] py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="section-kicker">Our Listing Process</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">From consultation to closing.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-xs tracking-[0.3em] text-[var(--color-bronze)] mb-3">
                  <span>{step.num}</span>
                </div>
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.body}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-2 right-0 w-12 h-px bg-[var(--color-border-dark)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation form */}
      <section id="valuation" className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="section-kicker">Home Valuation</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Find out what your home is worth in today's market.
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-lg">
              Request a no-obligation comparative market analysis from our listing team. We'll
              review recent sales, active competition, and current market conditions to give you an
              honest, data-driven range for your property.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Detailed comparable sales analysis",
                "Current South Florida market conditions",
                "Recommended list-price range",
                "Suggested prep and positioning",
                "Projected carrying costs and timing",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-bronze)] mt-0.5">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline">
              Talk to a Listing Agent <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="border border-[var(--color-border)] p-6 md:p-10 bg-[var(--color-warm-white)]">
            <LeadForm
              leadType="valuation"
              title="Request My Valuation"
              subtitle="We'll prepare a custom market report for your property."
              submitLabel="Request My Valuation"
            />
          </div>
        </div>
      </section>
    </>
  );
}
