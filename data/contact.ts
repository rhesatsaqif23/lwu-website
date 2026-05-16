import { ContactInfoItem, ContactField } from "@/types";

export const contactHeading = {
  eyebrow: "Contact Us",
  title: "Connect with us. We are here to help you start your journey.",
};

export const contactInfo: ContactInfoItem[] = [
  {
    icon: "/figmaAssets/component-1-15.svg",
    title: "Address",
    content: ["South Tangerang, Banten, Indonesia"],
  },
  {
    icon: "/figmaAssets/whatsapp-official.svg",
    title: "WhatsApp",
    content: [
      { label: "WhatsApp", value: "+62 857-1135-9655" },
    ],
  },
  {
    icon: "/figmaAssets/component-1-7.svg",
    title: "E-mail",
    content: [
      { label: "General Inquiry", value: "lwuid.info@gmail.com" },
    ],
  },
];

export const contactFields: ContactField[] = [
  {
    id: "name",
    label: "Your Name",
    type: "input" as const,
    gridCols: "md:col-span-1",
  },
  {
    id: "email",
    label: "E-mail",
    type: "input" as const,
    gridCols: "md:col-span-1",
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "input" as const,
    gridCols: "md:col-span-1",
  },
  {
    id: "subject",
    label: "Subject",
    type: "input" as const,
    gridCols: "md:col-span-1",
  },
  {
    id: "message",
    label: "Type your message",
    type: "textarea" as const,
    gridCols: "md:col-span-2",
  },
];
