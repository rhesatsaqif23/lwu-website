export const contactHeading = {
  eyebrow: "Contact Us",
  title: "Connect with us. We are here to help you start your journey.",
};

export const contactInfo = [
  {
    icon: "/figmaAssets/component-1-15.svg",
    title: "Address",
    content: ["South Tangerang, Banten, Indonesia"],
  },
  {
    icon: "/figmaAssets/whatsapp-official.svg",
    title: "WhatsApp",
    content: [
      { label: "Official", value: "+62 857-1135-9655" },
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

export const contactFields = [
  {
    id: "first-name",
    label: "First Name *",
    type: "input" as const,
    gridCols: "md:col-span-1",
  },
  {
    id: "last-name",
    label: "Last Name",
    type: "input" as const,
    gridCols: "md:col-span-1",
  },
  {
    id: "email",
    label: "E-mail *",
    type: "input" as const,
    gridCols: "md:col-span-2",
  },
  {
    id: "message",
    label: "Type your message",
    type: "textarea" as const,
    gridCols: "md:col-span-2",
  },
];
