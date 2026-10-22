import type { ActionTask, AssessmentAnswers, AssessmentResult } from "@/lib/types"

export const storageKeys = {
  assessment: "ailes.assessment.v1",
  saved: "ailes.saved.v1",
  cases: "ailes.cases.v1",
  tasks: "ailes.tasks.v1",
}

export type SavedPathway = { countrySlug: string; pathwaySlug: string; savedAt: string }

export type ImmigrationCase = {
  id: string
  countrySlug: string
  pathwaySlug: string
  countryName: string
  pathwayName: string
  status: "research" | "preparing" | "ready" | "submitted" | "decision" | "completed"
  createdAt: string
  events: { date: string; event: string; status: string }[]
}

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function loadAssessment() {
  return read<AssessmentResult | null>(storageKeys.assessment, null)
}

export function saveAssessment(result: AssessmentResult) {
  write(storageKeys.assessment, result)
  const existing = loadTaskState()
  const merged = result.tasks.map((task) => ({ ...task, status: existing[task.id] ?? task.status }))
  saveTaskState(Object.fromEntries(merged.map((task) => [task.id, task.status])))
}

export function loadDraft() {
  return read<AssessmentAnswers | null>("ailes.draft.v1", null)
}

export function saveDraft(answers: AssessmentAnswers) {
  write("ailes.draft.v1", answers)
}

export function loadSaved() {
  return read<SavedPathway[]>(storageKeys.saved, [])
}

export function toggleSaved(item: SavedPathway) {
  const current = loadSaved()
  const exists = current.some((saved) => saved.countrySlug === item.countrySlug && saved.pathwaySlug === item.pathwaySlug)
  const next = exists
    ? current.filter((saved) => !(saved.countrySlug === item.countrySlug && saved.pathwaySlug === item.pathwaySlug))
    : [item, ...current]
  write(storageKeys.saved, next)
  return next
}

export function loadCases() {
  return read<ImmigrationCase[]>(storageKeys.cases, [])
}

export function saveCases(items: ImmigrationCase[]) {
  write(storageKeys.cases, items)
}

export function loadTaskState() {
  return read<Record<string, ActionTask["status"]>>(storageKeys.tasks, {})
}

export function saveTaskState(state: Record<string, ActionTask["status"]>) {
  write(storageKeys.tasks, state)
}
