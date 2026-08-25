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
  Completed: "text-[#C8923A] bg-[#C8923A]/10 border-[#C8923A]/25",
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
        <section className="relative min-h-[60dvh] flex items-end pt-20 overflow-hidden">
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
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F3EF]/40 hover:text-[#C8923A] transition-colors"
            >
              <ArrowLeft size={13} weight="bold" />
              All Projects
            </Link>

            <div className="space-y-3">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-[0.1em] border ${STATUS_STYLES[project.status]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {project.status}
              </span>
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-[#F5F3EF] leading-none tracking-[-0.03em]">
                {project.name}
              </h1>
              <div className="flex items-center gap-2 text-[#F5F3EF]/50 text-sm">
                <MapPin size={14} weight="fill" className="text-[#C8923A]" />
                {project.location}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick stats bar ── */}
        <div className="border-y border-white/[0.06] bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05]">
              {[
                { label: "Starting Price", val: project.startingPrice },
                { label: "Plot Sizes", val: project.plotSizes },
                { label: "Total Area", val: project.totalArea },
                { label: "Total Plots", val: project.totalPlots },
              ].map((s) => (
                <div key={s.label} className="px-6 py-5 text-center">
                  <div className="text-xl font-bold text-[#C8923A]">{s.val}</div>
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/30 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Overview ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Description */}
              <div className="lg:col-span-2 space-y-6">
                <span className="block w-10 h-0.5 bg-[#C8923A] rounded" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF] tracking-tight">
                  {project.tagline}
                </h2>
                <p className="text-[#F5F3EF]/60 leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-3 pt-4">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <CheckCircle size={16} weight="fill" className="text-[#C8923A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#F5F3EF]/65 leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar — RERA + quick CTA */}
              <div className="space-y-5">
                <div className="card p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} weight="fill" className="text-[#C8923A]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/50">RERA Status</span>
                  </div>
                  <p className="text-xs text-[#F5F3EF]/40 font-mono leading-relaxed">{project.reraNumber}</p>
                </div>

                <div className="card p-6 space-y-4">
                  <h3 className="font-bold text-[#F5F3EF]">Book a Site Visit</h3>
                  <p className="text-sm text-[#F5F3EF]/50 leading-relaxed">
                    Our team will arrange a free site tour at your convenience.
                  </p>
                  <a href="tel:+919949736082" className="btn-primary w-full text-center">
                    <Phone size={14} weight="fill" /> Call Now
                  </a>
                  <Link href="/contact" className="btn-ghost w-full text-center">
                    Send Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="py-16 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#F5F3EF] tracking-tight">Site Gallery</h2>
              <span className="text-sm text-[#F5F3EF]/30">{project.gallery.length} photos</span>
            </div>

            {/* Grid — first 9 images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.gallery.slice(0, 9).map((src, i) => (
                <div
                  key={src}
                  className={`relative rounded-[4px] overflow-hidden ${
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
                    className="flex-none w-64 aspect-video relative rounded-[4px] overflow-hidden snap-start"
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
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <span className="block w-10 h-0.5 bg-[#C8923A] rounded mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF] tracking-tight">Amenities</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.amenities.map((a) => (
                <div key={a.title} className="card p-6 space-y-3 hover:border-[#C8923A]/20 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#C8923A]/10 flex items-center justify-center">
                    <ShieldCheck size={18} weight="fill" className="text-[#C8923A]" />
                  </div>
                  <h3 className="font-semibold text-[#F5F3EF] text-sm">{a.title}</h3>
                  <p className="text-xs text-[#F5F3EF]/45 leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Connectivity ── */}
        <section className="py-20 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <span className="block w-10 h-0.5 bg-[#C8923A] rounded mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF] tracking-tight">Connectivity</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Distance table */}
              <div className="card overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.05] text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/30">
                  Key Distances
                </div>
                <div className="divide-y divide-white/[0.04]">
                  {project.connectivity.map((c) => (
                    <div key={c.destination} className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm text-[#F5F3EF]/70">{c.destination}</span>
                      <span className="text-sm font-bold text-[#C8923A]">{c.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby landmarks */}
              <div className="card p-6 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F5F3EF]/30 mb-2">
                  Nearby Landmarks
                </div>
                <div className="space-y-3">
                  {project.nearbyLandmarks.map((lm) => (
                    <div key={lm} className="flex items-center gap-3">
                      <MapPin size={13} weight="fill" className="text-[#C8923A] flex-shrink-0" />
                      <span className="text-sm text-[#F5F3EF]/60">{lm}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 text-center">
          <div className="max-w-xl mx-auto px-4 space-y-6">
            <span className="block w-10 h-0.5 bg-[#C8923A] rounded mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF] tracking-tight">
              Interested in {project.name}?
            </h2>
            <p className="text-sm text-[#F5F3EF]/50 leading-relaxed max-w-sm mx-auto">
              Our team will schedule a free site visit and walk you through all documentation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Visit <ArrowRight size={14} weight="bold" />
              </Link>
              <a href="tel:+919949736082" className="btn-ghost">
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
