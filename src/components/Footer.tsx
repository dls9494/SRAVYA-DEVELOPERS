"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555a3.003 3.003 0 0 0-2.11 2.108C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface FooterProps {
  onOpenDisclaimer?: () => void;
}

export default function Footer({ onOpenDisclaimer }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleDisclaimerClick = (e: React.MouseEvent) => {
    if (onOpenDisclaimer) {
      e.preventDefault();
      onOpenDisclaimer();
    }
  };

  return (
    <footer className="bg-primary-950 text-ivory border-t border-primary-900/60 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="group block ml-2">
              <div className="relative w-48 h-32 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/logo-v4.png"
                  alt="Sravya Global Developers"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            
            <p className="text-sm text-ivory/70 leading-relaxed max-w-sm">
              Sravya Global Developers is dedicated to building trust and creating landmarks. We specialize in thoughtfully planned residential open plots and premium villa plotting communities in high-growth corridors.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-primary-900 border border-primary-800/40 flex items-center justify-center text-ivory/80 hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-primary-900 border border-primary-800/40 flex items-center justify-center text-ivory/80 hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-primary-900 border border-primary-800/40 flex items-center justify-center text-ivory/80 hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-primary-900 border border-primary-800/40 flex items-center justify-center text-ivory/80 hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-medium text-gold-500 tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-[1px] after:bg-gold-500">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-ivory/70 hover:text-gold-500 transition-colors flex items-center gap-1 group">
                  <span>About Sravya Group</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-ivory/70 hover:text-gold-500 transition-colors flex items-center gap-1 group">
                  <span>Our Projects</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/why-sravya" className="text-ivory/70 hover:text-gold-500 transition-colors flex items-center gap-1 group">
                  <span>Why Choose Us</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/nri-investors" className="text-ivory/70 hover:text-gold-500 transition-colors flex items-center gap-1 group">
                  <span>NRI & Investment Hub</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ivory/70 hover:text-gold-500 transition-colors flex items-center gap-1 group">
                  <span>Get in Touch</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Active Projects */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-medium text-gold-500 tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-[1px] after:bg-gold-500">
              Our Portfolios
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/projects/rustic-valley" className="text-ivory/70 hover:text-gold-500 transition-colors block">
                  <span className="font-medium text-ivory">Rustic Valley</span>
                  <span className="block text-[11px] text-ivory/50">Completed · Yacharam Sagar Highway</span>
                </Link>
              </li>
              <li>
                <Link href="/projects/pearl-city" className="text-ivory/70 hover:text-gold-500 transition-colors block">
                  <span className="font-medium text-ivory">Pearl City</span>
                  <span className="block text-[11px] text-ivory/50">Ongoing · Rampally ORR Exit 9</span>
                </Link>
              </li>
              <li>
                <Link href="/projects/elite-county" className="text-ivory/70 hover:text-gold-500 transition-colors block">
                  <span className="font-medium text-ivory">Sravya Elite County</span>
                  <span className="block text-[11px] text-ivory/50">Upcoming · Shankarpally Corridor</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Office */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-medium text-gold-500 tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-[1px] after:bg-gold-500">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-ivory/75">
                  7-2/P-30, My Homes Colony, Manneguda, Hyderabad.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919949736082" className="text-ivory/75 hover:text-gold-500 transition-colors">
                    +91 9949736082
                  </a>
                  <a href="tel:+916309366082" className="text-ivory/75 hover:text-gold-500 transition-colors">
                    +91 6309366082
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 flex-shrink-0" />
                <a href="mailto:sravyaglobaldevelopers@gmail.com" className="text-ivory/75 hover:text-gold-500 transition-colors">
                  sravyaglobaldevelopers@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-900/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/50">
          <p>© {currentYear} Sravya Global Developers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#disclaimer"
              onClick={handleDisclaimerClick}
              className="hover:text-gold-500 transition-colors underline decoration-dotted"
            >
              Disclaimer
            </a>
            <Link href="/privacy-policy" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold-500 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
