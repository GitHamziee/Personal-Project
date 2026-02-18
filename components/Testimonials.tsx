"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import TiltCard from "./TiltCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "NexGen Solutions transformed our customer support with an AI chatbot that handles 80% of queries automatically. Our response time went from hours to seconds.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, DataFlow",
    content:
      "The data analytics dashboard they built gives us real-time insights we never had before. It's been a game-changer for our decision making.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, CloudNine",
    content:
      "Professional, creative, and incredibly skilled. They delivered our web platform ahead of schedule and it exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Director, InnovateCo",
    content:
      "Working with NexGen was seamless. They understood our vision from day one and executed it flawlessly. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "VP Marketing, GrowthHub",
    content:
      "The AI-powered lead qualification bot they built increased our conversion rate by 45%. The ROI has been incredible.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "COO, FinEdge",
    content:
      "Their data pipeline solution processes millions of records daily without breaking a sweat. Rock-solid engineering and great support.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="pt-16 pb-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            What our <span className="gradient-text">clients say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve
            helped transform.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard tiltIntensity={8} className="glass rounded-2xl p-6 glow-hover transition-all duration-300 group h-full card-underglow">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent/30 mb-4 group-hover:text-accent/50 transition-colors" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm avatar-underglow">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
