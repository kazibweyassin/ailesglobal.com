import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { countries } from "@/data/immigration"
import { PageIntro } from "@/components/site/page-intro"

export const metadata: Metadata = {
  title: "Countries",
  description: "Germany, Canada, Ireland, and the United Kingdom. Four countries, one clear view.",
  alternates: { canonical: "/countries" },
}

export default function CountriesPage() {
  return (
    <div className="pb-20">
      <PageIntro eyebrow="COUNTRIES" title="Four countries. One clear view." lede="Germany, Canada, Ireland, and the UK. Open a country to see the paths people take, who they tend to fit, and the official page." />
      <div className="mx-auto grid max-w-[1180px] gap-4 px-5 sm:grid-cols-2 lg:px-8">
        {countries.map((country) => (
          <Link key={country.slug} href={`/countries/${country.slug}`} className="group flex h-full flex-col rounded-[28px] border border-[#e4d9c8] bg-[#fffcf8] p-6 transition hover:-translate-y-0.5 hover:border-[#1e4638]">
            <p className="text-3xl" aria-hidden="true">{country.flag}</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em]">{country.name}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5e594f]">{country.summary}</p>
            <p className="mt-6 inline-flex items-center text-sm font-medium text-[#1e4638]">
              See the paths
              <ArrowRight className="ml-2 transition group-hover:translate-x-0.5" size={16} aria-hidden="true" />
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
