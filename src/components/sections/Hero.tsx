"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "../ui/Button";

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-matte-black">
      {/* Immersive Background Image with soft dark radial gradients */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      {/* Premium dark gradient layers */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-matte-black via-matte-black/70 to-matte-black/40" />
      <div className="absolute inset-0 z-10 bg-radial-glow opacity-80" />

      {/* Floating subtle glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Elite tag */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_#D4AF37]" />
          <span className="text-xs uppercase font-bold tracking-widest text-gold text-glow">
            Elite Luxury Training Facility
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-6 leading-[0.95]"
        >
          Forge Your <br />
          <span className="gold-gradient-text text-glow">Strongest</span> Self
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-300 font-light text-base md:text-xl max-w-2xl leading-relaxed mb-12"
        >
          Welcome to Iron Forge Fitness, a premium sanctuary built for athletic progression. Unleash your inner strength with our state-of-the-art facility and world-class expert trainers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Button variant="primary" glow onClick={onJoinClick} className="w-full sm:w-auto">
            Join Club Now
          </Button>
          <a href="#memberships">
            <Button variant="secondary" className="w-full sm:w-auto">
              View Memberships
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Elegant scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
          Scroll to explore
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold via-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};
