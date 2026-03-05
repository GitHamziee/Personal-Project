"use client";

import Link from "next/link";
import { Linkedin, Twitter, Instagram, ArrowRight, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "SEO", href: "/services/seo" },
  { name: "Cold Calling", href: "/services/cold-calling" },
  { name: "Lead Generation", href: "/services/lead-generation" },
  { name: "CRM Solutions", href: "/services/crm-solutions" },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient band at top */}
      <div className="gradient-band" />

      {/* Dark section */}
      <div className="section-dark relative">
        <div className="absolute inset-0 dot-pattern-dark opacity-30" />
        <div className="blob blob-accent w-[400px] h-[400px] bottom-[-200px] right-[-100px] opacity-20" />

        {/* CTA Strip */}
        <div className="relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Ready to grow your business?
                </h3>
                <p className="text-indigo-300/80 text-sm">
                  Book a free strategy call and see results in weeks, not months.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-white text-accent hover:bg-indigo-50 px-7 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all text-sm shadow-lg shadow-black/10 hover:-translate-y-0.5 shrink-0"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="text-xl font-extrabold text-white inline-block mb-4">
                Nexa<span className="text-accent-light">Flow</span>
              </Link>
              <p className="text-indigo-200/60 text-sm leading-relaxed mb-5">
                Results-driven digital agency helping businesses grow through web development, SEO, and lead generation.
              </p>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-300/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-indigo-200/60 text-sm hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-accent-light transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Services</h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-indigo-200/60 text-sm hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-accent-light transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Get in Touch</h4>
              <ul className="space-y-3 text-indigo-200/60 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-light/50" />
                  hello@nexaflow.com
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-light/50" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-light/50" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-indigo-200/40 text-xs inline-flex items-center gap-1">
              &copy; {new Date().getFullYear()} NexaFlow. Made with <Heart className="w-3 h-3 text-rose-400/60 fill-rose-400/60" /> All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-indigo-200/40 text-xs hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-indigo-200/40 text-xs hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
