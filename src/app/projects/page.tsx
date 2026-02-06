import { Metadata } from "next";
import ProjectsPageContent from "./ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects | Muhammad Ahsan - Frontend Developer & React Specialist",
  description:
    "Explore Muhammad Ahsan's portfolio of frontend and web development projects. React, Next.js, TypeScript, and AI-integrated applications with proven results.",
  openGraph: {
    title: "My Projects - Frontend Development Portfolio",
    description:
      "E-commerce platforms, educational tools, CMS systems, and business websites. See how I build modern, performant web applications.",
    url: "https://muhammadawais.dev/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
