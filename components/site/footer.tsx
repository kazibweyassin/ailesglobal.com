import Link from "next/link"
import { countries, pathways } from "@/data/immigration"
import { Wordmark } from "@/components/site/wordmark"

const product = [
  { href: "/assessment", label: "See if you qualify" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/countries", label: "Countries" },
  { href: "/pathways", label: "Pathways" },
  { href: "/resources/how-to-read-your-score", label: "How your score works" },
]

const company = [
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/businesses", label: "For businesses" },
  { href: "/contact", label: "Contact" },
  { href: "/search", label: "Search" },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#1c1b19] text-[#f6f1e7]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" aria-label="Ailes Global">
            <Wordmark tone="cream" />
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#d9d0c2]">With you from the first question to a plan you can follow.</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-[#c9bfb0]">DESTINATIONS</p>
          <ul className="mt-4 grid gap-2 text-sm text-[#efe6d6]">
            {countries.map((country) => (
              <li key={country.slug}>
                <Link href={`/countries/${country.slug}`} className="hover:text-white">
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-[#c9bfb0]">PATHWAYS</p>
          <ul className="mt-4 grid gap-2 text-sm text-[#efe6d6]">
            {pathways.slice(0, 6).map((pathway) => (
              <li key={`${pathway.countrySlug}-${pathway.slug}`}>
                <Link href={`/pathways/${pathway.countrySlug}/${pathway.slug}`} className="hover:text-white">
                  {pathway.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#c9bfb0]">PRODUCT</p>
            <ul className="mt-4 grid gap-2 text-sm text-[#efe6d6]">
              {product.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#c9bfb0]">COMPANY</p>
            <ul className="mt-4 grid gap-2 text-sm text-[#efe6d6]">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1180px] px-5 py-8 text-sm leading-relaxed text-[#c9bfb0] lg:px-8">
          <p>Ailes helps you find a path to Germany, Canada, Ireland, or the United Kingdom.</p>
          <p className="mt-4 text-xs text-[#a39888]">© {new Date().getFullYear()} Ailes Global. <a className="underline" href="mailto:hello@ailesglobal.com">hello@ailesglobal.com</a></p>
        </div>
      </div>
    </footer>
  )
}
