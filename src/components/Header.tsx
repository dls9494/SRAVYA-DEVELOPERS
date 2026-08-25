"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  PhoneCall,
  List,
  X,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Why Sravya", href: "/why-sravya" },
  { name: "NRI / Investors", href: "/nri-investors" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on navigation
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Navigation ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav py-4"
            : "bg-transparent border-b border-transparent py-5"
        }`}
        style={{ height: "80px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group" aria-label="Sravya Global Developers home">
            <div className="relative w-14 h-14 transition-opacity duration-300 group-hover:opacity-80">
              <Image
                src="/images/logo-v4.png"
                alt="Sravya Global Developers"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="ml-2 hidden sm:block">
              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#C8923A] leading-none">Sravya Global</div>
              <div className="text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-[#F5F3EF]/40 leading-none mt-0.5">Developers</div>
            </div>
          </Link>

          {/* Desktop nav — all items in ONE line */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
                    active
                      ? "text-[#C8923A]"
                      : "text-[#F5F3EF]/70 hover:text-[#F5F3EF]"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#C8923A] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA row */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+919949736082"
              className="flex items-center gap-1.5 text-[0.75rem] font-medium text-[#C8923A]/80 hover:text-[#C8923A] transition-colors"
            >
              <PhoneCall size={13} weight="fill" />
              <span>+91 99497 36082</span>
            </a>
            <Link href="/contact" className="btn-primary text-[0.75rem] px-5 py-2">
              Enquire Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden p-2 text-[#F5F3EF]/70 hover:text-[#C8923A] transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <List size={24} weight="bold" />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Scrim */}
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer panel */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[320px] bg-[#111111] border-l border-white/5 flex flex-col"
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/images/logo-v4.png"
                      alt="Sravya Global Developers"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#C8923A] leading-none">Sravya Global</div>
                    <div className="text-[0.5rem] font-semibold tracking-[0.2em] uppercase text-[#F5F3EF]/40 leading-none mt-0.5">Developers</div>
                  </div>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 text-[#F5F3EF]/50 hover:text-[#C8923A] transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 py-8 space-y-1" aria-label="Mobile navigation links">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-[4px] text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                          active
                            ? "bg-[#C8923A]/10 text-[#C8923A] border-l-2 border-[#C8923A]"
                            : "text-[#F5F3EF]/60 hover:text-[#F5F3EF] hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 pb-8 space-y-4 border-t border-white/5 pt-6">
                <a
                  href="tel:+919949736082"
                  className="flex items-center gap-3 text-sm text-[#F5F3EF]/60 hover:text-[#C8923A] transition-colors"
                >
                  <PhoneCall size={16} weight="fill" className="text-[#C8923A]" />
                  <span>+91 99497 36082</span>
                </a>
                <a
                  href="tel:+916309366082"
                  className="flex items-center gap-3 text-sm text-[#F5F3EF]/60 hover:text-[#C8923A] transition-colors"
                >
                  <PhoneCall size={16} weight="fill" className="text-[#C8923A]" />
                  <span>+91 63093 66082</span>
                </a>
                <a
                  href="mailto:sravyaglobaldevelopers@gmail.com"
                  className="flex items-center gap-3 text-sm text-[#F5F3EF]/60 hover:text-[#C8923A] transition-colors"
                >
                  <EnvelopeSimple size={16} weight="fill" className="text-[#C8923A]" />
                  <span>sravyaglobaldevelopers@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-[#F5F3EF]/50">
                  <MapPin size={16} weight="fill" className="text-[#C8923A] mt-0.5 flex-shrink-0" />
                  <span>7-2/P-30, My Homes Colony, Manneguda, Hyderabad</span>
                </div>
                <Link href="/contact" className="btn-primary w-full text-center mt-2">
                  Enquire Now
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
