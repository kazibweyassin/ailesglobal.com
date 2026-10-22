import type { Metadata } from "next"

export const siteUrl = "https://ailesglobal.com"
export const siteName = "Ailes Global"

export function clip(text: string, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= max) return clean
  const slice = clean.slice(0, max - 1)
  const sentence = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf("."))
  if (sentence > 80) return slice.slice(0, sentence + 1).trim()
  const space = slice.lastIndexOf(" ")
  return `${slice.slice(0, space > 80 ? space : slice.length).replace(/[,:;]\s*$/, "").trimEnd()}…`
}

export function pageMeta({
  title,
  description,
  path,
  index = true,
  absolute = false,
}: {
  title: string
  description: string
  path: string
  index?: boolean
  absolute?: boolean
}): Metadata {
  const descriptionText = clip(description)
  const socialTitle = title.includes(siteName) ? title : `${title} · ${siteName}`
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`
  return {
    title: absolute ? { absolute: title } : title,
    description: descriptionText,
    alternates: { canonical: path },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
    openGraph: {
      title: socialTitle,
      description: descriptionText,
      url,
      siteName,
      type: "website",
      locale: "en_US",
      images: [{ url: "/og", width: 1200, height: 630, alt: "Ailes Global. Pathways to Germany, Canada, Ireland, and the United Kingdom." }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: descriptionText,
      images: ["/og"],
    },
  }
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? siteUrl : `${siteUrl}${item.path}`,
    })),
  }
}

export function faqEntity(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}
