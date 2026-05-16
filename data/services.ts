import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "ielts-toefl-preparation",
    slug: "ielts-toefl-preparation",
    title: "IELTS & TOEFL Preparation: Master Your Test Score",
    category: "EXAM PREP",
    description:
      "Comprehensive preparation for IELTS and TOEFL exams with proven strategies. Our instructors provide targeted training for Reading, Writing, Listening, and Speaking skills. Get personalized guidance to achieve your target score for study abroad and career advancement.",
    image: "https://assets.studies-overseas.com/PTE_vs_TOEFL_vs_IELTS_01_6419f95b39.jpg",
    date: "Ongoing",
    ctaLabel: "Enroll Now",
    ctaLink: "/products/ielts-preparation",
    instructors: ["Rossa Junia Utami", "Judith Andini"],
    highlights: [
      "All 4 IELTS/TOEFL skills covered",
      "Proven test strategies",
      "Live instructor sessions",
      "Flexible scheduling",
      "Free consultation included",
    ],
  },
  {
    id: "general-english-course",
    slug: "general-english-course",
    title: "General English Course: Build Confidence in English",
    category: "EDUCATION",
    description:
      "Flexible online English course designed for learners of all ages (7-62) and levels. From absolute beginners to advanced learners, our expert instructors guide you through practical, real-world English. Improve your speaking, listening, reading, and writing skills at your own pace.",
    image: "https://img.iienstitu.com/course-assets/courses/en/english-course-beginner-to-advanced/header.jpg?width=1920&quality=65&v=2025-11-13",
    date: "Ongoing",
    ctaLabel: "Start Learning",
    ctaLink: "/products/general-english",
    instructors: ["Nurul Hasanah", "Rossa Junia Utami"],
    highlights: [
      "All skill levels supported",
      "Flexible schedule",
      "Expert instructors",
      "Real-world materials",
      "Ages 7 to 62",
    ],
  },
  {
    id: "webinar-sharing-sessions",
    slug: "webinar-sharing-sessions",
    title: "Webinar & Sharing Sessions: Expert Insights on Scholarships & Abroad Life",
    category: "LEARN",
    description:
      "Join our regular webinar and sharing sessions on topics like LPDP preparation, scholarship applications, life in Korea, positioning for international opportunities, and IELTS writing strategies. Learn directly from experienced instructors and successful students.",
    image: "https://i.ytimg.com/vi/fyar9grhA2g/sddefault.jpg",
    date: "Monthly",
    ctaLabel: "Join Webinar",
    ctaLink: "#contact",
    instructors: ["Dimastyaji Nurseta", "Judith Andini", "Nurul Hasanah"],
    highlights: [
      "Free webinar sessions",
      "Expert instructors & speakers",
      "Topics: Scholarships, LPDP, Study Abroad Life",
      "Interactive Q&A",
      "Recorded sessions available",
    ],
  },
]
