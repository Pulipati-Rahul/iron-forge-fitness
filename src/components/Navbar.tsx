"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Memberships", href: "#memberships" },
    { name: "Trainers", href: "#trainers" },
    { name: "BMI Calculator", href: "#bmi" },
    { name: "Stories", href: "#stories" },
    { name: "Schedule", href: "#schedule" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-charcoal-border py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Dumbbell className="w-5 h-5 text-black transform group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <span className="text-xl font-black uppercase tracking-widest text-white">
              Iron <span className="gold-gradient-text">Forge</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-gray-300 hover:text-gold uppercase transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Button className="h-11 px-5 rounded-full text-sm">
              Join Elite Club
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-full max-w-sm z-40 bg-[#0A0A0A] border-l border-charcoal-border shadow-2xl p-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold tracking-wider text-gray-300 hover:text-gold uppercase transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-6 mt-auto">
              <div className="h-[1px] bg-charcoal-border" />
              <Button
                variant="primary"
                glow
                onClick={() => {
                  setIsOpen(false);
                  onJoinClick();
                }}
                className="w-full py-4 text-base"
              >
                Join Elite Club
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
