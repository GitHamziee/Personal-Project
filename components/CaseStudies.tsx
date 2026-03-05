"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Award } from "lucide-react";

const caseStudies = [
  {
    tag: "SEO",
    tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    title: "312% increase in organic traffic in 6 months",
    client: "Catalyst SaaS",
    industry: "B2B Software",
    description:
      "Catalyst SaaS was struggling with organic visibility. We implemented a comprehensive SEO strategy including technical fixes, content optimization, and strategic link building that tripled their organic traffic and doubled inbound demo requests.",
    metrics: [
      { value: "312%", label: "Traffic increase" },
      { value: "2x", label: "Demo requests" },
      { value: "#1", label: "For 15 keywords" },
    ],
  },
  {
    tag: "Lead Generation",
    tagColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    title: "0 to 150 qualified leads per month",
    client: "BlueOak Realty",
    industry: "Real Estate",
    description:
      "BlueOak Realty had no predictable lead flow. We built a multi-channel outreach engine combining email campaigns, LinkedIn outreach, and landing pages that now generates 150+ qualified leads per month consistently.",
    metrics: [
      { value: "150+", label: "Leads per month" },
      { value: "23%", label: "Reply rate" },
      { value: "5.2x", label: "ROI" },
    ],
  },
  {
    tag: "Web Development",
    tagColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    title: "89% boost in conversion rate after redesign",
    client: "UrbanFit",
    industry: "E-Commerce",
    description:
      "UrbanFit's website was slow and outdated. We rebuilt it from scratch with Next.js, optimized for speed and mobile, and redesigned the checkout flow. The result: 89% higher conversion rates and a 2-second load time.",
    metrics: [
      { value: "89%", label: "Conversion lift" },
      { value: "< 2s", label: "Load time" },
      { value: "45%", label: "Lower bounce rate" },
    ],
  },
  {
    tag: "CRM Solutions",
    tagColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    title: "Saved 20+ hours per week with CRM automation",
    client: "PrimeEdge Legal",
    industry: "Legal Services",
    description:
      "PrimeEdge Legal's sales team was drowning in manual data entry and follow-ups. We configured their CRM with automated workflows, deal routing, and custom dashboards that saved the team 20+ hours per week.",
    metrics: [
      { value: "20+", label: "Hours saved weekly" },
      { value: "95%", label: "CRM adoption" },
      { value: "3x", label: "Pipeline visibility" },
    ],
  },
  {
    tag: "Cold Calling",
    tagColor: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    title: "35 qualified meetings per month from outbound",
    client: "Solstice Finance",
    industry: "Financial Services",
    description:
      "Solstice Finance needed a consistent flow of qualified meetings with CFOs. Our trained calling team developed custom scripts, built verified lists, and consistently books 35+ meetings per month.",
    metrics: [
      { value: "35+", label: "Meetings per month" },
      { value: "18%", label: "Connect rate" },
      { value: "87%", label: "Show-up rate" },
    ],
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="pb-0" ref={ref}>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-strong" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="blob blob-accent w-[500px] h-[500px] top-[-150px] right-[-100px]" />
        <div className="blob blob-purple w-[400px] h-[400px] bottom-[-80px] left-[-80px]" />
        <div className="absolute top-28 left-[12%] w-14 h-14 border border-indigo-200/20 rounded-full animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 badge mb-6">
              <Award className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl">
              Real results for{" "}
              <span className="text-gradient-rich">real businesses</span>
            </h1>
            <p className="text-secondary text-lg md:text-xl max-w-2xl">
              See how we&apos;ve helped companies across industries grow their
              revenue, traffic, and pipeline.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-8" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Case Studies */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow overflow-hidden group"
            >
              <div className="p-8 md:p-10">
                {/* Tag + Client */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${study.tagColor}`}>
                    {study.tag}
                  </span>
                  <span className="text-secondary text-sm">
                    {study.client} &middot; {study.industry}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">
                  {study.title}
                </h2>

                {/* Description */}
                <p className="text-secondary leading-relaxed mb-8 max-w-3xl">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-6 md:gap-10">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl md:text-3xl font-bold stat-value">{metric.value}</p>
                      <p className="text-secondary text-sm mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="cta-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 shimmer" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want results like these?
              </h2>
              <p className="text-indigo-200/80 max-w-lg mx-auto mb-8">
                Let&apos;s talk about how NexaFlow can drive the same kind of growth
                for your business.
              </p>
              <Link
                href="/contact"
                className="bg-white text-accent hover:bg-indigo-50 px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all text-sm shadow-xl shadow-indigo-900/20 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
