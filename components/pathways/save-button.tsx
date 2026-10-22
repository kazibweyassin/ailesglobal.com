"use client"

import { useEffect, useState } from "react"
import { loadSaved, toggleSaved } from "@/lib/store"

export function SaveButton({ countrySlug, pathwaySlug }: { countrySlug: string; pathwaySlug: string }) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setSaved(loadSaved().some((item) => item.countrySlug === countrySlug && item.pathwaySlug === pathwaySlug))
  }, [countrySlug, pathwaySlug])

  return (
    <button
      type="button"
      className="rounded-full border border-[#1c1b19] px-5 py-3 text-sm font-medium hover:bg-[#efe6d6]"
      onClick={() => {
        const next = toggleSaved({ countrySlug, pathwaySlug, savedAt: new Date().toISOString() })
        setSaved(next.some((item) => item.countrySlug === countrySlug && item.pathwaySlug === pathwaySlug))
      }}
    >
      {saved ? "Saved on this device" : "Save pathway"}
    </button>
  )
}
