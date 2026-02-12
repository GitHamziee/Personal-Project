"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and challenges. Deep research ensures we build the right solution.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description:
      "Our designers craft intuitive, beautiful interfaces. We iterate with you until the vision is pixel-perfect.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description:
      "Our engineers bring designs to life with clean, scalable code. Agile sprints keep you involved throughout.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Delivery",
    description:
      "We deploy, test thoroughly, and ensure everything runs smoothly. Post-launch support keeps things running perfectly.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            How we <span className="gradient-text">bring ideas to life</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven, transparent process that ensures exceptional results every
            time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/50 via-secondary/50 to-accent/50" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Step number circle */}
              <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                <div className="absolute inset-0 rounded-full glass" />
                <div className="relative flex flex-col items-center">
                  <span className="text-xs text-accent font-bold tracking-wider">
                    STEP
                  </span>
                  <span className="text-3xl font-extrabold gradient-text">
                    {step.number}
                  </span>
                  <step.icon className="w-6 h-6 text-gray-400 mt-1" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
