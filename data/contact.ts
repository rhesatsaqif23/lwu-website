export const contactHeading = {
  eyebrow: "Contact Us",
  title: "Connect with us. We are here to help you start your journey.",
};

export const contactInfo = [
  {
    icon: "/figmaAssets/component-1-14.svg",
    title: "Address",
    content: ["South Tangerang, Banten, Indonesia"],
  },
  {
    icon: "/figmaAssets/component-1-9.svg",
    title: "Phone",
    content: [
      { label: "Head Office", value: "+62 812-1234-5678" },
      { label: "Branch office", value: "+62 821-9876-5432" },
    ],
  },
  {
    icon: "/figmaAssets/component-1-7.svg",
    title: "E-mail",
    content: [
      { label: "contact", value: "contact@learningwithus.com" },
      { label: "support", value: "support@learningwithus.com" },
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
    label: "E mail *",
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
