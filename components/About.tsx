"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Shield, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We leverage cutting-edge AI and modern technologies to deliver solutions that put you ahead of the competition.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "Every project goes through rigorous quality assurance. We don't ship until it meets our high standards.",
  },
  {
    icon: TrendingUp,
    title: "Results Driven",
    description:
      "Our solutions are designed to deliver measurable impact — more leads, better efficiency, and real growth.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              We are a team of passionate{" "}
              <span className="gradient-text">innovators & builders</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              NexGen Solutions was founded with a simple mission: to make
              powerful technology accessible to businesses of all sizes. We
              combine expertise in artificial intelligence, web development, and
              data analytics to create solutions that drive real results.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our team brings together diverse skills and a shared passion for
              technology. Whether you need an intelligent chatbot, a stunning
              website, or actionable data insights, we have the expertise to
              deliver excellence.
            </p>
          </motion.div>

          {/* Right — Cards */}
          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="glass glass-hover glow-hover rounded-xl p-6 flex items-start gap-4 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
