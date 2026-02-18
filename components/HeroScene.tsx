"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ─── Programming language / tech SVG icons ─── */

function ReactIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="45" ry="18" stroke={color} strokeWidth="2.5" transform="rotate(0 50 50)" />
      <ellipse cx="50" cy="50" rx="45" ry="18" stroke={color} strokeWidth="2.5" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="45" ry="18" stroke={color} strokeWidth="2.5" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="6" fill={color} />
    </svg>
  );
}

function PythonIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 10c-20 0-18.7 8.7-18.7 8.7v9h19v2.7H24.7S10 28.6 10 49.3s12.8 20 12.8 20h7.6V59.6s-.4-12.8 12.6-12.8h21.7s12.2.2 12.2-11.8V19.7S78.7 10 50 10zm-11 5.7a3.8 3.8 0 110 7.6 3.8 3.8 0 010-7.6z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M50 90c20 0 18.7-8.7 18.7-8.7v-9h-19v-2.7h25.6S90 71.4 90 50.7s-12.8-20-12.8-20H69.6v9.7s.4 12.8-12.6 12.8H35.3s-12.2-.2-12.2 11.8v15.3S21.3 90 50 90zm11-5.7a3.8 3.8 0 110-7.6 3.8 3.8 0 010 7.6z"
        fill={color}
        opacity="0.6"
      />
    </svg>
  );
}

function TypeScriptIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="8" y="8" width="84" height="84" rx="8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.08" />
      <text x="50" y="68" textAnchor="middle" fill={color} fontSize="42" fontWeight="bold" fontFamily="Arial, sans-serif">TS</text>
    </svg>
  );
}

function JavaScriptIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="8" y="8" width="84" height="84" rx="8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.08" />
      <text x="50" y="68" textAnchor="middle" fill={color} fontSize="42" fontWeight="bold" fontFamily="Arial, sans-serif">JS</text>
    </svg>
  );
}

function NodeIcon({ size, color }: { size: number; color: string }) {
  // Hexagon shape for Node.js
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <polygon
        points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
        stroke={color}
        strokeWidth="2.5"
        fill={color}
        fillOpacity="0.08"
      />
      <text x="50" y="60" textAnchor="middle" fill={color} fontSize="22" fontWeight="bold" fontFamily="Arial, sans-serif">N</text>
      <text x="50" y="76" textAnchor="middle" fill={color} fontSize="12" fontFamily="Arial, sans-serif">js</text>
    </svg>
  );
}

function NextJsIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.08" />
      <path d="M35 70V30l40 52" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <line x1="68" y1="30" x2="68" y2="58" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function HtmlIcon({ size, color }: { size: number; color: string }) {
  // Shield shape
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M15 12h70l-6.4 72L50 92 21.4 84z"
        stroke={color}
        strokeWidth="2.5"
        fill={color}
        fillOpacity="0.08"
      />
      <text x="50" y="60" textAnchor="middle" fill={color} fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">HTML</text>
    </svg>
  );
}

function CssIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M15 12h70l-6.4 72L50 92 21.4 84z"
        stroke={color}
        strokeWidth="2.5"
        fill={color}
        fillOpacity="0.08"
      />
      <text x="50" y="60" textAnchor="middle" fill={color} fontSize="22" fontWeight="bold" fontFamily="Arial, sans-serif">CSS</text>
    </svg>
  );
}

function DockerIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Whale body */}
      <path
        d="M10 55c0-12 8-22 20-26 2-8 10-14 20-14s18 6 20 14c12 4 20 14 20 26 0 16-14 28-30 28H40c-16 0-30-12-30-28z"
        stroke={color}
        strokeWidth="2"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Container boxes */}
      <rect x="30" y="38" width="8" height="7" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="41" y="38" width="8" height="7" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="52" y="38" width="8" height="7" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="41" y="28" width="8" height="7" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="52" y="28" width="8" height="7" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="63" y="38" width="8" height="7" rx="1" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function GitIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Branch icon */}
      <circle cx="35" cy="25" r="8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.15" />
      <circle cx="65" cy="25" r="8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.15" />
      <circle cx="35" cy="75" r="8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.15" />
      <line x1="35" y1="33" x2="35" y2="67" stroke={color} strokeWidth="2.5" />
      <path d="M65 33c0 20-30 14-30 34" stroke={color} strokeWidth="2.5" fill="none" />
    </svg>
  );
}

function GoIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="8" y="20" width="84" height="60" rx="12" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.08" />
      <text x="50" y="62" textAnchor="middle" fill={color} fontSize="34" fontWeight="bold" fontFamily="Arial, sans-serif">Go</text>
    </svg>
  );
}

function TailwindIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 25c-13.3 0-21.7 6.7-25 20 5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.8 9.5 6.9C56.8 49.5 62.3 55 75 55c13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-1-6.5-3.8-9.5-6.9C68.2 30.5 62.7 25 50 25z"
        stroke={color}
        strokeWidth="2"
        fill={color}
        fillOpacity="0.15"
      />
      <path
        d="M25 55c-13.3 0-21.7 6.7-25 20 5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.8 9.5 6.9C31.8 79.5 37.3 85 50 85c13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-1-6.5-3.8-9.5-6.9C43.2 60.5 37.7 55 25 55z"
        stroke={color}
        strokeWidth="2"
        fill={color}
        fillOpacity="0.15"
      />
    </svg>
  );
}

/* ─── Shape config ─── */

type IconType = "react" | "python" | "typescript" | "javascript" | "node" | "nextjs" | "html" | "css" | "docker" | "git" | "go" | "tailwind";

interface ShapeConfig {
  type: IconType;
  size: number;
  top: string;
  left: string;
  depth: number;
  duration: number;
  delay: number;
  color: string;
}

const shapes: ShapeConfig[] = [
  // Top area
  { type: "react", size: 48, top: "5%", left: "65%", depth: 35, duration: 22, delay: 0, color: "rgba(29, 78, 216, 0.5)" },
  { type: "python", size: 42, top: "8%", left: "82%", depth: 25, duration: 28, delay: 2, color: "rgba(14, 116, 144, 0.5)" },
  { type: "typescript", size: 36, top: "3%", left: "48%", depth: 15, duration: 30, delay: 1, color: "rgba(29, 78, 216, 0.45)" },
  { type: "docker", size: 40, top: "12%", left: "20%", depth: 20, duration: 24, delay: 3, color: "rgba(14, 116, 144, 0.4)" },
  { type: "go", size: 34, top: "6%", left: "90%", depth: 18, duration: 26, delay: 4, color: "rgba(29, 78, 216, 0.4)" },

  // Upper-middle area
  { type: "nextjs", size: 42, top: "22%", left: "85%", depth: 22, duration: 26, delay: 1, color: "rgba(29, 78, 216, 0.45)" },
  { type: "javascript", size: 34, top: "28%", left: "60%", depth: 28, duration: 20, delay: 2, color: "rgba(14, 116, 144, 0.5)" },
  { type: "git", size: 40, top: "18%", left: "72%", depth: 12, duration: 32, delay: 0, color: "rgba(29, 78, 216, 0.4)" },
  { type: "tailwind", size: 36, top: "32%", left: "78%", depth: 30, duration: 22, delay: 5, color: "rgba(14, 116, 144, 0.45)" },

  // Left side (fewer, subtler)
  { type: "html", size: 30, top: "15%", left: "8%", depth: 10, duration: 28, delay: 3, color: "rgba(29, 78, 216, 0.35)" },
  { type: "css", size: 30, top: "40%", left: "5%", depth: 12, duration: 30, delay: 1, color: "rgba(14, 116, 144, 0.35)" },
  { type: "node", size: 34, top: "55%", left: "12%", depth: 8, duration: 34, delay: 2, color: "rgba(29, 78, 216, 0.35)" },

  // Center-right
  { type: "react", size: 30, top: "45%", left: "68%", depth: 20, duration: 24, delay: 3, color: "rgba(14, 116, 144, 0.45)" },
  { type: "python", size: 36, top: "38%", left: "88%", depth: 18, duration: 30, delay: 0, color: "rgba(29, 78, 216, 0.4)" },
  { type: "typescript", size: 28, top: "50%", left: "55%", depth: 25, duration: 20, delay: 2, color: "rgba(14, 116, 144, 0.4)" },

  // Lower area
  { type: "javascript", size: 34, top: "62%", left: "75%", depth: 22, duration: 26, delay: 1, color: "rgba(29, 78, 216, 0.45)" },
  { type: "docker", size: 30, top: "70%", left: "85%", depth: 30, duration: 22, delay: 3, color: "rgba(14, 116, 144, 0.4)" },
  { type: "nextjs", size: 36, top: "65%", left: "55%", depth: 20, duration: 28, delay: 0, color: "rgba(29, 78, 216, 0.4)" },
  { type: "git", size: 30, top: "72%", left: "65%", depth: 15, duration: 28, delay: 4, color: "rgba(14, 116, 144, 0.45)" },

  // Bottom
  { type: "go", size: 34, top: "82%", left: "72%", depth: 25, duration: 22, delay: 4, color: "rgba(29, 78, 216, 0.4)" },
  { type: "tailwind", size: 36, top: "85%", left: "88%", depth: 18, duration: 26, delay: 1, color: "rgba(14, 116, 144, 0.45)" },
  { type: "html", size: 28, top: "88%", left: "60%", depth: 15, duration: 30, delay: 0, color: "rgba(29, 78, 216, 0.35)" },
  { type: "node", size: 30, top: "78%", left: "45%", depth: 20, duration: 28, delay: 2, color: "rgba(14, 116, 144, 0.4)" },
];

const iconComponents: Record<IconType, React.FC<{ size: number; color: string }>> = {
  react: ReactIcon,
  python: PythonIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  node: NodeIcon,
  nextjs: NextJsIcon,
  html: HtmlIcon,
  css: CssIcon,
  docker: DockerIcon,
  git: GitIcon,
  go: GoIcon,
  tailwind: TailwindIcon,
};

export default function HeroScene() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setDims({ w: window.innerWidth, h: window.innerHeight });
    function handleMouse(e: MouseEvent) {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    }
    function handleResize() {
      setDims({ w: window.innerWidth, h: window.innerHeight });
    }
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  // Cursor spotlight
  const spotlightX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const spotX = useTransform(spotlightX, (v) => v + dims.w / 2 - 200);
  const spotY = useTransform(spotlightY, (v) => v + dims.h / 2 - 200);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ perspective: "1200px" }}>
      {/* Cursor spotlight */}
      <motion.div
        className="cursor-glow absolute w-[500px] h-[500px] rounded-full"
        style={{
          x: spotX,
          y: spotY,
          background: "radial-gradient(circle, rgba(29, 78, 216, 0.18) 0%, transparent 70%)",
        }}
      />

      {/* Floating tech icons */}
      {shapes.map((shape, i) => (
        <FloatingIcon key={i} config={shape} mouseX={mouseX} mouseY={mouseY} />
      ))}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function FloatingIcon({
  config,
  mouseX,
  mouseY,
}: {
  config: ShapeConfig;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const factor = config.depth / 800;
  const x = useSpring(useTransform(mouseX, (v) => v * factor), { stiffness: 50, damping: 30 });
  const y = useSpring(useTransform(mouseY, (v) => v * factor), { stiffness: 50, damping: 30 });

  const IconComponent = iconComponents[config.type];

  return (
    <motion.div
      className="absolute"
      style={{
        top: config.top,
        left: config.left,
        x,
        y,
      }}
    >
      <div
        className="hero-shape"
        style={{
          animation: `float ${config.duration * 0.4}s ease-in-out infinite`,
          animationDelay: `${config.delay}s`,
        }}
      >
        <IconComponent size={config.size} color={config.color} />
      </div>
    </motion.div>
  );
}
