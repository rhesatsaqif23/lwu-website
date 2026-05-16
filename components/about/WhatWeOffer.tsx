"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const scholarshipContent = {
  eyebrow: "Products",
  title: "What We Offer",
  description:
    "We offer flexible, expert-led courses designed for every level. Whether you're starting your English journey or preparing for international certification, our products combine practical skills with personal development. All courses are available online, letting you learn anytime, anywhere.",
  cta: "VIEW ALL PRODUCTS",
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-[#F5F9FF] px-6 py-12 md:py-16 md:px-12 lg:px-20 xl:px-[120px] 2xl:px-[160px] overflow-hidden">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex w-full max-w-[1340px] flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:gap-[78px]"
      >
        {/* Left Side: Image with Decorative Circle */}
        <motion.div variants={fadeUp} className="relative w-full max-w-[648px]">
          {/* Decorative Circle */}
          <div className="absolute left-0 top-1/2 z-0 h-[100px] w-[100px] translate-x-[-30px] translate-y-[30px] rounded-full bg-primary sm:h-[140px] sm:w-[140px] lg:h-[180px] lg:w-[180px]" />
          
          <Card className="relative z-10 overflow-visible border-0 bg-transparent shadow-none">
            <CardContent className="relative p-0">
              <div className="relative aspect-647/435 w-full">
                <Image
                  className="object-contain"
                  alt="Scholarship program preview"
                  src="/figmaAssets/programs-preview.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 648px"
                  priority
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div variants={fadeUp} className="w-full max-w-[615px]">
          <div className="flex w-full flex-col items-start gap-6 md:gap-[30px]">
            <header className="flex w-full max-w-[367px] flex-col items-start gap-3 md:gap-[14px]">
              <div className="inline-flex items-center rounded-[5px] bg-slate-100 px-[15px] py-1">
                <span className="font-sans text-xs md:text-sm font-semibold tracking-wide text-primary">
                  {scholarshipContent.eyebrow}
                </span>
              </div>
              <h2 className="w-full font-bold text-3xl md:text-[42px] leading-tight md:leading-[1.2] text-primary">
                {scholarshipContent.title}
              </h2>
            </header>
            
            <p className="w-full font-sans text-base md:text-lg font-normal leading-relaxed text-muted-foreground">
              {scholarshipContent.description}
            </p>
            
            <Button
              asChild
              className="h-auto rounded-[5px] bg-primary px-8 py-4 md:py-[15px] text-white hover:bg-primary/90 font-semibold text-base transition-colors"
            >
              <Link href="/products">
                {scholarshipContent.cta}
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
