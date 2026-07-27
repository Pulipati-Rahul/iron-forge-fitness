"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, selectedPlan = "Elite" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: selectedPlan,
    terms: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen, selectedPlan]);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid phone number (8-15 digits).";
    }
    if (!formData.terms) tempErrors.terms = "You must accept the terms of service.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#000000]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-charcoal border border-charcoal-border rounded-2xl p-8 overflow-hidden shadow-2xl z-10"
          >
            {/* Background glow decorator */}
            <div className="absolute -top-32 -left-32 w-64 h-64 radial-glow pointer-events-none rounded-full" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-gold transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <span className="text-gold font-bold uppercase tracking-widest text-[10px] text-glow">
                    Exclusive Admission
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase mt-1">
                    Join Iron Forge Club
                  </h3>
                  <p className="text-gray-400 text-sm font-light mt-1">
                    Fill out the admission request below to secure your elite access pass.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-charcoal-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="e.g. Marcus Vance"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0A0A0A] border border-charcoal-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="marcus@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0A0A0A] border border-charcoal-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Plan Picker */}
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
                      Select Membership Tier
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-charcoal-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="Basic">Forge Basic — $49/mo</option>
                      <option value="Pro">Forge Pro — $89/mo</option>
                      <option value="Elite">Forge Elite VIP — $149/mo</option>
                    </select>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3 mt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.terms}
                      onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                      className="mt-1 cursor-pointer accent-gold"
                    />
                    <label htmlFor="terms" className="text-xs text-gray-400 leading-normal cursor-pointer">
                      I agree to the terms, consent to the processing of my membership details, and acknowledge the Iron Forge code of conduct.
                    </label>
                  </div>
                  {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                </div>

                <div className="flex items-center justify-between gap-4 mt-2">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <span>Secure Registration</span>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    glow
                    disabled={isSubmitting}
                    className="py-3 px-8"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10 gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <CheckCircle className="w-10 h-10 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                    Membership Reserved
                  </h3>
                  <p className="text-gold font-medium text-sm mt-1 uppercase tracking-widest">
                    Welcome to the Forge, {formData.name}!
                  </p>
                  <p className="text-gray-400 text-sm font-light mt-4 max-w-sm mx-auto leading-relaxed">
                    We have successfully registered your application for the <strong className="text-white">{formData.plan}</strong> membership tier. Check your inbox at <strong className="text-white">{formData.email}</strong> for instructions on scheduling your physical induction session.
                  </p>
                </div>
                <Button variant="secondary" onClick={onClose} className="px-8 mt-4">
                  Close Window
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
