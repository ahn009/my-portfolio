import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Muhammad Ahsan - FrontEnd Devloper | Next.js Expert",
  description:
    "Get in touch with Muhammad Ahsan for web development projects, freelance opportunities, or collaborations. FrontEnd Devloper | Next.js Expert specializing in Next.js and React.",
  openGraph: {
    title: "Contact Muhammad Ahsan - FrontEnd Devloper | Next.js Expert",
    description: "Discuss your next web development project. Available for freelance work and full-time positions.",
    url: "https://muhammadawais.dev/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
