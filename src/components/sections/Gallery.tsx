"use client";

import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { X, Play, Camera, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { name: "all", label: "Show All" },
    { name: "equipment", label: "Premium Gear" },
    { name: "workouts", label: "Athletes In Action" },
    { name: "interiors", label: "Club Spaces" },
  ];

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
      category: "interiors",
      title: "Main Training Floor",
      subtitle: "Premium Precor Machines",
    },
    {
      src: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=800&auto=format&fit=crop",
      category: "equipment",
      title: "Polished Steel Dumbbells",
      subtitle: "Custom Iron Weights",
    },
    {
      src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
      category: "workouts",
      title: "Barbell Cleans",
      subtitle: "Olympic Lifting Platform",
    },
    {
      src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop",
      category: "workouts",
      title: "Functional Kettlebells",
      subtitle: "Conditioning Session",
    },
    {
      src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
      category: "equipment",
      title: "Hammer Strength Racks",
      subtitle: "Heavy Squat Cages",
    },
    {
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      category: "interiors",
      title: "Zen Yoga Studio",
      subtitle: "Mindfulness Lounge",
    },
    {
      src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
      category: "workouts",
      title: "Powerlifting Deadlift",
      subtitle: "Max Output Push",
    },
    {
      src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
      category: "interiors",
      title: "Spin Cycle Studio",
      subtitle: "Dynamic Sound & Lighting",
    },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (index: number) => {
    // Find index of the clicked item in the filtered list
    const originalIndex = galleryItems.indexOf(filteredItems[index]);
    setLightboxIndex(originalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0) ? prev - 1 : galleryItems.length - 1);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < galleryItems.length - 1) ? prev + 1 : 0);
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A] border-y border-charcoal-border">
      {/* Glow blobs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          goldSubtitle="Inside the Forge"
          title="Club Gallery"
          description="Explore our high-end training chambers, raw barbell zones, and premium wellness spaces curated to support your fitness progression."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat.name
                  ? "bg-gold text-black border-gold shadow-md"
                  : "bg-transparent text-gray-400 border-charcoal-border hover:border-gold/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-charcoal-border hover:border-gold/30 cursor-pointer shadow-lg"
              >
                {/* Photo */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Info Text */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-col">
                    <span className="text-gold text-[9px] font-black uppercase tracking-widest mb-1 text-glow">
                      {item.category}
                    </span>
                    <h4 className="text-white text-base font-bold uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs font-light mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  
                  <div className="w-8 h-8 rounded-lg bg-gold/90 text-black flex items-center justify-center shadow-md scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />
            
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white transition-colors cursor-pointer z-10"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Right Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white transition-colors cursor-pointer z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Image Viewer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-4xl max-h-[80vh] flex flex-col items-center justify-center z-10 select-none"
            >
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] rounded-xl border border-charcoal-border object-contain shadow-2xl"
              />
              
              <div className="text-center mt-6">
                <span className="text-gold text-[10px] font-black uppercase tracking-widest text-glow">
                  {galleryItems[lightboxIndex].category}
                </span>
                <h3 className="text-white text-lg font-black uppercase mt-1">
                  {galleryItems[lightboxIndex].title}
                </h3>
                <p className="text-gray-400 text-sm font-light">
                  {galleryItems[lightboxIndex].subtitle}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
