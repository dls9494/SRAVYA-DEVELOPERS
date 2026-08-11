"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Why Sravya", href: "/why-sravya" },
    { name: "NRI / Investors", href: "/nri-investors" },
    { name: "Contact Us", href: "/contact" },
  ];

  const headerBgClass = isHome
    ? scrolled
      ? "bg-primary-900 shadow-xl border-b border-primary-800/40 py-4"
      : "bg-transparent py-6"
    : "bg-primary-900 shadow-xl border-b border-primary-800/40 py-4";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${headerBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0 -my-4 ml-2 md:ml-4">
              <Link href="/" className="group block">
                <div className="relative w-36 h-24 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/logo-v4.png"
                    alt="Sravya Global Developers"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-md font-sans text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:text-gold-300 ${
                      isActive ? "text-gold-500 font-semibold" : "text-ivory/90"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

             {/* Action Button & Contact Info */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919949736082"
                className="flex items-center gap-2 text-xs font-sans text-gold-300/90 font-medium tracking-wider hover:text-gold-400 transition-colors"
              >
                <Phone size={14} className="text-gold-500" />
                <span>+91 9949736082</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-900 bg-gold-500 hover:bg-gold-400 rounded transition-all duration-300 shadow-md hover:shadow-gold-500/10"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-ivory hover:text-gold-500 hover:bg-primary-800/40 focus:outline-none transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (framer-motion) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-primary-950 border-l border-primary-900/60 p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header of Mobile Menu */}
                <div className="flex items-center justify-between pb-6 border-b border-primary-900">
                  <div className="relative w-24 h-16">
                    <Image
                      src="/images/logo-v4.png"
                      alt="Sravya Global Developers"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-ivory hover:text-gold-500 transition-colors"
                    aria-label="Close navigation menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="mt-8 space-y-3">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`block px-4 py-3 rounded-lg font-sans text-base font-medium uppercase tracking-widest transition-all duration-200 ${
                          isActive
                            ? "bg-primary-900 text-gold-500 border-l-4 border-gold-500"
                            : "text-ivory/80 hover:bg-primary-900/40 hover:text-ivory"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Footer Contacts */}
              <div className="mt-auto pt-6 border-t border-primary-900 space-y-4">
                <a
                  href="tel:+919949736082"
                  className="flex items-center gap-3 text-sm text-ivory/80 hover:text-gold-400 transition-colors"
                >
                  <Phone size={16} className="text-gold-500" />
                  <span>+91 9949736082 / 6309366082</span>
                </a>
                <a
                  href="mailto:sravyaglobaldevelopers@gmail.com"
                  className="flex items-center gap-3 text-sm text-ivory/80 hover:text-gold-400 transition-colors"
                >
                  <Mail size={16} className="text-gold-500" />
                  <span>sravyaglobaldevelopers@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-ivory/70">
                  <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    7-2/P-30, My Homes Colony, Manneguda, Hyderabad.
                  </span>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 font-semibold uppercase tracking-wider text-primary-950 bg-gold-500 hover:bg-gold-400 rounded-lg transition-all duration-300"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
