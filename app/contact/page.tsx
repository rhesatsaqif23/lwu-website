import type { Metadata } from "next"
import ContactHero from "@/components/contact/ContactHero"
import ContactInfoBlock from "@/components/contact/ContactInfoBlock"
import ContactForm from "@/components/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us | Learning With Us",
  description:
    "Get in touch with Learning With Us. We're happy to answer your questions about our English courses, IELTS programs, and more.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="section-padding bg-surface">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfoBlock />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
