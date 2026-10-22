"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Droplets,
  ShieldCheck,
  Car,
  Disc,
  Fan,
  Armchair,
  Sparkles,
  Layers,
  Battery,
  Shield,
  ArrowRight,
  Phone,
} from "lucide-react";
import { WORKSHOP_SERVICES, WORKSHOP_INFO } from "@/data/workshopData";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"All" | "Workshop Services" | "Interior & Accessories">("All");

  const filteredServices =
    activeTab === "All"
      ? WORKSHOP_SERVICES
      : WORKSHOP_SERVICES.filter((s) => s.category === activeTab);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "diagnostics":
        return <Cpu className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "brakes":
        return <ShieldCheck className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "oil-change":
        return <Droplets className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "wheel-alignment":
        return <Disc className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "ac-repair":
        return <Fan className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "suspension":
        return <Car className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "seat-covers":
        return <Armchair className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "roof-headliner":
        return <Sparkles className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "colored-seatbelts":
        return <Shield className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "floor-carpeting":
        return <Layers className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "battery":
        return <Battery className="relative z-20 text-white w-6 h-6 mt-4" />;
      case "interior-detailing":
        return <Sparkles className="relative z-20 text-white w-6 h-6 mt-4" />;
      default:
        return <Car className="relative z-20 text-white w-6 h-6 mt-4" />;
    }
  };

  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <span className="text-[9px]">▲</span>
            OUR PROFESSIONAL SERVICES
            <span className="text-[9px]">▲</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[54px] text-zinc-900 leading-[1.1] max-w-4xl mx-auto uppercase tracking-tight">
            Certified Mechanical Care & Custom Interior Fitment in Sharjah
          </h2>
          <p className="mt-4 text-zinc-600 text-sm md:text-base max-w-2xl mx-auto font-medium">
            From precision computerized diagnostics and brake repairs to handcrafted luxury seat covers and roof headliner restoration.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(["All", "Workshop Services", "Interior & Accessories"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30 scale-105"
                    : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"
                }`}
              >
                {tab === "All" ? "All Services (12)" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={`/services-details?service=${service.id}`}
              className="bg-white rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-zinc-200/80 hover:border-red-500/40 relative"
            >
              {/* Category tag */}
              <div className="absolute top-3 right-3 z-20 bg-black/75 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                {service.category === "Workshop Services" ? "Mechanical" : "Upholstery"}
              </div>

              {/* Service image */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Card content */}
              <div className="relative pt-12 pb-8 px-6 text-center flex-grow flex flex-col justify-between">
                {/* Triangular icon badge */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[-36px] w-[72px] h-[72px] z-10 flex items-center justify-center">
                  <svg
                    className="absolute inset-0 w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36 5L68 65H4L36 5Z"
                      fill="#dc2626"
                      stroke="#b91c1c"
                      strokeWidth="1"
                    />
                  </svg>
                  {getServiceIcon(service.id)}
                </div>

                <div>
                  <h3 className="text-xl font-display font-black text-zinc-900 mb-2 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer action */}
                <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-red-600 group-hover:text-red-700">
                  <span className="uppercase tracking-wider">View Details</span>
                  <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-14 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800 shadow-xl">
          <div className="text-center md:text-left">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-1">
              Need immediate service or custom quote?
            </span>
            <h4 className="text-2xl font-display font-black uppercase tracking-tight">
              Visit Al Rahmaniah Auto in Sharjah Industrial Area 4
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Walk-ins welcome or call ahead to reserve your dedicated workshop bay.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${WORKSHOP_INFO.phones[0].replace(/\s+/g, "")}`}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>{WORKSHOP_INFO.phones[0]}</span>
            </a>
            <Link
              href="/booking"
              className="px-6 py-3 rounded-xl btn-primary text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center gap-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
