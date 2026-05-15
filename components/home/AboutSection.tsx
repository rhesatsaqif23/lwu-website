"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { aboutHeadlineContent, aboutItems } from "@/data/about"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const AboutHeadlineSection = () => {
  return (
    <motion.div variants={fadeUp} className="relative flex w-full flex-col items-start gap-5 md:gap-[30px]">
      <header className="flex w-full max-w-[377px] flex-col items-start gap-3 md:gap-[14px]">
        <Badge className="h-auto rounded-[5px] bg-slate-100 px-3 py-1 md:px-[15px] md:py-[2.5px] font-sans text-xs md:text-[13px] font-semibold leading-6 text-primary hover:bg-slate-200 border-none">
          {aboutHeadlineContent.eyebrow}
        </Badge>
        <h2 className="w-full font-bold text-3xl md:text-[42px] leading-tight md:leading-[1.2] text-primary">
          {aboutHeadlineContent.title}
        </h2>
      </header>
      <div className="w-full">
        <p className="font-sans text-base md:text-lg font-normal leading-relaxed md:leading-[27px] text-muted-foreground">
          {aboutHeadlineContent.description}
        </p>
      </div>
    </motion.div>
  )
}

const AboutDescriptionSection = () => {
  return (
    <div className="relative flex w-full flex-col items-start gap-6 md:gap-[30px] pb-2.5">
      <motion.div 
        variants={stagger} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        className="flex w-full flex-col items-start gap-6 md:gap-[30px]"
      >
        {aboutItems.map((item) => (
          <motion.div key={item.title} variants={fadeUp} className="w-full">
            <Card className="w-full max-w-[486px] rounded-[10px] border-0 bg-white shadow-[4px_0px_12px_4px_#f2f2f2]">
              <CardContent className="flex flex-col items-start gap-2.5 px-5 py-4 md:px-[30px] md:py-[15px]">
                <header className="flex w-full items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-primary">
                    <Image
                      className="h-5 w-5 brightness-0 invert"
                      alt={item.iconAlt}
                      src={item.iconSrc}
                      width={20}
                      height={20}
                    />
                  </div>
                  <h3 className={`-mt-px whitespace-nowrap text-xl md:text-2xl font-semibold text-primary font-sans ${item.titleClassName}`}>
                    {item.title}
                  </h3>
                </header>
                <p className="-mt-px self-stretch text-sm font-normal leading-[21px] text-slate-700 font-sans">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="w-full py-16 xl:py-[120px] bg-white overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        variants={stagger}
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-4 sm:px-6 lg:px-8 xl:px-24 xl:flex-row xl:justify-between xl:items-start"
      >
        <div className="flex w-full lg:w-1/2 flex-col items-start gap-8 md:gap-[30px]">
          <AboutHeadlineSection />
          <AboutDescriptionSection />
          <motion.div variants={fadeUp}>
            <Button
              asChild
              className="h-auto rounded-[5px] border border-solid border-primary bg-primary px-6 py-3 md:px-8 md:py-[15px] text-white hover:bg-primary/90 transition-colors"
            >
              <Link href="/about" className="font-sans text-sm md:text-base font-bold leading-[1.2] md:leading-[29.6px] tracking-wide">
                EXPLORE COURSES
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeUp} 
          className="w-full max-w-[813px] rounded-2xl overflow-hidden relative flex-1"
        >
          <div className="relative min-h-[300px] sm:min-h-[420px] w-full xl:h-[706px]">
            <Image
              src="/figmaAssets/about-image.png"
              alt="About Learning With Us"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 813px"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
