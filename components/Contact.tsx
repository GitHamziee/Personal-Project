"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nexgensolutions.com",
    href: "mailto:hello@nexgensolutions.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it. Reach out and
            let&apos;s discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-navy-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-navy-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-navy-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-navy-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="gradient-bg text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity glow"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                className="glass glass-hover glow-hover rounded-xl p-6 flex items-center gap-4 transition-all duration-300 block"
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Extra CTA */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Ready to get started?
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Book a free 30-minute consultation to discuss your project.
              </p>
              <a
                href="#"
                className="gradient-bg text-white px-6 py-2.5 rounded-full text-sm font-semibold inline-block hover:opacity-90 transition-opacity"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
