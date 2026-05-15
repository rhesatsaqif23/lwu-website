import Link from "next/link"
import { Instagram, Music2, Linkedin, Mail } from "lucide-react"

const footerLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products & Services", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  programs: [
    { label: "General English", href: "/products/general-english" },
    { label: "IELTS Preparation", href: "/products/ielts-preparation" },
    { label: "Business English", href: "/products" },
    { label: "Self-Development", href: "/products" },
  ],
  social: [
    { label: "Instagram (@lwu_id)", href: "https://instagram.com/lwu_id", icon: Instagram },
    { label: "TikTok (@lwu_id)", href: "https://tiktok.com/@lwu_id", icon: Music2 },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                <span className="text-secondary font-black text-lg leading-none">L</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-base text-white">Learning</span>
                <span className="font-semibold text-xs text-secondary tracking-widest uppercase">With Us</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              The English course you&apos;re looking for.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2 text-sm text-blue-200">
              <span>South Tangerang, Banten, Indonesia</span>
              <a href="tel:+628121234567" className="hover:text-secondary transition-colors">
                +62 812-1234-5678
              </a>
              <a href="mailto:contact@learningwithus.com" className="hover:text-secondary transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                contact@learningwithus.com
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-4">Pages</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-4">Programs</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-200 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us + Newsletter */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-4">Follow Us</h3>
            <ul className="flex flex-col gap-3 mb-6">
              {footerLinks.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-200 text-sm hover:text-secondary transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-white mb-2">Stay updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-white/10 border border-white/20 text-white placeholder:text-blue-300 text-sm px-3 py-2 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                />
                <button className="bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-blue-300 text-sm">
            © 2024 Learning With Us. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs">
            Built with ❤️ for English learners everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
