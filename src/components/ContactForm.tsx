"use client";

import React, { useState } from "react";
import { CheckCircle, WarningCircle, PaperPlaneRight, Spinner } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

interface ContactFormProps {
  projectSlug?: string;
}

export default function ContactForm({ projectSlug = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: projectSlug,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectsList = [
    { label: "Select a Service", value: "" },
    { label: "Layout Designs & Approvals", value: "layout-designs" },
    { label: "Layout Developments (HMDA/FCDA/DTCP)", value: "layout-developments" },
    { label: "Earth Work", value: "earth-work" },
    { label: "Landscaping", value: "landscaping" },
    { label: "Building Plans", value: "building-plans" },
    { label: "Land Survey", value: "land-survey" },
    { label: "Quantity Surveys", value: "quantity-surveys" },
    { label: "Plot Investment (GVR Kothapally)", value: "plot-investment" },
    { label: "Other", value: "other" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: projectSlug,
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5 font-sans bg-[#1A1A1A] p-6 rounded-lg border border-[#D4A847]/30">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#F5F3EF] mb-1.5 uppercase tracking-wider">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-lg border bg-[#111111] text-[#F5F3EF] placeholder:text-[#F5F3EF]/30 focus:outline-none transition-all ${
              errors.name
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-[#D4A847]/30 focus:border-[#D4A847] focus:ring-1 focus:ring-[#D4A847]"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
              <WarningCircle size={12} weight="bold" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Contact Group (Phone & Email) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[#F5F3EF] mb-1.5 uppercase tracking-wider">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-[13px] text-sm text-[#F5F3EF]/50 font-medium">+91</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className={`w-full pl-12 pr-4 py-3 rounded-lg border bg-[#111111] text-[#F5F3EF] placeholder:text-[#F5F3EF]/30 focus:outline-none transition-all ${
                  errors.phone
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-[#D4A847]/30 focus:border-[#D4A847] focus:ring-1 focus:ring-[#D4A847]"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                <WarningCircle size={12} weight="bold" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#F5F3EF] mb-1.5 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className={`w-full px-4 py-3 rounded-lg border bg-[#111111] text-[#F5F3EF] placeholder:text-[#F5F3EF]/30 focus:outline-none transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-[#D4A847]/30 focus:border-[#D4A847] focus:ring-1 focus:ring-[#D4A847]"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                <WarningCircle size={12} weight="bold" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Project Selection Dropdown */}
        <div>
          <label htmlFor="project" className="block text-sm font-semibold text-[#F5F3EF] mb-1.5 uppercase tracking-wider">
            Interested Service / Venture
          </label>
          <select
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#D4A847]/30 bg-[#111111] text-[#F5F3EF] focus:outline-none focus:border-[#D4A847] focus:ring-1 focus:ring-[#D4A847] transition-all"
          >
            {projectsList.map((proj) => (
              <option key={proj.value} value={proj.value} className="bg-[#111111]">
                {proj.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#F5F3EF] mb-1.5 uppercase tracking-wider">
            Your Inquiry Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            className="w-full px-4 py-3 rounded-lg border border-[#D4A847]/30 bg-[#111111] text-[#F5F3EF] placeholder:text-[#F5F3EF]/30 focus:outline-none focus:border-[#D4A847] focus:ring-1 focus:ring-[#D4A847] transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold uppercase tracking-wider text-[#111111] bg-[#D4A847] hover:bg-[#C8923A] disabled:opacity-70 disabled:cursor-not-allowed rounded-full transition-all duration-300 mt-2"
        >
          {isSubmitting ? (
            <>
              <Spinner size={18} weight="bold" className="animate-spin" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <PaperPlaneRight size={18} weight="bold" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>
      </form>

      {/* Success Modal Popup */}
      <AnimatePresence>
        {submitSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSubmitSuccess(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative bg-[#1A1A1A] border border-[#D4A847]/30 rounded-lg shadow-2xl p-8 max-w-sm w-full text-center space-y-6 overflow-hidden"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center border border-[#D4A847] text-[#D4A847]">
                  <CheckCircle size={36} weight="fill" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#F5F3EF]">Thank You!</h3>
                <p className="text-sm text-[#F5F3EF]/80 leading-relaxed font-sans">
                  Your enquiry has been successfully sent. Our team will contact you shortly.
                </p>
              </div>

              <button
                onClick={() => setSubmitSuccess(false)}
                className="w-full inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#111111] bg-[#D4A847] hover:bg-[#C8923A] rounded-full transition-all duration-300"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
