"use client"

import { motion, Variants } from "framer-motion"
import { Send } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"
import ContactInfo from "@/components/shared/ContactInfo"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ContactSnippet() {
  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-lg relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col gap-8"
          >
            <SectionHeading
              label="Contact Us"
              title="Connect with us. We are here to help you start your journey."
              light
            />
            <ContactInfo light />
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-bold text-white text-xl mb-6">
              Connect with us. We are waiting for your message.
            </h3>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-blue-100">
                    First Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="bg-white/10 border border-white/20 text-white placeholder:text-blue-300 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-blue-100">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="bg-white/10 border border-white/20 text-white placeholder:text-blue-300 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-100">
                  Email <span className="text-secondary">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-white/10 border border-white/20 text-white placeholder:text-blue-300 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-100">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="bg-white/10 border border-white/20 text-white placeholder:text-blue-300 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
