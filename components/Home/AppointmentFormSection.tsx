"use client";

import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function AppointmentFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 py-16">
      <div className="relative min-h-[550px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header.png"
            alt="Al Rahmaniah Auto Workshop Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-xs md:bg-linear-to-r md:from-white/95 md:via-white/80 md:to-white/40" />
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3 block">
              Direct Workshop Booking
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 leading-[1.15] uppercase tracking-tight">
              Experience Premium Care – <span className="text-red-600">Al Rahmaniah Auto</span> <br className="hidden md:block" />
              Maintenance Workshop
            </h2>
            <p className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed max-w-xl">
              Schedule your fast-track service inspection, AC diagnostics, or custom upholstery fitting in Industrial Area 5, Sharjah.
            </p>
          </div>

          <div className="relative flex justify-end">
            <div className="w-full max-w-lg bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-2xl">
              <h3 className="text-xl font-display font-bold text-zinc-900 mb-6">
                Book An Appointment
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-zinc-900 text-sm outline-none focus:border-red-600 focus:bg-white transition-colors"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-zinc-900 text-sm outline-none focus:border-red-600 focus:bg-white transition-colors"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-zinc-900 text-sm outline-none focus:border-red-600 focus:bg-white transition-colors"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Vehicle & Model"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-zinc-900 text-sm outline-none focus:border-red-600 focus:bg-white transition-colors"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Subject / Service Needed"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-zinc-900 text-sm outline-none focus:border-red-600 focus:bg-white transition-colors"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                <textarea
                  rows={3}
                  placeholder="Additional Notes or Symptoms..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-zinc-900 text-sm outline-none focus:border-red-600 focus:bg-white transition-colors"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Confirm Appointment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
