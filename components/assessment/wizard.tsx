"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { countries } from "@/data/immigration"
import { buildTasks, completeness, emptyAnswers, matchCountries, matchPathways } from "@/lib/match"
import { loadDraft, saveAssessment, saveDraft } from "@/lib/store"
import type { AssessmentAnswers } from "@/lib/types"

type Choice = { value: string; label: string; note?: string }

type Question = {
  id: string
  title: string
  why: string
  kind: "single" | "multi" | "text"
  key?: keyof AssessmentAnswers
  options?: Choice[]
  placeholder?: string
  optional?: boolean
  when?: (answers: AssessmentAnswers) => boolean
}

const helpOptions: Choice[] = [
  { value: "skilled", label: "I need help finding a path to work or live in Germany, Canada, Ireland, or the UK", note: "We compare the work and skilled routes in those four countries." },
  { value: "work", label: "I need help with a job offer I already have in one of those countries", note: "We put routes that usually start with a job offer first." },
  { value: "unsure", label: "I need help choosing between Germany, Canada, Ireland, and the UK", note: "We score all four countries from the same answers." },
]

const ageOptions: Choice[] = [
  { value: "18-24", label: "18–24" },
  { value: "25-32", label: "25–32" },
  { value: "33-40", label: "33–40" },
  { value: "41-50", label: "41–50" },
  { value: "51+", label: "51 or older" },
]

const educationOptions: Choice[] = [
  { value: "none", label: "No formal qualification" },
  { value: "secondary", label: "Secondary education" },
  { value: "certificate", label: "Certificate" },
  { value: "diploma", label: "Diploma" },
  { value: "bachelor", label: "Bachelor's" },
  { value: "master", label: "Master's" },
  { value: "phd", label: "PhD" },
  { value: "professional", label: "Professional qualification" },
]

const experienceOptions: Choice[] = [
  { value: "0", label: "Under 1 year" },
  { value: "1-2", label: "1–2 years" },
  { value: "3-5", label: "3–5 years" },
  { value: "6-9", label: "6–9 years" },
  { value: "10+", label: "10 or more years" },
]

const employedOptions: Choice[] = [
  { value: "employed", label: "Employed", note: "A current job makes employment evidence easier to gather." },
  { value: "self-employed", label: "Self-employed" },
  { value: "unemployed", label: "Not employed" },
  { value: "student", label: "Student" },
  { value: "career-break", label: "Career break" },
]

const incomeOptions: Choice[] = [
  { value: "under-10k", label: "Under 10,000" },
  { value: "10-25k", label: "10,000–25,000" },
  { value: "25-45k", label: "25,000–45,000" },
  { value: "45-70k", label: "45,000–70,000" },
  { value: "70k+", label: "Over 70,000" },
]

const englishOptions: Choice[] = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "fluent", label: "Fluent" },
]

const testOptions: Choice[] = [
  { value: "none", label: "None" },
  { value: "ielts", label: "IELTS" },
  { value: "toefl", label: "TOEFL" },
  { value: "pte", label: "PTE" },
]

const cefr: Choice[] = ["None", "A1", "A2", "B1", "B2", "C1", "C2"].map((label) => ({ value: label === "None" ? "none" : label, label }))

const maritalOptions: Choice[] = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "partnered", label: "Partnered" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
]

const dependentOptions: Choice[] = [
  { value: "0", label: "None" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3+", label: "3 or more" },
]

const preferenceOptions: Choice[] = [
  { value: "work", label: "Work" },
  { value: "skilled", label: "Skilled migration" },
  { value: "study", label: "Study" },
  { value: "business", label: "Business" },
  { value: "talent", label: "Talent" },
  { value: "family", label: "Family" },
  { value: "unsure", label: "Not sure" },
]

const timelineOptions: Choice[] = [
  { value: "0-6", label: "0–6 months" },
  { value: "6-12", label: "6–12 months" },
  { value: "1-2", label: "1–2 years" },
  { value: "2+", label: "2 or more years" },
]

const fundOptions: Choice[] = [
  { value: "limited", label: "Limited" },
  { value: "moderate", label: "Enough for some fees" },
  { value: "prepared", label: "Prepared for application costs" },
  { value: "unsure", label: "Not sure" },
]

const refusalOptions: Choice[] = [
  { value: "no", label: "No" },
  { value: "yes", label: "Yes", note: "The official page for that country explains how a previous refusal is handled." },
  { value: "prefer-not", label: "Prefer not to say" },
]

const questions: Question[] = [
  { id: "help", title: "What can we help you with today?", why: "The kind of move changes which routes we put first.", kind: "single", key: "preference", options: helpOptions },
  { id: "name", title: "What should we call you?", why: "Your result uses your name. You can skip this.", kind: "text", key: "firstName", placeholder: "First name", optional: true },
  { id: "passport", title: "Where is your passport from?", why: "The office you apply through depends on this. Each official page lists the documents for that office.", kind: "text", key: "nationality", placeholder: "Country", optional: true },
  { id: "live", title: "Where do you live now?", why: "Some routes look at where you live, as well as your passport.", kind: "text", key: "residence", placeholder: "Country or city", optional: true },
  { id: "countries", title: "Which countries do you want to consider?", why: "We still score every route. The countries you name shape the language questions.", kind: "multi" },
  { id: "age", title: "How old are you?", why: "Some points-based routes use an age band. The official page has the rule.", kind: "single", key: "ageBand", options: ageOptions, optional: true },
  { id: "education", title: "What is your highest qualification?", why: "Skilled routes are read against a qualification level.", kind: "single", key: "education", options: educationOptions },
  { id: "field", title: "What field is that qualification in?", why: "Some routes care about the subject, not only the level.", kind: "text", key: "field", placeholder: "For example, nursing or engineering", optional: true },
  { id: "year", title: "What year did you finish it?", why: "A year helps when a route asks how recent the qualification is.", kind: "text", key: "graduationYear", placeholder: "Year", optional: true },
  { id: "occupation", title: "What work do you do?", why: "Job-offer routes are read against an occupation.", kind: "text", key: "occupation", placeholder: "Occupation", optional: true },
  { id: "industry", title: "What industry is that in?", why: "It sits next to your occupation when you read a route.", kind: "text", key: "industry", placeholder: "Industry", optional: true },
  { id: "experience", title: "How many years have you done that work?", why: "Several skilled routes look for years of experience.", kind: "single", key: "experience", options: experienceOptions },
  { id: "employed", title: "Are you working now?", why: "A current job changes how quickly you can gather proof of work.", kind: "single", key: "employed", options: employedOptions },
  { id: "income", title: "What is your approximate annual income?", why: "A range sits next to published salary rules. The official page has the figure.", kind: "single", key: "income", options: incomeOptions, optional: true },
  { id: "english", title: "How is your English?", why: "Ireland, the UK, and many Canadian and German employers ask about English.", kind: "single", key: "english", options: englishOptions },
  { id: "test", title: "Do you have an English test result?", why: "Some routes accept only a named test. The official page says which ones.", kind: "single", key: "englishTest", options: testOptions, optional: true },
  { id: "german", title: "How is your German?", why: "German routes often ask for a level. The official page says which one.", kind: "single", key: "german", options: cefr, optional: true, when: (answers) => answers.countries.includes("germany") },
  { id: "french", title: "How is your French?", why: "French is an extra signal on some Canadian programs.", kind: "single", key: "french", options: cefr, optional: true, when: (answers) => answers.countries.includes("canada") },
  { id: "marital", title: "Who would make the move with you?", why: "Family members can have their own status. We record who is coming.", kind: "single", key: "marital", options: maritalOptions, optional: true },
  { id: "dependents", title: "How many dependants are coming?", why: "A route can ask about people who travel with you.", kind: "single", key: "dependents", options: dependentOptions, optional: true },
  { id: "funds", title: "Can you cover application costs and proof of funds?", why: "Some routes publish a funds figure. The official page has the amount.", kind: "single", key: "funds", options: fundOptions, optional: true },
  { id: "goal", title: "What kind of move is this?", why: "This keeps the routes lined up with what you want.", kind: "single", key: "preference", options: preferenceOptions, optional: true },
  { id: "timeline", title: "How soon do you want to move?", why: "A timeline tells us which preparation fits.", kind: "single", key: "timeline", options: timelineOptions, optional: true },
  { id: "refusals", title: "Have you had a visa refusal?", why: "A previous refusal changes how you read the official guidance.", kind: "single", key: "refusals", options: refusalOptions, optional: true },
]

const labels = new Map<string, string>()
for (const question of questions) {
  for (const option of question.options ?? []) labels.set(option.value, option.label)
}

function labelFor(value: string) {
  return labels.get(value) || value
}

export function AssessmentWizard({ focus }: { focus?: string }) {
  const router = useRouter()
  const [started, setStarted] = useState(false)
  const [step, setStep] = useState(0)
  const [whyOpen, setWhyOpen] = useState(false)
  const [answers, setAnswers] = useState<AssessmentAnswers>(emptyAnswers)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const draft = loadDraft()
    const next: AssessmentAnswers = { ...(draft ?? emptyAnswers), countries: [...(draft?.countries ?? [])] }
    const focusSlug = countries.some((country) => country.slug === focus) ? focus : ""
    if (focusSlug && next.countries.length === 0) next.countries = [focusSlug]
    setAnswers(next)
    if (draft?.preference) setStarted(true)
    setReady(true)
  }, [focus])

  useEffect(() => {
    if (ready) saveDraft(answers)
  }, [answers, ready])

  const visible = useMemo(() => questions.filter((question) => !question.when || question.when(answers)), [answers])
  const question = visible[Math.min(step, visible.length - 1)]
  const reviewing = step >= visible.length
  const progress = reviewing ? 1 : step / visible.length

  useEffect(() => {
    setWhyOpen(false)
  }, [step])

  const set = (key: keyof AssessmentAnswers, value: string) => setAnswers((current) => ({ ...current, [key]: value }))

  const choose = (value: string) => {
    if (!question?.key) return
    if (question.id === "help") {
      setAnswers((current) => ({
        ...current,
        preference: value,
        countries: value === "unsure" && current.countries.length === 0 ? countries.map((country) => country.slug) : current.countries,
      }))
      return
    }
    set(question.key, answers[question.key] === value ? "" : value)
  }

  const toggleCountry = (slug: string) => {
    setAnswers((current) => ({
      ...current,
      countries: current.countries.includes(slug) ? current.countries.filter((item) => item !== slug) : [...current.countries, slug],
    }))
  }

  const answered = () => {
    if (reviewing || !question) return true
    if (question.optional) return true
    if (question.kind === "multi") return answers.countries.length > 0
    if (!question.key) return true
    return answers[question.key].trim() !== ""
  }

  const finish = () => {
    const matches = matchPathways(answers)
    saveAssessment({
      completedAt: new Date().toISOString(),
      completeness: completeness(answers),
      answers,
      matches,
      countries: matchCountries(matches),
      tasks: buildTasks(matches),
    })
    router.push("/assessment/results")
  }

  const next = () => {
    if (!answered()) return
    if (reviewing) {
      finish()
      return
    }
    setStep((current) => current + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const back = () => {
    if (step === 0) {
      setStarted(false)
      return
    }
    setStep((current) => current - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!started) {
    return (
      <div>
        <section className="bg-[#1e4638] px-6 py-16 text-center text-[#f6f1e7] sm:py-24">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full border-2 border-white">
            <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
              <circle cx="16" cy="16" r="10" fill="none" stroke="white" strokeWidth="1.5" />
              <path d="M16 8.5 18.2 16 16 14.2 13.8 16Z" fill="white" />
              <circle cx="22" cy="8" r="1.4" fill="white" />
            </svg>
          </div>
          <h1 className="mx-auto mt-8 max-w-md text-4xl leading-[1.1] tracking-[-0.03em] sm:text-5xl">Let’s find which routes work for you</h1>
          <p className="mx-auto mt-5 max-w-sm text-lg leading-relaxed text-[#d7e6c8]">Germany, Canada, Ireland, and the UK. A few minutes.</p>
          <button type="button" onClick={() => setStarted(true)} className="mt-8 inline-flex min-h-12 items-center rounded-md bg-[#f2a900] px-6 py-3 text-sm font-bold text-[#111827] hover:bg-[#e19c00]">
            Continue →
          </button>
        </section>
        <section className="mx-auto max-w-[720px] px-6 py-10">
          <div className="rounded-[24px] bg-[#fffcf8] p-6 sm:p-8">
            <p className="text-2xl tracking-[-0.03em]">Ailes stays with you from the first question to the official page.</p>
            <p className="mt-4 leading-relaxed text-[#3a362f]">You answer once. We line that up with the routes in those four countries and show you the next step.</p>
          </div>
        </section>
      </div>
    )
  }

  const selectedValue = question?.key ? answers[question.key] : ""

  return (
    <div className="mx-auto min-h-[70vh] max-w-[720px] px-5 pb-32 pt-6 lg:px-8">
      <p className="text-sm text-[#3a362f]">Find your route</p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e4d9c8]" aria-hidden="true">
        <div className="h-full bg-[#1e4638]" style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>

      {reviewing ? (
        <div className="mt-10">
          <h1 className="text-4xl leading-[1.1] tracking-[-0.03em] sm:text-5xl">Here is what you told us</h1>
          <ul className="mt-8 grid gap-3 text-base">
            <Review label="Help" value={labelFor(answers.preference)} />
            <Review label="Name" value={answers.firstName} />
            <Review label="Passport" value={answers.nationality} />
            <Review label="Lives in" value={answers.residence} />
            <Review label="Countries" value={answers.countries.map((slug) => countries.find((country) => country.slug === slug)?.name ?? slug).join(", ")} />
            <Review label="Education" value={labelFor(answers.education)} />
            <Review label="Occupation" value={answers.occupation} />
            <Review label="Experience" value={labelFor(answers.experience)} />
            <Review label="English" value={labelFor(answers.english)} />
            <Review label="German" value={labelFor(answers.german)} />
            <Review label="French" value={labelFor(answers.french)} />
          </ul>
        </div>
      ) : question ? (
        <div className="mt-8">
          <h1 className="text-4xl leading-[1.1] tracking-[-0.03em] sm:text-5xl">{question.title}</h1>
          <button type="button" onClick={() => setWhyOpen((open) => !open)} className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#e7f0e4] px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#1e4638]" aria-expanded={whyOpen}>
            <span aria-hidden="true">ⓘ</span> WHY ARE YOU ASKING?
          </button>
          {whyOpen ? <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#3a362f]">{question.why}</p> : null}

          {question.kind === "text" && question.key ? (
            <label className="mt-8 block">
              <span className="sr-only">{question.title}</span>
              <input value={answers[question.key]} placeholder={question.placeholder} onChange={(event) => set(question.key as keyof AssessmentAnswers, event.target.value)} className="min-h-14 w-full rounded-xl border-2 border-[#1e4638] bg-white px-4 text-lg outline-none" />
            </label>
          ) : null}

          {question.kind === "single" ? (
            <div className="mt-8 grid gap-3" role="radiogroup" aria-label={question.title}>
              {question.options?.map((option) => {
                const selected = selectedValue === option.value
                return (
                  <div key={option.value} className={selected ? "overflow-hidden rounded-xl border-2 border-[#1c1b19] bg-white shadow-[0_8px_24px_rgba(28,27,25,0.06)]" : ""}>
                    <button type="button" role="radio" aria-checked={selected} onClick={() => choose(option.value)} className={`flex w-full items-start gap-3 px-4 py-4 text-left text-base ${selected ? "" : "rounded-xl border border-[#e7e2d8] bg-white shadow-[0_8px_24px_rgba(28,27,25,0.06)]"}`}>
                      <span className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-[#1c1b19]" : "border-[#b7b1a6]"}`} aria-hidden="true">
                        {selected ? <span className="size-2.5 rounded-full bg-[#1c1b19]" /> : null}
                      </span>
                      <span>{option.label}</span>
                    </button>
                    {selected && option.note ? (
                      <div className="border-t border-[#e4d9c8] bg-[#f6f1e7] px-4 py-3 text-sm leading-relaxed text-[#3a362f]">
                        <span className="mb-2 block h-1 w-8 bg-[#1c1b19]" aria-hidden="true" />
                        {option.note}
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          ) : null}

          {question.kind === "multi" ? (
            <div className="mt-8 grid gap-3">
              {countries.map((country) => {
                const selected = answers.countries.includes(country.slug)
                return (
                  <div key={country.slug} className={selected ? "overflow-hidden rounded-xl border-2 border-[#1c1b19] bg-white shadow-[0_8px_24px_rgba(28,27,25,0.06)]" : ""}>
                    <button type="button" aria-pressed={selected} onClick={() => toggleCountry(country.slug)} className={`flex w-full items-start gap-3 px-4 py-4 text-left text-base ${selected ? "" : "rounded-xl border border-[#e7e2d8] bg-white shadow-[0_8px_24px_rgba(28,27,25,0.06)]"}`}>
                      <span className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-[#1c1b19]" : "border-[#b7b1a6]"}`} aria-hidden="true">
                        {selected ? <span className="size-2.5 rounded-full bg-[#1c1b19]" /> : null}
                      </span>
                      <span>{country.flag} {country.name}</span>
                    </button>
                    {selected ? (
                      <div className="border-t border-[#e4d9c8] bg-[#f6f1e7] px-4 py-3 text-sm leading-relaxed text-[#3a362f]">
                        <span className="mb-2 block h-1 w-8 bg-[#1c1b19]" aria-hidden="true" />
                        {country.summary}
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#e4d9c8] bg-white px-4 py-3">
        <div className="mx-auto flex max-w-[720px] gap-3">
          <button type="button" onClick={back} className="h-12 flex-1 rounded-md border-2 border-[#1c1b19] bg-white text-sm font-medium">
            Back
          </button>
          <button type="button" onClick={next} disabled={!answered()} className="h-12 flex-[1.4] rounded-md text-sm font-bold enabled:bg-[#f2a900] enabled:text-[#111827] enabled:hover:bg-[#e19c00] disabled:bg-[#e5e5e5] disabled:text-[#9a9a9a]">
            {reviewing ? "See your routes" : "Next"}
          </button>
        </div>
      </div>
    </div>
  )
}

function Review({ label, value }: { label: string; value: string }) {
  if (!value.trim()) return null
  return (
    <li className="rounded-xl bg-[#fffcf8] px-4 py-3">
      <span className="block text-xs font-semibold tracking-[0.14em] text-[#1e4638]">{label.toUpperCase()}</span>
      <span className="mt-1 block">{value}</span>
    </li>
  )
}
