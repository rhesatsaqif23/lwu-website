"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Music2, Facebook, Youtube } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/lwu_id",
    icon: "/assets/ri-instagram-fill.svg",
    size: 25,
  },
  {
    label: "Facebook",
    href: "#",
    icon: "/assets/vector-6.svg",
    size: 10,
  },
  {
    label: "YouTube",
    href: "#",
    icon: "/assets/vector-12.svg",
    size: 21,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@lwu_id",
    icon: "/assets/ic-baseline-tiktok.svg",
    size: 25,
  },
]

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products & Services", href: "/products" },
  { label: "Contact", href: "/contact" },
]

const categoryLinks = [
  "General English",
  "IELTS",
  "Business English",
  "Self-Development",
]

function FooterBrandSection() {
  return (
    <section className="w-full max-w-[315px]">
      <div className="flex w-full flex-col items-start gap-8">
        <header className="flex w-full items-center gap-3">
          <Image
            className="size-12 object-cover"
            alt="Learning With Us Logo"
            src="/assets/cropped-circle-image-1-1.png"
            width={50}
            height={50}
          />
          <div className="flex min-w-0 flex-1 flex-col items-start">
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              Learning With Us
            </h2>
          </div>
        </header>
        <div className="flex w-full flex-col items-start">
          <p className="text-gray-600 leading-relaxed text-[15px]">
            Empowering learners across Indonesia to master English and unlock
            global opportunities since 2017.
          </p>
        </div>
        <nav aria-label="Social media" className="w-full">
          <ul className="flex items-center gap-7">
            {socialLinks.map((item) => (
              <li key={item.label} className="flex items-center">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex items-center justify-center transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Image
                    className="object-contain"
                    alt={item.label}
                    src={item.icon}
                    width={item.size}
                    height={25}
                    style={{ height: '25px', width: 'auto' }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

function FooterNavColumnSection() {
  return (
    <section aria-labelledby="footer-pages-title" className="w-full lg:max-w-[150px]">
      <h2 id="footer-pages-title" className="text-lg font-bold text-primary mb-8">
        Pages
      </h2>
      <nav aria-label="Footer pages">
        <ul className="flex flex-col gap-4">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-gray-600 hover:text-secondary transition-colors text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

function FooterNavigationSection() {
  return (
    <section aria-labelledby="footer-categories-title" className="w-full lg:max-w-[200px]">
      <h2 id="footer-categories-title" className="text-lg font-bold text-primary mb-8">
        Categories
      </h2>
      <nav aria-label="Footer categories">
        <ul className="flex flex-col gap-4">
          {categoryLinks.map((label) => (
            <li key={label}>
              <Link
                href="/products"
                className="text-gray-600 hover:text-secondary transition-colors text-base"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

function FooterLinksColumnSection() {
  return (
    <section className="flex flex-1 flex-col items-start min-w-[280px]">
      <h2 className="text-lg font-bold text-primary mb-8">
        Subscribe to our Newsletter
      </h2>
      <form
        className="flex w-full flex-col items-start gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="email"
          placeholder="Your Email Address"
          className="h-14 w-full rounded-lg border-transparent bg-white shadow-sm px-6 text-sm text-primary placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary"
        />
        <Button
          type="submit"
          className="h-auto min-h-[45px] min-w-[145px] rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white hover:bg-primary-dark transition-all"
        >
          SUBSCRIBE
        </Button>
      </form>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#f6f9fe] px-4 pt-24 pb-10 md:px-10 lg:pt-32 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-12">
          <FooterBrandSection />
          
          <div className="flex flex-col gap-12 sm:flex-row sm:gap-20 lg:flex-1 lg:justify-end xl:gap-32">
            <FooterNavColumnSection />
            <FooterNavigationSection />
            <FooterLinksColumnSection />
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Learning With Us. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
