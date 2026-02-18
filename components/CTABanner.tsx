"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import ParallaxLayer from "./ParallaxLayer";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      {/* Background glow — parallax */}
      <ParallaxLayer speed={0.3} className="absolute top-1/3 left-1/4">
        <div className="w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.6} className="absolute bottom-1/4 right-1/4">
        <div className="w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </ParallaxLayer>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-12 md:p-16 text-center card-underglow"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Ready to <span className="gradient-text">transform</span> your
            business?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            Let&apos;s discuss how our AI, web, and data solutions can take your
            business to the next level.
          </p>
          <MagneticButton>
            <Link
              href="/contact"
              className="gradient-bg text-white px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity btn-underglow"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
