import { AssessmentWizard } from "@/components/assessment/wizard"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "See if you qualify",
  description: "A few questions about your story. A clearer picture of Germany, Canada, Ireland, and the UK.",
  path: "/assessment",
})

export default async function AssessmentPage({ searchParams }: { searchParams: Promise<{ focus?: string }> }) {
  const { focus } = await searchParams
  return <AssessmentWizard focus={focus} />
}
