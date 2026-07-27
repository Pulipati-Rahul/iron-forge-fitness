"use client";

import React, { useState, useRef } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";

export const SuccessStories = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const testimonials = [
    {
      name: "Alexander Vance",
      plan: "Elite Member",
      target: "Gained 15 lbs of Muscle",
      rating: 5,
      quote: "Iron Forge is in a league of its own. The personal trainers don't just count reps; they analyze biometrics, adjust nutritional targets, and keep you accountable. The environment itself makes you want to work harder.",
      beforeImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop", // beginning
      afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop", // after hypertrophy
    },
    {
      name: "Clara Croft",
      plan: "Pro Member",
      target: "Lost 25 lbs & Increased Mobility",
      rating: 5,
      quote: "The class schedules are perfectly planned. I'm a full-time corporate executive, and the 6:00 AM HIIT and yoga sessions completely reset my energy levels. Highly clean, quiet, and premium facilities.",
      beforeImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop", // yoga start
      afterImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop", // elite training
    },
    {
      name: "Marcus Brody",
      plan: "Pro Member",
      target: "Lost 45 lbs & Revitalized Health",
      rating: 5,
      quote: "As a former collegiate athlete, my fitness had slipped over the years. The coaches at Iron Forge helped me restructure my GPP (General Physical Preparedness) and cardio metrics. Down 45 lbs, and I feel better than I did in my twenties.",
      beforeImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Sophia Loren",
      plan: "Elite Member",
      target: "Gained Strength & Corrected Posture",
      rating: 5,
      quote: "The custom biometrics tracking and 1-on-1 private coaching completely turned my posture and core stability around. I had chronic lower back pain from sitting at my office desk, but the mobility and strength sessions cleared it up entirely.",
      beforeImage: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=600&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Jason Statham",
      plan: "Elite Member",
      target: "Prepped for Strength Endurance",
      rating: 5,
      quote: "I joined the Forge to increase raw power while training for endurance events. The strength coaching here is world-class. My squat and deadlift capacity skyrocketed while maintaining a sub-3 hour marathon pace.",
      beforeImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Diana Prince",
      plan: "Pro Member",
      target: "Re-composition & Powerlifting PRs",
      rating: 5,
      quote: "The energy on the platforms here is contagious. I swapped generic cardio machines for high-intensity lifting programs. Built 8 lbs of clean muscle, dropped body fat, and hit a 275 lb squat personal record!",
      beforeImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=600&auto=format&fit=crop",
    }
  ];

  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const nextStory = () => {
    setActiveStoryIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevStory = () => {
    setActiveStoryIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentStory = testimonials[activeStoryIdx];

  return (
    <section id="stories" className="relative py-24 md:py-32 overflow-hidden bg-matte-black">
      {/* Decorative glows */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          goldSubtitle="Transformations"
          title="Success Stories"
          description="True results speak louder than empty promises. Drag the slider to witness real physical transformations achieved by our dedicated members."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Before/After Reveal Slider */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-square max-w-[480px] rounded-2xl overflow-hidden border border-charcoal-border cursor-ew-resize shadow-2xl select-none"
            >
              {/* After State (Full Image at Bottom) */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentStory.afterImage})` }}
              />
              <div className="absolute top-4 right-4 bg-gold/90 text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-md z-20">
                After Transformation
              </div>

              {/* Before State (Cropped Image on Top) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-75"
                style={{ 
                  backgroundImage: `url(${currentStory.beforeImage})`,
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              />
              <div className="absolute top-4 left-4 bg-black/60 text-white border border-white/10 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-md z-20">
                Before Start
              </div>

              {/* Drag Handle separator line */}
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-gold z-30 shadow-[0_0_10px_rgba(212,175,55,0.7)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold border-2 border-black flex items-center justify-center text-black pointer-events-none shadow-md">
                  <ArrowLeft className="w-3 h-3 inline mr-[1px]" />
                  <ArrowRight className="w-3 h-3 inline ml-[1px]" />
                </div>
              </div>
            </div>

            {/* Slider hint */}
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mt-4">
              Hover & Drag cursor across card to reveal
            </span>
          </div>

          {/* Right Column: Quotes & Navigator details */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStoryIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard goldAccent className="p-8 border border-gold/20 flex flex-col gap-6 relative">
                  <Quote className="absolute top-6 right-6 w-16 h-16 text-gold/5 pointer-events-none" />
                  
                  {/* Star Ratings */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentStory.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-gray-300 font-light text-base leading-relaxed italic">
                    "{currentStory.quote}"
                  </p>

                  <div className="h-[1px] bg-charcoal-border/70" />

                  {/* Profile info */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-black uppercase text-sm tracking-wide">
                        {currentStory.name}
                      </h4>
                      <p className="text-gold text-xs font-semibold uppercase mt-0.5 tracking-wider">
                        {currentStory.plan}
                      </p>
                    </div>
                    <span className="text-white bg-charcoal border border-charcoal-border text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
                      {currentStory.target}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* Pagination controls */}
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={prevStory}
                className="w-11 h-11 rounded-full bg-charcoal border border-charcoal-border hover:border-gold hover:text-gold text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextStory}
                className="w-11 h-11 rounded-full bg-charcoal border border-charcoal-border hover:border-gold hover:text-gold text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest ml-2">
                Story {activeStoryIdx + 1} of {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
