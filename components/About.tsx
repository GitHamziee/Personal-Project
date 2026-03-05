"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Target,
  Eye,
  Users,
  Zap,
  Shield,
  Award,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every decision we make is measured against one question: does this move the needle for our clients?",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Speed & Precision",
    description:
      "We deliver fast without cutting corners. Clear timelines, transparent updates, zero surprises.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description:
      "No hidden fees, no vague reports. You see exactly what we do and the results it produces.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description:
      "We don't just work for you — we work with you. Your success is our success.",
    gradient: "from-violet-500 to-purple-500",
  },
];

const team = [
  { name: "Alex Morgan", role: "Founder & CEO", initials: "AM", gradient: "from-blue-500 to-indigo-500" },
  { name: "Priya Patel", role: "Head of Operations", initials: "PP", gradient: "from-violet-500 to-purple-500" },
  { name: "Jordan Lee", role: "Lead Developer", initials: "JL", gradient: "from-emerald-500 to-teal-500" },
  { name: "Maya Santos", role: "SEO Director", initials: "MS", gradient: "from-amber-500 to-orange-500" },
  { name: "Ryan Cooper", role: "Sales Lead", initials: "RC", gradient: "from-rose-500 to-pink-500" },
  { name: "Sofia Kim", role: "Design Lead", initials: "SK", gradient: "from-cyan-500 to-blue-500" },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Clients Served" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Retention Rate" },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <div className="pb-0">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-strong" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="blob blob-accent w-[500px] h-[500px] top-[-150px] right-[-100px]" />
        <div className="blob blob-purple w-[400px] h-[400px] bottom-[-100px] left-[-50px]" />
        <div className="absolute top-28 right-[18%] w-16 h-16 border border-indigo-200/20 rounded-xl rotate-12 animate-float-slow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="inline-flex items-center gap-2 badge mb-6">
              <Award className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">About NexaFlow</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl">
              We help businesses grow through{" "}
              <span className="text-gradient-rich">digital excellence</span>
            </h1>
            <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
              NexaFlow was founded on a simple belief: every business deserves
              access to high-quality digital growth strategies — without the
              enterprise price tag or agency runaround.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-8" />
          </Section>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Story */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Our story
                </h2>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    We started NexaFlow because we saw the same problem everywhere:
                    businesses spending thousands on agencies that delivered flashy
                    presentations but mediocre results.
                  </p>
                  <p>
                    We built NexaFlow to be different. No fluff, no vanity metrics —
                    just proven strategies that drive real revenue. From web development
                    and SEO to cold calling and CRM automation, we cover the full
                    growth stack.
                  </p>
                  <p>
                    Today, we work with 50+ clients across industries, helping them
                    generate millions in pipeline and grow their businesses predictably.
                  </p>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="space-y-6">
                <div className="card-glow p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    To empower businesses with the digital tools and strategies they
                    need to grow predictably and sustainably.
                  </p>
                </div>
                <div className="card-glow p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    To become the most trusted growth partner for businesses that
                    want measurable results, not empty promises.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-20" />
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="blob blob-accent w-[400px] h-[400px] top-[-100px] left-[-100px] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Our Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What drives us
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="card-dark p-6 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-indigo-200/50 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-strong" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="card-glass p-6 md:p-8 text-center">
                  <p className="text-3xl md:text-4xl font-extrabold stat-value mb-1">
                    {stat.value}
                  </p>
                  <p className="text-secondary text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="blob blob-blue w-[400px] h-[400px] bottom-[-100px] right-[-100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 badge mb-4">
                <Users className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Our Team</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The people behind NexaFlow
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                A lean, senior team with deep expertise across development, marketing,
                and sales.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="card-glow p-6 flex items-center gap-4 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-sm">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">{member.name}</p>
                    <p className="text-secondary text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="cta-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="absolute inset-0 shimmer" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Want to work with us?
                </h2>
                <p className="text-indigo-200/80 max-w-lg mx-auto mb-8">
                  Let&apos;s talk about how NexaFlow can help grow your business.
                </p>
                <Link
                  href="/contact"
                  className="bg-white text-accent hover:bg-indigo-50 px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all text-sm shadow-xl shadow-indigo-900/20 hover:-translate-y-0.5"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}
