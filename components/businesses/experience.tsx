import Link from "next/link"
import { ArrowRight, ArrowUpRight, FileText, Landmark, Users } from "lucide-react"
import { countries, resources } from "@/data/immigration"
import { FaqList } from "@/components/individuals/faq-list"

const features = [
  { title: "One view. Four countries.", text: "A candidate sees Germany, Canada, Ireland, and the UK from one profile, with a score, the gaps, and the route that rose." },
  { title: "The routes a hire meets.", text: "Blue Card, Critical Skills, Skilled Worker, Scale-up. Sponsorship is named where the route usually asks for it." },
  { title: "The official page, linked.", text: "Every route points to the authority that publishes it. Ailes is not the government, and a score is not an approval." },
]

const solutions = [
  { href: "/assessment", title: "A candidate assessment", text: "Send someone a few questions. They leave with a ranked set of routes and a plan." },
  { href: "/countries/germany", title: "Germany", text: "EU Blue Card, Skilled Worker, and the Opportunity Card, for people who already have an offer and people who do not." },
  { href: "/countries/canada", title: "Canada", text: "Express Entry, Federal Skilled Worker, and provincial routes, next to the IRCC page." },
  { href: "/countries/ireland", title: "Ireland", text: "Critical Skills and the General Employment Permit, kept separate from permission to live there." },
  { href: "/countries/united-kingdom", title: "United Kingdom", text: "Skilled Worker, Global Talent, and Scale-up, with the sponsor called out where the route needs one." },
  { href: "/contact?interest=employer", title: "Talk to Ailes", text: "Tell us how many people you are hiring, and which of the four countries. Employer tools are on the way." },
]

const faqs = [
  {
    question: "Can Ailes sponsor someone for me?",
    answer: "No. A sponsor licence, a job offer, and the application sit with you and the official authority. Ailes shows which routes usually need a sponsor, and links the page that publishes the rule.",
  },
  {
    question: "What can I send a candidate today?",
    answer: "The assessment. They answer questions about education, work, language, and where they want to go, then see a preliminary fit for Germany, Canada, Ireland, and the UK.",
  },
  {
    question: "Do you manage cases for an HR team?",
    answer: "Not yet. A person can save a plan on their own device. A shared view for several hires is not on sale. Write to us if you want to hear when it is.",
  },
  {
    question: "Which countries does this cover?",
    answer: "Germany, Canada, Ireland, and the United Kingdom. Other destinations are not in this version.",
  },
  {
    question: "Is this legal advice?",
    answer: "No. The assessment is preliminary information from what a person types. It does not guarantee a visa, a permit, or a job.",
  },
]

const insightSlugs = ["uk-sponsorship-plain", "ireland-critical-skills-checks", "germany-pathways-compared"]

export function BusinessExperience() {
  const insights = insightSlugs.map((slug) => resources.find((item) => item.slug === slug)).filter((item) => item !== undefined)

  return (
    <>
      <section className="bg-[#f3f6f1]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-[#1e4638] px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">FOR BUSINESSES</p>
            <h1 className="mt-6 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Grow beyond borders</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#3a362f]">Help the people you hire see where they stand for Germany, Canada, Ireland, and the UK, before you spend on a sponsor or a start date.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?interest=employer" className="inline-flex min-h-12 items-center rounded-full bg-[#f2a900] px-6 py-3.5 text-sm font-bold text-[#111827] transition hover:bg-[#e19c00]">
                Get in touch
                <ArrowRight className="ml-2" size={16} aria-hidden="true" />
              </Link>
              <Link href="/assessment" className="inline-flex min-h-12 items-center rounded-full px-4 py-3.5 text-sm font-medium text-[#1e4638] underline-offset-4 hover:underline">
                Open the assessment
              </Link>
            </div>
          </div>
          <img src="/images/journey.jpg" alt="Three adults walking together along a coastal path" className="aspect-[4/5] w-full rounded-[28px] object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">WHAT A HIRE SEES</p>
        <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">A clear read before the offer gets complicated</h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title} className="rounded-[28px] bg-[#f6f1e7] p-6">
              <p className="font-serif text-3xl leading-tight tracking-[-0.03em]">{feature.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#5e594f]">{feature.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#fffcf8]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">FOUR COUNTRIES</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Where your next hire might go</h2>
          <p className="mt-4 max-w-xl text-[#4e4940]">The same destinations as the personal assessment. Pick a country, or send the person straight to the questions.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <Link key={item.href} href={item.href} className="group flex min-h-56 flex-col rounded-[24px] bg-[#f3efe6] p-6 transition hover:bg-[#efe6d6]">
                <span className="flex items-center justify-between text-[#1e4638]">
                  <FileText size={18} aria-hidden="true" />
                  <ArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} aria-hidden="true" />
                </span>
                <span className="mt-8 font-serif text-2xl tracking-[-0.03em]">{item.title}</span>
                <span className="mt-3 text-sm leading-relaxed text-[#5e594f]">{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e7f0e4]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Built around the hire, not the form</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#3a362f]">Ailes starts with the person. They see the fit. You see which route usually needs a sponsor, a salary check, or a licence.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {countries.map((country) => (
              <li key={country.slug}>
                <Link href={`/countries/${country.slug}`} className="flex h-full flex-col rounded-[24px] bg-white p-5 transition hover:bg-[#f6f1e7]">
                  <span className="text-2xl" aria-hidden="true">{country.flag}</span>
                  <span className="mt-4 text-xl tracking-[-0.02em]">{country.name}</span>
                  <span className="mt-2 text-sm leading-relaxed text-[#5e594f]">{country.workOpportunities}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[860px] px-5 py-20 lg:px-8">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">QUESTIONS FROM TEAMS</p>
        <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">Got questions? We’re here.</h2>
        <div className="mt-8">
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="border-t border-[#e4d9c8] bg-[#fffcf8]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">READ BEFORE YOU HIRE</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Guides for the route</h2>
            </div>
            <Link href="/resources" className="hidden text-sm font-medium text-[#1e4638] sm:inline">All guides</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {insights.map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group flex h-full flex-col rounded-[24px] bg-[#f3efe6] p-6 transition hover:bg-[#efe6d6]">
                <span className="flex items-center justify-between text-[#1e4638]">
                  <Landmark size={18} aria-hidden="true" />
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-serif text-2xl leading-tight tracking-[-0.03em]">{resource.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5e594f]">{resource.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 rounded-[32px] bg-[#1e4638] px-7 py-12 text-[#f6f1e7] sm:px-12 lg:flex-row lg:items-center">
          <div>
            <Users className="text-[#d7e6c8]" size={22} aria-hidden="true" />
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-6xl">Tell us who you are hiring</h2>
            <p className="mt-4 max-w-md text-[#d7e6c8]">Name the country and the route. We will pick it up from there.</p>
          </div>
          <Link href="/contact?interest=employer" className="inline-flex min-h-12 items-center rounded-full bg-[#f2a900] px-6 py-3.5 text-sm font-bold text-[#111827] hover:bg-[#e19c00]">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
