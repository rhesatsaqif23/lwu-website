import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Learning With Us | Online English & Self-Development Courses",
  description:
    "Learning With Us (LWU) is an online English course platform helping 1,000+ students achieve their goals in General English, IELTS, Business English, and Self-Development.",
  keywords: ["English course", "IELTS preparation", "online learning", "Business English", "LWU"],
  openGraph: {
    title: "Learning With Us | Online English & Self-Development Courses",
    description:
      "LWU is an online English learning platform helping 1,000+ students since 2017.",
    siteName: "Learning With Us",
    type: "website",
  },
  icons: {
    icon: "/learning-with-us.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
