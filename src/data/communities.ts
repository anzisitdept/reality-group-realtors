export interface Community {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  overview: string;
  marketOverview: string;
  lifestyle: string;
  attractions: string[];
  propertyTypes: string[];
  image: string;
  heroImage?: string;
  faq: { question: string; answer: string }[];
  keyStats: {
    medianHomePrice?: string;
    medianRent?: string;
    avgDaysOnMarket?: string;
    typicalInventory?: string;
  };
}

export const communities: Community[] = [
  {
    slug: "miami",
    name: "Miami",
    shortName: "Miami",
    tagline: "The cultural and economic heart of South Florida",
    description:
      "Miami is a cosmopolitan gateway city where global finance, luxury living, and tropical lifestyle converge along Biscayne Bay.",
    overview:
      "As Florida's largest urban center, Miami is defined by its waterfront skyline, international population, and year-round tropical energy. Downtown Miami, Coconut Grove, the Edgewater corridor, and the Design District each offer distinct residential characters, from glass-walled high-rises to gated waterfront estates.",
    marketOverview:
      "The Miami market is a magnet for domestic and international buyers seeking waterfront property, strong rental demand, and tangible long-term value. Inventory in established neighborhoods remains tight, and well-priced waterfront homes typically move quickly.",
    lifestyle:
      "Residents enjoy world-class dining, professional sports, museums, performing arts, and immediate access to the Atlantic, Biscayne Bay, and the Everglades.",
    attractions: [
      "Downtown Miami / Brickell financial district",
      "Wynwood Walls & Design District",
      "Vizcaya Museum & Gardens",
      "American Airlines Arena & Kaseya Center",
      "Miami Worldcenter",
    ],
    propertyTypes: [
      "High-rise condominiums",
      "Waterfront estates",
      "Historic single-family homes",
      "New development",
      "Income-producing multi-family",
    ],
    image: "/images/miami-community.jpg",
    keyStats: {
      medianHomePrice: "$1,250,000",
      medianRent: "$4,500",
      avgDaysOnMarket: "42 days",
    },
    faq: [
      {
        question: "Is Miami a good market for investment properties?",
        answer:
          "Miami benefits from strong population growth, international demand, and a robust rental market, particularly in urban neighborhoods with proximity to employment centers.",
      },
      {
        question: "What are the most walkable Miami neighborhoods?",
        answer:
          "Downtown, Brickell, the Design District, and Coconut Grove offer some of the city's best walkability with ready access to dining, retail, and transit.",
      },
    ],
  },
  {
    slug: "miami-beach",
    name: "Miami Beach",
    shortName: "Miami Beach",
    tagline: "The iconic oceanfront city of Miami",
    description:
      "Miami Beach is a barrier island city of white-sand beaches, Art Deco landmarks, and some of Florida's most celebrated oceanfront addresses.",
    overview:
      "From the Art Deco hotels of South Beach to the luxury condo towers of Mid-Beach and the gated estates of the North Beach islands, Miami Beach offers a remarkable range of oceanfront living in one of the world's best-known cities.",
    marketOverview:
      "Oceanfront condominiums represent the largest share of inventory, with strong demand from full-time residents, second-home buyers, and investors. Single-family homes on the Venetian and Sunset Islands are exceptionally limited.",
    lifestyle:
      "Miami Beach is oriented around the water—beach clubs, boating, boardwalk running and biking, alfresco dining, and a culture centered on outdoor living.",
    attractions: [
      "South Beach & Ocean Drive",
      "Lincoln Road Mall",
      "Miami Beach Boardwalk",
      "The Bass Museum",
      "Venetian Islands waterfront homes",
    ],
    propertyTypes: [
      "Oceanfront condominiums",
      "Art Deco condos",
      "Waterfront single-family homes",
      "Luxury rental buildings",
    ],
    image: "/images/miami-beach-community.jpg",
    keyStats: {
      medianHomePrice: "$1,550,000",
      medianRent: "$5,200",
      avgDaysOnMarket: "38 days",
    },
    faq: [
      {
        question: "Is Miami Beach primarily second homes or primary residences?",
        answer:
          "Miami Beach hosts both. South-of-Fifth and the bayfront islands have many primary residents, while portions of Mid-Beach and the Art Deco district include a higher share of second homes and investment properties.",
      },
      {
        question: "Are Miami Beach buildings flood-protected?",
        answer:
          "Nearly all buildings carry flood insurance; new construction and renovated properties meet strict elevated building codes.",
      },
    ],
  },
  {
    slug: "brickell",
    name: "Brickell",
    shortName: "Brickell",
    tagline: "Miami's sophisticated urban waterfront",
    description:
      "Brickell is Miami's financial district turned walkable vertical neighborhood—defined by glass high-rises, bay views, and urban convenience.",
    overview:
      "Once a canyon of office towers, Brickell has evolved into one of Miami's most livable dense neighborhoods, with residential towers, rooftop restaurants, the Brickell City Centre open-air mall, and pedestrian-friendly streets steps from Biscayne Bay.",
    marketOverview:
      "Brickell has a deep inventory of one- to three-bedroom high-rise condos, with consistent demand from professionals, international buyers, and investors targeting strong rental yields. Luxury sub-markets like Brickell Key command premiums for privacy and open water.",
    lifestyle:
      "Brickell is walkable, urban, and international. Residents walk to work, to restaurants, and to the bay—an unusual live-work dynamic in South Florida.",
    attractions: [
      "Brickell City Centre",
      "Mary Brickell Village",
      "Simpson Park Hammock",
      "Brickell Key",
      "Miami Riverwalk",
    ],
    propertyTypes: [
      "High-rise condominiums",
      "Luxury penthouses",
      "Hotel-condo residences",
      "Limited townhome product",
    ],
    image: "/images/brickell-community.jpg",
    keyStats: {
      medianHomePrice: "$925,000",
      medianRent: "$4,200",
      avgDaysOnMarket: "35 days",
    },
    faq: [
      {
        question: "Is Brickell primarily a rental market?",
        answer:
          "Brickell has a strong owner-occupant base, supported by a substantial rental market. Buildings vary widely in tenant-to-owner ratios, which matters for buyers.",
      },
      {
        question: "Do Brickell condos have high HOA fees?",
        answer:
          "Monthly fees typically scale with amenities and building age; we provide a detailed analysis of carrying costs for any property of interest.",
      },
    ],
  },
  {
    slug: "coral-gables",
    name: "Coral Gables",
    shortName: "Coral Gables",
    tagline: "The City Beautiful—historic, tree-lined, and enduring",
    description:
      "Coral Gables is one of Florida's first planned communities, celebrated for its Mediterranean architecture, canopy streets, and long-standing prestige.",
    overview:
      "Developed in the 1920s by George Merrick, Coral Gables is a city of tree-lined boulevards, historic estates, and family neighborhoods. The city hosts the University of Miami, The Biltmore Hotel, and some of Miami-Dade's most respected schools.",
    marketOverview:
      "Homes in Coral Gables hold their value across market cycles. Inventory includes historic estates, Old Spanish-style homes, mid-century ranches, and new construction on the city's western edges.",
    lifestyle:
      "Quiet, refined, and walkable in its core, with Miracle Mile's dining and theater, public golf at the Biltmore, and easy access to downtown and the airport.",
    attractions: [
      "The Biltmore Hotel",
      "Miracle Mile & Downtown Coral Gables",
      "Venetian Pool",
      "Fairchild Tropical Botanic Garden",
      "University of Miami",
    ],
    propertyTypes: [
      "Historic Mediterranean estates",
      "Old Spanish-style homes",
      "Single-family residences",
      "Waterfront homes on the Gables Waterway",
      "Luxury condos near the Village",
    ],
    image: "/images/coral-gables-community.jpg",
    keyStats: {
      medianHomePrice: "$1,750,000",
      medianRent: "$4,800",
      avgDaysOnMarket: "52 days",
    },
    faq: [
      {
        question: "Are all homes in Coral Gables historic?",
        answer:
          "No. The city includes protected historic districts plus many non-historic neighborhoods where renovation and new construction options vary widely.",
      },
      {
        question: "How are the public schools?",
        answer:
          "Coral Gables is served by some of Miami-Dade's highest-rated public schools alongside leading private institutions.",
      },
    ],
  },
  {
    slug: "doral",
    name: "Doral",
    shortName: "Doral",
    tagline: "A family-friendly city with resort amenities",
    description:
      "Doral is a rapidly growing west Miami-Dade city known for family life, corporate headquarters, golf, and top-rated schools.",
    overview:
      "Doral has grown from a golf-course community into a full-fledged city with modern family homes, master-planned communities, excellent public schools, and a thriving business community anchored by corporate parks and Doral Miami airport.",
    marketOverview:
      "Doral attracts families, international buyers, and investors seeking newer construction, gated communities, and strong rental demand from corporate tenants.",
    lifestyle:
      "Life in Doral revolves around parks, golf, youth sports, shopping, and easy access to the Turnpike and the airport.",
    attractions: [
      "Trump National Doral Golf",
      "CityPlace Doral",
      "Doral Central Park",
      "Miami International Mall",
      "Top-rated public schools",
    ],
    propertyTypes: [
      "Single-family homes",
      "Townhomes",
      "Family-oriented condos",
      "New construction communities",
    ],
    image: "/images/property-6.jpg",
    keyStats: {
      medianHomePrice: "$780,000",
      medianRent: "$3,600",
      avgDaysOnMarket: "28 days",
    },
    faq: [
      {
        question: "Is Doral a good market for families?",
        answer:
          "Yes. Doral is one of Miami-Dade's most family-oriented cities, with strong schools, parks, and a wide selection of newer single-family homes.",
      },
    ],
  },
  {
    slug: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    shortName: "Sunny Isles Beach",
    tagline: "Sky-rise oceanfront living between Fort Lauderdale and Miami",
    description:
      "Sunny Isles Beach is a barrier island city lined with some of South Florida's tallest and most luxurious oceanfront towers.",
    overview:
      "Positioned midway between Miami and Fort Lauderdale on Collins Avenue, Sunny Isles Beach concentrates premium oceanfront high-rise living in a walkable, beach-focused community.",
    marketOverview:
      "The market is dominated by oceanfront condos, with a limited number of single-family homes on the bay side. International buyers and snowbirds make up a significant share of the market.",
    lifestyle:
      "Condo amenities, beach clubs, and proximity to Aventura Mall and Bal Harbour Shops define the Sunny Isles lifestyle.",
    attractions: [
      "Newport Fishing Pier",
      "Gateway Park",
      "Haulover Beach Marina",
      "Walk to Aventura Mall",
      "Quick access to Bal Harbour",
    ],
    propertyTypes: [
      "Oceanfront high-rise condos",
      "Penthouses",
      "Bayfront single-family homes",
    ],
    image: "/images/property-5.jpg",
    keyStats: {
      medianHomePrice: "$1,450,000",
      medianRent: "$5,500",
      avgDaysOnMarket: "45 days",
    },
    faq: [],
  },
  {
    slug: "bal-harbour",
    name: "Bal Harbour",
    shortName: "Bal Harbour",
    tagline: "An exclusive oceanfront village of quiet luxury",
    description:
      "Bal Harbour is a small, affluent village known for quiet residential streets, the Shops of Bal Harbour, and some of the beach's most exclusive addresses.",
    overview:
      "Occupying the northern tip of the barrier island just south of Haulover Inlet, Bal Harbour is a refined, low-density community of luxury condos, waterfront homes, and five-star hotels.",
    marketOverview:
      "Inventory is limited and values hold firm. Bal Harbour draws a high concentration of ultra-high-net-worth buyers seeking privacy, service, and walkable luxury.",
    lifestyle:
      "Walk to the beach, the Shops of Bal Harbour, and gourmet dining along a quiet, tree-lined village core.",
    attractions: [
      "Bal Harbour Shops",
      "Bal Harbour Beach",
      "St. Regis Bal Harbour",
      "Haulover Inlet boating access",
    ],
    propertyTypes: [
      "Luxury oceanfront condos",
      "Beachfront estates",
      "Five-star hotel-residences",
    ],
    image: "/images/property-5.jpg",
    keyStats: {
      medianHomePrice: "$3,200,000",
      avgDaysOnMarket: "68 days",
    },
    faq: [],
  },
  {
    slug: "fisher-island",
    name: "Fisher Island",
    shortName: "Fisher Island",
    tagline: "One of America's most exclusive island communities",
    description:
      "A private 216-acre barrier island accessible only by ferry or yacht, home to luxury residences, a world-class hotel, and elite recreational amenities.",
    overview:
      "Fisher Island is the pinnacle of Miami-area privacy, with limited estate inventory, condo residences, and a private membership club covering golf, tennis, marinas, and beachfront dining.",
    marketOverview:
      "Fisher Island properties rarely come to market and command premium pricing. Ownership often includes club membership, subject to approval.",
    lifestyle:
      "Private, secure, and oriented toward the water, with golf cart transportation on the island and regular ferry service to Miami Beach.",
    attractions: [
      "Fisher Island Club",
      "Private marina",
      "Pristine private beach",
      "Championship golf",
    ],
    propertyTypes: [
      "Waterfront villas",
      "Luxury condominiums",
      "Estate homes",
    ],
    image: "/images/property-1.jpg",
    keyStats: {
      medianHomePrice: "$5,500,000",
      avgDaysOnMarket: "90+ days",
    },
    faq: [],
  },
  {
    slug: "pinecrest",
    name: "Pinecrest",
    shortName: "Pinecrest",
    tagline: "A south Miami-Dade village of spacious homes and top schools",
    description:
      "Pinecrest is an established suburban village favored by families for its large lots, mature canopy, and A-rated public schools.",
    overview:
      "An independent village south of Coral Gables and east of US-1, Pinecrest is known for large single-family homes, tree-canopy streets, a community garden, and some of the county's highest-performing schools.",
    marketOverview:
      "Pinecrest is almost entirely single-family. Renovated homes with pools and updated kitchens are the most sought-after, with limited new construction on large lots.",
    lifestyle:
      "Quiet, family-oriented, and suburban in feel while remaining 20 minutes from downtown Miami and the airport.",
    attractions: [
      "Pinecrest Gardens",
      "Matheson Hammock Park",
      "Old Cutler Road biking",
      "Top-rated schools",
    ],
    propertyTypes: [
      "Single-family estate homes",
      "Mid-century ranches (renovated)",
      "New custom construction",
    ],
    image: "/images/property-6.jpg",
    keyStats: {
      medianHomePrice: "$1,850,000",
      avgDaysOnMarket: "48 days",
    },
    faq: [],
  },
  {
    slug: "south-miami",
    name: "South Miami",
    shortName: "South Miami",
    tagline: "A walkable small-city neighborhood with deep local roots",
    description:
      "South Miami is a small, established city south of Coral Gables known for its walkable downtown, boutique shopping, and family-friendly neighborhoods.",
    overview:
      "Centered on Sunset Drive and Red Road, South Miami combines a quaint downtown of local restaurants and shops with established residential blocks of single-family homes and boutique condo buildings.",
    marketOverview:
      "The market is dominated by single-family homes, with occasional condo opportunities within walking distance of the South Miami Metrorail station.",
    lifestyle:
      "A distinctly small-city feel inside the greater Miami area, with a popular farmers' market, independent shops, and proximity to the University of Miami.",
    attractions: [
      "Sunset Place",
      "South Miami Farmers' Market",
      "University of Miami (main campus)",
      "The Shops at Sunset Place",
    ],
    propertyTypes: [
      "Single-family homes",
      "Boutique condominiums",
      "Duplexes & multiplexes",
    ],
    image: "/images/property-2.jpg",
    keyStats: {
      medianHomePrice: "$1,125,000",
      avgDaysOnMarket: "42 days",
    },
    faq: [],
  },
  {
    slug: "golden-beach",
    name: "Golden Beach",
    shortName: "Golden Beach",
    tagline: "A secluded beachfront town with a small-village feel",
    description:
      "Golden Beach is a tiny, affluent oceanfront town north of Sunny Isles with a limited collection of luxury single-family homes.",
    overview:
      "A one-square-mile community of mostly single-family homes guarded by a private police force, Golden Beach offers privacy and beach access in an intimate setting between Aventura and Hallandale Beach.",
    marketOverview:
      "Listings are rare; when homes come to market they typically draw buyers seeking beachfront privacy in a small-town environment.",
    lifestyle:
      "Quiet, residential, and family-focused, with private beach access for residents and easy commuting to both Miami and Fort Lauderdale.",
    attractions: [
      "Private beach access",
      "Intracoastal parks",
      "Minutes to Aventura Mall",
    ],
    propertyTypes: [
      "Single-family oceanfront homes",
      "Intracoastal estates",
    ],
    image: "/images/property-5.jpg",
    keyStats: {},
    faq: [],
  },
  {
    slug: "indian-creek",
    name: "Indian Creek",
    shortName: "Indian Creek",
    tagline: "Billionaire's Bunker—South Florida's most private island",
    description:
      "Indian Creek is a guard-gated island village with a private country club and one of the most exclusive real estate markets in the country.",
    overview:
      "A small island in Biscayne Bay connected to Surfside, Indian Creek hosts roughly three dozen estate lots along a single road with a private golf course and 24/7 armed security.",
    marketOverview:
      "Estate sales on Indian Creek are rare and typically transact off-market or privately. Transactions often set regional records.",
    lifestyle:
      "Absolute privacy, security, and exclusivity for ultra-high-net-worth buyers.",
    attractions: [
      "Indian Creek Country Club",
      "Private island security",
      "Proximity to Bal Harbour",
    ],
    propertyTypes: ["Ultra-luxury waterfront estates"],
    image: "/images/property-1.jpg",
    keyStats: {},
    faq: [],
  },
  {
    slug: "palm-island",
    name: "Palm Island",
    shortName: "Palm Island",
    tagline: "A gated residential island just off the MacArthur Causeway",
    description:
      "Palm Island is one of the Palm, Hibiscus, and Star Islands—historic guard-gated residential islands between Miami Beach and downtown.",
    overview:
      "Palm Island is a guard-gated residential island known for waterfront estates and a central island location offering quick access to both the Beach and the mainland.",
    marketOverview:
      "Waterfront homes and a limited number of renovated condos make up the Palm Island market, with strong demand for boat-accessible estates.",
    lifestyle:
      "Private-island living with skyline views, deep-water docks, and a 10-minute drive to the beach and downtown.",
    attractions: [
      "Guard-gated privacy",
      "Boating access",
      "Proximity to South Beach",
    ],
    propertyTypes: ["Waterfront estates", "Renovated island condos"],
    image: "/images/property-1.jpg",
    keyStats: {},
    faq: [],
  },
  {
    slug: "venetian-islands",
    name: "Venetian Islands",
    shortName: "Venetian Islands",
    tagline: "Historic waterfront islands between Miami and Miami Beach",
    description:
      "A chain of man-made islands connected by the historic Venetian Causeway, home to a mix of waterfront homes and classic Miami Beach condominiums.",
    overview:
      "The Venetian Islands offer some of Miami's most scenic waterfront living, with open-bay views, walking and biking paths along the causeway, and easy access to both Miami and Miami Beach.",
    marketOverview:
      "Buyers can choose between single-family waterfront homes on larger lots and mid-rise bayfront condos at relatively accessible price points compared to the beachfront.",
    lifestyle:
      "Boating, biking on the causeway, quick trips to South Beach and the Design District, and a strong sense of island community.",
    attractions: [
      "Venetian Causeway bike path",
      "Biscayne Bay views",
      "Standard Hotel on the Venetian",
    ],
    propertyTypes: [
      "Waterfront single-family homes",
      "Mid-rise bayfront condos",
    ],
    image: "/images/miami-beach-community.jpg",
    keyStats: {
      medianHomePrice: "$2,300,000",
      avgDaysOnMarket: "55 days",
    },
    faq: [],
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}
