import { Announcement } from "@/components/site/announcement"
import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6f1e7] text-[#1c1b19]">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Announcement />
      <SiteHeader />
      <main id="content">{children}</main>
      <SiteFooter />
    </div>
  )
}
