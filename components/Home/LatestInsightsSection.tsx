"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Layers, ShieldCheck, SunMedium, ArrowRight } from "lucide-react";

export default function LatestInsightsSection() {
  const featured = {
    date: "Mar 1, 2026",
    author: "Al Rahmaniah Auto Accessories",
    title: "How Custom Napa Leather Seat Covers Protect Interiors from Extreme UAE Summer Heat",
    image: "/fb-posts/592124585_122194707128549942_2096198504496408305_n.jpg",
    badge: "SEAT COVERS",
    icon: Sparkles,
  };

  const sideArticles = [
    {
      date: "Feb 20, 2026",
      author: "Al Rahmaniah Auto Accessories",
      title: "Why 7D Molded All-Weather Floor Mats Are Essential for Desert Sand & Spills",
      image: "/fb-posts/590817435_122194716200549942_3770877090703741555_n.jpg",
      badge: "FLOOR MATS",
      icon: Layers,
    },
    {
      date: "Feb 10, 2026",
      author: "Al Rahmaniah Auto Accessories",
      title: "Choosing the Right Color Webbing for Custom Sport Seatbelts (OEM Safe)",
      image: "/images/service-3.png",
      badge: "SEATBELTS",
      icon: ShieldCheck,
    },
    {
      date: "Jan 28, 2026",
      author: "Al Rahmaniah Auto Accessories",
      title: "Starlight Roof Headliners: Everything to Know Before Your Constellation Install",
      image: "/images/service-4.png",
      badge: "STARLIGHT",
      icon: SunMedium,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-red-600">
              STYLING &amp; PRODUCT GUIDES
            </span>
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 leading-tight uppercase tracking-tight mb-3">
            Auto Accessories Insights
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Expert advice on materials, custom fitment, UV protection, and premium interior enhancements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Featured Article Card */}
          <div className="border border-zinc-200 rounded-2xl overflow-hidden flex flex-col h-full shadow-xs hover:shadow-lg transition-all">
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold mb-3">
                <span>{featured.date}</span>
                <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                <span>{featured.author}</span>
              </div>
              <h3 className="text-zinc-900 font-bold text-xl sm:text-2xl leading-tight mb-6 hover:text-red-600 transition-colors">
                {featured.title}
              </h3>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mt-auto bg-zinc-100">
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <featured.icon className="w-3 h-3" />
                  <span>{featured.badge}</span>
                </div>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <Link
              href="/products"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-4 text-center transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Side Articles List */}
          <div className="border border-zinc-200 rounded-2xl divide-y divide-zinc-200 h-full shadow-xs flex flex-col justify-between">
            {sideArticles.map((article, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 flex items-center gap-6 group hover:bg-zinc-50 transition-colors grow"
              >
                <div className="grow">
                  <div className="flex items-center gap-2 text-zinc-400 text-[11px] font-bold mb-2">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <span>{article.author}</span>
                  </div>
                  <h4 className="text-zinc-900 font-bold text-sm sm:text-base leading-snug group-hover:text-red-600 transition-colors mb-2">
                    {article.title}
                  </h4>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:underline pt-1"
                  >
                    <span>View Product Specs</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
