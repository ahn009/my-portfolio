"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-[#d4af37] text-sm font-medium bg-[#d4af37]/10 rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Selected Projects
          </h2>
          <p className="text-[#737373] max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development and problem-solving.
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-[#d4af37]/30 transition-all duration-300 card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-[#1a1a1a]">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-[#3b82f6]/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gradient opacity-50">
                    {project.title.split(" ").map(w => w[0]).join("")}
                  </span>
                </div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-[#0a0a0a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1a1a1a] rounded-full text-[#f5f5f5] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#1a1a1a] rounded-full text-[#f5f5f5] hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f5f5f5] mb-2 group-hover:text-[#d4af37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a3a3a3] text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-[#737373] text-xs flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-[#d4af37] rounded-full" />
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
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1a1a1a] rounded-full text-xs text-[#a3a3a3] border border-[#262626]"
                      >
                        <Icon className="w-3 h-3" />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-lg text-sm text-[#a3a3a3] hover:text-[#f5f5f5] hover:bg-[#262626] transition-colors"
                  >
                    <FaGithub />
                    Code
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#d4af37]/10 rounded-lg text-sm text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Awais-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#262626] rounded-full text-[#a3a3a3] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
