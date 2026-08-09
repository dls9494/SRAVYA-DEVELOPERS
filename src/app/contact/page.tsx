"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function Contact() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary-950 text-center font-sans overflow-hidden">
        <div className="absolute inset-0 bg-primary-950/85 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/sravya-3.jpeg"
            alt="Contact Sravya Developers"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-20 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Get In Touch
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-wide leading-tight">
            Contact Sravya Global Developers
          </h1>
          <p className="text-sm md:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Have questions about a specific venture, pricing, or registration assistance? Reach out to our customer relations team today.
          </p>
        </div>
      </section>

      {/* Main Details and Form Section */}
      <section className="py-20 bg-ivory font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Details Block */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-950">
                Corporate Communications
              </h2>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Whether you are a first-time plot buyer or an experienced real estate investor, we are here to support you. Visit our office or call our investment desk.
              </p>
            </div>

            {/* List of Contact Details */}
            <div className="space-y-6 flex-grow py-8">
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary-900/5 border border-primary-900/5 flex items-center justify-center flex-shrink-0 text-primary-900">
                  <MapPin size={20} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary-950">Corporate Office</h4>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mt-1">
                    [OFFICE ADDRESS]
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary-900/5 border border-primary-900/5 flex items-center justify-center flex-shrink-0 text-primary-900">
                  <Phone size={20} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary-950">Call Helpline</h4>
                  <a
                    href="tel:[PHONE NUMBER]"
                    className="block text-xs sm:text-sm text-charcoal/75 hover:text-gold-600 font-semibold transition-colors mt-1"
                  >
                    +91 [PHONE NUMBER]
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary-900/5 border border-primary-900/5 flex items-center justify-center flex-shrink-0 text-primary-900">
                  <Mail size={20} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary-950">Email Support</h4>
                  <a
                    href="mailto:[EMAIL ADDRESS]"
                    className="block text-xs sm:text-sm text-charcoal/75 hover:text-gold-600 font-semibold transition-colors mt-1"
                  >
                    [EMAIL ADDRESS]
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary-900/5 border border-primary-900/5 flex items-center justify-center flex-shrink-0 text-primary-900">
                  <Clock size={20} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary-950">Operational Hours</h4>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mt-1">
                    Monday – Saturday: 09:30 AM – 06:30 PM (IST)<br />
                    Sunday: Site visits by appointment
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-primary-900/5 border border-primary-900/10 flex items-start gap-3">
              <MessageSquare size={20} className="text-gold-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-charcoal/60 leading-relaxed">
                <span className="font-semibold text-primary-950 block">Site Exploration Assist</span>
                Book on Saturday or Sunday to access complimentary commuter pick-ups directly from our corporate office to any venture layout.
              </div>
            </div>
          </div>

          {/* Right Form Block */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-primary-900/10 shadow-sm flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-primary-950 mb-6 border-b border-primary-900/5 pb-4">
              Send Online Enquiry
            </h3>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Maps section */}
      <section className="h-[400px] w-full border-t border-primary-900/5 bg-primary-900/5 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789012!2d78.38421!3d17.44789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU1LjYiTiA3OMKwMjMnMDMuMSJFCg!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Sravya Global Developers Office Map"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        />
      </section>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}
