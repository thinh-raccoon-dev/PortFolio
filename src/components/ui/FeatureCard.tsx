"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const CARD_EASE = [0.22, 1, 0.36, 1] as const;

interface FeatureCardProps {
  index: number;
  children: ReactNode;
  className?: string;
}

export default function FeatureCard({
  index,
  children,
  className = "",
}: FeatureCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden ${className}`}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: CARD_EASE }}
    >
      {children}
    </motion.div>
  );
}
