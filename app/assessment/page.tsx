import type { Metadata } from "next"
import { AssessmentWizard } from "@/components/assessment/wizard"

export const metadata: Metadata = {
  title: "See if you qualify",
  description: "A few questions about your story. A clearer picture of Germany, Canada, Ireland, and the UK.",
  alternates: { canonical: "/assessment" },
}

export default async function AssessmentPage({ searchParams }: { searchParams: Promise<{ focus?: string }> }) {
  const { focus } = await searchParams
  return <AssessmentWizard focus={focus} />
}
