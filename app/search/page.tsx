import type { Metadata } from "next"
import { SearchView } from "@/components/search/search-view"

export const metadata: Metadata = {
  title: "Search",
  description: "Search countries, pathways, guides, and questions.",
  alternates: { canonical: "/search" },
}

export default function SearchPage() {
  return <SearchView />
}
