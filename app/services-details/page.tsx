"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  Shield,
  ArrowRight,
  Phone,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { WORKSHOP_SERVICES, WORKSHOP_INFO, ServiceItem } from "@/data/workshopData";

function ServiceDetailsContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [selectedService, setSelectedService] = useState<ServiceItem>(
    WORKSHOP_SERVICES[0]
  );

  useEffect(() => {
    if (serviceParam) {
      const found = WORKSHOP_SERVICES.find(
        (s) =>
          s.id.toLowerCase() === serviceParam.toLowerCase() ||
          s.title.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (found) {
        setSelectedService(found);
      }
    }
  }, [serviceParam]);

  const workshopServices = WORKSHOP_SERVICES.filter(
    (s) => s.category === "Workshop Services"
  );
  const interiorServices = WORKSHOP_SERVICES.filter(
    (s) => s.category === "Interior & Accessories"
  );

  const whatsappInquiryUrl = `${WORKSHOP_INFO.whatsappUrl}&text=${encodeURIComponent(
    `Hello Al Rahmaniah Auto, I am interested in booking the "${selectedService.title}" service for my vehicle.`
  )}`;

  return (
    <div className="bg-white">
      {/* Page Hero Banner */}
      <section className="relative w-full h-[52vh] min-h-[400px] overflow-hidden flex flex-col justify-center items-center bg-black pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.png"
            alt="Service Details Al Rahmaniah Auto"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            {selectedService.category}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase leading-[0.95] text-white mb-3">
            {selectedService.title} <span className="text-red-500">Service</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
            Expert care for your car. Certified workshop mechanical maintenance & custom interior upholstery in Sharjah Industrial Area 4.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sidebar: Service Selector & Contact */}
          <div className="lg:col-span-4 space-y-8">
            {/* Service Nav Tabs */}
            <div className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-6 shadow-xs">
              <h3 className="font-display font-black text-xl text-zinc-900 uppercase tracking-tight mb-4 pb-3 border-b border-zinc-200">
                Workshop Services
              </h3>
              <div className="space-y-1.5 mb-6">
                {workshopServices.map((s) => {
                  const isActive = s.id === selectedService.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wide transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                          : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
                      }`}
                    >
                      <span className="truncate pr-2">{s.title}</span>
                      <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-zinc-400"}`} />
                    </button>
                  );
                })}
              </div>

              <h3 className="font-display font-black text-xl text-zinc-900 uppercase tracking-tight mb-4 pb-3 border-b border-zinc-200">
                Interior & Accessories
              </h3>
              <div className="space-y-1.5">
                {interiorServices.map((s) => {
                  const isActive = s.id === selectedService.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wide transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                          : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
                      }`}
                    >
                      <span className="truncate pr-2">{s.title}</span>
                      <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-zinc-400"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact & Book Box */}
            <div className="bg-[#0c0c0e] text-white rounded-2xl p-7 border border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.25em] block">
                  Need Fast Assistance?
                </span>
                <h4 className="font-display font-black text-2xl uppercase tracking-tight">
                  Speak to Our Workshop Manager
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Call or WhatsApp our Sharjah team directly for immediate advice, quotes, and slot confirmation.
                </p>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={`tel:${WORKSHOP_INFO.phones[0].replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-xs sm:text-sm text-white font-bold bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors border border-white/10"
                  >
                    <Phone className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{WORKSHOP_INFO.phones[0]}</span>
                  </a>

                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs sm:text-sm text-white font-bold bg-emerald-600/30 hover:bg-emerald-600/50 p-3 rounded-xl transition-colors border border-emerald-500/30"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <Link
                  href={`/booking?service=${selectedService.id}`}
                  className="w-full btn-primary text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 mt-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {selectedService.title}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Big Main Image */}
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10 bg-red-600 text-white font-black text-xs uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">
                {selectedService.category}
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-900 uppercase tracking-tight">
                {selectedService.title} Service Overview
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
              <h3 className="font-display font-black text-2xl text-zinc-900 uppercase tracking-tight mb-6">
                What&#39;s Included in This Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-zinc-200/80 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700 text-sm font-medium leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications & Warranty Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-zinc-200 rounded-2xl p-6 bg-white shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider">
                    Average Duration
                  </span>
                  <p className="text-lg font-black text-zinc-900 mt-0.5">
                    {selectedService.duration || "45 - 60 Minutes"}
                  </p>
                </div>
              </div>

              <div className="border border-zinc-200 rounded-2xl p-6 bg-white shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider">
                    Warranty Term
                  </span>
                  <p className="text-lg font-black text-zinc-900 mt-0.5">
                    {selectedService.warranty || "100% Guaranteed Workmanship"}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Booking Action */}
            <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-zinc-900 text-lg">
                  Ready to book {selectedService.title}?
                </p>
                <p className="text-zinc-500 text-xs sm:text-sm">
                  Choose your preferred date and time at our Sharjah Industrial Area 4 shop.
                </p>
              </div>

              <Link
                href={`/booking?service=${selectedService.id}`}
                className="btn-primary text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl shadow-red-600/30 whitespace-nowrap"
              >
                Proceed to Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesDetailsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white pt-32 text-center">Loading Service Details...</div>}>
      <ServiceDetailsContent />
    </Suspense>
  );
}
