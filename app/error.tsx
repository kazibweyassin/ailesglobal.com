"use client"

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-24">
      <h1 className="font-serif text-5xl tracking-[-0.03em]">Let’s try that again.</h1>
      <p className="mt-4 text-lg text-[#4e4940]">Give it another moment. If it still will not load, head home and we will be here.</p>
      <button type="button" onClick={() => reset()} className="mt-8 rounded-full bg-[#1e4638] px-5 py-3 text-sm font-medium text-[#f6f1e7]">
        Try again
      </button>
    </div>
  )
}
