"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { educationData } from "@/data";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-[#d4af37] text-sm font-medium bg-[#d4af37]/10 rounded-full mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#262626] hover:border-[#d4af37]/30 transition-all duration-300"
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af37] to-[#3b82f6] rounded-l-2xl" />

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                    <FaGraduationCap className="w-8 h-8 text-[#d4af37]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-[#f5f5f5] mb-1 group-hover:text-[#d4af37] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-[#3b82f6] font-semibold mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 text-[#737373] text-sm">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#d4af37]" />
                      {edu.year}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#3b82f6]" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.description && (
                    <p className="text-[#a3a3a3] text-sm mt-4">
                      {edu.description}
                    </p>
                  )}
                </div>

                {/* Year Badge */}
                <div className="hidden md:flex flex-shrink-0">
                  <span className="px-4 py-2 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold rounded-full">
                    {edu.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
