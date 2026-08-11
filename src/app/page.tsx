"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Landmark, CheckCircle2, TrendingUp, Trees, HelpCircle } from "lucide-react";
import { projectsData } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function Home() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const stats = [
    { value: "100%", label: "Title Transparency", desc: "Rigorous legal audit verification" },
    { value: "HMDA / DTCP", label: "Layout Focus", desc: "Designed to strict government codes" },
    { value: "[X] Acres", label: "Planned Ventures", desc: "Strategically located landbanks" },
    { value: "[Y]+", label: "Happy Investors", desc: "Building wealth through land plots" },
  ];

  const investmentReasons = [
    {
      title: "Tangible Land Ownership",
      desc: "Unlike apartments, purchasing a plot gives you complete ownership of the underlying land. Land is a finite resource that does not depreciate.",
      icon: <CheckCircle2 className="text-gold-500 w-5 h-5 flex-shrink-0" />,
    },
    {
      title: "Maximum Appreciation Potential",
      desc: "Plotted developments in Hyderabad's outer growth corridors (like Yacharam and Rampally) have historical appreciation rates outperforming built spaces.",
      icon: <TrendingUp className="text-gold-500 w-5 h-5 flex-shrink-0" />,
    },
    {
      title: "Lower Entry Cost, Flex Building",
      desc: "Open plots require lower initial investment compared to fully constructed houses, allowing you to invest early and build your villa at your own pace.",
      icon: <Landmark className="text-gold-500 w-5 h-5 flex-shrink-0" />,
    },
    {
      title: "Premium Master-Planned Infrastructure",
      desc: "Sravya ventures are equipped with wide internal blacktop roads, underground cabling, water connectivity, street lighting, and heavy landscaping.",
      icon: <Trees className="text-gold-500 w-5 h-5 flex-shrink-0" />,
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary-950 overflow-hidden font-sans">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-950/60 to-primary-950 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero.jpeg"
            alt="Premium Plotting Developments"
            fill
            priority
            className="object-cover object-center opacity-50"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-8 pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/20 bg-primary-900/60 text-gold-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            <ShieldCheck size={14} className="text-gold-500" />
            <span>Hyderabad's Trusted Plot Developer</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-ivory tracking-tight leading-tight max-w-4xl mx-auto">
            Building Trust.<br className="hidden md:inline" /> Creating Landmarks.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Thoughtfully planned gated community plots and land investment opportunities in high-growth corridors of Hyderabad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold uppercase tracking-wider text-primary-900 bg-gold-500 hover:bg-gold-400 rounded-lg transition-all duration-300 shadow-lg shadow-gold-500/10"
            >
              <span>Explore Active Plots</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold uppercase tracking-wider text-ivory border border-white/20 hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              Talk to Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="bg-white border-y border-primary-900/5 py-12 relative z-20 -mt-16 max-w-6xl mx-auto rounded-xl shadow-xl px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center space-y-1 font-sans">
            <span className="block font-serif text-3xl md:text-4xl font-extrabold text-primary-900">
              {stat.value}
            </span>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-600">
              {stat.label}
            </h4>
            <p className="text-xs text-charcoal/50">
              {stat.desc}
            </p>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-ivory font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Details */}
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-950 leading-tight">
              Crafting Premium Plotted Communities for Multi-Generational Wealth
            </h2>
            <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
              At **Sravya Global Developers**, we understand that land is not just a purchase; it is the foundation of your family's future and financial security. We specialize in identifying high-growth zones around Hyderabad and transforming them into legally sound, master-planned residential communities.
            </p>
            <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
              Every project we launch focuses on strict compliance (including HMDA, DTCP, and RERA approvals), 100% title transparency, and top-tier infrastructure developments. We deliver ready-to-construct villa plots that offer peace of mind and stellar capital appreciation.
            </p>
            
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary-900 hover:text-gold-600 transition-colors"
              >
                <span>Read Our Journey</span>
                <ArrowRight size={16} className="text-gold-500" />
              </Link>
            </div>
          </div>

          {/* Right: Picture Grid */}
          <div className="grid grid-cols-12 gap-4 items-stretch relative">
            <div className="col-span-8 rounded-xl overflow-hidden shadow-lg relative min-h-[250px] bg-primary-950">
              <Image
                src="/images/sravya-2.jpeg"
                alt="Plotted land layout"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-4 rounded-xl overflow-hidden shadow-lg relative min-h-[180px] self-end bg-primary-950">
              <Image
                src="/images/sravya-3.jpeg"
                alt="Green landscaping plots"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Venture Showcase Video Section */}
      <section className="py-20 bg-primary-950 font-sans text-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-950/20 z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-12">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Venture Tour
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory">
              Sravya Global Venture Showcase
            </h2>
            <p className="text-sm text-ivory/70 leading-relaxed">
              Experience a cinematic walk-through of our master-planned layouts, premium avenue plantations, and luxury plotting developments.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl bg-black aspect-video">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/showcase.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>

      {/* Investment Analysis (Plots vs Apartments) */}
      <section className="py-20 md:py-24 bg-ivory font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Description */}
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Investment Strategy
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-950 leading-tight">
                Why Open Plots Are the Safest Wealth Multiplier
              </h2>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                In rapidly growing metros like Hyderabad, property investments require careful evaluation. While apartments depreciate due to construction aging, land is a scarce, appreciating asset. Acquiring premium villa plots guarantees complete title control, flexibility, and much higher ROI potential.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {investmentReasons.map((reason, idx) => (
                  <div key={idx} className="flex gap-3">
                    {reason.icon}
                    <div className="space-y-1">
                      <h4 className="font-serif text-base font-bold text-primary-950">
                        {reason.title}
                      </h4>
                      <p className="text-xs text-charcoal/60 leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right comparison card table */}
            <div className="bg-white border border-primary-900/10 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-primary-900/5">
                <HelpCircle className="text-gold-500 flex-shrink-0" />
                <h3 className="font-serif text-lg font-bold text-primary-950">
                  Land Plots vs. Constructed Apartments
                </h3>
              </div>
              
              <div className="space-y-4 text-xs">
                {/* Row 1 */}
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-primary-900/5">
                  <span className="font-bold text-charcoal/60 uppercase tracking-wider">Metric</span>
                  <span className="font-bold text-primary-900 uppercase">Sravya Open Plots</span>
                  <span className="font-bold text-charcoal/50 uppercase">Apartments</span>
                </div>
                {/* Row 2 */}
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-primary-900/5">
                  <span className="font-semibold text-charcoal/70">Ownership</span>
                  <span className="text-primary-800 font-medium">Complete ownership of Land & Airspace</span>
                  <span className="text-charcoal/60">Fractional Undivided Share (UDS)</span>
                </div>
                {/* Row 3 */}
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-primary-900/5">
                  <span className="font-semibold text-charcoal/70">Depreciation</span>
                  <span className="text-primary-800 font-medium">Zero depreciation. Values always grow.</span>
                  <span className="text-charcoal/60">High structure depreciation over 15-20 years</span>
                </div>
                {/* Row 4 */}
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-primary-900/5">
                  <span className="font-semibold text-charcoal/70">Flexibility</span>
                  <span className="text-primary-800 font-medium">Build custom villa anytime as per budget</span>
                  <span className="text-charcoal/60">Fixed builder layout. Cannot modify structure</span>
                </div>
                {/* Row 5 */}
                <div className="grid grid-cols-3 gap-4">
                  <span className="font-semibold text-charcoal/70">Entry Capital</span>
                  <span className="text-primary-800 font-medium">Lower entry cost, higher leverage</span>
                  <span className="text-charcoal/60">Heavy upfront capital, recurring maintenance</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <Link
                  href="/nri-investors"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600 hover:text-gold-700"
                >
                  <span>Learn more in our Investment Guide</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-white border-y border-primary-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Customer Feedback
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-950">
              Trusted by 100s of Property Buyers
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTA />
        </div>
      </section>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}
