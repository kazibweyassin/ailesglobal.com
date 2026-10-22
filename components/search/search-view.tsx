"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { searchContent } from "@/lib/search"

export function SearchView() {
  const [query, setQuery] = useState("")
  const hits = useMemo(() => searchContent(query), [query])

  return (
    <div className="mx-auto max-w-[760px] px-5 py-14 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#1e4638]">SEARCH</p>
      <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em]">Find your path.</h1>
      <label className="mt-8 block text-sm font-medium" htmlFor="site-search">
        Search
        <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Germany IT, Critical Skills, Express Entry" className="mt-2 w-full rounded-2xl border border-[#e4d9c8] bg-white px-4 py-3 text-base font-normal" />
      </label>
      <p className="mt-4 text-sm text-[#5e594f]">{query.trim().length < 2 ? "Try a country, a route, or a question." : `${hits.length} result${hits.length === 1 ? "" : "s"}.`}</p>
      <ul className="mt-6 grid gap-3">
        {hits.map((hit) => (
          <li key={hit.href + hit.title}>
            <Link href={hit.href} className="block rounded-[24px] border border-[#e4d9c8] bg-[#fffcf8] p-5 hover:border-[#1e4638]">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1e4638]">{hit.kind.toUpperCase()}</p>
              <p className="mt-2 text-xl tracking-[-0.02em]">{hit.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#5e594f]">{hit.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
