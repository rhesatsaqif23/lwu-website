"use client"

import { motion, Variants } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import ContactInfo from "@/components/shared/ContactInfo"
import { Send } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ContactBlock() {
  return (
    <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <SectionHeading
              label="Contact Us"
              title="Connect with us. We are here to help you start your journey."
              light
            />
            <ContactInfo light />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-bold text-white text-xl mb-6">Send us a message</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name *" required className="col-span-1 bg-white/10 border border-white/20 text-white placeholder:text-blue-300 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors" />
                <input type="text" placeholder="Last Name" className="col-span-1 bg-white/10 border border-white/20 text-white placeholder:text-blue-300 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors" />
              </div>
              <input type="email" placeholder="Email *" required className="bg-white/10 border border-white/20 text-white placeholder:text-blue-300 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors" />
              <textarea rows={4} placeholder="Message..." className="bg-white/10 border border-white/20 text-white placeholder:text-blue-300 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors resize-none" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
