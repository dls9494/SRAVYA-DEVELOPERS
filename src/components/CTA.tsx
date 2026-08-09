"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Landmark, ShieldCheck, TrendingUp } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-primary-900 text-ivory rounded-2xl overflow-hidden shadow-2xl relative border border-primary-800/50 font-sans">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-700/10 blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 text-center space-y-8 relative z-10">
        
        {/* Subtitle / Tag */}
        <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Exclusive Plotted Developments
        </p>

        {/* Title */}
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Secure Your Future with High-Growth Land Investments
        </h2>

        {/* Short details */}
        <p className="text-sm md:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
          Open plots are the safest and highest-yielding asset class in Hyderabad's current expansion phase. Partner with **Sravya Global Developers** to acquire clear-titled, RERA-approved plots in top growth corridors.
        </p>

        {/* Bullet Trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gold-500">
              <TrendingUp size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-ivory">High Return ROI</h4>
              <p className="text-xs text-ivory/60">Rapid land appreciation</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gold-500">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-ivory">100% Clear Titles</h4>
              <p className="text-xs text-ivory/60">Legally validated layouts</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gold-500">
              <Landmark size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-ivory">RERA Regulated</h4>
              <p className="text-xs text-ivory/60">Standard compliance</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold uppercase tracking-wider text-primary-900 bg-gold-500 hover:bg-gold-400 rounded-lg transition-all duration-300 shadow-lg shadow-gold-500/10"
          >
            <span>Book A Site Visit</span>
            <ArrowRight size={16} />
          </Link>
          
          <Link
            href="/nri-investors"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold uppercase tracking-wider text-ivory border border-white/20 hover:bg-white/5 rounded-lg transition-all duration-300"
          >
            NRI Investment Guide
          </Link>
        </div>

      </div>
    </section>
  );
}
