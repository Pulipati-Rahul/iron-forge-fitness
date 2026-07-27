"use client";

import React, { useState } from "react";
import { Dumbbell, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer className="bg-matte-black border-t border-charcoal-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Dumbbell className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-black uppercase tracking-widest text-white">
                Iron <span className="gold-gradient-text">Forge</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              An elite training destination designed for those who refuse to settle. Experience high-caliber equipment, elite trainers, and an atmosphere forged for peak human performance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center border border-charcoal-border text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center border border-charcoal-border text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center border border-charcoal-border text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <YoutubeIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center border border-charcoal-border text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Explore</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-gray-400 text-sm hover:text-gold transition-colors">About Story</a>
              <a href="#programs" className="text-gray-400 text-sm hover:text-gold transition-colors">Training Programs</a>
              <a href="#memberships" className="text-gray-400 text-sm hover:text-gold transition-colors">Membership Plans</a>
              <a href="#trainers" className="text-gray-400 text-sm hover:text-gold transition-colors">Expert Trainers</a>
              <a href="#schedule" className="text-gray-400 text-sm hover:text-gold transition-colors">Class Schedule</a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Hours of Power</h4>
            <div className="flex flex-col gap-4 text-sm font-light text-gray-400">
              <div>
                <p className="text-white font-medium">Monday - Friday</p>
                <p>5:00 AM - 11:00 PM</p>
              </div>
              <div>
                <p className="text-white font-medium">Saturday</p>
                <p>6:00 AM - 9:00 PM</p>
              </div>
              <div>
                <p className="text-white font-medium">Sunday</p>
                <p>7:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Forge Dispatch</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Subscribe to get exclusive training materials, nutrition plans, and priority event access.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-charcoal border border-charcoal-border rounded-full py-3.5 pl-5 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-2.5 w-9 h-9 rounded-full bg-gold hover:bg-gold-light flex items-center justify-center text-black cursor-pointer transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {submitted && (
                <span className="text-xs text-gold font-medium mt-1 animate-pulse">
                  Welcome to the Forge. Subscribed successfully.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
          <p>© {new Date().getFullYear()} Iron Forge Fitness. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
