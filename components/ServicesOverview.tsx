"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Search,
  PhoneCall,
  Target,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance websites and web applications that convert visitors into customers.",
    href: "/services/web-development",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
    shadowColor: "shadow-blue-500/10",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Data-driven search engine optimization that puts you on page one and keeps you there.",
    href: "/services/seo",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    shadowColor: "shadow-violet-500/10",
  },
  {
    icon: PhoneCall,
    title: "Cold Calling",
    description:
      "Professional outbound calling teams that book qualified meetings for your sales team.",
    href: "/services/cold-calling",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    shadowColor: "shadow-emerald-500/10",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Multi-channel lead generation campaigns that fill your pipeline with qualified prospects.",
    href: "/services/lead-generation",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/10 to-orange-500/10",
    shadowColor: "shadow-amber-500/10",
  },
  {
    icon: Settings,
    title: "CRM Solutions",
    description:
      "Custom CRM setup and automation that streamlines your sales process end to end.",
    href: "/services/crm-solutions",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-500/10 to-pink-500/10",
    shadowColor: "shadow-rose-500/10",
  },
];

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Rich background */}
      <div className="absolute inset-0 mesh-gradient opacity-70" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="blob blob-purple w-[500px] h-[500px] top-[-100px] right-[-200px]" />
      <div className="blob blob-blue w-[400px] h-[400px] bottom-[-100px] left-[-150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 badge mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">What We Do</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Everything you need to <span className="text-gradient-rich">grow</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            From building your digital presence to filling your pipeline, we handle
            the full growth stack so you can focus on closing deals.
          </p>
        </motion.div>

        {/* Top row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className={`card-glow p-8 block h-full group hover:shadow-xl ${service.shadowColor}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {services.slice(3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link href={service.href} className={`card-glow p-8 block h-full group hover:shadow-xl ${service.shadowColor}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
