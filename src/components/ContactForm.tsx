"use client";

import React, { useState } from "react";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    { label: "Select a Venture", value: "" },
    { label: "GVR Kothapally", value: "gvr-kothapally" },
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
    // Clear validation error for that field on change
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
    // Simulate API request
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
      <form onSubmit={handleSubmit} className="space-y-5 font-sans">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary-950 mb-1.5 uppercase tracking-wider">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none transition-smooth text-charcoal ${
              errors.name
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-primary-900/20 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
              <AlertCircle size={12} />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Contact Group (Phone & Email) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-primary-950 mb-1.5 uppercase tracking-wider">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-[13px] text-sm text-charcoal/50 font-medium">+91</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className={`w-full pl-12 pr-4 py-3 rounded-lg border bg-white focus:outline-none transition-smooth text-charcoal ${
                  errors.phone
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-primary-900/20 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                <AlertCircle size={12} />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-primary-950 mb-1.5 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none transition-smooth text-charcoal ${
                errors.email
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-primary-900/20 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                <AlertCircle size={12} />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Project Selection Dropdown */}
        <div>
          <label htmlFor="project" className="block text-sm font-semibold text-primary-950 mb-1.5 uppercase tracking-wider">
            Interested Venture
          </label>
          <select
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-primary-900/20 bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-smooth text-charcoal"
          >
            {projectsList.map((proj) => (
              <option key={proj.value} value={proj.value}>
                {proj.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-primary-950 mb-1.5 uppercase tracking-wider">
            Your Inquiry Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements (e.g. plot size, budget, purpose of investment)..."
            className="w-full px-4 py-3 rounded-lg border border-primary-900/20 bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-smooth text-charcoal"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold uppercase tracking-wider text-primary-900 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-300 disabled:cursor-not-allowed rounded-lg transition-all duration-300 shadow-md hover:shadow-gold-500/10 mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <Send size={18} />
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
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSubmitSuccess(false)}
              className="absolute inset-0 bg-black"
            />
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative bg-ivory border border-gold-300 rounded-xl shadow-2xl p-8 max-w-sm w-full text-center space-y-6 overflow-hidden"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-900 flex items-center justify-center border border-gold-500 text-gold-500 animate-bounce">
                  <CheckCircle size={36} />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-primary-950">Thank You!</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Your enquiry has been successfully sent. Our investment representative will call you back within 24 hours.
                </p>
              </div>

              <button
                onClick={() => setSubmitSuccess(false)}
                className="w-full inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-900 bg-gold-500 hover:bg-gold-400 rounded-lg transition-all duration-300"
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
