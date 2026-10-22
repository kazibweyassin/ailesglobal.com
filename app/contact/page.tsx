import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { PageIntro } from "@/components/site/page-intro"

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us the country and the pathway you have in mind. We will pick it up from there.",
  alternates: { canonical: "/contact" },
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams
  return (
    <div className="mx-auto max-w-[720px] px-5 pb-20 lg:px-8">
      <PageIntro eyebrow="CONTACT" title="We’re here when you want to talk." lede="Tell us the country and the pathway you have in mind. Write to hello@ailesglobal.com, or use the form and we will open your email." />
      <ContactForm interest={interest} />
    </div>
  )
}
