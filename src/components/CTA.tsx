"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Bank, ShieldCheck, TrendUp } from "@phosphor-icons/react";

export default function CTA() {
  return (
    <section className="bg-[#1A1A1A] text-[#F5F3EF] rounded-xl overflow-hidden relative border border-[#D4A847]/30 font-sans my-12">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D4A847]/5 blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#111111]/80 blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4A847]">
            End-To-End Development
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[#F5F3EF]">
            Comprehensive Real Estate & Development Services
          </h2>

          <p className="text-sm md:text-base text-[#F5F3EF]/80 leading-relaxed max-w-xl">
            From layout designs, approvals, and developments to high-growth plot investments, Sravya Global Developers offers end-to-end real estate solutions in Hyderabad. We ensure clear titles and strict regulatory compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#111111] bg-[#D4A847] hover:bg-[#C8923A] rounded-full transition-all duration-300"
            >
              <span>Book A Consultation</span>
              <ArrowRight size={16} weight="bold" />
            </Link>
            
            <Link
              href="/#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F5F3EF] border border-[#D4A847]/30 hover:bg-white/5 rounded-full transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Column: Vertical Trust Indicators */}
        <div className="lg:col-span-5 space-y-6 border-l border-[#D4A847]/30 pl-6 lg:pl-10 py-2">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#D4A847]/30 flex items-center justify-center flex-shrink-0 text-[#D4A847]">
              <TrendUp size={20} weight="fill" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#F5F3EF]">High Return ROI</h4>
              <p className="text-xs text-[#F5F3EF]/60 leading-relaxed">Strategic land developments outperforming traditional assets.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#D4A847]/30 flex items-center justify-center flex-shrink-0 text-[#D4A847]">
              <ShieldCheck size={20} weight="fill" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#F5F3EF]">100% Clear Titles</h4>
              <p className="text-xs text-[#F5F3EF]/60 leading-relaxed">Vigorously vetted legal titles with transparent documentation.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#D4A847]/30 flex items-center justify-center flex-shrink-0 text-[#D4A847]">
              <Bank size={20} weight="fill" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#F5F3EF]">HMDA & DTCP Compliant</h4>
              <p className="text-xs text-[#F5F3EF]/60 leading-relaxed">Strict adherence to regulatory guidelines and approvals.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
