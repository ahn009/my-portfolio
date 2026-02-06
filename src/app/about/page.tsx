import { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About | Muhammad Ahsan - FrontEnd Devloper | Next.js Expert",
  description:
    "Learn about Muhammad Ahsan's journey as a FrontEnd Devloper | Next.js Expert. 1 years of experience building scalable applications with Next.js, React, Node.js, and modern web technologies.",
  openGraph: {
    title: "About Muhammad Ahsan - FrontEnd Devloper | Next.js Expert",
    description:
      "FrontEnd Devloper | Next.js Expert with expertise in Next.js, React, Node.js. Passionate about performance optimization and AI integration.",
    url: "https://muhammadawais.dev/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
