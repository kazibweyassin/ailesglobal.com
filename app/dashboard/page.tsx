import type { Metadata } from "next"
import { DashboardView } from "@/components/dashboard/dashboard-view"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your plan, your saved pathways, and the next steps, kept on this device.",
  alternates: { canonical: "/dashboard" },
}

export default function DashboardPage() {
  return <DashboardView />
}
