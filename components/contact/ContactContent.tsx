"use client"

import { cn } from "@/lib/utils"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { contactInfo, contactFields } from "@/data/contact"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ContactContent() {
  // Mapping icons to the contactInfo array order: Address, WhatsApp (Phone), E-mail
  const icons = [
    "/figmaAssets/icon-address.svg",
    "/figmaAssets/icon-contact.svg",
    "/figmaAssets/icon-email.svg",
  ]

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container-lg">
        <div className="mx-auto flex w-full max-w-[1140px] flex-col items-start justify-center gap-12 lg:flex-row lg:gap-[80px]">
          {/* Sidebar: Info Cards */}
          <aside className="w-full lg:max-w-[320px] grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-col gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="rounded-[5px] border-2 border-solid border-[#ebeff6] bg-transparent shadow-none hover:border-secondary/30 transition-colors duration-300">
                  <CardContent className="flex flex-col items-center justify-center px-5 py-8 text-center md:px-8 md:py-10">
                    <div className="relative h-12 w-12 mb-5">
                      <Image
                        src={icons[index]}
                        alt={info.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="pb-1.5">
                      <h3 className="text-xl font-bold text-primary">
                        {info.title === "WhatsApp" ? "Phone" : info.title}
                      </h3>
                    </div>
                    <div className="text-base font-normal leading-relaxed text-slate-600">
                      {info.title === "WhatsApp" ? (
                        <div className="flex flex-wrap items-center justify-center gap-1.5">
                          {(info.content as { label: string; value: string }[]).map((c, i) => (
                            <p key={i} className="flex gap-1.5">
                              <span className="font-medium">{c.label}:</span>
                              <span>{c.value}</span>
                            </p>
                          ))}
                        </div>
                      ) : info.title === "E-mail" ? (
                        <div className="flex flex-col gap-1">
                          {(info.content as { label: string; value: string }[]).map((c, i) => (
                            <p key={i}>{c.value}</p>
                          ))}
                        </div>
                      ) : (
                        <p>{info.content[0] as string}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </aside>

          {/* Main: Contact Form */}
          <main className="flex w-full flex-col items-start gap-10 lg:gap-[60px]">
            <header className="flex w-full flex-col gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col gap-4"
              >
                <div className="mb-2">
                  <span className={cn(
                    "inline-block rounded-[5px] px-[15px] py-1 text-[13px] font-semibold leading-6 tracking-normal",
                    "bg-blue-50 text-primary"
                  )}>
                    Get In Contact
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-primary">
                    Have questions about our courses?<br />
                    We&apos;re here to help.
                  </h2>
                </div>
                <p className="text-lg font-normal leading-relaxed text-slate-600">
                  We&apos;d love to hear from you. Send us a message and we&apos;ll
                  get back to you within 24 hours.
                </p>
              </motion.div>
            </header>

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              {contactFields.map((field) => (
                <div key={field.id} className={field.gridCols}>
                  {field.type === "textarea" ? (
                    <Textarea
                      id={field.id}
                      placeholder={field.label}
                      className="min-h-[160px] md:min-h-[200px] rounded-[5px] border-[#c7c7c7] bg-white px-4 py-4 text-sm font-normal text-slate-700 shadow-[0px_8px_28px_#00c5e70f] focus:border-secondary focus:ring-0 transition-all resize-none md:px-6"
                    />
                  ) : (
                    <Input
                      id={field.id}
                      type={field.id === "email" ? "email" : "text"}
                      placeholder={field.label}
                      className="h-[40px] md:h-[45px] rounded-[5px] border-[#c7c7c7] bg-white px-4 text-sm font-normal text-slate-700 shadow-[0px_8px_28px_#00c5e70f] focus:border-secondary focus:ring-0 transition-all md:px-6"
                    />
                  )}
                </div>
              ))}
              <div className="pt-2 md:col-span-2">
                <Button
                  type="submit"
                  className="h-auto min-h-[50px] min-w-[160px] rounded-[5px] bg-primary px-10 py-4 font-bold text-white hover:bg-primary/95 transition-all shadow-md active:scale-95"
                >
                  Send Message
                </Button>
              </div>
            </motion.form>
          </main>
        </div>
      </div>
    </section>
  )
}
