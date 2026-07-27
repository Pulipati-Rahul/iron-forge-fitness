"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "style"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  glow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  glow = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium tracking-wide text-sm transition-all duration-300 outline-none cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black font-bold border-none shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.45)]",
    secondary: "bg-charcoal text-white border border-charcoal-border hover:bg-charcoal-light hover:border-gold/40 hover:text-gold",
    outline: "bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-black font-bold",
    ghost: "bg-transparent text-white hover:text-gold hover:bg-white/5",
  };

  const glowStyles = glow ? "after:absolute after:inset-0 after:rounded-full after:bg-gold after:opacity-0 after:blur-md after:transition-opacity after:duration-500 hover:after:opacity-30" : "";

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${glowStyles} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
