import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { countries } from "@/data/immigration"
import { PageIntro } from "@/components/site/page-intro"
import { countryPhotos } from "@/lib/photos"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Germany, Canada, Ireland, and the UK",
  description: "Four countries, one clear view. Open a country for the paths people take, who they tend to fit, and the official page.",
  path: "/countries",
})

export default function CountriesPage() {
  return (
    <div className="pb-20">
      <PageIntro eyebrow="COUNTRIES" title="Four countries. One clear view." lede="Germany, Canada, Ireland, and the UK. Open a country to see the paths people take, who they tend to fit, and the official page." />
      <div className="mx-auto grid max-w-[1180px] gap-4 px-5 sm:grid-cols-2 lg:px-8">
        {countries.map((country) => {
          const photo = countryPhotos[country.slug]
          return (
            <Link key={country.slug} href={`/countries/${country.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e4d9c8] bg-[#fffcf8] transition hover:-translate-y-0.5 hover:border-[#1e4638]">
              {photo ? <img src={photo.src} alt="" className="aspect-[16/10] w-full object-cover" /> : null}
              <span className="flex flex-1 flex-col p-6">
                <p className="text-3xl" aria-hidden="true">{country.flag}</p>
                <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em]">{country.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5e594f]">{country.summary}</p>
                <p className="mt-6 inline-flex items-center text-sm font-medium text-[#1e4638]">
                  See the paths
                  <ArrowRight className="ml-2 transition group-hover:translate-x-0.5" size={16} aria-hidden="true" />
                </p>
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
