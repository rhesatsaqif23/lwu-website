"use client"

import { motion, Variants } from "framer-motion"
import { Send } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ContactForm() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold text-primary mb-2">Send us a Message</h2>
      <p className="text-muted text-sm mb-6">
        Have questions about our courses? Want to discuss your learning goals? We typically
        respond within 24 hours.
      </p>

      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-first-name" className="text-sm font-semibold text-primary">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-first-name"
              type="text"
              required
              placeholder="John"
              className="border border-gray-200 text-dark placeholder:text-muted text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-last-name" className="text-sm font-semibold text-primary">
              Last Name
            </label>
            <input
              id="contact-last-name"
              type="text"
              placeholder="Doe"
              className="border border-gray-200 text-dark placeholder:text-muted text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-semibold text-primary">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="john@example.com"
            className="border border-gray-200 text-dark placeholder:text-muted text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-subject" className="text-sm font-semibold text-primary">
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="What is this about?"
            className="border border-gray-200 text-dark placeholder:text-muted text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className="text-sm font-semibold text-primary">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Tell us how we can help..."
            className="border border-gray-200 text-dark placeholder:text-muted text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-secondary transition-colors resize-none"
          />
        </div>

        <button
          id="contact-submit"
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </motion.div>
  )
}
