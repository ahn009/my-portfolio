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
  SiStreamlit
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IconType } from "react-icons";

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
    "Building scalable web applications and AI-powered solutions. Expert in Next.js, React, Node.js, and modern full-stack development. Delivering production-ready applications that drive business growth.",
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
    "I'm a Full Stack Developer with 3+ years of experience building production-grade web applications for startups and enterprises. I specialize in Next.js, React, and Node.js, delivering scalable solutions that solve real business problems.",
    "I focus on clean architecture, performance optimization, and AI integration. My projects have improved application performance by up to 130%, reduced deployment times, and scaled to handle thousands of concurrent users. I combine deep technical expertise with a user-first approach.",
    "I'm passionate about keeping current with modern web technologies, contributing to open-source communities, and mentoring other developers. I thrive in collaborative environments and believe in shipping quality code that makes an impact.",
  ],
  highlights: [
    "3+ years building production applications",
    "Full Stack: Next.js, React, Node.js, PostgreSQL",
    "Performance optimization & AI integration",
    "130% average performance improvement",
  ],
};

// Timeline Data
export const timelineData = [
  {
    year: "2025",
    title: "Full Stack Developer",
    subtitle: "S-Tech Innovative",
    description: "Leading full-stack development projects and building scalable applications.",
  },
  {
    year: "2025",
    title: "BS Computer Science",
    subtitle: "KFUEIT, Rahim Yar Khan",
    description: "Graduated with a strong foundation in software engineering and computer science.",
  },
  {
    year: "2025",
    title: "Web Developer",
    subtitle: "Byte-Forge Solutions (Remote)",
    description: "Built innovative web applications for European clients.",
  },
  {
    year: "2021",
    title: "High School Graduate",
    subtitle: "APSACS, Rahim Yar Khan",
    description: "Completed intermediate education with focus on science and mathematics.",
  },
];

// Skills Data
export interface Skill {
  name: string;
  icon: IconType;
  level: "Expert" | "Advanced" | "Intermediate";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, level: "Expert" },
      { name: "React", icon: SiReact, level: "Expert" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
      { name: "Bootstrap", icon: SiBootstrap, level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Expert" },
      { name: "Express.js", icon: SiExpress, level: "Advanced" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
      { name: "MongoDB", icon: SiMongodb, level: "Expert" },
    ],
  },
  {
  title: "Payments & Auth",
  skills: [
    { name: "Stripe", icon: SiStripe, level: "Advanced" },
    { name: "Stripe Connect", icon: SiStripe, level: "Intermediate" },
    { name: "Authentication & Authorization", icon: SiAuth0, level: "Advanced" },
  ],
},
{
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, level: "Expert" },
      { name: "Vercel", icon: SiVercel, level: "Expert" },
      { name: "Firebase", icon: SiFirebase, level: "Advanced" },
      { name: "Docker", icon: SiDocker, level: "Intermediate" },
      { name: "Figma", icon: SiFigma, level: "Advanced" },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Python", icon: SiPython, level: "Advanced" },
      { name: "OpenAI SDK", icon: SiOpenai, level: "Advanced" },
      { name: "AI", icon: SiPython, level: "Advanced" },
      { name: "ML", icon: SiPython, level: "Advanced" },
      { name: "Agentic AI", icon: SiOpenai, level: "Advanced" },
      { name: "Gen AI", icon: SiOpenai, level: "Advanced" },
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
    title: "Kids Code & Stories",
    description:
      "Production-grade EdTech platform making programming accessible to children. Features real-time progress tracking, gamified learning, and parent oversight. 125% performance improvement through optimization.",
    features: [
      "Multi-role authentication (parent, child, admin)",
      "Interactive coding lessons with instant feedback",
      "Gamified rewards system with achievement badges",
      "Real-time parent dashboard & progress analytics",
      "Dynamic content management with CMS integration",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/mhaawais/childrens-website",
    liveDemo: "https://www.kindercode.io/#/",
    image: "/images/project-kids-code.png",
  },

  {
    title: "Smart Content Management System",
    description:
      "Enterprise-grade CMS for managing digital content at scale. Built with role-based access, secure authentication, and optimized for high-volume content delivery. Supports books, media assets, and dynamic blogs.",
    features: [
      "Granular role-based access control (RBAC)",
      "Secure JWT authentication & session management",
      "Intuitive admin dashboard with analytics",
      "Database migrations & automated seeding",
      "SEO-optimized content structure & metadata",
      "Real-time content publishing workflow",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/mhaawais/database",
    liveDemo: "https://admin-marypeeofficial.vercel.app/#/",
    image: "/images/project-cms.png",
  },

  {
    title: "E-Commerce Furniture Marketplace",
    description:
      "Multi-vendor e-commerce platform connecting furniture retailers with customers. Features Stripe Connect payments, vendor analytics, and CMS-powered product catalog. Built for scalability and transaction security.",
    features: [
      "Dynamic product catalog with advanced filtering & search",
      "Secure multi-vendor checkout with Stripe Connect",
      "Vendor analytics & sales dashboard",
      "Real-time inventory management",
      "Headless CMS integration for content management",
      "Order tracking & customer notifications",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Stripe", icon: SiStripe },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Sanity", icon: SiSanity },
    ],
    github: "https://github.com/mhaawais/Ecommerce-Hackathon",
    liveDemo: "https://final-hackathon-two.vercel.app/",
    image: "/images/project-ecommerce.png",
  },

  {
    title: "AI-Powered Data Sweeper",
    description:
      "Data transformation tool for business intelligence. Processes CSV and Excel files with automated cleaning, statistical analysis, and interactive visualizations for data-driven decision making.",
    features: [
      "Automated CSV & Excel file transformation",
      "Intelligent data cleaning & normalization",
      "Statistical analysis & correlation detection",
      "Interactive dashboards & visualizations",
      "Batch processing for large datasets",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Pandas", icon: SiPandas },
      { name: "Plotly", icon: SiPlotly },
    ],
    github: "https://github.com/mhaawais/Datasweeper-python",
    image: "/images/project-datasweeper.png",
  },

  {
    title: "Business & Agency Websites",
    description:
      "Custom-built websites for businesses across diverse industries. Combines stunning design with technical SEO, fast performance, and conversion optimization. Average Lighthouse score: 95+.",
    features: [
      "Mobile-first responsive design",
      "Industry-specific customizations",
      "Technical SEO optimization",
      "Performance optimization (Core Web Vitals)",
      "CMS integration for easy content updates",
      "Analytics integration & conversion tracking",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/mhaawais",
    image: "/images/project-agency.png",
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
    company: "S-Tech Innovative",
    role: "Full Stack Developer",
    duration: "April 2025 – Present",
    location: "On-site",
    current: true,
    responsibilities: [
      "Lead full-stack development projects using Next.js and Node.js with TypeScript",
      "Develop and maintain enterprise CMS platform serving 10+ clients",
      "Design and optimize custom databases for production applications",
      "Implement API integrations improving data retrieval efficiency by 30%",
      "Collaborate with design team to create responsive, accessible user interfaces",
      "Conduct code reviews and mentor junior developers on best practices",
    ],
  },
  {
    company: "Byte-Forge Solutions",
    role: "Web Developer",
    duration: "January 2025 – March 2025",
    location: "Europe (Remote)",
    responsibilities: [
      "Architected and developed 'Kids Code & Stories' educational platform",
      "Optimized application performance achieving 125% improvement in load times",
      "Implemented real-time features and database synchronization using Supabase",
      "Collaborated with international team across multiple time zones",
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
    degree: "BS Computer Science",
    institution: "KFUEIT",
    location: "Rahim Yar Khan, Pakistan",
    year: "2025",
    description: "Focused on software engineering, algorithms, and web technologies.",
  },
  {
    degree: "Intermediate / High School",
    institution: "APSACS",
    location: "Rahim Yar Khan, Pakistan",
    year: "2021",
    description: "Completed with focus on science and mathematics.",
  },
];

// Contact Data
export const contactData = {
  email: "awais8640107@gmail.com",
  phone: "+92 317 5597654",
  location: "Karachi, Pakistan",
  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhammad-awais-5b37742ba",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/mhaawais",
      icon: FaGithub,
    },
    {
      name: "Portfolio",
      url: "https://muhammad-awais-portfolio.vercel.app/#/",
      icon: FaGlobe,
    },
  ],
};

export { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt };
