"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Percent, Tag } from "lucide-react";

export default function PromoSplitBanners() {
  return (
    <section className="py-16 bg-white text-zinc-900 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Banner 1: AC Summer Saver */}
          <div className="relative rounded-2xl overflow-hidden border border-red-200 bg-gradient-to-br from-red-50/60 via-white to-red-100/30 p-8 flex flex-col justify-between min-h-[340px] group hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="absolute right-0 bottom-0 w-2/3 h-full opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
              <Image
                src="/images/service-3.png"
                alt="AC Repair"
                fill
                className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Percent className="w-3.5 h-3.5" />
                <span>Special Offer - Up to 30% OFF</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 leading-tight">
                AC System Flush &amp; Gas Recharge
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-3 max-w-xs leading-relaxed">
                Beat the UAE heat with computerized refrigerant recharge, antibacterial cabin cleanse &amp; leak detection.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href="/get-a-quote?service=ac-repair"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all group-hover:gap-3 shadow-md shadow-red-600/30"
              >
                <span>Claim Offer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Banner 2: Major Service Package */}
          <div className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-100/30 p-8 flex flex-col justify-between min-h-[340px] group hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="absolute right-0 bottom-0 w-2/3 h-full opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
              <Image
                src="/images/service-7.png"
                alt="Major Service"
                fill
                className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free 35-Point Diagnostic Scan</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 leading-tight">
                Comprehensive Major Service
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-3 max-w-xs leading-relaxed">
                Full synthetic oil change, spark plug inspection, brake fluid flush, and computerized engine scan.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href="/get-a-quote?service=major-service"
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all group-hover:gap-3 shadow-md"
              >
                <span>Book Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Banner 3: Custom Interior Crafts */}
          <div className="relative rounded-2xl overflow-hidden border border-amber-200 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/30 p-8 flex flex-col justify-between min-h-[340px] group hover:border-amber-500 transition-all duration-300 md:col-span-2 lg:col-span-1 shadow-sm hover:shadow-xl">
            <div className="absolute right-0 bottom-0 w-2/3 h-full opacity-25 group-hover:opacity-35 transition-opacity pointer-events-none">
              <Image
                src="/fb-posts/469317378_122127198956549942_2454514240647818107_n.jpg"
                alt="Interior Upholstery"
                fill
                className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Tag className="w-3.5 h-3.5" />
                <span>Custom Automotive Luxury</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 leading-tight">
                3D Diamond Leather Covers
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-3 max-w-xs leading-relaxed">
                Handcrafted OEM fitment tailored for sedans, SUVs &amp; sports cars. High heat tolerance with 3-year warranty.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all group-hover:gap-3 shadow-md shadow-red-600/30"
              >
                <span>Shop Accessories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
