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

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "240", label: "Plots Launched" },
  { value: "₹25L", label: "Starting Price" },
  { value: "20 Ac", label: "Total Area" },
];

const reasons = [
  {
    icon: <ShieldCheck size={22} weight="fill" className="text-[#C8923A]" />,
    title: "RERA Approved",
    desc: "All ventures are RERA registered, ensuring full legal compliance and buyer protection.",
  },
  {
    icon: <MapTrifold size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Strategic Locations",
    desc: "Plots in high-growth corridors with direct connectivity to Hyderabad's major hubs.",
  },
  {
    icon: <CurrencyInr size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Wealth Multiplication",
    desc: "Land appreciates while apartments depreciate. Open plots deliver superior ROI.",
  },
  {
    icon: <Buildings size={22} weight="fill" className="text-[#C8923A]" />,
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
            HERO — Full-viewport cinematic split
            Left: copy + CTAs | Right: real site image
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
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Deep gradient overlay — left-to-right so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/70 to-[#0C0C0C]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-transparent to-transparent" />
          </motion.div>

          {/* Hero content */}
          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full"
            style={{ opacity: heroOpacity }}
          >
            <div className="max-w-2xl space-y-7">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="glow-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8923A] animate-pulse" />
                  Now Selling — GVR Kothapally
                </span>
              </motion.div>

              {/* Display headline */}
              <motion.h1
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.0] tracking-[-0.03em] text-[#F5F3EF]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Build Wealth{" "}
                <span className="text-[#C8923A] italic" style={{ fontFamily: "var(--font-playfair)" }}>
                  on Land
                </span>
                <br />
                That Endures
              </motion.h1>

              {/* Subtext — max 20 words */}
              <motion.p
                className="text-base text-[#F5F3EF]/65 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Premium villa plots in Hyderabad's fastest-growing corridor. RERA approved. Starting ₹25 Lakhs.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/projects/gvr-kothapally" className="btn-primary">
                  View Project <ArrowRight size={15} weight="bold" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Enquire Now
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom stat bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5 bg-[#0C0C0C]/80 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {stats.map((s) => (
                  <div key={s.label} className="px-6 py-5 text-center">
                    <div className="text-2xl font-bold text-[#C8923A] tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[#F5F3EF]/40 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ──────────────────────────────────────
            ABOUT STRIP — asymmetric split
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32" aria-label="About Sravya">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image mosaic */}
              <Reveal className="grid grid-cols-2 grid-rows-2 gap-3 h-[480px]">
                <div className="relative rounded-[4px] overflow-hidden row-span-2">
                  <Image src="/images/gvr-kothapally/gvr-07.jpeg" alt="GVR Kothapally site" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative rounded-[4px] overflow-hidden">
                  <Image src="/images/gvr-kothapally/gvr-12.jpeg" alt="Premium plots layout" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative rounded-[4px] overflow-hidden">
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
                    Sravya Global Developers has built a reputation on one simple principle — putting the buyer first. Every plot we develop is RERA registered, legally vetted, and designed to appreciate in value over time.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="t-body">
                    Our flagship venture, GVR Kothapally, sits on the high-growth Chevella-Vikarabad corridor — one of Hyderabad's fastest appreciating real estate zones.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <Link href="/about" className="inline-flex items-center gap-2 text-[#C8923A] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-200">
                    About Us <ArrowUpRight size={16} weight="bold" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ──────────────────────────────────────
            PROJECT SHOWCASE — full-width feature card
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32" aria-label="Our project">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <Reveal className="text-center space-y-3 max-w-xl mx-auto">
              <h2 className="t-headline text-[#F5F3EF]">GVR Kothapally</h2>
              <p className="t-body text-center">
                Our ongoing flagship venture — 240 premium villa plots across 20 acres near Chevella.
              </p>
            </Reveal>

            {/* Big feature card */}
            <Reveal>
              <Link
                href="/projects/gvr-kothapally"
                className="group block relative rounded-[4px] overflow-hidden aspect-[16/7] bg-[#1A1A1A]"
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
                    <h3 className="text-2xl md:text-4xl font-bold text-[#F5F3EF] tracking-tight">
                      GVR Kothapally
                    </h3>
                    <p className="text-[#F5F3EF]/60 text-sm">
                      Chevella — Vikarabad Road, Hyderabad · From ₹25 Lakhs
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C8923A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
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
                    <span className="t-caption text-[#C8923A]">{label}</span>
                    <span className="text-xl font-bold text-[#F5F3EF] tracking-tight">{val}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ──────────────────────────────────────
            WHY OPEN PLOTS — 4-col icon feature grid
            (different layout from above — no zigzag)
            ────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#111111]" aria-label="Why invest in open plots">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal className="max-w-lg">
              <span className="amber-line" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">
                Why Open Plots Outperform Apartments
              </h2>
            </Reveal>

            {/* 4-col feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.07}>
                  <div className="card p-6 space-y-4 hover:border-[#C8923A]/20 transition-colors duration-300 h-full">
                    <div className="w-10 h-10 rounded-full bg-[#C8923A]/10 flex items-center justify-center">
                      {r.icon}
                    </div>
                    <h3 className="t-title text-[#F5F3EF]">{r.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Comparison table — 5 rows, no `border-b on every row` */}
            <Reveal delay={0.1}>
              <div className="card overflow-hidden">
                <div className="grid grid-cols-3 gap-0 text-xs font-semibold uppercase tracking-[0.1em] border-b border-white/5 px-6 py-4 bg-[#1A1A1A]">
                  <span className="text-[#F5F3EF]/40">Metric</span>
                  <span className="text-[#C8923A]">Sravya Open Plots</span>
                  <span className="text-[#F5F3EF]/40">Apartments</span>
                </div>
                <div className="divide-y divide-white/[0.04]">
                  {comparison.map((row, i) => (
                    <div key={row.metric} className={`grid grid-cols-3 gap-0 px-6 py-4 ${i % 2 === 0 ? "bg-transparent" : "bg-[#1A1A1A]/50"}`}>
                      <span className="text-sm font-medium text-[#F5F3EF]/50">{row.metric}</span>
                      <span className="text-sm font-semibold text-[#C8923A]">{row.plots}</span>
                      <span className="text-sm text-[#F5F3EF]/35">{row.flats}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="section-divider" />

        {/* ──────────────────────────────────────
            GALLERY STRIP — horizontal scroll
            ────────────────────────────────────── */}
        <section className="py-24 overflow-hidden" aria-label="Site gallery">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <Reveal className="flex items-end justify-between gap-4">
              <h2 className="t-headline text-[#F5F3EF] max-w-sm">
                Site Gallery
              </h2>
              <Link href="/projects/gvr-kothapally" className="inline-flex items-center gap-2 text-[#C8923A] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-200 flex-shrink-0">
                View All <ArrowRight size={15} weight="bold" />
              </Link>
            </Reveal>

            {/* Scroll container */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {[6, 9, 14, 17, 22, 27, 31, 35].map((n) => (
                <div
                  key={n}
                  className="flex-none w-72 h-52 relative rounded-[4px] overflow-hidden snap-start"
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

        <div className="section-divider" />

        {/* ──────────────────────────────────────
            TESTIMONIALS — 3-col card grid
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
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, k) => (
                        <Star key={k} size={14} weight="fill" className="text-[#C8923A]" />
                      ))}
                    </div>
                    {/* Quote — max 3 lines */}
                    <p className="text-[#F5F3EF]/70 text-sm leading-relaxed flex-1 line-clamp-4">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    {/* Attribution */}
                    <div className="pt-2 border-t border-white/5">
                      <div className="font-semibold text-sm text-[#F5F3EF]">{t.name}</div>
                      <div className="text-xs text-[#F5F3EF]/40 mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ──────────────────────────────────────
            CTA — full-width with real image bg
            ────────────────────────────────────── */}
        <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Contact call to action">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gvr-kothapally/gvr-15.jpeg"
              alt="Premium plots background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#0C0C0C]/85" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <Reveal>
              <span className="amber-line mx-auto" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">
                Secure Your Plot Today
              </h2>
              <p className="t-body text-center mt-4 max-w-lg mx-auto">
                Limited plots available. Our team will guide you through the entire buying process — from site visit to registration.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Site Visit <ArrowRight size={15} weight="bold" />
              </Link>
              <a href="tel:+919949736082" className="btn-ghost">
                <PhoneCall size={15} weight="fill" /> Call Us Now
              </a>
            </Reveal>

            {/* Reassurance chips */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["RERA Approved", "Clear Title", "No Hidden Charges", "Free Site Visit"].map((chip) => (
                  <div key={chip} className="flex items-center gap-1.5 text-xs text-[#F5F3EF]/50">
                    <CheckCircle size={12} weight="fill" className="text-[#C8923A]" />
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
