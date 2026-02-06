"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Single import
import { motion } from "framer-motion"; // Single import
import { heroData, skillsData, projectsData } from "@/data"; // Single import
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Only register ScrollTrigger once at module load
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP Animation - safely wrapped
  useEffect(() => {
    if (!mounted || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Hero text animation
      if (textRef.current && textRef.current.children.length > 0) {
        gsap.fromTo(textRef.current.children, 
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
        );
      }

      // Profile image animation
      if (imageRef.current) {
        gsap.fromTo(imageRef.current, 
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)", delay: 0.5 }
        );
      }

      // Stats animation - show immediately, no scroll trigger
      if (statsRef.current && statsRef.current.children.length > 0) {
        // Set all stat items to visible by default
        Array.from(statsRef.current.children).forEach((child: Element) => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateY(0)";
        });
      }

      // Featured section animation - show immediately
      if (featuredRef.current && featuredRef.current.children.length > 0) {
        Array.from(featuredRef.current.children).forEach((child: Element) => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateY(0)";
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [mounted]);

  const stats = [
    { number: "1", label: "Years Experience" },
    { number: "70+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "130%", label: "Performance Boost" },
  ];

  if (!mounted) {
    return <main className="min-h-screen bg-[#0a0a0a]" />;
  }

  return (
    <main ref={heroRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] dark:bg-[#0a0a0a] pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-3xl" />

        {/* Floating Code Elements */}
        <motion.div
          className="absolute top-32 right-20 text-[#10b981]/20 text-6xl font-mono hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {"</>"}
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-[#d4af37]/20 text-4xl font-mono hidden lg:block"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {"{ }"}
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-32 text-[#3b82f6]/15 text-3xl font-mono hidden xl:block"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {"=>"}
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div ref={textRef} className="text-center lg:text-left">
              {/* Greeting Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-sm font-medium">
                  <span className="w-2 h-2 bg-[#10b981] rounded-full mr-2 animate-pulse" />
                  Available for new opportunities
                </span>
              </div>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                Hi, I&apos;m{" "}
                <span className="text-gradient">{heroData.name}</span>
              </h1>

              {/* Headline */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#a3a3a3] mb-6">
                {heroData.headline}
              </h2>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-[#737373] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                {heroData.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href={heroData.ctas.primary.href}
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-green text-[#0a0a0a] font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#10b981]/25 btn-interactive"
                >
                  {heroData.ctas.primary.text}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={heroData.ctas.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 border border-[#d4af37] text-[#d4af37] font-semibold rounded-full transition-all duration-300 hover:bg-[#d4af37]/10"
                >
                  <FaDownload />
                  {heroData.ctas.secondary.text}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
                <a
                  href="https://github.com/ahn009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#737373] hover:text-[#f5f5f5] hover:border-[#10b981]/30 transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-ahsan-frontend-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#737373] hover:text-[#0077b5] hover:border-[#0077b5]/30 transition-all"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <Link
                  href="/contact"
                  className="w-12 h-12 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#737373] hover:text-[#10b981] hover:border-[#10b981]/30 transition-all"
                >
                  <FaEnvelope className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div ref={imageRef} className="flex justify-center lg:justify-end px-2 sm:px-0">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* Decorative Ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#10b981] via-[#d4af37] to-[#3b82f6] blur-lg opacity-60 animate-pulse" />
                
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-[#10b981]/30 shadow-2xl shadow-[#10b981]/20">
                  <Image
                    src="/images/profile.jpg"
                    alt="Muhammad Ahsan - FrontEnd Devloper | Next.js Expert"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 768px) calc(100vw - 48px), (max-width: 1024px) 400px, 480px"
                  />
                </div>

                {/* Floating Badges */}
                <motion.div
                  className="absolute -top-4 -right-4 px-3 sm:px-4 py-2 bg-[#111111] border border-[#262626] rounded-full text-xs sm:text-sm text-[#10b981] font-medium shadow-lg whitespace-nowrap"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Next.js Expert
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 px-3 sm:px-4 py-2 bg-[#111111] border border-[#262626] rounded-full text-xs sm:text-sm text-[#d4af37] font-medium shadow-lg whitespace-nowrap"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  MERN Stack
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href="#stats"
            className="flex flex-col items-center gap-2 text-[#737373] hover:text-[#10b981] transition-colors"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-current rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-[#0a0a0a] border border-[#262626] hover:border-[#10b981]/30 transition-colors card-hover"
              >
                <span className="text-4xl md:text-5xl font-bold text-gradient-green">{stat.number}</span>
                <p className="text-[#737373] mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tech Stack */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={featuredRef}>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 text-[#10b981] text-sm font-medium bg-[#10b981]/10 rounded-full mb-4">
                Tech Stack
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies I Work With</h2>
              <p className="text-[#737373] max-w-2xl mx-auto">
                Building modern applications with cutting-edge technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {skillsData.slice(0, 2).flatMap(category => 
                category.skills.slice(0, 3).map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 px-6 py-4 bg-[#111111] rounded-xl border border-[#262626] hover:border-[#10b981]/30 transition-all cursor-default"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <Icon className="w-6 h-6 text-[#10b981]" />
                      <span className="text-[#f5f5f5] font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })
              )}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-[#10b981] border border-[#10b981]/30 rounded-full hover:bg-[#10b981]/10 transition-all"
              >
                View All Skills
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-[#d4af37] text-sm font-medium bg-[#d4af37]/10 rounded-full mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-[#737373] max-w-2xl mx-auto">
              A glimpse of what I&apos;ve been working on
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projectsData.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.title}
                className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#262626] hover:border-[#10b981]/30 transition-all card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2 group-hover:text-[#10b981] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#737373] text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech.name}
                        className="text-xs px-2 py-1 bg-[#1a1a1a] rounded-full text-[#a3a3a3]"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-green text-[#0a0a0a] font-semibold rounded-full hover:opacity-90 transition-all btn-interactive"
            >
              View All Projects
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Amazing Together</span>
            </h2>
            <p className="text-[#737373] text-lg mb-8 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can work together to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-green text-[#0a0a0a] font-semibold rounded-full hover:opacity-90 transition-all btn-interactive"
              >
                Get In Touch
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
    </main>
  );
}