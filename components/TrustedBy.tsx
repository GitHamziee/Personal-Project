"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  "TechStart Inc.",
  "DataFlow",
  "CloudNine",
  "InnovateCo",
  "GrowthHub",
  "FinEdge",
];

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-gray-500 uppercase tracking-widest mb-10"
        >
          Trusted by innovative companies
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, i) => (
            <motion.span
              key={client}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-gray-400 text-lg font-semibold hover:text-white transition-colors"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
