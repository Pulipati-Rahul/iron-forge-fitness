"use client";

import React from "react";
import { Dumbbell, ShieldCheck, Flame, Scale, Activity, Award, Compass, Heart } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";

export const Programs = () => {
  const programsData = [
    {
      title: "Strength Training",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      badge: "Power & Powerlifing",
      description: "Harness barbell training, Olympic lifting, and heavy hypertrophy to build structural power and maximal force output.",
    },
    {
      title: "Weight Loss & Conditioning",
      icon: Scale,
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
      badge: "Metabolic Reset",
      description: "Elevate your metabolic rate using tailored cardiovascular routines and body re-composition resistance training.",
    },
    {
      title: "Muscle Building",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
      badge: "Pure Hypertrophy",
      description: "Scientific volume-focused isolation and compound schemes structured to maximize muscle density, symmetry, and scale.",
    },
    {
      title: "Functional Fitness",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600&auto=format&fit=crop",
      badge: "Movement Quality",
      description: "Build a body that moves as well as it looks. Focus on multi-planar movements, stability, core power, and endurance.",
    },
    {
      title: "Personal Training",
      icon: Award,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
      badge: "1-on-1 Guidance",
      description: "Work directly with an elite coach. Includes regular body mapping, biometric tracking, custom plans, and posture analysis.",
    },
    {
      title: "CrossFit",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
      badge: "High-Intensity Elite",
      description: "Constantly varied functional movements executed at high intensity. Prepare for any physical obstacle with absolute capacity.",
    },
    {
      title: "HIIT",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=600&auto=format&fit=crop",
      badge: "Cardio Blast",
      description: "Intense intervals paired with minimal recovery slots. Perfect for burning fat, building stamina, and testing lung capacity.",
    },
    {
      title: "Yoga & Mobility",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
      badge: "Mind & Flexibility",
      description: "Realign the skeletal system, lengthen muscle tissues, relieve mental strain, and optimize recovery parameters.",
    },
  ];

  return (
    <section id="programs" className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A] border-y border-charcoal-border">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          goldSubtitle="Our Programs"
          title="Elite Training Disciplines"
          description="Every routine is curated by master coaches and structured using athletic science. Pick a discipline aligned with your performance goals."
        />

        {/* 8 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={idx}
                delay={idx * 0.05}
                className="group relative h-[420px] flex flex-col justify-end p-0 border border-charcoal-border hover:border-gold/30 rounded-2xl overflow-hidden transition-all duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-110 -z-20"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/75 to-transparent -z-10 transition-colors duration-500 group-hover:via-matte-black/85" />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Icon Badge */}
                <div className="absolute top-6 left-6 w-11 h-11 rounded-lg bg-black/60 border border-white/15 flex items-center justify-center text-gold backdrop-blur-md transition-transform duration-500 group-hover:scale-105 group-hover:border-gold/40">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col">
                  {/* Category Badge */}
                  <span className="text-gold text-[10px] font-extrabold uppercase tracking-widest mb-2 text-glow">
                    {item.badge}
                  </span>
                  
                  {/* Program Title */}
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-8 h-[2px] bg-gold mb-3 transition-all duration-300 group-hover:w-16" />

                  {/* Description */}
                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
