export type ReviewStatus = "VERIFIED" | "NEEDS_REVIEW" | "OUTDATED" | "DRAFT"

export type FitStatus = "strong_potential" | "potential" | "needs_improvement" | "limited_fit"

export type Source = {
  sourceName: string
  sourceUrl: string
  lastVerifiedAt: string
  reviewStatus: ReviewStatus
}

export type Pathway = {
  slug: string
  countrySlug: string
  name: string
  category: "work" | "skilled" | "talent" | "study" | "residence"
  summary: string
  designedFor: string
  description: string
  requirements: string[]
  documents: string[]
  nextSteps: string[]
  typicalProfile: string
  source: Source
}

export type Country = {
  slug: string
  name: string
  code: string
  flag: string
  summary: string
  overview: string
  workOpportunities: string
  typicalProfiles: string[]
  keyChecks: string[]
  faqs: { question: string; answer: string }[]
  source: Source
}

export type Resource = {
  slug: string
  category: string
  title: string
  summary: string
  readTime: string
  body: string[]
}

export type PlanFocus = {
  id: string
  label: string
  audience: string
  essential: string[]
  guided: string[]
}

export type AssessmentAnswers = {
  firstName: string
  ageBand: string
  nationality: string
  residence: string
  marital: string
  dependents: string
  education: string
  field: string
  graduationYear: string
  occupation: string
  experience: string
  industry: string
  employed: string
  income: string
  english: string
  englishTest: string
  german: string
  french: string
  countries: string[]
  preference: string
  timeline: string
  funds: string
  refusals: string
}

export type PathwayMatch = {
  countrySlug: string
  countryName: string
  pathwaySlug: string
  pathwayName: string
  score: number
  status: FitStatus
  reasons: string[]
  missingRequirements: string[]
  recommendedActions: string[]
  officialSourceUrl: string
  sourceName: string
  lastVerifiedAt: string
}

export type CountryMatch = {
  countrySlug: string
  countryName: string
  flag: string
  score: number
  status: FitStatus
  pathwayName: string
  pathwaySlug: string
}

export type ActionTask = {
  id: string
  phase: string
  title: string
  description: string
  priority: "High" | "Medium" | "Low"
  effort: string
  status: "not_started" | "in_progress" | "completed"
  href?: string
}

export type AssessmentResult = {
  completedAt: string
  completeness: number
  answers: AssessmentAnswers
  matches: PathwayMatch[]
  countries: CountryMatch[]
  tasks: ActionTask[]
}
