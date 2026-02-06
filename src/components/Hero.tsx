"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data";
import { FaArrowDown, FaDownload, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Floating Code Elements */}
      <motion.div
        className="absolute top-20 right-20 text-[#d4af37]/20 text-6xl font-mono hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {"</>"}
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 text-[#3b82f6]/20 text-4xl font-mono hidden lg:block"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{ }"}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm font-medium">
            <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-2 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">{heroData.name}</span>
        </motion.h1>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#a3a3a3] mb-6"
        >
          {heroData.headline}
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[#737373] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {heroData.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <motion.a
            href={heroData.ctas.primary.href}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-primary text-[#0a0a0a] font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {heroData.ctas.primary.text}
            <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href={heroData.ctas.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border border-[#d4af37] text-[#d4af37] font-semibold rounded-full transition-all duration-300 hover:bg-[#d4af37]/10"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDownload />
            {heroData.ctas.secondary.text}
          </motion.a>

          {/* Tertiary CTA */}
          <motion.a
            href={heroData.ctas.tertiary.href}
            className="flex items-center gap-2 px-8 py-4 border border-[#262626] text-[#a3a3a3] font-semibold rounded-full transition-all duration-300 hover:border-[#3b82f6] hover:text-[#3b82f6]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaEnvelope />
            {heroData.ctas.tertiary.text}
          </motion.a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-[#262626]"
        >
          <p className="text-[#737373] text-sm mb-4">Tech Stack I Work With</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Next.js", "React", "Node.js", "TypeScript", "MongoDB"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="text-[#a3a3a3] text-sm font-medium px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#262626]"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-[#737373] hover:text-[#d4af37] transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium">Scroll Down</span>
          <FaArrowDown className="text-sm" />
        </motion.a>
      </motion.div>
    </section>
  );
}
