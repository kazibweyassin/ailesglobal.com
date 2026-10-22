import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { countries, pathwaysFor } from "@/data/immigration"
import { FaqList } from "@/components/individuals/faq-list"

type Params = { slug: string }

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const country = countries.find((item) => item.slug === slug)
  if (!country) return {}
  return {
    title: `${country.name} immigration pathways`,
    description: country.overview,
    alternates: { canonical: `/countries/${country.slug}` },
  }
}

export default async function CountryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const country = countries.find((item) => item.slug === slug)
  if (!country) notFound()
  const routes = pathwaysFor(country.slug)

  return (
    <article className="mx-auto max-w-[1180px] px-5 py-14 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#1e4638]">COUNTRY</p>
      <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em] sm:text-6xl">
        <span aria-hidden="true">{country.flag} </span>
        {country.name}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#4e4940]">{country.overview}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={`/assessment?focus=${country.slug}`} className="rounded-full bg-[#1e4638] px-5 py-3 text-sm font-medium text-[#f6f1e7]">
          See if you qualify
        </Link>
        <a href={country.source.sourceUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[#1c1b19] px-5 py-3 text-sm font-medium">
          The official page
        </a>
      </div>

      <section className="mt-14">
        <h2 className="font-serif text-4xl tracking-[-0.03em]">Paths to consider</h2>
        <div className="mt-6 grid gap-4">
          {routes.map((pathway, index) => (
            <Link key={pathway.slug} href={`/pathways/${country.slug}/${pathway.slug}`} className="rounded-[24px] border border-[#e4d9c8] bg-[#fffcf8] p-6 hover:border-[#1e4638]">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1e4638]">0{index + 1}</p>
              <h3 className="mt-2 text-2xl tracking-[-0.03em]">{pathway.name}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5e594f]">{pathway.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">The work people look for</h2>
          <p className="mt-3 leading-relaxed text-[#4e4940]">{country.workOpportunities}</p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Who this often fits</h2>
          <ul className="mt-3 grid gap-2 text-[#4e4940]">
            {country.typicalProfiles.map((profile) => (
              <li key={profile}>{profile}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-3xl">What to confirm</h2>
        <ul className="mt-4 grid gap-2">
          {country.keyChecks.map((check) => (
            <li key={check} className="rounded-2xl bg-[#fffcf8] px-4 py-3 text-sm">
              {check}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="font-serif text-3xl">Questions people ask</h2>
        <div className="mt-4">
          <FaqList items={country.faqs} />
        </div>
      </section>

      <section className="mt-14 rounded-[28px] bg-[#efe6d6] p-6">
        <h2 className="text-xl">The official page</h2>
        <p className="mt-2 text-sm leading-relaxed">
          {country.source.sourceName}. Last checked {country.source.lastVerifiedAt}. {country.source.reviewStatus === "VERIFIED" ? "Checked." : "Worth a fresh look."}
        </p>
        <a className="mt-3 inline-flex text-sm font-medium text-[#1e4638] underline" href={country.source.sourceUrl} target="_blank" rel="noreferrer">
          {country.source.sourceUrl}
        </a>
      </section>
    </article>
  )
}
