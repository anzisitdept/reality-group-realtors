export type PropertyStatus = "For Sale" | "For Rent" | "Sold" | "Pending";
export type PropertyType =
  | "Single Family"
  | "Condominium"
  | "Townhouse"
  | "Multi-Family"
  | "Villa"
  | "Penthouse";

export interface Property {
  id: string;
  slug: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  community: string;
  price: number;
  pricePerSqFt?: number;
  status: PropertyStatus;
  type: PropertyType;
  beds: number;
  baths: number;
  halfBaths?: number;
  sqft: number;
  lotSize?: number;
  yearBuilt?: number;
  description: string;
  features: string[];
  image: string;
  gallery?: string[];
  lat?: number;
  lng?: number;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "123-bayview-dr-miami",
    title: "Waterfront Modern Estate",
    address: "123 Bayview Drive",
    city: "Miami",
    state: "FL",
    zip: "33133",
    community: "Miami",
    price: 4250000,
    pricePerSqFt: 1230,
    status: "For Sale",
    type: "Single Family",
    beds: 5,
    baths: 6,
    halfBaths: 1,
    sqft: 3456,
    lotSize: 12500,
    yearBuilt: 2021,
    description:
      "A striking contemporary waterfront residence designed for refined South Florida living. Floor-to-ceiling glass, an infinity-edge pool, private dock, and seamless indoor-outdoor spaces create a rare offering in one of Miami's most coveted enclaves.",
    features: [
      "Private Dock",
      "Infinity Pool",
      "Wine Cellar",
      "Smart Home System",
      "Outdoor Kitchen",
      "3-Car Garage",
      "Boat Lift",
      "Floor-to-Ceiling Windows",
    ],
    image: "/images/property-1.jpg",
    gallery: ["/images/property-1.jpg"],
    lat: 25.721,
    lng: -80.238,
    featured: true,
  },
  {
    id: "2",
    slug: "456-coral-way-coral-gables",
    title: "Historic Coral Gables Estate",
    address: "456 Coral Way",
    city: "Coral Gables",
    state: "FL",
    zip: "33134",
    community: "Coral Gables",
    price: 2875000,
    pricePerSqFt: 890,
    status: "For Sale",
    type: "Single Family",
    beds: 5,
    baths: 4,
    halfBaths: 1,
    sqft: 4230,
    lotSize: 18900,
    yearBuilt: 1928,
    description:
      "A meticulously restored Mediterranean Revival estate on a sprawling corner lot. Original coral rock archways, hand-glazed tile, and mature oak trees anchor the home in Old Florida elegance—updated with modern systems and a chef's kitchen.",
    features: [
      "Original Coral Rock Architecture",
      "Clay Tile Roof",
      "Formal Gardens",
      "Guest House",
      "Summer Kitchen",
      "Circular Driveway",
      "Heated Pool",
    ],
    image: "/images/property-2.jpg",
    gallery: ["/images/property-2.jpg"],
    lat: 25.742,
    lng: -80.267,
    featured: true,
  },
  {
    id: "3",
    slug: "789-brickell-ave-3201-brickell",
    title: "Sky Residence at Brickell Flatiron",
    address: "789 Brickell Avenue, Unit 3201",
    city: "Miami",
    state: "FL",
    zip: "33131",
    community: "Brickell",
    price: 1650000,
    pricePerSqFt: 1065,
    status: "For Sale",
    type: "Condominium",
    beds: 3,
    baths: 3,
    halfBaths: 1,
    sqft: 1550,
    yearBuilt: 2019,
    description:
      "A high-floor corner residence with unobstructed panoramic views of Biscayne Bay, the Miami River, and the downtown skyline. White-oak millwork, marble finishes, and private elevator entry define the interior, while full-service amenities complete the lifestyle.",
    features: [
      "Private Elevator",
      "Floor-to-Ceiling Glass",
      "Marble Floors",
      "Italian Cabinetry",
      "24/7 Concierge",
      "Rooftop Pool",
      "Valet Parking",
      "Fitness Center",
    ],
    image: "/images/property-3.jpg",
    gallery: ["/images/property-3.jpg"],
    lat: 25.765,
    lng: -80.192,
    featured: true,
  },
  {
    id: "4",
    slug: "101-ocean-dr-6c-miami-beach",
    title: "Ocean Drive Art Deco Residence",
    address: "101 Ocean Drive, Unit 6C",
    city: "Miami Beach",
    state: "FL",
    zip: "33139",
    community: "Miami Beach",
    price: 5400,
    status: "For Rent",
    type: "Condominium",
    beds: 2,
    baths: 2,
    sqft: 1180,
    yearBuilt: 1939,
    description:
      "A beautifully renovated two-bedroom in a historic Art Deco building on Ocean Drive. Terrazzo floors, impact windows, and a wrap-around balcony overlooking Lummus Park and the Atlantic. Steps from South Beach's best dining and entertainment.",
    features: [
      "Ocean Views",
      "Wrap-Around Balcony",
      "Terrazzo Floors",
      "Impact Windows",
      "Full-Service Building",
      "Rooftop Deck",
      "Walk to Beach",
    ],
    image: "/images/property-4.jpg",
    gallery: ["/images/property-4.jpg"],
    lat: 25.777,
    lng: -80.132,
    featured: true,
  },
  {
    id: "5",
    slug: "202-sunny-isles-blvd-2804-sunny-isles-beach",
    title: "Oceanfront Penthouse Collection",
    address: "202 Sunny Isles Boulevard, Unit 2804",
    city: "Sunny Isles Beach",
    state: "FL",
    zip: "33160",
    community: "Sunny Isles Beach",
    price: 3950000,
    pricePerSqFt: 1420,
    status: "For Sale",
    type: "Penthouse",
    beds: 4,
    baths: 5,
    halfBaths: 1,
    sqft: 2780,
    yearBuilt: 2023,
    description:
      "A sky-rise penthouse with direct ocean views from every principal room. Private rooftop terrace with summer kitchen and plunge pool, plus access to a five-star amenity program including beach service, spa, and signature restaurant.",
    features: [
      "Private Rooftop Terrace",
      "Plunge Pool",
      "Direct Ocean Views",
      "Private Elevator Foyer",
      "Smart Home",
      "Beach Service",
      "Resort Amenities",
    ],
    image: "/images/property-5.jpg",
    gallery: ["/images/property-5.jpg"],
    lat: 25.941,
    lng: -80.123,
    featured: true,
  },
  {
    id: "6",
    slug: "303-old-cutler-rd-pinecrest",
    title: "Pinecrest Family Estate",
    address: "303 Old Cutler Road",
    city: "Pinecrest",
    state: "FL",
    zip: "33156",
    community: "Pinecrest",
    price: 2195000,
    pricePerSqFt: 680,
    status: "For Sale",
    type: "Single Family",
    beds: 5,
    baths: 4,
    sqft: 4620,
    lotSize: 23400,
    yearBuilt: 2003,
    description:
      "A gracefully updated traditional family home on over half an acre in the heart of Pinecrest. A generous primary suite, open kitchen-family room, pool, and screened patio overlook lush tropical landscaping, with top-rated schools moments away.",
    features: [
      "Screened Patio",
      "Heated Pool & Spa",
      "Outdoor Kitchen",
      "Whole-Home Generator",
      "3-Car Garage",
      "Mature Landscaping",
      "Top-Rated Schools",
    ],
    image: "/images/property-6.jpg",
    gallery: ["/images/property-6.jpg"],
    lat: 25.667,
    lng: -80.308,
    featured: true,
  },
  {
    id: "7",
    slug: "404-fisher-island-dr-fisher-island",
    title: "Fisher Island Bayfront Villa",
    address: "404 Fisher Island Drive",
    city: "Fisher Island",
    state: "FL",
    zip: "33109",
    community: "Fisher Island",
    price: 7800000,
    status: "For Sale",
    type: "Villa",
    beds: 4,
    baths: 5,
    halfBaths: 1,
    sqft: 4100,
    yearBuilt: 1995,
    description:
      "An exclusive bayfront villa on Fisher Island, offering private golf cart access, 24/7 security, ferry service, and access to the island's renowned club. Wide water views, a private pool, and sophisticated finishes throughout.",
    features: [
      "Private Pool",
      "Bay Views",
      "Golf Cart Garage",
      "Marina Access",
      "Private Beach Club",
      "24/7 Security",
    ],
    image: "/images/property-1.jpg",
    featured: false,
  },
  {
    id: "8",
    slug: "505-bal-harbour-blvd-bal-harbour",
    title: "Bal Harbour Oceanfront Condo",
    address: "505 Bal Harbour Boulevard, Unit 1102",
    city: "Bal Harbour",
    state: "FL",
    zip: "33154",
    community: "Bal Harbour",
    price: 8500,
    status: "For Rent",
    type: "Condominium",
    beds: 3,
    baths: 3,
    sqft: 1950,
    yearBuilt: 2015,
    description:
      "Turnkey oceanfront residence in Bal Harbour's most exclusive full-service building. Direct beach access, world-class dining on-site, and premium finishes throughout.",
    features: [
      "Ocean Views",
      "Direct Beach Access",
      "Valet",
      "Concierge",
      "Pool & Beach Service",
      "Walk to Shops at Bal Harbour",
    ],
    image: "/images/property-5.jpg",
    featured: false,
  },
  {
    id: "9",
    slug: "606-doral-blvd-doral",
    title: "Doral Modern Family Home",
    address: "606 Doral Boulevard",
    city: "Doral",
    state: "FL",
    zip: "33178",
    community: "Doral",
    price: 1150000,
    status: "For Sale",
    type: "Single Family",
    beds: 4,
    baths: 3,
    sqft: 2890,
    lotSize: 8400,
    yearBuilt: 2016,
    description:
      "A bright and modern family home in Doral, ideal for buyers seeking a contemporary layout, resort-style amenities, and A-rated schools. Open kitchen, impact windows, and a generous backyard with summer kitchen.",
    features: [
      "Impact Windows",
      "Summer Kitchen",
      "Pool",
      "Community Amenities",
      "A-Rated Schools",
    ],
    image: "/images/property-6.jpg",
    featured: false,
  },
];

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getPropertiesByCommunity(community: string): Property[] {
  return properties.filter((p) => p.community === community);
}

export function formatPrice(price: number, status?: PropertyStatus): string {
  if (status === "For Rent") {
    return `$${price.toLocaleString()}/mo`;
  }
  return `$${price.toLocaleString()}`;
}
