import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

const exploreLinks = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Rent", href: "/rent" },
  { label: "Properties", href: "/properties" },
  { label: "Communities", href: "/communities" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const areaLinks = [
  { label: "Miami", href: "/communities/miami" },
  { label: "Miami Beach", href: "/communities/miami-beach" },
  { label: "Brickell", href: "/communities/brickell" },
  { label: "Coral Gables", href: "/communities/coral-gables" },
  { label: "Doral", href: "/communities/doral" },
  { label: "Sunny Isles Beach", href: "/communities/sunny-isles-beach" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-warm-white)]">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-x py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="section-kicker text-[var(--color-bronze)]">Let's Talk</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
              Ready to make your next move in South Florida?
            </h2>
            <p className="text-white/70 max-w-md text-[0.95rem] leading-relaxed">
              Whether you're buying, selling, renting, or just exploring the market, our team is
              here to provide guidance grounded in local expertise.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:justify-end gap-4">
            <Link href="/contact" className="btn-primary bg-white text-[var(--color-charcoal)] border-white hover:bg-white/90 hover:border-white/90">
              Schedule a Consultation
            </Link>
            <Link href="/sell" className="btn-outline-light">
              Request a Valuation
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <div className="col-span-2 lg:col-span-2">
          <div className="font-serif tracking-[0.2em] text-lg mb-5">GLOBAL GROUP REALTY</div>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
            A South Florida real estate brokerage offering client-focused representation across
            Miami, Miami Beach, Brickell, Coral Gables, and the surrounding communities.
          </p>
          <div className="space-y-2 text-sm text-white/70">
            <div className="flex items-start gap-2">
              <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[var(--color-bronze)]" />
              <span>Miami, Florida</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} strokeWidth={1.5} className="shrink-0 text-[var(--color-bronze)]" />
              <a href="tel:+13055550123" className="hover:text-white transition-colors">
                (305) 555-0123
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} strokeWidth={1.5} className="shrink-0 text-[var(--color-bronze)]" />
              <a href="mailto:info@globalgrouprealty.com" className="hover:text-white transition-colors">
                info@globalgrouprealty.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-5 font-sans font-medium">
            Explore
          </h3>
          <ul className="space-y-3">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-5 font-sans font-medium">
            Company
          </h3>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-5 font-sans font-medium">
            Popular Areas
          </h3>
          <ul className="space-y-3">
            {areaLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Global Group Realty. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Fair Housing</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
            <Link href="#" className="hover:text-white transition-colors">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
