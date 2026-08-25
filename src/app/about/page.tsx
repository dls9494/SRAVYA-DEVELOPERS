"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  UsersThree,
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

const values = [
  {
    icon: <ShieldCheck size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Integrity",
    desc: "Every document is legally vetted, RERA registered, and transparently shared with buyers from day one.",
  },
  {
    icon: <Handshake size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Trust",
    desc: "We build relationships before transactions. Our repeat buyer rate speaks to the confidence our clients have in us.",
  },
  {
    icon: <UsersThree size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Customer First",
    desc: "From inquiry to registration — we guide buyers through every step without confusion or hidden costs.",
  },
];

export default function AboutPage() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <>
      <Header />

      <main>
        {/* ── Page Hero ── */}
        <section className="relative min-h-[50dvh] flex items-center pt-20 overflow-hidden" aria-label="About page hero">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gvr-kothapally/gvr-08.jpeg"
              alt="About Sravya Global Developers"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/80 to-[#0C0C0C]/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="amber-line" />
              <h1 className="t-display text-[#F5F3EF] max-w-xl mt-4">
                About Us
              </h1>
              <p className="t-body max-w-md mt-4">
                Hyderabad's most trusted land developer — built on transparency, legal compliance, and long-term relationships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Story + Mission/Vision ── */}
        <section className="py-24 md:py-32" aria-label="Our story">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <Reveal>
                  <span className="amber-line" />
                  <h2 className="t-headline text-[#F5F3EF] mt-4">
                    Our Commitment to Excellence
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="t-body">
                    Sravya Global Developers was founded on core values of transparency, integrity, and long-term customer growth. We specialize purely in land developments — transforming suburban outskirts into thriving, master-planned residential communities.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="t-body">
                    By maintaining a strong focus on strategic location selection near proposed radial corridors, highways, and IT hubs, we ensure every square yard you buy is poised for maximum wealth appreciation.
                  </p>
                </Reveal>

                {/* Mission / Vision — vertical stack (no split header) */}
                <Reveal delay={0.2} className="pt-8 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#C8923A]/10 flex items-center justify-center">
                      <Target size={18} weight="fill" className="text-[#C8923A]" />
                    </div>
                    <h3 className="font-semibold text-[#F5F3EF]">Our Mission</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">
                      To deliver premium, legally compliant open plots that offer safe and lucrative investment channels for families and NRI buyers.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#C8923A]/10 flex items-center justify-center">
                      <Eye size={18} weight="fill" className="text-[#C8923A]" />
                    </div>
                    <h3 className="font-semibold text-[#F5F3EF]">Our Vision</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">
                      To become South India's most trusted land development brand — celebrated for clear titles, quality infrastructure, and buyer satisfaction.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Image */}
              <Reveal className="order-1 lg:order-2">
                <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden">
                  <Image
                    src="/images/gvr-kothapally/gvr-20.jpeg"
                    alt="Sravya Global land development"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Stat badge overlay */}
                  <div className="absolute bottom-6 left-6 bg-[#0C0C0C]/80 backdrop-blur-md border border-white/10 rounded-[4px] p-4 space-y-1">
                    <div className="text-2xl font-bold text-[#C8923A]">15+</div>
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/50">Years of Experience</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Core Values — 3-col cards ── */}
        <section className="py-24 md:py-32 bg-[#111111]" aria-label="Core values">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal className="max-w-lg">
              <span className="amber-line" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">The Foundations We Build On</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="card p-8 space-y-5 h-full hover:border-[#C8923A]/20 transition-colors duration-300">
                    <div className="w-11 h-11 rounded-full bg-[#C8923A]/10 flex items-center justify-center">
                      {v.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#F5F3EF]">{v.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Leadership Quote — centered editorial ── */}
        <section className="py-24 md:py-32" aria-label="Leadership message">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <Reveal>
              <span className="amber-line mx-auto" />
              <blockquote className="mt-8 text-2xl md:text-3xl font-light text-[#F5F3EF]/80 leading-[1.4] italic"
                style={{ fontFamily: "var(--font-playfair)" }}>
                "We do not merely sell plots of land. We help you secure an appreciating asset that will safeguard your family's future for generations."
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-1">
                <div className="font-semibold text-[#F5F3EF]">Peddapudi Chandrasekhar &amp; Peddapudi Sibe Rani</div>
                <div className="text-xs text-[#C8923A] font-semibold uppercase tracking-[0.12em]">Managing Partners, Sravya Global Developers</div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link href="/contact" className="btn-primary inline-flex">
                Partner With Us <ArrowRight size={15} weight="bold" />
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
