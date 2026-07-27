"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Programs } from "../components/sections/Programs";
import { Memberships } from "../components/sections/Memberships";
import { Trainers } from "../components/sections/Trainers";
import { BmiCalculator } from "../components/sections/BmiCalculator";
import { SuccessStories } from "../components/sections/SuccessStories";
import { Gallery } from "../components/sections/Gallery";
import { Schedule } from "../components/sections/Schedule";
import { Contact } from "../components/sections/Contact";
import { Faq } from "../components/sections/Faq";
import { Footer } from "../components/Footer";
import { JoinModal } from "../components/modals/JoinModal";

export default function Home() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Elite");

  const handleOpenJoin = (plan: string = "Elite") => {
    setSelectedPlan(plan);
    setIsJoinOpen(true);
  };

  const handleCloseJoin = () => {
    setIsJoinOpen(false);
  };

  return (
    <>
      {/* Sticky Global Navigation */}
      <Navbar onJoinClick={() => handleOpenJoin("Elite")} />

      {/* Main Page Layout Sections */}
      <main className="flex-grow pt-[80px]">
        {/* Full-Screen Parallax Hero */}
        <Hero onJoinClick={() => handleOpenJoin("Elite")} />

        {/* Heritage & Values Story */}
        <About />

        {/* Training Disciplines Grid */}
        <Programs />

        {/* Subscription pricing charts */}
        <Memberships onPlanSelect={handleOpenJoin} />

        {/* Professional biography cards */}
        <Trainers />

        {/* Biometrics dial calculator */}
        <BmiCalculator />

        {/* Success Stories & before/after reveals */}
        <SuccessStories />

        {/* Timetable weekly slots */}
        <Schedule />

        {/* Gallery masonry photo filter */}
        <Gallery />

        {/* Coordinates, maps, and concierge form */}
        <Contact />

        {/* Accordion answers */}
        <Faq />
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Membership Signup Drawer */}
      <JoinModal
        isOpen={isJoinOpen}
        onClose={handleCloseJoin}
        selectedPlan={selectedPlan}
      />
    </>
  );
}
