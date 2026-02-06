"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutData, timelineData, skillsData, softSkills, educationData } from "@/data";
import { FaCheckCircle, FaGraduationCap, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Only register ScrollTrigger once at module load
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPageContent() {
  const [mounted, setMounted] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !pageRef.current) return;
    
    const ctx = gsap.context(() => {
      // Ensure all elements are visible - don't hide them
      if (headerRef.current && headerRef.current.children.length > 0) {
        Array.from(headerRef.current.children).forEach((child: Element) => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateY(0)";
        });
      }

      // Content paragraphs - show immediately
      const paragraphs = contentRef.current?.querySelectorAll("p");
      if (paragraphs && paragraphs.length > 0) {
        paragraphs.forEach((p: Element) => {
          (p as HTMLElement).style.opacity = "1";
          (p as HTMLElement).style.transform = "translateY(0)";
        });
      }

      // Timeline items - show immediately
      const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item");
      if (timelineItems && timelineItems.length > 0) {
        timelineItems.forEach((item: Element) => {
          (item as HTMLElement).style.opacity = "1";
          (item as HTMLElement).style.transform = "translateX(0)";
        });
      }

      // Skills cards animation
      if (skillsRef.current && skillsRef.current.children.length > 0) {
        gsap.fromTo(skillsRef.current.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
            scrollTrigger: { trigger: skillsRef.current, start: "top 80%" }
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-[#10b981]";
      case "Advanced":
        return "text-[#d4af37]";
      default:
        return "text-[#3b82f6]";
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-[#10b981]/10";
      case "Advanced":
        return "bg-[#d4af37]/10";
      default:
        return "bg-[#3b82f6]/10";
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={headerRef} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-[#10b981] text-sm font-medium bg-[#10b981]/10 rounded-full mb-4">
              Get to Know Me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {aboutData.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-green mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* About Content */}
            <div ref={contentRef} className="space-y-6">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#a3a3a3] leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {aboutData.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#111111] rounded-xl border border-[#262626] hover:border-[#10b981]/30 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaCheckCircle className="text-[#10b981] flex-shrink-0" />
                    <span className="text-[#f5f5f5] text-sm font-medium">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-green text-[#0a0a0a] font-semibold rounded-full hover:opacity-90 transition-all mt-6"
              >
                Let&apos;s Connect
                <FaArrowRight />
              </Link>
            </div>

            {/* Timeline */}
            <div ref={timelineRef}>
              <h3 className="text-xl font-semibold text-[#f5f5f5] mb-8">
                My Journey
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#10b981] via-[#d4af37] to-[#3b82f6]" />

                {/* Timeline Items */}
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <div
                      key={index}
                      className="timeline-item relative pl-12"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#10b981] flex items-center justify-center">
                        <span className="text-xs font-bold text-[#10b981]">
                          {item.year.slice(-2)}
                        </span>
                      </div>

                      {/* Content Card */}
                      <motion.div
                        className="bg-[#111111] rounded-xl p-5 border border-[#262626] hover:border-[#10b981]/30 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-[#10b981] text-xs font-medium">
                          {item.year}
                        </span>
                        <h4 className="text-[#f5f5f5] font-semibold mt-1">
                          {item.title}
                        </h4>
                        <p className="text-[#737373] text-sm mt-0.5">
                          {item.subtitle}
                        </p>
                        <p className="text-[#a3a3a3] text-sm mt-2">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-[#d4af37] text-sm font-medium bg-[#d4af37]/10 rounded-full mb-4">
              What I Do Best
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillsData.map((category) => (
              <div
                key={category.title}
                className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#262626] hover:border-[#10b981]/30 transition-colors card-hover"
              >
                <h3 className="text-lg font-semibold text-[#f5f5f5] mb-6 pb-3 border-b border-[#262626]">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className="flex items-center justify-between group"
                        whileHover={{ x: 3 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#10b981]/10 transition-colors">
                            <Icon className="w-5 h-5 text-[#a3a3a3] group-hover:text-[#10b981] transition-colors" />
                          </div>
                          <span className="text-[#f5f5f5] text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(
                            skill.level
                          )} ${getLevelBg(skill.level)}`}
                        >
                          {skill.level}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#f5f5f5] mb-6">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-5 py-2.5 bg-[#0a0a0a] border border-[#262626] rounded-full text-[#a3a3a3] text-sm font-medium hover:border-[#10b981] hover:text-[#10b981] transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-[#3b82f6] text-sm font-medium bg-[#3b82f6]/10 rounded-full mb-4">
              Academic Background
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3b82f6] to-[#10b981] mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {educationData.map((edu) => (
              <motion.div
                key={edu.degree}
                className="group relative bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#262626] hover:border-[#10b981]/30 transition-all"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ x: 5 }}
              >
                {/* Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#10b981] to-[#3b82f6] rounded-l-2xl" />

                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#10b981]/10 flex items-center justify-center group-hover:bg-[#10b981]/20 transition-colors">
                      <FaGraduationCap className="w-8 h-8 text-[#10b981]" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-[#f5f5f5] mb-1 group-hover:text-[#10b981] transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-[#3b82f6] font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-[#737373] text-sm">
                      {edu.location} • {edu.year}
                    </p>
                    {edu.description && (
                      <p className="text-[#a3a3a3] text-sm mt-2">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  <div className="hidden md:flex flex-shrink-0">
                    <span className="px-4 py-2 bg-[#10b981]/10 text-[#10b981] text-sm font-bold rounded-full">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
