"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Eye,
  Award,
  Zap,
  MessageSquare,
  Lightbulb,
  ShieldCheck,
  Users,
  BarChart3,
  Bot,
  Globe,
  Clock,
  ArrowRight,
  Linkedin,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We deliver results that exceed expectations.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "We move fast, with no compromising quality.",
  },
  {
    icon: MessageSquare,
    title: "Transparency",
    description:
      "Clear communication is our default.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We evolve with technology and create value.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "We own the outcomes — always.",
  },
];

const stats = [
  {
    icon: Globe,
    value: "50+",
    label: "Projects Delivered",
    sublabel: "Across industries",
  },
  {
    icon: Users,
    value: "30+",
    label: "Happy Clients",
    sublabel: "Trusted partnerships",
  },
  {
    icon: Bot,
    value: "20+",
    label: "AI Bots Deployed",
    sublabel: "Automating businesses",
  },
  {
    icon: Clock,
    value: "3+",
    label: "Years Experience",
    sublabel: "Industry expertise",
  },
];

const team = [
  { name: "Alex Morgan", role: "Founder & CEO", initials: "AM" },
  { name: "Priya Patel", role: "Sr. AI/ML Engineer", initials: "PP" },
  { name: "Jordan Lee", role: "Lead Full-Stack Dev", initials: "JL" },
  { name: "Maya Santos", role: "Sr. Data Scientist", initials: "MS" },
  { name: "Ryan Cooper", role: "AI Chatbot Specialist", initials: "RC" },
  { name: "Sofia Kim", role: "Frontend Developer", initials: "SK" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-16 pb-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Hero Intro ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            Building <span className="gradient-text">Solutions</span> & Driving{" "}
            <span className="gradient-text">Innovation</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We&apos;re NexGen Solutions — a technology agency specializing in AI
            bots, web development, and data analytics, trusted by growing
            businesses worldwide.
          </p>
        </motion.div>

        {/* ---- Our Journey ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-24"
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              Founded with a mission to make powerful technology accessible to
              businesses of all sizes, NexGen Solutions began as a small web
              development studio. As the world evolved, so did we — expanding
              into cutting-edge AI solutions and data analytics, serving
              companies building the future of their industries. Today we combine
              deep technical expertise with a genuine passion for solving
              problems, helping our clients automate, grow, and compete in an
              increasingly digital world.
            </p>
          </div>
        </motion.div>

        {/* ---- Purpose & Principles — Mission / Vision ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-24"
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-3">
            Our <span className="gradient-text">Purpose</span> &{" "}
            <span className="gradient-text">Principles</span>
          </h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-10">
            Driven by purpose, guided by principles — we empower businesses
            through technology and innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="glass rounded-2xl p-8 text-center group hover:border-accent/20 transition-all card-underglow">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors icon-underglow">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses by delivering intelligent AI solutions,
                high-quality web experiences, and actionable data insights —
                making advanced technology accessible and impactful for
                everyone.
              </p>
            </div>

            {/* Vision */}
            <div className="glass rounded-2xl p-8 text-center group hover:border-accent/20 transition-all card-underglow">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors icon-underglow">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the go-to technology partner for forward-thinking
                businesses — known for innovation, reliability, and results that
                drive real growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ---- Core Values ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-24"
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-3">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-10">
            The principles that guide every decision and drive our commitment to
            excellence.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="glass rounded-xl p-5 text-center group hover:border-accent/20 transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors icon-underglow">
                  <v.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  {v.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---- Impact in Numbers ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-24"
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-3">
            Our <span className="gradient-text">Impact</span> in Numbers
          </h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-10">
            Real results that speak for themselves.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:border-accent/20 transition-all card-underglow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors icon-underglow">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white font-semibold text-sm">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---- Meet Our Leadership ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-24"
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-10">
            Meet Our <span className="gradient-text">Leadership</span>
          </h2>

          <div className="glass rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Founder spotlight */}
              <div>
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-800 to-cyan-700 flex items-center justify-center mb-5 avatar-underglow">
                  <span className="text-4xl font-bold text-white/80">AM</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Alex Morgan</h3>
                <p className="text-accent font-semibold text-sm mb-1">
                  Founder & CEO
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  12+ Years of Experience in Technology & Leadership
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  With over a decade of experience in AI, software engineering,
                  and business strategy, Alex founded NexGen Solutions to bridge
                  the gap between cutting-edge technology and real business
                  needs.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-semibold"
                >
                  <Linkedin className="w-4 h-4" />
                  View LinkedIn Profile
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Team grid */}
              <div>
                <h4 className="text-white font-semibold mb-5">
                  Our Amazing Team
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {team.map((member) => (
                    <div
                      key={member.name}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center mb-2 avatar-underglow">
                        <span className="text-sm font-bold text-white/80">
                          {member.initials}
                        </span>
                      </div>
                      <p className="text-white text-xs font-semibold leading-tight">
                        {member.name}
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/team"
                  className="mt-5 inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-semibold"
                >
                  View full team
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ---- CTA ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Work with a team that truly{" "}
              <span className="gradient-text">cares</span>
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Let&apos;s talk about how we can help your business grow with AI,
              web, and data solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="gradient-bg text-white px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity glow btn-underglow"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="glass glass-hover text-white px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all btn-underglow-secondary"
              >
                Contact Us Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
