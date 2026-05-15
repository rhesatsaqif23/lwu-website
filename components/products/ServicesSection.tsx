"use client"

import { motion, Variants } from "framer-motion"
import { Users, ArrowRight } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"
import Link from "next/link"
import type { Service } from "@/types"

const services: Service[] = [
  {
    slug: "general-english",
    by: "LWU Team",
    title: "General English Course",
    type: "Course, All levels",
    meta: "300+ Students enrolled",
    ctaLabel: "Enroll Now",
  },
  {
    slug: "ielts-preparation",
    by: "LWU Team",
    title: "IELTS Preparation Program",
    type: "Course, Flexible schedule",
    meta: "1,000+ Students enrolled",
    ctaLabel: "Enroll Now",
  },
  {
    slug: "scholarship-database",
    by: "LWU Team",
    title: "Scholarship Database Ebook",
    type: "Ebook, Self-paced",
    meta: "100+ Scholarships",
    ctaLabel: "Enroll Now",
  },
]

const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        <SectionHeading
          label="Our Services"
          title="Featured Services"
          align="center"
          className="mb-12"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.slug}
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface rounded-[12px] border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-[11px] font-semibold text-secondary tracking-wide">
                {svc.type}
              </span>
              <h3 className="font-bold text-primary text-lg">{svc.title}</h3>
              <p className="text-[11px] text-muted">By {svc.by}</p>
              <div className="flex items-center gap-1.5 text-sm text-muted">
                <Users className="w-4 h-4 text-secondary" />
                {svc.meta}
              </div>
              <Link
                href={`/products/${svc.slug}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-dark transition-colors"
              >
                {svc.ctaLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-primary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-bold text-white text-xl mb-1">Not sure where to start?</h3>
            <p className="text-blue-200 text-sm">Our team is happy to help you pick the right program.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors flex-shrink-0"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
