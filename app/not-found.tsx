import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-24">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#1e4638]">404</p>
      <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em]">This page has moved on.</h1>
      <p className="mt-4 text-lg text-[#4e4940]">The countries, the guides, and your assessment are right here.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-[#1e4638] px-5 py-3 text-sm font-medium text-[#f6f1e7]">
          Home
        </Link>
        <Link href="/assessment" className="rounded-full border border-[#1c1b19] px-5 py-3 text-sm font-medium">
          See if you qualify
        </Link>
      </div>
    </div>
  )
}
