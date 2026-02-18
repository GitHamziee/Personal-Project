"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

/* ─── Counter ─── */
function Counter({ target, label }: { target: number; label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) animate(count, target, { duration: 2, ease: "easeOut" });
  }, [isInView, count, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-center justify-center gap-1">
        <motion.span
          className="text-3xl md:text-4xl font-bold text-white inline-block text-right"
          style={{ fontVariantNumeric: "tabular-nums", width: target >= 100 ? "3ch" : "2ch" }}
        >
          {rounded}
        </motion.span>
        <span className="text-3xl md:text-4xl font-bold text-accent">+</span>
      </div>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}

/* ─── Word cycling ─── */
const words = ["AI Solutions", "Web Development", "Data Analytics", "Cloud Technology"];

function WordCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        className="gradient-text"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}

/* ─── Character reveal ─── */
function CharReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.4, delay: delay + i * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Fade-up helper ─── */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
});

/* ─── Hero ─── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-gray-300">Your technology partner for growth</span>
        </motion.div>

        {/* Headline line 1 */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2">
          <CharReveal text="We Build the Future" className="text-white" delay={0.3} />
        </div>

        {/* Headline line 2 — "with" + cycling word */}
        <motion.div
          {...fadeUp(1.0)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 overflow-hidden"
        >
          <span className="text-white">with </span>
          <span className="inline-block overflow-hidden h-[1.2em] align-bottom">
            <WordCycle />
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(1.4)}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          We help businesses grow through smart AI tools, modern websites, and
          data-driven strategies, turning complex challenges into simple, effective solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(1.7)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="gradient-bg text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity glow btn-underglow"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
          <MagneticButton magneticStrength={6}>
            <Link
              href="/about"
              className="glass glass-hover text-white px-8 py-3.5 rounded-full font-semibold transition-all btn-underglow-secondary"
            >
              Learn About Us
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Stats — completely independent container */}
      <motion.div
        {...fadeUp(2.0)}
        className="relative z-10 w-full max-w-3xl"
      >
        <div className="glass rounded-2xl p-8 card-underglow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter target={50} label="Projects Completed" />
            <Counter target={30} label="Happy Clients" />
            <Counter target={15} label="Team Members" />
            <Counter target={3} label="Years Experience" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
