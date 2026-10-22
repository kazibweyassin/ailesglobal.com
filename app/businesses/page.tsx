import type { Metadata } from "next"
import { BusinessExperience } from "@/components/businesses/experience"

export const metadata: Metadata = {
  title: "For businesses",
  description: "Help the people you hire see where they stand for Germany, Canada, Ireland, and the UK.",
  alternates: { canonical: "/businesses" },
}

export default function BusinessesPage() {
  return <BusinessExperience />
}
