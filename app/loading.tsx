export default function Loading() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8" aria-hidden="true">
      <div className="h-4 w-28 animate-pulse rounded-full bg-[#e5d9c6]" />
      <div className="mt-6 h-16 max-w-xl animate-pulse rounded-2xl bg-[#e5d9c6]" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="h-40 animate-pulse rounded-[28px] bg-[#efe6d6]" />
        <div className="h-40 animate-pulse rounded-[28px] bg-[#efe6d6]" />
      </div>
    </div>
  )
}
