import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { communities } from "@/data/communities";
import { team } from "@/data/team";
import { insights } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.globalgrouprealty.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/buy",
    "/sell",
    "/rent",
    "/properties",
    "/communities",
    "/about",
    "/team",
    "/insights",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const propertyRoutes: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${baseUrl}/properties/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const communityRoutes: MetadataRoute.Sitemap = communities.map((c) => ({
    url: `${baseUrl}/communities/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const teamRoutes: MetadataRoute.Sitemap = team.map((m) => ({
    url: `${baseUrl}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified: new Date(a.updatedAt || a.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...propertyRoutes, ...communityRoutes, ...teamRoutes, ...insightRoutes];
}
