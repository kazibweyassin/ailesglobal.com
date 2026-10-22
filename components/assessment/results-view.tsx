"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ScoreBar, StatusPill } from "@/components/ui/fit"
import { countries, getPathway } from "@/data/immigration"
import { buildTasks } from "@/lib/match"
import { loadAssessment, loadTaskState } from "@/lib/store"
import type { AssessmentAnswers, AssessmentResult } from "@/lib/types"

export function ResultsView() {
  const [result, setResult] = useState<AssessmentResult | null | undefined>(undefined)

  useEffect(() => {
    const stored = loadAssessment()
    if (!stored) {
      setResult(null)
      return
    }
    const taskState = loadTaskState()
    setResult({ ...stored, tasks: buildTasks(stored.matches).map((task) => ({ ...task, status: taskState[task.id] ?? task.status })) })
  }, [])

  if (result === undefined) return <p className="px-5 py-20 text-center text-sm text-[#5e594f]">Loading your assessment…</p>
  if (!result) {
    return (
      <div className="mx-auto max-w-[720px] px-5 py-20">
        <h1 className="font-serif text-5xl tracking-[-0.03em]">Your plan starts here.</h1>
        <p className="mt-4 text-lg text-[#4e4940]">A few questions, and you will see where you stand.</p>
        <Link href="/assessment" className="mt-8 inline-flex rounded-full bg-[#1e4638] px-5 py-3 text-sm font-medium text-[#f6f1e7]">
          See if you qualify
        </Link>
      </div>
    )
  }

  const name = result.answers.firstName.trim()
  const top = result.matches[0]
  const nextStep = top?.missingRequirements[0]
  const countryRoutes = top ? result.matches.filter((match) => match.countrySlug === top.countrySlug) : []
  const pathway = top ? getPathway(top.countrySlug, top.pathwaySlug) : undefined
  const told = top ? toldUs(result.answers) : []

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-14 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#1e4638]">YOUR RESULT</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.03em] sm:text-6xl">Here&apos;s where you stand{name ? `, ${name}` : ""}.</h1>
      <p className="mt-4 max-w-2xl text-lg text-[#4e4940]">A clear picture of Germany, Canada, Ireland, and the UK, from what you shared.</p>
      <p className="mt-6 text-sm text-[#5e594f]">Your profile is {result.completeness}% complete.</p>

      {top && nextStep ? (
        <section className="mt-8 rounded-[28px] bg-[#1e4638] px-6 py-8 text-[#f6f1e7] sm:px-8">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#d7e6c8]">YOUR NEXT STEP</p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-[1.15] tracking-[-0.03em] sm:text-4xl">{nextStep}</h2>
          <p className="mt-4 max-w-2xl text-[#d7e6c8]">
            {top.pathwayName} in {top.countryName}. Score {top.score}/100.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/pathways/${top.countrySlug}/${top.pathwaySlug}`} className="inline-flex min-h-12 items-center rounded-full bg-[#f2a900] px-5 py-3 text-sm font-bold text-[#111827] hover:bg-[#e19c00]">
              Read this route
            </Link>
            <a href={top.officialSourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-[#d7e6c8] px-5 py-3 text-sm font-medium text-[#f6f1e7] hover:bg-white/10">
              {top.sourceName}
            </a>
          </div>
        </section>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {result.countries.map((country, index) => (
          <Link key={country.countrySlug} href={`/pathways/${country.countrySlug}/${country.pathwaySlug}`} className={`flex flex-col rounded-[24px] bg-[#fffcf8] p-5 transition hover:-translate-y-0.5 ${index === 0 ? "border border-[#1e4638] shadow-[0_16px_36px_rgba(30,70,56,0.08)]" : "border border-[#e4d9c8] hover:border-[#1e4638]"}`}>
            <p className="text-sm text-[#5e594f]">
              <span aria-hidden="true">{country.flag} </span>
              {country.countryName}
            </p>
            <p className="mt-3 font-serif text-5xl tracking-[-0.04em]">
              {country.score}
              <span className="text-xl text-[#6a645a]">/100</span>
            </p>
            <div className="mt-4">
              <ScoreBar score={country.score} status={country.status} />
            </div>
            <div className="mt-3">
              <StatusPill status={country.status} />
            </div>
            <p className="mt-3 text-sm text-[#5e594f]">{country.pathwayName}</p>
          </Link>
        ))}
      </div>

      {told.length > 0 ? (
        <section className="mt-14">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">YOU TOLD US</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {told.map((item) => (
              <li key={item} className="rounded-2xl bg-[#fffcf8] px-4 py-3 text-sm">{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {pathway ? (
        <section className="mt-14">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">GOOD TO KNOW</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em]">{pathway.name}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {pathway.requirements.slice(0, 4).map((item) => (
              <article key={item} className="rounded-[24px] border border-[#e4d9c8] bg-white p-5">
                <p className="text-sm font-semibold tracking-[0.12em] text-[#1e4638]">THE ROUTE ASKS FOR</p>
                <p className="mt-3 leading-relaxed">{item}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {top ? (
        <section className="mt-14">
          <h2 className="font-serif text-4xl tracking-[-0.03em]">Other routes in {top.countryName}</h2>
          <p className="mt-3 max-w-2xl text-[#4e4940]">Every route in {top.countryName}, scored from the same answers.</p>
          <ul className="mt-6 grid gap-3">
            {countryRoutes.map((route, index) => (
              <li key={route.pathwaySlug}>
                <Link href={`/pathways/${route.countrySlug}/${route.pathwaySlug}`} className="flex flex-col gap-3 rounded-[24px] border border-[#e4d9c8] bg-[#fffcf8] px-5 py-4 transition hover:border-[#1e4638] sm:flex-row sm:items-center sm:justify-between">
                  <span>
                    <span className="block text-lg tracking-[-0.02em]">{route.pathwayName}</span>
                    <span className="mt-1 block text-sm text-[#5e594f]">{index === 0 ? "Strongest route" : "Also scored for you"}</span>
                  </span>
                  <span className="flex items-center gap-4">
                    <StatusPill status={route.status} />
                    <span className="font-serif text-3xl tracking-[-0.04em]">{route.score}<span className="text-base text-[#6a645a]">/100</span></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-14">
        <h2 className="font-serif text-4xl tracking-[-0.03em]">Why this path stands out</h2>
        {top ? (
          <article className="mt-6 rounded-[28px] border border-[#e4d9c8] bg-[#fffcf8] p-6 sm:p-8">
            <p className="text-sm text-[#5e594f]">{top.countryName}</p>
            <h3 className="mt-1 text-3xl tracking-[-0.03em]">{top.pathwayName}</h3>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <p className="font-serif text-4xl tracking-[-0.04em]">{top.score}<span className="text-lg text-[#6a645a]">/100</span></p>
              <StatusPill status={top.status} />
            </div>
            <div className="mt-4 max-w-sm">
              <ScoreBar score={top.score} status={top.status} />
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium">Why it fits</p>
                <ul className="mt-3 grid gap-2 text-sm leading-relaxed">
                  {top.reasons.map((reason) => (
                    <li key={reason}>✓ {reason}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium">What to look at next</p>
                <ul className="mt-3 grid gap-2 text-sm leading-relaxed">
                  {top.missingRequirements.map((gap) => (
                    <li key={gap}>⚠ {gap}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm">
              Confirm the details on the official page.{" "}
              <a className="underline" href={top.officialSourceUrl} target="_blank" rel="noreferrer">
                {top.sourceName}
              </a>
              . Link checked {top.lastVerifiedAt}.
            </p>
          </article>
        ) : null}
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-4xl tracking-[-0.03em]">Your {top?.countryName} roadmap</h2>
          <Link href="/dashboard" className="text-sm font-medium text-[#1e4638]">
            Open your plan
          </Link>
        </div>
        <ul className="mt-6 grid gap-3">
          {result.tasks.map((task) => (
            <li key={task.id} className="rounded-[24px] border border-[#e4d9c8] bg-[#fffcf8] p-5">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1e4638]">{task.phase.toUpperCase()}</p>
              <p className="mt-2 text-lg tracking-[-0.02em]">{task.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#5e594f]">{task.description}</p>
              {task.href ? (
                task.href.startsWith("http") ? (
                  <a href={task.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-medium text-[#1e4638] underline underline-offset-2">Open the official page</a>
                ) : (
                  <Link href={task.href} className="mt-3 inline-flex text-sm font-medium text-[#1e4638] underline underline-offset-2">Open this route</Link>
                )
              ) : null}
            </li>
          ))}
        </ul>
      </section>

    </div>
  )
}

function toldUs(answers: AssessmentAnswers) {
  const names = answers.countries.map((slug) => countries.find((country) => country.slug === slug)?.name ?? slug)
  return [
    answers.nationality ? `Passport from ${answers.nationality}` : "",
    answers.residence ? `Lives in ${answers.residence}` : "",
    answers.occupation ? answers.occupation : "",
    answers.education ? `Education: ${answers.education.replace("-", " ")}` : "",
    answers.english ? `English: ${answers.english}` : "",
    names.length ? names.join(", ") : "",
  ].filter(Boolean)
}
