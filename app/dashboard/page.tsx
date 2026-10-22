import { DashboardView } from "@/components/dashboard/dashboard-view"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Dashboard",
  description: "Your plan, your saved pathways, and the next steps, kept on this device.",
  path: "/dashboard",
  index: false,
})

export default function DashboardPage() {
  return <DashboardView />
}
