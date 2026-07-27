"use client";

import React from "react";
import { Award, ShieldAlert, Sparkles, Mail } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Trainers = () => {
  const trainersData = [
    {
      name: "Marcus Vance",
      role: "Head of Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop",
      experience: "12 Years",
      specialization: "Olympic Weightlifting, Hypertrophy & Power",
      certifications: ["CSCS", "USAW L2", "Precision Nutrition L1"],
      socials: { instagram: "#", linkedin: "#", email: "marcus@ironforge.com" },
    },
    {
      name: "Sarah Jenkins",
      role: "Elite Athletic Performance Coach",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop",
      experience: "8 Years",
      specialization: "CrossFit, HIIT, High-Capacity Conditioning",
      certifications: ["NASM-PES", "CF-L2", "ISSA-CFT"],
      socials: { instagram: "#", linkedin: "#", email: "sarah@ironforge.com" },
    },
    {
      name: "Elena Rostova",
      role: "Director of Yoga & Mobility",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=400&auto=format&fit=crop",
      experience: "10 Years",
      specialization: "Vinyasa Yoga, FRC Mobility & Joint Health",
      certifications: ["RYT-500 Yoga", "FRCms Specialist", "CES"],
      socials: { instagram: "#", linkedin: "#", email: "elena@ironforge.com" },
    },
    {
      name: "Derrick Cole",
      role: "Master Hypertrophy Coach",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop",
      experience: "9 Years",
      specialization: "Body Re-composition, Contest Prep, Strength",
      certifications: ["ISSA-CFT", "NASM-CES", "Fitness Nutrition Specialist"],
      socials: { instagram: "#", linkedin: "#", email: "derrick@ironforge.com" },
    },
  ];

  return (
    <section id="trainers" className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A] border-y border-charcoal-border">
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          goldSubtitle="Elite Coaches"
          title="Meet the Masters"
          description="Our trainers are certified specialists and industry veterans who practice what they preach. They design scientific, data-backed blueprints to fast-track your success."
        />

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersData.map((trainer, idx) => (
            <GlassCard
              key={idx}
              delay={idx * 0.08}
              className="p-0 border border-charcoal-border hover:border-gold/30 rounded-2xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Image & Overlay container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Image Gradient Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-black/60 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <Award className="w-3.5 h-3.5 text-gold" />
                  <span className="text-[10px] text-white font-extrabold uppercase tracking-widest">
                    {trainer.experience} Exp
                  </span>
                </div>
              </div>

              {/* Trainer Details Info */}
              <div className="p-6 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-gold transition-colors duration-300">
                    {trainer.name}
                  </h3>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4 text-glow">
                    {trainer.role}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trainer.certifications.map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[9px] font-bold text-gray-300 bg-charcoal border border-charcoal-border rounded px-2 py-0.5 uppercase"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                    <strong className="text-gray-300 font-medium">Specializes in:</strong> {trainer.specialization}
                  </p>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-4 pt-4 border-t border-charcoal-border/50">
                  <a href={trainer.socials.instagram} className="text-gray-500 hover:text-gold transition-colors">
                    <InstagramIcon />
                  </a>
                  <a href={trainer.socials.linkedin} className="text-gray-500 hover:text-gold transition-colors">
                    <LinkedinIcon />
                  </a>
                  <a href={`mailto:${trainer.socials.email}`} className="text-gray-500 hover:text-gold transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
