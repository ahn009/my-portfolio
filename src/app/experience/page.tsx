import { Metadata } from "next";
import ExperiencePageContent from "./ExperiencePageContent";

export const metadata: Metadata = {
  title: "Experience | Muhammad Ahsan - Full Stack Developer",
  description:
    "Professional experience of Muhammad Ahsan. Full Stack Developer at S-Tech Innovative and Byte-Forge Solutions. Building scalable applications with modern tech stack.",
  openGraph: {
    title: "Work Experience - Muhammad Ahsan",
    description:
      "Full Stack Developer with 3+ years of experience. Expertise in Next.js, React, Node.js, PostgreSQL, and AI integration.",
    url: "https://muhammadawais.dev/experience",
  },
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
