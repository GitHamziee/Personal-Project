"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Palette,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageSquare,
  Layers,
  TestTube,
  Headphones,
  type LucideIcon,
} from "lucide-react";

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
  accent: string;
}

const steps: Step[] = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business to understand your goals, audience, and challenges. This phase is the foundation — we ask the right questions so we build the right thing.",
    deliverables: [
      "Requirements gathering & workshops",
      "Competitive & market analysis",
      "Technical feasibility assessment",
      "Project roadmap & timeline",
      "Budget estimation & resource planning",
      "Risk assessment & mitigation strategy",
    ],
    duration: "1-2 weeks",
    accent: "from-blue-800 to-blue-700",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers translate strategy into visual experiences. You'll see wireframes, mockups, and interactive prototypes — and we iterate until it feels exactly right.",
    deliverables: [
      "Wireframes & user flow diagrams",
      "High-fidelity UI/UX mockups",
      "Interactive clickable prototype",
      "Design system & component library",
      "Responsive breakpoint designs",
      "Client review & sign-off rounds",
    ],
    duration: "1-3 weeks",
    accent: "from-blue-700 to-cyan-700",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development & Testing",
    description:
      "Clean, scalable code meets rigorous testing. We work in agile sprints with regular demos so you see progress every week — no black box development.",
    deliverables: [
      "Frontend & backend implementation",
      "Third-party API integrations",
      "Database architecture & optimization",
      "Automated test suites (unit + E2E)",
      "Code reviews & security audits",
      "Weekly sprint demos & feedback loops",
    ],
    duration: "3-8 weeks",
    accent: "from-cyan-700 to-sky-700",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment, monitoring, and optimization. Post-launch, we stay with you — fixing issues, adding features, and making sure everything runs perfectly.",
    deliverables: [
      "Production deployment & CI/CD setup",
      "Performance & load optimization",
      "Monitoring, logging & alerting",
      "Knowledge transfer & documentation",
      "30-day post-launch warranty",
      "Ongoing maintenance & feature updates",
    ],
    duration: "1-2 weeks + ongoing",
    accent: "from-blue-900 to-blue-700",
  },
];

const principles = [
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and no surprises. You always know where things stand.",
  },
  {
    icon: Layers,
    title: "Iterative Approach",
    description: "Ship fast, get feedback, improve continuously. We validate at every stage.",
  },
  {
    icon: TestTube,
    title: "Quality First",
    description: "Thorough testing at every phase. We don't ship until it meets our high bar.",
  },
  {
    icon: Headphones,
    title: "Post-Launch Care",
    description: "We don't disappear after launch. Dedicated support whenever you need it.",
  },
  {
    icon: FileText,
    title: "Full Documentation",
    description: "Complete technical docs so your team can understand and maintain everything.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="pt-16 pb-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            How we <span className="gradient-text">bring ideas to life</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A proven four-phase process built on transparency, iteration, and
            results.
          </p>
        </motion.div>

        {/* Steps — left-aligned timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-secondary/50 to-accent/50" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-4 top-8">
                  <div
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.accent} ring-4 ring-navy-950`}
                  />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-8 md:p-10 hover:border-accent/20 transition-all duration-300">
                  {/* Top row: icon, title, duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center shrink-0 icon-underglow`}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                          Phase {step.number}
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <span className="sm:ml-auto text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-semibold whitespace-nowrap self-start">
                      {step.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-8 text-base max-w-3xl">
                    {step.description}
                  </p>

                  {/* Deliverables grid */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4">
                      Key Deliverables
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {step.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 bg-white/[0.02] rounded-lg px-4 py-3 border border-white/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-28"
        >
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-4">
            What to <span className="gradient-text">expect</span> working with
            us
          </h3>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
            Beyond our process, these are the principles that guide every
            engagement.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                className="glass rounded-xl p-6 text-center group hover:border-accent/20 transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors icon-underglow">
                  <p.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">
                  {p.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-24 glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to kick off your project?
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Book a free consultation and we&apos;ll walk you through how our
              process applies to your specific needs.
            </p>
            <Link
              href="/contact"
              className="gradient-bg text-white px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity glow btn-underglow"
            >
              Let&apos;s Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
