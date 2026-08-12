"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
  showFilters?: boolean;
  limit?: number;
}

export default function ProjectGrid({ projects, showFilters = true, limit }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = ["All", "Ongoing"];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.status.toLowerCase() === activeFilter.toLowerCase();
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="space-y-8 font-sans">
      {/* Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-primary-900/10 pb-6">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? "text-primary-950 border-gold-500 bg-gold-500 font-bold shadow-md shadow-gold-500/10"
                    : "text-charcoal/70 border-primary-900/15 hover:border-gold-400 hover:text-gold-600 bg-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid List */}
      {displayedProjects.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-16 bg-white border border-primary-900/10 rounded-xl max-w-xl mx-auto space-y-3">
          <p className="text-lg font-serif font-bold text-primary-950">No Ventures Found</p>
          <p className="text-sm text-charcoal/60 leading-relaxed px-4">
            We are preparing new premium land developments in this category. Please check back soon or contact our support team.
          </p>
        </div>
      )}
    </div>
  );
}
