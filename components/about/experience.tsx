import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { countries, steps } from "@/data/immigration"

const beliefs = [
  { title: "Your story first", text: "Education, work, language, family, funds, and where you want to go. The routes come after that, not before." },
  { title: "A reason for every score", text: "You can see why a path rose or fell. A number with no explanation is not a plan." },
  { title: "The official page stays in charge", text: "Each route links to the authority that publishes it, with the day we last checked the link. If we and that page disagree, the page wins." },
]

const bands = [
  { range: "75–100", label: "Strong potential", text: "Several signals on that route line up. Confirm the live rule before you spend." },
  { range: "55–74", label: "Potential", text: "There is a path worth reading. A gap, often language, a job offer, or recognition, is still in the way." },
  { range: "35–54", label: "Needs improvement", text: "The route is visible, and the missing pieces are the work." },
  { range: "0–34", label: "Limited fit", text: "Little on the profile matches what that route asks. Look at another country, or add the evidence the route names." },
]

export function AboutExperience() {
  return (
    <>
      <section className="bg-[#f3f6f1]">
        <div className="mx-auto grid max-w-[1180px] items-end gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-[#1e4638] px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">ABOUT</p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Know where you can go. Know what it takes.</h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-[#3a362f]">Ailes is a way to compare Germany, Canada, Ireland, and the United Kingdom from one profile, then leave with the gaps and a next step.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">A clear read, before you spend</h2>
          <div className="mt-6 grid gap-5 text-lg leading-relaxed text-[#2c2924]">
            <p>Most people meet these routes as a pile of official pages, salary rules, and language tests. Ailes puts the four countries next to each other so you can see which paths fit the story you already have.</p>
            <p>You answer a short set of questions. We line that up with the work, skilled, and talent routes people actually use. You get a score, the reasons, what is missing, and a plan you can follow.</p>
            <p>When a refusal, a regulated profession, or a family member’s status makes it more than a checklist, write to us and name the country and the pathway.</p>
          </div>
        </div>
        <ul className="grid gap-4 self-start">
          {beliefs.map((item) => (
            <li key={item.title} className="rounded-[24px] bg-[#f6f1e7] p-6">
              <p className="text-xl tracking-[-0.02em]">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#5e594f]">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#fffcf8]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">HOW IT WORKS</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">From one profile to a plan</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-[24px] border border-[#e4d9c8] p-5">
                <p className="font-serif text-3xl tracking-[-0.04em] text-[#1e4638]">{step.n}</p>
                <p className="mt-3 text-lg tracking-[-0.02em]">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#5e594f]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">THE FOUR COUNTRIES</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Four countries</h2>
          </div>
          <Link href="/countries" className="text-sm font-medium text-[#1e4638]">All countries</Link>
        </div>
        <p className="mt-4 max-w-2xl text-[#4e4940]">Germany, Canada, Ireland, and the United Kingdom. Each country page names the routes, the checks, and the official source.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <Link key={country.slug} href={`/countries/${country.slug}`} className="group flex min-h-52 flex-col rounded-[24px] bg-[#f3efe6] p-5 transition hover:bg-[#efe6d6]">
              <span className="text-2xl" aria-hidden="true">{country.flag}</span>
              <span className="mt-6 font-serif text-3xl tracking-[-0.03em]">{country.name}</span>
              <span className="mt-2 text-sm leading-relaxed text-[#5e594f]">{country.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#e7f0e4]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">THE SCORE</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">A fit from 0 to 100</h2>
          <p className="mt-4 max-w-2xl text-[#3a362f]">The score adds signals for education, experience, language, work, and funds. It does not reproduce Canadian ranking points, German Opportunity Card points, or a salary floor.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bands.map((band) => (
              <article key={band.range} className="rounded-[24px] bg-white p-5">
                <p className="font-serif text-3xl tracking-[-0.04em]">{band.range}</p>
                <p className="mt-3 text-lg tracking-[-0.02em]">{band.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#5e594f]">{band.text}</p>
              </article>
            ))}
          </div>
          <Link href="/resources/how-to-read-your-score" className="mt-8 inline-flex items-center text-sm font-medium text-[#1e4638]">
            How to read your score
            <ArrowRight className="ml-2" size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 rounded-[32px] bg-[#1e4638] px-7 py-12 text-[#f6f1e7] sm:px-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-6xl">Start with your own profile</h2>
            <p className="mt-4 max-w-md text-[#d7e6c8]">A few questions. A score for the four countries. A plan you can follow. Or write to <a className="underline" href="mailto:hello@ailesglobal.com">hello@ailesglobal.com</a>.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/assessment" className="inline-flex min-h-12 items-center rounded-full bg-[#f2a900] px-6 py-3.5 text-sm font-bold text-[#111827] hover:bg-[#e19c00]">
              See if you qualify
            </Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full border border-[#d7e6c8] px-6 py-3.5 text-sm font-medium text-[#f6f1e7] hover:bg-white/10">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
