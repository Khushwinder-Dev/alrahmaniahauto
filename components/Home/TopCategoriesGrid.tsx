"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CategoryCard {
  id: number;
  title: string;
  tagline: string;
  image: string;
  badge: string;
  href: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: 1,
    title: "Custom Car Seat Covers",
    tagline: "3D diamond quilted, Napa & perforated leather",
    image: "/images/service-6.png",
    badge: "Best Seller",
    href: "/products?category=seat-covers",
  },
  {
    id: 2,
    title: "7D / 5D Molded Floor Mats",
    tagline: "Waterproof all-weather complete coverage",
    image: "/images/service-10.png",
    badge: "All-Weather",
    href: "/products?category=mats",
  },
  {
    id: 3,
    title: "Custom Colored Seatbelts",
    tagline: "High-tensile certified racing & styling belts",
    image: "/images/service-8.png",
    badge: "Custom Colors",
    href: "/products?category=seatbelts",
  },
  {
    id: 4,
    title: "Starlight Roof Headliners",
    tagline: "Rolls-Royce optic fiber stars & Alcantara",
    image: "/images/service-7.png",
    badge: "VIP Luxury",
    href: "/products?category=headliners",
  },
  {
    id: 5,
    title: "Car Electronics & Audio",
    tagline: "Android touchscreens, DSP amps & dashcams",
    image: "/images/service-2.png",
    badge: "Smart Tech",
    href: "/products?category=electronics",
  },
  {
    id: 6,
    title: "Laser LED Headlamps",
    tagline: "High-lumen laser bulbs & ambient interior lights",
    image: "/images/service-9.png",
    badge: "Ultra Bright",
    href: "/products?category=lighting",
  },
  {
    id: 7,
    title: "Upholstery Leather & Fabrics",
    tagline: "Ultra-durable anti-UV German PVC & Napa",
    image: "/images/service-1.png",
    badge: "UV Resistant",
    href: "/products?category=upholstery",
  },
  {
    id: 8,
    title: "Car Styling & Care Kits",
    tagline: "Sunshades, ceramic coatings & styling accents",
    image: "/images/service-3.png",
    badge: "Protection",
    href: "/products?category=styling",
  },
];

export default function TopCategoriesGrid() {
  return (
    <section className="py-20 bg-zinc-50 text-zinc-900 relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-[0.25em] text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Wolmart Inspired Collections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
              Top Automotive <span className="text-red-600">Categories</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
              Select your vehicle system below for certified repairs, OEM parts replacement, and specialized maintenance in Sharjah.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-900 hover:text-red-600 transition-colors group self-start md:self-auto border-b border-zinc-300 pb-1 hover:border-red-600"
          >
            <span>View All 500+ Accessories</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:border-red-600/70 transition-all duration-500 flex flex-col hover:shadow-xl shadow-xs"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-red-600 shadow-sm border border-red-100">
                    {cat.badge}
                  </span>
                </div>

                {/* Arrow Icon on Hover */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                    {cat.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-500 group-hover:text-red-600">
                  <span>Explore System</span>
                  <span className="text-zinc-400 group-hover:text-red-600">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
