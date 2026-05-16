"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { programsData } from "@/data/programs";
import { BookOpen, GraduationCap, Briefcase, Zap, LucideIcon } from "lucide-react";
import type { ProgramCategory } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  "general-english": BookOpen,
  "ielts": GraduationCap,
  "business": Briefcase,
  "self-dev": Zap,
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const ProgramCard = ({ category }: { category: ProgramCategory }) => {
  const Icon = iconMap[category.id] || BookOpen;

  return (
    <motion.div variants={fadeUp} className="flex w-full flex-col items-center h-full">
      <div className="w-full max-w-[357.5px] h-full">
        <Card className="h-full w-full rounded-none border-0 bg-white p-2.5 shadow-[0px_4px_15px_#0000001a] hover:shadow-lg transition-shadow duration-300">
          <CardContent className="flex h-full flex-col items-center justify-start rounded-[10px] px-5 py-8 md:px-[30px] md:pb-[30px] md:pt-10">
            <Link
              href={category.href}
              className="flex w-full flex-col items-center text-center group h-full"
            >
              <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center mb-6 md:mb-8">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-blue-50/80 rounded-full scale-110 z-0 group-hover:scale-125 transition-transform duration-300" />
                
                {/* Lucide Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  <Icon 
                    className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-300" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div className="flex h-0.5 w-[30px] bg-primary group-hover:w-full transition-all duration-300 mb-6 md:mb-8" />

              <header className="pb-[14px] md:pb-[20px] mt-auto">
                <h3 className="font-sans text-xl md:text-2xl font-bold leading-tight md:leading-[30px] tracking-normal text-primary group-hover:text-secondary transition-colors">
                  {category.title}
                </h3>
              </header>

              <p className="font-sans text-sm md:text-base font-normal leading-relaxed md:leading-6 tracking-normal text-primary mb-auto">
                {category.description}
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default function ProgramCategories() {
  return (
    <section className="w-full bg-[#f6f9fe] py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[50px] md:gap-[70px] px-4 sm:px-6 lg:px-8 xl:px-24">
        <section className="flex w-full justify-center self-stretch">
          <div className="flex w-full max-w-[367px] flex-col items-center gap-3.5">
            <Badge
              variant="secondary"
              className="h-auto rounded-[5px] bg-blue-50 px-[15px] py-1 font-sans text-center text-[13px] font-semibold leading-6 tracking-normal text-primary hover:bg-blue-100 border-none"
            >
              {programsData.sectionContent.eyebrow}
            </Badge>
            <header className="flex w-full flex-col items-center">
              <h2 className="font-sans text-center text-3xl md:text-4xl font-bold leading-tight tracking-tight text-primary">
                {programsData.sectionContent.title}
              </h2>
            </header>
          </div>
        </section>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid w-full grid-cols-1 place-items-stretch gap-[30px] sm:grid-cols-2 lg:grid-cols-4"
        >
          {programsData.categories.map((category) => (
            <ProgramCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
