"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroContent } from "@/data/hero"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f9fe] min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-82px)] flex items-center">

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-10 px-4 py-12 sm:px-6 md:gap-12 lg:px-8 xl:px-24 xl:flex-row lg:gap-16">
        {/* Left: Text content */}
        <header className="flex w-full max-w-[623px] flex-col items-center text-center xl:items-start xl:text-left">
          <div className="flex w-full flex-col items-center xl:items-start gap-4">
            <motion.p 
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center xl:justify-start gap-2 text-base sm:text-lg font-medium text-primary"
            >
              {heroContent.eyebrowParts.map((part, index) => (
                <span
                  key={index}
                  className={cn(
                    "whitespace-nowrap",
                    part.highlighted && "border-b-2 border-secondary"
                  )}
                >
                  {part.text}
                </span>
              ))}
            </motion.p>
            
            <motion.h1 
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="w-full text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]"
            >
              <span className="text-secondary">{heroContent.title.highlight}</span>
              <span className="text-primary block sm:inline">
                {heroContent.title.main}
              </span>
            </motion.h1>

            <motion.p 
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="pt-4 sm:pt-6 lg:pt-8 text-base font-normal leading-relaxed text-gray-600 sm:text-lg lg:text-xl"
            >
              {heroContent.description}
            </motion.p>

            <motion.div 
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex w-full flex-wrap items-center justify-center xl:justify-start gap-4 pt-8 lg:pt-10"
            >
              <Button
                asChild
                className="h-auto rounded-lg bg-primary px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-bold text-white hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                <Link href={heroContent.ctaLink}>{heroContent.ctaLabel}</Link>
              </Button>
            </motion.div>
          </div>
        </header>

        {/* Right: Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] flex-1 items-stretch justify-center"
        >
          <Image
            className="object-contain"
            style={{ width: '100%', height: 'auto' }}
            alt="Learning illustration"
            src={heroContent.images.main}
            width={800}
            height={740}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px"
            priority
          />
        </motion.div>
      </div>
      {/* Background decoration - Moved to bottom and set to very low z-index */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-1/2 top-1/2 h-[952px] w-[1920px] -translate-x-1/2 -translate-y-1/2 opacity-20">
          {heroContent.images.background.map((img, idx) => (
            <Image
              key={idx}
              className="absolute left-0 max-w-none"
              style={{ top: img.top }}
              alt=""
              src={img.src}
              fill
              priority={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
