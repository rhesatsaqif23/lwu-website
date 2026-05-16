import type { Metadata } from "next"
import Breadcrumb from "@/components/shared/Breadcrumb"
import ContactContent from "@/components/contact/ContactContent"

export const metadata: Metadata = {
  title: "Contact Us | Learning With Us",
  description:
    "Get in touch with Learning With Us. We're happy to answer your questions about our English courses, IELTS programs, and more.",
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#F5F9FF] py-8">
        <div className="container-lg">
          <Breadcrumb
            items={[{ label: "Contact Us" }]}
            centered
            separator="//"
            uppercase
            hideHomeIcon
          />
        </div>
      </section>

      <ContactContent />
    </main>
  )
}
