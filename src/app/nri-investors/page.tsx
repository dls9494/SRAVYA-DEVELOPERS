"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  CurrencyDollar,
  Scales,
  TrendUp,
  FileText,
  Handshake,
  Certificate,
  ArrowRight,
  CaretDown,
  PhoneCall,
  CheckCircle,
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

const benefits = [
  {
    icon: <CurrencyDollar size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Currency Advantage",
    desc: "Foreign currency strength against the Indian Rupee gives NRIs significantly lower entry costs on premium land compared to domestic buyers.",
  },
  {
    icon: <Scales size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Simplified FEMA Norms",
    desc: "Under RBI guidelines, NRIs hold the same residential property rights as residents. FEMA regulations are straightforward and well-established.",
  },
  {
    icon: <TrendUp size={22} weight="fill" className="text-[#C8923A]" />,
    title: "Tax-Efficient Yields",
    desc: "Capital gains indexation benefits and easy tax compliance structures make open plots a highly lucrative medium-to-long term wealth vehicle.",
  },
];

const steps = [
  {
    step: "01",
    title: "Property Selection",
    desc: "Explore our RERA-approved ventures online. Our NRI representative will share drone videos, master layouts, and legal summaries — no visit required.",
  },
  {
    step: "02",
    title: "Compliance Vetting",
    desc: "Receive link deeds, layouts, and municipal approvals digitally for independent evaluation by your legal counsel, wherever you are.",
  },
  {
    step: "03",
    title: "Booking & Funding",
    desc: "Reserve your plot and make payments safely through NRE, NRO, or FCNR accounts using standard inward banking remittance channels.",
  },
  {
    step: "04",
    title: "Registration Support",
    desc: "Complete registration in person during a visit, or remotely via a legally validated Power of Attorney — fully assisted by our legal cell.",
  },
];

const faqs = [
  {
    q: "Can an NRI purchase residential plots in Hyderabad?",
    a: "Yes. Under FEMA and RBI guidelines, NRIs with valid Indian passports or PIO/OCI cards can purchase residential and commercial properties freely. Agricultural land, plantation property, or farmhouses require prior RBI clearance.",
  },
  {
    q: "How do NRIs remit funds for plot purchases?",
    a: "Payments must be made through standard banking channels — inward remittances from abroad, or via NRE, NRO, or FCNR accounts in India. Cash transactions are strictly illegal and non-compliant.",
  },
  {
    q: "Can registration be completed without physical presence?",
    a: "Yes. An NRI can execute a registered Power of Attorney (PoA) in favour of a trusted representative in India. The PoA must be signed and attested at the nearest Indian Embassy or Consulate, then validated at the local registrar's office in Hyderabad.",
  },
  {
    q: "Are there any restrictions on repatriating sale proceeds?",
    a: "NRIs can repatriate the sale proceeds of up to two residential properties. Funds from an NRO account are subject to a USD 1 million annual cap. Proceeds from NRE accounts can be fully repatriated. Our team can help you structure transactions for maximum compliance.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-[4px] transition-colors duration-200 overflow-hidden ${open ? "border-[#C8923A]/30 bg-[#C8923A]/5" : "border-white/[0.06] bg-[#1A1A1A]"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-[#F5F3EF] leading-snug pr-4">{q}</span>
        <CaretDown
          size={16}
          weight="bold"
          className={`text-[#C8923A] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p className="px-6 pb-5 text-sm text-[#F5F3EF]/55 leading-relaxed border-t border-white/[0.06] pt-4">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

export default function NRIInvestorsPage() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <>
      <Header />

      <main>
        {/* ── Hero ── */}
        <section
          className="relative min-h-[50dvh] flex items-center pt-20 overflow-hidden"
          aria-label="NRI Investors hero"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gvr-kothapally/gvr-16.jpeg"
              alt="NRI Investors — GVR Kothapally"
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
              className="space-y-4 max-w-xl"
            >
              <span className="amber-line" />
              <h1 className="t-display text-[#F5F3EF] mt-4">
                NRI &amp; Investor Guide
              </h1>
              <p className="t-body mt-4">
                A compliance-focused blueprint for non-resident Indians looking to secure high-growth land plots in Hyderabad.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Why Hyderabad for NRIs — 3 benefit cards ── */}
        <section className="py-24 md:py-32" aria-label="Benefits for NRIs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal className="max-w-xl">
              <span className="amber-line" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">
                Why NRIs Choose Hyderabad Land
              </h2>
              <p className="t-body mt-4">
                Hyderabad ranks among Asia's fastest-growing real estate hubs. Strategic investment in land offers a currency hedge and compounding returns.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.08}>
                  <div className="card p-8 space-y-5 h-full hover:border-[#C8923A]/20 transition-colors duration-300">
                    <div className="w-11 h-11 rounded-full bg-[#C8923A]/10 flex items-center justify-center">
                      {b.icon}
                    </div>
                    <h3 className="font-bold text-[#F5F3EF]">{b.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 4-Step Process — numbered timeline cards ── */}
        <section className="py-24 md:py-32 bg-[#111111]" aria-label="Buying process for NRIs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal className="max-w-xl">
              <span className="amber-line" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">
                Our 4-Step Simplified Process
              </h2>
              <p className="t-body mt-4">
                Designed to be fully digital-first — so you can invest from anywhere in the world.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.step} delay={i * 0.07}>
                  <div className="card p-7 space-y-5 h-full relative overflow-hidden hover:border-[#C8923A]/20 transition-colors duration-300">
                    {/* Watermark number */}
                    <span
                      className="absolute top-3 right-5 text-[4.5rem] font-bold leading-none select-none pointer-events-none"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "1px rgba(200,146,58,0.12)",
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      {s.step}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#C8923A]/15 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#C8923A]">{s.step}</span>
                    </div>
                    <h3 className="font-bold text-[#F5F3EF] leading-snug">{s.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── FAQ + Helpline — 2-col asymmetric ── */}
        <section className="py-24 md:py-32" aria-label="NRI FAQs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

              {/* FAQ accordion — takes 2 cols */}
              <div className="lg:col-span-2 space-y-10">
                <Reveal>
                  <span className="amber-line" />
                  <h2 className="t-headline text-[#F5F3EF] mt-4">Frequently Asked Questions</h2>
                </Reveal>
                <Reveal delay={0.1} className="space-y-3">
                  {faqs.map((faq) => (
                    <FAQ key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </Reveal>
              </div>

              {/* Helpline sidebar */}
              <Reveal delay={0.15}>
                <div className="space-y-5 sticky top-24">
                  {/* Helpline card */}
                  <div className="card p-7 space-y-5">
                    <div className="w-11 h-11 rounded-full bg-[#C8923A]/10 flex items-center justify-center">
                      <PhoneCall size={20} weight="fill" className="text-[#C8923A]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#F5F3EF]">NRI Helpline</h3>
                      <p className="text-sm text-[#F5F3EF]/50 leading-relaxed mt-2">
                        Have specific legal or transaction questions? Speak directly with our NRI investment division.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <a
                        href="tel:+919949736082"
                        className="btn-primary w-full text-center"
                      >
                        <PhoneCall size={14} weight="fill" /> Call Now
                      </a>
                      <Link href="/contact" className="btn-ghost w-full text-center">
                        Request Call Back
                      </Link>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="card p-6 space-y-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/30">
                      Why Trust Sravya
                    </div>
                    {[
                      "RERA registered ventures",
                      "Clear title documentation",
                      "NRI-dedicated support team",
                      "PoA-friendly process",
                      "NRE / NRO payment compliant",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle size={14} weight="fill" className="text-[#C8923A] flex-shrink-0" />
                        <span className="text-sm text-[#F5F3EF]/60">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Documents checklist — compact strip ── */}
        <section className="py-20 bg-[#111111]" aria-label="Documents required">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <Reveal className="max-w-xl">
              <span className="amber-line" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">Documents You'll Need</h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <Certificate size={18} weight="fill" className="text-[#C8923A]" />, label: "Valid Indian Passport / OCI / PIO Card" },
                { icon: <FileText size={18} weight="fill" className="text-[#C8923A]" />, label: "PAN Card (or Form 60 if not available)" },
                { icon: <Handshake size={18} weight="fill" className="text-[#C8923A]" />, label: "NRE / NRO / FCNR Bank Account details" },
                { icon: <FileText size={18} weight="fill" className="text-[#C8923A]" />, label: "Proof of overseas address" },
                { icon: <Certificate size={18} weight="fill" className="text-[#C8923A]" />, label: "Power of Attorney (if not registering in person)" },
                { icon: <FileText size={18} weight="fill" className="text-[#C8923A]" />, label: "2 passport-size photographs" },
              ].map(({ icon, label }) => (
                <Reveal key={label}>
                  <div className="flex items-center gap-4 card px-5 py-4 hover:border-[#C8923A]/20 transition-colors duration-300">
                    <div className="w-9 h-9 rounded-full bg-[#C8923A]/10 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <span className="text-sm text-[#F5F3EF]/70 leading-snug">{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── CTA ── */}
        <section className="py-24 text-center" aria-label="NRI contact CTA">
          <div className="max-w-xl mx-auto px-4 space-y-8">
            <Reveal>
              <span className="amber-line mx-auto" />
              <h2 className="t-headline text-[#F5F3EF] mt-4">Ready to Invest from Abroad?</h2>
              <p className="t-body text-center mt-4 max-w-md mx-auto">
                Our NRI team handles every step — from document verification to registration — so you never have to worry about the details.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Journey <ArrowRight size={15} weight="bold" />
              </Link>
              <Link href="/projects" className="btn-ghost">
                View Projects
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
    </>
  );
}
