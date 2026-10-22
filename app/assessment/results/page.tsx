import { ResultsView } from "@/components/assessment/results-view"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Where you stand",
  description: "Your picture of Germany, Canada, Ireland, and the United Kingdom, from what you shared.",
  path: "/assessment/results",
  index: false,
})

export default function ResultsPage() {
  return <ResultsView />
}
