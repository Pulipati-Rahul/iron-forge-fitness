"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I schedule a walkthrough or trial session before committing?",
      a: "Yes. We offer private, custom walkthroughs of our luxury chambers led by our member relations staff. Complimentary 1-day trial passes are available for local residents to experience the facility. Simply fill out our contact form or call our front desk.",
    },
    {
      q: "What benefits does the Elite VIP Membership package provide?",
      a: "The Elite tier is our complete performance blueprint. It includes 24/7 VIP keyless entry, weekly 1-on-1 private coaching sessions (60 min), custom nutrition mapping, bi-annual biometric screenings, unlimited cryotherapy & recovery zone access, locker rental with daily laundry, and private lounge privileges.",
    },
    {
      q: "Are training sessions with elite coaches included in Basic or Pro plans?",
      a: "Basic members can purchase custom coaching packages separately. Pro members receive 1 complimentary training session/assessment per month. Elite members have weekly private coaching sessions already integrated into their membership.",
    },
    {
      q: "What is your membership cancellation and pause policy?",
      a: "We believe in transparency. All memberships are billed month-to-month. You can pause or cancel your plan at any point. Simply notify the concierge team in writing at least 5 days prior to your billing date.",
    },
    {
      q: "Is there private parking and locker room storage amenities?",
      a: "Yes. We provide complimentary secure underground parking for all members. Our luxury locker chambers feature private dry saunas, steam rooms, premium Malin+Goetz grooming products, digital lockers, and fresh towel service.",
    },
    {
      q: "Are classes included in all membership tiers?",
      a: "Pro and Elite plans have full, unlimited access to all scheduled group classes (HIIT, Yoga, Strength Conditioning, CrossFit). Basic members can attend classes by purchasing single drop-in passes.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-matte-black border-t border-charcoal-border">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeader
          goldSubtitle="Frequently Asked Queries"
          title="Club FAQs"
          description="Find answers to common questions about membership, coaching, and facilities below. For specialized requests, contact our concierge."
        />

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <GlassCard
                key={idx}
                hoverGlow={!isOpen}
                className={`p-0 border border-charcoal-border bg-charcoal/20 transition-all duration-300 ${
                  isOpen ? "border-gold/30" : "hover:border-gold/20"
                }`}
              >
                {/* FAQ Header toggle bar */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-gold" : "text-gray-500"}`} />
                    <span className="text-white font-bold text-sm md:text-base uppercase tracking-wide">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? "bg-gold border-gold text-black" : "bg-transparent border-charcoal-border text-gray-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* FAQ Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-charcoal-border/50 text-gray-400 text-sm font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
