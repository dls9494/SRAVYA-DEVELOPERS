"use client";

import React from "react";
import * as Icons from "lucide-react";

interface AmenityItem {
  icon: string;
  title: string;
  description: string;
}

interface AmenitiesProps {
  items: AmenityItem[];
  title?: string;
  subtitle?: string;
}

export default function Amenities({ items, title, subtitle }: AmenitiesProps) {
  // Dynamically map icon names to Lucide icons with fallback to check
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "road":
        return <Icons.Compass className="w-8 h-8 text-gold-500" />;
      case "shield":
        return <Icons.ShieldCheck className="w-8 h-8 text-gold-500" />;
      case "droplet":
        return <Icons.Droplet className="w-8 h-8 text-gold-500" />;
      case "zap":
        return <Icons.Zap className="w-8 h-8 text-gold-500" />;
      case "trees":
        return <Icons.Trees className="w-8 h-8 text-gold-500" />;
      case "smile":
        return <Icons.Smile className="w-8 h-8 text-gold-500" />;
      case "dumbbell":
        return <Icons.Dumbbell className="w-8 h-8 text-gold-500" />;
      case "activity":
        return <Icons.Activity className="w-8 h-8 text-gold-500" />;
      case "trophy":
        return <Icons.Trophy className="w-8 h-8 text-gold-500" />;
      case "coffee":
        return <Icons.Coffee className="w-8 h-8 text-gold-500" />;
      case "pocket":
        return <Icons.Waves className="w-8 h-8 text-gold-500" />; // Swimming Pool
      case "sun":
        return <Icons.Sun className="w-8 h-8 text-gold-500" />;
      case "tv":
        return <Icons.Grid3X3 className="w-8 h-8 text-gold-500" />; // Drainage
      case "leaf":
        return <Icons.Leaf className="w-8 h-8 text-gold-500" />;
      case "radio":
        return <Icons.Cctv className="w-8 h-8 text-gold-500" />; // CCTV
      default:
        // Try looking up in Icons list or fallback
        const LucideIcon = (Icons as any)[iconName];
        if (LucideIcon) {
          return <LucideIcon className="w-8 h-8 text-gold-500" />;
        }
        return <Icons.CheckCircle className="w-8 h-8 text-gold-500" />;
    }
  };

  return (
    <div className="space-y-10 font-sans">
      {/* Title Header */}
      {(title || subtitle) && (
        <div className="text-center space-y-2">
          {subtitle && (
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-950">
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Grid of Amenities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 rounded-xl border border-primary-900/10 bg-white hover:border-gold-300 transition-all duration-300 shadow-sm"
          >
            <div className="p-3 rounded-lg bg-primary-900/5 flex-shrink-0 flex items-center justify-center">
              {getIcon(item.icon)}
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-lg font-bold text-primary-950">
                {item.title}
              </h4>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
