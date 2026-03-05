"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const metrics = [
  { value: "347%", label: "Average ROI for clients" },
  { value: "2.4M", label: "Leads generated last year" },
  { value: "150+", label: "Websites launched" },
  { value: "98%", label: "Client retention rate" },
];

const caseStudies = [
  {
    tag: "SEO",
    tagColor: "bg-blue-500/10 text-blue-600 border border-blue-500/20",
    title: "312% increase in organic traffic in 6 months",
    client: "SaaS Company",
  },
  {
    tag: "Lead Generation",
    tagColor: "bg-purple-500/10 text-purple-600 border border-purple-500/20",
    title: "0 to 150 qualified leads per month",
    client: "Real Estate Firm",
  },
  {
    tag: "Web Development",
    tagColor: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    title: "89% boost in conversion rate after redesign",
    client: "E-Commerce Brand",
  },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-strong" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="blob blob-accent w-[500px] h-[500px] top-[-150px] left-[-100px]" />
      <div className="blob blob-purple w-[400px] h-[400px] bottom-[-100px] right-[-100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 badge mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Results</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Numbers that <span className="text-gradient-rich">speak for themselves</span>
          </h2>
        </motion.div>

        {/* Metrics in glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="card-glass p-6 md:p-8 text-center">
              <p className="text-4xl md:text-5xl font-extrabold stat-value mb-2">
                {metric.value}
              </p>
              <p className="text-secondary text-sm">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="divider-accent mb-16" />

        {/* Mini case study cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card-accent p-6 group"
            >
              <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${study.tagColor}`}>
                {study.tag}
              </span>
              <h3 className="text-primary font-semibold mb-2 leading-snug group-hover:text-accent transition-colors">
                {study.title}
              </h3>
              <p className="text-slate-400 text-sm">{study.client}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold text-sm group"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
