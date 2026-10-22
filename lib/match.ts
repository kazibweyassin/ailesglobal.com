import { countries, pathways } from "@/data/immigration"
import type { ActionTask, AssessmentAnswers, CountryMatch, FitStatus, PathwayMatch } from "@/lib/types"

const educationRank: Record<string, number> = {
  none: 0,
  secondary: 1,
  certificate: 2,
  diploma: 3,
  professional: 4,
  bachelor: 5,
  master: 6,
  phd: 7,
}

const experienceRank: Record<string, number> = { "0": 0, "1-2": 1, "3-5": 2, "6-9": 3, "10+": 4 }
const englishRank: Record<string, number> = { beginner: 0, intermediate: 1, advanced: 2, fluent: 3 }
const cefrRank: Record<string, number> = { none: 0, A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 }
const incomeRank: Record<string, number> = { "under-10k": 0, "10-25k": 1, "25-45k": 2, "45-70k": 3, "70k+": 4 }

export function statusFor(score: number): FitStatus {
  if (score >= 75) return "strong_potential"
  if (score >= 55) return "potential"
  if (score >= 35) return "needs_improvement"
  return "limited_fit"
}

export function statusLabel(status: FitStatus) {
  if (status === "strong_potential") return "Strong potential"
  if (status === "potential") return "Potential"
  if (status === "needs_improvement") return "Needs improvement"
  return "Limited fit"
}

function clamp(n: number) {
  return Math.max(0, Math.min(100, Math.round(n)))
}

function atLeastEducation(answers: AssessmentAnswers, rank: number) {
  return (educationRank[answers.education] ?? -1) >= rank
}

function atLeastExperience(answers: AssessmentAnswers, rank: number) {
  return (experienceRank[answers.experience] ?? -1) >= rank
}

function atLeastEnglish(answers: AssessmentAnswers, rank: number) {
  return (englishRank[answers.english] ?? -1) >= rank
}

type Check = {
  ok: boolean
  points: number
  reason: string
  gap: string
}

function scorePathway(answers: AssessmentAnswers, countrySlug: string, pathwaySlug: string): { score: number; reasons: string[]; gaps: string[] } {
  const checks: Check[] = []
  const add = (ok: boolean, points: number, reason: string, gap: string) => checks.push({ ok, points, reason, gap })

  if (atLeastEducation(answers, 5)) {
    add(true, 16, "Your highest qualification is at degree level, which many skilled routes ask about.", "")
  } else if (atLeastEducation(answers, 3)) {
    add(true, 8, "You have post-secondary education. The official page says whether it matches the route.", "")
  } else {
    add(false, 16, "", "Several skilled routes look for a degree. Add yours if you have one, then confirm it on the official page.")
  }
  add(atLeastExperience(answers, 2), 14, "You have at least three years of professional experience.", "Professional experience looks short for several skilled routes.")
  add(atLeastExperience(answers, 3), 6, "Longer experience adds weight on skilled and talent routes.", "")
  add(atLeastEnglish(answers, 2), 12, "Advanced or fluent English is a strong signal for Ireland, the UK, and many Canadian and German employers.", "English is below advanced. The official page says which language evidence counts.")
  add(answers.englishTest !== "" && answers.englishTest !== "none", 4, "You have named an English test. Confirm the score against the route.", "No English test is on your profile yet. Some routes want a formal result.")
  add(answers.employed === "employed" || answers.employed === "self-employed", 6, "You are working now, which makes employment evidence easier to gather.", "You are between roles. Offers and references may take a little longer.")
  add((incomeRank[answers.income] ?? -1) >= 2, 6, "Your income band is a rough signal next to published salary rules. The official page has the real figure.", "Income looks modest next to published salary floors. Confirm the figure on the official page.")
  add(answers.funds === "prepared" || answers.funds === "moderate", 6, "You can cover some application costs or proof-of-funds requests.", "Funds look limited or unclear. Some routes ask you to show them. The official page has the figure.")
  add(answers.ageBand === "25-32" || answers.ageBand === "33-40" || answers.ageBand === "18-24", 6, "Your age band sits where many economic routes still score well.", "Age can weigh on some points-based routes. The official page has the rule.")
  add(Boolean(answers.occupation.trim()), 4, "You named an occupation, so we can talk about the work itself.", "Add an occupation so job-offer routes have something to go on.")
  add(answers.refusals === "no", 3, "You reported no previous visa refusal.", "A previous refusal is on your profile. Read the official guidance for that country before you apply again.")

  if (countrySlug === "germany") {
    add((cefrRank[answers.german] ?? 0) >= 3, 10, "German at B1 or better supports a job search and some work routes.", "German may be part of this path. The official page says which level counts.")
    if (pathwaySlug === "eu-blue-card" || pathwaySlug === "skilled-worker") {
      add(answers.employed === "employed", 8, "A current job makes a German offer easier to picture. The offer itself still has to exist.", "A qualifying job offer is not on your profile yet. Confirm what this route asks for.")
    }
    if (pathwaySlug === "opportunity-card") {
      add(answers.funds === "prepared", 8, "You may be able to show the funds a job-search route asks for. The official page has the amount.", "Funds for a job-search stay are not shown as ready. The official page has the amount.")
      add(atLeastEducation(answers, 5) || atLeastExperience(answers, 3), 6, "A qualification or longer experience is the kind of signal a job-search route looks for.", "The Opportunity Card looks for a qualification or experience story the official points model accepts.")
    }
  }

  if (countrySlug === "canada") {
    add(atLeastEnglish(answers, 2) || (cefrRank[answers.french] ?? 0) >= 4, 8, "Canadian economic programs usually want tested English or French.", "A designated language test is still part of a complete Canadian profile.")
    add((cefrRank[answers.french] ?? 0) >= 3, 4, "French is an extra signal on some Canadian programs.", "")
    if (pathwaySlug === "provincial-nominee") {
      add(answers.employed === "employed", 6, "Provincial streams often care about a job offer. Working now makes that conversation possible.", "No provincial job offer or connection is on your profile yet.")
    }
  }

  if (countrySlug === "ireland") {
    add(answers.employed === "employed" || answers.preference === "work" || answers.preference === "skilled", 8, "Irish permits are built around a job. Your focus on work fits that.", "An Irish job offer is not on your profile yet.")
    add(atLeastEducation(answers, 5), 6, "Critical Skills often looks for a degree or higher in listed occupations.", "Critical Skills often looks for a relevant degree. Confirm it on the official list.")
    if (pathwaySlug === "general-employment-permit") {
      add(atLeastExperience(answers, 1), 4, "The General Employment Permit can consider a wider set of jobs than Critical Skills.", "Experience still needs to match an eligible occupation. The official list has it.")
    }
  }

  if (countrySlug === "united-kingdom") {
    add(atLeastEnglish(answers, 1), 4, "UK work routes usually ask for English. The official page lists the evidence they accept.", "English evidence for a UK route looks light. The official page lists what counts.")
    if (pathwaySlug === "skilled-worker" || pathwaySlug === "scale-up") {
      add(answers.employed === "employed", 8, "Sponsored UK routes need an employer. Working now is the starting point.", "A licensed sponsor is not on your profile yet.")
      add((incomeRank[answers.income] ?? 0) >= 3, 6, "A higher income band is a rough signal next to UK salary rules. The official page has the rule.", "UK salary rules may be a stretch from the income you entered. Confirm the figure on GOV.UK.")
    }
    if (pathwaySlug === "global-talent") {
      add(answers.preference === "talent" || atLeastExperience(answers, 3), 8, "Talent routes look for a record of recognition, not only years of work.", "Global Talent looks for independent evidence of recognition. The official page shows what that means.")
      add(atLeastEducation(answers, 6) || answers.preference === "talent", 4, "Postgraduate study or a talent goal is a starting signal.", "An endorsement is its own step. A degree on its own is not one.")
    }
  }

  if (answers.countries.includes(countrySlug)) {
    checks.push({ ok: true, points: 4, reason: "You named this country as a destination.", gap: "" })
  }

  const categoryBoost =
    (answers.preference === "talent" && pathwaySlug === "global-talent") ||
    (answers.preference === "work" && (pathwaySlug === "opportunity-card" || pathwaySlug === "general-employment-permit" || pathwaySlug === "scale-up")) ||
    (answers.preference === "skilled" && (pathwaySlug === "eu-blue-card" || pathwaySlug === "skilled-worker" || pathwaySlug === "express-entry" || pathwaySlug === "federal-skilled-worker" || pathwaySlug === "critical-skills"))
  if (categoryBoost) checks.push({ ok: true, points: 4, reason: "The route matches the kind of move you said you want.", gap: "" })

  const score = clamp(checks.filter((check) => check.ok).reduce((sum, check) => sum + check.points, 8))
  const reasons = checks.filter((check) => check.ok && check.reason).map((check) => check.reason).slice(0, 4)
  const gaps = checks.filter((check) => !check.ok && check.gap).map((check) => check.gap).slice(0, 4)
  if (reasons.length === 0) reasons.push("Add a little more on education, work, and language, and this picture will get clearer.")
  if (gaps.length === 0) gaps.push("The official page still has the thresholds, lists, and forms.")
  return { score, reasons, gaps }
}

export function completeness(answers: AssessmentAnswers) {
  const fields = [
    answers.firstName,
    answers.ageBand,
    answers.nationality,
    answers.residence,
    answers.marital,
    answers.dependents,
    answers.education,
    answers.field,
    answers.graduationYear,
    answers.occupation,
    answers.experience,
    answers.industry,
    answers.employed,
    answers.income,
    answers.english,
    answers.englishTest,
    answers.german,
    answers.french,
    answers.countries.length ? "yes" : "",
    answers.preference,
    answers.timeline,
    answers.funds,
    answers.refusals,
  ]
  const filled = fields.filter((field) => field.trim() !== "").length
  return Math.round((filled / fields.length) * 100)
}

export function matchPathways(answers: AssessmentAnswers): PathwayMatch[] {
  return pathways
    .map((pathway) => {
      const country = countries.find((item) => item.slug === pathway.countrySlug)
      const { score, reasons, gaps } = scorePathway(answers, pathway.countrySlug, pathway.slug)
      const actions = [
        ...pathway.nextSteps.slice(0, 2),
        gaps[0] ? `Look at this next: ${gaps[0]}` : "Read the official page before you spend.",
      ].slice(0, 4)
      return {
        countrySlug: pathway.countrySlug,
        countryName: country?.name ?? pathway.countrySlug,
        pathwaySlug: pathway.slug,
        pathwayName: pathway.name,
        score,
        status: statusFor(score),
        reasons,
        missingRequirements: gaps,
        recommendedActions: actions,
        officialSourceUrl: pathway.source.sourceUrl,
        sourceName: pathway.source.sourceName,
        lastVerifiedAt: pathway.source.lastVerifiedAt,
      }
    })
    .sort((a, b) => b.score - a.score)
}

export function matchCountries(matches: PathwayMatch[]): CountryMatch[] {
  const best = new Map<string, PathwayMatch>()
  for (const match of matches) {
    const current = best.get(match.countrySlug)
    if (!current || match.score > current.score) best.set(match.countrySlug, match)
  }
  return countries.map((country) => {
    const match = best.get(country.slug)
    return {
      countrySlug: country.slug,
      countryName: country.name,
      flag: country.flag,
      score: match?.score ?? 0,
      status: statusFor(match?.score ?? 0),
      pathwayName: match?.pathwayName ?? "",
      pathwaySlug: match?.pathwaySlug ?? "",
    }
  }).sort((a, b) => b.score - a.score)
}

function taskShape(gap: string) {
  if (/language|English|German|French|\btest\b/i.test(gap)) return { id: "language", phase: "Language", title: "Sort your language evidence", effort: "The test this route names" }
  if (/job offer|sponsor|\boffer\b/i.test(gap)) return { id: "offer", phase: "Job offer", title: "Line up the job offer", effort: "An employer on this route" }
  if (/endorsement|recognition|Talent/i.test(gap)) return { id: "recognition", phase: "Recognition", title: "Gather recognition evidence", effort: "What this route lists" }
  if (/degree|qualification|education|credential/i.test(gap)) return { id: "qualification", phase: "Qualification", title: "Line up your qualification", effort: "The level this route asks for" }
  if (/fund|salary|income/i.test(gap)) return { id: "funds", phase: "Funds", title: "Check the money this route asks for", effort: "The figure on the official page" }
  if (/occupation/i.test(gap)) return { id: "occupation", phase: "Work", title: "Name your occupation", effort: "The list on this route" }
  if (/experience/i.test(gap)) return { id: "experience", phase: "Work", title: "Show your years of work", effort: "Dates, duties, and letters" }
  if (/refusal/i.test(gap)) return { id: "refusal", phase: "Record", title: "Read how a refusal is handled", effort: "The official guidance" }
  if (/\bage\b/i.test(gap)) return { id: "age", phase: "Rules", title: "Check the age rule", effort: "The official page" }
  return { id: "gap", phase: "This route", title: "Close this gap", effort: "On this route" }
}

export function buildTasks(matches: PathwayMatch[]): ActionTask[] {
  const top = matches[0]
  if (!top) return []
  const route = `/pathways/${top.countrySlug}/${top.pathwaySlug}`
  const grouped = new Map<string, { id: string; phase: string; title: string; effort: string; gaps: string[] }>()
  for (const gap of top.missingRequirements) {
    if (/^The official page still has/i.test(gap)) continue
    const shape = taskShape(gap)
    const current = grouped.get(shape.id)
    if (current) current.gaps.push(gap)
    else grouped.set(shape.id, { ...shape, gaps: [gap] })
  }
  const tasks: ActionTask[] = [...grouped.values()].map((item) => ({
    id: item.id,
    phase: item.phase,
    title: item.title,
    description: item.gaps.join(" "),
    priority: "High" as const,
    effort: item.effort,
    status: "not_started" as const,
    href: route,
  }))
  tasks.push({
    id: "read-route",
    phase: "This route",
    title: `Read ${top.pathwayName}`,
    description: `Requirements, documents, and checks for this route in ${top.countryName}.`,
    priority: "High",
    effort: "20 minutes",
    status: "not_started",
    href: route,
  })
  tasks.push({
    id: "official",
    phase: "This route",
    title: `Open ${top.sourceName}`,
    description: `The authority that publishes ${top.pathwayName}.`,
    priority: "High",
    effort: "The official page",
    status: "not_started",
    href: top.officialSourceUrl,
  })
  return tasks
}

export const emptyAnswers: AssessmentAnswers = {
  firstName: "",
  ageBand: "",
  nationality: "",
  residence: "",
  marital: "",
  dependents: "",
  education: "",
  field: "",
  graduationYear: "",
  occupation: "",
  experience: "",
  industry: "",
  employed: "",
  income: "",
  english: "",
  englishTest: "",
  german: "",
  french: "",
  countries: [],
  preference: "",
  timeline: "",
  funds: "",
  refusals: "",
}
