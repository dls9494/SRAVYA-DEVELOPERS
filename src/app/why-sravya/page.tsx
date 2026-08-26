"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FileMagnifyingGlass,
  CheckSquareOffset,
  MapPin,
  Wrench,
  Compass,
  HandHeart,
  ArrowRight,
  Blueprint,
  Tree,
  Mountains,
  Buildings,
  Path,
  Calculator,
  Gavel
} from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    icon: <FileMagnifyingGlass size={22} weight="fill" className="text-[#D4A847]" />,
    title: "Legally Vetted Titles Only",
    desc: "We perform exhaustive legal verification through corporate lawyers before acquisition. A complete legal dossier is shared with every buyer.",
  },
  {
    icon: <CheckSquareOffset size={22} weight="fill" className="text-[#D4A847]" />,
    title: "HMDA & DTCP Approved",
    desc: "Every venture matches zoning guidelines — wide layouts, park provisions, and proper civic setbacks. No compromise on approvals.",
  },
  {
    icon: <MapPin size={22} weight="fill" className="text-[#D4A847]" />,
    title: "Strategic Growth Locations",
    desc: "We prioritize areas on future transit grids (Regional Ring Road, ORR, highway expansions) to guarantee early-stage investor gains.",
  },
  {
    icon: <Wrench size={22} weight="fill" className="text-[#D4A847]" />,
    title: "Premium Civic Amenities",
    desc: "Underground cabling, blacktop roads, overhead tanks, water connections, rainwater recharge, and landscaped parks — all included.",
  },
  {
    icon: <Compass size={22} weight="fill" className="text-[#D4A847]" />,
    title: "Vaastu-Compliant Layouts",
    desc: "Every plot is scientifically designed per Vaastu principles for perfect alignment and positive energy flow.",
  },
  {
    icon: <HandHeart size={22} weight="fill" className="text-[#D4A847]" />,
    title: "Transparent Post-Sale Support",
    desc: "From registration through boundary marking and link document sourcing — we guide you completely, with zero hidden steps.",
  },
];

const services = [
  {
    icon: <Blueprint size={24} weight="regular" className="text-[#D4A847]" />,
    title: "Layout Designs & Approvals",
    desc: "Expert conceptualization and regulatory navigation to secure all necessary layout approvals.",
  },
  {
    icon: <Gavel size={24} weight="regular" className="text-[#D4A847]" />,
    title: "Layout Developments",
    desc: "End-to-end execution of HMDA, FCDA & DTCP approved layout developments.",
  },
  {
    icon: <Mountains size={24} weight="regular" className="text-[#D4A847]" />,
    title: "Earth Work",
    desc: "Comprehensive terrain leveling, grading, and foundation preparation.",
  },
  {
    icon: <Tree size={24} weight="regular" className="text-[#D4A847]" />,
    title: "Landscaping",
    desc: "Designing and implementing sustainable, aesthetically pleasing green spaces.",
  },
  {
    icon: <Buildings size={24} weight="regular" className="text-[#D4A847]" />,
    title: "Building Plans",
    desc: "Architectural and structural planning compliant with local building codes.",
  },
  {
    icon: <Path size={24} weight="regular" className="text-[#D4A847]" />,
    title: "Land Survey",
    desc: "Precision boundary, topographic, and construction surveying services.",
  },
  {
    icon: <Calculator size={24} weight="regular" className="text-[#D4A847]" />,
    title: "Quantity Surveys",
    desc: "Accurate cost estimation and material management for development projects.",
  },
];

export default function WhySravyaPage() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <>
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[45dvh] flex items-center pt-20 overflow-hidden" aria-label="Why Sravya hero">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gvr-kothapally/gvr-25.jpeg"
              alt="Why choose Sravya"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/75 to-[#0C0C0C]/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="amber-line" />
              <h1 className="t-display text-[#F5F3EF] max-w-lg mt-4 font-[family-name:var(--font-playfair)]">
                Why Choose Sravya?
              </h1>
              <p className="t-body max-w-md mt-4">
                Six pillars that separate premium land development from ordinary real estate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 6-pillar grid ── */}
        <section className="py-24 md:py-32" aria-label="Our pillars">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal className="max-w-xl">
              <span className="amber-line" />
              <h2 className="t-headline text-[#F5F3EF] mt-4 font-[family-name:var(--font-playfair)]">
                What Sets Us Apart
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="card p-7 space-y-5 h-full border border-[#D4A847]/20 hover:border-[#D4A847]/40 transition-colors duration-300 group rounded-[4px] bg-[#1A1A1A]">
                    <div className="w-11 h-11 rounded-full bg-[#D4A847]/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#D4A847]/20">
                      {p.icon}
                    </div>
                    <h3 className="font-bold text-[#F5F3EF] leading-snug font-[family-name:var(--font-playfair)] tracking-wide">{p.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed font-[family-name:var(--font-geist)]">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ── Comprehensive Services ── */}
        <section className="py-24 md:py-32 bg-[#111111]" aria-label="Our Services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal className="max-w-2xl">
              <span className="amber-line" />
              <h2 className="t-headline text-[#F5F3EF] mt-4 font-[family-name:var(--font-playfair)]">
                Comprehensive Expertise
              </h2>
              <p className="t-body mt-4">
                Beyond acquiring premium land, our capabilities span the entire development lifecycle. We provide end-to-end services ensuring quality, compliance, and rapid execution.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div className="p-6 h-full border border-[#D4A847]/20 hover:border-[#D4A847]/40 transition-colors duration-300 rounded-[4px] bg-[#0C0C0C] space-y-4">
                    <div className="mb-2">
                      {s.icon}
                    </div>
                    <h3 className="font-semibold text-[#F5F3EF] text-lg font-[family-name:var(--font-playfair)]">{s.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/50 font-[family-name:var(--font-geist)]">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ── Visual proof strip — 4-image row ── */}
        <section className="py-24" aria-label="Site images">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <Reveal className="text-center">
              <h2 className="t-headline text-[#F5F3EF] font-[family-name:var(--font-playfair)]">On the Ground</h2>
              <p className="t-body text-center mt-3 max-w-lg mx-auto">
                Real development, real progress — GVR Kothapally site photographs.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[11, 19, 29, 37].map((n) => (
                <Reveal key={n} delay={(n % 4) * 0.07}>
                  <div className="relative aspect-square rounded-[4px] overflow-hidden border border-[#D4A847]/20">
                    <Image
                      src={`/images/gvr-kothapally/gvr-${String(n).padStart(2, "0")}.jpeg`}
                      alt={`GVR Kothapally site photo`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ── CTA ── */}
        <section className="py-24 text-center bg-[#111111]" aria-label="Contact call to action">
          <div className="max-w-2xl mx-auto px-4 space-y-8">
            <Reveal>
              <span className="amber-line mx-auto" />
              <h2 className="t-headline text-[#F5F3EF] mt-4 font-[family-name:var(--font-playfair)]">Ready to Invest?</h2>
              <p className="t-body text-center mt-4 max-w-md mx-auto">
                Speak with our team today. We'll walk you through site details, legal documents, and pricing.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Site Visit <ArrowRight size={15} weight="bold" />
              </Link>
              <Link href="/projects/gvr-kothapally" className="btn-ghost">
                View Project
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}
