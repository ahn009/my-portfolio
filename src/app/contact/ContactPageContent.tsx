"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { contactData, FaEnvelope, FaPhone, FaMapMarkerAlt } from "@/data";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Only register ScrollTrigger once at module load
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPageContent() {
  const [mounted, setMounted] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Formspree hook with ID
  const [state, handleSubmit] = useForm("mreqbbeq");

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !pageRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current && headerRef.current.children.length > 0) {
        Array.from(headerRef.current.children).forEach((child: Element) => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateY(0)";
        });
      }

      // Info cards animation
      if (infoRef.current && infoRef.current.children.length > 0) {
        Array.from(infoRef.current.children).forEach((child: Element) => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateX(0)";
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={headerRef} className="text-center mb-8 md:mb-16">
            <span className="inline-block px-4 py-1.5 text-[#10b981] text-sm font-medium bg-[#10b981]/10 rounded-full mb-3 md:mb-4">
              Let&apos;s Connect
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-[#737373] max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0 mb-6">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I&apos;m always open to discussing new opportunities.
            </p>
            <div className="w-24 h-1 bg-gradient-green mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 px-4 sm:px-6 lg:px-0">
            {/* Contact Info */}
            <div ref={infoRef} className="space-y-6 md:space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f5] mb-4 md:mb-6">
                  Contact Information
                </h3>
                <p className="text-[#a3a3a3] leading-relaxed text-sm sm:text-base mb-6 md:mb-8">
                  I&apos;m currently available for freelance work and full-time
                  positions. If you have a project that needs coding or you want
                  to hire me, feel free to contact me through any of the following.
                </p>
              </div>

              {/* Contact Cards */}
              <motion.a
                href={`mailto:${contactData.email}`}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-6 bg-[#111111] rounded-xl sm:rounded-2xl border border-[#262626] hover:border-[#10b981]/30 transition-all group"
                whileHover={{ x: 5, scale: 1.01 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#10b981]/10 flex items-center justify-center group-hover:bg-[#10b981]/20 transition-colors">
                  <FaEnvelope className="w-5 h-5 sm:w-7 sm:h-7 text-[#10b981]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#737373] text-xs sm:text-sm mb-1">Email</p>
                  <p className="text-[#f5f5f5] font-semibold text-sm sm:text-base md:text-lg break-all">
                    {contactData.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${contactData.phone}`}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-6 bg-[#111111] rounded-xl sm:rounded-2xl border border-[#262626] hover:border-[#d4af37]/30 transition-all group"
                whileHover={{ x: 5, scale: 1.01 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                  <FaPhone className="w-5 h-5 sm:w-7 sm:h-7 text-[#d4af37]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#737373] text-xs sm:text-sm mb-1">Phone</p>
                  <p className="text-[#f5f5f5] font-semibold text-sm sm:text-base md:text-lg">
                    {contactData.phone}
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-6 bg-[#111111] rounded-xl sm:rounded-2xl border border-[#262626]"
                whileHover={{ x: 5, scale: 1.01 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 sm:w-7 sm:h-7 text-[#3b82f6]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#737373] text-xs sm:text-sm mb-1">Location</p>
                  <p className="text-[#f5f5f5] font-semibold text-sm sm:text-base md:text-lg">
                    {contactData.location}
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-4 md:pt-6">
                <p className="text-[#737373] text-xs sm:text-sm mb-3 md:mb-4 text-center md:text-left">Connect with me on</p>
                <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
                  {contactData.social.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981]/30 hover:bg-[#10b981]/5 transition-all"
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.name}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-[#111111] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-[#262626]"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f5] mb-6 md:mb-8">
                Send me a message
              </h3>

              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-6 bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl text-[#10b981] text-center justify-center flex-col"
                >
                  <FaCheckCircle className="w-6 h-6" />
                  <p className="text-lg font-semibold">Thanks for your message! I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#a3a3a3] mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#0a0a0a] border border-[#262626] rounded-lg sm:rounded-xl text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#10b981] transition-colors text-sm sm:text-base"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#a3a3a3] mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#0a0a0a] border border-[#262626] rounded-lg sm:rounded-xl text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#10b981] transition-colors text-sm sm:text-base"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#a3a3a3] mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#0a0a0a] border border-[#262626] rounded-lg sm:rounded-xl text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#10b981] transition-colors text-sm sm:text-base"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#a3a3a3] mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#0a0a0a] border border-[#262626] rounded-lg sm:rounded-xl text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#10b981] transition-colors text-sm sm:text-base resize-none"
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 sm:py-4 bg-gradient-green text-[#0a0a0a] font-semibold rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-60 sm:h-80 bg-[#111111] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <FaMapMarkerAlt className="w-8 h-8 sm:w-12 sm:h-12 text-[#10b981] mx-auto mb-3 sm:mb-4" />
            <p className="text-[#737373] text-sm sm:text-base">Based in {contactData.location}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />
      </section>
    </div>
  );
}