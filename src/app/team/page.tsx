import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";

function LinkedInIcon({ size = 14, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
import { team } from "@/data/team";

export const metadata = {
  title: "Our Team | Global Group Realty",
  description:
    "Meet the Global Group Realty team—South Florida real estate professionals specializing in Miami, Miami Beach, Brickell, Coral Gables, and surrounding communities.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-[var(--color-soft-gray)] border-b border-[var(--color-border)]">
        <div className="container-x py-14 md:py-20">
          <div className="max-w-2xl">
            <div className="section-kicker">Our Team</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-5">
              Meet the people behind Global Group Realty.
            </h1>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
              Our agents bring deep local expertise, disciplined transaction management, and a
              commitment to honest client representation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {team.map((member) => (
              <article key={member.slug} className="group">
                <div className="relative aspect-[4/5] bg-[var(--color-stone)] overflow-hidden mb-5">
                  {/* Placeholder portrait with initials */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-stone)] to-[var(--color-stone-dark)]">
                    <span className="font-serif text-6xl text-[var(--color-charcoal)]/40">
                      {member.initials}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                <div className="text-xs tracking-[0.2em] uppercase text-[var(--color-bronze-dark)] mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.specialties.slice(0, 3).map((s) => (
                    <span key={s} className="text-[10px] tracking-[0.15em] uppercase border border-[var(--color-border)] px-2 py-1 text-[var(--color-text-secondary)]">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border)]">
                  <a href="#" aria-label={`Email ${member.name}`} className="p-2 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] transition-colors">
                    <Mail size={14} strokeWidth={1.5} />
                  </a>
                  <a href="#" aria-label={`Call ${member.name}`} className="p-2 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] transition-colors">
                    <Phone size={14} strokeWidth={1.5} />
                  </a>
                  <a href="#" aria-label={`${member.name} LinkedIn`} className="p-2 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] transition-colors">
                    <LinkedInIcon size={14} strokeWidth={1.5} />
                  </a>
                  <Link
                    href={`/team/${member.slug}`}
                    className="ml-auto inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium link-underline"
                  >
                    Contact <ArrowRight size={12} strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
