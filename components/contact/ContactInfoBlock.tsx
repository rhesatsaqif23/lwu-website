"use client"

import { motion } from "framer-motion"
import ContactInfo from "@/components/shared/ContactInfo"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ContactInfoBlock() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-primary mb-1">Get in Touch</h2>
        <p className="text-muted text-sm">
          Have questions about our courses? Want to discuss your learning goals? We typically
          respond within 24 hours.
        </p>
      </div>

      <ContactInfo />

      {/* Social label */}
      <div className="pt-4 border-t border-gray-100">
        <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">Follow Us</p>
        <div className="flex flex-col gap-1 text-sm text-muted">
          <span>Instagram: @lwu_id</span>
          <span>TikTok: @lwu_id</span>
          <span>LinkedIn: Learning With Us</span>
        </div>
      </div>
    </motion.div>
  )
}
