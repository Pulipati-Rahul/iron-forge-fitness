"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  goldSubtitle?: string;
  description?: string;
  align?: "center" | "left";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  goldSubtitle,
  description,
  align = "center",
}) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col mb-16 ${alignClass} w-full max-w-3xl mx-auto`}
    >
      {goldSubtitle && (
        <span className="text-gold font-semibold tracking-widest text-xs uppercase mb-3 text-glow">
          {goldSubtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-4">
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mb-6 rounded-full" />
      {description && (
        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
          {description}
        </p>
      )}
    </motion.div>
  );
};
