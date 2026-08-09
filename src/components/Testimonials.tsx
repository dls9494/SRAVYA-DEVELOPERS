"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Dr. K. Srinivas Rao",
    role: "Medical Practitioner & Investor",
    location: "Kondapur, Hyderabad",
    text: "Sravya Global Developers stands out for their absolute transparency. I purchased a plot in their Yacharam project, and the title deeds were completely clear, and registration was handled seamlessly. The land value has already shown incredible appreciation.",
    rating: 5,
  },
  {
    name: "Priya Chandrasekhar",
    role: "Software Architect",
    location: "Gachibowli, Hyderabad",
    text: "As an NRI, finding trustworthy real estate partners in India is tough. Sravya Global made the entire plotting purchase process extremely straightforward. Their gating quality, infrastructure development, and compliance documentation are top-notch.",
    rating: 5,
  },
  {
    name: "Venkatesh Naidu",
    role: "Retired Government Officer",
    location: "Secunderabad",
    text: "I bought a villa plot in Rampally to build my retirement home. The development is exactly as promised—wide roads, underground electricity, and parks are beautifully finished. Truly a professional team that keeps their word.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const activeTestimonial = testimonialsData[currentIdx];

  return (
    <div className="max-w-4xl mx-auto px-4 font-sans text-center space-y-8 relative py-6">
      
      {/* Quote Icon */}
      <div className="flex justify-center">
        <div className="w-14 h-14 rounded-full bg-primary-900/5 flex items-center justify-center border border-gold-500/20 text-gold-500">
          <Quote size={28} className="fill-current" />
        </div>
      </div>

      {/* Review Box Slider */}
      <div className="relative overflow-hidden min-h-[220px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="space-y-6 max-w-2xl"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-base md:text-lg text-charcoal/80 leading-relaxed font-serif italic">
              "{activeTestimonial.text}"
            </p>

            {/* Client Bio */}
            <div className="space-y-0.5">
              <h4 className="font-serif text-lg font-bold text-primary-950">
                {activeTestimonial.name}
              </h4>
              <p className="text-xs text-gold-600 font-semibold uppercase tracking-wider">
                {activeTestimonial.role} · <span className="text-charcoal/50">{activeTestimonial.location}</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-center gap-4 pt-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-primary-900/10 flex items-center justify-center text-primary-950 hover:bg-gold-500 hover:border-gold-500 hover:text-primary-950 transition-all duration-300"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Bullet Indicators */}
        <div className="flex gap-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIdx ? 1 : -1);
                setCurrentIdx(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIdx ? "w-6 bg-gold-500" : "bg-primary-900/15 hover:bg-gold-300"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-primary-900/10 flex items-center justify-center text-primary-950 hover:bg-gold-500 hover:border-gold-500 hover:text-primary-950 transition-all duration-300"
          aria-label="Next Testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </div>
  );
}
