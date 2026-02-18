"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Clock, Headphones, TrendingUp } from "lucide-react";
import TiltCard from "./TiltCard";

const reasons = [
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description:
      "We use the latest in AI, cloud, and web frameworks — no legacy bloat, just modern solutions that scale.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Agile sprints and clear milestones mean your project ships on time, every time. No surprises.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "A real team that responds fast and stays with you post-launch. We don't disappear after deployment.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Every project we deliver is built to drive measurable impact — more users, better efficiency, real ROI.",
  },
];

const highlights = [
  { value: "98%", label: "Client Retention" },
  { value: "2-6 wk", label: "Avg. Delivery" },
  { value: "24/7", label: "Support" },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side — Text + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-accent uppercase tracking-widest mb-4">
              Why Data Mentor Labs
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              We don&apos;t just build software.{" "}
              <span className="gradient-text">We build partnerships.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 text-lg">
              Most agencies hand off a deliverable and move on. We embed
              ourselves in your goals, iterate with your team, and stick around
              to make sure everything works — and keeps working.
            </p>

            {/* Highlight numbers */}
            <div className="flex gap-10 mb-10">
              {highlights.map((h) => (
                <div key={h.label}>
                  <p className="text-2xl font-bold text-white">
                    {h.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/process"
              className="text-sm text-accent hover:text-accent-light transition-colors inline-flex items-center gap-3 group tracking-wider uppercase"
            >
              See how we work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right side — Icon reason cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <TiltCard className="glass rounded-xl p-6 group hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 icon-underglow">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
