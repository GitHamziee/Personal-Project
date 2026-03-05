"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  highlight: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  title,
  highlight,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  const crumbs = breadcrumbs || [
    { label: "Home", href: "/" },
    { label: highlight },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 mesh-gradient-strong" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Decorative blobs */}
      <div className="blob blob-accent w-[400px] h-[400px] top-[-100px] right-[10%]" />
      <div className="blob blob-purple w-[300px] h-[300px] bottom-[-50px] left-[5%]" />

      {/* Decorative shapes */}
      <div className="absolute top-24 right-[15%] w-16 h-16 border border-indigo-200/20 rounded-xl rotate-12 animate-float-slow" />
      <div className="absolute bottom-12 left-[10%] w-10 h-10 border border-violet-200/20 rounded-full animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-6"
        >
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-accent transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-accent font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5"
        >
          {title} <span className="text-gradient-rich">{highlight}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Decorative accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-8"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
