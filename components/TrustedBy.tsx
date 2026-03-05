"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  "Meridian Health",
  "UrbanFit",
  "Solstice Finance",
  "BlueOak Realty",
  "Catalyst SaaS",
  "PrimeEdge Legal",
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
          className="text-center text-xs text-secondary/50 uppercase tracking-[0.25em] mb-10 font-medium"
        >
          Trusted by innovative companies
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client, i) => (
            <motion.span
              key={client}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-slate-300 text-lg font-bold tracking-tight hover:text-accent/50 transition-colors duration-300 cursor-default"
            >
              {client}
            </motion.span>
          ))}
        </div>

        <div className="divider-accent mt-16" />
      </div>
    </section>
  );
}
