"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Only register ScrollTrigger once at module load
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsPageContent() {
  const [mounted, setMounted] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("all");

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get unique tech stacks for filtering
  const allTechs = [...new Set(projectsData.flatMap(p => p.techStack.map(t => t.name)))];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.techStack.some(t => t.name === filter));

  useEffect(() => {
    if (!mounted || !pageRef.current) return;

    const ctx = gsap.context(() => {
      // Header - show immediately
      if (headerRef.current && headerRef.current.children.length > 0) {
        Array.from(headerRef.current.children).forEach((child: Element) => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateY(0)";
        });
      }

      // Projects - show immediately and don't hide
      if (projectsRef.current && projectsRef.current.children.length > 0) {
        Array.from(projectsRef.current.children).forEach((child: Element) => {
          const el = child as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.display = "block";
          el.style.visibility = "visible";
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={headerRef} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-[#d4af37] text-sm font-medium bg-[#d4af37]/10 rounded-full mb-4">
              My Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Selected Projects
            </h1>
            <p className="text-[#737373] max-w-2xl mx-auto text-lg mb-6">
              Here are some of my recent projects that showcase my skills in
              full-stack development, UI/UX design, and problem-solving.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <motion.button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-[#10b981] text-[#0a0a0a]"
                  : "bg-[#111111] text-[#a3a3a3] border border-[#262626] hover:border-[#10b981]/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects
            </motion.button>
            {allTechs.slice(0, 5).map((tech) => (
              <motion.button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === tech
                    ? "bg-[#10b981] text-[#0a0a0a]"
                    : "bg-[#111111] text-[#a3a3a3] border border-[#262626] hover:border-[#10b981]/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-[#10b981]/30 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-[#1a1a1a]">
                    {/* Display actual project image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={false}
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {/* Fallback gradient when image is not loaded */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/20 via-[#d4af37]/10 to-[#3b82f6]/20 flex items-center justify-center">
                      <motion.span 
                        className="text-5xl font-bold text-gradient opacity-50"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {project.title.split(" ").map(w => w[0]).join("")}
                      </motion.span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0a0a0a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-[#1a1a1a] rounded-full text-[#f5f5f5] hover:text-[#10b981] hover:bg-[#10b981]/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub className="w-6 h-6" />
                      </motion.a>
                      {project.liveDemo && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-[#1a1a1a] rounded-full text-[#f5f5f5] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`View ${project.title} live demo`}
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#f5f5f5] mb-3 group-hover:text-[#10b981] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#a3a3a3] text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-xs text-[#737373] uppercase tracking-wider mb-2">Key Features</h4>
                      <ul className="space-y-1.5">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-[#a3a3a3] text-xs flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#262626]">
                      {project.techStack.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <span
                            key={tech.name}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] rounded-full text-xs text-[#a3a3a3] border border-[#262626] hover:border-[#10b981]/30 transition-colors"
                          >
                            <Icon className="w-3.5 h-3.5" />
                            {tech.name}
                          </span>
                        );
                      })}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a1a1a] rounded-lg text-sm text-[#a3a3a3] hover:text-[#f5f5f5] hover:bg-[#262626] transition-colors"
                      >
                        <FaGithub />
                        Code
                      </a>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#10b981]/10 rounded-lg text-sm text-[#10b981] hover:bg-[#10b981]/20 transition-colors"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* View More CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/mhaawais"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#262626] rounded-full text-[#a3a3a3] hover:border-[#10b981] hover:text-[#10b981] transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              View More on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-[#737373] text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to work on new and challenging projects. Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-green text-[#0a0a0a] font-semibold rounded-full hover:opacity-90 transition-all btn-interactive"
              >
                Start a Project
              </Link>
              <Link
                href="/experience"
                className="px-8 py-4 border border-[#262626] text-[#a3a3a3] font-semibold rounded-full hover:border-[#10b981] hover:text-[#10b981] transition-all"
              >
                View Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
