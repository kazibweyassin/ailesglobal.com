import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getResource, resources } from "@/data/immigration"

type Params = { slug: string }

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const resource = getResource(slug)
  if (!resource) return {}
  return { title: resource.title, description: resource.summary, alternates: { canonical: `/resources/${resource.slug}` } }
}

export default async function ResourcePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const resource = getResource(slug)
  if (!resource) notFound()

  return (
    <article className="mx-auto max-w-[760px] px-5 py-14 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#1e4638]">{resource.category.toUpperCase()}</p>
      <h1 className="mt-3 font-serif text-5xl leading-[1.05] tracking-[-0.03em]">{resource.title}</h1>
      <p className="mt-4 text-sm text-[#5e594f]">{resource.readTime} read</p>
      <div className="mt-8 grid gap-5 text-lg leading-relaxed text-[#2c2924]">
        {resource.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Link href="/resources" className="mt-10 inline-flex text-sm font-medium text-[#1e4638]">
        All guides
      </Link>
    </article>
  )
}
