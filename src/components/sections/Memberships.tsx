"use client";

import React from "react";
import { Check, ShieldAlert, Sparkles } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

interface MembershipsProps {
  onPlanSelect: (planName: string) => void;
}

export const Memberships: React.FC<MembershipsProps> = ({ onPlanSelect }) => {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "month",
      tagline: "For consistent progress",
      features: [
        "Access to main gym floor & free weights",
        "Eleiko & Precor platforms access",
        "Locker rooms & luxury showers",
        "Standard equipment induction session",
        "Complimentary high-speed Wi-Fi",
      ],
      isPopular: false,
      buttonVariant: "secondary" as const,
    },
    {
      name: "Pro",
      price: "$89",
      period: "month",
      tagline: "For serious training & variety",
      features: [
        "Everything in Basic",
        "Unlimited group classes (HIIT, Yoga, Strength)",
        "1 session/month with Elite Coach",
        "Sauna & Steam room access (Recovery Zone)",
        "10% discount on in-club nutrition & gear",
      ],
      isPopular: false,
      buttonVariant: "secondary" as const,
    },
    {
      name: "Elite",
      price: "$149",
      period: "month",
      tagline: "Uncompromised peak performance",
      features: [
        "Everything in Pro",
        "24/7 VIP keyless entry",
        "Weekly 1-on-1 private coaching (1hr)",
        "Custom nutritional mapping & quarterly biometrics",
        "Unlimited Recovery Zone & Cryotherapy access",
        "Private VIP Lounge & Smoothie Bar access",
        "Complimentary gym apparel laundry & locker storage",
      ],
      isPopular: true,
      buttonVariant: "primary" as const,
    },
  ];

  return (
    <section id="memberships" className="relative py-24 md:py-32 overflow-hidden bg-matte-black">
      {/* Decorative radial glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          goldSubtitle="Memberships"
          title="Choose Your Caliber"
          description="Iron Forge Fitness offers exclusive tiers tailored to your training dedication. No long-term lock-in contracts. Switch or pause anytime."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            return (
              <GlassCard
                key={idx}
                delay={idx * 0.1}
                goldAccent={plan.isPopular}
                hoverGlow
                className={`relative flex flex-col justify-between p-8 border h-full transition-all duration-500 ${
                  plan.isPopular
                    ? "border-gold/30 bg-[#121212]/90 shadow-[0_10px_40px_rgba(212,175,55,0.08)] scale-[1.02] lg:scale-[1.04]"
                    : "border-charcoal-border bg-charcoal/40"
                }`}
              >
                {/* Popular Tag Ribbon */}
                {plan.isPopular && (
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold text-gold text-[10px] font-black uppercase tracking-widest text-glow animate-pulse">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <span className={`text-xs uppercase font-extrabold tracking-widest ${
                    plan.isPopular ? "text-gold text-glow" : "text-gray-400"
                  }`}>
                    {plan.name} Tier
                  </span>
                  
                  {/* Price */}
                  <div className="flex items-baseline mt-4 mb-2">
                    <span className="text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm font-light ml-2">/ {plan.period}</span>
                  </div>
                  
                  {/* Tagline */}
                  <p className="text-gray-400 text-sm font-light mb-8 italic">
                    {plan.tagline}
                  </p>
                  
                  {/* Divider */}
                  <div className="h-[1px] bg-charcoal-border mb-8" />
                  
                  {/* Features List */}
                  <ul className="flex flex-col gap-4 mb-10">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm font-light leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.buttonVariant}
                  glow={plan.isPopular}
                  onClick={() => onPlanSelect(plan.name)}
                  className="w-full py-4 text-sm uppercase tracking-wider font-extrabold"
                >
                  Acquire {plan.name} Pass
                </Button>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
