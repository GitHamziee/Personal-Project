"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
];

const serviceLinks = [
  { name: "AI Bots Creation", href: "/services" },
  { name: "Web Development", href: "/services" },
  { name: "Data Analytics", href: "/services" },
  { name: "Consulting", href: "/contact" },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/assets/logo.png"
                alt="Data Mentor Labs"
                width={440}
                height={160}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Building the future with AI & technology.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-xs hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-1.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-xs hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Get in Touch</h4>
            <ul className="space-y-1.5 text-gray-400 text-xs">
              <li>hello@datamentorlabs.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Data Mentor Labs. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Vibe Coded with <span className="text-red-400">&hearts;</span> by{" "}
            <a href="https://www.linkedin.com/in/hamziee/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Hamza</a>
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-500 text-xs hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-xs hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
