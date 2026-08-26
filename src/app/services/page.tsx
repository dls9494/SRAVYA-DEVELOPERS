"use client";

import { motion } from "motion/react";
import {
  FileMagnifyingGlass,
  Buildings,
  Mountains,
  Tree,
  HouseLine,
  MapTrifold,
  Calculator,
  ArrowRight,
  PhoneCall,
} from "@phosphor-icons/react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── fade-up reveal helper ── */
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    title: "Layout Designs & Approvals",
    desc: "Comprehensive preparation and regulatory approval processing for residential and commercial layouts.",
    icon: <FileMagnifyingGlass size={32} weight="fill" className="text-[#D4A847]" />,
  },
  {
    title: "Layout Developments — HMDA, FCDA & DTCP",
    desc: "End-to-end development of approved layouts with strict adherence to regulatory compliance and quality standards.",
    icon: <Buildings size={32} weight="fill" className="text-[#D4A847]" />,
  },
  {
    title: "Earth Work",
    desc: "Professional land leveling, grading, and excavation services to prepare sites for development.",
    icon: <Mountains size={32} weight="fill" className="text-[#D4A847]" />,
  },
  {
    title: "Landscaping",
    desc: "Designing and executing beautiful green spaces, avenue plantations, and sustainable environments.",
    icon: <Tree size={32} weight="fill" className="text-[#D4A847]" />,
  },
  {
    title: "Building Plans",
    desc: "Expert architectural planning and robust structural designs tailored to your specific requirements.",
    icon: <HouseLine size={32} weight="fill" className="text-[#D4A847]" />,
  },
  {
    title: "Land Survey",
    desc: "Accurate boundary surveys and detailed topographic mapping using advanced equipment.",
    icon: <MapTrifold size={32} weight="fill" className="text-[#D4A847]" />,
  },
  {
    title: "Quantity Surveys",
    desc: "Precise cost estimation and comprehensive Bill of Quantities (BOQ) preparation for construction projects.",
    icon: <Calculator size={32} weight="fill" className="text-[#D4A847]" />,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#0C0C0C] min-h-screen text-[#F5F3EF]">
        {/* ──────────────────────────────────────
            HERO SECTION
            ────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#0C0C0C]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <Reveal>
              <span className="amber-line mx-auto" />
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 
                className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F3EF]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Our Services
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="max-w-2xl mx-auto text-[#F5F3EF]/70 text-lg md:text-xl leading-relaxed">
                From precision land surveys and layout designs to full-scale development and landscaping, we provide a complete suite of services to bring your vision to life.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="section-divider" />

        {/* ──────────────────────────────────────
            SERVICES GRID
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.1}>
                  <div className="service-card group bg-[#1A1A1A] rounded-[4px] p-8 h-full border border-white/5 hover:border-[#D4A847]/30 transition-all duration-300 flex flex-col space-y-6 relative overflow-hidden">
                    {/* Hover subtle glow */}
                    <div className="absolute -inset-px bg-gradient-to-br from-[#D4A847]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[4px] pointer-events-none" />
                    
                    <div className="w-16 h-16 rounded-full bg-[#D4A847]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    
                    <div className="space-y-3 flex-1 relative z-10">
                      <h3 
                        className="text-xl font-semibold text-[#F5F3EF]"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#F5F3EF]/60 leading-relaxed text-sm md:text-base">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ──────────────────────────────────────
            CTA SECTION
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#0C0C0C] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none flex justify-center items-center">
             <div className="w-[800px] h-[800px] bg-[#D4A847] rounded-full blur-[120px] opacity-10" />
          </div>
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            <Reveal>
              <span className="amber-line mx-auto" />
              <h2 
                className="text-3xl md:text-5xl font-bold text-[#F5F3EF] mt-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Partner With Sravya Global
              </h2>
              <p className="mt-6 text-[#F5F3EF]/70 text-lg leading-relaxed max-w-xl mx-auto">
                Ready to start your next project? Our experts are here to provide comprehensive solutions tailored to your needs.
              </p>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="btn-primary">
                  Contact Us <ArrowRight size={15} weight="bold" />
                </Link>
                <a href="tel:+919949736082" className="btn-ghost">
                  <PhoneCall size={15} weight="fill" /> +91 99497 36082
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
