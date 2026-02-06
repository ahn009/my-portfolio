import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiMongodb, 
  SiGit, 
  SiVercel, 
  SiFirebase, 
  SiDocker, 
  SiFigma, 
  SiPython, 
  SiOpenai,
  SiBootstrap,
  SiSanity,
  SiAuth0,
  SiStripe,
  SiPandas,
  SiPlotly,
  SiPrisma,
  SiStreamlit,
  SiAxios,
  SiCypress,
  SiEslint,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiJest,
  SiNetlify,
  SiPostman,
  SiPrettier,
  SiPwa,
  SiReactquery,
  SiRedux,
  SiSass,
  SiStorybook,
  SiTestinglibrary,
  SiTrpc,
  SiVite,
  SiVitest,
  SiWebpack,
  SiGooglegemini,
  SiClaude,
  SiSupabase,
  SiPhp,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IconBaseProps, IconType } from "react-icons";
import { ReactNode } from "react";

// Navigation Links for Multi-Page Site
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

// Hero Section Data
export const heroData = {
  name: "Muhammad Ahsan",
  headline: "Frontend Developer | React, Next.js & TypeScript",
  subheadline:
    "A passionate Frontend Developer crafting responsive, interactive, and AI-powered web experiences. Explore my portfolio to see how I transform ideas into modern websites that users love.",
  profileImage: "/images/profile.jpg",
  ctas: {
    primary: { text: "View My Work", href: "/projects" },
    secondary: { text: "Download Resume", href: "/m_resume.pdf" },
    tertiary: { text: "Get In Touch", href: "/contact" },
  },
};

// About Section Data
export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I'm a Frontend Developer & React Specialist with 1+ years of experience building production-grade web applications for startups and enterprises. I specialize in Next.js, React, TypeScript, and Tailwind CSS, creating pixel-perfect, performant interfaces that users love.",
    "I focus on modern frontend architecture, performance optimization, UX/UI best practices, and AI integration. My projects have improved application performance by up to 130%, enhanced user engagement through responsive design, and scaled to handle thousands of concurrent users. I combine deep technical expertise with a user-first design approach.",
    "I'm passionate about keeping current with modern web technologies, contributing to open-source communities, and mentoring other developers. I thrive in collaborative environments and believe in shipping quality, accessible code that makes a real impact on user experience.",
  ],
  highlights: [
    "1+ years building production applications",
    "Frontend Stack: Next.js, React, TypeScript, Tailwind CSS",
    "Performance optimization & AI integration",
    "65% average performance improvement",
  ],
};

// Timeline Data
export const timelineData = [
  {
    year: "2025",
    title: "Frontend Developer | React & Next.js Specialist",
    subtitle: "Web Craf (On-site)",
    description: "Building modern, responsive web applications and leading frontend architecture decisions.",
  },
  {
    year: "2025",
    title: "Web Developer",
    subtitle: "S-Tech Innovative (Remote)",
    description: "Worked with the developers team and help them developing the SaaS product for the company.",
  },
  {
    year: "2025",
    title: "High School Graduate",
    subtitle: "Khawaja Fareed College, Rahim Yar Khan",
    description: "Completed intermediate education with focus on Computercience and Mathematics.",
  },
];

// Skills Data
export interface Skill {
  name: string;
  icon: IconType;
  level: "Expert" | "Advanced" | "Familiar";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Core Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
      { name: "React", icon: SiReact, level: "Expert" },
      { name: "TypeScript", icon: SiTypescript, level: "Expert" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert" },
      { name: "Vite", icon: SiVite, level: "Advanced" },
      { name: "php", icon: SiVite, level: "Familiar" },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
      { name: "CSS/SCSS", icon: SiSass, level: "Expert" },
      { name: "GSAP", icon: SiFramer, level: "Advanced" },  
      { name: "Framer Motion", icon: SiFramer, level: "Advanced" },
    ],
  },
     {
    title: "API Integration",
    skills: [
      { name: "REST APIs", icon: SiPostman, level: "Expert" },
      { name: "GraphQL", icon: SiGraphql, level: "Familiar" },
      { name: "Gemini API", icon: SiGooglegemini, level: "Expert" },
      { name: "ChatGPT API", icon: SiOpenai, level: "Advanced" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: SiGithub, level: "Expert" },
      { name: "Vercel", icon: SiVercel, level: "Expert" },
      { name: "Netlify", icon: SiNetlify, level: "Advanced" },
      { name: "Figma", icon: SiFigma, level: "Advanced" },
      { name: "Firebase", icon: SiFirebase, level: "Advanced" },
      { name: "Supabase", icon: SiSupabase, level: "Advanced" },
     ],
  },
    {
    title: "Ai Code Generation",
    skills: [
      { name: "ChatGPT", icon: SiOpenai, level: "Expert" },
      { name: "Claude Code", icon: SiClaude, level: "Advanced" },
      { name: " Google Gemini", icon: SiGooglegemini, level: "Advanced" },
      { name: "GitHub Copilot", icon: SiGithub, level: "Advanced" },
      
      ],
  },
 ];

export const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Adaptability",
  "Project Management",
  "Critical Thinking",
];

// Projects Data
export interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: { name: string; icon: IconType }[];
  github: string;
  liveDemo?: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    title: "Arocean Nexus LLC",
    description:
      "Corporate website for a technology-focused company, built with a strong emphasis on performance, responsive design, and SEO. Delivers a clean brand presence with fast load times and modern UI.",
    features: [
      "Modern, responsive corporate UI",
      "SEO-optimized pages and metadata",
      "Reusable component-based architecture",
      "Fast performance with optimized assets",
      "Deployed with production-ready configuration",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/ahn009/arocean-nexus-llc",
    liveDemo: "https://aroceannexusllc.com/",
    image: "/images/project-arocean.png",
  },

  {
    title: "Elite Books Writers",
    description:
      "SEO-focused business website for a professional writing agency. Designed to improve search visiability, conversions, and user trust with a clean layout and optimized content structure.",
    features: [
      "SEO-optimized landing pages",
      "Conversion-focused layout and CTAs",
      "Responsive design for all devices",
      "Fast-loading pages with optimized images",
      "Scalable structure for future content expansion",
    ],
    techStack: [
      { name: "PHP", icon: SiPhp },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
    github: "https://github.com/ahn009/elite-books-center",
    liveDemo: "https://elitebookwriters.com/",
    image: "/images/project-elite-books.png",
  },

  {
    title: "Portfolio Site for Team Member",
    description:
      "Personal portfolio website built for a team member to showcase skills, projects, and experience. Focused on clean UI, smooth navigation, and professional presentation.",
    features: [
      "Clean and minimal portfolio layout",
      "Project showcase with live previews",
      "Responsive and mobile-first design",
      "Reusable UI components",
      "Optimized for fast page loads",
    ],
    techStack: [
      { name: "Vite", icon: SiVite },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/ahn009/Portfolio-Site",
    liveDemo: "https://muhammad-awais-portfolio.vercel.app/",
    image: "/images/project-portfolio-team.png",
  },

  {
    title: "Cycle Harmony Hub",
    description:
      "Modern web application for a cycling-focused platform, built with a user-friendly interface and smooth navigation. Designed to deliver an engaging experience with clean visuals and structured content.",
    features: [
      "User-friendly UI with modern design",
      "Component-based frontend architecture",
      "Fully responsive layout",
      "Optimized routing and navigation",
      "Deployed on Vercel for fast delivery",
    ],
    techStack: [
      { name: "Vite", icon: SiVite },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/ahn009/cycle-harmony-hub",
    liveDemo: "https://cycle-harmony-hub.vercel.app/",
    image: "/images/project-cycle.png",
  },

  {
    title: "Feast Islamabad",
    description:
      "Restaurant website showcasing menu, branding, and location details. Built with a focus on visual appeal, responsiveness, and fast performance for local business visibility.",
    features: [
      "Attractive restaurant-focused UI",
      "Mobile-first responsive design",
      "Optimized images and layout",
      "Clear content structure for users",
      "Fast deployment and performance tuning",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
    ],
    github: "https://github.com/ahn009/feast-islamabad",
    liveDemo: "https://feast-islamabad.vercel.app/",
    image: "/images/project-feast.png",
  },

  {
    title: "My Portfolio",
    description:
      "Personal frontend developer portfolio showcasing projects, skills, and experience. Built with Next.js and modern UI practices, focusing on performance, accessibility, and clean design.",
    features: [
      "Modern developer-focused UI",
      "SEO-friendly structure and metadata",
      "Reusable and scalable components",
      "Fast performance with Vite/Next optimizations",
      "Deployed on Vercel",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
    ],
    github: "https://github.com/ahn009/my-portfolio",
    liveDemo: "https://byahsan.vercel.app/",
    image: "/images/project-my-portfolio.png",
  },
];


// Work Experience Data
export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  current?: boolean;
}

export const experienceData: Experience[] = [
  {
    company: "Web Craf",
    role: "Frontend Developer | React & Next.js Specialist",
    duration: "October 2025 – Present",
    location: "On-site",
    current: true,
    responsibilities: [
      "Develop and maintain modern frontend applications using Next.js and React with TypeScript",
      "Design and implement responsive, accessible user interfaces with Tailwind CSS",
      "Optimize application performance and Core Web Vitals metrics",
      "Integrate third-party APIs and build reusable component libraries",
      "Implement AI-powered features and real-time functionality",
      "Conduct code reviews and mentor junior developers on frontend best practices",
    ],
  },
  {
    company: "S-Tech Innovative",
    role: "Web Developer",
    duration: "August 2025 – September 2025",
    location: "Karachi (Remote)",
    responsibilities: [
      "Architected and developed 'Kids Code & Stories' educational platform",
      "Optimized application performance achieving 125% improvement in load times",
      "Implemented real-time features and database synchronization using Supabase",
      "Deployed to production and managed ongoing maintenance and updates",
    ],
  },
];

// Education Data
export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
}

export const educationData: Education[] = [
   {
    degree: "Intermediate / High School",
    institution: "Punjab Group of Colleges",
    location: "Rahim Yar Khan, Pakistan",
    year: "2025",
    description: "Completed with focus on science and mathematics.",
  },
];

// Contact Data
export const contactData = {
  email: "ahsan747708@gmail.com",
  phone: "+92 304 1240791",
  location: "Rahim Yar Khan, Pakistan",
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-ahsan-frontend-dev/",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/ahn009",
      icon: FaGithub,
    },
    {
      name: "Portfolio",
      url: "https://byahsan.vercel.app//#/",
      icon: FaGlobe,
    },
  ],
};
export { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt };