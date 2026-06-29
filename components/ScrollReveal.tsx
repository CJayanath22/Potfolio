// components/ScrollReveal.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// 1. Props වලට නීති දැමීම
interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

// 2. Component එක නිර්මාණය
export default function ScrollReveal({
  children,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3}}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
