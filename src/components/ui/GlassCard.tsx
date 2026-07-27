"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  goldAccent?: boolean;
  hoverGlow?: boolean;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  goldAccent = false,
  hoverGlow = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={hoverGlow ? { y: -6 } : {}}
      className={`
        ${goldAccent ? "glass-panel-gold" : "glass-panel"} 
        ${hoverGlow ? "gold-glow-hover" : ""} 
        rounded-2xl overflow-hidden p-6 transition-all duration-300 ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
