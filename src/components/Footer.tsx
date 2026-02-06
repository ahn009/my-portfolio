"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, contactData } from "@/data";
import { FaHeart, FaArrowUp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useForm, ValidationError } from "@formspree/react";

// Register GSAP plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Formspree hook (replace ID if needed)
  const [state, handleSubmit] = useForm("mreqbbeq");

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!mounted || !footerRef.current) return;

    const ctx = gsap.context(() => {
      if (contentRef.current?.children.length) {
        Array.from(contentRef.current.children).forEach((child) => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateY(0)";
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) {
    return <footer className="bg-[#0a0a0a] h-96" />;
  }

  return (
    <footer
      ref={footerRef}
      className="bg-[#0a0a0a] border-t border-[#262626] relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#10b981]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div ref={contentRef} className="py-16 md:py-20">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-6">
              <Link href="/" className="inline-block">
                <span className="text-4xl font-bold text-gradient">MA</span>
              </Link>
              <p className="text-[#a3a3a3] max-w-md text-sm md:text-base">
                FrontEnd Devloper | Next.js Expert specializing in building scalable web applications, business platforms, and production-ready solutions.
              </p>

              {/* Social */}
              <div className="flex gap-3 md:gap-4">
                {contactData.social.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${social.name}`}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#737373] hover:text-[#10b981] hover:border-[#10b981]/30 transition"
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="relative group">
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#737373] hover:text-[#10b981] text-sm md:text-base transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Linear gradient line - appears on hover only */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#10b981] to-[#d4af37] transition-all duration-500 ease-out rounded-full opacity-0 group-hover:opacity-100"></div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
              <ul className="space-y-4 text-sm md:text-base text-[#737373]">
                <li className="flex items-start md:items-center gap-3">
                  <FaEnvelope className="text-[#10b981] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="hover:text-[#10b981] transition-colors duration-300 break-words"
                  >
                    {contactData.email}
                  </a>
                </li>
                <li className="flex items-start md:items-center gap-3">
                  <FaPhoneAlt className="text-[#10b981] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <a 
                    href={`tel:${contactData.phone}`}
                    className="hover:text-[#10b981] transition-colors duration-300"
                  >
                    {contactData.phone}
                  </a>
                </li>
                <li className="flex items-start md:items-center gap-3">
                  <FaMapMarkerAlt className="text-[#10b981] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="hover:text-[#10b981] transition-colors duration-300">
                    {contactData.location}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter - Responsive Fix */}
        <div className="py-8 border-t border-[#262626]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="w-full md:w-auto">
              <h4 className="text-white font-semibold mb-1">Stay Updated</h4>
              <p className="text-sm text-[#737373]">
                Get notified about new projects and updates.
              </p>
            </div>

            {state.succeeded ? (
              <div className="w-full md:w-auto flex justify-center md:justify-start">
                <p className="text-[#10b981] font-medium text-center md:text-left">
                  Thanks for joining! 🎉
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
              >
                <div className="flex-1 w-full">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-[#111111] border border-[#262626] rounded-lg text-white placeholder-[#737373] focus:outline-none focus:border-[#10b981] text-sm md:text-base"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-green text-[#0a0a0a] font-semibold rounded-lg disabled:opacity-50 hover:opacity-90 transition-opacity text-sm md:text-base"
                >
                  {state.submitting ? "Submitting..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#262626] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#737373] text-sm flex items-center gap-2">
            © {currentYear} Muhammad Ahsan. Built with
            <FaHeart className="text-red-500 text-xs animate-pulse" /> using
            Next.js
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 text-[#0a0a0a] font-semibold text-sm bg-gradient-green rounded-full border border-transparent hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top 
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <FaArrowUp className="text-xs ml-1" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}