"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, BarChart3, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery",
    description: "We learn your goals, audience, and challenges through a deep-dive strategy session.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Strategy",
    description: "We build a custom plan tailored to your business with clear milestones and KPIs.",
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    description: "Our team delivers with speed, precision, and full transparency at every step.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Results",
    description: "We measure, optimize, and scale what works to maximize your return on investment.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function ProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 section-dark relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern-dark opacity-20" />
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="blob blob-accent w-[600px] h-[600px] top-[-200px] left-[-200px] opacity-20" />
      <div className="blob blob-purple w-[400px] h-[400px] bottom-[-100px] right-[-100px] opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Simple process, <span className="text-accent-light">powerful results</span>
          </h2>
          <p className="text-indigo-200/60 max-w-2xl mx-auto text-lg">
            A straightforward approach that gets you from strategy to results
            without the complexity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+48px)] w-[calc(100%-96px)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-white/20 to-white/5" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              )}

              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-colors" />
                  {/* Gradient inner */}
                  <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  {/* Inner circle */}
                  <div className="absolute inset-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  {/* Step number badge */}
                  <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} text-white text-xs font-bold flex items-center justify-center shadow-lg`}>
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-indigo-200/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
