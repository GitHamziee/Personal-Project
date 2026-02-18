"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
  blur?: boolean;
}

export default function TextReveal({
  children,
  as: Tag = "span",
  className = "",
  staggerDelay = 0.04,
  baseDelay = 0,
  blur = false,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = children.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden"
        >
          <motion.span
            className="inline-block"
            initial={{
              y: "110%",
              opacity: 0,
              filter: blur ? "blur(8px)" : "blur(0px)",
              scale: blur ? 0.9 : 1,
            }}
            animate={
              isInView
                ? {
                    y: "0%",
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: blur ? 0.7 : 0.5,
              delay: baseDelay + i * staggerDelay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
