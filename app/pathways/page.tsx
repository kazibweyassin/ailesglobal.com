import type { Metadata } from "next"
import Link from "next/link"
import { countries, pathways } from "@/data/immigration"
import { PageIntro } from "@/components/site/page-intro"

export const metadata: Metadata = {
  title: "Pathways",
  description: "The paths people take to work and live in Germany, Canada, Ireland, and the United Kingdom.",
  alternates: { canonical: "/pathways" },
}

export default function PathwaysPage() {
  return (
    <div className="pb-20">
      <PageIntro eyebrow="PATHWAYS" title="Paths people take to work and live abroad." lede="Open a route to see who it is for, what to have in place, and where the official rules live." />
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 lg:px-8">
        {countries.map((country) => (
          <section key={country.slug}>
            <h2 className="text-2xl tracking-[-0.03em]">
              {country.flag} {country.name}
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {pathways
                .filter((pathway) => pathway.countrySlug === country.slug)
                .map((pathway) => (
                  <Link key={pathway.slug} href={`/pathways/${country.slug}/${pathway.slug}`} className="flex h-full flex-col rounded-[24px] border border-[#e4d9c8] bg-[#fffcf8] p-5 transition hover:-translate-y-0.5 hover:border-[#1e4638]">
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#1e4638]">{pathway.category.toUpperCase()}</p>
                    <h3 className="mt-3 text-xl tracking-[-0.02em]">{pathway.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5e594f]">{pathway.summary}</p>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
