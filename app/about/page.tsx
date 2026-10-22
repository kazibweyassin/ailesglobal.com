import { AboutExperience } from "@/components/about/experience"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "About",
  description: "Ailes compares Germany, Canada, Ireland, and the United Kingdom from one profile. A score, the gaps, and a plan.",
  path: "/about",
})

export default function AboutPage() {
  return <AboutExperience />
}
