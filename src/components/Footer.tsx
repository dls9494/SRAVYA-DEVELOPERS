"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Why Sravya", href: "/why-sravya" },
  { name: "NRI / Investors", href: "/nri-investors" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

interface FooterProps {
  onOpenDisclaimer?: () => void;
}

export default function Footer({ onOpenDisclaimer }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0C0C] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

          {/* ── Brand col ── */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" aria-label="Sravya Global Developers home">
              <div className="relative w-36 h-11">
                <Image
                  src="/images/logo-v4.png"
                  alt="Sravya Global Developers"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-[#F5F3EF]/45 leading-relaxed max-w-xs">
              Building Trust. Creating Landmarks. Premium villa plots in Hyderabad's high-growth corridors.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FacebookLogo size={16} weight="fill" />, href: "https://facebook.com", label: "Facebook" },
                { icon: <InstagramLogo size={16} weight="fill" />, href: "https://instagram.com", label: "Instagram" },
                { icon: <YoutubeLogo size={16} weight="fill" />, href: "https://youtube.com", label: "YouTube" },
                { icon: <LinkedinLogo size={16} weight="fill" />, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-white/[0.06] flex items-center justify-center text-[#F5F3EF]/40 hover:text-[#C8923A] hover:border-[#C8923A]/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#F5F3EF]/30">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-1.5 text-sm text-[#F5F3EF]/50 hover:text-[#C8923A] transition-colors duration-200"
                  >
                    <span>{l.name}</span>
                    <ArrowUpRight
                      size={11}
                      weight="bold"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Our Portfolio ── */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#F5F3EF]/30">
              Portfolio
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/projects/gvr-kothapally" className="group block">
                  <span className="block text-sm font-semibold text-[#F5F3EF]/70 group-hover:text-[#C8923A] transition-colors">
                    GVR Kothapally
                  </span>
                  <span className="block text-xs text-[#F5F3EF]/30 mt-0.5">
                    Ongoing · Chevella – Vikarabad Road
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#F5F3EF]/30">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#F5F3EF]/50">
                <MapPin size={15} weight="fill" className="text-[#C8923A] mt-0.5 flex-shrink-0" />
                <span>7-2/P-30, My Homes Colony, Manneguda, Hyderabad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} weight="fill" className="text-[#C8923A] flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919949736082" className="text-sm text-[#F5F3EF]/50 hover:text-[#C8923A] transition-colors">
                    +91 99497 36082
                  </a>
                  <a href="tel:+916309366082" className="text-sm text-[#F5F3EF]/50 hover:text-[#C8923A] transition-colors">
                    +91 63093 66082
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={15} weight="fill" className="text-[#C8923A] flex-shrink-0" />
                <a
                  href="mailto:sravyaglobaldevelopers@gmail.com"
                  className="text-sm text-[#F5F3EF]/50 hover:text-[#C8923A] transition-colors break-all"
                >
                  sravyaglobaldevelopers@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F3EF]/25">
          <p>&copy; {year} Sravya Global Developers. All rights reserved.</p>
          <div className="flex items-center gap-5 flex-wrap">
            {onOpenDisclaimer && (
              <button
                onClick={onOpenDisclaimer}
                className="hover:text-[#C8923A] transition-colors underline decoration-dotted"
              >
                Disclaimer
              </button>
            )}
            {legalLinks.map((l) => (
              <Link key={l.name} href={l.href} className="hover:text-[#C8923A] transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
