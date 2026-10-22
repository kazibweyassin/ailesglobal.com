import type { Metadata } from "next"
import { IndividualsExperience } from "@/components/individuals/experience"

export const metadata: Metadata = {
  title: "Move abroad with a plan",
  description: "Ailes helps you find a path to Germany, Canada, Ireland, or the UK, and leave with a plan you can follow.",
  alternates: { canonical: "/" },
}

export default function Page() {
  return <IndividualsExperience />
}
