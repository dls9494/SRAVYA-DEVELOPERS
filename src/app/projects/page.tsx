"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react";
import { projectsData } from "@/data/projects";
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

const STATUS_COLORS: Record<string, string> = {
  Ongoing: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Completed: "text-[#C8923A] bg-[#C8923A]/10 border-[#C8923A]/20",
  Upcoming: "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

export default function ProjectsPage() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  // Only show Ongoing projects (as per business requirement)
  const ongoingProjects = projectsData.filter((p) => p.status === "Ongoing");

  return (
    <>
      <Header />

      <main>
        {/* ── Page Hero ── */}
        <section className="relative min-h-[45dvh] flex items-center pt-20 overflow-hidden" aria-label="Projects page hero">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gvr-kothapally/gvr-04.jpeg"
              alt="Sravya Projects"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/75 to-[#0C0C0C]/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="amber-line" />
              <h1 className="t-display text-[#F5F3EF] max-w-xl mt-4">
                Our Projects
              </h1>
              <p className="t-body max-w-md mt-4">
                Carefully selected, legally approved villa plotting communities across Hyderabad's fastest-growing corridors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Projects list ── */}
        <section className="py-24 md:py-32" aria-label="Project listings">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Reveal className="flex items-center justify-between gap-4">
              <h2 className="t-headline text-[#F5F3EF]">Ongoing Projects</h2>
              <span className="text-sm text-[#F5F3EF]/30">{ongoingProjects.length} active venture{ongoingProjects.length !== 1 ? "s" : ""}</span>
            </Reveal>

            {ongoingProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                  aria-label={`View ${project.name} project`}
                >
                  <div className="card overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-[#C8923A]/25 transition-colors duration-300">
                    {/* Image */}
                    <div className="relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/50 to-transparent lg:bg-gradient-to-l lg:from-[#0C0C0C]/30 lg:to-transparent" />
                    </div>

                    {/* Details */}
                    <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
                      <div className="space-y-4">
                        {/* Status badge */}
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-[0.1em] border ${STATUS_COLORS[project.status] || ""}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {project.status}
                        </span>

                        <h3 className="text-2xl font-bold text-[#F5F3EF] tracking-tight">
                          {project.name}
                        </h3>

                        <div className="flex items-start gap-2 text-sm text-[#F5F3EF]/50">
                          <MapPin size={14} weight="fill" className="text-[#C8923A] mt-0.5 flex-shrink-0" />
                          <span>{project.location}</span>
                        </div>

                        <p className="text-sm text-[#F5F3EF]/50 leading-relaxed line-clamp-3">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Key facts */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="stat-chip">
                          <span className="t-caption text-[#C8923A] text-[10px]">Starting Price</span>
                          <span className="font-bold text-[#F5F3EF] text-sm">{project.startingPrice}</span>
                        </div>
                        <div className="stat-chip">
                          <span className="t-caption text-[#C8923A] text-[10px]">Plot Sizes</span>
                          <span className="font-bold text-[#F5F3EF] text-sm">{project.plotSizes}</span>
                        </div>
                        <div className="stat-chip">
                          <span className="t-caption text-[#C8923A] text-[10px]">Total Area</span>
                          <span className="font-bold text-[#F5F3EF] text-sm">{project.totalArea}</span>
                        </div>
                        <div className="stat-chip">
                          <span className="t-caption text-[#C8923A] text-[10px]">Total Plots</span>
                          <span className="font-bold text-[#F5F3EF] text-sm">{project.totalPlots}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                        <span className="text-xs text-[#F5F3EF]/30 font-mono">{project.reraNumber}</span>
                        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C8923A] group-hover:gap-2.5 transition-all duration-200">
                          View Details <ArrowUpRight size={14} weight="bold" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}
