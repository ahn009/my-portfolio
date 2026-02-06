import { Metadata } from "next";
import ProjectsPageContent from "./ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects | Muhammad Ahsan - Full Stack Developer",
  description:
    "Explore Muhammad Ahsan's portfolio of web development projects. Next.js, React, Node.js, and AI-powered applications. Production-ready code with proven results.",
  openGraph: {
    title: "My Projects - Full Stack Development Portfolio",
    description:
      "E-commerce platforms, educational tools, CMS systems, and business websites. See how I build scalable web applications.",
    url: "https://muhammadawais.dev/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
