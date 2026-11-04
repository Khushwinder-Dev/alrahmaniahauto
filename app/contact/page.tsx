"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleModel: "",
    serviceNeeded: "Routine Maintenance",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent. We will respond promptly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicleModel: "",
        serviceNeeded: "Routine Maintenance",
        message: "",
      });
    }, 1000);
  };

  const getWhatsAppDirectUrl = () => {
    const text = encodeURIComponent(
      `Hello Al Rahmaniah Auto! I am contacting you from your website. My name is ${
        formData.name || "Customer"
      } and I would like to inquire about automotive services for my car.`
    );
    return `https://wa.me/971507860161?text=${text}`;
  };

  return (
    <main className="bg-zinc-50 text-zinc-900 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Workshop Location"
            fill
            className="object-cover object-center"
            src="/images/services-hero.png"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0c]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-6 text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>AL RAHMANIAH AUTO WORKSHOP SHARJAH</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4 text-white">
            <span>Contact </span>
            <span className="text-red-600">Our Workshop</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
            Conveniently located in Industrial Area 5, Sharjah. Reach our team for fast bookings, computerized diagnostics, genuine spare parts, and emergency towing.
          </p>
        </div>
      </section>

      {/* 2. Quick Contact Cards Strip (Wolmart style) */}
      <section className="w-full py-12 bg-white border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Location */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 hover:border-red-600/70 transition-all duration-300 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                Our Location
              </span>
              <h3 className="font-bold text-base text-zinc-900 mt-1">Sharjah Workshop</h3>
              <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                Industrial Area No 5, Sharjah, United Arab Emirates
              </p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 hover:border-red-600/70 transition-all duration-300 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                Call Us Directly
              </span>
              <h3 className="font-bold text-base text-zinc-900 mt-1">Direct Hotline</h3>
              <a
                href="tel:+971507860161"
                className="text-xs font-bold text-zinc-700 hover:text-red-600 block mt-1 transition-colors"
              >
                +971 50 786 0161
              </a>
            </div>
          </div>

          {/* Card 3: Working Hours */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 hover:border-red-600/70 transition-all duration-300 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                Operating Hours
              </span>
              <h3 className="font-bold text-base text-zinc-900 mt-1">Sat - Thu</h3>
              <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                8:00 AM - 10:00 PM <br />
                <span className="text-zinc-400">Friday: 2:00 PM - 10:00 PM</span>
              </p>
            </div>
          </div>

          {/* Card 4: WhatsApp */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 hover:border-emerald-500 transition-all duration-300 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                Instant Chat
              </span>
              <h3 className="font-bold text-base text-zinc-900 mt-1">WhatsApp Desk</h3>
              <a
                href="https://wa.me/971507860161"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 hover:underline block mt-1"
              >
                Chat with Technicians
              </a>
            </div>
          </div>

        </div>
      </div>
      </section>

      {/* 3. Main Form & Map Area */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200 shadow-xl">
              <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-3">
                <Send className="w-4 h-4" />
                <span>Send Us a Message</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 mb-2">
                Have a Question or Inquiring About Products?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mb-8 leading-relaxed">
                Fill in the details below, and our workshop manager will contact you with pricing and schedule availability.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sultan Al Nuaimi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sultan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                      Vehicle Model &amp; Year
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nissan Patrol 2020"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    Product / Accessory Inquired
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                  >
                    <option value="Custom Seat Covers">Custom Car Seat Covers (Napa / PVC / Fabric)</option>
                    <option value="Floor Mats">7D / 5D Molded Luxury Floor Mats</option>
                    <option value="Colored Seatbelts">Custom Colored Safety Belts</option>
                    <option value="Roof Headliners">Starlight Ceiling &amp; Suede Headliner</option>
                    <option value="Car Electronics">Android Screens &amp; DSP Audio Upgrades</option>
                    <option value="LED Headlights">Laser LED Headlamps &amp; Ambient Strips</option>
                    <option value="Car Care &amp; Styling">Sunshades, Window Tints &amp; Aero Kits</option>
                    <option value="Wholesale Inquiry">Wholesale Supply &amp; Bulk Ordering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    Message / Product Specifications or Vehicle Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your vehicle make, model, desired color, or custom accessories needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-8 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full text-xs uppercase tracking-widest transition-all shadow-md shadow-red-600/30 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                  <a
                    href={getWhatsAppDirectUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-xs uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Map & Directions (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-xl">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-1">
                  <Navigation className="w-4 h-4" />
                  <span>Workshop Directions</span>
                </div>
                <h3 className="font-display font-extrabold text-xl text-zinc-900">
                  Visit Us in Industrial Area 5
                </h3>
              </div>

              <div className="w-full h-80 relative bg-zinc-100">
                <iframe
                  title="Al Rahmaniah Auto Location"
                  src="https://maps.google.com/maps?q=Industrial+Area+5+Sharjah+UAE&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="p-6 pt-4 text-xs text-zinc-500 space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Easily accessible from E11 (Al Wahda St) and E311 (Sheikh Mohammed Bin Zayed Rd).</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Free dedicated customer parking and vehicle reception bays.</span>
                </p>
              </div>
            </div>

            {/* Emergency Recovery Banner */}
            <div className="bg-gradient-to-br from-red-50 via-white to-red-50/50 border border-red-200 rounded-3xl p-6 sm:p-8 shadow-md">
              <span className="text-red-600 text-xs font-bold uppercase tracking-wider block mb-1">
                Emergency Breakdown Assistance
              </span>
              <h4 className="text-xl font-display font-bold text-zinc-900 mb-2">
                Car Broken Down or Need Towing?
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                Our flatbed recovery trucks operate across Sharjah and Dubai to bring your vehicle safely to our workshop.
              </p>
              <a
                href="tel:+971507860161"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Recovery</span>
              </a>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
