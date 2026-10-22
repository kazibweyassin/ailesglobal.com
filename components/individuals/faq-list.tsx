"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="border-t border-[#e4d9c8]">
      {items.map((item, index) => {
        const expanded = open === index
        return (
          <div key={item.question} className="border-b border-[#e4d9c8]">
            <h3>
              <button type="button" className="flex min-h-14 w-full items-center justify-between gap-6 py-5 text-left text-lg" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)}>
                <span>{item.question}</span>
                <Plus className={`shrink-0 transition ${expanded ? "rotate-45" : ""}`} size={18} aria-hidden="true" />
              </button>
            </h3>
            {expanded ? <p className="max-w-3xl pb-5 leading-relaxed text-[#4e4940]">{item.answer}</p> : null}
          </div>
        )
      })}
    </div>
  )
}
