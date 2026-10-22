import type { Metadata } from "next"
import Link from "next/link"
import { resources } from "@/data/immigration"
import { PageIntro } from "@/components/site/page-intro"

export const metadata: Metadata = {
  title: "Resources",
  description: "Short guides for the road to Germany, Canada, Ireland, and the UK.",
  alternates: { canonical: "/resources" },
}

export default function ResourcesPage() {
  return (
    <div className="pb-20">
      <PageIntro eyebrow="RESOURCES" title="Guides for the road ahead." lede="Short reads for Germany, Canada, Ireland, and the UK. Every pathway also links to the official page." />
      <div className="mx-auto grid max-w-[1180px] gap-4 px-5 md:grid-cols-2 lg:px-8">
        {resources.map((resource) => (
          <Link key={resource.slug} href={`/resources/${resource.slug}`} className="flex h-full flex-col rounded-[28px] border border-[#e4d9c8] bg-[#fffcf8] p-6 transition hover:-translate-y-0.5 hover:border-[#1e4638]">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#1e4638]">{resource.category.toUpperCase()}</p>
            <h2 className="mt-3 text-2xl tracking-[-0.03em]">{resource.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5e594f]">{resource.summary}</p>
            <p className="mt-5 text-sm font-medium text-[#1e4638]">{resource.readTime} read</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
