"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Expand, Layers, BadgePercent, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    Completed: "bg-emerald-900/90 text-emerald-300 border-emerald-500/40",
    Ongoing: "bg-amber-900/90 text-amber-300 border-amber-500/40",
    Upcoming: "bg-sky-900/90 text-sky-300 border-sky-500/40",
  };

  return (
    <div className="group bg-white border border-primary-900/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-gold-300 transition-all duration-300 flex flex-col h-full font-sans">
      
      {/* Project Image & Status Badge */}
      <div className="relative aspect-video w-full overflow-hidden bg-primary-950">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={project.slug === "rustic-valley"}
        />
        
        {/* Status Tag */}
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-sm ${
            statusColors[project.status]
          }`}
        >
          {project.status}
        </span>

        {/* RERA Badge Overlay */}
        <span className="absolute bottom-4 right-4 px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-black/70 text-gold-300 border border-gold-500/25 backdrop-blur-sm">
          {project.reraNumber.includes("XXXX") || project.reraNumber.includes("PROGRESS") ? "RERA Pending/Exempt" : "RERA Registered"}
        </span>
      </div>

      {/* Card Info Section */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        
        {/* Location & Title */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1 text-xs text-charcoal/60 font-semibold tracking-wider uppercase">
            <MapPin size={13} className="text-gold-500" />
            <span>{project.location.split(",")[1]?.trim() || project.location.split("(")[0]?.trim()}</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-primary-950 group-hover:text-gold-600 transition-colors">
            {project.name}
          </h3>
          <p className="text-xs text-gold-600 font-semibold uppercase tracking-wider">
            {project.type}
          </p>
        </div>

        {/* Description Snippet */}
        <p className="text-sm text-charcoal/70 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-primary-900/5 text-center bg-ivory/40 rounded-lg">
          <div className="space-y-0.5">
            <span className="block text-[10px] text-charcoal/50 uppercase font-semibold tracking-wider">Sizes</span>
            <div className="flex items-center justify-center gap-1 text-xs font-bold text-primary-950">
              <Expand size={11} className="text-gold-500" />
              <span>{project.plotSizes.split(" ")[0]} Yds</span>
            </div>
          </div>
          
          <div className="space-y-0.5 border-x border-primary-900/5">
            <span className="block text-[10px] text-charcoal/50 uppercase font-semibold tracking-wider">Area</span>
            <div className="flex items-center justify-center gap-1 text-xs font-bold text-primary-950">
              <Layers size={11} className="text-gold-500" />
              <span>{project.totalArea.split(" ")[0]} Ac</span>
            </div>
          </div>

          <div className="space-y-0.5">
            <span className="block text-[10px] text-charcoal/50 uppercase font-semibold tracking-wider">Starting</span>
            <div className="flex items-center justify-center gap-1 text-xs font-bold text-primary-950">
              <BadgePercent size={12} className="text-gold-500" />
              <span>{project.startingPrice.includes("XXXX") || project.startingPrice.includes("[STARTING PRICE]") ? "Ask Price" : project.startingPrice.replace(" Lakhs", "")}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-primary-900/20 text-primary-900 hover:text-white hover:bg-primary-900 hover:border-primary-900 font-semibold text-sm uppercase tracking-wider transition-all duration-300"
          >
            <span>Explore Venture</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </div>
  );
}
