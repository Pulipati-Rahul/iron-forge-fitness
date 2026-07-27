"use client";

import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Clock, User, ShieldAlert, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Schedule = () => {
  const [activeDay, setActiveDay] = useState("Monday");
  const [classFilter, setClassFilter] = useState("all");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const classTypes = [
    { id: "all", label: "All Classes" },
    { id: "strength", label: "Strength & Power" },
    { id: "conditioning", label: "High Conditioning" },
    { id: "mobility", label: "Mind & Mobility" },
  ];

  const scheduleData: { [key: string]: Array<{
    time: string;
    className: string;
    type: string;
    trainer: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
    slotsLeft: number | "Full";
  }> } = {
    Monday: [
      { time: "06:00 AM - 07:00 AM", className: "HIIT Burnout", type: "conditioning", trainer: "Sarah Jenkins", level: "Intermediate", slotsLeft: 5 },
      { time: "08:30 AM - 09:30 AM", className: "Barbell Strength Foundations", type: "strength", trainer: "Marcus Vance", level: "All Levels", slotsLeft: "Full" },
      { time: "05:30 PM - 06:30 PM", className: "Power Hypertrophy Max", type: "strength", trainer: "Derrick Cole", level: "Advanced", slotsLeft: 8 },
      { time: "07:00 PM - 08:00 PM", className: "Vinyasa Flow Yoga", type: "mobility", trainer: "Elena Rostova", level: "All Levels", slotsLeft: 12 },
    ],
    Tuesday: [
      { time: "06:00 AM - 07:30 AM", className: "CrossFit WOD", type: "conditioning", trainer: "Sarah Jenkins", level: "Advanced", slotsLeft: 4 },
      { time: "09:00 AM - 10:00 AM", className: "Active Joint Mobility", type: "mobility", trainer: "Elena Rostova", level: "Beginner", slotsLeft: 10 },
      { time: "06:00 PM - 07:00 PM", className: "Barbell Strength Foundations", type: "strength", trainer: "Marcus Vance", level: "All Levels", slotsLeft: 2 },
    ],
    Wednesday: [
      { time: "06:00 AM - 07:00 AM", className: "HIIT Burnout", type: "conditioning", trainer: "Sarah Jenkins", level: "Intermediate", slotsLeft: 9 },
      { time: "08:30 AM - 09:30 AM", className: "Functional Core Stability", type: "strength", trainer: "Sarah Jenkins", level: "Intermediate", slotsLeft: 6 },
      { time: "05:30 PM - 06:30 PM", className: "Power Hypertrophy Max", type: "strength", trainer: "Derrick Cole", level: "Advanced", slotsLeft: "Full" },
      { time: "07:00 PM - 08:00 PM", className: "Yin & Recovery Yoga", type: "mobility", trainer: "Elena Rostova", level: "All Levels", slotsLeft: 15 },
    ],
    Thursday: [
      { time: "06:00 AM - 07:30 AM", className: "CrossFit WOD", type: "conditioning", trainer: "Sarah Jenkins", level: "Advanced", slotsLeft: 3 },
      { time: "09:00 AM - 10:00 AM", className: "FRC Skeletal Mobility", type: "mobility", trainer: "Elena Rostova", level: "Beginner", slotsLeft: 8 },
      { time: "06:00 PM - 07:30 PM", className: "Olympic Lifting Tech", type: "strength", trainer: "Marcus Vance", level: "Advanced", slotsLeft: 1 },
    ],
    Friday: [
      { time: "06:00 AM - 07:00 AM", className: "HIIT Burnout", type: "conditioning", trainer: "Sarah Jenkins", level: "Intermediate", slotsLeft: 7 },
      { time: "08:30 AM - 09:30 AM", className: "Barbell Strength Foundations", type: "strength", trainer: "Marcus Vance", level: "All Levels", slotsLeft: 5 },
      { time: "05:30 PM - 06:30 PM", className: "Kettlebell GPP", type: "strength", trainer: "Derrick Cole", level: "Intermediate", slotsLeft: 10 },
      { time: "07:00 PM - 08:00 PM", className: "Zen Breathwork Meditation", type: "mobility", trainer: "Elena Rostova", level: "All Levels", slotsLeft: 20 },
    ],
    Saturday: [
      { time: "08:00 AM - 09:30 AM", className: "Saturday CrossFit Team", type: "conditioning", trainer: "Sarah Jenkins", level: "Advanced", slotsLeft: 6 },
      { time: "10:00 AM - 11:30 AM", className: "Advanced Powerbuilding", type: "strength", trainer: "Marcus Vance", level: "Advanced", slotsLeft: 4 },
      { time: "12:00 PM - 01:00 PM", className: "Restorative Hatha Yoga", type: "mobility", trainer: "Elena Rostova", level: "All Levels", slotsLeft: 14 },
    ],
  };

  const currentClasses = scheduleData[activeDay] || [];
  const filteredClasses = classFilter === "all" 
    ? currentClasses
    : currentClasses.filter(c => c.type === classFilter);

  return (
    <section id="schedule" className="relative py-24 md:py-32 overflow-hidden bg-matte-black">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          goldSubtitle="Weekly Timetable"
          title="Class Schedule"
          description="Plan your physical week. Book a class slot from your member portal to ensure equipment setup. Drop-ins welcome based on slot availability."
        />

        {/* Day Selectors */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-2 border-b border-charcoal-border pb-6 mb-8 overflow-x-auto no-scrollbar">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`w-full py-3.5 px-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 relative border-b-2 shrink-0 md:shrink ${
                activeDay === day
                  ? "text-gold border-gold"
                  : "text-gray-500 border-transparent hover:text-gray-300"
              }`}
            >
              {day.substring(0, 3)}
              <span className="hidden md:inline">{day.substring(3)}</span>
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {classTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setClassFilter(type.id)}
              className={`px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-all duration-200 border ${
                classFilter === type.id
                  ? "bg-gold text-black border-gold shadow-md"
                  : "bg-transparent text-gray-400 border-charcoal-border hover:border-gold/30"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Timetable List Grid */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeDay}-${classFilter}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4"
            >
              {filteredClasses.length > 0 ? (
                filteredClasses.map((item, idx) => {
                  const isFull = item.slotsLeft === "Full";
                  const isAlmostFull = typeof item.slotsLeft === "number" && item.slotsLeft <= 3;
                  
                  return (
                    <GlassCard 
                      key={idx}
                      hoverGlow={!isFull}
                      className={`flex flex-col md:flex-row items-start md:items-center justify-between p-6 border transition-all duration-300 ${
                        isFull 
                          ? "border-charcoal-border bg-charcoal/20 opacity-60" 
                          : "border-charcoal-border bg-charcoal/40 hover:border-gold/25"
                      }`}
                    >
                      {/* Time & Class info */}
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 mb-4 md:mb-0">
                        {/* Time box */}
                        <div className="flex items-center gap-2 text-gold">
                          <Clock className="w-4 h-4 shrink-0 text-glow" />
                          <span className="text-sm font-bold uppercase tracking-wider">{item.time}</span>
                        </div>

                        {/* Name and Tag */}
                        <div>
                          <h4 className="text-lg font-black uppercase text-white tracking-wide">
                            {item.className}
                          </h4>
                          <span className="text-[9px] font-bold text-gray-400 bg-black/40 border border-charcoal-border rounded px-2.5 py-0.5 uppercase tracking-widest mt-1.5 inline-block">
                            {item.type}
                          </span>
                        </div>
                      </div>

                      {/* Coach & Level */}
                      <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
                        {/* Trainer */}
                        <div className="flex items-center gap-2 text-gray-300">
                          <User className="w-4 h-4 text-gold/80" />
                          <span className="text-xs font-light tracking-wide">{item.trainer}</span>
                        </div>

                        {/* Level badge */}
                        <div className="flex items-center gap-1 text-gray-300">
                          <Award className="w-4 h-4 text-gold/80" />
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            {item.level}
                          </span>
                        </div>
                      </div>

                      {/* Slots & Action */}
                      <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pt-4 md:pt-0 border-t border-charcoal-border/50 md:border-none">
                        <div className="flex flex-col items-start md:items-end">
                          <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                            Availability
                          </span>
                          {isFull ? (
                            <span className="text-red-500 font-extrabold text-xs uppercase mt-0.5 tracking-wider">
                              Fully Booked
                            </span>
                          ) : isAlmostFull ? (
                            <span className="text-orange-400 font-extrabold text-xs uppercase mt-0.5 tracking-wider animate-pulse">
                              {item.slotsLeft} Slots Left
                            </span>
                          ) : (
                            <span className="text-gold font-extrabold text-xs uppercase mt-0.5 tracking-wider">
                              {item.slotsLeft} Slots Available
                            </span>
                          )}
                        </div>
                        
                        <button
                          disabled={isFull}
                          className={`px-5 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 ${
                            isFull
                              ? "bg-transparent text-gray-600 border border-charcoal-border cursor-not-allowed"
                              : "bg-gold text-black hover:bg-gold-light shadow-md"
                          }`}
                        >
                          {isFull ? "Booked" : "Reserve Slot"}
                        </button>
                      </div>
                    </GlassCard>
                  );
                })
              ) : (
                <div className="text-center py-16 border border-dashed border-charcoal-border rounded-xl">
                  <ShieldAlert className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm font-light">No specialty classes scheduled for this category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
