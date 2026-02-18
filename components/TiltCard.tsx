"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  glareEnabled?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  tiltIntensity = 12,
  glareEnabled = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    setIsTouchDevice(!window.matchMedia("(hover: hover)").matches);
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseXFromCenter = e.clientX - centerX;
    const mouseYFromCenter = e.clientY - centerY;

    const rY = (mouseXFromCenter / (rect.width / 2)) * tiltIntensity;
    const rX = -(mouseYFromCenter / (rect.height / 2)) * tiltIntensity;

    rotateX.set(rX);
    rotateY.set(rY);

    const gX = ((e.clientX - rect.left) / rect.width) * 100;
    const gY = ((e.clientY - rect.top) / rect.height) * 100;
    glareX.set(gX);
    glareY.set(gY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovering(false);
  }

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: "800px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative ${className}`}
      >
        {children}
        {glareEnabled && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
            style={{
              background: useMotionValue(0).get() === 0
                ? "none"
                : undefined,
              opacity: isHovering ? 1 : 0,
            }}
            animate={{
              opacity: isHovering ? 1 : 0,
              background: isHovering
                ? `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
                : "none",
            }}
            transition={{ opacity: { duration: 0.3 } }}
          />
        )}
      </motion.div>
    </div>
  );
}
