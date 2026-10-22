import Link from "next/link"
import { ArrowRight, ArrowUpRight, FileText, Landmark, ListChecks, Wallet } from "lucide-react"
import { countries, faqs, illustrative, pathways, resources, steps } from "@/data/immigration"
import { FaqList } from "@/components/individuals/faq-list"
import { Pricing } from "@/components/individuals/pricing"
import { ScoreBar, StatusPill } from "@/components/ui/fit"
import { statusFor } from "@/lib/match"

const directory = [
  ["germany", "eu-blue-card"],
  ["germany", "opportunity-card"],
  ["canada", "express-entry"],
  ["canada", "provincial-nominee"],
  ["ireland", "critical-skills"],
  ["ireland", "general-employment-permit"],
  ["united-kingdom", "skilled-worker"],
  ["united-kingdom", "global-talent"],
] as const

const audiences = [
  {
    href: "/assessment",
    kicker: "For individuals",
    title: "See where you stand",
    text: "One profile. A score for Germany, Canada, Ireland, and the UK, with the gaps and the next step.",
  },
  {
    href: "/businesses",
    kicker: "For businesses",
    title: "People you hire",
    text: "Send someone on your team to compare those four countries. Employer tools are on the way.",
  },
  {
    href: "/countries",
    kicker: "Four countries",
    title: "Start with a destination",
    text: "Read Germany, Canada, Ireland, or the United Kingdom, then check how your profile lines up.",
  },
]

const benefits = [
  { icon: ListChecks, title: "A score you can read", text: "0 to 100, with the reasons, the gaps, and a next step. It is a preliminary fit, not a promise of approval." },
  { icon: Landmark, title: "The official page, linked", text: "Every route points to the authority that publishes it, with the day the link was last checked." },
  { icon: Wallet, title: "Clarity before you spend", text: "See the gaps while tests, translations, and other costs are still a choice." },
]

function cellBorder(index: number, total: number) {
  const lastRow = index >= total - (total % 2 === 0 ? 2 : 1)
  return [
    "border-[#e4d9c8]",
    index % 2 === 0 ? "sm:border-r" : "",
    index < total - 1 ? "border-b" : "",
    lastRow ? "sm:border-b-0" : "",
  ].filter(Boolean).join(" ")
}

export function IndividualsExperience() {
  const routes = directory
    .map(([countrySlug, slug]) => pathways.find((pathway) => pathway.countrySlug === countrySlug && pathway.slug === slug))
    .filter((pathway) => pathway !== undefined)

  const exampleRows = illustrative.rows.map((row) => {
    const country = countries.find((item) => item.name === row.country)
    const pathway = pathways.find((item) => item.countrySlug === country?.slug && item.name === row.pathway)
    return {
      ...row,
      flag: country?.flag ?? "",
      href: country && pathway ? `/pathways/${country.slug}/${pathway.slug}` : "/pathways",
      status: statusFor(row.score),
    }
  })

  return (
    <>
      <section className="bg-[#f3f6f1]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-[#1e4638] px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">FOR INDIVIDUALS</p>
            <h1 className="mt-6 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-[#1c1b19] sm:text-6xl lg:text-7xl">Here for the journey</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#3a362f]">A clear path to Germany, Canada, Ireland, or the UK. See where you stand, then leave with a plan you can follow.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/assessment" className="inline-flex min-h-12 items-center rounded-full bg-[#f2a900] px-6 py-3.5 text-sm font-bold text-[#111827] transition hover:bg-[#e19c00]">
                Start your free assessment
                <ArrowRight className="ml-2" size={16} aria-hidden="true" />
              </Link>
              <Link href="#get-started" className="inline-flex min-h-12 items-center rounded-full px-4 py-3.5 text-sm font-medium text-[#1e4638] underline-offset-4 hover:underline">
                Explore pathways
              </Link>
            </div>
          </div>
          <img src="/images/journey.jpg" alt="Three adults walking together along a coastal path" className="aspect-[4/5] w-full rounded-[28px] object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {audiences.map((item) => (
            <Link key={item.href} href={item.href} className="group flex min-h-56 flex-col justify-between rounded-[28px] border border-[#e4d9c8] bg-[#fffcf8] p-6 transition hover:border-[#1e4638]">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">{item.kicker.toUpperCase()}</p>
                <h2 className="mt-4 font-serif text-3xl tracking-[-0.03em]">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#5e594f]">{item.text}</p>
              </div>
              <ArrowUpRight className="mt-6 text-[#1e4638] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section id="get-started" className="scroll-mt-24 bg-[#fffcf8]">
        <div className="mx-auto max-w-[980px] px-5 py-20 text-center lg:px-8">
          <p className="inline-flex rounded-full border border-[#1e4638] px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">FOUR COUNTRIES</p>
          <h2 className="mt-6 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">Get started</h2>
          <p className="mx-auto mt-4 max-w-lg text-[#4e4940]">The routes people compare first for work and skilled migration. Each one links to the official source.</p>
          <ul className="mt-10 grid overflow-hidden rounded-[28px] border border-[#d9cdb6] bg-white text-left sm:grid-cols-2">
            {routes.map((pathway, index) => {
              const country = countries.find((item) => item.slug === pathway.countrySlug)
              return (
                <li key={`${pathway.countrySlug}-${pathway.slug}`} className={cellBorder(index, routes.length)}>
                  <Link href={`/pathways/${pathway.countrySlug}/${pathway.slug}`} className="flex min-h-[76px] items-center justify-between gap-4 px-5 py-4 transition hover:bg-[#f6f1e7] sm:px-6">
                    <span className="flex items-center gap-3">
                      <FileText className="shrink-0 text-[#1e4638]" size={18} aria-hidden="true" />
                      <span>
                        <span className="block text-base tracking-[-0.02em]">{pathway.name}</span>
                        <span className="mt-0.5 block text-sm text-[#5e594f]">{country?.name}</span>
                      </span>
                    </span>
                    <ArrowRight className="shrink-0 text-[#1e4638]" size={18} aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>
          <p className="mt-6 text-sm text-[#5e594f]">
            Not sure which route to open?{" "}
            <Link href="/assessment" className="font-medium text-[#1e4638] underline underline-offset-2">Start with your profile.</Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-8 lg:px-8" aria-label="How an assessment works">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="rounded-[24px] bg-[#f6f1e7] p-5">
              <p className="font-serif text-3xl tracking-[-0.04em] text-[#1e4638]">{step.n}</p>
              <p className="mt-3 text-lg tracking-[-0.02em]">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#5e594f]">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">WHERE YOU CAN GO</p>
        <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Four countries, one clear view</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <Link key={country.slug} href={`/countries/${country.slug}`} className="group flex min-h-64 flex-col rounded-[24px] bg-[#f3efe6] p-5 transition hover:bg-[#efe6d6]">
              <span className="flex items-center justify-between">
                <span className="text-2xl" aria-hidden="true">{country.flag}</span>
                <ArrowUpRight className="text-[#1e4638] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} aria-hidden="true" />
              </span>
              <span className="mt-8 font-serif text-3xl tracking-[-0.03em]">{country.name}</span>
              <span className="mt-3 text-sm leading-relaxed text-[#5e594f]">{country.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#e7f0e4]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="max-w-md font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Built for the journey ahead</h2>
            <img src="/images/hero.jpg" alt="Aerial view of green fields crossed by narrow paths" className="mt-8 aspect-[4/5] w-full rounded-[28px] object-cover sm:aspect-[16/10] lg:aspect-[4/5]" />
          </div>
          <ul className="grid gap-8">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1e4638]">
                  <benefit.icon size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-lg tracking-[-0.02em]">{benefit.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-[#4e4940]">{benefit.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8" aria-labelledby="example-heading">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">EXAMPLE</p>
        <h2 id="example-heading" className="mt-3 max-w-2xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">A clear plan, in one view</h2>
        <p className="mt-4 max-w-xl text-[#5e594f]">An example profile, not your result. Your assessment uses what you type.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {exampleRows.map((row) => (
            <Link key={row.country} href={row.href} className="rounded-[28px] border border-[#e4d9c8] bg-[#fffcf8] p-6 transition hover:border-[#1e4638]">
              <p className="text-sm text-[#5e594f]">
                <span aria-hidden="true" className="mr-1.5">{row.flag}</span>
                {row.country}
              </p>
              <p className="mt-3 font-serif text-6xl tracking-[-0.04em]">
                {row.score}
                <span className="text-2xl text-[#6a645a]">/100</span>
              </p>
              <div className="mt-4">
                <ScoreBar score={row.score} status={row.status} />
              </div>
              <div className="mt-4">
                <StatusPill status={row.status} />
              </div>
              <p className="mt-3 text-sm text-[#5e594f]">{row.pathway}</p>
            </Link>
          ))}
        </div>
      </section>

      <Pricing />

      <section className="mx-auto max-w-[860px] px-5 py-20 lg:px-8">
        <h2 className="font-serif text-5xl tracking-[-0.04em] sm:text-6xl">Got questions? We’re here.</h2>
        <div className="mt-8">
          <FaqList items={faqs} />
        </div>
        <Link href="/faqs" className="mt-6 inline-flex items-center text-sm font-medium text-[#1e4638]">
          Find more answers
          <ArrowRight className="ml-2" size={16} aria-hidden="true" />
        </Link>
      </section>

      <section className="border-t border-[#e4d9c8] bg-[#fffcf8]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-5xl tracking-[-0.04em] sm:text-6xl">Guides for the road ahead</h2>
            <Link href="/resources" className="hidden text-sm font-medium text-[#1e4638] sm:inline">
              All guides
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {resources.slice(0, 3).map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group flex h-full flex-col rounded-[24px] bg-[#f3efe6] p-6 transition hover:bg-[#efe6d6]">
                <span className="flex items-center justify-between text-[#1e4638]">
                  <span className="text-[11px] font-semibold tracking-[0.16em]">{resource.category.toUpperCase()}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-serif text-2xl leading-tight tracking-[-0.03em]">{resource.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5e594f]">{resource.summary}</p>
                <span className="mt-6 text-sm font-medium text-[#1e4638]">{resource.readTime} read</span>
              </Link>
            ))}
          </div>
          <Link href="/resources" className="mt-6 inline-flex text-sm font-medium text-[#1e4638] sm:hidden">
            All guides
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 rounded-[32px] bg-[#1e4638] px-7 py-12 text-[#f6f1e7] sm:px-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#d7e6c8]">START YOUR JOURNEY</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-6xl">Take the first step</h2>
            <p className="mt-4 max-w-md text-[#d7e6c8]">A few questions. A clearer picture of Germany, Canada, Ireland, and the UK.</p>
          </div>
          <Link href="/assessment" className="inline-flex min-h-12 items-center rounded-full bg-[#f2a900] px-6 py-3.5 text-sm font-bold text-[#111827] hover:bg-[#e19c00]">
            See if you qualify
          </Link>
        </div>
      </section>
    </>
  )
}
