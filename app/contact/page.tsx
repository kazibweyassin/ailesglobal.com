import { ContactForm } from "@/components/contact/contact-form"
import { JsonLd } from "@/components/site/json-ld"
import { PageIntro } from "@/components/site/page-intro"
import { pageMeta, siteUrl } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Contact",
  description: "Tell us the country and the pathway you have in mind. We will pick it up from there.",
  path: "/contact",
})

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams
  return (
    <div className="mx-auto max-w-[720px] px-5 pb-20 lg:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Ailes Global",
          url: `${siteUrl}/contact`,
          description: "Tell us the country and the pathway you have in mind.",
          mainEntity: { "@id": `${siteUrl}/#organization` },
        }}
      />
      <PageIntro eyebrow="CONTACT" title="We’re here when you want to talk." lede="Tell us the country and the pathway you have in mind. Write to hello@ailesglobal.com, or use the form and we will open your email." />
      <ContactForm interest={interest} />
    </div>
  )
}
