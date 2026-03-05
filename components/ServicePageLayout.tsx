"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Globe,
  Smartphone,
  Zap,
  ShoppingCart,
  Wrench,
  Search,
  FileText,
  Link2,
  BarChart3,
  MapPin,
  Settings,
  PhoneCall,
  Users,
  ClipboardCheck,
  Headphones,
  MessageSquare,
  Target,
  Mail,
  Linkedin,
  Filter,
  TrendingUp,
  Database,
  Workflow,
  Plug,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "./PageHeader";

const iconMap: Record<string, LucideIcon> = {
  Code2, Globe, Smartphone, Zap, ShoppingCart, Wrench,
  Search, FileText, Link2, BarChart3, MapPin, Settings,
  PhoneCall, Users, ClipboardCheck, Headphones, MessageSquare,
  Target, Mail, Linkedin, Filter, TrendingUp, Database,
  Workflow, Plug, GraduationCap,
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ServicePageProps {
  title: string;
  highlight: string;
  description: string;
  longDescription: string;
  features: Feature[];
  benefits: string[];
  stats: { value: string; label: string }[];
  process: { step: string; title: string; description: string }[];
}

export default function ServicePageLayout({
  title,
  highlight,
  description,
  longDescription,
  features,
  benefits,
  stats,
  process,
}: ServicePageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="pb-0" ref={ref}>
      <PageHeader
        title={title}
        highlight={highlight}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: highlight },
        ]}
      />

      {/* Overview + Stats */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-secondary text-lg leading-relaxed">
                {longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="card-glass p-6 text-center">
                  <p className="text-2xl font-bold stat-value mb-1">{stat.value}</p>
                  <p className="text-secondary text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-20" />
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="blob blob-accent w-[400px] h-[400px] top-[-100px] right-[-100px] opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What&apos;s included
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Globe;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-dark p-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-light/80 flex items-center justify-center mb-4 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-indigo-200/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-strong" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="blob blob-blue w-[400px] h-[400px] bottom-[-100px] left-[-100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 badge mb-4">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Benefits</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why choose NexaFlow
              </h2>
              <p className="text-secondary mb-8">
                We don&apos;t just deliver a service — we deliver results you can measure.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-accent/20">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {process.map((step) => (
                <div key={step.step} className="card-glow p-6 flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">{step.title}</h3>
                    <p className="text-secondary text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 shimmer" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to get started?
              </h2>
              <p className="text-indigo-200/80 max-w-lg mx-auto mb-8">
                Book a free consultation and let&apos;s discuss how we can help grow
                your business.
              </p>
              <Link
                href="/contact"
                className="bg-white text-accent hover:bg-indigo-50 px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all text-sm shadow-xl shadow-indigo-900/20 hover:-translate-y-0.5"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
