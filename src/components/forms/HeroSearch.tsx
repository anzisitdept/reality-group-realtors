"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const propertyTypes = [
  "Any Type",
  "Single Family",
  "Condominium",
  "Townhouse",
  "Villa",
  "Penthouse",
  "Multi-Family",
];

const prices = [
  { label: "No Min", value: "" },
  { label: "$500k", value: "500000" },
  { label: "$750k", value: "750000" },
  { label: "$1M", value: "1000000" },
  { label: "$1.5M", value: "1500000" },
  { label: "$2M", value: "2000000" },
  { label: "$3M", value: "3000000" },
  { label: "$5M+", value: "5000000" },
];

const beds = ["Any", "1+", "2+", "3+", "4+", "5+"];
const baths = ["Any", "1+", "2+", "3+", "4+"];

interface Props {
  defaultIntent?: "buy" | "rent" | "sell";
}

export default function HeroSearch({ defaultIntent = "buy" }: Props) {
  const router = useRouter();
  const [intent, setIntent] = useState<"buy" | "rent" | "sell">(defaultIntent);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Any Type");
  const [minPrice, setMinPrice] = useState("");
  const [bedsVal, setBeds] = useState("Any");
  const [bathsVal, setBaths] = useState("Any");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (intent === "sell") {
      router.push("/sell");
      return;
    }
    params.set("status", intent === "rent" ? "For Rent" : "For Sale");
    if (location) params.set("location", location);
    if (type && type !== "Any Type") params.set("type", type);
    if (minPrice) params.set("minPrice", minPrice);
    if (bedsVal !== "Any") params.set("beds", bedsVal.replace("+", ""));
    if (bathsVal !== "Any") params.set("baths", bathsVal.replace("+", ""));
    router.push(`/properties?${params.toString()}`);
  }

  const baseTabClass =
    "px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-medium transition-colors";

  return (
    <form
      onSubmit={handleSearch}
      className="bg-[var(--color-warm-white)] border border-[var(--color-border)] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
    >
      {/* Intent tabs */}
      <div className="flex border-b border-[var(--color-border)]">
        {(["buy", "rent", "sell"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setIntent(t)}
            className={`${baseTabClass} ${
              intent === t
                ? "bg-[var(--color-charcoal)] text-[var(--color-warm-white)]"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]"
            } ${t !== "sell" ? "border-r border-[var(--color-border)]" : ""}`}
          >
            {t}
          </button>
        ))}
      </div>

      {intent === "sell" ? (
        <div className="p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-5 items-center">
          <div>
            <p className="text-lg font-serif mb-1">Ready to learn what your property is worth?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Request a free market valuation from our South Florida listing team.
            </p>
          </div>
          <button
            type="submit"
            className="btn-primary"
          >
            Request a Valuation
          </button>
        </div>
      ) : (
        <>
          <div className="p-5 md:p-6">
            <div className="mb-4">
              <label htmlFor="location" className="form-label">
                What are you looking for?
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, neighborhood, or ZIP code (e.g., Brickell, Miami Beach, 33139)"
                className="form-input text-base md:text-lg py-3"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="type" className="form-label">Property Type</label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-input appearance-none bg-no-repeat bg-right pr-8"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                    backgroundPosition: "calc(100% - 12px) center",
                  }}
                >
                  {propertyTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="price" className="form-label">Price</label>
                <select
                  id="price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="form-input appearance-none bg-no-repeat bg-right pr-8"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                    backgroundPosition: "calc(100% - 12px) center",
                  }}
                >
                  <option value="">Any Price</option>
                  {prices.slice(1).map((p) => (
                    <option key={p.value} value={p.value}>Min {p.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="beds" className="form-label">Beds</label>
                <select
                  id="beds"
                  value={bedsVal}
                  onChange={(e) => setBeds(e.target.value)}
                  className="form-input appearance-none bg-no-repeat bg-right pr-8"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                    backgroundPosition: "calc(100% - 12px) center",
                  }}
                >
                  {beds.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="baths" className="form-label">Baths</label>
                <select
                  id="baths"
                  value={bathsVal}
                  onChange={(e) => setBaths(e.target.value)}
                  className="form-input appearance-none bg-no-repeat bg-right pr-8"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                    backgroundPosition: "calc(100% - 12px) center",
                  }}
                >
                  {baths.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="px-5 pb-5 md:px-6 md:pb-6 flex justify-end">
            <button type="submit" className="btn-primary px-8">
              <Search size={16} strokeWidth={1.5} />
              Search
            </button>
          </div>
        </>
      )}
    </form>
  );
}
