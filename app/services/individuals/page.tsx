import { IndividualsExperience } from "@/components/individuals/experience"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "For individuals",
  description: "See where you stand for Germany, Canada, Ireland, and the UK. A clear plan, from one profile.",
  path: "/",
})

export default function IndividualsPage() {
  return <IndividualsExperience />
}
