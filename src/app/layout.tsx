import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { generatePersonSchema, generateWebsiteSchema } from "@/lib/schema";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://byahsan.vercel.app/"),
  title: "Muhammad Ahsan – Expert Frontend Developer | Modern Web Solutions",
  description:
    "Showcasing Muhammad Ahsan’s portfolio: cutting-edge Frontend Development with Next.js, React, Tailwind CSS & AI-integrated web solutions. Explore projects and skills.",
  verification: {
    google: "qaffrCRgQTIweoljI3L7It6hQEI7tjESpBOZ71gx2hQ",
  },
  keywords: [
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "Tailwind CSS Developer",
  "JavaScript Developer",
  "AI Web Developer",
  "Web Developer Pakistan",
  "Hire Frontend Developer",
  "Hire React Developer",
  "Hire Next.js Developer",
  "Responsive Web Development",
  "Modern Web Developer",
  "UI/UX Developer",
  "SEO Friendly Web Developer",
  "Freelance Frontend Developer",
  "Interactive UI Developer",
  "Performance Optimization",
  "Web Performance Expert",
],
  authors: [{ name: "Muhammad Ahsan" }],
  creator: "Muhammad Ahsan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://byahsan.vercel.app/",
    siteName: "Muhammad Ahsan - Frontend Developer & React Specialist",
    title: "Muhammad Ahsan – Expert Frontend Developer | Modern Web Solutions",
    description:
      "Expert Frontend Developer portfolio showcasing React, Next.js, TypeScript, Tailwind CSS, and AI-powered web solutions. Available for freelance and full-time opportunities.",
    images: [
      {
        url: "https://byahsan.vercel.app//og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ahsan - Frontend Developer | React, Next.js & TypeScript",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@awais8640107",
    creator: "@awais8640107",
    title: "Muhammad Ahsan - Frontend Developer & React Specialist",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and AI-powered solutions. 1+ years of production experience. Available for projects.",
    images: ["https://byahsan.vercel.app//og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://byahsan.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          suppressHydrationWarning
        />
      </head>
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0a0a] text-[#f5f5f5] dark`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
