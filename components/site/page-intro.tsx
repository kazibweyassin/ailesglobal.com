export function PageIntro({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <section className="mx-auto max-w-[1180px] px-5 pb-4 pt-14 lg:px-8 lg:pt-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#1e4638]">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl font-serif text-[2.7rem] leading-[1.02] tracking-[-0.03em] sm:text-6xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#4e4940]">{lede}</p>
    </section>
  )
}