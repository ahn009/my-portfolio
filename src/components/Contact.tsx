"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { contactData, FaEnvelope, FaPhone, FaMapMarkerAlt } from "@/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-[#d4af37] text-sm font-medium bg-[#d4af37]/10 rounded-full mb-4">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-[#737373] max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to discussing new opportunities.
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-6">
                Contact Information
              </h3>
              <p className="text-[#a3a3a3] leading-relaxed">
                I&apos;m currently available for freelance work and full-time
                positions. If you have a project that needs coding or you want
                to hire me, feel free to contact me.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-xl border border-[#262626] hover:border-[#d4af37]/30 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                  <FaEnvelope className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-[#737373] text-sm">Email</p>
                  <p className="text-[#f5f5f5] font-medium">
                    {contactData.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${contactData.phone}`}
                className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-xl border border-[#262626] hover:border-[#3b82f6]/30 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors">
                  <FaPhone className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <p className="text-[#737373] text-sm">Phone</p>
                  <p className="text-[#f5f5f5] font-medium">
                    {contactData.phone}
                  </p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-xl border border-[#262626]">
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-[#737373] text-sm">Location</p>
                  <p className="text-[#f5f5f5] font-medium">
                    {contactData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[#737373] text-sm mb-4">Follow me on</p>
              <div className="flex gap-4">
                {contactData.social.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-[#0a0a0a] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-[#262626]"
            >
              <h3 className="text-xl font-bold text-[#f5f5f5] mb-6">
                Send me a message
              </h3>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#a3a3a3] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#111111] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#a3a3a3] mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-[#111111] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#a3a3a3] mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-[#111111] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-primary text-[#0a0a0a] font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-sm text-center"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm text-center"
                  >
                    Something went wrong. Please try again or email me directly.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
