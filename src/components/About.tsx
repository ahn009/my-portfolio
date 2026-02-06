"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData, timelineData } from "@/data";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="about"
      ref={ref}
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-[#d4af37] text-sm font-medium bg-[#d4af37]/10 rounded-full mb-4">
            Get to Know Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {aboutData.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
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
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <FaCheckCircle className="text-[#d4af37] flex-shrink-0" />
                  <span className="text-[#f5f5f5] text-sm font-medium">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="relative">
            <h3 className="text-xl font-semibold text-[#f5f5f5] mb-8">
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#3b82f6] to-[#262626]" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.15 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#d4af37] flex items-center justify-center">
                      <span className="text-xs font-bold text-[#d4af37]">
                        {item.year.slice(-2)}
                      </span>
                    </div>

                    {/* Content Card */}
                    <div className="bg-[#111111] rounded-xl p-5 border border-[#262626] hover:border-[#d4af37]/50 transition-colors">
                      <span className="text-[#d4af37] text-xs font-medium">
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
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
