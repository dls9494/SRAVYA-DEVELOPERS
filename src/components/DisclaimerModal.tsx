"use client";

import React, { useEffect, useRef } from "react";
import { AlertTriangle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      // Prevent body scrolling
      document.body.style.overflow = "hidden";
      dialog.showModal();
    } else {
      document.body.style.overflow = "";
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle native escape close event
  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      className="bg-transparent border-0 outline-none backdrop:bg-black/65 backdrop:backdrop-blur-sm p-4 w-full max-w-xl"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-ivory border border-gold-300 rounded-xl shadow-2xl p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gold-300/40 pb-4">
              <div className="flex items-center gap-3 text-gold-600">
                <AlertTriangle size={24} className="flex-shrink-0" />
                <h3 className="font-serif text-xl font-bold tracking-wide text-primary-950">
                  Site Disclaimer
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-gold-200/50 text-primary-900 transition-colors"
                aria-label="Close disclaimer dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="text-sm text-charcoal/80 leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                The information provided on this website for **Sravya Global Developers** is for general informational and marketing purposes only. It does not constitute a legal offering, investment advice, or financial recommendation.
              </p>
              <p>
                All specifications, project details, plots sizes, pricing structures, layouts, connectivity statistics, RERA numbers, and landmark distance references are illustrative placeholders and subject to modification without prior notice. The final designs, area specifications, and prices will be specified in the agreement of sale.
              </p>
              <p>
                Sravya Global Developers is dedicated to obtaining all necessary permissions (including HMDA/DTCP and TS RERA) for our ongoing and upcoming ventures. However, all prospective buyers are strongly advised to independently verify all layout plans, ownership deeds, and regulatory approvals before entering into any purchase commitment.
              </p>
              <p>
                By using this website, you acknowledge and agree that the developer, its employees, or agents will not be liable for any investment decisions made or financial damage suffered based on the information provided here.
              </p>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end border-t border-gold-300/40 pt-4 mt-2">
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-900 bg-gold-500 hover:bg-gold-400 rounded-lg transition-all duration-300 shadow-md shadow-gold-500/10"
              >
                I Agree & Proceed
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  );
}
