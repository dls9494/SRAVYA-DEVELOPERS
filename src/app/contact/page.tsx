"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  CheckCircle,
  Warning,
  PaperPlaneTilt,
  Spinner,
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
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const contactInfo = [
  {
    icon: <Phone size={18} weight="fill" className="text-[#C8923A]" />,
    label: "Phone",
    values: [
      { text: "+91 99497 36082", href: "tel:+919949736082" },
      { text: "+91 63093 66082", href: "tel:+916309366082" },
    ],
  },
  {
    icon: <EnvelopeSimple size={18} weight="fill" className="text-[#C8923A]" />,
    label: "Email",
    values: [
      { text: "sravyaglobaldevelopers@gmail.com", href: "mailto:sravyaglobaldevelopers@gmail.com" },
    ],
  },
  {
    icon: <MapPin size={18} weight="fill" className="text-[#C8923A]" />,
    label: "Office",
    values: [
      { text: "7-2/P-30, My Homes Colony, Manneguda, Hyderabad", href: "#" },
    ],
  },
  {
    icon: <Clock size={18} weight="fill" className="text-[#C8923A]" />,
    label: "Hours",
    values: [
      { text: "Mon – Sat: 9:00 AM – 6:00 PM", href: "#" },
    ],
  },
];

export default function ContactPage() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", project: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Full name is required";
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) e.phone = "Enter a valid 10-digit Indian mobile number";
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email address";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const c = { ...prev }; delete c[name]; return c; });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", project: "", message: "" });
    }, 1500);
  };

  const inputBase = "w-full bg-[#1A1A1A] border border-white/[0.08] rounded-[4px] px-4 py-3 text-[#F5F3EF] text-sm placeholder-[#F5F3EF]/25 focus:outline-none focus:border-[#C8923A]/60 focus:ring-1 focus:ring-[#C8923A]/30 transition-colors duration-200";

  return (
    <>
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[40dvh] flex items-center pt-20 overflow-hidden" aria-label="Contact page hero">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gvr-kothapally/gvr-33.jpeg"
              alt="Contact Sravya Global Developers"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/80 to-[#0C0C0C]/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="amber-line" />
              <h1 className="t-display text-[#F5F3EF] max-w-md mt-4">Contact Us</h1>
              <p className="t-body max-w-sm mt-4">
                Questions about a venture, pricing, or site visits? We're here.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Contact section ── */}
        <section className="py-24 md:py-32" aria-label="Contact details and form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left — contact details */}
              <div className="space-y-10">
                <Reveal>
                  <span className="amber-line" />
                  <h2 className="t-headline text-[#F5F3EF] mt-4">Get in Touch</h2>
                  <p className="t-body mt-4 max-w-sm">
                    Our customer relations team is available 6 days a week to answer any questions about our plots, legal documentation, or site visits.
                  </p>
                </Reveal>

                <Reveal delay={0.1} className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#C8923A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/30 mb-1">{info.label}</div>
                        {info.values.map((v) => (
                          <div key={v.text}>
                            {v.href !== "#" ? (
                              <a href={v.href} className="text-sm text-[#F5F3EF]/70 hover:text-[#C8923A] transition-colors">{v.text}</a>
                            ) : (
                              <span className="text-sm text-[#F5F3EF]/70">{v.text}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </Reveal>

                {/* Map embed */}
                <Reveal delay={0.15}>
                  <div className="rounded-[4px] overflow-hidden border border-white/[0.06] aspect-video">
                    <iframe
                      src="https://maps.google.com/maps?q=17.251406,78.583283&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                      allowFullScreen
                      loading="lazy"
                      title="Sravya Global Developers office location"
                    />
                  </div>
                </Reveal>
              </div>

              {/* Right — enquiry form */}
              <Reveal delay={0.1}>
                <div className="card p-8 md:p-10">
                  <h3 className="text-xl font-bold text-[#F5F3EF] mb-6">Send an Enquiry</h3>

                  {success ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                      <CheckCircle size={48} weight="fill" className="text-[#C8923A]" />
                      <h4 className="text-lg font-bold text-[#F5F3EF]">Thank you!</h4>
                      <p className="text-sm text-[#F5F3EF]/50">We received your enquiry. Our team will contact you within 24 hours.</p>
                      <button onClick={() => setSuccess(false)} className="btn-ghost mt-4 text-xs">Send Another</button>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="space-y-4" noValidate>
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/40">
                          Full Name <span className="text-[#C8923A]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={onChange}
                          placeholder="Your full name"
                          className={inputBase}
                          autoComplete="name"
                        />
                        {errors.name && <p className="text-xs text-red-400 flex items-center gap-1"><Warning size={12} />{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/40">
                          Phone <span className="text-[#C8923A]">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={onChange}
                          placeholder="10-digit mobile number"
                          className={inputBase}
                          autoComplete="tel"
                        />
                        {errors.phone && <p className="text-xs text-red-400 flex items-center gap-1"><Warning size={12} />{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/40">
                          Email <span className="text-[#F5F3EF]/20 text-[10px] normal-case tracking-normal font-normal">(optional)</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={onChange}
                          placeholder="you@example.com"
                          className={inputBase}
                          autoComplete="email"
                        />
                        {errors.email && <p className="text-xs text-red-400 flex items-center gap-1"><Warning size={12} />{errors.email}</p>}
                      </div>

                      {/* Project */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-project" className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/40">
                          Interested In
                        </label>
                        <select
                          id="contact-project"
                          name="project"
                          value={formData.project}
                          onChange={onChange}
                          className={`${inputBase} appearance-none cursor-pointer`}
                        >
                          <option value="">Select a venture</option>
                          <option value="gvr-kothapally">GVR Kothapally</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/40">
                          Message <span className="text-[#F5F3EF]/20 text-[10px] normal-case tracking-normal font-normal">(optional)</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={onChange}
                          rows={4}
                          placeholder="Questions about plots, pricing, site visit..."
                          className={`${inputBase} resize-none`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <Spinner size={15} className="animate-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            Send Enquiry <PaperPlaneTilt size={15} weight="fill" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-[#F5F3EF]/25 text-center pt-2">
                        We reply within 24 hours. No spam, ever.
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}
