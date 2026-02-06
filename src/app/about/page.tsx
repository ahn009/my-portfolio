import { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About | Muhammad Ahsan - Full Stack Developer",
  description:
    "Learn about Muhammad Ahsan's journey as a Full Stack Developer. 3+ years of experience building scalable applications with Next.js, React, Node.js, and modern web technologies.",
  openGraph: {
    title: "About Muhammad Ahsan - Full Stack Developer",
    description:
      "Full Stack Developer with expertise in Next.js, React, Node.js. Passionate about performance optimization and AI integration.",
    url: "https://muhammadawais.dev/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
