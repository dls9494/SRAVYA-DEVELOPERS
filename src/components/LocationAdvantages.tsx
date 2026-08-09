"use client";

import React from "react";
import { Compass, Landmark, Clock } from "lucide-react";

interface ConnectivityItem {
  destination: string;
  distance: string;
}

interface LocationAdvantagesProps {
  mapEmbedUrl: string;
  connectivity: ConnectivityItem[];
  nearbyLandmarks: string[];
  projectName: string;
}

export default function LocationAdvantages({
  mapEmbedUrl,
  connectivity,
  nearbyLandmarks,
  projectName,
}: LocationAdvantagesProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-sans items-stretch">
      {/* Map Section */}
      <div className="rounded-xl overflow-hidden border border-primary-900/10 shadow-md min-h-[350px] relative bg-primary-900/5">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "350px" }}
          allowFullScreen
          loading="lazy"
          title={`${projectName} Location Map`}
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Proximity & Details */}
      <div className="flex flex-col justify-between gap-8">
        
        {/* Connectivity List */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary-950 font-serif text-xl font-bold">
            <Compass size={20} className="text-gold-500" />
            <h3>Connectivity & Commute</h3>
          </div>
          
          <div className="border border-primary-900/10 rounded-xl overflow-hidden bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-primary-900 text-ivory text-xs uppercase tracking-wider font-semibold">
                  <th className="px-5 py-3.5">Destination</th>
                  <th className="px-5 py-3.5 text-right">Commute Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-900/5">
                {connectivity.map((item, idx) => (
                  <tr key={idx} className="hover:bg-ivory/50 transition-colors">
                    <td className="px-5 py-3 text-charcoal/80 font-medium">{item.destination}</td>
                    <td className="px-5 py-3 text-right text-primary-800 font-bold flex items-center justify-end gap-1.5">
                      <Clock size={12} className="text-gold-500" />
                      <span>{item.distance}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary-950 font-serif text-xl font-bold">
            <Landmark size={20} className="text-gold-500" />
            <h3>Key Landmarks Nearby</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nearbyLandmarks.map((landmark, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-primary-900/5 bg-white shadow-sm hover:border-gold-300 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                <span className="text-sm text-charcoal/80 font-medium">{landmark}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
