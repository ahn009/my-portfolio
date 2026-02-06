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
  metadataBase: new URL("https://muhammad-awais-portfolio.vercel.app"),
  title: "Muhammad Ahsan - Full Stack Developer & Next.js Expert | MERN Stack & AI",
  description:
    "Professional portfolio of Muhammad Ahsan, Full Stack Developer specializing in Next.js, React, MERN Stack, and AI integration. Hire for web development projects. 3+ years of production experience.",
  verification: {
    google: "qaffrCRgQTIweoljI3L7It6hQEI7tjESpBOZ71gx2hQ",
  },
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "AI Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Node.js Developer",
    "Hire Next.js Developer",
    "Web Developer Pakistan",
    "Freelance Web Developer",
    "Full Stack Development Services",
  ],
  authors: [{ name: "Muhammad Ahsan" }],
  creator: "Muhammad Ahsan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-awais-portfolio.vercel.app",
    siteName: "Muhammad Ahsan - Full Stack Developer",
    title: "Muhammad Ahsan - Full Stack Developer & Next.js Expert | MERN Stack & AI",
    description:
      "Professional portfolio showcasing expertise in Next.js, React, MERN Stack, and AI integration. Available for freelance and full-time opportunities.",
    images: [
      {
        url: "https://muhammad-awais-portfolio.vercel.app/og-image.png",
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
    title: "Muhammad Ahsan - Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and AI solutions. 3+ years of production experience. Available for projects.",
    images: ["https://muhammad-awais-portfolio.vercel.app/og-image.png"],
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
    canonical: "https://muhammad-awais-portfolio.vercel.app",
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
