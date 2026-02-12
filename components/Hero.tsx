"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function Counter({ target, label }: { target: number; label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-center justify-center gap-1">
        <motion.span className="text-3xl md:text-4xl font-bold text-white">
          {rounded}
        </motion.span>
        <span className="text-3xl md:text-4xl font-bold text-accent">+</span>
      </div>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-gray-300">
            Powering the next generation of digital solutions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          We Build the Future
          <br />
          <span className="gradient-text">with AI & Technology</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          From intelligent AI bots to stunning web experiences and powerful data
          insights — we transform your ideas into digital reality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#services"
            className="gradient-bg text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity glow"
          >
            Our Services
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="glass glass-hover text-white px-8 py-3.5 rounded-full font-semibold transition-all"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter target={50} label="Projects Completed" />
            <Counter target={30} label="Happy Clients" />
            <Counter target={15} label="Team Members" />
            <Counter target={3} label="Years Experience" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
