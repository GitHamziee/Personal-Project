"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Meridian Health",
    content:
      "NexaFlow completely transformed our online presence. Our website traffic increased by 200% and we're generating leads we never had before.",
    rating: 5,
    highlight: "200% traffic increase",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    name: "James Rodriguez",
    role: "VP Sales, Catalyst SaaS",
    content:
      "Their cold calling team books us 30+ qualified meetings per month. It's like having an in-house SDR team at a fraction of the cost.",
    rating: 5,
    highlight: "30+ meetings/month",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Emily Chen",
    role: "Founder, UrbanFit",
    content:
      "The CRM automation NexaFlow built saves us 20+ hours per week. Our sales pipeline is finally organized and our team can focus on closing.",
    rating: 5,
    highlight: "20+ hours saved/week",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 section-dark relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 dot-pattern-dark opacity-20" />
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="blob blob-accent w-[500px] h-[500px] top-[-200px] right-[-100px] opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            What our clients say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-dark p-8 relative group"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white/5 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-indigo-100/70 text-sm leading-relaxed mb-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Highlight metric */}
              <div className="inline-block text-xs font-semibold text-accent-light bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-6">
                {testimonial.highlight}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-semibold text-xs">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-indigo-200/40 text-xs">{testimonial.role}</p>
                </div>
              </div>

              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 rounded-2xl shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
