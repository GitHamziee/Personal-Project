"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2, CheckCircle, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nexaflow.com",
    href: "mailto:hello@nexaflow.com",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
    gradient: "from-emerald-500 to-teal-500",
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
    <div className="pb-0" ref={ref}>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-strong" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="blob blob-accent w-[500px] h-[500px] top-[-150px] right-[-100px]" />
        <div className="blob blob-purple w-[300px] h-[300px] bottom-[-50px] left-[5%]" />
        <div className="absolute top-24 left-[12%] w-12 h-12 border border-indigo-200/20 rounded-full animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 badge mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Contact Us</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5">
              Let&apos;s <span className="text-gradient-rich">work together</span>
            </h1>
            <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Reach out and
              let&apos;s discuss how we can help.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-8" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Form section */}
      <section className="relative overflow-hidden pb-16">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="card-glow p-8 md:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
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
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
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
                  <label className="block text-sm text-slate-600 mb-2 font-medium">
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
                  <label className="block text-sm text-slate-600 mb-2 font-medium">
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

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 text-sm bg-green-50 border border-green-200 rounded-xl px-4 py-3"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Message sent successfully! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary px-8 py-3.5 text-sm inline-flex items-center gap-2 disabled:opacity-60"
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
                </button>
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
                  className="card-glow p-5 flex items-center gap-4 block group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary">{info.label}</p>
                    <p className="text-slate-900 font-medium text-sm">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Book a Call CTA */}
              <div className="cta-gradient rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 shimmer" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <h3 className="text-lg font-bold text-white">
                      Ready to get started?
                    </h3>
                  </div>
                  <p className="text-indigo-200/70 text-sm mb-4">
                    Book a free 30-minute consultation to discuss your project.
                  </p>
                  <a
                    href="#"
                    className="bg-white text-accent hover:bg-indigo-50 px-6 py-2.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-0.5"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
