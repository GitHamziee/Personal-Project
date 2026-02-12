"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Globe, BarChart3, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Bots Creation",
    description:
      "Custom AI chatbots and virtual assistants that automate customer support, streamline operations, and deliver personalized experiences 24/7.",
    features: [
      "Custom Chatbots",
      "AI Assistants",
      "Process Automation",
      "NLP Integration",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Stunning, high-performance websites and web applications built with modern frameworks. From landing pages to complex SaaS platforms.",
    features: [
      "Full-Stack Apps",
      "E-Commerce",
      "Landing Pages",
      "API Development",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with custom dashboards, predictive analytics, and business intelligence solutions.",
    features: [
      "Custom Dashboards",
      "Predictive Analytics",
      "Data Pipelines",
      "BI Solutions",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Solutions that <span className="gradient-text">drive growth</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive suite of technology services designed to
            transform your business and accelerate your digital journey.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 group hover:border-accent/30 transition-all duration-500 glow-hover relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
