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
    icon: <FileMagnifyingGlass size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Legally Vetted Titles Only",
    desc: "We perform exhaustive legal verification through corporate lawyers before acquisition. A complete legal dossier is shared with every buyer.",
  },
  {
    icon: <CheckSquareOffset size={22} weight="fill" className="text-[#C8923A]" />,
    title: "HMDA & DTCP Approved",
    desc: "Every venture matches zoning guidelines — wide layouts, park provisions, and proper civic setbacks. No compromise on approvals.",
  },
  {
    icon: <MapPin size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Strategic Growth Locations",
    desc: "We prioritize areas on future transit grids (Regional Ring Road, ORR, highway expansions) to guarantee early-stage investor gains.",
  },
  {
    icon: <Wrench size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Premium Civic Amenities",
    desc: "Underground cabling, blacktop roads, overhead tanks, water connections, rainwater recharge, and landscaped parks — all included.",
  },
  {
    icon: <Compass size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Vaastu-Compliant Layouts",
    desc: "Every plot is scientifically designed per Vaastu principles for perfect alignment and positive energy flow.",
  },
  {
    icon: <HandHeart size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Transparent Post-Sale Support",
    desc: "From registration through boundary marking and link document sourcing — we guide you completely, with zero hidden steps.",
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
              <h1 className="t-display text-[#F5F3EF] max-w-lg mt-4">
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
              <h2 className="t-headline text-[#F5F3EF] mt-4">
                What Sets Us Apart
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="card p-7 space-y-5 h-full hover:border-[#C8923A]/20 transition-colors duration-300 group">
                    <div className="w-11 h-11 rounded-full bg-[#C8923A]/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#C8923A]/20">
                      {p.icon}
                    </div>
                    <h3 className="font-bold text-[#F5F3EF] leading-snug">{p.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Visual proof strip — 4-image row ── */}
        <section className="py-24 bg-[#111111]" aria-label="Site images">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <Reveal className="text-center">
              <h2 className="t-headline text-[#F5F3EF]">On the Ground</h2>
              <p className="t-body text-center mt-3 max-w-lg mx-auto">
                Real development, real progress — GVR Kothapally site photographs.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[11, 19, 29, 37].map((n) => (
                <Reveal key={n} delay={(n % 4) * 0.07}>
                  <div className="relative aspect-square rounded-[4px] overflow-hidden">
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

        <div className="section-divider" />

        {/* ── CTA ── */}
        <section className="py-24 text-center" aria-label="Contact call to action">
          <div className="max-w-2xl mx-auto px-4 space-y-8">
            <Reveal>
              <span className="amber-line mx-auto" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">Ready to Invest?</h2>
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
