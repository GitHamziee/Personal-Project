"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Search, PhoneCall, Target, Settings, Sparkles, Play } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5x", label: "Average ROI" },
  { value: "98%", label: "Client Retention" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Rich layered background */}
      <div className="absolute inset-0 mesh-gradient-strong" />
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Decorative gradient blobs */}
      <div className="blob blob-accent w-[600px] h-[600px] top-[-100px] right-[-100px]" />
      <div className="blob blob-purple w-[500px] h-[500px] bottom-[-50px] left-[-100px]" />
      <div className="blob blob-blue w-[400px] h-[400px] top-[40%] left-[50%]" />

      {/* Decorative geometric shapes */}
      <div className="absolute top-32 left-[8%] w-20 h-20 border border-indigo-200/30 rounded-2xl rotate-12 animate-float-slow" />
      <div className="absolute bottom-40 right-[12%] w-14 h-14 border border-violet-200/30 rounded-full animate-float-delayed" />
      <div className="absolute top-[60%] left-[15%] w-3 h-3 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-[20%] right-[25%] w-2 h-2 bg-violet-400/30 rounded-full animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            {/* Badge */}
            <motion.div
              {...fadeUp(0.1)}
              className="badge mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-ring" />
              <span className="text-sm text-slate-600">Trusted by 50+ businesses</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-primary leading-[1.08] mb-6 tracking-tight"
            >
              Grow your business with{" "}
              <span className="text-gradient-rich">digital excellence</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.4)}
              className="text-lg md:text-xl text-secondary max-w-xl mb-10 leading-relaxed"
            >
              NexaFlow delivers high-performance websites, SEO that ranks, and lead
              generation systems that convert. From first impression to closed deal.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary px-8 py-4 text-sm inline-flex items-center gap-2"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="btn-secondary px-8 py-4 text-sm inline-flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                See Our Work
              </Link>
            </motion.div>

            {/* Social proof row */}
            <motion.div
              {...fadeUp(0.8)}
              className="mt-10 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["AM", "PP", "JL", "MS"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${
                        ["#4f46e5", "#7c3aed", "#6366f1", "#8b5cf6"][i]
                      }, ${
                        ["#818cf8", "#a78bfa", "#818cf8", "#c4b5fd"][i]
                      })`,
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">50+</span> businesses trust NexaFlow
              </div>
            </motion.div>
          </div>

          {/* Right — Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="hidden lg:block relative"
          >
            {/* Main visual — floating service cards */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Spinning outer ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-indigo-200/40 animate-spin-slow" />
              {/* Background circles */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100/50" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-white to-indigo-50/50 border border-indigo-100/30" />

              {/* Floating cards */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-float">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100/50 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Web Development</p>
                    <p className="text-xs text-secondary">50+ sites launched</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/4 -left-4 animate-float-delayed">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-violet-100/50 border border-violet-100/50 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-md shadow-violet-500/20">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">SEO</p>
                    <p className="text-xs text-secondary">312% avg. growth</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/3 -right-2 animate-float">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-emerald-100/50 border border-emerald-100/50 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-500/20">
                    <PhoneCall className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Cold Calling</p>
                    <p className="text-xs text-secondary">30+ meetings/mo</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-2 animate-float">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-amber-100/50 border border-amber-100/50 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md shadow-amber-500/20">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Lead Generation</p>
                    <p className="text-xs text-secondary">2.4M leads generated</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/3 animate-float-delayed">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-rose-100/50 border border-rose-100/50 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-md shadow-rose-500/20">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">CRM Solutions</p>
                    <p className="text-xs text-secondary">20+ hrs saved/week</p>
                  </div>
                </div>
              </div>

              {/* Center stat */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 rounded-full cta-gradient flex flex-col items-center justify-center text-white shadow-2xl shadow-indigo-500/30 pulse-ring">
                  <span className="text-3xl font-extrabold">5x</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-80">Avg. ROI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          {...fadeUp(1.0)}
          className="mt-20 lg:mt-28"
        >
          <div className="divider-accent mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold stat-value">
                  {stat.value}
                </p>
                <p className="text-sm text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
