"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@datamentorlabs.com",
    href: "mailto:hello@datamentorlabs.com",
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
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setSuccess(true);
      formRef.current.reset();
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-16 pb-32 relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="contact-input"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="contact-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className="contact-input"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="contact-input resize-none"
                />
              </div>

              {/* Success message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}

              {/* Error message */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={loading ? {} : { scale: 1.02 }}
                whileTap={loading ? {} : { scale: 0.98 }}
                className="gradient-bg text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity glow btn-underglow disabled:opacity-60"
              >
                {loading ? (
                  <>
                    Sending...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="glass rounded-xl p-5 flex items-center gap-4 transition-all duration-300 block group hover:border-accent/20 card-underglow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors icon-underglow">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="text-white font-semibold text-sm">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Book a Call CTA */}
            <div className="glass rounded-xl p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-bold text-white">
                    Ready to get started?
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Book a free 30-minute consultation to discuss your project.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="gradient-bg text-white px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity btn-underglow"
                >
                  Book a Call
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
