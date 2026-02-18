"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github } from "lucide-react";
import TiltCard from "./TiltCard";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    experience: "12+ yrs",
    skills: ["Strategy", "AI", "Product", "Leadership"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Priya Patel",
    role: "Sr. AI/ML Engineer",
    experience: "8+ yrs",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "LLMs"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Jordan Lee",
    role: "Lead Full-Stack Developer",
    experience: "9+ yrs",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Maya Santos",
    role: "Sr. Data Scientist",
    experience: "7+ yrs",
    skills: ["Python", "SQL", "Tableau", "Power BI", "Pandas"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Ryan Cooper",
    role: "AI Chatbot Specialist",
    experience: "5+ yrs",
    skills: ["LangChain", "OpenAI", "RAG", "Python", "FastAPI"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sofia Kim",
    role: "Frontend Developer",
    experience: "6+ yrs",
    skills: ["React", "Next.js", "Tailwind CSS", "Figma", "Framer Motion"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Omar Hassan",
    role: "Backend Engineer",
    experience: "7+ yrs",
    skills: ["Node.js", "Python", "AWS", "Docker", "MongoDB"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Elena Volkov",
    role: "Data Engineer",
    experience: "6+ yrs",
    skills: ["Apache Spark", "Airflow", "SQL", "Python", "ETL"],
    linkedin: "#",
    github: "#",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function getGradient(name: string) {
  const gradients = [
    "from-blue-900 to-blue-700",
    "from-blue-800 to-cyan-700",
    "from-blue-800 to-sky-700",
    "from-cyan-800 to-blue-700",
    "from-blue-900 to-indigo-700",
    "from-blue-950 to-blue-800",
    "from-cyan-800 to-blue-700",
    "from-blue-950 to-cyan-700",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-16 pb-32 relative" ref={ref}>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <TiltCard tiltIntensity={10} className="glass rounded-2xl overflow-hidden group glow-hover transition-all duration-300 h-full card-underglow">
                {/* Photo area */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getGradient(
                      member.name
                    )} flex items-center justify-center`}
                  >
                    <span className="text-5xl font-bold text-white/80">
                      {getInitials(member.name)}
                    </span>
                  </div>
                  {/* Hover overlay with social links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent/50 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent/50 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{member.role}</p>

                  <div className="mb-4">
                    <span className="text-sm text-gray-300">
                      {member.experience}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent/80 border border-accent/15"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">
                        +{member.skills.length - 3}
                      </span>
                    )}
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
