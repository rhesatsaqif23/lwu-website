"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white shadow-md" : "bg-white shadow-sm",
        )}
      >
        <nav
          className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8 xl:px-24"
          aria-label="Primary navigation"
        >
          {/* Logo Section */}
          <Link href="/" className="flex min-w-0 items-center gap-2 group">
            <Image
              className="size-10 shrink-0 object-cover"
              alt="Learning With Us Logo"
              src="/figmaAssets/lwu-logo.png"
              width={40}
              height={40}
            />
            <div className="flex min-w-0 flex-col">
              <span className="flex items-center text-lg sm:text-xl font-bold leading-tight tracking-tight text-primary group-hover:text-secondary transition-colors">
                Learning With Us
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-12">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label} className="list-none">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative py-2 flex items-center text-base font-semibold leading-6 transition-colors duration-200",
                      isActive
                        ? "text-secondary"
                        : "text-gray-700 hover:text-secondary",
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Actions Section */}
          <div className="hidden md:flex shrink-0 items-center justify-end gap-4 sm:gap-5">


            {/* Notifications */}
            <button
              type="button"
              className="flex items-center justify-center p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Open notifications"
            >
              <Image
                className="size-6"
                alt="Notification Icon"
                src="/figmaAssets/icon-notification.svg"
                width={24}
                height={24}
              />
            </button>

            <Separator
              orientation="vertical"
              className="h-4 w-0.5 bg-gray-200"
            />

            {/* CTA Button */}
            <Button
              asChild
              className="h-auto min-w-[140px] rounded bg-primary px-8 py-2.5 text-center text-sm font-bold leading-6 text-white hover:bg-primary-dark transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Link href="/contact">APPLY NOW</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-70 w-72 bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <span className="font-bold text-primary text-lg">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>



              {/* Drawer nav links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200",
                        isActive
                          ? "bg-primary text-white"
                          : "text-primary hover:bg-gray-100",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <div className="p-6 border-t border-gray-100">
                <Button
                  asChild
                  className="w-full h-auto rounded bg-primary py-3 text-center text-sm font-bold text-white hover:bg-primary-dark"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    APPLY NOW
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to push content below fixed navbar */}
      <div className="h-[72px]" />
    </>
  );
}
