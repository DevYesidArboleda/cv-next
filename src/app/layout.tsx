import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import { CAREER_START_YEAR, profile } from "@/data/profile"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const title = `${profile.name} — ${profile.role.es}`
const description = `Desarrollador Full Stack especializado en VTEX IO, React y Next.js. Desde ${CAREER_START_YEAR} construyendo e-commerce y aplicaciones web para marcas de Latinoamérica.`

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: profile.name }],
  keywords: ["Yesid Banguera", "Full Stack Developer", "VTEX IO", "React", "Next.js", "TypeScript", "E-commerce"],
  openGraph: {
    type: "profile",
    title,
    description,
    images: [{ url: profile.photo, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [profile.photo],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#16181d" },
  ],
}

// Applied before paint so there's no light/dark flash on load.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":!window.matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){document.documentElement.classList.add("dark")}})()`

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role.en,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressCountry: "CO" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["VTEX IO", "React", "Next.js", "TypeScript", "Node.js", "GraphQL"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
