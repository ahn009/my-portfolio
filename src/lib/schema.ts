export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Ahsan",
    url: "https://byahsan.vercel.app//",
    image: "https://byahsan.vercel.app//images/profile.jpg",
    email: "ahsan747708@gmail.com",
    jobTitle: "Frontend Developer | React & Next.js Specialist",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and AI-powered web solutions. 1+ years of production experience building modern web applications.",
    sameAs: [
      "https://linkedin.com/in/muhammad-ahsan-frontend-dev",
      "https://github.com/ahn009",
      "https://byahsan.vercel.app//",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Frontend Development",
      "Web Performance Optimization",
      "AI Integration",
      "JavaScript",
      "Responsive Design",
      "UX Optimization",
    ],
    workLocation: {
      "@type": "Place",
      name: "Karachi, Pakistan",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Ahsan - Frontend Developer & React Specialist",
    url: "https://byahsan.vercel.app//",
    description:
      "Portfolio of Muhammad Ahsan, a Frontend Developer specializing in React, Next.js, TypeScript, and AI-powered web applications. Modern, performant, and user-focused solutions.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://byahsan.vercel.app///projects",
      },
    },
  };
}

export function generateProjectSchema(project: {
  title: string;
  description: string;
  liveDemo?: string;
  github: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Muhammad Ahsan",
    },
    url: project.liveDemo || project.github,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
  };
}
