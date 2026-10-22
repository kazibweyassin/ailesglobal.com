import { IndividualsExperience } from "@/components/individuals/experience"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Ailes Global — Pathways to Germany, Canada, Ireland, and the UK",
  description: "Ailes helps you find a path to Germany, Canada, Ireland, or the UK, and leave with a plan you can follow.",
  path: "/",
  absolute: true,
})

export default function Page() {
  return <IndividualsExperience />
}
