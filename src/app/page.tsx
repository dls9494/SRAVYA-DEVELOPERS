"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  MapTrifold,
  CurrencyInr,
  Buildings,
  CheckCircle,
  Star,
  PhoneCall,
  Compass,
  HouseLine,
  Mountains,
  Tree,
  ChartBar,
  Ruler,
  Blueprint,
} from "@phosphor-icons/react";
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
    icon: <Blueprint size={24} weight="duotone" className="text-[#D4A847]" />,
    title: "Layout Designs & Approvals",
    desc: "Expert preparation and approval of residential & commercial layout plans with regulatory authorities.",
  },
  {
    icon: <Buildings size={24} weight="duotone" className="text-[#D4A847]" />,
    title: "Layout Developments",
    desc: "End-to-end layout development with HMDA, FCDA & DTCP compliance and infrastructure execution.",
  },
  {
    icon: <Mountains size={24} weight="duotone" className="text-[#D4A847]" />,
    title: "Earth Work",
    desc: "Land grading, leveling, excavation, and ground preparation for development-ready sites.",
  },
  {
    icon: <Tree size={24} weight="duotone" className="text-[#D4A847]" />,
    title: "Landscaping",
    desc: "Green space design, avenue plantations, park development, and eco-friendly site beautification.",
  },
  {
    icon: <HouseLine size={24} weight="duotone" className="text-[#D4A847]" />,
    title: "Building Plans",
    desc: "Architectural and structural planning for residential, commercial, and institutional projects.",
  },
  {
    icon: <Compass size={24} weight="duotone" className="text-[#D4A847]" />,
    title: "Land Survey",
    desc: "Precision boundary surveys, topographic mapping, and land measurement services.",
  },
  {
    icon: <ChartBar size={24} weight="duotone" className="text-[#D4A847]" />,
    title: "Quantity Surveys",
    desc: "Detailed cost estimation, BOQ preparation, and resource planning for construction projects.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "240+", label: "Plots Delivered" },
  { value: "7", label: "Core Services" },
  { value: "100%", label: "Legal Compliance" },
];

const reasons = [
  {
    icon: <ShieldCheck size={22} weight="fill" className="text-[#D4A847]" />,
    title: "RERA Approved",
    desc: "All ventures are RERA registered, ensuring full legal compliance and buyer protection.",
  },
  {
    icon: <MapTrifold size={22} weight="fill" className="text-[#D4A847]" />,
    title: "Strategic Locations",
    desc: "Plots in high-growth corridors with direct connectivity to Hyderabad's major hubs.",
  },
  {
    icon: <CurrencyInr size={22} weight="fill" className="text-[#D4A847]" />,
    title: "Wealth Multiplication",
    desc: "Land appreciates while apartments depreciate. Open plots deliver superior ROI.",
  },
  {
    icon: <Buildings size={22} weight="fill" className="text-[#D4A847]" />,
    title: "Clear Title Status",
    desc: "HMDA/DTCP approved layouts with transparent title chains and documentation.",
  },
];

const comparison = [
  { metric: "Ownership", plots: "Complete Land & Airspace", flats: "Fractional UDS only" },
  { metric: "Depreciation", plots: "Zero — land always grows", flats: "High structural depreciation" },
  { metric: "Flexibility", plots: "Build your dream villa", flats: "Fixed builder layout" },
  { metric: "Entry Capital", plots: "Lower — higher leverage", flats: "Heavy upfront + maintenance" },
  { metric: "Resale Value", plots: "High liquidity, rising demand", flats: "Slow, dependent on market" },
];

const testimonials = [
  {
    quote:
      "Sravya's team walked us through everything — documentation, site visits, payment plans. We invested in GVR Kothapally and haven't looked back.",
    name: "Suresh Reddy",
    role: "Investor, Hyderabad",
  },
  {
    quote:
      "Transparent pricing, clean legal documentation, and a team that actually answers the phone. Rare in real estate today.",
    name: "Kavitha Naidu",
    role: "Plot Owner, Kothapally",
  },
  {
    quote:
      "As an NRI, I needed someone I could trust completely. Sravya managed everything end-to-end from documentation to site development updates.",
    name: "Ravi Kumar",
    role: "NRI Investor, Dubai",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <Header />

      <main>
        {/* ──────────────────────────────────────
            HERO — Business Card Style with Globe Logo
            ────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-[100dvh] flex items-center overflow-hidden"
          aria-label="Hero"
        >
          {/* Background image with parallax */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ scale: heroScale }}
          >
            <Image
              src="/images/gvr-kothapally/gvr-05.jpeg"
              alt="GVR Kothapally aerial view"
              fill
              preload
              className="object-cover"
              sizes="100vw"
            />
            {/* Deep gradient overlay — card-style dark */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/80 to-[#0C0C0C]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/70 via-transparent to-transparent" />
          </motion.div>

          {/* Hero content */}
          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full"
            style={{ opacity: heroOpacity }}
          >
            <div className="max-w-3xl space-y-8">
              {/* Globe logo + Company name — matching business card top half */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-5"
              >
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0">
                  <Image
                    src="/images/logo-v4.png"
                    alt="Sravya Global Developers"
                    fill
                    className="object-contain"
                    preload
                  />
                </div>
                <div>
                  <h2
                    className="text-[#D4A847] text-lg sm:text-xl tracking-[0.2em] uppercase font-medium"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Sravya Global
                  </h2>
                  <p className="text-[#D4A847]/70 text-xs sm:text-sm tracking-[0.35em] uppercase mt-0.5">
                    Developers
                  </p>
                </div>
              </motion.div>

              {/* Display headline */}
              <motion.h1
                className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#F5F3EF]"
                style={{ fontFamily: "var(--font-playfair)" }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                Building Trust.{" "}
                <span className="text-[#D4A847] italic">Creating</span>
                <br />
                Landmarks.
              </motion.h1>

              {/* Services tagline — matching business card */}
              <motion.p
                className="text-sm sm:text-base text-[#F5F3EF]/55 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Layout Designs & Approvals · Layout Developments — HMDA, FCDA & DTCP ·
                Earth Work · Landscaping · Building Plans · Land Survey · Quantity Surveys
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/services" className="btn-primary">
                  Our Services <ArrowRight size={15} weight="bold" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Enquire Now
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom stat bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#D4A847]/20 bg-[#0C0C0C]/80 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D4A847]/15">
                {stats.map((s) => (
                  <div key={s.label} className="px-6 py-5 text-center">
                    <div className="text-2xl font-bold text-[#D4A847] tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#F5F3EF]/40 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Gold Divider ── */}
        <div className="gold-divider" />

        {/* ──────────────────────────────────────
            SERVICES OVERVIEW — 7-card grid
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#111111]" aria-label="Our Services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="amber-line mx-auto" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">
                Our Services
              </h2>
              <p className="t-body text-center">
                From concept to completion — comprehensive land development, civil engineering, and survey services across Telangana.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="service-card space-y-4 h-full">
                    <div className="w-12 h-12 rounded-full bg-[#D4A847]/10 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <h3 className="text-base font-semibold text-[#F5F3EF]">{s.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#D4A847] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                Explore All Services <ArrowUpRight size={16} weight="bold" />
              </Link>
            </Reveal>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ──────────────────────────────────────
            ABOUT STRIP — Who We Are
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32" aria-label="About Sravya">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image mosaic */}
              <Reveal className="grid grid-cols-2 grid-rows-2 gap-3 h-[480px]">
                <div className="relative rounded-[4px] overflow-hidden row-span-2 border border-[#D4A847]/20">
                  <Image src="/images/gvr-kothapally/gvr-07.jpeg" alt="GVR Kothapally site" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative rounded-[4px] overflow-hidden border border-[#D4A847]/20">
                  <Image src="/images/gvr-kothapally/gvr-12.jpeg" alt="Premium plots layout" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative rounded-[4px] overflow-hidden border border-[#D4A847]/20">
                  <Image src="/images/gvr-kothapally/gvr-18.jpeg" alt="Green landscaping" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </Reveal>

              {/* Copy */}
              <div className="space-y-8">
                <Reveal>
                  <span className="amber-line" />
                  <h2 className="t-headline text-[#F5F3EF] mt-4">
                    Hyderabad's Most Trusted Land Developer
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="t-body">
                    Sravya Global Developers has built a reputation on one simple principle — putting the client first. Led by P.C. Sekhar (Managing Partner), we deliver comprehensive land development services from layout approvals to quantity surveys.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="t-body">
                    Every project we undertake is RERA registered, legally vetted, and executed with precision. Our flagship venture, GVR Kothapally, sits on the high-growth Chevella-Vikarabad corridor.
                  </p>
                </Reveal>

                {/* Managing Partner callout */}
                <Reveal delay={0.2}>
                  <div className="card-static p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4A847]/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4A847] font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>PC</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#F5F3EF]">P.C. Sekhar</div>
                      <div className="text-xs text-[#D4A847] font-semibold uppercase tracking-[0.12em]">Managing Partner</div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.25}>
                  <Link href="/about" className="inline-flex items-center gap-2 text-[#D4A847] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-200">
                    About Us <ArrowUpRight size={16} weight="bold" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ──────────────────────────────────────
            PROJECT SHOWCASE — GVR Kothapally
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32" aria-label="Our project">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <Reveal className="text-center space-y-3 max-w-xl mx-auto">
              <span className="amber-line mx-auto" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">GVR Kothapally</h2>
              <p className="t-body text-center">
                Our ongoing flagship venture — 240 premium villa plots across 20 acres near Chevella.
              </p>
            </Reveal>

            {/* Big feature card */}
            <Reveal>
              <Link
                href="/projects/gvr-kothapally"
                className="group block relative rounded-[4px] overflow-hidden aspect-[16/7] bg-[#1A1A1A] border border-[#D4A847]/20 hover:border-[#D4A847]/50 transition-colors duration-300"
                aria-label="View GVR Kothapally project details"
              >
                <Image
                  src="/images/gvr-kothapally/gvr-03.jpeg"
                  alt="GVR Kothapally overview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-[#0C0C0C]/30 to-transparent" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-end justify-between gap-6">
                  <div className="space-y-2">
                    <span className="glow-badge">Ongoing</span>
                    <h3 className="text-2xl md:text-4xl font-bold text-[#F5F3EF] tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                      GVR Kothapally
                    </h3>
                    <p className="text-[#F5F3EF]/60 text-sm">
                      Chevella — Vikarabad Road, Hyderabad · From ₹25 Lakhs
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4A847] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight size={20} weight="bold" className="text-[#0C0C0C]" />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* 3-col quick-fact bento */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Total Area", val: "20 Acres" },
                { label: "Total Plots", val: "240 Units" },
                { label: "Plot Sizes", val: "150 – 400 Sq.Yds" },
              ].map(({ label, val }) => (
                <Reveal key={label}>
                  <div className="stat-chip">
                    <span className="t-caption text-[#D4A847]">{label}</span>
                    <span className="text-xl font-bold text-[#F5F3EF] tracking-tight">{val}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ──────────────────────────────────────
            WHY OPEN PLOTS — 4-col icon grid
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#111111]" aria-label="Why invest in open plots">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal className="max-w-lg">
              <span className="amber-line" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">
                Why Open Plots Outperform Apartments
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.07}>
                  <div className="card p-6 space-y-4 h-full">
                    <div className="w-10 h-10 rounded-full bg-[#D4A847]/10 flex items-center justify-center">
                      {r.icon}
                    </div>
                    <h3 className="t-title text-[#F5F3EF]">{r.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Comparison table */}
            <Reveal delay={0.1}>
              <div className="card overflow-hidden">
                <div className="grid grid-cols-3 gap-0 text-xs font-semibold uppercase tracking-[0.1em] border-b border-[#D4A847]/15 px-6 py-4 bg-[#1A1A1A]">
                  <span className="text-[#F5F3EF]/40">Metric</span>
                  <span className="text-[#D4A847]">Sravya Open Plots</span>
                  <span className="text-[#F5F3EF]/40">Apartments</span>
                </div>
                <div className="divide-y divide-[#D4A847]/[0.08]">
                  {comparison.map((row, i) => (
                    <div key={row.metric} className={`grid grid-cols-3 gap-0 px-6 py-4 ${i % 2 === 0 ? "bg-transparent" : "bg-[#1A1A1A]/50"}`}>
                      <span className="text-sm font-medium text-[#F5F3EF]/50">{row.metric}</span>
                      <span className="text-sm font-semibold text-[#D4A847]">{row.plots}</span>
                      <span className="text-sm text-[#F5F3EF]/35">{row.flats}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ──────────────────────────────────────
            GALLERY STRIP
            ────────────────────────────────────── */}
        <section className="py-24 overflow-hidden" aria-label="Site gallery">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <Reveal className="flex items-end justify-between gap-4">
              <h2 className="t-headline text-[#F5F3EF] max-w-sm">
                Site Gallery
              </h2>
              <Link href="/projects/gvr-kothapally" className="inline-flex items-center gap-2 text-[#D4A847] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-200 flex-shrink-0">
                View All <ArrowRight size={15} weight="bold" />
              </Link>
            </Reveal>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {[6, 9, 14, 17, 22, 27, 31, 35].map((n) => (
                <div
                  key={n}
                  className="flex-none w-72 h-52 relative rounded-[4px] overflow-hidden snap-start border border-[#D4A847]/15"
                >
                  <Image
                    src={`/images/gvr-kothapally/gvr-${String(n).padStart(2, "0")}.jpeg`}
                    alt={`GVR Kothapally site photo ${n}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="288px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ──────────────────────────────────────
            TESTIMONIALS
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#111111]" aria-label="Customer testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <Reveal className="max-w-lg">
              <span className="amber-line" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">
                Trusted by Investors Across India
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <div className="card p-7 space-y-5 flex flex-col h-full">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, k) => (
                        <Star key={k} size={14} weight="fill" className="text-[#D4A847]" />
                      ))}
                    </div>
                    <p className="text-[#F5F3EF]/70 text-sm leading-relaxed flex-1 line-clamp-4 italic" style={{ fontFamily: "var(--font-playfair)" }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="pt-2 border-t border-[#D4A847]/15">
                      <div className="font-semibold text-sm text-[#F5F3EF]">{t.name}</div>
                      <div className="text-xs text-[#F5F3EF]/40 mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ──────────────────────────────────────
            CTA — Contact
            ────────────────────────────────────── */}
        <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Contact call to action">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gvr-kothapally/gvr-15.jpeg"
              alt="Premium plots background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#0C0C0C]/88" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <Reveal>
              <span className="amber-line mx-auto" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">
                Partner With Sravya Global
              </h2>
              <p className="t-body text-center mt-4 max-w-lg mx-auto">
                Whether you need layout approvals, land development, or investment opportunities — our team is ready to guide you through every step.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get In Touch <ArrowRight size={15} weight="bold" />
              </Link>
              <a href="tel:+919949736082" className="btn-ghost">
                <PhoneCall size={15} weight="fill" /> Call P.C. Sekhar
              </a>
            </Reveal>

            {/* Reassurance chips */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["RERA Approved", "Clear Title", "15+ Years Experience", "Free Consultation"].map((chip) => (
                  <div key={chip} className="flex items-center gap-1.5 text-xs text-[#F5F3EF]/50">
                    <CheckCircle size={12} weight="fill" className="text-[#D4A847]" />
                    {chip}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
