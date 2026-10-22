import type { Metadata } from "next"
import { faqs } from "@/data/immigration"
import { FaqList } from "@/components/individuals/faq-list"
import { PageIntro } from "@/components/site/page-intro"

export const metadata: Metadata = {
  title: "FAQs",
  description: "Straight answers about Ailes, your score, and how to take the next step.",
  alternates: { canonical: "/faqs" },
}

export default function FaqsPage() {
  return (
    <div className="mx-auto max-w-[800px] px-5 pb-20 lg:px-8">
      <PageIntro eyebrow="FAQS" title="Got questions? We’re here." lede="Straight answers about the assessment, your score, and how to use what you find. When a rule changes, the official page has the latest." />
      <FaqList items={faqs} />
    </div>
  )
}
