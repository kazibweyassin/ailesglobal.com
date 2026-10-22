import type { Metadata } from "next"
import { AboutExperience } from "@/components/about/experience"

export const metadata: Metadata = {
  title: "About",
  description: "Ailes compares Germany, Canada, Ireland, and the United Kingdom from one profile. A score, the gaps, and a plan.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return <AboutExperience />
}
