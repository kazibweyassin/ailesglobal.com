import { countries, faqs, pathways, resources } from "@/data/immigration"

export type SearchHit = { href: string; kind: string; title: string; text: string }

export function searchContent(query: string): SearchHit[] {
  const needle = query.trim().toLowerCase()
  if (needle.length < 2) return []
  const hits: SearchHit[] = []
  for (const country of countries) {
    const hay = `${country.name} ${country.summary} ${country.overview}`.toLowerCase()
    if (hay.includes(needle)) hits.push({ href: `/countries/${country.slug}`, kind: "Country", title: country.name, text: country.summary })
  }
  for (const pathway of pathways) {
    const country = countries.find((item) => item.slug === pathway.countrySlug)
    const hay = `${pathway.name} ${pathway.summary} ${pathway.description} ${country?.name ?? ""}`.toLowerCase()
    if (hay.includes(needle)) {
      hits.push({
        href: `/pathways/${pathway.countrySlug}/${pathway.slug}`,
        kind: "Pathway",
        title: `${country?.name ?? ""} — ${pathway.name}`,
        text: pathway.summary,
      })
    }
  }
  for (const resource of resources) {
    const hay = `${resource.title} ${resource.summary} ${resource.category}`.toLowerCase()
    if (hay.includes(needle)) hits.push({ href: `/resources/${resource.slug}`, kind: "Guide", title: resource.title, text: resource.summary })
  }
  for (const faq of faqs) {
    const hay = `${faq.question} ${faq.answer}`.toLowerCase()
    if (hay.includes(needle)) hits.push({ href: "/faqs", kind: "FAQ", title: faq.question, text: faq.answer })
  }
  return hits
}
