"use client"

import Link from "next/link"
import { useState } from "react"
import { Check } from "lucide-react"
import { plans } from "@/data/immigration"

export function Pricing() {
  const [focus, setFocus] = useState(plans[0].id)
  const plan = plans.find((item) => item.id === focus) ?? plans[0]
  const href = plan.id === "assessment" ? "/assessment" : `/assessment?focus=${plan.id}`

  return (
    <section id="plans" className="scroll-mt-24 bg-[#e7f0e4]">
      <div className="mx-auto max-w-[980px] px-5 py-20 lg:px-8">
      <div className="text-center">
        <p className="inline-flex rounded-full border border-[#1e4638] px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#1e4638]">PLANS</p>
        <h2 className="mt-6 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">Support that fits where you are</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#4e4940]">Start free and see where you stand. Guided support is on the way. Nothing here is a fee for a visa, and nothing here guarantees an outcome.</p>
      </div>
      <div className="mt-8 flex justify-center gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Plan focus">
        {plans.map((item) => (
          <button key={item.id} type="button" role="tab" aria-selected={item.id === plan.id} onClick={() => setFocus(item.id)} className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm ${item.id === plan.id ? "bg-[#1c1b19] text-[#f6f1e7]" : "bg-[#efe6d6] text-[#1c1b19] hover:bg-[#e5d9c6]"}`}>
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-[#5e594f]">{plan.audience}</p>
      <div className="mt-6 grid gap-4 rounded-[28px] bg-white p-3 sm:p-4 lg:grid-cols-2">
        <article className="relative rounded-[24px] bg-[#f6f1e7] p-7 sm:p-8">
          <p className="absolute right-6 top-6 rounded-full bg-[#d7e6c8] px-3 py-1 text-xs font-medium text-[#1e4638]">Start here</p>
          <p className="pr-24 text-sm font-medium text-[#1e4638]">Essential</p>
          <h3 className="mt-2 pr-24 text-2xl tracking-[-0.03em]">Your first look</h3>
          <p className="mt-6 font-serif text-6xl tracking-[-0.04em]">Free</p>
          <p className="mt-2 text-sm text-[#5e594f]">Ready whenever you are.</p>
          <Link href={href} className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#f2a900] px-5 py-3 text-sm font-bold text-[#111827] hover:bg-[#e19c00]">
            See if you qualify
          </Link>
          <ul className="mt-8 grid gap-3 text-sm leading-relaxed">
            {plan.essential.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 shrink-0 text-[#1e4638]" size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[24px] bg-[#1e4638] p-7 text-[#f6f1e7] sm:p-8">
          <p className="text-sm font-medium text-[#d7e6c8]">Guided</p>
          <h3 className="mt-2 text-2xl tracking-[-0.03em]">Guided support</h3>
          <p className="mt-6 font-serif text-6xl tracking-[-0.04em]">Soon</p>
          <p className="mt-2 text-sm text-[#d7e6c8]">A closer look, when you want company on the journey.</p>
          <Link href="/contact?interest=guided" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#f2a900] px-5 py-3 text-sm font-bold text-[#111827] hover:bg-[#e19c00]">
            Keep me posted
          </Link>
          <p className="mt-8 text-sm font-medium">Everything in Essential, plus:</p>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed">
            {plan.guided.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 shrink-0 text-[#d7e6c8]" size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
      </div>
    </section>
  )
}
