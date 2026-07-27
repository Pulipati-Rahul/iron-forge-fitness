"use client";

import React from "react";
import { ShieldCheck, Award, Target, Trophy } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";
import { motion } from "framer-motion";

export const About = () => {
  const stats = [
    { value: "15+", label: "Years of Elite Excellence" },
    { value: "35+", label: "Certified Luxury Coaches" },
    { value: "120+", label: "Weekly Speciality Classes" },
    { value: "6,500+", label: "Transformed Athletes" },
  ];

  const values = [
    {
      icon: Award,
      title: "Premium Caliber",
      description: "We supply only top-tier equipment (Eleiko, Hammer Strength, Keiser) in an impeccably curated fitness environment.",
    },
    {
      icon: Target,
      title: "Precision Coaching",
      description: "Our trainers hold international accreditations and specialize in customized athletic training and longevity biology.",
    },
    {
      icon: Trophy,
      title: "Elite Legacy",
      description: "Our club fosters a community of highly driven individuals pushing past boundaries to forge high-performance lifestyles.",
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-matte-black">
      {/* Decorative radial glows */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          goldSubtitle="Our Heritage"
          title="Forged for Elite Performance"
          description="Iron Forge Fitness was founded in 2012 with a single, uncompromising vision: to elevate fitness training to an art form, pairing scientific discipline with a premium luxury environment."
        />

        {/* Asymmetric Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Side: Story & Values */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                Our Story & Mission
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                At Iron Forge, we believe that physical strength is the bedrock of mental and character fortitude. We have replaced the cluttered, noisy atmosphere of standard commercial gyms with a clean, luxury athletic sanctuary that inspires focus, respect, and hard work.
              </p>
              <p className="text-gray-400 font-light leading-relaxed">
                Whether your goal is bodybuilding, functional athleticism, or life-long mobility, we offer an environment customized to speed your progression and support your journey.
              </p>
            </motion.div>

            {/* Core Values Rows */}
            <div className="flex flex-col gap-6 mt-4">
              {values.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-charcoal border border-charcoal-border flex items-center justify-center text-gold shadow-md shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base uppercase tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Stats Panel & Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent rounded-2xl blur-3xl -z-10" />
            <GlassCard goldAccent className="p-8 flex flex-col gap-8">
              <div className="flex items-center gap-3 border-b border-charcoal-border pb-4">
                <ShieldCheck className="w-6 h-6 text-gold" />
                <span className="text-white font-bold uppercase tracking-wider text-sm">
                  Iron Forge Credentials
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black text-white gold-gradient-text">
                      {stat.value}
                    </span>
                    <span className="text-gray-400 text-xs font-medium uppercase mt-1 tracking-wider leading-relaxed">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Inset Photo Overlay for Premium Feeling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-8 rounded-2xl overflow-hidden border border-charcoal-border aspect-video relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop"
                alt="Gym Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
              <div className="absolute bottom-4 left-6">
                <p className="text-white font-bold text-xs uppercase tracking-widest">
                  Iron Forge Main Hall
                </p>
                <p className="text-gold text-[10px] uppercase font-light">
                  Precor & Eleiko Platforms
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
