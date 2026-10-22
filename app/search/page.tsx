import { SearchView } from "@/components/search/search-view"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Search",
  description: "Search countries, pathways, guides, and questions.",
  path: "/search",
  index: false,
})

export default function SearchPage() {
  return <SearchView />
}
