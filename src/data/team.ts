export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  serviceAreas: string[];
  email?: string;
  phone?: string;
  languages?: string[];
  initials: string;
}

export const team: TeamMember[] = [
  {
    slug: "jane-doe",
    name: "Placeholder for Principal Broker",
    role: "Principal Broker",
    bio: "Leads the brokerage with a focus on market expertise, client representation, and transaction excellence across South Florida. Specializes in luxury residential and investment transactions.",
    specialties: ["Luxury Residential", "Investment Properties", "Waterfront Homes"],
    serviceAreas: ["Miami", "Miami Beach", "Coral Gables", "Brickell", "Fisher Island"],
    languages: ["English", "Spanish"],
    initials: "PB",
  },
  {
    slug: "agent-2",
    name: "Buyer Specialist",
    role: "Senior Buyer's Agent",
    bio: "Focuses on representing buyers across Miami-Dade with deep knowledge of first-time purchase, relocation, and investment transactions.",
    specialties: ["Buyer Representation", "Relocation", "First-Time Buyers"],
    serviceAreas: ["Brickell", "Downtown Miami", "Coconut Grove", "Edgewater"],
    initials: "BS",
  },
  {
    slug: "agent-3",
    name: "Listing Specialist",
    role: "Senior Listing Agent",
    bio: "Provides dedicated seller representation with experience in property preparation, pricing strategy, and targeted marketing for South Florida homes.",
    specialties: ["Seller Representation", "Luxury Listings", "Marketing Strategy"],
    serviceAreas: ["Coral Gables", "Pinecrest", "South Miami", "Miami Beach"],
    initials: "LS",
  },
  {
    slug: "agent-4",
    name: "Rental Specialist",
    role: "Rental & Leasing Advisor",
    bio: "Coordinates the brokerage's rental practice, serving landlords and tenants across the Miami metro with a focus on long-term residential leasing.",
    specialties: ["Long-Term Rentals", "Landlord Representation", "Tenant Services"],
    serviceAreas: ["Brickell", "Miami Beach", "Doral", "Sunny Isles Beach"],
    initials: "RS",
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
