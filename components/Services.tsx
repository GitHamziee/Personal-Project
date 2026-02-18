"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";
import {
  Globe,
  BarChart3,
  Bot,
  Target,
  Clock,
  Users,
  Award,
  Zap,
  TrendingUp,
  Shield,
  Code2,
  Database,
  Brain,
  MessageSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

interface ServiceTab {
  id: string;
  label: string;
  icon: LucideIcon;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  stats: Stat[];
  solutions: Solution[];
}

const tabs: ServiceTab[] = [
  {
    id: "web",
    label: "Web Development",
    icon: Globe,
    tagline: "Build your digital presence",
    title: "Web",
    titleHighlight: "Development",
    description:
      "End-to-end web development solutions from responsive landing pages to complex SaaS platforms. We build fast, scalable, and beautiful web experiences using modern frameworks and best practices.",
    stats: [
      {
        icon: Target,
        value: "99.9%",
        label: "Uptime",
        description: "Reliable and performant applications",
      },
      {
        icon: Clock,
        value: "2-6",
        label: "Weeks Delivery",
        description: "Fast turnaround on projects",
      },
      {
        icon: Users,
        value: "50+",
        label: "Projects Shipped",
        description: "Across diverse industries",
      },
      {
        icon: Award,
        value: "100%",
        label: "Responsive",
        description: "Mobile-first design approach",
      },
    ],
    solutions: [
      {
        icon: Code2,
        title: "Full-Stack Web Applications",
        description:
          "Custom web applications built with modern frameworks for maximum performance, scalability, and maintainability.",
        items: [
          "Next.js & React",
          "Node.js & Express",
          "REST & GraphQL APIs",
          "Database Design",
          "Cloud Deployment",
          "CI/CD Pipelines",
        ],
      },
      {
        icon: Globe,
        title: "E-Commerce & Landing Pages",
        description:
          "Conversion-optimized websites and storefronts that turn visitors into customers with stunning design and seamless UX.",
        items: [
          "Shopify & Custom Stores",
          "Payment Integration",
          "SEO Optimization",
          "Performance Tuning",
          "A/B Testing Ready",
          "Analytics Integration",
        ],
      },
    ],
  },
  {
    id: "data",
    label: "Data Analytics",
    icon: BarChart3,
    tagline: "Turn data into decisions",
    title: "Data",
    titleHighlight: "Analytics",
    description:
      "Transform your raw data into actionable business intelligence. We build custom dashboards, data pipelines, and predictive models that give you a competitive edge through data-driven decision making.",
    stats: [
      {
        icon: TrendingUp,
        value: "3x",
        label: "Faster Insights",
        description: "Compared to manual reporting",
      },
      {
        icon: Database,
        value: "10M+",
        label: "Records Processed",
        description: "Daily across client pipelines",
      },
      {
        icon: Shield,
        value: "100%",
        label: "Data Security",
        description: "Enterprise-grade compliance",
      },
      {
        icon: Zap,
        value: "Real-time",
        label: "Dashboards",
        description: "Live monitoring & alerts",
      },
    ],
    solutions: [
      {
        icon: BarChart3,
        title: "Business Intelligence & Dashboards",
        description:
          "Interactive dashboards and reporting tools that give your team real-time visibility into the metrics that matter most.",
        items: [
          "Power BI & Tableau",
          "Custom Dashboards",
          "KPI Tracking",
          "Automated Reports",
          "Data Visualization",
          "Executive Summaries",
        ],
      },
      {
        icon: Database,
        title: "Data Engineering & Pipelines",
        description:
          "Robust data infrastructure that collects, transforms, and delivers clean data to the right systems at the right time.",
        items: [
          "ETL Pipelines",
          "Data Warehousing",
          "Apache Spark & Airflow",
          "Cloud Data Lakes",
          "Data Quality Checks",
          "Schema Management",
        ],
      },
    ],
  },
  {
    id: "ai",
    label: "AI Bots & Automation",
    icon: Bot,
    tagline: "Automate with intelligence",
    title: "AI Bots &",
    titleHighlight: "Automation",
    description:
      "Intelligent chatbots, virtual assistants, and AI-powered automation that handle customer queries, streamline workflows, and deliver personalized experiences around the clock.",
    stats: [
      {
        icon: MessageSquare,
        value: "80%",
        label: "Queries Automated",
        description: "Reducing support workload",
      },
      {
        icon: Clock,
        value: "<2s",
        label: "Response Time",
        description: "Instant AI-powered replies",
      },
      {
        icon: Zap,
        value: "24/7",
        label: "Availability",
        description: "Always-on intelligent support",
      },
      {
        icon: TrendingUp,
        value: "45%",
        label: "More Conversions",
        description: "With AI lead qualification",
      },
    ],
    solutions: [
      {
        icon: Brain,
        title: "Custom AI Chatbots",
        description:
          "Context-aware chatbots powered by the latest LLMs that understand your business and engage customers naturally.",
        items: [
          "GPT & LLM Integration",
          "RAG Pipelines",
          "Multi-language Support",
          "Custom Training Data",
          "Sentiment Analysis",
          "Handoff to Human Agents",
        ],
      },
      {
        icon: Workflow,
        title: "Workflow Automation",
        description:
          "AI-driven automation that eliminates repetitive tasks, routes information intelligently, and keeps your operations running smoothly.",
        items: [
          "Process Automation",
          "Email & Ticket Routing",
          "Document Processing",
          "Lead Scoring & Qualification",
          "CRM Integration",
          "Custom API Workflows",
        ],
      },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("web");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="services" className="pt-16 pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 glass rounded-full p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "gradient-bg text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Tagline + Title + Description */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {current.tagline}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-6">
                {current.title}{" "}
                <span className="gradient-text">{current.titleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
              {current.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TiltCard tiltIntensity={8} className="glass rounded-xl p-6 text-center group hover:border-accent/30 transition-all duration-300 h-full">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors icon-underglow">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-2xl md:text-3xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="text-white font-semibold text-sm mt-1">
                      {stat.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {stat.description}
                    </p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              {current.solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                  className={`glass rounded-2xl overflow-hidden ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  <div
                    className={`grid md:grid-cols-5 gap-0 ${
                      index % 2 !== 0 ? "direction-rtl" : ""
                    }`}
                  >
                    {/* Icon + Title side */}
                    <div
                      className={`md:col-span-2 p-8 md:p-10 flex flex-col items-center justify-center text-center border-b md:border-b-0 border-white/5 ${
                        index % 2 !== 0
                          ? "md:order-2 md:border-l"
                          : "md:border-r"
                      } md:border-white/5`}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 icon-underglow">
                        <solution.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="text-xl font-bold text-white">
                        {solution.title}
                      </h4>
                    </div>

                    {/* Details side */}
                    <div
                      className={`md:col-span-3 p-8 md:p-10 ${
                        index % 2 !== 0 ? "md:order-1" : ""
                      }`}
                    >
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {solution.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {solution.items.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
