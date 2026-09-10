import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Global Group Realty | Miami & South Florida Real Estate",
    template: "%s | Global Group Realty",
  },
  description:
    "Global Group Realty is a premier South Florida real estate brokerage specializing in buying, selling, and renting luxury and residential properties across Miami, Miami Beach, Brickell, Coral Gables, and surrounding communities.",
  keywords: [
    "Miami real estate",
    "South Florida realtor",
    "Miami homes for sale",
    "Miami luxury real estate",
    "Brickell real estate",
    "Coral Gables homes",
    "Miami Beach properties",
    "Global Group Realty",
  ],
  authors: [{ name: "Global Group Realty" }],
  creator: "Global Group Realty",
  publisher: "Global Group Realty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.globalgrouprealty.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.globalgrouprealty.com",
    siteName: "Global Group Realty",
    title: "Global Group Realty | Miami & South Florida Real Estate",
    description:
      "Premier South Florida real estate brokerage. Buy, sell, or rent properties across Miami and the surrounding communities with expert guidance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Group Realty | Miami & South Florida Real Estate",
    description:
      "Premier South Florida real estate brokerage serving Miami and surrounding communities.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Global Group Realty",
  description:
    "Premier South Florida real estate brokerage serving Miami, Miami Beach, Brickell, Coral Gables, and surrounding communities.",
  url: "https://www.globalgrouprealty.com",
  telephone: "+1-305-555-0123",
  areaServed: [
    { "@type": "City", name: "Miami" },
    { "@type": "City", name: "Miami Beach" },
    { "@type": "City", name: "Coral Gables" },
    { "@type": "City", name: "Brickell" },
    { "@type": "City", name: "Doral" },
    { "@type": "City", name: "Sunny Isles Beach" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  priceRange: "$$-$$$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[var(--color-warm-white)] text-[var(--color-text-primary)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
