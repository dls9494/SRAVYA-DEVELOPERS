import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  ArrowLeft,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { projectsData } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const AMENITY_LABELS: Record<string, string> = {
  Dumbbell: "Open Air Gymnasium",
  Activity: "Jogging & Walking Tracks",
  Trophy: "Multipurpose Court",
  Shield: "Security & Compound Wall",
  Trees: "Avenue Plantation",
  Droplet: "Rainwater Harvesting",
};

const STATUS_STYLES: Record<string, string> = {
  Ongoing: "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  Completed: "text-[#D4A847] bg-[#D4A847]/10 border-[#D4A847]/25",
  Upcoming: "text-blue-400 bg-blue-400/10 border-blue-400/25",
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="bg-[#0C0C0C] min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ── Cinematic Hero ── */}
        <section className="relative min-h-[60dvh] flex items-end pt-20 overflow-hidden border-b border-[#D4A847]/30">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-[#0C0C0C]/20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full space-y-5">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F3EF]/40 hover:text-[#D4A847] transition-colors"
            >
              <ArrowLeft size={13} weight="bold" />
              All Projects
            </Link>

            <div className="space-y-3">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-[0.1em] border ${STATUS_STYLES[project.status]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {project.status}
              </span>
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-[#F5F3EF] leading-none tracking-[-0.03em] font-serif">
                {project.name}
              </h1>
              <div className="flex items-center gap-2 text-[#F5F3EF]/50 text-sm">
                <MapPin size={14} weight="fill" className="text-[#D4A847]" />
                {project.location}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick stats bar ── */}
        <div className="border-b border-[#D4A847]/30 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D4A847]/30">
              {[
                { label: "Starting Price", val: project.startingPrice },
                { label: "Plot Sizes", val: project.plotSizes },
                { label: "Total Area", val: project.totalArea },
                { label: "Total Plots", val: project.totalPlots },
              ].map((s) => (
                <div key={s.label} className="px-6 py-5 text-center">
                  <div className="text-xl font-bold text-[#D4A847]">{s.val}</div>
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Overview ── */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Description */}
              <div className="lg:col-span-2 space-y-6">
                <div className="gold-divider mb-8" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF] tracking-tight font-serif">
                  {project.tagline}
                </h2>
                <p className="text-[#F5F3EF]/60 leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-3 pt-4">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <CheckCircle size={16} weight="fill" className="text-[#D4A847] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#F5F3EF]/65 leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar — RERA + quick CTA */}
              <div className="space-y-5">
                <div className="card p-6 space-y-4 border border-[#D4A847]/30">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} weight="fill" className="text-[#D4A847]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/70">RERA Status</span>
                  </div>
                  <p className="text-xs text-[#F5F3EF]/60 font-mono leading-relaxed">{project.reraNumber}</p>
                </div>

                <div className="card p-6 space-y-4 border border-[#D4A847]/30">
                  <h3 className="font-bold text-[#F5F3EF] font-serif text-xl">Book a Site Visit</h3>
                  <p className="text-sm text-[#F5F3EF]/60 leading-relaxed">
                    Our team will arrange a free site tour at your convenience.
                  </p>
                  <a href="tel:+919949736082" className="btn-primary w-full text-center">
                    <Phone size={14} weight="fill" /> Call Now
                  </a>
                  <Link href="/contact" className="btn-ghost w-full text-center border border-[#D4A847]/30 hover:border-[#D4A847]">
                    Send Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="py-16 bg-[#111111] border-y border-[#D4A847]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#F5F3EF] tracking-tight font-serif">Site Gallery</h2>
              <span className="text-sm text-[#F5F3EF]/60">{project.gallery.length} photos</span>
            </div>

            {/* Grid — first 9 images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.gallery.slice(0, 9).map((src, i) => (
                <div
                  key={src}
                  className={`relative rounded-[4px] overflow-hidden border border-[#D4A847]/30 ${
                    i === 0 ? "col-span-2 md:col-span-1 row-span-2 aspect-square" : "aspect-video"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${project.name} site photo ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

            {/* Remaining images in horizontal scroll */}
            {project.gallery.length > 9 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
                {project.gallery.slice(9).map((src, i) => (
                  <div
                    key={src}
                    className="flex-none w-64 aspect-video relative rounded-[4px] overflow-hidden border border-[#D4A847]/30 snap-start"
                  >
                    <Image
                      src={src}
                      alt={`${project.name} photo ${i + 10}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="256px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Amenities ── */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <div className="gold-divider mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF] tracking-tight font-serif">Amenities</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.amenities.map((a) => (
                <div key={a.title} className="card p-6 space-y-3 border border-[#D4A847]/30 hover:border-[#D4A847]/60 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#D4A847]/10 flex items-center justify-center border border-[#D4A847]/20">
                    <ShieldCheck size={18} weight="fill" className="text-[#D4A847]" />
                  </div>
                  <h3 className="font-semibold text-[#F5F3EF] text-sm font-serif text-lg">{a.title}</h3>
                  <p className="text-xs text-[#F5F3EF]/60 leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Connectivity ── */}
        <section className="py-20 bg-[#111111] border-y border-[#D4A847]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <div className="gold-divider mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF] tracking-tight font-serif">Connectivity</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Distance table */}
              <div className="card overflow-hidden border border-[#D4A847]/30">
                <div className="px-6 py-4 border-b border-[#D4A847]/30 text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/70">
                  Key Distances
                </div>
                <div className="divide-y divide-[#D4A847]/30">
                  {project.connectivity.map((c) => (
                    <div key={c.destination} className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm text-[#F5F3EF]/80">{c.destination}</span>
                      <span className="text-sm font-bold text-[#D4A847]">{c.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby landmarks */}
              <div className="card p-6 space-y-4 border border-[#D4A847]/30">
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/70 mb-2">
                  Nearby Landmarks
                </div>
                <div className="space-y-3">
                  {project.nearbyLandmarks.map((lm) => (
                    <div key={lm} className="flex items-center gap-3">
                      <MapPin size={13} weight="fill" className="text-[#D4A847] flex-shrink-0" />
                      <span className="text-sm text-[#F5F3EF]/80">{lm}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Location Map */}
            {project.mapEmbedUrl && (
              <div className="mt-8 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/70">
                  Exact Venture Location
                </div>
                <div className="rounded-[4px] overflow-hidden border border-[#D4A847]/30 aspect-[21/9] min-h-[300px]">
                  <iframe
                    src={project.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    title={`${project.name} location map`}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 text-center relative">
          <div className="max-w-xl mx-auto px-4 space-y-6">
            <div className="gold-divider mb-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF] tracking-tight font-serif">
              Interested in {project.name}?
            </h2>
            <p className="text-sm text-[#F5F3EF]/60 leading-relaxed max-w-sm mx-auto">
              Our team will schedule a free site visit and walk you through all documentation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Visit <ArrowRight size={14} weight="bold" />
              </Link>
              <a href="tel:+919949736082" className="btn-ghost border border-[#D4A847]/30 hover:border-[#D4A847]">
                <Phone size={14} weight="fill" /> Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
