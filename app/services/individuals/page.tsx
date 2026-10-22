import type { Metadata } from "next"
import { IndividualsExperience } from "@/components/individuals/experience"

export const metadata: Metadata = {
  title: "For individuals",
  description: "See where you stand for Germany, Canada, Ireland, and the UK. A clear plan, from one profile.",
  alternates: { canonical: "/services/individuals" },
}

export default function IndividualsPage() {
  return <IndividualsExperience />
}
