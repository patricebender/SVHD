import type { MetadataRoute } from "next";
import { disciplines } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  const now = new Date();

  const staticRoutes = [
    "",
    "/aktuelles",
    "/trainingsangebote",
    "/hundeplatz",
    "/terminkalender",
    "/kontakt",
    "/mitgliedschaft",
    "/platzordnung",
    "/vorstand",
  ];

  const disciplineRoutes = disciplines.map((d) => `/trainingsangebote/${d.slug}`);

  return [...staticRoutes, ...disciplineRoutes].map((path) => ({
    url: `${base}${path}/`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
