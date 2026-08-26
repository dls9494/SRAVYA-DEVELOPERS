"use client";

import React, { useEffect, useRef } from "react";
import { Warning, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

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
      className="bg-transparent border-0 outline-none backdrop:bg-black/80 backdrop:backdrop-blur-sm p-4 w-full max-w-xl"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-[#1A1A1A] border border-[#D4A847]/30 rounded-lg shadow-2xl p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#D4A847]/30 pb-4">
              <div className="flex items-center gap-3 text-[#D4A847]">
                <Warning size={24} weight="bold" className="flex-shrink-0" />
                <h3 className="font-serif text-xl font-bold tracking-wide text-[#F5F3EF]">
                  Site Disclaimer
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#F5F3EF] transition-colors"
                aria-label="Close disclaimer dialog"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Content */}
            <div className="text-sm text-[#F5F3EF]/80 leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2 font-sans">
              <p>
                The information provided on this website for **Sravya Global Developers** (Registered Firm No: 791 of 2026, Government of Telangana) is for general informational and marketing purposes only. It does not constitute a legal offering, investment advice, or financial recommendation.
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
            <div className="flex items-center justify-end border-t border-[#D4A847]/30 pt-4 mt-2">
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#111111] bg-[#D4A847] hover:bg-[#C8923A] rounded-full transition-all duration-300"
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
