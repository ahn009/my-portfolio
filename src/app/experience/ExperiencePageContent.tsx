"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { experienceData, educationData } from "@/data";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Only register ScrollTrigger once at module load
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperiencePageContent() {
  const [mounted, setMounted] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

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

      // Timeline cards - show immediately
      const timelineItems = timelineRef.current?.querySelectorAll(".experience-card");
      if (timelineItems && timelineItems.length > 0) {
        timelineItems.forEach((item: Element) => {
          (item as HTMLElement).style.opacity = "1";
          (item as HTMLElement).style.transform = "translateX(0)";
        });
      }

      // Education cards - show immediately and visibly
      if (educationRef.current && educationRef.current.children.length > 0) {
        Array.from(educationRef.current.children).forEach((child: Element) => {
          const el = child as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.display = "block"; // Ensure not hidden
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
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div ref={headerRef} className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 text-[#10b981] text-sm font-medium bg-[#10b981]/10 rounded-full mb-4">
              Career Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Work Experience
            </h1>
            <p className="text-[#737373] max-w-2xl mx-auto text-lg mb-6">
              My professional journey as a Full Stack Developer, building scalable applications and delivering impactful solutions.
            </p>
            <div className="w-24 h-1 bg-gradient-green mx-auto rounded-full" />
          </div>

          {/* Experience Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
              <div className="h-full bg-gradient-to-b from-[#10b981] via-[#d4af37] to-[#3b82f6] rounded-full" />
            </div>

            <div className="space-y-16">
              {experienceData.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`experience-card relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-full ${
                        exp.current
                          ? "bg-[#10b981]"
                          : "bg-[#1a1a1a] border-2 border-[#262626]"
                      } flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      animate={exp.current ? { boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0.4)", "0 0 0 20px rgba(16, 185, 129, 0)"] } : {}}
                      transition={exp.current ? { duration: 1.5, repeat: Infinity } : {}}
                    >
                      <FaBriefcase
                        className={`w-6 h-6 ${
                          exp.current ? "text-[#0a0a0a]" : "text-[#737373]"
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="md:w-1/2" />

                  {/* Content */}
                  <div className="md:w-1/2">
                    <motion.div
                      className={`bg-[#111111] rounded-2xl p-8 border ${
                        exp.current
                          ? "border-[#10b981]/30"
                          : "border-[#262626]"
                      } hover:border-[#10b981]/50 transition-all duration-300`}
                      whileHover={{ y: -5 }}
                    >
                      {/* Current Badge */}
                      {exp.current && (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#10b981]/10 text-[#10b981] text-xs font-medium rounded-full mb-4">
                          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
                          Current Position
                        </span>
                      )}

                      <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-[#10b981] font-semibold text-lg mb-4">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap gap-4 text-[#737373] text-sm mb-6">
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt className="text-[#d4af37]" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-[#3b82f6]" />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3 text-[#a3a3a3]"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-[#10b981] rounded-full mt-2 flex-shrink-0" />
                            {responsibility}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-[#111111]">
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

          <div ref={educationRef} className="space-y-6">
            {educationData.map((edu) => (
              <motion.div
                key={edu.degree}
                className="group relative bg-[#0a0a0a] rounded-2xl p-8 border border-[#262626] hover:border-[#10b981]/30 transition-all"
                whileHover={{ x: 10, scale: 1.01 }}
              >
                {/* Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#10b981] to-[#3b82f6] rounded-l-2xl" />

                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-[#10b981]/10 flex items-center justify-center group-hover:bg-[#10b981]/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaGraduationCap className="w-10 h-10 text-[#10b981]" />
                    </motion.div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-[#f5f5f5] mb-2 group-hover:text-[#10b981] transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-[#3b82f6] font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-[#737373] text-sm">
                      {edu.location} • {edu.year}
                    </p>
                    {edu.description && (
                      <p className="text-[#a3a3a3] text-sm mt-3">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  <div className="hidden md:flex flex-shrink-0">
                    <span className="px-6 py-3 bg-[#10b981]/10 text-[#10b981] text-lg font-bold rounded-full">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "2", label: "Companies Worked" },
              { number: "50+", label: "Projects Delivered" },
              { number: "130%", label: "Performance Improved" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-[#111111] border border-[#262626] hover:border-[#10b981]/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-4xl md:text-5xl font-bold text-gradient-green">{stat.number}</span>
                <p className="text-[#737373] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
              Want to Work Together?
            </h2>
            <p className="text-[#737373] text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and exciting projects. Let&apos;s connect!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-green text-[#0a0a0a] font-semibold rounded-full hover:opacity-90 transition-all btn-interactive flex items-center gap-2"
              >
                Get In Touch
                <FaArrowRight />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border border-[#262626] text-[#a3a3a3] font-semibold rounded-full hover:border-[#10b981] hover:text-[#10b981] transition-all"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
