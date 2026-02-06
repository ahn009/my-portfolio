"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "@/data";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#3b82f6]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-[#d4af37] text-sm font-medium bg-[#d4af37]/10 rounded-full mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#3b82f6] to-[#262626] -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full ${
                      exp.current
                        ? "bg-[#d4af37] animate-pulse-glow"
                        : "bg-[#1a1a1a] border-2 border-[#262626]"
                    } flex items-center justify-center`}
                  >
                    <FaBriefcase
                      className={`w-5 h-5 ${
                        exp.current ? "text-[#0a0a0a]" : "text-[#737373]"
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2" />
                <div className="md:w-1/2">
                  <div
                    className={`bg-[#0a0a0a] rounded-2xl p-6 md:p-8 border ${
                      exp.current
                        ? "border-[#d4af37]/30"
                        : "border-[#262626]"
                    } hover:border-[#d4af37]/50 transition-colors`}
                  >
                    {/* Current Badge */}
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-medium rounded-full mb-4">
                        <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
                        Current Position
                      </span>
                    )}

                    <h3 className="text-xl md:text-2xl font-bold text-[#f5f5f5] mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-[#d4af37] font-semibold mb-4">
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
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + idx * 0.1,
                          }}
                          className="flex items-start gap-3 text-[#a3a3a3] text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0" />
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
