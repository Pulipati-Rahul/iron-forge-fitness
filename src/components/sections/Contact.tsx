"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Membership",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const contactDetails = [
    {
      icon: Phone,
      title: "Direct Hotlines",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Electronic Mail",
      details: ["membership@ironforge.com", "concierge@ironforge.com"],
    },
    {
      icon: MapPin,
      title: "Sanctuary Location",
      details: ["742 Gold Accent Boulevard", "Suite 100, New York, NY 10001"],
    },
  ];

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!form.name.trim()) tempErrors.name = "Your name is required.";
    if (!form.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) tempErrors.message = "Message content cannot be blank.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "Membership", message: "" });
      setTimeout(() => setSent(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-matte-black">
      {/* Glow decorator */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          goldSubtitle="Connect with us"
          title="Begin Your Transformation"
          description="Have questions about our luxury facilities, coaching roster, or custom corporate packages? Send us a transmission. Our concierge team is standing by."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <GlassCard
                    key={idx}
                    hoverGlow={false}
                    className="p-6 border border-charcoal-border bg-charcoal/20 flex gap-4 items-start"
                  >
                    <div className="w-11 h-11 rounded-xl bg-charcoal-light border border-charcoal-border flex items-center justify-center text-gold shrink-0">
                      <Icon className="w-5 h-5 text-glow" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
                        {item.title}
                      </h4>
                      {item.details.map((detail, dIdx) => (
                        <p key={dIdx} className="text-gray-400 text-sm font-light leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </GlassCard>
                );
              })}
            </div>

            {/* Dark Styled Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-charcoal-border h-64 relative group shadow-lg">
              <iframe
                title="Iron Forge Gym Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.517410325853!2d78.48208479357913!3d17.399368000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99fe9dd8f235%3A0x133e54f1adc2a40d!2sBe%20Strong%20Fitness%20%26%20Pilates%20Studio!5e0!3m2!1sen!2sin!4v1785164278707!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(100%) contrast(120%)" }}
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute inset-0 border border-gold/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <GlassCard className="lg:col-span-7 p-8 border border-charcoal-border flex flex-col justify-between">
            <form onSubmit={handleSend} className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide">
                  Concierge Inquiries
                </h3>
                <p className="text-gray-400 text-xs font-light mt-1">
                  Fill in the details below. We guarantee a response within 4 hours.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-charcoal-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="Marcus Vance"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email & Subject Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-charcoal-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="marcus@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
                      Topic of Query
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-charcoal-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="Membership">Membership Details</option>
                      <option value="Training">Personal Training Plans</option>
                      <option value="Partnership">Corporate Partnership</option>
                      <option value="Other">General Question</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-charcoal-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Provide details about your workout targets or query here..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
              </div>

              {/* Submit & Status info */}
              <div className="flex items-center justify-between gap-4 mt-2">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>Data Protection Guaranteed</span>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  glow
                  disabled={sending}
                  className="py-3 px-8 flex items-center gap-2"
                >
                  {sending ? (
                    "Transmitting..."
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </Button>
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wide mt-2 p-3 bg-gold/5 border border-gold/20 rounded-lg"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold animate-bounce" />
                  <span>Transmission received. We will contact you shortly!</span>
                </motion.div>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
