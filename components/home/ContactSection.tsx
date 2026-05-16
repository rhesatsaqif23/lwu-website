"use client"

import { Variants, motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactHeading, contactInfo, contactFields } from "@/data/contact"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

interface ContactContentItem {
  label: string;
  value: string;
}

export default function ContactSection() {
  return (
    <div className="w-full font-sans">
      {/* 1. Contact Info Cards Section */}
      <section className="w-full px-4 pt-12 md:pt-16 md:px-10 lg:px-24">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 md:gap-12">
          {/* Section Heading */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex w-full max-w-[600px] flex-col items-center gap-[14px] text-center"
          >
            <Badge className="h-auto rounded-[5px] bg-slate-100 px-[15px] py-[2.5px] text-[13px] font-semibold text-primary hover:bg-slate-200 border-none">
              {contactHeading.eyebrow}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              {contactHeading.title}
            </h2>
          </motion.div>

          {/* Info Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid w-full grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-12"
          >
            {contactInfo.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-10 bg-primary/20" />
                  <div className="text-base text-slate-500 leading-relaxed">
                    {item.title === "WhatsApp" ? (
                      <div className="flex flex-col gap-0.5">
                        {(item.content as ContactContentItem[]).map((c, i) => (
                          <p key={i} className="whitespace-nowrap">
                            <span className="font-normal">{c.label}</span> {c.value}
                          </p>
                        ))}
                      </div>
                    ) : item.title === "E-mail" ? (
                      <div className="flex flex-col gap-0.5">
                        {(item.content as ContactContentItem[]).map((c, i) => (
                          <p key={i}>
                            <a href={`mailto:${c.value}`} className="hover:underline">
                              {c.value}
                            </a>
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p>{item.content[0] as string}</p>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section className="relative w-full overflow-hidden bg-white py-12 md:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch lg:flex-row lg:items-center px-4 md:px-10 lg:px-24">
          {/* Image Side */}
          <div className="w-full lg:flex-1 relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px]">
            <Image
              src="/figmaAssets/contact-image.png"
              alt="Contact Us"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Form Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px" }}
            variants={fadeUp}
            className="w-full lg:flex-1 lg:pl-12"
          >
            <Card className="rounded-xl border border-slate-100 bg-white shadow-2xl max-w-[580px] mx-auto lg:mx-0">
              <CardContent className="flex flex-col gap-8 p-6 sm:p-10">
                <header className="flex flex-col items-start gap-3">
                  <Badge className="rounded-[5px] bg-slate-100 px-3 py-1 text-[12px] font-semibold text-primary border-none">
                    Message Us
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                    Contact us. We are waiting for your message.
                  </h2>
                </header>

                <form className="grid grid-cols-1 gap-5 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
                  {contactFields.map((field) => (
                    <div key={field.id} className={field.gridCols}>
                      <Label htmlFor={field.id} className="sr-only">
                        {field.label}
                      </Label>
                      {field.type === "textarea" ? (
                        <Textarea
                          id={field.id}
                          placeholder={field.label}
                          className="min-h-32 rounded-lg border-slate-200 px-5 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:ring-0 transition-all resize-none"
                        />
                      ) : (
                        <Input
                          id={field.id}
                          type={field.id === "email" ? "email" : "text"}
                          placeholder={field.label}
                          className="h-12 rounded-lg border-slate-200 px-5 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:ring-0 transition-all"
                        />
                      )}
                    </div>
                  ))}

                  <div className="md:col-span-1 pt-2">
                    <Button
                      type="submit"
                      className="h-auto rounded-lg bg-primary px-10 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-all shadow-lg active:scale-95"
                    >
                      SUBMIT
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
