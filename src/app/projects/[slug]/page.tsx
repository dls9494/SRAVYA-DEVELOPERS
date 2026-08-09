import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft, ShieldCheck, Compass, Info } from "lucide-react";
import { projectsData } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Amenities from "@/components/Amenities";
import LocationAdvantages from "@/components/LocationAdvantages";
import ContactForm from "@/components/ContactForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const statusColors = {
    Completed: "bg-emerald-900/90 text-emerald-300 border-emerald-500/40",
    Ongoing: "bg-amber-900/90 text-amber-300 border-amber-500/40",
    Upcoming: "bg-sky-900/90 text-sky-300 border-sky-500/40",
  };

  return (
    <div className="bg-ivory min-h-screen flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-primary-950 text-left overflow-hidden">
        <div className="absolute inset-0 bg-primary-950/80 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="object-cover opacity-35"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-300 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Ventures</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-sm ${
                  statusColors[project.status]
                }`}
              >
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/50 text-gold-300 border border-gold-500/20 backdrop-blur-sm">
                {project.reraNumber}
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-wide leading-tight">
              {project.name}
            </h1>
            
            <div className="flex items-center gap-1.5 text-sm text-ivory/80 font-medium">
              <MapPin size={16} className="text-gold-500 flex-shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-grow py-16 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Row 1: Key Specs & Summary */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Details / Desc */}
          <div className="lg:col-span-8 space-y-6 bg-white p-6 md:p-8 rounded-xl border border-primary-900/10 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-950">
              Project Overview
            </h2>
            <p className="text-sm md:text-base text-gold-600 font-bold uppercase tracking-wider -mt-2">
              {project.type}
            </p>
            <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
              {project.description}
            </p>

            {/* highlights */}
            <div className="pt-4 border-t border-primary-900/5 space-y-3">
              <h3 className="font-serif text-lg font-bold text-primary-950">Venture Highlights</h3>
              <ul className="space-y-2.5 text-sm">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/85 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Specifications Sidebar */}
          <div className="lg:col-span-4 bg-primary-900 text-ivory p-6 md:p-8 rounded-xl border border-primary-800 shadow-lg space-y-6">
            <h3 className="font-serif text-xl font-bold text-gold-500 border-b border-primary-800 pb-3 tracking-wider uppercase">
              Venture Specs
            </h3>

            <div className="space-y-4 text-sm font-sans">
              <div className="flex justify-between py-1 border-b border-primary-800">
                <span className="text-ivory/60">Plot Dimensions</span>
                <span className="font-bold">{project.plotSizes}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-primary-800">
                <span className="text-ivory/60">Total Land Area</span>
                <span className="font-bold">{project.totalArea}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-primary-800">
                <span className="text-ivory/60">Total Plots</span>
                <span className="font-bold">{project.totalPlots}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-primary-800">
                <span className="text-ivory/60">Approval Code</span>
                <span className="font-bold">HMDA / DTCP Approved</span>
              </div>
              <div className="flex justify-between py-1 border-b border-primary-800">
                <span className="text-ivory/60">Starting Price</span>
                <span className="font-bold text-gold-400">{project.startingPrice}</span>
              </div>
            </div>

            <div className="pt-2 text-center text-xs text-ivory/50 flex items-center gap-1.5 justify-center bg-primary-950/30 p-2.5 rounded-lg border border-primary-950/20">
              <Info size={14} className="text-gold-500 flex-shrink-0" />
              <span>Subject to terms and availability</span>
            </div>
          </div>
        </section>

        {/* Row 2: Gallery */}
        <section className="space-y-6 bg-white p-6 md:p-8 rounded-xl border border-primary-900/10 shadow-sm">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-950">
            Image Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="relative aspect-video rounded-lg overflow-hidden shadow bg-primary-950 group">
                <Image
                  src={img}
                  alt={`${project.name} Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Row 3: Amenities */}
        <section className="bg-white p-6 md:p-8 rounded-xl border border-primary-900/10 shadow-sm">
          <Amenities items={project.amenities} title="Project Infrastructure Standards" subtitle="Amenities" />
        </section>

        {/* Row 4: Master Plan Placeholder */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white p-6 md:p-8 rounded-xl border border-primary-900/10 shadow-sm">
          <div className="lg:col-span-1 space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-950">
              Master Layout Plan
            </h2>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Our gated plotting communities feature scientifically engineered layouts. Designs focus on proper drainage routes, standard 33'/40' road grids, Vaastu compliance, and generous open park reserves.
            </p>
            <div className="text-xs text-charcoal/45 italic bg-ivory/80 p-3 rounded-lg border border-primary-900/5">
              Disclaimer: The plan shown is for representation and approval reference. Final adjustments may occur in accordance with municipal directives.
            </div>
          </div>
          
          <div className="lg:col-span-2 relative aspect-[16/9] rounded-lg overflow-hidden border border-primary-900/5 bg-primary-950">
            <Image
              src={project.image}
              alt={`${project.name} Master Plan`}
              fill
              className="object-cover opacity-60 filter blur-[1px]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-primary-950/20">
              <span className="px-4 py-2 bg-black/70 text-gold-300 font-semibold text-xs rounded border border-gold-500/20 uppercase tracking-widest">
                [ MASTER LAYOUT MAP ]
              </span>
            </div>
          </div>
        </section>

        {/* Row 5: Map & Connectivity */}
        <section className="space-y-6 bg-white p-6 md:p-8 rounded-xl border border-primary-900/10 shadow-sm">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-950">
            Venture Proximity & Location
          </h2>
          <LocationAdvantages
            mapEmbedUrl={project.mapEmbedUrl}
            connectivity={project.connectivity}
            nearbyLandmarks={project.nearbyLandmarks}
            projectName={project.name}
          />
        </section>

        {/* Row 6: Enquiry & Booking Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white border border-primary-900/10 rounded-xl shadow-md overflow-hidden">
          
          {/* Details CTA Side */}
          <div className="lg:col-span-5 bg-primary-900 text-ivory p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
            
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold-500 tracking-wide uppercase">
                Schedule a Visit
              </h3>
              <p className="text-sm text-ivory/80 leading-relaxed">
                Take the first step towards securing your premium land plot in **{project.name}**. Let our real-estate investment specialist guide you through title validation, spot registration options, and physical site exploration.
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-gold-500">
                    <Compass size={14} />
                  </div>
                  <div className="text-xs">
                    <h5 className="font-bold text-ivory">Free Site Commute</h5>
                    <p className="text-ivory/60">Complimentary pick-up & drop from office</p>
                  </div>
                </div>
                
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-gold-500">
                    <ShieldCheck size={14} />
                  </div>
                  <div className="text-xs">
                    <h5 className="font-bold text-ivory">Expert Vetting Assist</h5>
                    <p className="text-ivory/60">Verification files prepared for legal review</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-ivory/40 pt-6 border-t border-primary-800 mt-6 lg:mt-0">
              Sravya Global Developers ensures that all client data is kept strictly confidential and used solely for booking coordinates.
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 p-8">
            <ContactForm projectSlug={project.slug} />
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

// Generate static params for build pre-render
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}
