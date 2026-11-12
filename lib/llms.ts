import { countries, faqs, pathways, resources } from "@/data/immigration"
import { scholarshipsUrl } from "@/lib/links"
import { siteUrl } from "@/lib/seo"

function link(title: string, path: string, note: string) {
  return `- [${title}](${siteUrl}${path}): ${note}`
}

export function renderLlmsTxt() {
  const countryLines = countries.map((country) =>
    link(country.name, `/countries/${country.slug}`, `${country.summary} Official source: ${country.source.sourceName} (${country.source.sourceUrl}). Last checked ${country.source.lastVerifiedAt}.`),
  )
  const pathwayLines = pathways.map((pathway) => {
    const country = countries.find((item) => item.slug === pathway.countrySlug)
    return link(
      `${pathway.name}, ${country?.name ?? pathway.countrySlug}`,
      `/pathways/${pathway.countrySlug}/${pathway.slug}`,
      `${pathway.summary} Official source: ${pathway.source.sourceName} (${pathway.source.sourceUrl}). Last checked ${pathway.source.lastVerifiedAt}.`,
    )
  })
  const guideLines = resources.map((resource) => link(resource.title, `/resources/${resource.slug}`, `${resource.summary} ${resource.readTime} read.`))
  const faqLines = faqs.map((item) => `${item.question} ${item.answer}`)

  return `# Ailes Global

> Ailes helps you compare pathways to Germany, Canada, Ireland, and the United Kingdom from one profile, and leave with a score, the gaps, and a plan.

Ailes is a preliminary pathway assessment. You share education, work, language, family, funds, and goals. The result is a score from 0 to 100 for each country, with the reasons, the gaps, and the next steps. A score reads as strong potential, potential, needs improvement, or limited fit.

Each country and pathway page names the authority that publishes the route, the day the link was last checked, and whether it still needs a closer look. When a threshold, a list, or a fee matters, use that official page.

Contact: hello@ailesglobal.com

${faqLines.join("\n\n")}

## Start here

${link("Home", "/", "The assessment for individuals. One profile, four countries, and a plan you can follow.")}
${link("See if you qualify", "/assessment", "Questions about education, work, language, family, funds, and goals.")}
${link("Countries", "/countries", "Germany, Canada, Ireland, and the United Kingdom in one view.")}
${link("Pathways", "/pathways", "The routes people take to work and live in those four countries.")}
${link("Resources", "/resources", "Short guides on scores, costs, and the main routes.")}
${link("FAQs", "/faqs", "What Ailes is, what the score means, and how current the pages are.")}
${link("About", "/about", "How Ailes compares the four countries from one profile.")}
${link("For businesses", "/businesses", "For employers helping the people they hire see where they stand.")}
- [Scholarships](${scholarshipsUrl}): Find scholarships first, then your university. The Ailes scholarship platform for African students.
${link("Contact", "/contact", "Write with the country and the pathway in mind. hello@ailesglobal.com.")}

## Countries

${countryLines.join("\n")}

## Pathways

${pathwayLines.join("\n")}

## Guides

${guideLines.join("\n")}

## Optional

${link("For individuals", "/services/individuals", "The same assessment as the homepage, for people who arrive from the services path.")}
${link("Search", "/search", "Search countries, pathways, guides, and questions on this site.")}
`
}
