"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckSquare, HeartHandshake, ShieldCheck, MapPin, Compass, Hammer, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function WhySravya() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const pillars = [
    {
      title: "Legally Vetted Titles Only",
      desc: "We perform exhaustive legal verification through top corporate lawyers before land acquisition. We provide a complete legal summary dossier to buyers.",
      icon: <FileText className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "HMDA & DTCP Standards",
      desc: "We do not compromise on approvals. Every venture matches zoning guidelines, providing wide layouts, park provisions, and proper civic setbacks.",
      icon: <CheckSquare className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Strategic Growth Locations",
      desc: "We prioritize areas situated on future transit grids (Regional Ring Road, Outer Ring Road, highway expansions) to guarantee early-stage investor gains.",
      icon: <MapPin className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Premium Civic Amenities",
      desc: "Our communities boast underground cabling, blacktop road networks, overhead storage tanks, water connections, rainwater recharge, and landscaped parks.",
      icon: <Hammer className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Vaastu-Compliant Layouts",
      desc: "Every plot layout is scientifically designed according to traditional Vaastu principles for perfect alignment and positive energy flow.",
      icon: <Compass className="w-5 h-5 text-gold-500" />,
    },
    {
      title: "Transparent Post-Sale Support",
      desc: "We guide you from spot registration through link document sourcing and boundary marking, ensuring absolute peace of mind.",
      icon: <HeartHandshake className="w-5 h-5 text-gold-500" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 bg-primary-950 text-center font-sans overflow-hidden">
        <div className="absolute inset-0 bg-primary-950/85 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/sravya-1.jpeg"
            alt="Why Sravya Global Developers"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 relative z-20 space-y-4"
        >
          <motion.p variants={itemVariants} className="text-xs font-bold uppercase tracking-widest text-gold-400">
            The Sravya Difference
          </motion.p>
          <motion.h1 variants={itemVariants} className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-wide leading-tight">
            Why Invest With Sravya Global Developers?
          </motion.h1>
          <motion.p variants={itemVariants} className="text-sm md:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Discover the pillars of trust, compliance, and quality engineering that make our plotting communities the preferred choice for smart land buyers.
          </motion.p>
        </motion.div>
      </section>

      {/* Core Advantages Pillars */}
      <section className="py-24 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Our Core Commitments
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-950">
              The Six Pillars of Trust & Quality
            </h2>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              We make land investments safe, structured, and highly profitable by adhering to strict developer standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-primary-900/10 hover:border-gold-300 rounded-xl shadow-sm hover:shadow-lg transition-smooth space-y-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-900/5 flex items-center justify-center text-primary-900">
                  {pillar.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-primary-950">
                  {pillar.title}
                </h4>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Land as a Legacy Section */}
      <section className="py-24 bg-ivory font-sans border-y border-primary-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Details */}
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Wealth Preservation
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-950 leading-tight">
              Creating Landmarks that Endure Across Generations
            </h2>
            <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
              Real estate has always been a premier asset class in India, but land remains the absolute gold standard. Buildings decompose, structures weather, and apartment maintenance costs eat into yields. In contrast, clear-titled land grows in value as urban boundaries extend.
            </p>
            <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
              Sravya Global Developers focuses on acquiring prime parcels directly in high-growth corridors. We handle the design, municipal approvals, layout engineering, and amenity packaging, delivering a ready-to-build canvas for you. It's not just a purchase; it's a legacy.
            </p>
            
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-gold-500 w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary-950">RERA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-gold-500 w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary-950">Clean Titles</span>
              </div>
            </div>
          </div>

          {/* Picture Grid */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-primary-950">
            <Image
              src="/images/sravya-2.jpeg"
              alt="Land plots landmarks"
              fill
              className="object-cover hover:scale-105 transition-transform duration-750"
            />
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-white font-sans text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-950">
            Ready to Build Your Landmark?
          </h2>
          <p className="text-sm text-charcoal/60 leading-relaxed max-w-xl mx-auto">
            Contact our property investment planners today to review compliance folders, request title certificates, and schedule a customized site trip.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-900 bg-gold-500 hover:bg-gold-400 rounded-lg transition-all duration-300 shadow-md"
            >
              <span>Talk to Investment Advisor</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}
