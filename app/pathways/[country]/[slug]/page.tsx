import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCountry, getPathway, pathways } from "@/data/immigration"
import { SaveButton } from "@/components/pathways/save-button"

type Params = { country: string; slug: string }

export function generateStaticParams() {
  return pathways.map((pathway) => ({ country: pathway.countrySlug, slug: pathway.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { country: countrySlug, slug } = await params
  const pathway = getPathway(countrySlug, slug)
  const country = getCountry(countrySlug)
  if (!pathway || !country) return {}
  return {
    title: `${pathway.name} — ${country.name}`,
    description: pathway.summary,
    alternates: { canonical: `/pathways/${country.slug}/${pathway.slug}` },
  }
}

export default async function PathwayPage({ params }: { params: Promise<Params> }) {
  const { country: countrySlug, slug } = await params
  const pathway = getPathway(countrySlug, slug)
  const country = getCountry(countrySlug)
  if (!pathway || !country) notFound()

  return (
    <article className="mx-auto max-w-[900px] px-5 py-14 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#1e4638]">
        <Link href={`/countries/${country.slug}`} className="hover:underline">
          {country.name}
        </Link>
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em] sm:text-6xl">{pathway.name}</h1>
      <p className="mt-5 text-lg leading-relaxed text-[#4e4940]">{pathway.description}</p>
      <p className="mt-4 text-[#3a362f]">Who it&apos;s for: {pathway.designedFor}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={`/assessment?focus=${country.slug}`} className="rounded-full bg-[#1e4638] px-5 py-3 text-sm font-medium text-[#f6f1e7]">
          See if you qualify
        </Link>
        <SaveButton countrySlug={country.slug} pathwaySlug={pathway.slug} />
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">What to have in place</h2>
        <ul className="mt-4 grid gap-2">
          {pathway.requirements.map((item) => (
            <li key={item} className="rounded-2xl bg-[#fffcf8] px-4 py-3 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">Papers to gather</h2>
          <ul className="mt-4 grid gap-2 text-sm leading-relaxed">
            {pathway.documents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Your next steps</h2>
          <ol className="mt-4 grid gap-2 text-sm leading-relaxed">
            {pathway.nextSteps.map((item, index) => (
              <li key={item}>
                {index + 1}. {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-10 rounded-[28px] bg-[#efe6d6] p-6">
        <h2 className="text-xl">The official page</h2>
        <p className="mt-2 text-sm leading-relaxed">
          {pathway.source.sourceName}. Last checked {pathway.source.lastVerifiedAt}. {pathway.source.reviewStatus === "VERIFIED" ? "Checked." : "Worth a fresh look."}
        </p>
        <a className="mt-3 inline-block break-all text-sm font-medium text-[#1e4638] underline" href={pathway.source.sourceUrl} target="_blank" rel="noreferrer">
          {pathway.source.sourceUrl}
        </a>
        <p className="mt-4 text-sm">Confirm the current rule here before you apply.</p>
      </section>
    </article>
  )
}
