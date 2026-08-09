"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Eye, Target, Users, MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function About() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const values = [
    {
      title: "100% Legal Transparency",
      desc: "Every plot we offer undergoes deep legal vetting. All titles are clear and ready for immediate registration.",
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Compliance Focus",
      desc: "We exclusively develop layouts approved by HMDA or DTCP, strictly complying with TS RERA regulations.",
      icon: <Award className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Customer Centricity",
      desc: "From plotting layout architecture to on-ground utilities delivery, we place customer needs first.",
      icon: <Users className="w-6 h-6 text-gold-500" />,
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary-950 text-center font-sans overflow-hidden">
        <div className="absolute inset-0 bg-primary-950/80 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/sravya-2.jpeg"
            alt="About Sravya Developers"
            fill
            className="object-cover opacity-30"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-20 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
            About Sravya Global Developers
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-wide leading-tight">
            Building Trust. Creating Landmarks.
          </h1>
          <p className="text-sm md:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Hyderabad's leading land development company focused on premium residential open plots, gated communities, and high-yield real estate investments.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white font-sans border-b border-primary-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left image banner */}
          <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden shadow-lg bg-primary-950">
            <Image
              src="/images/sravya-3.jpeg"
              alt="Land plotting layouts"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-950 leading-tight">
                Our Commitment to Excellence in Plot Development
              </h2>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                Sravya Global Developers was founded on the core values of transparency, integrity, and long-term customer growth. Unlike building developers focused on standard concrete spaces, we specialize purely in land developments—transforming suburban outskirts into thriving, master-planned residential communities.
              </p>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                By maintaining a strong focus on strategic location selection near proposed radial corridors, highways, and IT hubs, we ensure that every square yard you buy from us is poised for maximum wealth appreciation.
              </p>
            </div>

            {/* Mission / Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl border border-primary-900/5 bg-ivory/30 space-y-3">
                <div className="w-10 h-10 rounded bg-primary-900/5 flex items-center justify-center text-primary-900">
                  <Target size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-primary-950">Our Mission</h4>
                <p className="text-xs text-charcoal/65 leading-relaxed">
                  To deliver premium, legal compliance-checked open plots that offer a safe and lucrative investment channel for residential developers and property buyers.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-primary-900/5 bg-ivory/30 space-y-3">
                <div className="w-10 h-10 rounded bg-primary-900/5 flex items-center justify-center text-primary-900">
                  <Eye size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-primary-950">Our Vision</h4>
                <p className="text-xs text-charcoal/65 leading-relaxed">
                  To establish Sravya Global Developers as the most trusted land-development brand in South India, celebrated for clear titles and quality developments.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-ivory font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Company Ideals
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-950">
              The Foundations of Our Business
            </h2>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              We govern every business transaction by values that protect our investors' wealth and guarantee clean property handovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-white border border-primary-900/10 hover:border-gold-300 rounded-xl shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-900/5 flex items-center justify-center text-primary-900">
                  {val.icon}
                </div>
                <h4 className="font-serif text-xl font-bold text-primary-950">
                  {val.title}
                </h4>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership message or quote */}
      <section className="py-20 bg-white font-sans border-t border-primary-900/5 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-950 leading-tight italic">
            "We do not merely sell plots of land. We help you secure an appreciating asset that will safeguard your family's future for generations."
          </h2>

          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-primary-950">Management Message</h4>
            <p className="text-xs text-gold-600 font-bold uppercase tracking-wider">
              Sravya Global Developers Leadership
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold uppercase tracking-wider text-primary-900 bg-gold-500 hover:bg-gold-400 rounded-lg transition-all duration-300 shadow-md"
            >
              <span>Partner with Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}
