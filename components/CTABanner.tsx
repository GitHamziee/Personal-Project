"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cta-gradient rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-white/[0.03] rounded-full" />

          {/* Dot grid */}
          <div className="absolute inset-0 dot-pattern-dark opacity-10" />

          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Free Consultation</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl mx-auto leading-tight">
              Ready to accelerate your growth?
            </h2>
            <p className="text-indigo-200/80 max-w-xl mx-auto mb-10 text-lg">
              Book a free strategy call and discover how NexaFlow can transform
              your pipeline and drive real results.
            </p>
            <Link
              href="/contact"
              className="bg-white text-accent hover:bg-indigo-50 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all text-sm shadow-xl shadow-indigo-900/30 hover:shadow-2xl hover:shadow-indigo-900/40 hover:-translate-y-1"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
