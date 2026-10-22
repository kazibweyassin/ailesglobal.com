"use client"

import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

export function Announcement() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="bg-[#1e4638] text-[#f6f1e7]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-4 py-1.5 text-sm leading-relaxed lg:px-8">
        <p>
          Your path to Germany, Canada, Ireland, or the UK starts here.{" "}
          <Link href="/assessment" className="underline underline-offset-2">
            Start your free assessment
          </Link>
        </p>
        <button type="button" className="inline-flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-white/10" aria-label="Dismiss notice" onClick={() => setVisible(false)}>
          <X size={15} />
        </button>
      </div>
    </div>
  )
}
