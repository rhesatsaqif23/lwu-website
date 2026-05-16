"use client"

import { motion } from "framer-motion"
import Breadcrumb from "@/components/shared/Breadcrumb"
import SectionHeading from "@/components/shared/SectionHeading"
import ServiceCard from "@/components/shared/ServiceCard"
import { services } from "@/data/services"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb Section */}
      <motion.section 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#F5F9FF] py-8"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
          <Breadcrumb
            items={[{ label: "Services" }]}
            centered
            separator="//"
            uppercase
            hideHomeIcon
          />
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-8 md:py-12">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="What We Offer"
              title="Our Services"
              align="center"
              className="mb-8 md:mb-12"
              titleClassName="text-3xl md:text-4xl"
            />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
