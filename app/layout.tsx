import type { Metadata, Viewport } from "next"
import { Instrument_Serif, Outfit } from "next/font/google"
import { JsonLd } from "@/components/site/json-ld"
import { Shell } from "@/components/site/shell"
import { siteName, siteUrl } from "@/lib/seo"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument" })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ailes Global — Pathways to Germany, Canada, Ireland, and the UK",
    template: "%s · Ailes Global",
  },
  description: "Find a path to Germany, Canada, Ireland, or the UK. A clear plan, from one profile.",
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "immigration",
  verification: {
    google: "RUcdY6_Ji1NLW9LsqmsE0F9Y-mPKwAW4cwTHQQpr6E4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    url: siteUrl,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f1e7",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        email: "hello@ailesglobal.com",
        description: "Ailes helps people compare pathways to Germany, Canada, Ireland, and the United Kingdom and leave with a plan.",
        logo: `${siteUrl}/apple-icon.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#organization` },
        description: "Find a path to Germany, Canada, Ireland, or the UK. A clear plan, from one profile.",
      },
    ],
  }

  return (
    <html lang="en" className={`${outfit.variable} ${serif.variable}`}>
      <body className="bg-[#f6f1e7] font-sans text-[#1c1b19] antialiased">
        <JsonLd data={jsonLd} />
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
