"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    initials: "AM",
    bio: "Visionary leader with 10+ years in AI and technology.",
  },
  {
    name: "Priya Patel",
    role: "Head of AI",
    initials: "PP",
    bio: "AI/ML expert with a passion for building intelligent systems.",
  },
  {
    name: "Jordan Lee",
    role: "Lead Developer",
    initials: "JL",
    bio: "Full-stack engineer specializing in scalable web architectures.",
  },
  {
    name: "Maya Santos",
    role: "Data Scientist",
    initials: "MS",
    bio: "Turning complex data into actionable business insights.",
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Meet the <span className="gradient-text">minds behind the magic</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A talented team of engineers, designers, and strategists dedicated to
            delivering excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-2xl p-6 text-center group glow-hover transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto rounded-full gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
