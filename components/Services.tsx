"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Search,
  PhoneCall,
  Target,
  Settings,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
  gradient: string;
  shadowColor: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built for performance, conversion, and scale. From landing pages to full SaaS platforms.",
    features: [
      "Responsive design",
      "Performance optimization",
      "E-commerce solutions",
      "CMS integration",
      "Web applications",
      "Ongoing maintenance",
    ],
    href: "/services/web-development",
    gradient: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Data-driven search engine optimization that drives organic traffic and puts your business in front of high-intent buyers.",
    features: [
      "Technical SEO audits",
      "On-page optimization",
      "Content strategy",
      "Link building",
      "Local SEO",
      "Analytics & reporting",
    ],
    href: "/services/seo",
    gradient: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-500/20",
  },
  {
    icon: PhoneCall,
    title: "Cold Calling",
    description:
      "Trained outbound calling teams that book qualified meetings and fill your sales calendar consistently.",
    features: [
      "Script development",
      "Appointment setting",
      "Lead qualification",
      "CRM integration",
      "Call recording & QA",
      "Daily reporting",
    ],
    href: "/services/cold-calling",
    gradient: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Multi-channel outreach campaigns that fill your pipeline with qualified prospects ready to buy.",
    features: [
      "Email campaigns",
      "LinkedIn outreach",
      "Landing page creation",
      "Lead scoring",
      "Pipeline management",
      "A/B testing",
    ],
    href: "/services/lead-generation",
    gradient: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: Settings,
    title: "CRM Solutions",
    description:
      "Custom CRM setup, migration, and workflow automation that keeps your sales team focused on closing.",
    features: [
      "CRM setup & migration",
      "Workflow automation",
      "Pipeline management",
      "Reporting dashboards",
      "Third-party integrations",
      "Team training",
    ],
    href: "/services/crm-solutions",
    gradient: "from-rose-500 to-pink-600",
    shadowColor: "shadow-rose-500/20",
  },
];

export default function Services() {
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
        <div className="absolute top-24 right-[15%] w-16 h-16 border border-indigo-200/20 rounded-xl rotate-12 animate-float-slow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl">
              The full growth stack for your{" "}
              <span className="text-gradient-rich">business</span>
            </h1>
            <p className="text-secondary text-lg md:text-xl max-w-2xl">
              From building your digital presence to filling your pipeline with
              qualified leads, we handle it all.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-8" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services List */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow overflow-hidden group"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left — Icon + Title */}
                <div className="md:col-span-2 p-8 md:p-10 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-100">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h2>
                  <Link
                    href={service.href}
                    className="text-accent text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all mt-2"
                  >
                    View details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Right — Description + Features */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <p className="text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-accent" />
                        </div>
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
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
              <p className="text-indigo-200/80 text-lg mb-3">
                Not sure which service is right for you?
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Let&apos;s find the perfect fit
              </h2>
              <Link
                href="/contact"
                className="bg-white text-accent hover:bg-indigo-50 px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all text-sm shadow-xl shadow-indigo-900/20 hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
