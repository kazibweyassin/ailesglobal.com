"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ScoreBar } from "@/components/ui/fit"
import { buildTasks, statusLabel } from "@/lib/match"
import { loadAssessment, loadCases, loadSaved, loadTaskState, saveCases, saveTaskState, type ImmigrationCase, type SavedPathway } from "@/lib/store"
import type { ActionTask, AssessmentResult } from "@/lib/types"
import { getPathway } from "@/data/immigration"

const caseStatuses: ImmigrationCase["status"][] = ["research", "preparing", "ready", "submitted", "decision", "completed"]
const taskOrder: ActionTask["status"][] = ["not_started", "in_progress", "completed"]
const taskLabel: Record<ActionTask["status"], string> = { not_started: "Not started", in_progress: "In progress", completed: "Completed" }
const taskTone: Record<ActionTask["status"], string> = {
  not_started: "bg-[#efe6d6] text-[#3a362f]",
  in_progress: "bg-[#d7e6c8] text-[#1e4638]",
  completed: "bg-[#1e4638] text-[#f6f1e7]",
}

export function DashboardView() {
  const [result, setResult] = useState<AssessmentResult | null | undefined>(undefined)
  const [saved, setSaved] = useState<SavedPathway[]>([])
  const [cases, setCases] = useState<ImmigrationCase[]>([])

  useEffect(() => {
    const stored = loadAssessment()
    const taskState = loadTaskState()
    setResult(stored ? { ...stored, tasks: buildTasks(stored.matches).map((task) => ({ ...task, status: taskState[task.id] ?? task.status })) } : null)
    setSaved(loadSaved())
    setCases(loadCases())
  }, [])

  if (result === undefined) return <p className="px-5 py-20 text-center text-sm text-[#5e594f]">Loading your dashboard…</p>

  const cycle = (task: ActionTask) => {
    if (!result) return
    const nextStatus = taskOrder[(taskOrder.indexOf(task.status) + 1) % taskOrder.length]
    const tasks = result.tasks.map((item) => (item.id === task.id ? { ...item, status: nextStatus } : item))
    setResult({ ...result, tasks })
    saveTaskState(Object.fromEntries(tasks.map((item) => [item.id, item.status])))
  }

  const addCase = () => {
    if (!result) return
    const top = result.matches[0]
    if (!top) return
    const item: ImmigrationCase = {
      id: `${top.countrySlug}-${top.pathwaySlug}-${Date.now()}`,
      countrySlug: top.countrySlug,
      pathwaySlug: top.pathwaySlug,
      countryName: top.countryName,
      pathwayName: top.pathwayName,
      status: "research",
      createdAt: new Date().toISOString(),
      events: [{ date: new Date().toISOString().slice(0, 10), event: "Case opened from your latest assessment", status: "Research" }],
    }
    const next = [item, ...cases]
    setCases(next)
    saveCases(next)
  }

  const updateCase = (id: string, status: ImmigrationCase["status"]) => {
    const next = cases.map((item) =>
      item.id === id
        ? { ...item, status, events: [{ date: new Date().toISOString().slice(0, 10), event: `Status set to ${status}`, status }, ...item.events] }
        : item,
    )
    setCases(next)
    saveCases(next)
  }

  const name = result?.answers.firstName.trim()
  const best = result?.countries[0]
  const remaining = result?.tasks.filter((task) => task.status !== "completed").length ?? 0

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-14 lg:px-8">
      <p className="text-sm text-[#5e594f]">Saved on this device. Your account is on the way.</p>
      <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em]">Welcome{name ? `, ${name}` : ""}.</h1>
      <p className="mt-3 text-lg text-[#4e4940]">{result ? `Your profile is ${result.completeness}% complete. Your plan is taking shape.` : "A few questions, and your plan starts here."}</p>

      {!result ? (
        <div className="mt-10 rounded-[28px] border border-[#e4d9c8] bg-[#fffcf8] p-8">
          <h2 className="text-2xl">See where you stand.</h2>
          <Link href="/assessment" className="mt-6 inline-flex rounded-full bg-[#1e4638] px-5 py-3 text-sm font-medium text-[#f6f1e7]">
            See if you qualify
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="rounded-[28px] bg-[#1e4638] p-6 text-[#f6f1e7] lg:col-span-1">
            <p className="text-sm text-[#d7e6c8]">Best match so far</p>
            <h2 className="mt-3 text-3xl tracking-[-0.03em]">{best?.countryName}</h2>
            <p className="mt-2 text-[#d9e7dc]">{best?.pathwayName}</p>
            <p className="mt-4 font-serif text-5xl">
              {best?.score}
              <span className="text-xl">/100</span>
            </p>
            {best ? <div className="mt-4"><ScoreBar score={best.score} status={best.status} inverse /></div> : null}
            <p className="mt-3 text-sm text-[#d9e7dc]">{best ? statusLabel(best.status) : ""}</p>
          </article>
          <article className="rounded-[28px] border border-[#e4d9c8] bg-[#fffcf8] p-6 lg:col-span-2">
            <h2 className="text-xl">Where you stand</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {result.countries.map((country) => (
                <li key={country.countrySlug} className="rounded-2xl bg-[#f6f1e7] px-4 py-3">
                  <span className="flex items-center justify-between gap-3">
                    <span>
                      {country.flag} {country.countryName}
                    </span>
                    <span className="text-sm text-[#5e594f]">{country.score}/100</span>
                  </span>
                  <span className="mt-2 block">
                    <ScoreBar score={country.score} status={country.status} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      )}

      <section className="mt-12">
        <h2 className="font-serif text-4xl tracking-[-0.03em]">Your action plan</h2>
        {result ? <p className="mt-2 text-sm text-[#5e594f]">{remaining} steps left. Tap one to move it forward.</p> : <p className="mt-2 text-[#5e594f]">Take the assessment and your plan will appear here.</p>}
        <ul className="mt-5 grid gap-3">
          {(result?.tasks ?? []).map((task) => (
            <li key={task.id}>
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-[#e4d9c8] bg-[#fffcf8] px-4 py-4">
                <span>
                  <span className="block text-xs font-semibold tracking-[0.14em] text-[#1e4638]">{task.phase.toUpperCase()}</span>
                  <span className="mt-1 block font-medium">{task.title}</span>
                  <span className="mt-1 block text-sm text-[#5e594f]">{task.description}</span>
                  {task.href ? (
                    task.href.startsWith("http") ? (
                      <a href={task.href} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-sm font-medium text-[#1e4638] underline underline-offset-2">Open the official page</a>
                    ) : (
                      <Link href={task.href} className="mt-2 inline-flex text-sm font-medium text-[#1e4638] underline underline-offset-2">Open this route</Link>
                    )
                  ) : null}
                </span>
                <button type="button" onClick={() => cycle(task)} className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${taskTone[task.status]}`}>{taskLabel[task.status]}</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">Saved pathways</h2>
          {saved.length === 0 ? <p className="mt-3 text-[#5e594f]">Save a pathway on any route, and it will wait for you here.</p> : null}
          <ul className="mt-4 grid gap-2">
            {saved.map((item) => {
              const pathway = getPathway(item.countrySlug, item.pathwaySlug)
              return (
                <li key={`${item.countrySlug}-${item.pathwaySlug}`}>
                  <Link className="text-[#1e4638] underline" href={`/pathways/${item.countrySlug}/${item.pathwaySlug}`}>
                    {pathway?.name ?? item.pathwaySlug}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Documents</h2>
          <p className="mt-3 text-[#5e594f]">Your papers stay with you for now. A place to keep them here is on the way.</p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {["Identity", "Education", "Employment", "Language", "Financial", "Immigration", "Family"].map((category) => (
              <li key={category} className="rounded-full bg-[#efe6d6] px-3 py-1.5">
                {category}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-serif text-3xl">Your move</h2>
          <button type="button" className="rounded-full bg-[#1e4638] px-4 py-2.5 text-sm font-medium text-[#f6f1e7] disabled:opacity-40" onClick={addCase} disabled={!result}>
            Track your best match
          </button>
        </div>
        {cases.length === 0 ? <p className="mt-3 text-[#5e594f]">When you are ready, track the path you care about. It stays on this device.</p> : null}
        <ul className="mt-4 grid gap-3">
          {cases.map((item) => (
            <li key={item.id} className="rounded-[24px] border border-[#e4d9c8] bg-[#fffcf8] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-lg">
                  {item.countryName} — {item.pathwayName}
                </p>
                <label className="text-sm text-[#5e594f]">
                  Status
                  <select className="ml-2 rounded-full border border-[#e4d9c8] bg-white px-3 py-2" value={item.status} onChange={(event) => updateCase(item.id, event.target.value as ImmigrationCase["status"])}>
                    {caseStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <ul className="mt-4 grid gap-1 text-sm text-[#5e594f]">
                {item.events.slice(0, 3).map((event) => (
                  <li key={`${event.date}-${event.event}`}>
                    {event.date} · {event.event}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
