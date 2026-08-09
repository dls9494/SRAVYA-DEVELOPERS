"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function Projects() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary-950 text-center font-sans overflow-hidden">
        <div className="absolute inset-0 bg-primary-950/85 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/sravya-3.jpeg"
            alt="Sravya Projects Portfolio"
            fill
            className="object-cover opacity-25"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-20 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Our Portfolios
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-wide leading-tight">
            Plotted Developments & Communities
          </h1>
          <p className="text-sm md:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Browse our list of premium residential open plots, gated communities, and luxury villa plotting ventures in Hyderabad's high-demand corridors.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-ivory font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ProjectGrid projects={projectsData} showFilters={true} />
        </div>
      </section>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}
