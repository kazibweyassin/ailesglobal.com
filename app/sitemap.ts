import type { MetadataRoute } from "next"
import { countries, pathways, resources } from "@/data/immigration"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ailesglobal.com"
  const staticRoutes = ["", "/services/individuals", "/countries", "/pathways", "/assessment", "/resources", "/about", "/faqs", "/contact", "/businesses", "/search", "/dashboard"]
  return [
    ...staticRoutes.map((path) => ({ url: `${base}${path || "/"}`, lastModified: new Date("2026-10-08") })),
    ...countries.map((country) => ({ url: `${base}/countries/${country.slug}`, lastModified: new Date(country.source.lastVerifiedAt) })),
    ...pathways.map((pathway) => ({ url: `${base}/pathways/${pathway.countrySlug}/${pathway.slug}`, lastModified: new Date(pathway.source.lastVerifiedAt) })),
    ...resources.map((resource) => ({ url: `${base}/resources/${resource.slug}`, lastModified: new Date("2026-10-08") })),
  ]
}
