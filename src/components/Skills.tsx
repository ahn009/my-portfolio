"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillsData, softSkills } from "@/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-[#d4af37]";
      case "Advanced":
        return "text-[#3b82f6]";
      default:
        return "text-[#737373]";
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-[#d4af37]/10";
      case "Advanced":
        return "bg-[#3b82f6]/10";
      default:
        return "bg-[#737373]/10";
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-[#d4af37] text-sm font-medium bg-[#d4af37]/10 rounded-full mb-4">
            What I Do Best
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#262626] hover:border-[#d4af37]/30 transition-colors card-hover"
            >
              <h3 className="text-lg font-semibold text-[#f5f5f5] mb-6 pb-3 border-b border-[#262626]">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-colors">
                          <Icon className="w-5 h-5 text-[#a3a3a3] group-hover:text-[#d4af37] transition-colors" />
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
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-[#f5f5f5] mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="px-5 py-2.5 bg-[#0a0a0a] border border-[#262626] rounded-full text-[#a3a3a3] text-sm font-medium hover:border-[#d4af37] hover:text-[#d4af37] transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
