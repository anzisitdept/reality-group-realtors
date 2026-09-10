import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone, ChevronRight, ArrowLeft } from "lucide-react";
import { getTeamMemberBySlug, team } from "@/data/team";
import LeadForm from "@/components/forms/LeadForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = getTeamMemberBySlug(slug);
  if (!m) return { title: "Team Member Not Found" };
  return {
    title: `${m.name} | ${m.role} | Global Group Realty`,
    description: `${m.name}, ${m.role} at Global Group Realty. Specializing in ${m.specialties.join(", ")} across ${m.serviceAreas.join(", ")}.`,
    alternates: { canonical: `/team/${m.slug}` },
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  return (
    <div>
      <div className="container-x py-5 border-b border-[var(--color-border)]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
          <Link href="/" className="hover:text-[var(--color-charcoal)]">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link href="/team" className="hover:text-[var(--color-charcoal)]">Our Team</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-[var(--color-charcoal)]">{member.name}</span>
        </nav>
      </div>

      <section className="container-x py-12 md:py-16 grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">
        <div>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] mb-6"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Back to Team
          </Link>
          <div className="aspect-[4/5] bg-gradient-to-br from-[var(--color-stone)] to-[var(--color-stone-dark)] flex items-center justify-center mb-5">
            <span className="font-serif text-7xl text-[var(--color-charcoal)]/40">{member.initials}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl mb-1">{member.name}</h1>
          <div className="text-xs tracking-[0.2em] uppercase text-[var(--color-bronze-dark)] mb-5">{member.role}</div>
          <div className="space-y-2 text-sm border-t border-[var(--color-border)] pt-5">
            {member.email && (
              <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] transition-colors">
                <Mail size={14} strokeWidth={1.5} /> {member.email}
              </a>
            )}
            {member.phone && (
              <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] transition-colors">
                <Phone size={14} strokeWidth={1.5} /> {member.phone}
              </a>
            )}
          </div>
        </div>

        <div>
          <div className="mb-10">
            <div className="section-kicker">About</div>
            <h2 className="font-serif text-2xl mb-4">Biography</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{member.bio}</p>
            <p className="text-xs text-[var(--color-text-muted)] italic mt-3">
              Agent profile placeholder. Professional photography and verified bio will be added
              before launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">Specialties</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                {member.specialties.map((s) => (
                  <li key={s} className="border-b border-[var(--color-border)] pb-2">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">Service Areas</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                {member.serviceAreas.map((a) => (
                  <li key={a} className="border-b border-[var(--color-border)] pb-2">{a}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-[var(--color-border)] p-6 md:p-8 bg-[var(--color-warm-white)]">
            <LeadForm
              leadType="general"
              title={`Contact ${member.name}`}
              subtitle="Send a direct inquiry and get a prompt response."
              submitLabel="Send Message"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
