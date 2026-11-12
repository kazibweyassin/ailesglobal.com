"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, Search, X } from "lucide-react"
import { Wordmark } from "@/components/site/wordmark"
import { scholarshipsUrl } from "@/lib/links"

type NavLink = {
  href: string
  label: string
  also?: string[]
  external?: boolean
}

const links: NavLink[] = [
  { href: "/services/individuals", label: "For Individuals", also: ["/"] },
  { href: "/businesses", label: "For Businesses" },
  { href: scholarshipsUrl, label: "Scholarships", external: true },
  { href: "/countries", label: "Countries" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const active = (link: NavLink) =>
    !link.external && (path === link.href || (link.also ?? []).includes(path) || (link.href === "/countries" && path.startsWith("/countries")) || (link.href === "/resources" && path.startsWith("/resources")))

  return (
    <header className="sticky top-0 z-40 border-b border-[#dce5d8]/90 bg-[#f6f1e7]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-3 px-4 lg:px-8">
        <Link href="/" aria-label="Ailes Global" className="shrink-0">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-6 text-[15px] text-[#3a362f] xl:flex" aria-label="Primary">
          {links.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} className="hover:text-[#1e4638]">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={active(link) ? "text-[#1e4638]" : "hover:text-[#1e4638]"} aria-current={active(link) ? "page" : undefined}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-1.5">
          <Link href="/search" aria-label="Search" className="inline-flex size-11 items-center justify-center rounded-full text-[#1c1b19] hover:bg-[#efe6d6]">
            <Search size={18} />
          </Link>
          <Link href="/assessment" className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full bg-[#f2a900] px-3 py-2 text-[13px] font-bold text-[#111827] shadow-[0_8px_18px_rgba(242,169,0,0.16)] hover:bg-[#e19c00] sm:px-4 sm:text-sm">
            Start assessment
          </Link>
          <button type="button" className="inline-flex size-11 items-center justify-center rounded-full hover:bg-[#efe6d6] xl:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-[#e4d9c8] bg-[#f6f1e7] px-5 py-4 xl:hidden" aria-label="Mobile">
          <div className="grid gap-1">
            {links.map((link) =>
              link.external ? (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-3 text-base hover:bg-[#efe6d6]">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-3 text-base hover:bg-[#efe6d6]">
                  {link.label}
                </Link>
              ),
            )}
            <Link href="/assessment" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#f2a900] px-4 py-3 text-center text-sm font-bold text-[#111827]">
              Start assessment
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
