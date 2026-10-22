import { BusinessExperience } from "@/components/businesses/experience"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "For businesses",
  description: "Help the people you hire see where they stand for Germany, Canada, Ireland, and the UK.",
  path: "/businesses",
})

export default function BusinessesPage() {
  return <BusinessExperience />
}
