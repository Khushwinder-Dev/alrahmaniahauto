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
  Search,
  ClipboardList,
  Wrench,
  CircleCheck,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { WORKSHOP_SERVICES, WORKSHOP_INFO, WORKSHOP_FAQS } from "@/data/workshopData";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Workshop Services" | "Interior & Accessories">("All");

  const filteredServices =
    selectedCategory === "All"
      ? WORKSHOP_SERVICES
      : WORKSHOP_SERVICES.filter((s) => s.category === selectedCategory);

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

  const steps = [
    {
      icon: Search,
      title: "1. Diagnostic / Inspection",
      desc: "Bring your vehicle to our Sharjah workshop or accessories center. Our certified technicians perform an in-depth computer scan or interior assessment.",
    },
    {
      icon: ClipboardList,
      title: "2. Transparent Estimate",
      desc: "We provide an itemized, clear quote with genuine parts and material options before touching a single bolt or cutting fabric. No surprise fees.",
    },
    {
      icon: Wrench,
      title: "3. Precision Craftsmanship",
      desc: "Our mechanics and upholstery masters carry out the work using advanced computerized equipment and 100% original high-grade materials.",
    },
    {
      icon: CircleCheck,
      title: "4. Quality Check & Handover",
      desc: "Your vehicle undergoes multi-point testing, road verification, and final sanitization before safe delivery with our comprehensive warranty.",
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[460px] overflow-hidden flex flex-col justify-center items-center bg-black pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Auto Workshop & Accessories"
            fill
            className="object-cover"
            src="/images/services-hero.png"
            priority
          />
          <div className="absolute inset-0 bg-black/75 backdrop-brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Al Rahmaniah Auto Services
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase leading-[0.95] text-white mb-4">
            Professional <span className="text-red-500">Workshop & Interior</span> Services
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
            Expert care for your car, every time you drive. Precision mechanical maintenance and bespoke custom interior craftsmanship in Sharjah Industrial Area 4.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="btn-primary text-white text-xs font-black uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/30 flex items-center gap-2"
            >
              <span>Book Service</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WORKSHOP_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-xs uppercase tracking-[0.25em] mb-3">
              <span className="text-[9px]">▲</span>
              EXPLORE OUR SERVICES
              <span className="text-[9px]">▲</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[54px] text-zinc-900 leading-[1.05] max-w-4xl mx-auto uppercase tracking-tight">
              Certified Mechanical Care & Custom Interior Fitment
            </h2>
            <p className="mt-3 text-zinc-600 text-sm md:text-base max-w-2xl mx-auto">
              Choose from our full range of official workshop services and luxury auto interior customization solutions.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {(["All", "Workshop Services", "Interior & Accessories"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    selectedCategory === tab
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30 scale-105"
                      : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"
                  }`}
                >
                  {tab === "All" ? "All Services (12)" : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-zinc-200/80 hover:border-red-500/40 relative"
              >
                {/* Category tag */}
                <div className="absolute top-3 right-3 z-20 bg-black/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                  {item.category === "Workshop Services" ? "Mechanical" : "Upholstery"}
                </div>

                {/* Service image */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
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
                    {getServiceIcon(item.id)}
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-black text-zinc-900 mb-2 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center gap-2">
                    <Link
                      href={`/services-details?service=${item.id}`}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider text-center transition-colors"
                    >
                      Details
                    </Link>
                    <Link
                      href={`/booking?service=${item.id}`}
                      className="flex-1 py-2.5 px-3 rounded-lg btn-primary text-white text-xs font-bold uppercase tracking-wider text-center shadow-xs transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works Banner */}
      <section className="relative py-24 px-6 overflow-hidden min-h-[500px] flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            alt="How it works background"
            fill
            className="object-cover object-center"
            src="/images/bottomcar.jpg"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-red-500 text-xs font-bold uppercase tracking-[0.25em] mb-2 block">
              Transparent & Reliable
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
              Our 4-Step Service Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 group hover:border-red-500/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white text-lg font-black mb-3 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-red-600 text-xs font-bold uppercase tracking-widest block">
                Got Questions?
              </span>
              <h2 className="text-4xl font-display font-black uppercase tracking-tight text-zinc-900">
                Frequently Asked Questions
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                Everything you need to know about our auto maintenance standards, genuine parts, custom interior stitching, and workshop booking.
              </p>
            </div>

            {/* Flyer Callout Card */}
            <div className="bg-zinc-900 text-white p-6 rounded-2xl border border-zinc-800 space-y-4">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest block">
                Direct Contact
              </span>
              <h4 className="text-xl font-display font-bold uppercase">
                Sharjah Industrial Area 4 Workshop
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Call our master advisors anytime for fast quotes, diagnostics questions, or custom upholstery inquiries.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${WORKSHOP_INFO.phones[0].replace(/\s+/g, "")}`}
                  className="px-4 py-2.5 rounded-lg bg-red-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {WORKSHOP_INFO.phones[0]}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 border-t border-zinc-200">
            {WORKSHOP_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-zinc-200">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex justify-between items-center w-full py-6 text-left group cursor-pointer"
                  >
                    <span
                      className={`text-sm md:text-base font-bold uppercase tracking-tight transition-colors ${
                        isOpen ? "text-red-600" : "text-zinc-800 group-hover:text-zinc-950"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ml-4 ${
                        isOpen ? "bg-red-600 text-white rotate-0" : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {isOpen ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-12">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
