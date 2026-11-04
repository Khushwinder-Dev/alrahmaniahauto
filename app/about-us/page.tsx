"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ThumbsUp,
  Award,
  UserCheck,
  Handshake,
  Tag,
  Zap,
  Star,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock,
  ArrowRight,
  Car,
  Layers,
  Sparkles,
} from "lucide-react";

export default function AboutUsPage() {
  const reasons = [
    {
      icon: <UserCheck className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: "Custom Fitment & Precision Craftsmanship",
      desc: "Laser-tailored seat covers, 7D molded mats, and accessories crafted for exact factory contours and flawless finish.",
    },
    {
      icon: <Handshake className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: "100% Upfront Pricing",
      desc: "Transparent price breakdown with zero hidden fees. Detailed digital quotation provided and approved before crafting.",
    },
    {
      icon: <Zap className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: "Fast UAE Delivery & Showroom Fitting",
      desc: "Express courier delivery across all 7 Emirates, plus dedicated showroom fitting bays in Sharjah Industrial Area 4 & 5.",
    },
    {
      icon: <Star className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: "Extreme Heat & UV Durability",
      desc: "Engineered specifically for the harsh Gulf climate using anti-cracking, UV-resistant Napa leather and high-grade materials.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: "Satisfaction & Product Warranty",
      desc: "Every product carries our quality guarantee, and bespoke leather upholstery comes with up to 3 years written warranty.",
    },
    {
      icon: <Layers className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: "In-House Master Tailoring",
      desc: "Bespoke 3D diamond quilted car seat covers, colored safety belts, and interior restoration hand-tailored in our Sharjah studio.",
    },
  ];

  const milestones = [
    { number: "20,000+", label: "Vehicles Upgraded & Styled", desc: "Across Sharjah, Dubai & Northern Emirates" },
    { number: "15+", label: "Years of Craftsmanship", desc: "Showrooms in Sharjah Industrial Area 4 & 5" },
    { number: "99.4%", label: "Customer Satisfaction", desc: "Based on 2,500+ verified customer reviews" },
    { number: "500+", label: "Products & Accessories", desc: "Premium in-stock catalog with fast delivery" },
  ];

  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[450px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Auto Accessories Facility"
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
            <span>AL RAHMANIAH AUTO ACCESSORIES &amp; STYLING</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4 text-white">
            <span>About </span>
            <span className="text-red-600">Al Rahmaniah Auto</span>
          </h1>

          <p className="max-w-xl mx-auto text-zinc-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
            Delivering bespoke automotive luxury, custom leather seat covers, 7D floor mats, and advanced car electronics in Sharjah since 2012.
          </p>
        </div>
      </section>

      {/* 2. Trust Stats Strip */}
      <section className="w-full py-12 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-zinc-50/80 text-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
              {milestones.map((m, idx) => (
                <div key={idx} className={`space-y-1 ${idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
                  <div className="text-2xl sm:text-4xl font-display font-extrabold text-red-600">
                    {m.number}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-tight">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images collage */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 h-[380px]">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-md group">
                <Image
                  alt="Custom diamond leather seat cover tailoring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/service-1.png"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-md group">
                <Image
                  alt="7D all-weather floor mat precision fitment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/service-7.png"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">Laser-Cut CNC Pattern Suite</h4>
                  <p className="text-xs text-zinc-500">Automated pattern cutters &amp; double-needle stitching</p>
                </div>
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700"
              >
                <span>Products Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Text Story */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>THE AL RAHMANIAH STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-900 leading-tight">
              Crafted Luxury &amp; Durability Engineered for UAE Weather
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Founded in Sharjah Industrial Area 4 &amp; 5, Al Rahmaniah Auto Accessories has grown into one of the region’s premier automotive styling and accessories studios. We specialize in custom-tailored Napa leather seat covers, 7D molded floor liners, colored safety belts, starlight roof constellations, and car electronics.
            </p>

            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Whether you drive a daily sedan, a rugged 4x4 desert cruiser, a family SUV, or a luxury vehicle, our master craftsmen tailor each accessory with millimetric precision to ensure peak interior comfort, extreme UV heat durability, and head-turning aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Zero Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Precision Custom Fitment</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Up to 3 Years Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Fast UAE Delivery</span>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <Link
                href="/products"
                className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30"
              >
                Explore Products
              </Link>
              <Link
                href="/get-a-quote"
                className="px-8 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-widest rounded-full transition-all border border-zinc-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Grid */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 space-y-3">
            <div className="text-red-600 font-bold uppercase tracking-widest text-xs">
              Why Choose Al Rahmaniah Auto
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-zinc-900">
              6 Pillars of Automotive Excellence
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm max-w-xl mx-auto">
              Our commitment to premium materials, custom fitment, and extreme heat durability sets us apart across Sharjah, Dubai, and all Emirates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-zinc-200 hover:border-red-600/70 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mb-6">
                  {r.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-wide">
                  {r.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real Transformations Banner */}
      <section className="py-20 px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-red-50/50 via-white to-red-50/30 p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
                Real Results &amp; Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 leading-tight">
                Complete Automotive Styling Transformations
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                From custom 3D diamond leather upholstery and 7D all-weather floor liners to starlight roof headliners and Android screens, experience the transformative difference of master craftsmanship.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30"
                >
                  Explore Products
                </Link>
                <Link
                  href="/get-a-quote"
                  className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-widest rounded-full transition-all border border-zinc-200"
                >
                  Request Product Quotation
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
              <Image
                alt="Automotive styling project"
                fill
                className="object-cover"
                src="/images/back-sec.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
