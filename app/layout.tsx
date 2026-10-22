import type { Metadata, Viewport } from "next"
import { Instrument_Serif, Outfit } from "next/font/google"
import { Shell } from "@/components/site/shell"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument" })

export const metadata: Metadata = {
  metadataBase: new URL("https://ailesglobal.com"),
  title: {
    default: "Ailes Global — Move forward with confidence",
    template: "%s · Ailes Global",
  },
  description: "Find a path to Germany, Canada, Ireland, or the UK. A clear plan, from one profile.",
  verification: {
    google: "RUcdY6_Ji1NLW9LsqmsE0F9Y-mPKwAW4cwTHQQpr6E4",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ailes Global — Move forward with confidence",
    description: "Ailes helps you see where you stand for Germany, Canada, Ireland, and the United Kingdom.",
    url: "https://ailesglobal.com",
    siteName: "Ailes Global",
    type: "website",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f1e7",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ailes Global",
    url: "https://ailesglobal.com",
    description: "Ailes helps people compare pathways to Germany, Canada, Ireland, and the United Kingdom and leave with a plan.",
    email: "hello@ailesglobal.com",
  }

  return (
    <html lang="en" className={`${outfit.variable} ${serif.variable}`}>
      <body className="bg-[#f6f1e7] font-sans text-[#1c1b19] antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
