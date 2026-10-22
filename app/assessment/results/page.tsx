import type { Metadata } from "next"
import { ResultsView } from "@/components/assessment/results-view"

export const metadata: Metadata = {
  title: "Where you stand",
  description: "Your picture of Germany, Canada, Ireland, and the United Kingdom, from what you shared.",
  alternates: { canonical: "/assessment/results" },
}

export default function ResultsPage() {
  return <ResultsView />
}
