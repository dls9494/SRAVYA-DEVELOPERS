"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Landmark, Compass, DollarSign, ShieldCheck, HeartHandshake, Eye, BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function NRIInvestors() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const benefits = [
    {
      title: "Currency Advantage",
      desc: "Capitalize on foreign currency strengths against the Indian Rupee, resulting in lower entry costs for high-value properties.",
      icon: <DollarSign className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Simplified FEMA Norms",
      desc: "Under current RBI guidelines, NRIs hold the same property buying rights as residents (excluding agricultural land). FEMA regulations are simple and standard.",
      icon: <Landmark className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Tax-Efficient Yields",
      desc: "Capital gains indexation benefits and easy tax compliance structures make land plots a highly lucrative medium-to-long term wealth vessel.",
      icon: <Compass className="w-6 h-6 text-gold-500" />,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Property Selection",
      desc: "Explore our RERA-approved plotting portfolios online. Connect with our dedicated NRI representative to receive drone videos and master layouts.",
    },
    {
      step: "02",
      title: "Compliance Vetting",
      desc: "Receive copy documents (link deeds, layouts, municipal approvals) digitally for independent evaluation by your legal counsel.",
    },
    {
      step: "03",
      title: "Frictionless Booking & Funding",
      desc: "Reserve your plot. Make payments safely through your NRE/NRO or FCNR accounts using standard banking channels.",
    },
    {
      step: "04",
      title: "Registration Support",
      desc: "Complete registration during a visit, or remotely through a legally validated Power of Attorney (PoA) setup, fully assisted by our legal cell.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary-950 text-center font-sans overflow-hidden">
        <div className="absolute inset-0 bg-primary-950/85 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/sravya-2.jpeg"
            alt="NRI Investors Guide"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-20 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Global Investment Hub
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-wide leading-tight">
            NRI Real Estate Investment Guide
          </h1>
          <p className="text-sm md:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            A comprehensive, compliance-focused blueprint for non-resident Indians looking to secure high-growth land plots in Hyderabad.
          </p>
        </div>
      </section>

      {/* NRI Benefits Section */}
      <section className="py-20 bg-white font-sans border-b border-primary-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Wealth Strategy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-950">
              Why NRIs Choose Hyderabad Land
            </h2>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              Hyderabad is ranked among the fastest-growing real estate hubs in Asia. Strategic investment in land offers currency hedge and high returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-primary-900/10 hover:border-gold-300 rounded-xl shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-900/5 flex items-center justify-center text-primary-900">
                  {benefit.icon}
                </div>
                <h4 className="font-serif text-xl font-bold text-primary-950">
                  {benefit.title}
                </h4>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Structured Booking Journey */}
      <section className="py-20 bg-ivory font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Process Roadmap
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-950">
              Our 4-Step Simplified Booking Process
            </h2>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              We have designed a digitized, legal compliance-oriented journey to make remote purchases simple and safe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-primary-900/10 rounded-xl relative shadow-sm hover:shadow-md transition-all duration-300 space-y-4"
              >
                <span className="absolute top-4 right-6 font-serif text-4xl font-extrabold text-gold-500/20 leading-none">
                  {item.step}
                </span>
                <h4 className="font-serif text-lg font-bold text-primary-950 pr-8">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Compliance / FAQ block */}
      <section className="py-20 bg-white font-sans border-t border-primary-900/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-primary-950 font-serif text-2xl font-bold">
              <BookOpen size={24} className="text-gold-500" />
              <h3>Frequently Asked NRI Queries</h3>
            </div>
            
            <div className="space-y-4">
              <details className="group border border-primary-900/10 rounded-lg p-4 bg-ivory/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h5 className="font-serif font-bold text-sm text-primary-950">
                    Can an NRI purchase residential plots in Hyderabad?
                  </h5>
                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-primary-900/5 p-1.5 text-primary-900 group-open:rotate-180 transition-transform">
                    <ArrowRight size={12} className="rotate-90" />
                  </span>
                </summary>
                <p className="mt-3 text-xs text-charcoal/70 leading-relaxed border-t border-primary-900/5 pt-3">
                  Yes, under the Foreign Exchange Management Act (FEMA) and RBI guidelines, NRIs holding valid Indian passports or PIO/OCI cards can purchase any number of residential or commercial properties in India. Agricultural land, plantation property, or farmhouse purchases require prior RBI clearance.
                </p>
              </details>

              <details className="group border border-primary-900/10 rounded-lg p-4 bg-ivory/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h5 className="font-serif font-bold text-sm text-primary-950">
                    How do NRIs remit funds for plotting purchases?
                  </h5>
                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-primary-900/5 p-1.5 text-primary-900 group-open:rotate-180 transition-transform">
                    <ArrowRight size={12} className="rotate-90" />
                  </span>
                </summary>
                <p className="mt-3 text-xs text-charcoal/70 leading-relaxed border-t border-primary-900/5 pt-3">
                  Payments must be made through standard banking channels via inward remittances from abroad, or using funds maintained in Non-Resident External (NRE), Non-Resident Ordinary (NRO), or Foreign Currency Non-Resident (FCNR) accounts in India. Cash transactions are strictly illegal.
                </p>
              </details>

              <details className="group border border-primary-900/10 rounded-lg p-4 bg-ivory/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h5 className="font-serif font-bold text-sm text-primary-950">
                    Can the registration be completed without physical presence?
                  </h5>
                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-primary-900/5 p-1.5 text-primary-900 group-open:rotate-180 transition-transform">
                    <ArrowRight size={12} className="rotate-90" />
                  </span>
                </summary>
                <p className="mt-3 text-xs text-charcoal/70 leading-relaxed border-t border-primary-900/5 pt-3">
                  Yes, an NRI can execute a registered Power of Attorney (PoA) in favor of a trusted relative, friend, or legal representative in India. The PoA must be signed and attested at the nearest Indian Embassy or Consulate in your resident country, after which it is validated at the local registrar's office in Hyderabad.
                </p>
              </details>
            </div>
          </div>

          <div className="md:col-span-4 bg-primary-900 text-ivory p-6 rounded-xl border border-primary-800 space-y-4">
            <h4 className="font-serif text-lg font-bold text-gold-500 uppercase tracking-wider">
              Enquiry Helpline
            </h4>
            <p className="text-xs text-ivory/80 leading-relaxed">
              Have specific legal or transaction questions regarding NRE/NRO funding rules? Speak directly with our NRI property investment division.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-900 bg-gold-500 hover:bg-gold-400 rounded transition-all duration-300"
              >
                Request Call Back
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}
