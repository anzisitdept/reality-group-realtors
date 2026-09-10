import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Home, BadgeDollarSign, FileCheck, Key, Users, Building, Briefcase, GraduationCap, Compass } from "lucide-react";
import LeadForm from "@/components/forms/LeadForm";

export const metadata = {
  title: "Buy a Home in South Florida",
  description:
    "Buy a home in Miami or South Florida with Global Group Realty. Buyer representation, first-time buyer guidance, luxury homes, investment properties, and relocation support.",
  alternates: { canonical: "/buy" },
};

const steps = [
  {
    num: "01",
    title: "Define Your Goals",
    body: "We start with a conversation about timeline, budget, lifestyle priorities, and what you want in a property—not just the specs, but how you want to live.",
  },
  {
    num: "02",
    title: "Explore the Market",
    body: "We walk you through the neighborhoods that match your priorities, share off-pocket and coming-soon opportunities, and set up a tailored search.",
  },
  {
    num: "03",
    title: "Find the Right Property",
    body: "We tour properties together, analyze comparable sales, review building financials for condos, and give you honest guidance—not pressure.",
  },
  {
    num: "04",
    title: "Make an Offer",
    body: "We advise on price, contingencies, earnest money, and timelines to craft a strong, competitive offer that also protects your interests.",
  },
  {
    num: "05",
    title: "Close With Confidence",
    body: "We coordinate inspections, appraisals, financing, title, and closing documents so you get to the table with no surprises.",
  },
];

const resources = [
  { icon: GraduationCap, title: "First-Time Buyers", body: "Step-by-step guidance for first-time purchasers, including financing, Homestead exemption, and local market orientation." },
  { icon: Building, title: "Luxury Buyers", body: "Discreet representation for waterfront estates, high-rise penthouses, and exclusive island properties across Miami." },
  { icon: Briefcase, title: "Investment Properties",
    body: "Data-driven analysis of cash flow, cap rates, rental demand, and appreciation across South Florida submarkets." },
  { icon: Compass, title: "Relocation", body: "Comprehensive area tours, school and lifestyle guidance, and remote transaction support for buyers relocating to Florida." },
  { icon: BadgeDollarSign, title: "Financing Resources", body: "Trusted referrals to local lenders who know Florida financing, including foreign-national and jumbo programs." },
  { icon: Users, title: "Neighborhood Guides", body: "Deep-dive guides to Miami, Miami Beach, Brickell, Coral Gables, and more—with honest perspective from agents who work these markets daily." },
];

export default function BuyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/property-3.jpg" alt="Luxury Brickell condo interior" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
        </div>
        <div className="container-x relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="text-[var(--color-bronze)] text-xs tracking-[0.3em] uppercase mb-6">Buyer Representation</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-5">
              Your search starts here.
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              We represent buyers across South Florida with discipline, transparency, and deep local
              expertise. From first properties to generational purchases, we guide you to the right
              home on the right terms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/properties" className="inline-flex items-center gap-2 bg-white text-[var(--color-charcoal)] px-7 py-3.5 text-xs tracking-[0.15em] uppercase font-medium border border-white hover:bg-[var(--color-warm-white)] transition-colors">
                <Search size={15} strokeWidth={1.5} />
                Search Properties
              </Link>
              <Link href="/contact" className="btn-outline-light">Talk to a Buyer Specialist</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="section-kicker">The Buying Process</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">A clear five-step path.</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              The best way to make a confident purchase is to know what to expect. We walk you
              through every step so there are no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="border-t border-[var(--color-border)] pt-6">
                <div className="text-xs tracking-[0.3em] text-[var(--color-bronze)] mb-3">{step.num}</div>
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-[var(--color-soft-gray)] py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="section-kicker">Buyer Resources</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Specialized guidance for every buyer.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {resources.map((r) => (
              <div key={r.title} className="bg-[var(--color-warm-white)] p-8 md:p-10">
                <div className="w-10 h-10 border border-[var(--color-charcoal)]/30 flex items-center justify-center mb-5 text-[var(--color-charcoal)]">
                  <r.icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-2">{r.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + form */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="section-kicker">Talk to a Buyer Specialist</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Ready to start your search?
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg">
              Tell us a little about what you're looking for and we'll set up a tailored search and
              schedule an initial call to discuss your options. There's no obligation and no pressure.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-[var(--color-stone)] flex items-center justify-center text-[var(--color-charcoal)] font-serif text-lg">GR</div>
              <div>
                <div className="text-sm font-medium">Global Group Realty Buyer Team</div>
                <div className="text-xs text-[var(--color-text-secondary)]">Miami, FL</div>
              </div>
            </div>
            <Link href="/communities" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline">
              Explore Communities <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="border border-[var(--color-border)] p-6 md:p-10 bg-[var(--color-warm-white)]">
            <LeadForm leadType="buyer" title="Start Your Buyer Consultation" submitLabel="Get Started" showInterestSelect={false} />
          </div>
        </div>
      </section>
    </>
  );
}
