"use client";

import React, { useState, useEffect } from "react";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Activity, Info } from "lucide-react";

export const BmiCalculator = () => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  
  // Metric States
  const [weightKg, setWeightKg] = useState(75);
  const [heightCm, setHeightCm] = useState(175);

  // Imperial States
  const [weightLbs, setWeightLbs] = useState(165);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(9); // total 5'9"

  const [bmi, setBmi] = useState(24.5);
  const [category, setCategory] = useState("Normal");
  const [colorClass, setColorClass] = useState("text-green-400");
  const [progressPercent, setProgressPercent] = useState(50); // for dial visual representation

  // Calculate BMI on state change
  useEffect(() => {
    let computedBmi = 0;
    if (unit === "metric") {
      const heightInMeters = heightCm / 100;
      if (heightInMeters > 0) {
        computedBmi = weightKg / (heightInMeters * heightInMeters);
      }
    } else {
      const totalInches = (heightFt * 12) + heightIn;
      if (totalInches > 0) {
        computedBmi = (weightLbs / (totalInches * totalInches)) * 703;
      }
    }

    const roundedBmi = parseFloat(computedBmi.toFixed(1));
    setBmi(isNaN(roundedBmi) || !isFinite(roundedBmi) ? 0 : roundedBmi);

    // Determine category
    if (roundedBmi < 18.5) {
      setCategory("Underweight");
      setColorClass("text-blue-400");
      // Map BMI [10 to 18.5] to progress [0% to 25%]
      const pct = Math.max(0, Math.min(25, ((roundedBmi - 10) / 8.5) * 25));
      setProgressPercent(pct);
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      setCategory("Normal");
      setColorClass("text-gold");
      // Map BMI [18.5 to 25] to progress [25% to 50%]
      const pct = 25 + ((roundedBmi - 18.5) / 6.5) * 25;
      setProgressPercent(pct);
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      setCategory("Overweight");
      setColorClass("text-orange-400");
      // Map BMI [25 to 30] to progress [50% to 75%]
      const pct = 50 + ((roundedBmi - 25) / 5) * 25;
      setProgressPercent(pct);
    } else {
      setCategory("Obese");
      setColorClass("text-red-500");
      // Map BMI [30 to 45] to progress [75% to 100%]
      const pct = 75 + Math.min(25, ((roundedBmi - 30) / 15) * 25);
      setProgressPercent(pct);
    }
  }, [unit, weightKg, heightCm, weightLbs, heightFt, heightIn]);

  return (
    <section id="bmi" className="relative py-24 md:py-32 overflow-hidden bg-matte-black">
      {/* Decorative radial glows */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          goldSubtitle="Biometrics"
          title="Interactive BMI Calculator"
          description="Evaluate your Body Mass Index (BMI) instantly. While not a measure of absolute body fat percentage, it is a helpful reference tool to kickstart your physical mapping."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Panel: Sliders & Controls */}
          <GlassCard className="lg:col-span-7 p-8 flex flex-col gap-8 border border-charcoal-border">
            {/* Unit Toggle buttons */}
            <div className="flex gap-4 border-b border-charcoal-border pb-6">
              <button
                onClick={() => setUnit("metric")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  unit === "metric"
                    ? "bg-gold text-black border-gold shadow-md"
                    : "bg-transparent text-gray-400 border-charcoal-border hover:border-gold/30"
                }`}
              >
                Metric (cm / kg)
              </button>
              <button
                onClick={() => setUnit("imperial")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  unit === "imperial"
                    ? "bg-gold text-black border-gold shadow-md"
                    : "bg-transparent text-gray-400 border-charcoal-border hover:border-gold/30"
                }`}
              >
                Imperial (ft / lbs)
              </button>
            </div>

            {/* Sliders Area */}
            <div className="flex flex-col gap-8">
              {/* HEIGHT INPUTS */}
              {unit === "metric" ? (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-bold text-sm uppercase tracking-wider">Height</span>
                    <span className="text-gold font-extrabold text-lg">{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(parseInt(e.target.value))}
                    className="w-full h-1 bg-charcoal-light border border-charcoal-border rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-gray-500 text-[10px] uppercase font-bold mt-2">
                    <span>120 cm</span>
                    <span>170 cm</span>
                    <span>220 cm</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-white font-bold text-sm uppercase tracking-wider block mb-4">Height</span>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                          <span>Feet</span>
                          <span className="text-gold font-bold">{heightFt} ft</span>
                        </div>
                        <input
                          type="range"
                          min="4"
                          max="7"
                          value={heightFt}
                          onChange={(e) => setHeightFt(parseInt(e.target.value))}
                          className="w-full h-1 bg-charcoal-light border border-charcoal-border rounded-lg appearance-none cursor-pointer accent-gold"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                          <span>Inches</span>
                          <span className="text-gold font-bold">{heightIn} in</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="11"
                          value={heightIn}
                          onChange={(e) => setHeightIn(parseInt(e.target.value))}
                          className="w-full h-1 bg-charcoal-light border border-charcoal-border rounded-lg appearance-none cursor-pointer accent-gold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* WEIGHT INPUTS */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">Weight</span>
                  <span className="text-gold font-extrabold text-lg">
                    {unit === "metric" ? `${weightKg} kg` : `${weightLbs} lbs`}
                  </span>
                </div>
                <input
                  type="range"
                  min={unit === "metric" ? "40" : "90"}
                  max={unit === "metric" ? "150" : "330"}
                  value={unit === "metric" ? weightKg : weightLbs}
                  onChange={(e) => {
                    if (unit === "metric") {
                      setWeightKg(parseInt(e.target.value));
                    } else {
                      setWeightLbs(parseInt(e.target.value));
                    }
                  }}
                  className="w-full h-1 bg-charcoal-light border border-charcoal-border rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-gray-500 text-[10px] uppercase font-bold mt-2">
                  <span>{unit === "metric" ? "40 kg" : "90 lbs"}</span>
                  <span>{unit === "metric" ? "95 kg" : "210 lbs"}</span>
                  <span>{unit === "metric" ? "150 kg" : "330 lbs"}</span>
                </div>
              </div>
            </div>

            {/* General Health Tip */}
            <div className="flex gap-4 p-4 rounded-xl bg-charcoal-light border border-charcoal-border mt-4">
              <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                <strong className="text-gray-300 font-medium">Please Note:</strong> Body Mass Index (BMI) provides a general classification. It does not factor in muscle density. High-muscle athletes may score higher on the BMI scale while maintaining low body fat.
              </p>
            </div>
          </GlassCard>

          {/* Right Panel: Dial Dashboard Visuals */}
          <GlassCard goldAccent className="lg:col-span-5 p-8 flex flex-col justify-between border border-gold/25 relative overflow-hidden bg-[#121212]/90 shadow-[0_10px_35px_rgba(212,175,55,0.06)]">
            <div className="flex items-center gap-3 border-b border-charcoal-border pb-4">
              <Activity className="w-5 h-5 text-gold" />
              <span className="text-white font-bold uppercase tracking-wider text-sm">
                Live Result Status
              </span>
            </div>

            {/* Circular Gauge visualization */}
            <div className="flex flex-col items-center justify-center py-10 relative">
              <div className="relative w-44 h-44 flex items-center justify-center">
                {/* SVG Gauge Background Arch */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="88"
                    cy="88"
                    r="76"
                    className="stroke-[#222222]"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="88"
                    cy="88"
                    r="76"
                    className="stroke-gold transition-all duration-300"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={477.5}
                    strokeDashoffset={477.5 - (477.5 * progressPercent) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Score Text inside */}
                <div className="absolute flex flex-col items-center">
                  <span className="text-4xl font-black text-white">{bmi}</span>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">
                    Your BMI
                  </span>
                </div>
              </div>

              {/* Status Display */}
              <div className="text-center mt-6">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Classification
                </p>
                <h4 className={`text-2xl font-black uppercase mt-1 tracking-wide ${colorClass} text-glow animate-pulse`}>
                  {category}
                </h4>
              </div>
            </div>

            {/* Quick Index Reference */}
            <div className="grid grid-cols-4 gap-2 text-center text-[9px] uppercase font-bold mt-4 pt-4 border-t border-charcoal-border/50">
              <div className="flex flex-col gap-1 border-r border-charcoal-border">
                <span className="text-blue-400">&lt; 18.5</span>
                <span className="text-gray-500 font-medium">Under</span>
              </div>
              <div className="flex flex-col gap-1 border-r border-charcoal-border">
                <span className="text-gold">18.5 - 24.9</span>
                <span className="text-gray-500 font-medium">Normal</span>
              </div>
              <div className="flex flex-col gap-1 border-r border-charcoal-border">
                <span className="text-orange-400">25 - 29.9</span>
                <span className="text-gray-500 font-medium">Over</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-red-500">30+</span>
                <span className="text-gray-500 font-medium">Obese</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
